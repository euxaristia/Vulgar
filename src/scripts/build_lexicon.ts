import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';
import { fileURLToPath } from 'url';
import { LatinLexicon } from '../lexicon.js';
import { VulgateData } from '../vulgate-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const lexiconPath = path.join(__dirname, 'latin_dictionary.json');
const outputPath = path.join(__dirname, '../lexicon.ts');

const manualWords = LatinLexicon.words;

const newLexicon: Record<string, any> = {};

function cleanWord(word: string) {
    return word.toLowerCase().replace(/[.,;:!?'"()]/g, '').trim();
}

console.log('Reading dictionary and building lexicon...');

const usedWords = new Set<string>();
Object.values(VulgateData).forEach(book => {
    Object.values(book.chapters).forEach(chapter => {
        Object.values(chapter).forEach(verse => {
            const text = typeof verse === 'string' ? verse : (verse as any).latin;
            text.split(/\s+/).forEach((w: string) => {
                const cw = cleanWord(w);
                if (cw) usedWords.add(cw);
            });
        });
    });
});

console.log(`Total unique words in Vulgate: ${usedWords.size}`);

const fileStream = fs.createReadStream(lexiconPath);
const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    try {
        const entry = JSON.parse(line);
        const headword = entry.headword.toLowerCase();
        
        if (usedWords.has(headword)) {
            if (!newLexicon[headword]) {
                newLexicon[headword] = {
                    lemma: entry.headword,
                    pos: entry.pos,
                    meanings: entry.definitions.slice(0, 3),
                    grammar: entry.morphology || ''
                };
            }
        }

        // Also check inflections if available in the dictionary
        if (entry.forms) {
            entry.forms.forEach((form: string) => {
                const f = form.toLowerCase();
                if (usedWords.has(f)) {
                    if (!newLexicon[f]) {
                        newLexicon[f] = {
                            lemma: entry.headword,
                            pos: entry.pos,
                            meanings: entry.definitions.slice(0, 3),
                            grammar: entry.morphology || ''
                        };
                    }
                }
            });
        }
    } catch (e) {
        // Skip invalid lines
    }
});

rl.on('close', () => {
    console.log(`Built lexicon with ${Object.keys(newLexicon).length} entries.`);
    
    // Merge manual overrides
    Object.keys(manualWords).forEach(word => {
        newLexicon[word] = manualWords[word];
    });

    const output = `export interface LexiconEntry {
    lemma: string;
    pos: string;
    meanings: string[];
    grammar: string;
}

export interface Lexicon {
    words: Record<string, LexiconEntry>;
    lookup(word: string): LexiconEntry | null;
    getTranslation(word: string): string;
}

export const LatinLexicon: Lexicon = {
    words: ${JSON.stringify(newLexicon, null, 4)},
    lookup(word: string) {
        const normalized = word.toLowerCase().replace(/[.,;:!?'"()]/g, '');
        if (this.words[normalized]) return this.words[normalized];
        const suffixes = [
            { suffix: 'que', meaning: ' (+ and)' },
            { suffix: 've', meaning: ' (+ or)' },
            { suffix: 'ne', meaning: ' (?)' }
        ];
        for (const { suffix, meaning } of suffixes) {
            if (normalized.endsWith(suffix)) {
                const base = normalized.slice(0, -suffix.length);
                if (this.words[base]) {
                    const baseEntry = this.words[base];
                    return {
                        lemma: baseEntry.lemma,
                        pos: baseEntry.pos,
                        grammar: baseEntry.grammar + " (with suffix -" + suffix + ")",
                        meanings: baseEntry.meanings.map(m => m + meaning)
                    };
                }
            }
        }
        return null;
    },
    getTranslation(word: string) {
        const entry = this.lookup(word);
        if (entry && entry.meanings && entry.meanings.length > 0) {
            return entry.meanings[0];
        }
        return '?';
    }
};
`;
    fs.writeFileSync(outputPath, output);
    console.log(`Lexicon written to ${outputPath}`);
});
