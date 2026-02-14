import { VulgateData } from '../vulgate-data.js';

console.log('Counting words in Vulgate...');

let totalWords = 0;
const uniqueWords = new Set<string>();

function cleanWord(word: string) {
    return word.toLowerCase().replace(/[.,;:!?'"()]/g, '').trim();
}

Object.keys(VulgateData).forEach(bookKey => {
    const book = VulgateData[bookKey];
    Object.values(book.chapters).forEach(chapter => {
        Object.values(chapter).forEach(verse => {
            const text = typeof verse === 'string' ? verse : (verse as any).latin;
            const words = text.split(/\s+/);
            words.forEach((w: string) => {
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
