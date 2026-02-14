import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'temp_vulgate.json');
const outputPath = path.join(__dirname, '../vulgate-data.ts');

function normalizeKey(name: string) {
    return name.toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, '');
}

console.log('Importing Vulgate text...');

const rawData = fs.readFileSync(inputPath, 'utf8');
const source = JSON.parse(rawData);

const newVulgateData: Record<string, any> = {};

source.books.forEach((book: any) => {
    const key = normalizeKey(book.name);
    const bookData: any = {
        name: book.name,
        testament: book.testament,
        order: book.order,
        chapters: {}
    };

    book.chapters.forEach((chap: any) => {
        const chapNum = chap.chapter.toString();
        const chapData: Record<string, string> = {};

        chap.verses.forEach((v: any) => {
            chapData[v.verse.toString()] = v.text.trim();
        });

        bookData.chapters[chapNum] = chapData;
    });

    newVulgateData[key] = bookData;
});

const output = `export interface Chapter {
    [verseNumber: string]: string;
}

export interface VulgateBook {
    name: string;
    testament: "OT" | "NT";
    order: number;
    chapters: {
        [chapterNumber: string]: Chapter;
    };
}

export interface BibleData {
    [bookKey: string]: VulgateBook;
}

export const VulgateData: BibleData = ${JSON.stringify(newVulgateData, null, 4)};
`;

fs.writeFileSync(outputPath, output);
console.log(`Vulgate data written to ${outputPath}`);
