const fs = require('fs');
const path = require('path');

// Mock browser environment for data files
const window = {};
global.window = window;

// Load data files
const vulgateDataContent = fs.readFileSync(path.join(__dirname, '../vulgate-data.js'), 'utf8');
const lexiconContent = fs.readFileSync(path.join(__dirname, '../lexicon.js'), 'utf8');

// Execute files to populate global objects
// We wrap in a block to avoid redeclaration errors if we run multiple times, 
// but primarily we need to handle how 'const' works in eval in this context.
// Actually, 'const' in global scope of eval should attach to global if not in strict mode?
// Let's explicitly attach to global/window in the string before eval.

const vulgateDataScript = vulgateDataContent
    .replace('const VulgateData =', 'global.VulgateData =')
    .replace(/if \(typeof module !== 'undefined'.*$/s, ''); // Remove export block

const lexiconScript = lexiconContent
    .replace('const LatinLexicon =', 'global.LatinLexicon =')
    .replace(/if \(typeof module !== 'undefined'.*$/s, ''); // Remove export block

eval(vulgateDataScript);
eval(lexiconScript);

const VulgateData = global.VulgateData;
const LatinLexicon = global.LatinLexicon;

const missingWords = {};

// Helper to clean punctuation
function cleanWord(word) {
    return word.toLowerCase().replace(/[.,;:?!()"'\u201C\u201D\u2018\u2019-]/g, '').trim();
}

// Scan all books
Object.values(VulgateData).forEach(book => {
    Object.values(book.chapters).forEach(chapter => {
        Object.values(chapter).forEach(verse => {
            const text = typeof verse === 'string' ? verse : verse.latin;
            const words = text.split(/\s+/);

            words.forEach(rawWord => {
                const word = cleanWord(rawWord);
                if (!word) return;

                // Check if word exists
                if (LatinLexicon.words[word]) return;

                // Check suffix rules (which the app handles dynamically)
                // If base word exists, we don't need to add the suffixed version
                const suffixes = ['que', 'ne', 've'];
                let handled = false;
                for (const suffix of suffixes) {
                    if (word.endsWith(suffix)) {
                        const base = word.slice(0, -suffix.length);
                        if (LatinLexicon.words[base]) {
                            handled = true;
                            break;
                        }
                    }
                }
                if (handled) return;

                if (!LatinLexicon.words[word]) {
                    missingWords[word] = (missingWords[word] || 0) + 1;
                }
            });
        });
    });
});

// Sort by frequency
const sortedMissing = Object.entries(missingWords)
    .sort((a, b) => b[1] - a[1]);

console.log(`Found ${sortedMissing.length} missing words.`);

// Generate skeleton entries for ALL missing words
console.log('\n--- SKELETON JSON ---');
sortedMissing.forEach(([word, count]) => {
    // Basic heuristic to guess POS or Lemma could go here, but for now just the skeleton
    // We check if it ends in certain suffixes to guess grammar? Too risky.
    // Just output the template.
    console.log(`        '${word}': { lemma: '${word}', pos: 'unknown', meanings: ['???'], grammar: 'Frequency: ${count}' },`);
});
console.log('---------------------');

