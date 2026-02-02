const fs = require('fs');
const path = require('path');
const lexiconContent = fs.readFileSync(path.join(__dirname, '../lexicon.js'), 'utf8');

// Mock module.exports
const module = { exports: {} };

// Evaluate the file context
eval(lexiconContent);

const Lexicon = module.exports;

console.log("Looking up 'dixit':", Lexicon.lookup('dixit'));
console.log("Looking up 'dixitque':", Lexicon.lookup('dixitque'));
console.log("Looking up 'Dixitque' (case):", Lexicon.lookup('Dixitque'));
console.log("Looking up 'patrem':", Lexicon.lookup('patrem'));
