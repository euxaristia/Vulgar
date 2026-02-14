// Vulgar - Latin Vulgate Bible Reader
import { LatinLexicon } from './lexicon.js';
import { VulgateData } from './vulgate-data.js';
class VulgateReader {
    currentBook = null;
    currentChapter = null;
    tooltip;
    versesContainer;
    welcomeMessage;
    bookSelect;
    chapterSelect;
    prevButton;
    nextButton;
    pinnedBubble = null;
    constructor() {
        this.tooltip = document.getElementById('tooltip');
        this.versesContainer = document.getElementById('verses-container');
        this.welcomeMessage = document.getElementById('welcome-message');
        this.bookSelect = document.getElementById('book-select');
        this.chapterSelect = document.getElementById('chapter-select');
        this.prevButton = document.getElementById('prev-chapter');
        this.nextButton = document.getElementById('next-chapter');
        this.init();
    }
    init() {
        this.populateBookSelect();
        this.bindEvents();
        this.restoreLastPosition();
    }
    restoreLastPosition() {
        const savedBook = localStorage.getItem('vulgar_book');
        const savedChapter = localStorage.getItem('vulgar_chapter');
        if (savedBook && VulgateData[savedBook]) {
            const chapter = savedChapter ? parseInt(savedChapter) : 1;
            this.loadPosition(savedBook, chapter);
        }
        else {
            // Default to Gospel of John, chapter 1
            this.loadPosition('john', 1);
        }
    }
    savePosition() {
        if (this.currentBook && this.currentChapter) {
            localStorage.setItem('vulgar_book', this.currentBook);
            localStorage.setItem('vulgar_chapter', this.currentChapter.toString());
        }
    }
    loadPosition(bookKey, chapterNum) {
        if (VulgateData[bookKey]) {
            this.currentBook = bookKey;
            this.currentChapter = chapterNum;
            this.bookSelect.value = bookKey;
            this.populateChapterSelect(bookKey);
            this.chapterSelect.value = chapterNum.toString();
            this.loadChapter(bookKey, chapterNum);
            this.updateNavigationButtons();
        }
    }
    populateBookSelect() {
        // Group books by testament
        const otBooks = [];
        const ntBooks = [];
        Object.keys(VulgateData).forEach(bookKey => {
            const book = VulgateData[bookKey];
            if (book.testament === 'OT') {
                otBooks.push({ key: bookKey, name: book.name, order: book.order || 0 });
            }
            else {
                ntBooks.push({ key: bookKey, name: book.name, order: book.order || 0 });
            }
        });
        // Sort by order
        otBooks.sort((a, b) => a.order - b.order);
        ntBooks.sort((a, b) => a.order - b.order);
        // Add Old Testament group
        if (otBooks.length > 0) {
            const otGroup = document.createElement('optgroup');
            otGroup.label = 'Vetus Testamentum (Old Testament)';
            otBooks.forEach(book => {
                const option = document.createElement('option');
                option.value = book.key;
                option.textContent = book.name;
                otGroup.appendChild(option);
            });
            this.bookSelect.appendChild(otGroup);
        }
        // Add New Testament group
        if (ntBooks.length > 0) {
            const ntGroup = document.createElement('optgroup');
            ntGroup.label = 'Novum Testamentum (New Testament)';
            ntBooks.forEach(book => {
                const option = document.createElement('option');
                option.value = book.key;
                option.textContent = book.name;
                ntGroup.appendChild(option);
            });
            this.bookSelect.appendChild(ntGroup);
        }
    }
    populateChapterSelect(bookKey) {
        this.chapterSelect.innerHTML = '<option value="">Capitulum...</option>';
        if (!bookKey || !VulgateData[bookKey]) {
            this.chapterSelect.disabled = true;
            return;
        }
        const book = VulgateData[bookKey];
        const chapters = Object.keys(book.chapters).map(Number).sort((a, b) => a - b);
        chapters.forEach(chapterNum => {
            const option = document.createElement('option');
            option.value = chapterNum.toString();
            option.textContent = `Capitulum ${chapterNum}`;
            this.chapterSelect.appendChild(option);
        });
        this.chapterSelect.disabled = false;
    }
    bindEvents() {
        // Book selection
        this.bookSelect.addEventListener('change', (e) => {
            const bookKey = e.target.value;
            this.currentBook = bookKey;
            this.currentChapter = null;
            this.populateChapterSelect(bookKey);
            this.updateNavigationButtons();
            if (!bookKey) {
                this.showWelcome();
            }
        });
        // Chapter selection
        this.chapterSelect.addEventListener('change', (e) => {
            const chapter = parseInt(e.target.value);
            if (!isNaN(chapter)) {
                this.currentChapter = chapter;
                if (this.currentBook) {
                    this.loadChapter(this.currentBook, chapter);
                    this.updateNavigationButtons();
                    this.savePosition();
                }
            }
        });
        // Navigation buttons
        this.prevButton.addEventListener('click', () => this.navigatePrev());
        this.nextButton.addEventListener('click', () => this.navigateNext());
        // Tooltip events
        this.pinnedBubble = null;
        // Click to toggle
        document.addEventListener('click', (e) => {
            const target = e.target;
            const bubble = target.closest('.word-bubble:not(.punctuation)');
            if (bubble) {
                // Clicked a bubble
                if (this.pinnedBubble === bubble) {
                    // Unpin and hide
                    this.pinnedBubble = null;
                    this.hideTooltip();
                }
                else {
                    // Pin new bubble
                    this.pinnedBubble = bubble;
                    this.showTooltip(bubble, e);
                }
            }
            else if (!target.closest('#tooltip')) {
                // Clicked elsewhere - unpin and hide
                if (this.pinnedBubble) {
                    this.pinnedBubble = null;
                    this.hideTooltip();
                }
            }
        });
        // Hover events
        document.addEventListener('mouseover', (e) => {
            if (this.pinnedBubble)
                return; // Don't change if pinned
            const target = e.target;
            const bubble = target.closest('.word-bubble:not(.punctuation)');
            if (bubble) {
                this.showTooltip(bubble, e);
            }
        });
        document.addEventListener('mouseout', (e) => {
            if (this.pinnedBubble)
                return; // Don't hide if pinned
            const target = e.target;
            if (target.closest('.word-bubble')) {
                this.hideTooltip();
            }
        });
        document.addEventListener('mousemove', (e) => {
            if (this.pinnedBubble)
                return; // Don't move if pinned
            if (!this.tooltip.classList.contains('hidden')) {
                this.positionTooltip(e);
            }
        });
        // Hide tooltip on scroll (if not pinned)
        window.addEventListener('scroll', () => {
            if (!this.pinnedBubble) {
                this.hideTooltip();
            }
        });
    }
    showWelcome() {
        this.welcomeMessage.style.display = 'block';
        this.versesContainer.innerHTML = '';
    }
    hideWelcome() {
        this.welcomeMessage.style.display = 'none';
    }
    loadChapter(bookKey, chapterNum) {
        if (!VulgateData[bookKey] || !VulgateData[bookKey].chapters[chapterNum.toString()]) {
            this.versesContainer.innerHTML = '<p class="loading">Capitulum not found</p>';
            return;
        }
        this.hideWelcome();
        this.versesContainer.innerHTML = '';
        const book = VulgateData[bookKey];
        const chapter = book.chapters[chapterNum.toString()];
        // Add chapter header
        const header = document.createElement('h2');
        header.className = 'chapter-header';
        header.textContent = `${book.name} ${chapterNum}`;
        header.style.cssText = 'text-align: center; color: #ffc66d; margin-bottom: 1.5rem; font-weight: normal;';
        this.versesContainer.appendChild(header);
        // Render verses
        Object.keys(chapter).map(Number).sort((a, b) => a - b).forEach(verseNum => {
            const verseData = chapter[verseNum.toString()];
            this.renderVerse(verseNum.toString(), verseData);
        });
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    renderVerse(verseNum, verseData) {
        const container = document.createElement('div');
        container.className = 'verse-container';
        // Handle both string (legacy) and object (new) formats
        const latinText = typeof verseData === 'object' ? verseData.latin : verseData;
        // Create verse number
        const numberSpan = document.createElement('span');
        numberSpan.className = 'verse-number';
        numberSpan.textContent = verseNum;
        container.appendChild(numberSpan);
        // Create content wrapper
        const contentDiv = document.createElement('div');
        contentDiv.className = 'verse-content';
        // Latin Text (Word Bubbles)
        const latinDiv = document.createElement('div');
        latinDiv.className = 'verse-words';
        const wordInfos = this.parseWords(latinText);
        wordInfos.forEach(wordInfo => {
            const bubble = this.createWordBubble(wordInfo);
            bubble.addEventListener('mouseenter', (e) => this.showTooltip(bubble, e));
            bubble.addEventListener('click', (e) => this.toggleTooltip(bubble, e));
            latinDiv.appendChild(bubble);
        });
        contentDiv.appendChild(latinDiv);
        container.appendChild(contentDiv);
        this.versesContainer.appendChild(container);
    }
    toggleTooltip(bubble, event) {
        if (this.pinnedBubble === bubble) {
            this.pinnedBubble = null;
            this.hideTooltip();
        }
        else {
            this.pinnedBubble = bubble;
            this.showTooltip(bubble, event);
        }
    }
    clearVerses() {
        this.versesContainer.innerHTML = '';
    }
    parseWords(text) {
        const result = [];
        const tokens = text.split(/\s+/);
        tokens.forEach(token => {
            if (!token)
                return;
            if (/^[.,;:!?'"()]+$/.test(token)) {
                result.push({ word: token, isPunctuation: true });
                return;
            }
            const leadingMatch = token.match(/^(['"(]+)/);
            if (leadingMatch) {
                result.push({ word: leadingMatch[1], isPunctuation: true });
                token = token.slice(leadingMatch[1].length);
            }
            const trailingMatch = token.match(/([.,;:!?'")+]+)$/);
            let trailingPunct = '';
            if (trailingMatch) {
                trailingPunct = trailingMatch[1];
                token = token.slice(0, -trailingPunct.length);
            }
            if (token) {
                result.push({ word: token, isPunctuation: false });
            }
            if (trailingPunct) {
                result.push({ word: trailingPunct, isPunctuation: true });
            }
        });
        return result;
    }
    createWordBubble(wordInfo) {
        const bubble = document.createElement('div');
        bubble.className = 'word-bubble' + (wordInfo.isPunctuation ? ' punctuation' : '');
        const latin = document.createElement('span');
        latin.className = 'word-latin';
        latin.textContent = wordInfo.word;
        bubble.appendChild(latin);
        if (!wordInfo.isPunctuation) {
            const translation = document.createElement('span');
            translation.className = 'word-translation';
            translation.textContent = LatinLexicon.getTranslation(wordInfo.word.toLowerCase()) || LatinLexicon.getTranslation(wordInfo.word);
            bubble.appendChild(translation);
            bubble.dataset.word = wordInfo.word;
        }
        return bubble;
    }
    showTooltip(bubble, event) {
        const word = bubble.dataset.word;
        if (!word)
            return;
        const entry = LatinLexicon.lookup(word.toLowerCase()) || LatinLexicon.lookup(word);
        const wordEl = this.tooltip.querySelector('.tooltip-word');
        if (wordEl)
            wordEl.textContent = word;
        if (entry) {
            const posEl = this.tooltip.querySelector('.tooltip-pos');
            if (posEl)
                posEl.textContent = entry.pos || '';
            const lemmaEl = this.tooltip.querySelector('.tooltip-lemma');
            const lemmaSection = lemmaEl.closest('.tooltip-section');
            const lemma = entry.lemma || word;
            lemmaEl.textContent = lemma;
            if (lemma.toLowerCase() === word.toLowerCase()) {
                lemmaSection.style.display = 'none';
            }
            else {
                lemmaSection.style.display = 'block';
            }
            const meaningsList = this.tooltip.querySelector('.tooltip-meanings');
            meaningsList.innerHTML = '';
            (entry.meanings || []).forEach(meaning => {
                const li = document.createElement('li');
                li.textContent = meaning;
                meaningsList.appendChild(li);
            });
            const grammarSection = this.tooltip.querySelector('.tooltip-grammar');
            const grammarText = this.tooltip.querySelector('.tooltip-grammar-text');
            if (entry.grammar) {
                grammarSection.style.display = 'block';
                grammarText.textContent = entry.grammar;
            }
            else {
                grammarSection.style.display = 'none';
            }
        }
        else {
            const posEl = this.tooltip.querySelector('.tooltip-pos');
            if (posEl)
                posEl.textContent = 'unknown';
            const lemmaEl = this.tooltip.querySelector('.tooltip-lemma');
            const lemmaSection = lemmaEl.closest('.tooltip-section');
            lemmaSection.style.display = 'none';
            const meaningsList = this.tooltip.querySelector('.tooltip-meanings');
            meaningsList.innerHTML = '<li>No definition available</li>';
            const grammarSection = this.tooltip.querySelector('.tooltip-grammar');
            grammarSection.style.display = 'none';
        }
        this.tooltip.classList.remove('hidden');
        if (this.pinnedBubble) {
            this.positionTooltipNearElement(bubble);
        }
        else {
            this.positionTooltip(event);
        }
    }
    positionTooltip(event) {
        const padding = 15;
        const tooltipRect = this.tooltip.getBoundingClientRect();
        let x = event.clientX + padding;
        let y = event.clientY + padding;
        if (x + tooltipRect.width > window.innerWidth) {
            x = event.clientX - tooltipRect.width - padding;
        }
        if (y + tooltipRect.height > window.innerHeight) {
            y = event.clientY - tooltipRect.height - padding;
        }
        x = Math.max(padding, x);
        y = Math.max(padding, y);
        this.tooltip.style.left = x + 'px';
        this.tooltip.style.top = y + 'px';
    }
    positionTooltipNearElement(element) {
        const padding = 10;
        const rect = element.getBoundingClientRect();
        const tooltipRect = this.tooltip.getBoundingClientRect();
        let top = rect.bottom + padding;
        let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        if (top + tooltipRect.height > window.innerHeight) {
            top = rect.top - tooltipRect.height - padding;
        }
        left = Math.max(padding, Math.min(left, window.innerWidth - tooltipRect.width - padding));
        this.tooltip.style.left = left + 'px';
        this.tooltip.style.top = top + 'px';
    }
    hideTooltip() {
        this.tooltip.classList.add('hidden');
    }
    updateNavigationButtons() {
        if (!this.currentBook || !this.currentChapter) {
            this.prevButton.disabled = true;
            this.nextButton.disabled = true;
            return;
        }
        const book = VulgateData[this.currentBook];
        const chapters = Object.keys(book.chapters).map(Number).sort((a, b) => a - b);
        this.prevButton.disabled = this.currentChapter <= chapters[0];
        this.nextButton.disabled = this.currentChapter >= chapters[chapters.length - 1];
    }
    navigatePrev() {
        if (!this.currentBook || !this.currentChapter)
            return;
        const book = VulgateData[this.currentBook];
        const chapters = Object.keys(book.chapters).map(Number).sort((a, b) => a - b);
        const currentIndex = chapters.indexOf(this.currentChapter);
        if (currentIndex > 0) {
            this.currentChapter = chapters[currentIndex - 1];
            this.chapterSelect.value = this.currentChapter.toString();
            this.loadChapter(this.currentBook, this.currentChapter);
            this.updateNavigationButtons();
            this.savePosition();
        }
    }
    navigateNext() {
        if (!this.currentBook || !this.currentChapter)
            return;
        const book = VulgateData[this.currentBook];
        const chapters = Object.keys(book.chapters).map(Number).sort((a, b) => a - b);
        const currentIndex = chapters.indexOf(this.currentChapter);
        if (currentIndex < chapters.length - 1) {
            this.currentChapter = chapters[currentIndex + 1];
            this.chapterSelect.value = this.currentChapter.toString();
            this.loadChapter(this.currentBook, this.currentChapter);
            this.updateNavigationButtons();
            this.savePosition();
        }
    }
    scrollToVerse(verseNum) {
        setTimeout(() => {
            const verseElement = document.getElementById(`verse-${verseNum}`);
            if (verseElement) {
                verseElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                const originalTransition = verseElement.style.transition;
                const originalBg = verseElement.style.backgroundColor;
                verseElement.style.transition = 'background-color 0.5s';
                verseElement.style.backgroundColor = 'rgba(255, 198, 109, 0.3)';
                setTimeout(() => {
                    verseElement.style.backgroundColor = originalBg;
                    verseElement.style.transition = originalTransition;
                }, 2000);
            }
        }, 800);
    }
}
class SearchController {
    reader;
    overlay;
    input;
    resultsContainer;
    isOpen = false;
    constructor(reader) {
        this.reader = reader;
        this.overlay = document.getElementById('search-overlay');
        this.input = document.getElementById('search-input');
        this.resultsContainer = document.getElementById('search-results');
        this.bindEvents();
    }
    bindEvents() {
        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && !this.isOpen) {
                e.preventDefault();
                this.open();
            }
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.close();
            }
        });
        this.input.addEventListener('input', () => this.performSearch());
    }
    open() {
        this.overlay.classList.remove('hidden');
        this.input.focus();
        this.isOpen = true;
    }
    close() {
        this.overlay.classList.add('hidden');
        this.input.value = '';
        this.clearResults();
        this.isOpen = false;
    }
    performSearch() {
        const query = this.input.value.trim().toLowerCase();
        this.clearResults();
        if (query.length < 2)
            return;
        const results = [];
        const navResult = this.checkNavigation(query);
        if (navResult)
            results.push(navResult);
        const lexiconResults = this.searchLexicon(query);
        results.push(...lexiconResults);
        const textResults = this.searchText(query);
        results.push(...textResults);
        const englishMatches = lexiconResults.filter(r => r.scoreType === 'english');
        if (englishMatches.length > 0) {
            const latinWords = [...new Set(englishMatches.slice(0, 3).map(r => r.latinWord))];
            latinWords.forEach(latinWord => {
                if (latinWord.toLowerCase() === query)
                    return;
                const derivedResults = this.searchText(latinWord);
                if (derivedResults.length > 0) {
                    results.push({
                        type: 'verse (related)',
                        label: `Verses containing '${latinWord}'`,
                        sub: `(Match for "${query}")`,
                        action: () => { }
                    });
                    derivedResults.forEach(r => {
                        r.type = `verse (${latinWord})`;
                    });
                    results.push(...derivedResults);
                }
            });
        }
        this.displayResults(results);
    }
    checkNavigation(query) {
        const match = query.match(/^(\d?\s?[a-z]+)\s+(\d+)(?::(\d+))?$/);
        if (!match)
            return null;
        const bookName = match[1];
        const chapterNum = parseInt(match[2]);
        const verseNum = match[3] ? parseInt(match[3]) : null;
        const bookKey = Object.keys(VulgateData).find(key => {
            const book = VulgateData[key];
            return book.name.toLowerCase().startsWith(bookName) ||
                book.abbrev?.toLowerCase() === bookName ||
                key.toLowerCase() === bookName;
        });
        if (bookKey && VulgateData[bookKey].chapters[chapterNum.toString()]) {
            let label = `Go to ${VulgateData[bookKey].name} ${chapterNum}`;
            if (verseNum) {
                label += `:${verseNum}`;
            }
            return {
                type: 'navigation',
                label: label,
                sub: 'Navigation',
                action: () => {
                    this.reader.loadPosition(bookKey, chapterNum);
                    this.reader.savePosition();
                    if (verseNum) {
                        this.reader.scrollToVerse(verseNum);
                    }
                    this.close();
                }
            };
        }
        return null;
    }
    searchLexicon(query) {
        const results = [];
        Object.keys(LatinLexicon.words).forEach(word => {
            const entry = LatinLexicon.words[word];
            const lowerWord = word.toLowerCase();
            const lowerLemma = (entry.lemma || '').toLowerCase();
            let score = 0;
            let matchType = '';
            if (lowerWord === query || lowerLemma === query) {
                score = 100;
                matchType = 'latin-exact';
            }
            else if (entry.meanings.some(m => m.toLowerCase() === query)) {
                score = 80;
                matchType = 'english';
            }
            else if (lowerWord.startsWith(query) || lowerLemma.startsWith(query)) {
                score = 60;
                matchType = 'latin-partial';
            }
            else if (entry.meanings.some(m => m.toLowerCase().includes(query))) {
                score = 40;
                matchType = 'english';
            }
            if (score > 0) {
                results.push({
                    type: 'lexicon',
                    label: word,
                    latinWord: word,
                    score: score,
                    scoreType: matchType,
                    sub: `${entry.pos} • ${entry.meanings.join(', ')}`,
                    action: () => {
                        console.log('Selected word:', word);
                    }
                });
            }
        });
        results.sort((a, b) => (b.score || 0) - (a.score || 0));
        return results.slice(0, 5);
    }
    getSnippet(text, query) {
        const index = text.toLowerCase().indexOf(query);
        if (index === -1)
            return text;
        const start = Math.max(0, index - 20);
        const end = Math.min(text.length, index + query.length + 20);
        let snippet = text.substring(start, end);
        if (start > 0)
            snippet = '...' + snippet;
        if (end < text.length)
            snippet = snippet + '...';
        return snippet.replace(new RegExp(query, 'gi'), match => `<strong>${match}</strong>`);
    }
    searchText(query) {
        const results = [];
        const limit = 50;
        Object.keys(VulgateData).forEach(bookKey => {
            const book = VulgateData[bookKey];
            Object.keys(book.chapters).forEach(chapterNum => {
                const chapter = book.chapters[chapterNum];
                Object.keys(chapter).forEach(verseNum => {
                    const verseData = chapter[verseNum];
                    const latinText = typeof verseData === 'object' ? verseData.latin : verseData;
                    const englishText = (typeof verseData === 'object' && verseData.english) ? verseData.english : '';
                    let matchType = null;
                    let matchSnippet = '';
                    if (latinText.toLowerCase().includes(query)) {
                        matchType = 'latin';
                        matchSnippet = this.getSnippet(latinText, query);
                    }
                    else if (englishText.toLowerCase().includes(query)) {
                        matchType = 'english';
                        matchSnippet = this.getSnippet(englishText, query);
                    }
                    if (matchType) {
                        results.push({
                            type: matchType === 'english' ? 'verse (std)' : 'verse',
                            label: `${book.name} ${chapterNum}:${verseNum}`,
                            sub: matchSnippet,
                            action: () => {
                                this.reader.loadPosition(bookKey, parseInt(chapterNum));
                                this.reader.savePosition();
                                this.close();
                                setTimeout(() => {
                                    const verseEls = document.querySelectorAll('.verse-number');
                                    for (let el of Array.from(verseEls)) {
                                        if (el.textContent === verseNum) {
                                            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                            el.parentElement.style.backgroundColor = 'rgba(212, 163, 115, 0.1)';
                                            setTimeout(() => el.parentElement.style.backgroundColor = '', 2000);
                                            break;
                                        }
                                    }
                                }, 100);
                            }
                        });
                    }
                });
            });
        });
        return results.slice(0, limit);
    }
    displayResults(results) {
        this.resultsContainer.innerHTML = '';
        if (results.length === 0) {
            this.resultsContainer.innerHTML = '<div class="search-result-item"><div class="result-sub">No results found</div></div>';
            this.resultsContainer.classList.add('has-results');
            return;
        }
        this.resultsContainer.classList.add('has-results');
        results.forEach(result => {
            const div = document.createElement('div');
            div.className = 'search-result-item';
            div.innerHTML = `
                <div class="result-type">${result.type}</div>
                <div class="result-main">${result.label}</div>
                <div class="result-sub">${result.sub}</div>
            `;
            div.addEventListener('click', result.action);
            this.resultsContainer.appendChild(div);
        });
    }
    clearResults() {
        this.resultsContainer.innerHTML = '';
        this.resultsContainer.classList.remove('has-results');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const reader = new VulgateReader();
    new SearchController(reader);
});
