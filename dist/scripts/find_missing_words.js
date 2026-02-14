import { LatinLexicon } from '../lexicon.js';
import { VulgateData } from '../vulgate-data.js';
console.log('Finding missing words...');
const missingWords = {};
function cleanWord(word) {
    return word.toLowerCase().replace(/[.,;:!?'"()]/g, '').trim();
}
Object.keys(VulgateData).forEach(bookKey => {
    const book = VulgateData[bookKey];
    Object.values(book.chapters).forEach(chapter => {
        Object.values(chapter).forEach(verse => {
            const text = typeof verse === 'string' ? verse : verse.latin;
            const words = text.split(/\s+/);
            words.forEach((rawWord) => {
                const word = cleanWord(rawWord);
                if (!word)
                    return;
                if (LatinLexicon.lookup(word))
                    return;
                missingWords[word] = (missingWords[word] || 0) + 1;
            });
        });
    });
});
const sortedMissing = Object.entries(missingWords)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 100);
console.log('Top 100 missing words:');
sortedMissing.forEach(([word, count]) => {
    console.log(`${word}: ${count}`);
});
