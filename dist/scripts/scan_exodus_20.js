import { LatinLexicon } from '../lexicon.js';
import { VulgateData } from '../vulgate-data.js';
console.log('Scanning Exodus 20 coverage...');
const missingWords = new Set();
function cleanWord(word) {
    return word.toLowerCase().replace(/[.,;:!?'"()]/g, '').trim();
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
Object.values(chapter20).forEach(verse => {
    const text = typeof verse === 'string' ? verse : verse.latin;
    const words = text.split(/\s+/);
    words.forEach((rawWord) => {
        const word = cleanWord(rawWord);
        if (!word)
            return;
        if (LatinLexicon.lookup(word))
            return;
        missingWords.add(word);
    });
});
console.log(`Exodus 20 missing words: ${missingWords.size}`);
if (missingWords.size > 0) {
    console.log('Missing:', Array.from(missingWords).sort().join(', '));
}
else {
    console.log('100% coverage for Exodus 20!');
}
