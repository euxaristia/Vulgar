import { VulgateData } from '../vulgate-data.js';
console.log('Counting words in Vulgate...');
let totalWords = 0;
const uniqueWords = new Set();
function cleanWord(word) {
    return word.toLowerCase().replace(/[.,;:!?'"()]/g, '').trim();
}
Object.keys(VulgateData).forEach(bookKey => {
    const book = VulgateData[bookKey];
    Object.values(book.chapters).forEach(chapter => {
        Object.values(chapter).forEach(verse => {
            const text = typeof verse === 'string' ? verse : verse.latin;
            const words = text.split(/\s+/);
            words.forEach((w) => {
                const cw = cleanWord(w);
                if (cw) {
                    totalWords++;
                    uniqueWords.add(cw);
                }
            });
        });
    });
});
console.log(`Total words: ${totalWords}`);
console.log(`Unique words: ${uniqueWords.size}`);
