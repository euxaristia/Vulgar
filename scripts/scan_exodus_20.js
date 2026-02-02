const fs = require('fs');
const path = require('path');

// Mock browser environment for data files
const window = {};
global.window = window;

// Load data files
const vulgateDataContent = fs.readFileSync(path.join(__dirname, '../vulgate-data.js'), 'utf8');
const lexiconContent = fs.readFileSync(path.join(__dirname, '../lexicon.js'), 'utf8');

const vulgateDataScript = vulgateDataContent
    .replace('const VulgateData =', 'global.VulgateData =')
    .replace(/if \(typeof module !== 'undefined'.*$/s, '');

const lexiconScript = lexiconContent
    .replace('const LatinLexicon =', 'global.LatinLexicon =')
    .replace(/if \(typeof module !== 'undefined'.*$/s, '');

eval(vulgateDataScript);
eval(lexiconScript);

const VulgateData = global.VulgateData;
const LatinLexicon = global.LatinLexicon;

const missingWords = new Set();

function cleanWord(word) {
    return word.toLowerCase().replace(/[.,;:?!()"'\u201C\u201D\u2018\u2019-]/g, '').trim();
}

const exodus = VulgateData['exodus'];
if (!exodus) {
    console.error('Exodus not found in data!');
    process.exit(1);
}

const chapter20 = exodus.chapters['20'];
if (!chapter20) {
    console.error('Exodus 20 not found in data!');
    process.exit(1);
}

// Check other keys if '20' is not it. sometimes keys are numbers or strings.
// Let's assume it worked or iterate keys if unsure.

Object.values(chapter20).forEach(verse => {
    const text = typeof verse === 'string' ? verse : verse.latin;
    const words = text.split(/\s+/);
    words.forEach(rawWord => {
        const word = cleanWord(rawWord);
        if (!word) return;

        if (LatinLexicon.words[word]) return;

        // Suffix check
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

        missingWords.add(word);
    });
});

console.log('--- MISSING IN EXODUS 20 ---');
// Output format for easy copy-paste
missingWords.forEach(word => {
    console.log(`        '${word}': { lemma: '${word}', pos: 'unknown', meanings: ['???'], grammar: 'Exodus 20' },`);
});
console.log('----------------------------');
