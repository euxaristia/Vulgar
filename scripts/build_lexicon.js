const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 1. Load Vulgate Data
console.log('Loading Vulgate data...');
const vulgateDataContent = fs.readFileSync(path.join(__dirname, '../vulgate-data.js'), 'utf8');
const vulgateDataScript = vulgateDataContent
    .replace('const VulgateData =', 'global.VulgateData =')
    .replace(/if \(typeof module !== 'undefined'.*$/s, '');

eval(vulgateDataScript); // Loads global.VulgateData
const VulgateData = global.VulgateData;

// 2. Load Manual Lexicon
console.log('Loading manual lexicon...');
const lexiconContent = fs.readFileSync(path.join(__dirname, '../lexicon.js'), 'utf8');
const lexiconScript = lexiconContent
    .replace('const LatinLexicon =', 'global.LatinLexicon =')
    .replace(/if \(typeof module !== 'undefined'.*$/s, '');

eval(lexiconScript); // Loads global.LatinLexicon
const manualWords = global.LatinLexicon.words;
console.log(`Loaded ${Object.keys(manualWords).length} manual entries.`);

// 3. Find Required Words
const requiredWords = new Set();
// Always include manual words
Object.keys(manualWords).forEach(w => requiredWords.add(w.toLowerCase()));

function cleanWord(word) {
    return word.toLowerCase().replace(/[.,;:?!()"'\u201C\u201D\u2018\u2019\-]/g, '').trim();
}

Object.values(VulgateData).forEach(book => {
    Object.values(book.chapters).forEach(chapter => {
        Object.values(chapter).forEach(verse => {
            const text = typeof verse === 'string' ? verse : verse.latin;
            if (!text) return;
            text.split(/\s+/).forEach(w => {
                const cleaned = cleanWord(w);
                if (cleaned) requiredWords.add(cleaned);
            });
        });
    });
});

console.log(`Found ${requiredWords.size} unique words (text + manual).`);

// 4. Stream Dictionary
const dictionaryPath = path.join(__dirname, 'latin_dictionary.json');
const fileStream = fs.createReadStream(dictionaryPath);
const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});

const newLexicon = {};
let matchedCount = 0;

console.log('Scanning dictionary...');

rl.on('line', (line) => {
    try {
        if (!line) return;
        const entry = JSON.parse(line);
        const headword = entry['']; // Word itself
        const pos = entry['p'] ? entry['p'].join(', ') : 'unknown';
        const definitions = entry['d'] || [];
        const forms = entry['f'] || [];

        // Check headword
        if (requiredWords.has(headword)) {
            if (!newLexicon[headword]) {
                newLexicon[headword] = {
                    lemma: headword,
                    pos: pos,
                    meanings: definitions,
                    grammar: 'Dictionary Entry'
                };
                matchedCount++;
            }
        }

        // Check forms
        forms.forEach(form => {
            if (requiredWords.has(form)) {
                if (!newLexicon[form]) {
                    newLexicon[form] = {
                        lemma: headword,
                        pos: pos,
                        meanings: definitions,
                        grammar: `Form of ${headword}`
                    };
                    matchedCount++;
                }
            }
        });

    } catch (e) {
        // ignore
    }
});

rl.on('close', () => {
    // 5. Overwrite with Manual Entries (Highest Priority)
    Object.keys(manualWords).forEach(word => {
        newLexicon[word] = manualWords[word];
    });

    console.log(`Matched ${matchedCount} words from dictionary.`);
    console.log(`Final Lexicon Size: ${Object.keys(newLexicon).length}`);

    const output = {
        words: newLexicon
    };

    fs.writeFileSync(path.join(__dirname, '../lexicon.json'), JSON.stringify(output, null, 2));
    console.log('Wrote lexicon.json');
});
