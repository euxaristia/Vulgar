const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'temp_vulgate.json');
const rawData = fs.readFileSync(sourcePath, 'utf8');
const source = JSON.parse(rawData);

const newVulgateData = {};

function normalizeKey(name) {
    return name.toLowerCase().replace(/\s+/g, '_');
}

let currentTestament = 'OT';

source.books.forEach((book, index) => {
    const key = normalizeKey(book.name);

    // Switch to NT at Matthew
    if (book.name === 'Matthaeus') {
        currentTestament = 'NT';
    }

    const bookData = {
        name: book.name,
        testament: currentTestament,
        order: index + 1,
        chapters: {}
    };

    book.chapters.forEach(chap => {
        const chapNum = chap.chapter;
        const chapData = {};

        chap.verses.forEach(v => {
            chapData[v.verse] = v.text.trim();
        });

        bookData.chapters[chapNum] = chapData;
    });

    newVulgateData[key] = bookData;
});

// Create the file content
const fileContent = `// Vulgar - Bible Data
// Full Clementine Vulgate Text
// Imported from api.getbible.net/v2/vulgate.json

const VulgateData = ${JSON.stringify(newVulgateData, null, 4)};

if (typeof module !== 'undefined') {
    module.exports = VulgateData;
}
`;

fs.writeFileSync(path.join(__dirname, '../vulgate-data.js'), fileContent);
console.log('Import complete. Wrote vulgate-data.js');
