import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { LatinLexicon } from '../lexicon.js';
import { VulgateData } from '../vulgate-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Analyzing lexicon coverage...');

let totalWords = 0;
let coveredWords = 0;
const missingWords = new Set<string>();

Object.keys(VulgateData).forEach(bookKey => {
    const book = VulgateData[bookKey];
    Object.values(book.chapters).forEach(chapter => {
        Object.values(chapter).forEach(verse => {
            const verseText = typeof verse === 'object' ? (verse as any).latin : (verse as string);
            const words = verseText.toLowerCase().replace(/[.,;:!?'"()]/g, '').split(/\s+/);

            words.forEach((word: string) => {
                if (!word) return;
                totalWords++;

                const cleanWord = word.trim();
                if (LatinLexicon.words[cleanWord] || LatinLexicon.lookup(cleanWord)) {
                    coveredWords++;
                } else {
                    missingWords.add(cleanWord);
                }
            });
        });
    });
});

const coverage = (coveredWords / totalWords) * 100;
console.log(`Total words: ${totalWords}`);
console.log(`Covered words: ${coveredWords}`);
console.log(`Coverage: ${coverage.toFixed(2)}%`);
console.log(`Unique missing words: ${missingWords.size}`);

// Save missing words to a file
fs.writeFileSync(path.join(__dirname, 'missing_words.txt'), Array.from(missingWords).sort().join('\n'));
console.log('Missing words saved to missing_words.txt');
