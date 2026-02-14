import { LatinLexicon } from '../lexicon.js';
console.log('Debugging Lexicon...');
const wordsToTest = ['dixit', 'dixitque', 'Dixitque', 'patrem', 'terra', 'in'];
wordsToTest.forEach(word => {
    console.log(`Looking up '${word}':`, LatinLexicon.lookup(word));
});
console.log("Translation of 'creavit':", LatinLexicon.getTranslation('creavit'));
