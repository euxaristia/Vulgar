const fs = require('fs');
const path = require('path');

// Load data files (assuming they are in the same directory and valid JS/JSON-like)
// We'll read them as strings and eval/parse because they are JS files with exports
// simpler to just require them if they were proper modules, but they might depend on browser context
// Let's try to parse them or mock the environment

const vulgateContent = fs.readFileSync(path.join(__dirname, '../vulgate-data.js'), 'utf8');
const lexiconContent = fs.readFileSync(path.join(__dirname, '../lexicon.js'), 'utf8');

// Mock browser globals
const window = {};
let VulgateData = {};
let LatinLexicon = {};

// Clean up content to be eval-able or just extract what we need
// lexicon.js has `const LatinLexicon = { ... }`
// vulgate-data.js has `const VulgateData = { ... }`

// Quick hack to load them
eval(lexiconContent.replace('const LatinLexicon', 'LatinLexicon').replace('module.exports = LatinLexicon;', ''));
eval(vulgateContent.replace('const VulgateData', 'VulgateData').replace('module.exports = VulgateData;', ''));

const missingWords = new Set();
const totalWords = new Set();

// Iterate through VulgateData
Object.values(VulgateData).forEach(book => {
    Object.values(book.chapters).forEach(chapter => {
        Object.values(chapter).forEach(verse => {
            const verseText = typeof verse === 'object' ? verse.latin : verse;
            // Split into words, cleaning punctuation
            const words = verseText.split(/\s+/);
            words.forEach(word => {
                const cleanWord = word.replace(/[.,:;?!'"()]+/g, '').toLowerCase();
                if (!cleanWord) return;

                totalWords.add(cleanWord);

                if (!LatinLexicon.words[cleanWord]) {
                    missingWords.add(cleanWord);
                }
            });
        });
    });
});

console.log(`Missing count: ${missingWords.size}`);
console.log(JSON.stringify(Array.from(missingWords).sort()));
