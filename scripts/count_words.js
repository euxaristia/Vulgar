const fs = require('fs');
const path = require('path');

const vulgateDataContent = fs.readFileSync(path.join(__dirname, '../vulgate-data.js'), 'utf8');
const vulgateDataScript = vulgateDataContent
    .replace('const VulgateData =', 'global.VulgateData =')
    .replace(/if \(typeof module !== 'undefined'.*$/s, '');

eval(vulgateDataScript);
const VulgateData = global.VulgateData;

const allWords = new Set();
let wordCount = 0;

function cleanWord(word) {
    return word.toLowerCase().replace(/[.,;:?!()"'\u201C\u201D\u2018\u2019\-]/g, '').trim();
}

Object.values(VulgateData).forEach(book => {
    Object.values(book.chapters).forEach(chapter => {
        Object.values(chapter).forEach(verse => {
            // Handle if verse is string or object (legacy format had objects)
            const text = typeof verse === 'string' ? verse : verse.latin;
            if (!text) return;

            text.split(/\s+/).forEach(w => {
                const cleaned = cleanWord(w);
                if (cleaned) {
                    allWords.add(cleaned);
                    wordCount++;
                }
            });
        });
    });
});

console.log(`Total Words: ${wordCount}`);
console.log(`Unique Words: ${allWords.size}`);
