export interface LexiconEntry {
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
    // Common words and their definitions
    words: {

        // Common missing/inflected words added for Genesis/John coverage
        'abraham': { lemma: 'Abraham', pos: 'proper noun', meanings: ['Abraham'], grammar: 'Indeclinable Hebrew name' },
        'isaac': { lemma: 'Isaac', pos: 'proper noun', meanings: ['Isaac'], grammar: 'Indeclinable Hebrew name' },
        'iacob': { lemma: 'Iacob', pos: 'proper noun', meanings: ['Jacob'], grammar: 'Indeclinable Hebrew name' },
        'ierusalem': { lemma: 'Ierusalem', pos: 'proper noun', meanings: ['Jerusalem'], grammar: 'Indeclinable' },
        'maria': { lemma: 'Maria', pos: 'proper noun', meanings: ['Mary'], grammar: 'Nominative singular feminine' },
        'mariae': { lemma: 'Maria', pos: 'proper noun', meanings: ['Mary'], grammar: 'Genitive/Dative singular feminine' },
        'patrem': { lemma: 'pater', pos: 'noun', meanings: ['father'], grammar: 'Accusative singular masculine' },
        'matrem': { lemma: 'mater', pos: 'noun', meanings: ['mother'], grammar: 'Accusative singular masculine' },
        'fratres': { lemma: 'frater', pos: 'noun', meanings: ['brothers'], grammar: 'Nominative/Accusative plural masculine' },
        'fratribus': { lemma: 'frater', pos: 'noun', meanings: ['brothers'], grammar: 'Dative/Ablative plural masculine' },
        'hominibus': { lemma: 'homo', pos: 'noun', meanings: ['men', 'people'], grammar: 'Dative/Ablative plural masculine' },
        'peccatores': { lemma: 'peccator', pos: 'noun', meanings: ['sinners'], grammar: 'Nominative/Accusative plural masculine' },
        'exsultate': { lemma: 'exsulto', pos: 'verb', meanings: ['rejoice', 'exult'], grammar: 'Imperative plural active' },
        'gloriamur': { lemma: 'glorior', pos: 'verb', meanings: ['we glory', 'we boast'], grammar: '1st person plural present indicative deponent' },
        'evangelium': { lemma: 'evangelium', pos: 'noun', meanings: ['gospel', 'good news'], grammar: 'Nominative/Accusative singular neuter' },
        // Exodus 20 / Genesis / Psalm 23 Missing Words
        'deorsum': { lemma: 'deorsum', pos: 'adverb', meanings: ['downwards', 'below', 'beneath'], grammar: 'Adverb' },
        'desuper': { lemma: 'desuper', pos: 'adverb', meanings: ['from above', 'overhead'], grammar: 'Adverb' },
        'sculptile': { lemma: 'sculptile', pos: 'noun', meanings: ['graven image', 'carved idol'], grammar: 'Accusative singular neuter' },
        'similitudinem': { lemma: 'similitudo', pos: 'noun', meanings: ['likeness', 'resemblance'], grammar: 'Accusative singular feminine' },
        'sursum': { lemma: 'sursum', pos: 'adverb', meanings: ['upwards', 'above'], grammar: 'Adverb' },
        'collocavit': { lemma: 'colloco', pos: 'verb', meanings: ['placed', 'stationed'], grammar: '3rd person singular perfect indicative active' },
        'custodiendam': { lemma: 'custodio', pos: 'verb', meanings: ['to guard'], grammar: 'Gerundive accusative feminine' },
        'gladium': { lemma: 'gladius', pos: 'noun', meanings: ['sword'], grammar: 'Accusative singular masculine' },
        'flammeum': { lemma: 'flammeus', pos: 'adjective', meanings: ['flaming', 'fiery'], grammar: 'Accusative singular masculine' },
        'versatilem': { lemma: 'versatilis', pos: 'adjective', meanings: ['turning', 'revolving'], grammar: 'Accusative singular masculine' },
        'cherubim': { lemma: 'cherubim', pos: 'noun', meanings: ['cherubim'], grammar: 'Indeclinable Hebrew plural' },
        'pascuis': { lemma: 'pascua', pos: 'noun', meanings: ['pastures'], grammar: 'Dative/Ablative plural feminine' },
        'refectionis': { lemma: 'refectio', pos: 'noun', meanings: ['refreshment', 'rest'], grammar: 'Genitive singular feminine' },
        'animam': { lemma: 'anima', pos: 'noun', meanings: ['soul', 'life'], grammar: 'Accusative singular feminine' },
        'convertit': { lemma: 'converto', pos: 'verb', meanings: ['he restores', 'he turns'], grammar: '3rd person singular perfect indicative active' },
        'virga': { lemma: 'virga', pos: 'noun', meanings: ['rod', 'staff'], grammar: 'Nominative singular feminine' },
        'baculus': { lemma: 'baculus', pos: 'noun', meanings: ['staff', 'stick'], grammar: 'Nominative singular masculine' },
        // Top 50 Missing Words
        'ne': { lemma: 'ne', pos: 'adverb/conjunction', meanings: ['not', 'lest', 'that not'], grammar: 'Negative particle' },
        'esset': { lemma: 'sum', pos: 'verb', meanings: ['was', 'would be'], grammar: '3rd person singular imperfect subjunctive' },
        'die': { lemma: 'dies', pos: 'noun', meanings: ['day'], grammar: 'Ablative singular masculine/feminine' },
        'quaecumque': { lemma: 'quicumque', pos: 'pronoun', meanings: ['whatever', 'element'], grammar: 'Nominative/accusative plural neuter' },
        'ipsi': { lemma: 'ipse', pos: 'pronoun', meanings: ['they themselves', 'he himself'], grammar: 'Nominative plural masculine' },
        'ligno': { lemma: 'lignum', pos: 'noun', meanings: ['tree', 'wood'], grammar: 'Dative/ablative singular neuter' },
        'ea': { lemma: 'is', pos: 'pronoun', meanings: ['she', 'those things', 'her'], grammar: 'Nominative singular feminine or nominative/accusative plural neuter' },
        'qua': { lemma: 'qui', pos: 'pronoun', meanings: ['which', 'by which'], grammar: 'Ablative singular feminine' },
        'firmamento': { lemma: 'firmamentum', pos: 'noun', meanings: ['firmament', 'sky'], grammar: 'Dative/ablative singular neuter' },
        'suo': { lemma: 'suus', pos: 'pronoun', meanings: ['his', 'her', 'its', 'their'], grammar: 'Dative/ablative singular masculine/neuter' },
        'coram': { lemma: 'coram', pos: 'preposition', meanings: ['in the presence of', 'before'], grammar: 'Takes ablative' },
        'adversus': { lemma: 'adversus', pos: 'preposition', meanings: ['against', 'towards'], grammar: 'Takes accusative' },
        'an': { lemma: 'an', pos: 'conjunction', meanings: ['or', 'whether'], grammar: 'Interrogative particle' },
        'septimo': { lemma: 'septimus', pos: 'adjective', meanings: ['seventh'], grammar: 'Dative/ablative singular masculine/neuter' },
        'contra': { lemma: 'contra', pos: 'preposition', meanings: ['against', 'opposite'], grammar: 'Takes accusative' },
        'paradiso': { lemma: 'paradisus', pos: 'noun', meanings: ['paradise', 'garden'], grammar: 'Dative/ablative singular masculine' },
        'os': { lemma: 'os', pos: 'noun', meanings: ['mouth', 'face', 'opening'], grammar: 'Nominative/accusative singular neuter' },
        'estis': { lemma: 'sum', pos: 'verb', meanings: ['you are'], grammar: '2nd person plural present indicative' },
        'caritate': { lemma: 'caritas', pos: 'noun', meanings: ['love', 'charity'], grammar: 'Ablative singular feminine' },
        'dixitque': { lemma: 'dico', pos: 'verb', meanings: ['and said'], grammar: 'dixit + -que' },
        'his': { lemma: 'hic', pos: 'pronoun', meanings: ['these', 'to these'], grammar: 'Dative/ablative plural' },
        'ac': { lemma: 'ac', pos: 'conjunction', meanings: ['and', 'and also'], grammar: 'Coordinating conjunction' },
        'viventem': { lemma: 'vivens', pos: 'adjective', meanings: ['living'], grammar: 'Accusative singular masculine/feminine' },
        'sermones': { lemma: 'sermo', pos: 'noun', meanings: ['words', 'speeches', 'discourses'], grammar: 'Accusative plural masculine' },
        'cunctos': { lemma: 'cunctus', pos: 'adjective', meanings: ['all', 'whole', 'entire'], grammar: 'Accusative plural masculine' },
        'locutus': { lemma: 'loquor', pos: 'verb', meanings: ['spoke', 'having spoken'], grammar: 'Perfect active participle (deponent) masculine' },
        'hos': { lemma: 'hic', pos: 'pronoun', meanings: ['these'], grammar: 'Accusative plural masculine' },
        'species': { lemma: 'species', pos: 'noun', meanings: ['kind', 'species', 'appearance'], grammar: 'Nominative singular/plural feminine' },
        'ibi': { lemma: 'ibi', pos: 'adverb', meanings: ['there', 'in that place'], grammar: 'Adverb' },
        'tuae': { lemma: 'tuus', pos: 'pronoun', meanings: ['your', 'of your'], grammar: 'Genitive singular feminine or nominative plural feminine' },
        'sabbati': { lemma: 'sabbatum', pos: 'noun', meanings: ['sabbath'], grammar: 'Genitive singular neuter' },
        'tuis': { lemma: 'tuus', pos: 'pronoun', meanings: ['your'], grammar: 'Dative/ablative plural' },
        'nostro': { lemma: 'noster', pos: 'pronoun', meanings: ['our', 'for our'], grammar: 'Dative/ablative singular masculine/neuter' },
        'iustus': { lemma: 'iustus', pos: 'adjective', meanings: ['just', 'righteous'], grammar: 'Nominative singular masculine' },
        'babylonis': { lemma: 'Babylon', pos: 'proper noun', meanings: ['Babylon'], grammar: 'Genitive singular feminine' },
        'vestrum': { lemma: 'vester', pos: 'pronoun', meanings: ['your'], grammar: 'Accusative singular masculine or genitive plural' },
        'habuero': { lemma: 'habeo', pos: 'verb', meanings: ['I shall have had'], grammar: '1st person singular future perfect' },
        'parte': { lemma: 'pars', pos: 'noun', meanings: ['part', 'side'], grammar: 'Ablative singular feminine' },
        'parvulus': { lemma: 'parvulus', pos: 'noun/adjective', meanings: ['child', 'little one', 'small'], grammar: 'Nominative singular masculine' },
        'aquarum': { lemma: 'aqua', pos: 'noun', meanings: ['of waters'], grammar: 'Genitive plural feminine' },
        'faciens': { lemma: 'facio', pos: 'verb', meanings: ['making', 'doing', 'one making'], grammar: 'Present active participle' },
        'sit': { lemma: 'sum', pos: 'verb', meanings: ['may be', 'let it be', 'is'], grammar: '3rd person singular present subjunctive' },
        'suas': { lemma: 'suus', pos: 'pronoun', meanings: ['his', 'her', 'their'], grammar: 'Accusative plural feminine' },
        'universis': { lemma: 'universus', pos: 'adjective', meanings: ['all', 'entire', 'whole'], grammar: 'Dative/ablative plural' },
        'opere': { lemma: 'opus', pos: 'noun', meanings: ['work', 'deed'], grammar: 'Ablative singular neuter' },
        'circuit': { lemma: 'circumeo', pos: 'verb', meanings: ['goes around', 'circles'], grammar: '3rd person singular present indicative' },
        'suis': { lemma: 'suus', pos: 'pronoun', meanings: ['his', 'her', 'their', 'his own'], grammar: 'Dative/ablative plural' },
        'adae': { lemma: 'Adam', pos: 'proper noun', meanings: ['Adam', 'of Adam'], grammar: 'Genitive/dative singular' },
        'suae': { lemma: 'suus', pos: 'pronoun', meanings: ['his', 'her', 'their'], grammar: 'Genitive/dative singular feminine or nominative plural feminine' },
        'tuo': { lemma: 'tuus', pos: 'pronoun', meanings: ['your'], grammar: 'Dative/ablative singular masculine/neuter' },
        'servus': { lemma: 'servus', pos: 'noun', meanings: ['servant', 'slave'], grammar: 'Nominative singular masculine' },
        'dabit': { lemma: 'do', pos: 'verb', meanings: ['will give'], grammar: '3rd person singular future indicative' },
        'tamquam': { lemma: 'tamquam', pos: 'adverb', meanings: ['as', 'just as', 'like'], grammar: 'Comparative adverb' },
        'impii': { lemma: 'impius', pos: 'noun/adjective', meanings: ['wicked', 'ungodly'], grammar: 'Nominative plural masculine or genitive singular' },
        'omnem': { lemma: 'omnis', pos: 'adjective', meanings: ['all', 'every', 'whole'], grammar: 'Accusative singular masculine/feminine' },
        'alienos': { lemma: 'alienus', pos: 'adjective', meanings: ['foreign', 'alien', 'other'], grammar: 'Accusative plural masculine' },
        'deos': { lemma: 'deus', pos: 'noun', meanings: ['gods'], grammar: 'Accusative plural masculine' },
        'zelotes': { lemma: 'zelotes', pos: 'noun/adjective', meanings: ['jealous', 'zealous'], grammar: 'Nominative singular masculine' },
        'iniquitatem': { lemma: 'iniquitas', pos: 'noun', meanings: ['iniquity', 'unfairness'], grammar: 'Accusative singular feminine' },
        'patrum': { lemma: 'pater', pos: 'noun', meanings: ['of fathers'], grammar: 'Genitive plural masculine' },
        'filios': { lemma: 'filius', pos: 'noun', meanings: ['sons', 'children'], grammar: 'Accusative plural masculine' },
        'tertiam': { lemma: 'tertius', pos: 'adjective', meanings: ['third'], grammar: 'Accusative singular feminine' },
        'quartam': { lemma: 'quartus', pos: 'adjective', meanings: ['fourth'], grammar: 'Accusative singular feminine' },
        'oderunt': { lemma: 'odi', pos: 'verb', meanings: ['they hate'], grammar: '3rd person plural perfect (with present meaning)' },
        'milia': { lemma: 'mille', pos: 'noun', meanings: ['thousands'], grammar: 'Accusative plural neuter' },
        'diligent': { lemma: 'diligo', pos: 'verb', meanings: ['they love'], grammar: '3rd person plural future indicative' },
        'praecepta': { lemma: 'praeceptum', pos: 'noun', meanings: ['precepts', 'commandments'], grammar: 'Accusative plural neuter' },
        'assumes': { lemma: 'assumo', pos: 'verb', meanings: ['you shall take'], grammar: '2nd person singular future indicative' },
        'vanum': { lemma: 'vanus', pos: 'adjective', meanings: ['vain', 'empty', 'false'], grammar: 'Accusative singular neuter' },
        'insontem': { lemma: 'insons', pos: 'adjective', meanings: ['innocent', 'guiltless'], grammar: 'Accusative singular masculine/feminine' },
        'memento': { lemma: 'memini', pos: 'verb', meanings: ['remember'], grammar: 'Imperative future' },
        'sanctifices': { lemma: 'sanctifico', pos: 'verb', meanings: ['you may sanctify'], grammar: '2nd person singular present subjunctive' },
        'sex': { lemma: 'sex', pos: 'numeral', meanings: ['six'], grammar: 'Indeclinable' },
        'operaberis': { lemma: 'operor', pos: 'verb', meanings: ['you shall work'], grammar: '2nd person singular future indicative deponent' },
        'facies': { lemma: 'facio', pos: 'verb', meanings: ['you shall do', 'you shall make'], grammar: '2nd person singular future indicative' },
        'filius': { lemma: 'filius', pos: 'noun', meanings: ['son'], grammar: 'Nominative singular masculine' },
        'filia': { lemma: 'filia', pos: 'noun', meanings: ['daughter'], grammar: 'Nominative singular feminine' },
        'iumentum': { lemma: 'iumentum', pos: 'noun', meanings: ['beast of burden', 'cattle'], grammar: 'Nominative/accusative singular neuter' },
        'advena': { lemma: 'advena', pos: 'noun', meanings: ['stranger', 'foreigner'], grammar: 'Nominative singular masculine' },
        'intra': { lemma: 'intra', pos: 'preposition', meanings: ['within'], grammar: 'Takes accusative' },
        'portas': { lemma: 'porta', pos: 'noun', meanings: ['gates'], grammar: 'Accusative plural feminine' },
        'benedixit': { lemma: 'benedico', pos: 'verb', meanings: ['blessed'], grammar: '3rd person singular perfect indicative' },
        'sanctificavit': { lemma: 'sanctifico', pos: 'verb', meanings: ['sanctified'], grammar: '3rd person singular perfect indicative' },
        'honora': { lemma: 'honoro', pos: 'verb', meanings: ['honor'], grammar: 'Imperative singular' },
        'longaevus': { lemma: 'longaevus', pos: 'adjective', meanings: ['aged', 'old', 'long-lived'], grammar: 'Nominative singular masculine' },
        'occides': { lemma: 'occido', pos: 'verb', meanings: ['you shall kill'], grammar: '2nd person singular future indicative' },
        'moechaberis': { lemma: 'moechor', pos: 'verb', meanings: ['you shall commit adultery'], grammar: '2nd person singular future indicative deponent' },
        'furtum': { lemma: 'furtum', pos: 'noun', meanings: ['theft', 'stealing'], grammar: 'Accusative singular neuter' },
        'testimonium': { lemma: 'testimonium', pos: 'noun', meanings: ['testimony', 'witness'], grammar: 'Accusative singular neuter' },
        'mendax': { lemma: 'mendax', pos: 'adjective', meanings: ['lying', 'false'], grammar: 'Accusative singular neuter' },
        'proximi': { lemma: 'proximus', pos: 'noun', meanings: ['neighbor'], grammar: 'Genitive singular masculine' },
        'concupisces': { lemma: 'concupisco', pos: 'verb', meanings: ['you shall covet'], grammar: '2nd person singular future indicative' },
        'uxorem': { lemma: 'uxor', pos: 'noun', meanings: ['wife'], grammar: 'Accusative singular feminine' },
        'ancillam': { lemma: 'ancilla', pos: 'noun', meanings: ['maidservant'], grammar: 'Accusative singular feminine' },
        'bovem': { lemma: 'bos', pos: 'noun', meanings: ['ox'], grammar: 'Accusative singular masculine/feminine' },
        'asinum': { lemma: 'asinus', pos: 'noun', meanings: ['donkey'], grammar: 'Accusative singular masculine' },
        'cuncta': { lemma: 'cunctus', pos: 'adjective', meanings: ['all things'], grammar: 'Accusative plural neuter' },
        'videbat': { lemma: 'video', pos: 'verb', meanings: ['saw', 'perceived'], grammar: '3rd person singular imperfect indicative' },
        'voces': { lemma: 'vox', pos: 'noun', meanings: ['voices', 'thunderings'], grammar: 'Accusative plural feminine' },
        'lampades': { lemma: 'lampas', pos: 'noun', meanings: ['torches', 'lightning flashes'], grammar: 'Accusative plural feminine' },
        'sonitum': { lemma: 'sonitus', pos: 'noun', meanings: ['sound'], grammar: 'Accusative singular masculine' },
        'buccinae': { lemma: 'buccina', pos: 'noun', meanings: ['trumpet'], grammar: 'Genitive singular feminine' },
        'montem': { lemma: 'mons', pos: 'noun', meanings: ['mountain'], grammar: 'Accusative singular masculine' },
        'fumantem': { lemma: 'fumans', pos: 'adjective', meanings: ['smoking'], grammar: 'Accusative singular masculine' },
        'perterriti': { lemma: 'perterritus', pos: 'adjective', meanings: ['terrified'], grammar: 'Nominative plural masculine' },
        'pavore': { lemma: 'pavor', pos: 'noun', meanings: ['fear', 'dread'], grammar: 'Ablative singular masculine' },
        'steterunt': { lemma: 'sto', pos: 'verb', meanings: ['stood'], grammar: '3rd person plural perfect indicative' },
        'procul': { lemma: 'procul', pos: 'adverb', meanings: ['at a distance', 'far off'], grammar: 'Adverb' },
        'loquere': { lemma: 'loquor', pos: 'verb', meanings: ['speak'], grammar: 'Imperative singular (deponent)' },
        'audiemus': { lemma: 'audio', pos: 'verb', meanings: ['we will hear'], grammar: '1st person plural future indicative' },
        'loquatur': { lemma: 'loquor', pos: 'verb', meanings: ['let him speak'], grammar: '3rd person singular present subjunctive' },
        'moriamur': { lemma: 'morior', pos: 'verb', meanings: ['we die', 'lest we die'], grammar: '1st person plural present subjunctive' },
        'nolite': { lemma: 'nolo', pos: 'verb', meanings: ['do not'], grammar: 'Imperative plural' },
        'timere': { lemma: 'timeo', pos: 'verb', meanings: ['to fear'], grammar: 'Infinitive' },
        'probaret': { lemma: 'probo', pos: 'verb', meanings: ['might prove', 'might test'], grammar: '3rd person singular imperfect subjunctive' },
        'terror': { lemma: 'terror', pos: 'noun', meanings: ['terror', 'dread'], grammar: 'Nominative singular masculine' },
        'peccaretis': { lemma: 'pecco', pos: 'verb', meanings: ['you might sin'], grammar: '2nd person plural imperfect subjunctive' },
        'stetit': { lemma: 'sto', pos: 'verb', meanings: ['stood'], grammar: '3rd person singular perfect indicative' },
        'longe': { lemma: 'longe', pos: 'adverb', meanings: ['far off'], grammar: 'Adverb' },
        'accessit': { lemma: 'accedo', pos: 'verb', meanings: ['approached'], grammar: '3rd person singular perfect indicative' },
        'caliginem': { lemma: 'caligo', pos: 'noun', meanings: ['darkness', 'mist'], grammar: 'Accusative singular feminine' },
        'erat': { lemma: 'sum', pos: 'verb', meanings: ['was'], grammar: '3rd person singular imperfect indicative' },
        'vidistis': { lemma: 'video', pos: 'verb', meanings: ['you have seen'], grammar: '2nd person plural perfect indicative' },
        'argentuos': { lemma: 'argenteus', pos: 'adjective', meanings: ['of silver'], grammar: 'Accusative plural masculine' },
        'aureos': { lemma: 'aureus', pos: 'adjective', meanings: ['of gold'], grammar: 'Accusative plural masculine' },
        'altare': { lemma: 'altare', pos: 'noun', meanings: ['altar'], grammar: 'Accusative singular neuter' },
        'terrenum': { lemma: 'terrenus', pos: 'adjective', meanings: ['of earth'], grammar: 'Accusative singular neuter' },
        'offeretis': { lemma: 'offero', pos: 'verb', meanings: ['you shall offer'], grammar: '2nd person plural future indicative' },
        'holocausta': { lemma: 'holocaustum', pos: 'noun', meanings: ['burnt offerings'], grammar: 'Accusative plural neuter' },
        'pacifica': { lemma: 'pacificus', pos: 'adjective', meanings: ['peace offerings'], grammar: 'Accusative plural neuter' },
        'oves': { lemma: 'ovis', pos: 'noun', meanings: ['sheep'], grammar: 'Accusative plural feminine' },
        'boves': { lemma: 'bos', pos: 'noun', meanings: ['oxen'], grammar: 'Accusative plural masculine/feminine' },
        'loco': { lemma: 'locus', pos: 'noun', meanings: ['place'], grammar: 'Ablative singular masculine' },
        'memoria': { lemma: 'memoria', pos: 'noun', meanings: ['memory', 'remembrance'], grammar: 'Nominative singular feminine' },
        'nominis': { lemma: 'nomen', pos: 'noun', meanings: ['of name'], grammar: 'Genitive singular neuter' },
        'veniam': { lemma: 'venio', pos: 'verb', meanings: ['I will come'], grammar: '1st person singular future indicative' },
        'benedicam': { lemma: 'benedico', pos: 'verb', meanings: ['I will bless'], grammar: '1st person singular future indicative' },
        'lapideum': { lemma: 'lapideus', pos: 'adjective', meanings: ['of stone'], grammar: 'Accusative singular masculine' },
        'aedificabis': { lemma: 'aedifico', pos: 'verb', meanings: ['you shall build'], grammar: '2nd person singular future indicative' },
        'sectis': { lemma: 'sectus', pos: 'adjective', meanings: ['cut', 'hewn'], grammar: 'Ablative plural masculine' },
        'levaveris': { lemma: 'levo', pos: 'verb', meanings: ['you have lifted'], grammar: '2nd person singular future perfect' },
        'cultrum': { lemma: 'culter', pos: 'noun', meanings: ['tool', 'knife', 'chisel'], grammar: 'Accusative singular masculine' },
        'polluetur': { lemma: 'polluo', pos: 'verb', meanings: ['it will be polluted'], grammar: '3rd person singular future passive' },
        'ascendes': { lemma: 'ascendo', pos: 'verb', meanings: ['you shall go up'], grammar: '2nd person singular future indicative' },
        'gradus': { lemma: 'gradus', pos: 'noun', meanings: ['steps'], grammar: 'Accusative plural masculine' },
        'reveletur': { lemma: 'revelo', pos: 'verb', meanings: ['be revealed', 'be exposed'], grammar: '3rd person singular present subjunctive passive' },
        'turpitudo': { lemma: 'turpitudo', pos: 'noun', meanings: ['nakedness', 'shame'], grammar: 'Nominative singular feminine' },
        'nec': { lemma: 'nec', pos: 'conjunction', meanings: ['nor', 'and not'], grammar: 'Coordinating conjunction' },
        'neque': { lemma: 'neque', pos: 'conjunction', meanings: ['nor', 'and not'], grammar: 'Coordinating conjunction' },

        // Batch 2: Fixes for eduxi, assumpserit and frequency > 2
        'eduxi': { lemma: 'educo', pos: 'verb', meanings: ['I brought out', 'I led out'], grammar: '1st person singular perfect indicative' },
        'assumpserit': { lemma: 'assumo', pos: 'verb', meanings: ['he shall have taken', 'he may have taken'], grammar: '3rd person singular future perfect/perfect subjunctive' },
        'deduxit': { lemma: 'deduco', pos: 'verb', meanings: ['he brought down', 'he led away'], grammar: '3rd person singular perfect indicative' },
        'meo': { lemma: 'meus', pos: 'pronoun', meanings: ['my', 'mine'], grammar: 'Dative/ablative singular masculine/neuter' },
        'tusitiae': { lemma: 'iustitia', pos: 'noun', meanings: ['righteousness', 'justice'], grammar: 'Genitive/dative singular feminine' }, // Typo in source? checking missing_words... ah 'iustitiae'
        'iustitiae': { lemma: 'iustitia', pos: 'noun', meanings: ['righteousness', 'justice'], grammar: 'Genitive/dative singular feminine' },
        'iniquitate': { lemma: 'iniquitas', pos: 'noun', meanings: ['iniquity', 'wickedness'], grammar: 'Ablative singular feminine' },
        'iniquitates': { lemma: 'iniquitas', pos: 'noun', meanings: ['iniquities'], grammar: 'Accusative plural feminine' },
        'sacrificium': { lemma: 'sacrificium', pos: 'noun', meanings: ['sacrifice'], grammar: 'Nominative/accusative singular neuter' },
        'timore': { lemma: 'timor', pos: 'noun', meanings: ['fear'], grammar: 'Ablative singular masculine' },
        'timet': { lemma: 'timeo', pos: 'verb', meanings: ['he fears'], grammar: '3rd person singular present indicative' }, // Already exists? checking... might not.
        'sanctis': { lemma: 'sanctus', pos: 'adjective/noun', meanings: ['holy', 'saints'], grammar: 'Dative/ablative plural' },
        'voluit': { lemma: 'volo', pos: 'verb', meanings: ['he wished', 'he wanted'], grammar: '3rd person singular perfect indicative' },
        'gaudium': { lemma: 'gaudium', pos: 'noun', meanings: ['joy'], grammar: 'Nominative/accusative singular neuter' },
        'gaudete': { lemma: 'gaudeo', pos: 'verb', meanings: ['rejoice'], grammar: 'Imperative plural' },
        'ultra': { lemma: 'ultra', pos: 'adverb/preposition', meanings: ['beyond', 'further', 'more'], grammar: 'Adverb or Prep (+acc)' },
        'prima': { lemma: 'primus', pos: 'adjective', meanings: ['first'], grammar: 'Nominative singular feminine / etc' },
        'cito': { lemma: 'cito', pos: 'adverb', meanings: ['quickly', 'soon'], grammar: 'Adverb' },
        'dilexit': { lemma: 'diligo', pos: 'verb', meanings: ['he loved'], grammar: '3rd person singular perfect indicative' },
        'virtus': { lemma: 'virtus', pos: 'noun', meanings: ['virtue', 'power', 'strength'], grammar: 'Nominative singular feminine' },
        'ipsius': { lemma: 'ipse', pos: 'pronoun', meanings: ['his own', 'of him himself'], grammar: 'Genitive singular' },
        'alpha': { lemma: 'alpha', pos: 'noun', meanings: ['Alpha'], grammar: 'Indeclinable (Greek)' },
        'omega': { lemma: 'omega', pos: 'noun', meanings: ['Omega'], grammar: 'Indeclinable (Greek)' },
        'finis': { lemma: 'finis', pos: 'noun', meanings: ['end'], grammar: 'Nominative singular masculine' },
        'habens': { lemma: 'habeo', pos: 'verb', meanings: ['having'], grammar: 'Present active participle' },
        'uxor': { lemma: 'uxor', pos: 'noun', meanings: ['wife'], grammar: 'Nominative singular feminine' },
        'aurum': { lemma: 'aurum', pos: 'noun', meanings: ['gold'], grammar: 'Nominative/accusative singular neuter' },
        'optimum': { lemma: 'optimus', pos: 'adjective', meanings: ['best', 'very good'], grammar: 'Nominative/accusative singular neuter' },
        'animantia': { lemma: 'animans', pos: 'noun', meanings: ['living creatures'], grammar: 'Nominative/accusative plural neuter' },
        'millia': { lemma: 'mille', pos: 'numeral', meanings: ['thousands'], grammar: 'Plural' },

        // Batch 3: High frequency and genealogy words
        'habebis': { lemma: 'habeo', pos: 'verb', meanings: ['you shall have'], grammar: '2nd person singular future indicative' },
        'sementem': { lemma: 'sementis', pos: 'noun', meanings: ['seed', 'sowing'], grammar: 'Accusative singular feminine' },
        'sint': { lemma: 'sum', pos: 'verb', meanings: ['let them be'], grammar: '3rd person plural present subjunctive' },
        'nocti': { lemma: 'nox', pos: 'noun', meanings: ['to the night'], grammar: 'Dative singular feminine' },
        'animae': { lemma: 'anima', pos: 'noun', meanings: ['souls', 'lives'], grammar: 'Nominative plural / Genitive singular' },
        'replete': { lemma: 'repleo', pos: 'verb', meanings: ['fill'], grammar: 'Imperative plural' },
        'genere': { lemma: 'genus', pos: 'noun', meanings: ['kind', 'race'], grammar: 'Ablative singular neuter' },
        'universa': { lemma: 'universus', pos: 'adjective', meanings: ['all', 'whole'], grammar: 'Nominative/accusative plural neuter' },
        'boni': { lemma: 'bonus', pos: 'noun', meanings: ['of good', 'good men'], grammar: 'Genitive singular / Nominative plural' },
        'generationem': { lemma: 'generatio', pos: 'noun', meanings: ['generation'], grammar: 'Accusative singular feminine' },
        'habebit': { lemma: 'habeo', pos: 'verb', meanings: ['he shall have'], grammar: '3rd person singular future indicative' },
        'abiit': { lemma: 'abeo', pos: 'verb', meanings: ['he went away'], grammar: '3rd person singular perfect indicative' },
        'impiorum': { lemma: 'impius', pos: 'noun', meanings: ['of the wicked'], grammar: 'Genitive plural masculine' },
        'faciet': { lemma: 'facio', pos: 'verb', meanings: ['he shall do'], grammar: '3rd person singular future indicative' },
        'iudicio': { lemma: 'iudicium', pos: 'noun', meanings: ['judgment'], grammar: 'Ablative singular neuter' },
        'iustorum': { lemma: 'iustus', pos: 'noun', meanings: ['of the righteous'], grammar: 'Genitive plural masculine' },
        'novit': { lemma: 'novi', pos: 'verb', meanings: ['he knows'], grammar: '3rd person singular perfect (present meaning)' },
        'mecum': { lemma: 'cum', pos: 'preposition', meanings: ['with me'], grammar: 'Ablative (me + cum)' },
        'meae': { lemma: 'meus', pos: 'pronoun', meanings: ['my'], grammar: 'Genitive/dative singular or nominative plural feminine' },
        'dierum': { lemma: 'dies', pos: 'noun', meanings: ['of days'], grammar: 'Genitive plural masculine' },
        'magnam': { lemma: 'magnus', pos: 'adjective', meanings: ['great'], grammar: 'Accusative singular feminine' },
        'multitudinem': { lemma: 'multitudo', pos: 'noun', meanings: ['multitude'], grammar: 'Accusative singular feminine' },
        'dele': { lemma: 'deleo', pos: 'verb', meanings: ['blot out', 'destroy'], grammar: 'Imperative singular' },
        'cognosco': { lemma: 'cognosco', pos: 'verb', meanings: ['I know'], grammar: '1st person singular present indicative' },
        'genuit': { lemma: 'geno', pos: 'verb', meanings: ['begat'], grammar: '3rd person singular perfect indicative' },
        'autem': { lemma: 'autem', pos: 'conjunction', meanings: ['but', 'however'], grammar: 'Postpositive conjunction' },

        // Exodus 20 Complete Coverage Batch
        'aegypti': { lemma: 'Aegyptus', pos: 'proper noun', meanings: ['of Egypt'], grammar: 'Genitive singular feminine' },
        'servitutis': { lemma: 'servitus', pos: 'noun', meanings: ['of slavery', 'of bondage'], grammar: 'Genitive singular feminine' },
        'adorabis': { lemma: 'adoro', pos: 'verb', meanings: ['you shall adore', 'you shall worship'], grammar: '2nd person singular future indicative' },
        'coles': { lemma: 'colo', pos: 'verb', meanings: ['you shall worship', 'you shall serve'], grammar: '2nd person singular future indicative' },
        'fortis': { lemma: 'fortis', pos: 'adjective', meanings: ['strong', 'mighty'], grammar: 'Nominative singular masculine' },
        'visitans': { lemma: 'visito', pos: 'verb', meanings: ['visiting', 'punishing'], grammar: 'Present active participle' },
        'diligunt': { lemma: 'diligo', pos: 'verb', meanings: ['they love'], grammar: '3rd person plural present indicative' },
        'custodiunt': { lemma: 'custodio', pos: 'verb', meanings: ['they keep', 'they guard'], grammar: '3rd person plural present indicative' },
        'frustra': { lemma: 'frustra', pos: 'adverb', meanings: ['in vain'], grammar: 'Adverb' },
        'sabbatum': { lemma: 'sabbatum', pos: 'noun', meanings: ['sabbath'], grammar: 'Accusative singular neuter' },
        'ancilla': { lemma: 'ancilla', pos: 'noun', meanings: ['maidservant'], grammar: 'Nominative singular feminine' },
        'idcirco': { lemma: 'idcirco', pos: 'adverb', meanings: ['therefore'], grammar: 'Adverb' },
        'sis': { lemma: 'sum', pos: 'verb', meanings: ['may you be', 'you may be'], grammar: '2nd person singular present subjunctive' },
        'loqueris': { lemma: 'loquor', pos: 'verb', meanings: ['you shall speak'], grammar: '2nd person singular future indicative (deponent)' },
        'proximum': { lemma: 'proximus', pos: 'noun', meanings: ['neighbor'], grammar: 'Accusative singular masculine' },
        'falsum': { lemma: 'falsus', pos: 'adjective', meanings: ['false'], grammar: 'Accusative singular neuter' },
        'desiderabis': { lemma: 'desidero', pos: 'verb', meanings: ['you shall desire', 'you shall covet'], grammar: '2nd person singular future indicative' },
        'servum': { lemma: 'servus', pos: 'noun', meanings: ['servant'], grammar: 'Accusative singular masculine' },

        // Batch 4: Frequency >= 2 words
        'nostros': { lemma: 'noster', pos: 'pronoun', meanings: ['our'], grammar: 'Accusative plural masculine' },
        'angustia': { lemma: 'angustia', pos: 'noun', meanings: ['distress', 'anguish'], grammar: 'Nominative singular feminine' },
        'videbit': { lemma: 'video', pos: 'verb', meanings: ['he shall see'], grammar: '3rd person singular future indicative' },
        'manu': { lemma: 'manus', pos: 'noun', meanings: ['hand'], grammar: 'Ablative singular feminine' },
        'scientia': { lemma: 'scientia', pos: 'noun', meanings: ['knowledge', 'science'], grammar: 'Nominative singular feminine' },
        'auditui': { lemma: 'auditus', pos: 'noun', meanings: ['to the hearing'], grammar: 'Dative singular masculine' },
        'laetitiam': { lemma: 'laetitia', pos: 'noun', meanings: ['gladness', 'joy'], grammar: 'Accusative singular feminine' },
        'meas': { lemma: 'meus', pos: 'pronoun', meanings: ['my'], grammar: 'Accusative plural feminine' },
        'libera': { lemma: 'libero', pos: 'verb', meanings: ['deliver', 'free'], grammar: 'Imperative singular' },
        'humiliatum': { lemma: 'humiliatus', pos: 'adjective', meanings: ['humbled'], grammar: 'Accusative singular masculine' },
        'refugium': { lemma: 'refugium', pos: 'noun', meanings: ['refuge'], grammar: 'Nominative/accusative singular neuter' },
        'appropinquabit': { lemma: 'appropinquo', pos: 'verb', meanings: ['it shall approach'], grammar: '3rd person singular future indicative' },
        'spes': { lemma: 'spes', pos: 'noun', meanings: ['hope'], grammar: 'Nominative singular feminine' },
        'lapidem': { lemma: 'lapis', pos: 'noun', meanings: ['stone'], grammar: 'Accusative singular masculine' },
        'virtutis': { lemma: 'virtus', pos: 'noun', meanings: ['of virtue', 'of power'], grammar: 'Genitive singular feminine' },
        'cymbalis': { lemma: 'cymbalum', pos: 'noun', meanings: ['cymbals'], grammar: 'Ablative plural neuter' },
        'radix': { lemma: 'radix', pos: 'noun', meanings: ['root'], grammar: 'Nominative singular feminine' },
        'sitienti': { lemma: 'sitiens', pos: 'adjective', meanings: ['to the thirsty'], grammar: 'Dative singular' },
        'vidimus': { lemma: 'video', pos: 'verb', meanings: ['we have seen'], grammar: '1st person plural perfect indicative' },
        'aspectus': { lemma: 'aspectus', pos: 'noun', meanings: ['appearance', 'sight'], grammar: 'Nominative singular masculine' },
        'dicentem': { lemma: 'dicens', pos: 'verb', meanings: ['saying'], grammar: 'Present active participle accusative' },
        'accesserunt': { lemma: 'accedo', pos: 'verb', meanings: ['they approached'], grammar: '3rd person plural perfect indicative' },
        'ipsorum': { lemma: 'ipse', pos: 'pronoun', meanings: ['of them', 'their own'], grammar: 'Genitive plural masculine' },
        'caelorum': { lemma: 'caelum', pos: 'noun', meanings: ['of the heavens'], grammar: 'Genitive plural neuter' },
        'videbunt': { lemma: 'video', pos: 'verb', meanings: ['they shall see'], grammar: '3rd person plural future indicative' },
        'persecuti': { lemma: 'persequor', pos: 'verb', meanings: ['persecuted'], grammar: 'Perfect participle nominative plural' },
        'prophetas': { lemma: 'propheta', pos: 'noun', meanings: ['prophets'], grammar: 'Accusative plural masculine' },
        'sal': { lemma: 'sal', pos: 'noun', meanings: ['salt'], grammar: 'Nominative singular neuter' },
        'foras': { lemma: 'foras', pos: 'adverb', meanings: ['outdoors', 'out'], grammar: 'Adverb' },
        'luceat': { lemma: 'luceo', pos: 'verb', meanings: ['let it shine'], grammar: '3rd person singular present subjunctive' },
        'accedens': { lemma: 'accedo', pos: 'verb', meanings: ['approaching'], grammar: 'Present active participle' },
        'sedebat': { lemma: 'sedeo', pos: 'verb', meanings: ['he was sitting'], grammar: '3rd person singular imperfect indicative' },
        'velut': { lemma: 'velut', pos: 'adverb', meanings: ['just as', 'like'], grammar: 'Adverb' },
        'surrexit': { lemma: 'surgo', pos: 'verb', meanings: ['he rose', 'arose'], grammar: '3rd person singular perfect indicative' },
        'euntes': { lemma: 'eo', pos: 'verb', meanings: ['going'], grammar: 'Present active participle nominative plural' },
        'discipulis': { lemma: 'discipulus', pos: 'noun', meanings: ['to the disciples'], grammar: 'Dative/ablative plural masculine' },
        'galilaeam': { lemma: 'Galilaea', pos: 'noun', meanings: ['Galilee'], grammar: 'Accusative singular feminine' },
        'gaudio': { lemma: 'gaudium', pos: 'noun', meanings: ['with joy'], grammar: 'Ablative singular neuter' },
        'habeat': { lemma: 'habeo', pos: 'verb', meanings: ['he may have'], grammar: '3rd person singular present subjunctive' },
        'aeternam': { lemma: 'aeternus', pos: 'adjective', meanings: ['eternal'], grammar: 'Accusative singular feminine' },
        'vado': { lemma: 'vado', pos: 'verb', meanings: ['I go'], grammar: '1st person singular present indicative' },
        'iterum': { lemma: 'iterum', pos: 'adverb', meanings: ['again'], grammar: 'Adverb' },
        'venio': { lemma: 'venio', pos: 'verb', meanings: ['I come'], grammar: '1st person singular present indicative' },
        'sitis': { lemma: 'sitis', pos: 'noun', meanings: ['thirst'], grammar: 'Nominative singular feminine' },
        'scitis': { lemma: 'scio', pos: 'verb', meanings: ['you know'], grammar: '2nd person plural present indicative' },
        'vocatus': { lemma: 'vocatus', pos: 'adjective', meanings: ['called'], grammar: 'Nominative singular masculine' },
        'vocati': { lemma: 'vocatus', pos: 'noun', meanings: ['the called'], grammar: 'Nominative plural masculine' },
        'primum': { lemma: 'primus', pos: 'adverb', meanings: ['first'], grammar: 'Adverb' },
        'iustificati': { lemma: 'iustificatus', pos: 'adjective', meanings: ['justified'], grammar: 'Nominative plural masculine' },
        'gratis': { lemma: 'gratis', pos: 'adverb', meanings: ['freely', 'for nothing'], grammar: 'Adverb' },
        'peccati': { lemma: 'peccatum', pos: 'noun', meanings: ['of sin'], grammar: 'Genitive singular neuter' },
        'iis': { lemma: 'is', pos: 'pronoun', meanings: ['to them'], grammar: 'Dative plural' },
        'propositum': { lemma: 'propositum', pos: 'noun', meanings: ['purpose'], grammar: 'Accusative singular neuter' },
        'perfecta': { lemma: 'perfectus', pos: 'adjective', meanings: ['perfect'], grammar: 'Nominative singular feminine' },
        'corpus': { lemma: 'corpus', pos: 'noun', meanings: ['body'], grammar: 'Nominative/accusative singular neuter' },
        'perfectum': { lemma: 'perfectus', pos: 'adjective', meanings: ['perfect'], grammar: 'Accusative singular masculine' },
        'stimulus': { lemma: 'stimulus', pos: 'noun', meanings: ['goad', 'sting'], grammar: 'Nominative singular masculine' },
        'donum': { lemma: 'donum', pos: 'noun', meanings: ['gift'], grammar: 'Nominative/accusative singular neuter' },
        'cetero': { lemma: 'ceterus', pos: 'adjective', meanings: ['for the rest'], grammar: 'Ablative singular neuter' },
        'vestrae': { lemma: 'vester', pos: 'pronoun', meanings: ['your'], grammar: 'Genitive/dative singular feminine' },
        'certamen': { lemma: 'certamen', pos: 'noun', meanings: ['struggle', 'contest'], grammar: 'Accusative singular neuter' },
        'patientiam': { lemma: 'patientia', pos: 'noun', meanings: ['patience'], grammar: 'Accusative singular feminine' },
        'estote': { lemma: 'sum', pos: 'verb', meanings: ['be ye'], grammar: 'Future imperative plural' },
        'mortua': { lemma: 'mortuus', pos: 'adjective', meanings: ['dead'], grammar: 'Nominative singular feminine' },
        'diligamus': { lemma: 'diligo', pos: 'verb', meanings: ['let us love'], grammar: '1st person plural present subjunctive' },
        'diligit': { lemma: 'diligo', pos: 'verb', meanings: ['he loves'], grammar: '3rd person singular present indicative' },
        'manet': { lemma: 'maneo', pos: 'verb', meanings: ['remains', 'abides'], grammar: '3rd person singular present indicative' },
        'throno': { lemma: 'thronus', pos: 'noun', meanings: ['throne'], grammar: 'Ablative singular masculine' },




        // A
        'a': {
            lemma: 'a/ab',
            pos: 'preposition',
            meanings: ['from', 'by', 'away from'],
            grammar: 'Takes ablative case'
        },
        'ab': {
            lemma: 'a/ab',
            pos: 'preposition',
            meanings: ['from', 'by', 'away from'],
            grammar: 'Takes ablative case; used before vowels and h'
        },
        'ad': {
            lemma: 'ad',
            pos: 'preposition',
            meanings: ['to', 'toward', 'at', 'near'],
            grammar: 'Takes accusative case'
        },
        'adam': {
            lemma: 'Adam',
            pos: 'proper noun',
            meanings: ['Adam (the first man)'],
            grammar: 'Indeclinable Hebrew name'
        },
        'adhuc': {
            lemma: 'adhuc',
            pos: 'adverb',
            meanings: ['still', 'yet', 'thus far', 'hitherto'],
            grammar: 'Temporal adverb'
        },
        'aeternum': {
            lemma: 'aeternus',
            pos: 'adjective',
            meanings: ['eternal', 'everlasting', 'perpetual'],
            grammar: 'Accusative singular neuter or nominative/accusative singular neuter'
        },
        'ait': {
            lemma: 'aio',
            pos: 'verb',
            meanings: ['says', 'said', 'affirms'],
            grammar: '3rd person singular present/perfect indicative active (defective verb)'
        },
        'altum': {
            lemma: 'altus',
            pos: 'adjective',
            meanings: ['high', 'deep', 'tall'],
            grammar: 'Accusative singular masculine/neuter or nominative singular neuter'
        },
        'amen': {
            lemma: 'amen',
            pos: 'interjection',
            meanings: ['amen', 'truly', 'so be it'],
            grammar: 'Hebrew loanword, indeclinable'
        },
        'amor': {
            lemma: 'amor',
            pos: 'noun',
            meanings: ['love', 'affection', 'fondness'],
            grammar: 'Nominative singular masculine, 3rd declension'
        },
        'angelus': {
            lemma: 'angelus',
            pos: 'noun',
            meanings: ['angel', 'messenger'],
            grammar: 'Nominative singular masculine, 2nd declension'
        },
        'angelum': {
            lemma: 'angelus',
            pos: 'noun',
            meanings: ['angel', 'messenger'],
            grammar: 'Accusative singular masculine, 2nd declension'
        },
        'angeli': {
            lemma: 'angelus',
            pos: 'noun',
            meanings: ['angels', 'messengers', "of the angel"],
            grammar: 'Genitive singular or nominative plural masculine'
        },
        'anima': {
            lemma: 'anima',
            pos: 'noun',
            meanings: ['soul', 'spirit', 'life', 'breath'],
            grammar: 'Nominative/ablative singular feminine, 1st declension'
        },
        'animas': {
            lemma: 'anima',
            pos: 'noun',
            meanings: ['souls', 'spirits', 'lives'],
            grammar: 'Accusative plural feminine'
        },
        'ante': {
            lemma: 'ante',
            pos: 'preposition/adverb',
            meanings: ['before', 'in front of', 'previously'],
            grammar: 'As preposition takes accusative'
        },
        'apud': {
            lemma: 'apud',
            pos: 'preposition',
            meanings: ['with', 'at', 'near', 'among', 'in the presence of'],
            grammar: 'Takes accusative case'
        },
        'aqua': {
            lemma: 'aqua',
            pos: 'noun',
            meanings: ['water'],
            grammar: 'Nominative/ablative singular feminine, 1st declension'
        },
        'aquam': {
            lemma: 'aqua',
            pos: 'noun',
            meanings: ['water'],
            grammar: 'Accusative singular feminine'
        },
        'aquas': {
            lemma: 'aqua',
            pos: 'noun',
            meanings: ['waters'],
            grammar: 'Accusative plural feminine'
        },
        'aquae': {
            lemma: 'aqua',
            pos: 'noun',
            meanings: ['waters', 'of water'],
            grammar: 'Genitive/dative singular or nominative plural feminine'
        },
        'aquis': {
            lemma: 'aqua',
            pos: 'noun',
            meanings: ['waters'],
            grammar: 'Dative/ablative plural feminine'
        },

        // B
        'beati': {
            lemma: 'beatus',
            pos: 'adjective',
            meanings: ['blessed', 'happy', 'fortunate'],
            grammar: 'Nominative plural masculine or genitive singular'
        },
        'beatus': {
            lemma: 'beatus',
            pos: 'adjective',
            meanings: ['blessed', 'happy', 'fortunate'],
            grammar: 'Nominative singular masculine'
        },
        'benedictus': {
            lemma: 'benedictus',
            pos: 'adjective/participle',
            meanings: ['blessed', 'praised'],
            grammar: 'Nominative singular masculine, perfect passive participle of benedico'
        },
        'bonum': {
            lemma: 'bonus',
            pos: 'adjective/noun',
            meanings: ['good', 'good thing', 'benefit'],
            grammar: 'Accusative singular masculine/neuter or nominative singular neuter'
        },
        'bonus': {
            lemma: 'bonus',
            pos: 'adjective',
            meanings: ['good'],
            grammar: 'Nominative singular masculine'
        },
        'bona': {
            lemma: 'bonus',
            pos: 'adjective/noun',
            meanings: ['good', 'good things', 'goods'],
            grammar: 'Nominative/ablative singular feminine or nominative/accusative plural neuter'
        },

        // C
        'caelum': {
            lemma: 'caelum',
            pos: 'noun',
            meanings: ['heaven', 'sky'],
            grammar: 'Nominative/accusative singular neuter, 2nd declension'
        },
        'caeli': {
            lemma: 'caelum',
            pos: 'noun',
            meanings: ['of heaven', 'heavens'],
            grammar: 'Genitive singular or nominative plural neuter'
        },
        'caelo': {
            lemma: 'caelum',
            pos: 'noun',
            meanings: ['heaven', 'sky'],
            grammar: 'Dative/ablative singular neuter'
        },
        'caelis': {
            lemma: 'caelum',
            pos: 'noun',
            meanings: ['heavens'],
            grammar: 'Dative/ablative plural neuter'
        },
        'caelos': {
            lemma: 'caelum',
            pos: 'noun',
            meanings: ['heavens', 'skies'],
            grammar: 'Accusative plural (variant form)'
        },
        'caritas': {
            lemma: 'caritas',
            pos: 'noun',
            meanings: ['love', 'charity', 'affection', 'dearness'],
            grammar: 'Nominative singular feminine, 3rd declension'
        },
        'caritatem': {
            lemma: 'caritas',
            pos: 'noun',
            meanings: ['love', 'charity'],
            grammar: 'Accusative singular feminine'
        },
        'caro': {
            lemma: 'caro',
            pos: 'noun',
            meanings: ['flesh', 'meat', 'body'],
            grammar: 'Nominative singular feminine, 3rd declension'
        },
        'carnem': {
            lemma: 'caro',
            pos: 'noun',
            meanings: ['flesh', 'meat', 'body'],
            grammar: 'Accusative singular feminine'
        },
        'carnis': {
            lemma: 'caro',
            pos: 'noun',
            meanings: ['of flesh', 'of the body'],
            grammar: 'Genitive singular feminine'
        },
        'christus': {
            lemma: 'Christus',
            pos: 'proper noun',
            meanings: ['Christ', 'the Anointed One'],
            grammar: 'Nominative singular masculine, 2nd declension'
        },
        'christi': {
            lemma: 'Christus',
            pos: 'proper noun',
            meanings: ['of Christ'],
            grammar: 'Genitive singular masculine'
        },
        'christum': {
            lemma: 'Christus',
            pos: 'proper noun',
            meanings: ['Christ'],
            grammar: 'Accusative singular masculine'
        },
        'christo': {
            lemma: 'Christus',
            pos: 'proper noun',
            meanings: ['Christ'],
            grammar: 'Dative/ablative singular masculine'
        },
        'cor': {
            lemma: 'cor',
            pos: 'noun',
            meanings: ['heart', 'mind', 'soul'],
            grammar: 'Nominative/accusative singular neuter, 3rd declension'
        },
        'corde': {
            lemma: 'cor',
            pos: 'noun',
            meanings: ['heart'],
            grammar: 'Ablative singular neuter'
        },
        'cordis': {
            lemma: 'cor',
            pos: 'noun',
            meanings: ['of the heart'],
            grammar: 'Genitive singular neuter'
        },
        'creavit': {
            lemma: 'creo',
            pos: 'verb',
            meanings: ['created', 'made', 'produced'],
            grammar: '3rd person singular perfect indicative active'
        },
        'crederent': {
            lemma: 'credo',
            pos: 'verb',
            meanings: ['they might believe'],
            grammar: '3rd person plural imperfect subjunctive active'
        },
        'credit': {
            lemma: 'credo',
            pos: 'verb',
            meanings: ['believes', 'trusts'],
            grammar: '3rd person singular present indicative active'
        },
        'credunt': {
            lemma: 'credo',
            pos: 'verb',
            meanings: ['they believe'],
            grammar: '3rd person plural present indicative active'
        },
        'credere': {
            lemma: 'credo',
            pos: 'verb',
            meanings: ['to believe', 'to trust'],
            grammar: 'Present infinitive active'
        },
        'creditis': {
            lemma: 'credo',
            pos: 'verb',
            meanings: ['you believe'],
            grammar: '2nd person plural present indicative active'
        },
        'credite': {
            lemma: 'credo',
            pos: 'verb',
            meanings: ['believe!'],
            grammar: '2nd person plural present imperative active'
        },
        'comprehenderunt': {
            lemma: 'comprehendo',
            pos: 'verb',
            meanings: ['comprehended', 'grasped', 'seized', 'understood', 'overcame'],
            grammar: '3rd person plural perfect indicative active'
        },
        'comprehendit': {
            lemma: 'comprehendo',
            pos: 'verb',
            meanings: ['comprehended', 'grasped', 'seized', 'understood'],
            grammar: '3rd person singular perfect indicative active'
        },
        'cum': {
            lemma: 'cum',
            pos: 'preposition/conjunction',
            meanings: ['with', 'when', 'since', 'although'],
            grammar: 'As preposition takes ablative; as conjunction introduces subordinate clauses'
        },

        // D
        'david': {
            lemma: 'David',
            pos: 'proper noun',
            meanings: ['David'],
            grammar: 'Indeclinable Hebrew name'
        },
        'de': {
            lemma: 'de',
            pos: 'preposition',
            meanings: ['from', 'about', 'concerning', 'down from'],
            grammar: 'Takes ablative case'
        },
        'dei': {
            lemma: 'deus',
            pos: 'noun',
            meanings: ['of God', 'gods'],
            grammar: 'Genitive singular or nominative plural masculine'
        },
        'deo': {
            lemma: 'deus',
            pos: 'noun',
            meanings: ['God', 'to God'],
            grammar: 'Dative/ablative singular masculine'
        },
        'deum': {
            lemma: 'deus',
            pos: 'noun',
            meanings: ['God'],
            grammar: 'Accusative singular masculine'
        },
        'deus': {
            lemma: 'deus',
            pos: 'noun',
            meanings: ['God', 'god'],
            grammar: 'Nominative singular masculine, 2nd declension'
        },
        'dico': {
            lemma: 'dico',
            pos: 'verb',
            meanings: ['I say', 'I speak', 'I tell'],
            grammar: '1st person singular present indicative active'
        },
        'dicit': {
            lemma: 'dico',
            pos: 'verb',
            meanings: ['says', 'speaks', 'tells'],
            grammar: '3rd person singular present indicative active'
        },
        'dicens': {
            lemma: 'dico',
            pos: 'verb',
            meanings: ['saying', 'speaking'],
            grammar: 'Present active participle, nominative singular'
        },
        'dies': {
            lemma: 'dies',
            pos: 'noun',
            meanings: ['day', 'days'],
            grammar: 'Nominative/accusative singular or nominative plural, 5th declension (usually masculine)'
        },
        'diem': {
            lemma: 'dies',
            pos: 'noun',
            meanings: ['day'],
            grammar: 'Accusative singular'
        },
        'diebus': {
            lemma: 'dies',
            pos: 'noun',
            meanings: ['days'],
            grammar: 'Dative/ablative plural'
        },
        'diei': {
            lemma: 'dies',
            pos: 'noun',
            meanings: ['of the day'],
            grammar: 'Genitive/dative singular'
        },
        'dixit': {
            lemma: 'dico',
            pos: 'verb',
            meanings: ['said', 'spoke', 'told'],
            grammar: '3rd person singular perfect indicative active'
        },
        'dixerunt': {
            lemma: 'dico',
            pos: 'verb',
            meanings: ['they said', 'they spoke'],
            grammar: '3rd person plural perfect indicative active'
        },
        'diligite': {
            lemma: 'diligo',
            pos: 'verb',
            meanings: ['love!', 'esteem!'],
            grammar: '2nd person plural present imperative active'
        },
        'domine': {
            lemma: 'dominus',
            pos: 'noun',
            meanings: ['Lord', 'O Lord', 'master'],
            grammar: 'Vocative singular masculine'
        },
        'domini': {
            lemma: 'dominus',
            pos: 'noun',
            meanings: ['of the Lord', 'lords'],
            grammar: 'Genitive singular or nominative plural masculine'
        },
        'domino': {
            lemma: 'dominus',
            pos: 'noun',
            meanings: ['Lord', 'to the Lord'],
            grammar: 'Dative/ablative singular masculine'
        },
        'dominum': {
            lemma: 'dominus',
            pos: 'noun',
            meanings: ['Lord', 'master'],
            grammar: 'Accusative singular masculine'
        },
        'dominus': {
            lemma: 'dominus',
            pos: 'noun',
            meanings: ['Lord', 'master', 'owner'],
            grammar: 'Nominative singular masculine, 2nd declension'
        },
        'domus': {
            lemma: 'domus',
            pos: 'noun',
            meanings: ['house', 'home', 'household'],
            grammar: 'Nominative/genitive singular feminine, 4th declension'
        },
        'domum': {
            lemma: 'domus',
            pos: 'noun',
            meanings: ['house', 'home'],
            grammar: 'Accusative singular feminine'
        },
        'domo': {
            lemma: 'domus',
            pos: 'noun',
            meanings: ['house', 'home'],
            grammar: 'Dative/ablative singular feminine'
        },

        // E
        'ecce': {
            lemma: 'ecce',
            pos: 'interjection',
            meanings: ['behold', 'look', 'see'],
            grammar: 'Demonstrative interjection'
        },
        'ecclesia': {
            lemma: 'ecclesia',
            pos: 'noun',
            meanings: ['church', 'assembly', 'congregation'],
            grammar: 'Nominative/ablative singular feminine, 1st declension'
        },
        'ecclesiae': {
            lemma: 'ecclesia',
            pos: 'noun',
            meanings: ['of the church', 'churches'],
            grammar: 'Genitive/dative singular or nominative plural feminine'
        },
        'ecclesiam': {
            lemma: 'ecclesia',
            pos: 'noun',
            meanings: ['church'],
            grammar: 'Accusative singular feminine'
        },
        'ego': {
            lemma: 'ego',
            pos: 'pronoun',
            meanings: ['I'],
            grammar: 'Nominative singular 1st person pronoun'
        },
        'ei': {
            lemma: 'is',
            pos: 'pronoun',
            meanings: ['to him', 'to her', 'to it'],
            grammar: 'Dative singular masculine/feminine/neuter'
        },
        'eius': {
            lemma: 'is',
            pos: 'pronoun',
            meanings: ['his', 'her', 'its', 'of him', 'of her'],
            grammar: 'Genitive singular masculine/feminine/neuter'
        },
        'eis': {
            lemma: 'is',
            pos: 'pronoun',
            meanings: ['to them', 'for them'],
            grammar: 'Dative/ablative plural'
        },
        'eam': {
            lemma: 'is',
            pos: 'pronoun',
            meanings: ['her', 'it'],
            grammar: 'Accusative singular feminine'
        },
        'enim': {
            lemma: 'enim',
            pos: 'conjunction',
            meanings: ['for', 'indeed', 'in fact'],
            grammar: 'Postpositive causal conjunction'
        },
        'eo': {
            lemma: 'is',
            pos: 'pronoun',
            meanings: ['him', 'it', 'by him'],
            grammar: 'Ablative singular masculine/neuter'
        },
        'eorum': {
            lemma: 'is',
            pos: 'pronoun',
            meanings: ['of them', 'their'],
            grammar: 'Genitive plural masculine/neuter'
        },
        'eos': {
            lemma: 'is',
            pos: 'pronoun',
            meanings: ['them'],
            grammar: 'Accusative plural masculine'
        },
        'erant': {
            lemma: 'sum',
            pos: 'verb',
            meanings: ['were', 'existed'],
            grammar: '3rd person plural imperfect indicative active'
        },
        'ergo': {
            lemma: 'ergo',
            pos: 'conjunction/adverb',
            meanings: ['therefore', 'consequently', 'then'],
            grammar: 'Illative conjunction'
        },
        'erit': {
            lemma: 'sum',
            pos: 'verb',
            meanings: ['will be', 'shall be'],
            grammar: '3rd person singular future indicative active'
        },
        'erunt': {
            lemma: 'sum',
            pos: 'verb',
            meanings: ['will be', 'shall be'],
            grammar: '3rd person plural future indicative active'
        },
        'es': {
            lemma: 'sum',
            pos: 'verb',
            meanings: ['you are'],
            grammar: '2nd person singular present indicative active'
        },
        'esse': {
            lemma: 'sum',
            pos: 'verb',
            meanings: ['to be', 'to exist'],
            grammar: 'Present infinitive active'
        },
        'est': {
            lemma: 'sum',
            pos: 'verb',
            meanings: ['is', 'exists'],
            grammar: '3rd person singular present indicative active'
        },
        'et': {
            lemma: 'et',
            pos: 'conjunction',
            meanings: ['and', 'also', 'even'],
            grammar: 'Coordinating conjunction'
        },
        'etiam': {
            lemma: 'etiam',
            pos: 'adverb/conjunction',
            meanings: ['also', 'even', 'still', 'yet'],
            grammar: 'Adverb or conjunction'
        },
        'eum': {
            lemma: 'is',
            pos: 'pronoun',
            meanings: ['him', 'it'],
            grammar: 'Accusative singular masculine'
        },
        'ex': {
            lemma: 'ex/e',
            pos: 'preposition',
            meanings: ['out of', 'from', 'according to'],
            grammar: 'Takes ablative case'
        },

        // F
        'fac': {
            lemma: 'facio',
            pos: 'verb',
            meanings: ['make!', 'do!'],
            grammar: '2nd person singular present imperative active'
        },
        'facere': {
            lemma: 'facio',
            pos: 'verb',
            meanings: ['to make', 'to do'],
            grammar: 'Present infinitive active'
        },
        'faciam': {
            lemma: 'facio',
            pos: 'verb',
            meanings: ['I will make', 'I will do'],
            grammar: '1st person singular future indicative active'
        },
        'facit': {
            lemma: 'facio',
            pos: 'verb',
            meanings: ['makes', 'does'],
            grammar: '3rd person singular present indicative active'
        },
        'facta': {
            lemma: 'facio',
            pos: 'verb/noun',
            meanings: ['made', 'done', 'deeds'],
            grammar: 'Perfect passive participle or neuter plural noun'
        },
        'factum': {
            lemma: 'facio',
            pos: 'verb/noun',
            meanings: ['made', 'done', 'deed', 'fact'],
            grammar: 'Perfect passive participle or noun (accusative singular neuter)'
        },
        'factus': {
            lemma: 'facio',
            pos: 'verb',
            meanings: ['made', 'done', 'become'],
            grammar: 'Perfect passive participle, nominative singular masculine'
        },
        'fecit': {
            lemma: 'facio',
            pos: 'verb',
            meanings: ['made', 'did', 'created'],
            grammar: '3rd person singular perfect indicative active'
        },
        'fiat': {
            lemma: 'fio',
            pos: 'verb',
            meanings: ['let it be done', 'let there be', 'may it happen'],
            grammar: '3rd person singular present subjunctive passive'
        },
        'fieri': {
            lemma: 'fio',
            pos: 'verb',
            meanings: ['to become', 'to be made', 'to happen'],
            grammar: 'Present infinitive passive'
        },
        'fide': {
            lemma: 'fides',
            pos: 'noun',
            meanings: ['faith', 'trust'],
            grammar: 'Ablative singular feminine'
        },
        'fidem': {
            lemma: 'fides',
            pos: 'noun',
            meanings: ['faith', 'trust', 'belief'],
            grammar: 'Accusative singular feminine'
        },
        'fides': {
            lemma: 'fides',
            pos: 'noun',
            meanings: ['faith', 'trust', 'belief', 'loyalty'],
            grammar: 'Nominative singular feminine, 5th declension'
        },
        'fidei': {
            lemma: 'fides',
            pos: 'noun',
            meanings: ['of faith'],
            grammar: 'Genitive/dative singular feminine'
        },
        'fili': {
            lemma: 'filius',
            pos: 'noun',
            meanings: ['son', 'O son'],
            grammar: 'Vocative singular masculine'
        },
        'filii': {
            lemma: 'filius',
            pos: 'noun',
            meanings: ['of the son', 'sons'],
            grammar: 'Genitive singular or nominative plural masculine'
        },
        'filio': {
            lemma: 'filius',
            pos: 'noun',
            meanings: ['son', 'to the son'],
            grammar: 'Dative/ablative singular masculine'
        },
        'filium': {
            lemma: 'filius',
            pos: 'noun',
            meanings: ['son'],
            grammar: 'Accusative singular masculine'
        },
        'firmamentum': {
            lemma: 'firmamentum',
            pos: 'noun',
            meanings: ['firmament', 'expanse', 'sky'],
            grammar: 'Nominative/accusative singular neuter, 2nd declension'
        },
        'fuit': {
            lemma: 'sum',
            pos: 'verb',
            meanings: ['was', 'has been'],
            grammar: '3rd person singular perfect indicative active'
        },
        'fuerunt': {
            lemma: 'sum',
            pos: 'verb',
            meanings: ['were', 'have been'],
            grammar: '3rd person plural perfect indicative active'
        },

        // G
        'generationes': {
            lemma: 'generatio',
            pos: 'noun',
            meanings: ['generations'],
            grammar: 'Nominative/accusative plural feminine'
        },
        'gens': {
            lemma: 'gens',
            pos: 'noun',
            meanings: ['nation', 'people', 'tribe', 'race'],
            grammar: 'Nominative singular feminine, 3rd declension'
        },
        'gentes': {
            lemma: 'gens',
            pos: 'noun',
            meanings: ['nations', 'peoples', 'Gentiles'],
            grammar: 'Nominative/accusative plural feminine'
        },
        'gentibus': {
            lemma: 'gens',
            pos: 'noun',
            meanings: ['nations', 'peoples'],
            grammar: 'Dative/ablative plural feminine'
        },
        'gentium': {
            lemma: 'gens',
            pos: 'noun',
            meanings: ['of nations', 'of peoples'],
            grammar: 'Genitive plural feminine'
        },
        'gloria': {
            lemma: 'gloria',
            pos: 'noun',
            meanings: ['glory', 'fame', 'renown'],
            grammar: 'Nominative/ablative singular feminine, 1st declension'
        },
        'gloriam': {
            lemma: 'gloria',
            pos: 'noun',
            meanings: ['glory'],
            grammar: 'Accusative singular feminine'
        },
        'gloriae': {
            lemma: 'gloria',
            pos: 'noun',
            meanings: ['of glory', 'glories'],
            grammar: 'Genitive/dative singular or nominative plural feminine'
        },
        'gratia': {
            lemma: 'gratia',
            pos: 'noun',
            meanings: ['grace', 'favor', 'thanks'],
            grammar: 'Nominative/ablative singular feminine, 1st declension'
        },
        'gratiam': {
            lemma: 'gratia',
            pos: 'noun',
            meanings: ['grace', 'favor'],
            grammar: 'Accusative singular feminine'
        },
        'gratiae': {
            lemma: 'gratia',
            pos: 'noun',
            meanings: ['of grace', 'thanks'],
            grammar: 'Genitive/dative singular or nominative plural feminine'
        },
        'gratias': {
            lemma: 'gratia',
            pos: 'noun',
            meanings: ['thanks'],
            grammar: 'Accusative plural feminine'
        },

        // H
        'habebat': {
            lemma: 'habeo',
            pos: 'verb',
            meanings: ['was having', 'had', 'held'],
            grammar: '3rd person singular imperfect indicative active'
        },
        'habent': {
            lemma: 'habeo',
            pos: 'verb',
            meanings: ['they have', 'they hold'],
            grammar: '3rd person plural present indicative active'
        },
        'habemus': {
            lemma: 'habeo',
            pos: 'verb',
            meanings: ['we have'],
            grammar: '1st person plural present indicative active'
        },
        'habeo': {
            lemma: 'habeo',
            pos: 'verb',
            meanings: ['I have', 'I hold', 'I possess'],
            grammar: '1st person singular present indicative active'
        },
        'habes': {
            lemma: 'habeo',
            pos: 'verb',
            meanings: ['you have'],
            grammar: '2nd person singular present indicative active'
        },
        'habet': {
            lemma: 'habeo',
            pos: 'verb',
            meanings: ['has', 'holds', 'possesses'],
            grammar: '3rd person singular present indicative active'
        },
        'habuit': {
            lemma: 'habeo',
            pos: 'verb',
            meanings: ['had', 'held'],
            grammar: '3rd person singular perfect indicative active'
        },
        'habitavit': {
            lemma: 'habito',
            pos: 'verb',
            meanings: ['dwelt', 'lived', 'inhabited'],
            grammar: '3rd person singular perfect indicative active'
        },
        'habitat': {
            lemma: 'habito',
            pos: 'verb',
            meanings: ['dwells', 'lives', 'inhabits'],
            grammar: '3rd person singular present indicative active'
        },
        'hic': {
            lemma: 'hic',
            pos: 'pronoun/adjective',
            meanings: ['this', 'this one', 'he'],
            grammar: 'Nominative singular masculine demonstrative'
        },
        'haec': {
            lemma: 'hic',
            pos: 'pronoun/adjective',
            meanings: ['this', 'these', 'she'],
            grammar: 'Nominative singular feminine or nominative/accusative plural neuter'
        },
        'hoc': {
            lemma: 'hic',
            pos: 'pronoun/adjective',
            meanings: ['this', 'this thing'],
            grammar: 'Nominative/accusative singular neuter or ablative singular masculine/neuter'
        },
        'homo': {
            lemma: 'homo',
            pos: 'noun',
            meanings: ['man', 'human being', 'person'],
            grammar: 'Nominative singular masculine, 3rd declension'
        },
        'hominem': {
            lemma: 'homo',
            pos: 'noun',
            meanings: ['man', 'human being'],
            grammar: 'Accusative singular masculine'
        },
        'homines': {
            lemma: 'homo',
            pos: 'noun',
            meanings: ['men', 'humans', 'people'],
            grammar: 'Nominative/accusative plural masculine'
        },
        'hominis': {
            lemma: 'homo',
            pos: 'noun',
            meanings: ['of man', 'of a human being'],
            grammar: 'Genitive singular masculine'
        },
        'hominum': {
            lemma: 'homo',
            pos: 'noun',
            meanings: ['of men', 'of humans'],
            grammar: 'Genitive plural masculine'
        },
        'hunc': {
            lemma: 'hic',
            pos: 'pronoun',
            meanings: ['this'],
            grammar: 'Accusative singular masculine'
        },
        'hora': {
            lemma: 'hora',
            pos: 'noun',
            meanings: ['hour', 'time', 'season'],
            grammar: 'Nominative/ablative singular feminine, 1st declension'
        },
        'horam': {
            lemma: 'hora',
            pos: 'noun',
            meanings: ['hour'],
            grammar: 'Accusative singular feminine'
        },

        // I
        'iam': {
            lemma: 'jam',
            pos: 'adverb',
            meanings: ['now', 'already', 'presently'],
            grammar: 'Temporal adverb'
        },
        'jam': {
            lemma: 'jam',
            pos: 'adverb',
            meanings: ['now', 'already', 'presently'],
            grammar: 'Temporal adverb'
        },
        'ideo': {
            lemma: 'ideo',
            pos: 'adverb',
            meanings: ['therefore', 'for that reason'],
            grammar: 'Causal adverb'
        },
        'igitur': {
            lemma: 'igitur',
            pos: 'conjunction',
            meanings: ['therefore', 'then', 'accordingly'],
            grammar: 'Postpositive conjunction'
        },
        'ille': {
            lemma: 'ille',
            pos: 'pronoun/adjective',
            meanings: ['he', 'that', 'that one'],
            grammar: 'Nominative singular masculine demonstrative'
        },
        'illa': {
            lemma: 'ille',
            pos: 'pronoun/adjective',
            meanings: ['that', 'she', 'those things'],
            grammar: 'Nominative singular feminine or nominative/accusative plural neuter'
        },
        'illum': {
            lemma: 'ille',
            pos: 'pronoun/adjective',
            meanings: ['that', 'him'],
            grammar: 'Accusative singular masculine'
        },
        'illis': {
            lemma: 'ille',
            pos: 'pronoun/adjective',
            meanings: ['to those', 'to them'],
            grammar: 'Dative/ablative plural'
        },
        'illo': {
            lemma: 'ille',
            pos: 'pronoun/adjective',
            meanings: ['that', 'by him'],
            grammar: 'Ablative singular masculine/neuter'
        },
        'in': {
            lemma: 'in',
            pos: 'preposition',
            meanings: ['in', 'into', 'on', 'against'],
            grammar: 'Takes ablative (location) or accusative (motion toward)'
        },
        'iniquitas': {
            lemma: 'iniquitas',
            pos: 'noun',
            meanings: ['iniquity', 'injustice', 'wickedness'],
            grammar: 'Nominative singular feminine, 3rd declension'
        },
        'inter': {
            lemma: 'inter',
            pos: 'preposition',
            meanings: ['between', 'among', 'during'],
            grammar: 'Takes accusative case'
        },
        'ipse': {
            lemma: 'ipse',
            pos: 'pronoun/adjective',
            meanings: ['himself', 'herself', 'itself', 'the very'],
            grammar: 'Nominative singular masculine intensive'
        },
        'ipsa': {
            lemma: 'ipse',
            pos: 'pronoun/adjective',
            meanings: ['herself', 'itself', 'the very'],
            grammar: 'Nominative singular feminine'
        },
        'ipsum': {
            lemma: 'ipse',
            pos: 'pronoun/adjective',
            meanings: ['himself', 'itself'],
            grammar: 'Accusative singular masculine/neuter or nominative singular neuter'
        },
        'ipso': {
            lemma: 'ipse',
            pos: 'pronoun/adjective',
            meanings: ['himself', 'itself'],
            grammar: 'Ablative singular masculine/neuter'
        },
        'israel': {
            lemma: 'Israel',
            pos: 'proper noun',
            meanings: ['Israel'],
            grammar: 'Indeclinable Hebrew name'
        },
        'ita': {
            lemma: 'ita',
            pos: 'adverb',
            meanings: ['thus', 'so', 'in this way'],
            grammar: 'Modal adverb'
        },
        'itaque': {
            lemma: 'itaque',
            pos: 'conjunction',
            meanings: ['and so', 'therefore'],
            grammar: 'Conjunction'
        },

        // J
        'jesus': {
            lemma: 'Jesus',
            pos: 'proper noun',
            meanings: ['Jesus'],
            grammar: 'Nominative singular masculine, 4th declension'
        },
        'jesu': {
            lemma: 'Jesus',
            pos: 'proper noun',
            meanings: ['Jesus', 'of Jesus'],
            grammar: 'Genitive/dative/ablative/vocative singular'
        },
        'jesum': {
            lemma: 'Jesus',
            pos: 'proper noun',
            meanings: ['Jesus'],
            grammar: 'Accusative singular'
        },
        'iesus': {
            lemma: 'Jesus',
            pos: 'proper noun',
            meanings: ['Jesus'],
            grammar: 'Nominative singular masculine, 4th declension'
        },
        'iesu': {
            lemma: 'Jesus',
            pos: 'proper noun',
            meanings: ['Jesus', 'of Jesus'],
            grammar: 'Genitive/dative/ablative/vocative singular'
        },
        'iesum': {
            lemma: 'Jesus',
            pos: 'proper noun',
            meanings: ['Jesus'],
            grammar: 'Accusative singular'
        },
        'judaeus': {
            lemma: 'Judaeus',
            pos: 'noun/adjective',
            meanings: ['Jew', 'Jewish'],
            grammar: 'Nominative singular masculine'
        },
        'judaei': {
            lemma: 'Judaeus',
            pos: 'noun/adjective',
            meanings: ['Jews', 'of the Jew', 'Jewish'],
            grammar: 'Genitive singular or nominative plural masculine'
        },
        'judaeos': {
            lemma: 'Judaeus',
            pos: 'noun/adjective',
            meanings: ['Jews'],
            grammar: 'Accusative plural masculine'
        },
        'iudaei': {
            lemma: 'Judaeus',
            pos: 'noun/adjective',
            meanings: ['Jews', 'of the Jew', 'Jewish'],
            grammar: 'Genitive singular or nominative plural masculine'
        },
        'iudaeos': {
            lemma: 'Judaeus',
            pos: 'noun/adjective',
            meanings: ['Jews'],
            grammar: 'Accusative plural masculine'
        },
        'justitia': {
            lemma: 'justitia',
            pos: 'noun',
            meanings: ['justice', 'righteousness'],
            grammar: 'Nominative/ablative singular feminine, 1st declension'
        },
        'justitiam': {
            lemma: 'justitia',
            pos: 'noun',
            meanings: ['justice', 'righteousness'],
            grammar: 'Accusative singular feminine'
        },
        'iustitia': {
            lemma: 'justitia',
            pos: 'noun',
            meanings: ['justice', 'righteousness'],
            grammar: 'Nominative/ablative singular feminine, 1st declension'
        },
        'iustitiam': {
            lemma: 'justitia',
            pos: 'noun',
            meanings: ['justice', 'righteousness'],
            grammar: 'Accusative singular feminine'
        },
        'joannes': {
            lemma: 'Joannes',
            pos: 'proper noun',
            meanings: ['John'],
            grammar: 'Nominative singular masculine'
        },
        'joannem': {
            lemma: 'Joannes',
            pos: 'proper noun',
            meanings: ['John'],
            grammar: 'Accusative singular masculine'
        },
        'joannis': {
            lemma: 'Joannes',
            pos: 'proper noun',
            meanings: ['of John'],
            grammar: 'Genitive singular masculine'
        },
        'ioannes': {
            lemma: 'Joannes',
            pos: 'proper noun',
            meanings: ['John'],
            grammar: 'Nominative singular masculine'
        },
        'ioannem': {
            lemma: 'Joannes',
            pos: 'proper noun',
            meanings: ['John'],
            grammar: 'Accusative singular masculine'
        },
        'jacobus': {
            lemma: 'Jacobus',
            pos: 'proper noun',
            meanings: ['James', 'Jacob'],
            grammar: 'Nominative singular masculine'
        },
        'jacobi': {
            lemma: 'Jacobus',
            pos: 'proper noun',
            meanings: ['of James', 'of Jacob'],
            grammar: 'Genitive singular masculine'
        },
        'jacobum': {
            lemma: 'Jacobus',
            pos: 'proper noun',
            meanings: ['James', 'Jacob'],
            grammar: 'Accusative singular masculine'
        },
        'jacob': {
            lemma: 'Jacob',
            pos: 'proper noun',
            meanings: ['Jacob'],
            grammar: 'Indeclinable Hebrew name'
        },
        'judas': {
            lemma: 'Judas',
            pos: 'proper noun',
            meanings: ['Judah', 'Judas'],
            grammar: 'Nominative singular masculine'
        },
        'judam': {
            lemma: 'Judas',
            pos: 'proper noun',
            meanings: ['Judah', 'Judas'],
            grammar: 'Accusative singular masculine'
        },
        'iudam': {
            lemma: 'Judas',
            pos: 'proper noun',
            meanings: ['Judah', 'Judas'],
            grammar: 'Accusative singular masculine'
        },

        // L
        'laudate': {
            lemma: 'laudo',
            pos: 'verb',
            meanings: ['praise!'],
            grammar: '2nd person plural present imperative active'
        },
        'lex': {
            lemma: 'lex',
            pos: 'noun',
            meanings: ['law'],
            grammar: 'Nominative singular feminine, 3rd declension'
        },
        'legem': {
            lemma: 'lex',
            pos: 'noun',
            meanings: ['law'],
            grammar: 'Accusative singular feminine'
        },
        'lege': {
            lemma: 'lex',
            pos: 'noun',
            meanings: ['law'],
            grammar: 'Ablative singular feminine'
        },
        'legis': {
            lemma: 'lex',
            pos: 'noun',
            meanings: ['of the law'],
            grammar: 'Genitive singular feminine'
        },
        'locum': {
            lemma: 'locus',
            pos: 'noun',
            meanings: ['place'],
            grammar: 'Accusative singular masculine'
        },
        'locus': {
            lemma: 'locus',
            pos: 'noun',
            meanings: ['place', 'location', 'position'],
            grammar: 'Nominative singular masculine, 2nd declension'
        },
        'loquitur': {
            lemma: 'loquor',
            pos: 'verb',
            meanings: ['speaks', 'says'],
            grammar: '3rd person singular present indicative deponent'
        },
        'lux': {
            lemma: 'lux',
            pos: 'noun',
            meanings: ['light'],
            grammar: 'Nominative singular feminine, 3rd declension'
        },
        'lucem': {
            lemma: 'lux',
            pos: 'noun',
            meanings: ['light'],
            grammar: 'Accusative singular feminine'
        },
        'lucet': {
            lemma: 'luceo',
            pos: 'verb',
            meanings: ['shines', 'is light', 'glows'],
            grammar: '3rd person singular present indicative active'
        },
        'lucis': {
            lemma: 'lux',
            pos: 'noun',
            meanings: ['of light'],
            grammar: 'Genitive singular feminine'
        },
        'lumine': {
            lemma: 'lumen',
            pos: 'noun',
            meanings: ['light', 'lamp'],
            grammar: 'Ablative singular neuter'
        },
        'lumen': {
            lemma: 'lumen',
            pos: 'noun',
            meanings: ['light', 'lamp', 'brightness'],
            grammar: 'Nominative/accusative singular neuter, 3rd declension'
        },
        'luminis': {
            lemma: 'lumen',
            pos: 'noun',
            meanings: ['of light'],
            grammar: 'Genitive singular neuter'
        },

        // M
        'magna': {
            lemma: 'magnus',
            pos: 'adjective',
            meanings: ['great', 'large', 'important'],
            grammar: 'Nominative/ablative singular feminine or nominative/accusative plural neuter'
        },
        'magnum': {
            lemma: 'magnus',
            pos: 'adjective',
            meanings: ['great', 'large'],
            grammar: 'Accusative singular masculine/neuter or nominative singular neuter'
        },
        'magnus': {
            lemma: 'magnus',
            pos: 'adjective',
            meanings: ['great', 'large', 'important'],
            grammar: 'Nominative singular masculine'
        },
        'mala': {
            lemma: 'malus',
            pos: 'adjective/noun',
            meanings: ['evil', 'bad', 'evils'],
            grammar: 'Nominative/ablative singular feminine or nominative/accusative plural neuter'
        },
        'malum': {
            lemma: 'malus',
            pos: 'adjective/noun',
            meanings: ['evil', 'bad'],
            grammar: 'Accusative singular masculine/neuter or nominative singular neuter'
        },
        'manus': {
            lemma: 'manus',
            pos: 'noun',
            meanings: ['hand', 'hands', 'power'],
            grammar: 'Nominative/genitive singular or nominative plural feminine, 4th declension'
        },
        'manum': {
            lemma: 'manus',
            pos: 'noun',
            meanings: ['hand'],
            grammar: 'Accusative singular feminine'
        },
        'mariam': {
            lemma: 'Maria',
            pos: 'proper noun',
            meanings: ['Mary'],
            grammar: 'Accusative singular feminine'
        },
        'me': {
            lemma: 'ego',
            pos: 'pronoun',
            meanings: ['me'],
            grammar: 'Accusative/ablative singular 1st person'
        },
        'mea': {
            lemma: 'meus',
            pos: 'adjective',
            meanings: ['my', 'mine'],
            grammar: 'Nominative/ablative singular feminine or nominative/accusative plural neuter'
        },
        'meam': {
            lemma: 'meus',
            pos: 'adjective',
            meanings: ['my', 'mine'],
            grammar: 'Accusative singular feminine'
        },
        'meum': {
            lemma: 'meus',
            pos: 'adjective',
            meanings: ['my', 'mine'],
            grammar: 'Accusative singular masculine/neuter or nominative singular neuter'
        },
        'meus': {
            lemma: 'meus',
            pos: 'adjective',
            meanings: ['my', 'mine'],
            grammar: 'Nominative singular masculine'
        },
        'mei': {
            lemma: 'meus',
            pos: 'adjective',
            meanings: ['my', 'of me'],
            grammar: 'Genitive singular masculine/neuter or nominative plural masculine'
        },
        'mihi': {
            lemma: 'ego',
            pos: 'pronoun',
            meanings: ['to me', 'for me'],
            grammar: 'Dative singular 1st person'
        },
        'misericordia': {
            lemma: 'misericordia',
            pos: 'noun',
            meanings: ['mercy', 'compassion', 'pity'],
            grammar: 'Nominative/ablative singular feminine, 1st declension'
        },
        'misericordiam': {
            lemma: 'misericordia',
            pos: 'noun',
            meanings: ['mercy', 'compassion'],
            grammar: 'Accusative singular feminine'
        },
        'misericordiae': {
            lemma: 'misericordia',
            pos: 'noun',
            meanings: ['of mercy', 'mercies'],
            grammar: 'Genitive/dative singular or nominative plural feminine'
        },
        'missus': {
            lemma: 'mitto',
            pos: 'verb',
            meanings: ['sent', 'dispatched'],
            grammar: 'Nominative singular masculine perfect passive participle'
        },
        'missum': {
            lemma: 'mitto',
            pos: 'verb',
            meanings: ['sent'],
            grammar: 'Accusative singular masculine or nominative/accusative singular neuter perfect passive participle'
        },
        'misit': {
            lemma: 'mitto',
            pos: 'verb',
            meanings: ['sent'],
            grammar: '3rd person singular perfect indicative active'
        },
        'mortem': {
            lemma: 'mors',
            pos: 'noun',
            meanings: ['death'],
            grammar: 'Accusative singular feminine'
        },
        'mortis': {
            lemma: 'mors',
            pos: 'noun',
            meanings: ['of death'],
            grammar: 'Genitive singular feminine'
        },
        'mors': {
            lemma: 'mors',
            pos: 'noun',
            meanings: ['death'],
            grammar: 'Nominative singular feminine, 3rd declension'
        },
        'mulier': {
            lemma: 'mulier',
            pos: 'noun',
            meanings: ['woman', 'wife'],
            grammar: 'Nominative singular feminine, 3rd declension'
        },
        'mulierem': {
            lemma: 'mulier',
            pos: 'noun',
            meanings: ['woman', 'wife'],
            grammar: 'Accusative singular feminine'
        },
        'multi': {
            lemma: 'multus',
            pos: 'adjective',
            meanings: ['many', 'much'],
            grammar: 'Nominative plural masculine or genitive singular masculine'
        },
        'multa': {
            lemma: 'multus',
            pos: 'adjective',
            meanings: ['many', 'much'],
            grammar: 'Nominative/ablative singular feminine or nominative/accusative plural neuter'
        },
        'multis': {
            lemma: 'multus',
            pos: 'adjective',
            meanings: ['many'],
            grammar: 'Dative/ablative plural'
        },
        'mundo': {
            lemma: 'mundus',
            pos: 'noun',
            meanings: ['world'],
            grammar: 'Dative/ablative singular masculine'
        },
        'mundum': {
            lemma: 'mundus',
            pos: 'noun',
            meanings: ['world'],
            grammar: 'Accusative singular masculine'
        },
        'mundus': {
            lemma: 'mundus',
            pos: 'noun',
            meanings: ['world', 'universe'],
            grammar: 'Nominative singular masculine, 2nd declension'
        },
        'mundi': {
            lemma: 'mundus',
            pos: 'noun',
            meanings: ['of the world', 'worlds'],
            grammar: 'Genitive singular or nominative plural masculine'
        },

        // N
        'nam': {
            lemma: 'nam',
            pos: 'conjunction',
            meanings: ['for', 'because'],
            grammar: 'Explanatory conjunction'
        },
        'nati': {
            lemma: 'nascor',
            pos: 'verb',
            meanings: ['born'],
            grammar: 'Nominative plural masculine perfect passive participle'
        },
        'natus': {
            lemma: 'nascor',
            pos: 'verb',
            meanings: ['born'],
            grammar: 'Nominative singular masculine perfect passive participle'
        },
        'natum': {
            lemma: 'nascor',
            pos: 'verb',
            meanings: ['born'],
            grammar: 'Accusative singular masculine or nominative/accusative singular neuter perfect passive participle'
        },
        'nihil': {
            lemma: 'nihil',
            pos: 'noun/pronoun',
            meanings: ['nothing'],
            grammar: 'Indeclinable neuter noun'
        },
        'nisi': {
            lemma: 'nisi',
            pos: 'conjunction',
            meanings: ['unless', 'if not', 'except'],
            grammar: 'Conditional conjunction'
        },
        'nobis': {
            lemma: 'nos',
            pos: 'pronoun',
            meanings: ['to us', 'for us', 'us'],
            grammar: 'Dative/ablative plural 1st person'
        },
        'nocte': {
            lemma: 'nox',
            pos: 'noun',
            meanings: ['night'],
            grammar: 'Ablative singular feminine'
        },
        'noctem': {
            lemma: 'nox',
            pos: 'noun',
            meanings: ['night'],
            grammar: 'Accusative singular feminine'
        },
        'noctis': {
            lemma: 'nox',
            pos: 'noun',
            meanings: ['of night'],
            grammar: 'Genitive singular feminine'
        },
        'nomen': {
            lemma: 'nomen',
            pos: 'noun',
            meanings: ['name'],
            grammar: 'Nominative/accusative singular neuter, 3rd declension'
        },
        'nomine': {
            lemma: 'nomen',
            pos: 'noun',
            meanings: ['name'],
            grammar: 'Ablative singular neuter'
        },
        'non': {
            lemma: 'non',
            pos: 'adverb',
            meanings: ['not'],
            grammar: 'Negative adverb'
        },
        'nos': {
            lemma: 'nos',
            pos: 'pronoun',
            meanings: ['we', 'us'],
            grammar: 'Nominative/accusative plural 1st person'
        },
        'noster': {
            lemma: 'noster',
            pos: 'adjective',
            meanings: ['our', 'ours'],
            grammar: 'Nominative singular masculine'
        },
        'nostra': {
            lemma: 'noster',
            pos: 'adjective',
            meanings: ['our', 'ours'],
            grammar: 'Nominative/ablative singular feminine or nominative/accusative plural neuter'
        },
        'nostri': {
            lemma: 'noster',
            pos: 'adjective',
            meanings: ['our', 'of us'],
            grammar: 'Genitive singular masculine/neuter or nominative plural masculine'
        },
        'nostrum': {
            lemma: 'noster',
            pos: 'adjective',
            meanings: ['our'],
            grammar: 'Accusative singular masculine/neuter or genitive plural'
        },
        'nox': {
            lemma: 'nox',
            pos: 'noun',
            meanings: ['night'],
            grammar: 'Nominative singular feminine, 3rd declension'
        },
        'nunc': {
            lemma: 'nunc',
            pos: 'adverb',
            meanings: ['now', 'at present'],
            grammar: 'Temporal adverb'
        },
        'numquid': {
            lemma: 'numquid',
            pos: 'particle',
            meanings: ['surely not?', 'whether'],
            grammar: 'Interrogative particle expecting negative answer'
        },

        // O
        'omne': {
            lemma: 'omnis',
            pos: 'adjective',
            meanings: ['all', 'every', 'whole'],
            grammar: 'Nominative/accusative singular neuter'
        },
        'omnes': {
            lemma: 'omnis',
            pos: 'adjective',
            meanings: ['all', 'everyone'],
            grammar: 'Nominative/accusative plural masculine/feminine'
        },
        'omni': {
            lemma: 'omnis',
            pos: 'adjective',
            meanings: ['all', 'every'],
            grammar: 'Dative/ablative singular'
        },
        'omnia': {
            lemma: 'omnis',
            pos: 'adjective',
            meanings: ['all things', 'everything'],
            grammar: 'Nominative/accusative plural neuter'
        },
        'omnibus': {
            lemma: 'omnis',
            pos: 'adjective',
            meanings: ['all', 'to all'],
            grammar: 'Dative/ablative plural'
        },
        'omnis': {
            lemma: 'omnis',
            pos: 'adjective',
            meanings: ['all', 'every', 'whole'],
            grammar: 'Nominative singular masculine/feminine or genitive singular'
        },
        'omnium': {
            lemma: 'omnis',
            pos: 'adjective',
            meanings: ['of all'],
            grammar: 'Genitive plural'
        },
        'opus': {
            lemma: 'opus',
            pos: 'noun',
            meanings: ['work', 'deed', 'need'],
            grammar: 'Nominative/accusative singular neuter, 3rd declension'
        },
        'opera': {
            lemma: 'opus',
            pos: 'noun',
            meanings: ['works', 'deeds'],
            grammar: 'Nominative/accusative plural neuter'
        },
        'operibus': {
            lemma: 'opus',
            pos: 'noun',
            meanings: ['works', 'deeds'],
            grammar: 'Dative/ablative plural neuter'
        },

        // P
        'pater': {
            lemma: 'pater',
            pos: 'noun',
            meanings: ['father'],
            grammar: 'Nominative/vocative singular masculine, 3rd declension'
        },
        'patris': {
            lemma: 'pater',
            pos: 'noun',
            meanings: ['of the father'],
            grammar: 'Genitive singular masculine'
        },
        'patri': {
            lemma: 'pater',
            pos: 'noun',
            meanings: ['to the father'],
            grammar: 'Dative singular masculine'
        },
        'patre': {
            lemma: 'pater',
            pos: 'noun',
            meanings: ['father'],
            grammar: 'Ablative singular masculine'
        },
        'pax': {
            lemma: 'pax',
            pos: 'noun',
            meanings: ['peace'],
            grammar: 'Nominative singular feminine, 3rd declension'
        },
        'pacem': {
            lemma: 'pax',
            pos: 'noun',
            meanings: ['peace'],
            grammar: 'Accusative singular feminine'
        },
        'pace': {
            lemma: 'pax',
            pos: 'noun',
            meanings: ['peace'],
            grammar: 'Ablative singular feminine'
        },
        'pacis': {
            lemma: 'pax',
            pos: 'noun',
            meanings: ['of peace'],
            grammar: 'Genitive singular feminine'
        },
        'peccata': {
            lemma: 'peccatum',
            pos: 'noun',
            meanings: ['sins'],
            grammar: 'Nominative/accusative plural neuter'
        },
        'peccatis': {
            lemma: 'peccatum',
            pos: 'noun',
            meanings: ['sins'],
            grammar: 'Dative/ablative plural neuter'
        },
        'peccato': {
            lemma: 'peccatum',
            pos: 'noun',
            meanings: ['sin'],
            grammar: 'Dative/ablative singular neuter'
        },
        'peccatorum': {
            lemma: 'peccatum',
            pos: 'noun',
            meanings: ['of sins'],
            grammar: 'Genitive plural neuter'
        },
        'peccatum': {
            lemma: 'peccatum',
            pos: 'noun',
            meanings: ['sin'],
            grammar: 'Nominative/accusative singular neuter, 2nd declension'
        },
        'per': {
            lemma: 'per',
            pos: 'preposition',
            meanings: ['through', 'by means of', 'during'],
            grammar: 'Takes accusative case'
        },
        'perhiberet': {
            lemma: 'perhibeo',
            pos: 'verb',
            meanings: ['might bear', 'might give', 'might testify'],
            grammar: '3rd person singular imperfect subjunctive active'
        },
        'perhibeat': {
            lemma: 'perhibeo',
            pos: 'verb',
            meanings: ['may bear', 'may give', 'may testify'],
            grammar: '3rd person singular present subjunctive active'
        },
        'populi': {
            lemma: 'populus',
            pos: 'noun',
            meanings: ['of the people', 'peoples'],
            grammar: 'Genitive singular or nominative plural masculine'
        },
        'populo': {
            lemma: 'populus',
            pos: 'noun',
            meanings: ['people'],
            grammar: 'Dative/ablative singular masculine'
        },
        'populum': {
            lemma: 'populus',
            pos: 'noun',
            meanings: ['people'],
            grammar: 'Accusative singular masculine'
        },
        'populus': {
            lemma: 'populus',
            pos: 'noun',
            meanings: ['people', 'nation'],
            grammar: 'Nominative singular masculine, 2nd declension'
        },
        'posse': {
            lemma: 'possum',
            pos: 'verb',
            meanings: ['to be able'],
            grammar: 'Present infinitive active'
        },
        'possum': {
            lemma: 'possum',
            pos: 'verb',
            meanings: ['I am able', 'I can'],
            grammar: '1st person singular present indicative active'
        },
        'post': {
            lemma: 'post',
            pos: 'preposition/adverb',
            meanings: ['after', 'behind'],
            grammar: 'As preposition takes accusative'
        },
        'potest': {
            lemma: 'possum',
            pos: 'verb',
            meanings: ['is able', 'can'],
            grammar: '3rd person singular present indicative active'
        },
        'potestatem': {
            lemma: 'potestas',
            pos: 'noun',
            meanings: ['power', 'authority'],
            grammar: 'Accusative singular feminine'
        },
        'potestatis': {
            lemma: 'potestas',
            pos: 'noun',
            meanings: ['of power'],
            grammar: 'Genitive singular feminine'
        },
        'potestas': {
            lemma: 'potestas',
            pos: 'noun',
            meanings: ['power', 'authority', 'ability'],
            grammar: 'Nominative singular feminine, 3rd declension'
        },
        'principio': {
            lemma: 'principium',
            pos: 'noun',
            meanings: ['beginning', 'origin'],
            grammar: 'Dative/ablative singular neuter'
        },
        'principium': {
            lemma: 'principium',
            pos: 'noun',
            meanings: ['beginning', 'origin', 'principle'],
            grammar: 'Nominative/accusative singular neuter, 2nd declension'
        },
        'pro': {
            lemma: 'pro',
            pos: 'preposition',
            meanings: ['for', 'on behalf of', 'in front of', 'instead of'],
            grammar: 'Takes ablative case'
        },
        'propter': {
            lemma: 'propter',
            pos: 'preposition',
            meanings: ['because of', 'on account of', 'near'],
            grammar: 'Takes accusative case'
        },
        'propria': {
            lemma: 'proprius',
            pos: 'adjective/noun',
            meanings: ['his own', 'her own', 'own things', 'own home'],
            grammar: 'Nominative/accusative plural neuter or nominative/ablative singular feminine'
        },
        'proprium': {
            lemma: 'proprius',
            pos: 'adjective',
            meanings: ['his own', 'proper', 'characteristic'],
            grammar: 'Accusative singular masculine/neuter or nominative singular neuter'
        },

        // Q
        'quae': {
            lemma: 'qui',
            pos: 'pronoun',
            meanings: ['who', 'which', 'what', 'that'],
            grammar: 'Nominative singular feminine or nominative/accusative plural neuter'
        },
        'quam': {
            lemma: 'qui/quam',
            pos: 'pronoun/adverb',
            meanings: ['whom', 'which', 'than', 'how'],
            grammar: 'Accusative singular feminine or comparative adverb'
        },
        'quando': {
            lemma: 'quando',
            pos: 'adverb/conjunction',
            meanings: ['when', 'at what time', 'since'],
            grammar: 'Temporal adverb or conjunction'
        },
        'quem': {
            lemma: 'qui',
            pos: 'pronoun',
            meanings: ['whom', 'which'],
            grammar: 'Accusative singular masculine'
        },
        'qui': {
            lemma: 'qui',
            pos: 'pronoun',
            meanings: ['who', 'which', 'that'],
            grammar: 'Nominative singular masculine or nominative plural masculine'
        },
        'quia': {
            lemma: 'quia',
            pos: 'conjunction',
            meanings: ['because', 'that', 'since'],
            grammar: 'Causal or declarative conjunction'
        },
        'quibus': {
            lemma: 'qui',
            pos: 'pronoun',
            meanings: ['whom', 'to whom', 'by whom', 'which'],
            grammar: 'Dative/ablative plural'
        },
        'quid': {
            lemma: 'quis',
            pos: 'pronoun',
            meanings: ['what', 'why', 'anything'],
            grammar: 'Nominative/accusative singular neuter interrogative/indefinite'
        },
        'quis': {
            lemma: 'quis',
            pos: 'pronoun',
            meanings: ['who', 'anyone'],
            grammar: 'Nominative singular masculine/feminine interrogative/indefinite'
        },
        'quo': {
            lemma: 'qui',
            pos: 'pronoun/adverb',
            meanings: ['whom', 'which', 'whither', 'where'],
            grammar: 'Ablative singular masculine/neuter or adverb of place'
        },
        'quod': {
            lemma: 'qui/quod',
            pos: 'pronoun/conjunction',
            meanings: ['which', 'that', 'because'],
            grammar: 'Nominative/accusative singular neuter or conjunction'
        },
        'quomodo': {
            lemma: 'quomodo',
            pos: 'adverb',
            meanings: ['how', 'in what way'],
            grammar: 'Interrogative adverb'
        },
        'quoniam': {
            lemma: 'quoniam',
            pos: 'conjunction',
            meanings: ['because', 'since', 'for'],
            grammar: 'Causal conjunction'
        },
        'quoque': {
            lemma: 'quoque',
            pos: 'adverb',
            meanings: ['also', 'too'],
            grammar: 'Postpositive adverb'
        },
        'quotquot': {
            lemma: 'quotquot',
            pos: 'pronoun',
            meanings: ['as many as', 'all who', 'whoever'],
            grammar: 'Indeclinable relative pronoun'
        },

        // R
        'regnum': {
            lemma: 'regnum',
            pos: 'noun',
            meanings: ['kingdom', 'reign', 'royal power'],
            grammar: 'Nominative/accusative singular neuter, 2nd declension'
        },
        'regni': {
            lemma: 'regnum',
            pos: 'noun',
            meanings: ['of the kingdom'],
            grammar: 'Genitive singular neuter'
        },
        'regno': {
            lemma: 'regnum',
            pos: 'noun',
            meanings: ['kingdom'],
            grammar: 'Dative/ablative singular neuter'
        },
        'receperunt': {
            lemma: 'recipio',
            pos: 'verb',
            meanings: ['received', 'accepted', 'welcomed'],
            grammar: '3rd person plural perfect indicative active'
        },
        'recepit': {
            lemma: 'recipio',
            pos: 'verb',
            meanings: ['received', 'accepted'],
            grammar: '3rd person singular perfect indicative active'
        },
        'rex': {
            lemma: 'rex',
            pos: 'noun',
            meanings: ['king'],
            grammar: 'Nominative singular masculine, 3rd declension'
        },
        'regem': {
            lemma: 'rex',
            pos: 'noun',
            meanings: ['king'],
            grammar: 'Accusative singular masculine'
        },
        'regis': {
            lemma: 'rex',
            pos: 'noun',
            meanings: ['of the king'],
            grammar: 'Genitive singular masculine'
        },
        'respondit': {
            lemma: 'respondeo',
            pos: 'verb',
            meanings: ['answered', 'replied'],
            grammar: '3rd person singular perfect indicative active'
        },
        'resurrectio': {
            lemma: 'resurrectio',
            pos: 'noun',
            meanings: ['resurrection'],
            grammar: 'Nominative singular feminine, 3rd declension'
        },
        'resurrectionem': {
            lemma: 'resurrectio',
            pos: 'noun',
            meanings: ['resurrection'],
            grammar: 'Accusative singular feminine'
        },

        // S
        'saecula': {
            lemma: 'saeculum',
            pos: 'noun',
            meanings: ['ages', 'generations', 'centuries'],
            grammar: 'Nominative/accusative plural neuter'
        },
        'saeculorum': {
            lemma: 'saeculum',
            pos: 'noun',
            meanings: ['of ages', 'of generations'],
            grammar: 'Genitive plural neuter'
        },
        'saeculum': {
            lemma: 'saeculum',
            pos: 'noun',
            meanings: ['age', 'generation', 'century', 'world'],
            grammar: 'Nominative/accusative singular neuter, 2nd declension'
        },
        'salus': {
            lemma: 'salus',
            pos: 'noun',
            meanings: ['salvation', 'safety', 'health'],
            grammar: 'Nominative singular feminine, 3rd declension'
        },
        'salutem': {
            lemma: 'salus',
            pos: 'noun',
            meanings: ['salvation', 'safety'],
            grammar: 'Accusative singular feminine'
        },
        'salutis': {
            lemma: 'salus',
            pos: 'noun',
            meanings: ['of salvation'],
            grammar: 'Genitive singular feminine'
        },
        'sancta': {
            lemma: 'sanctus',
            pos: 'adjective',
            meanings: ['holy', 'sacred'],
            grammar: 'Nominative/ablative singular feminine or nominative/accusative plural neuter'
        },
        'sancti': {
            lemma: 'sanctus',
            pos: 'adjective/noun',
            meanings: ['holy', 'of the holy', 'saints'],
            grammar: 'Genitive singular masculine/neuter or nominative plural masculine'
        },
        'sancto': {
            lemma: 'sanctus',
            pos: 'adjective',
            meanings: ['holy', 'sacred'],
            grammar: 'Dative/ablative singular masculine/neuter'
        },
        'sanctum': {
            lemma: 'sanctus',
            pos: 'adjective',
            meanings: ['holy', 'sacred'],
            grammar: 'Accusative singular masculine/neuter or nominative singular neuter'
        },
        'sanctus': {
            lemma: 'sanctus',
            pos: 'adjective',
            meanings: ['holy', 'sacred', 'saint'],
            grammar: 'Nominative singular masculine'
        },
        'sanguis': {
            lemma: 'sanguis',
            pos: 'noun',
            meanings: ['blood'],
            grammar: 'Nominative singular masculine, 3rd declension'
        },
        'sanguinem': {
            lemma: 'sanguis',
            pos: 'noun',
            meanings: ['blood'],
            grammar: 'Accusative singular masculine'
        },
        'sanguinis': {
            lemma: 'sanguis',
            pos: 'noun',
            meanings: ['of blood'],
            grammar: 'Genitive singular masculine'
        },
        'sanguinibus': {
            lemma: 'sanguis',
            pos: 'noun',
            meanings: ['bloods', 'blood'],
            grammar: 'Dative/ablative plural masculine'
        },
        'se': {
            lemma: 'sui',
            pos: 'pronoun',
            meanings: ['himself', 'herself', 'itself', 'themselves'],
            grammar: 'Accusative/ablative reflexive pronoun'
        },
        'sed': {
            lemma: 'sed',
            pos: 'conjunction',
            meanings: ['but', 'however'],
            grammar: 'Adversative conjunction'
        },
        'semper': {
            lemma: 'semper',
            pos: 'adverb',
            meanings: ['always', 'ever', 'forever'],
            grammar: 'Temporal adverb'
        },
        'si': {
            lemma: 'si',
            pos: 'conjunction',
            meanings: ['if', 'whether'],
            grammar: 'Conditional conjunction'
        },
        'sic': {
            lemma: 'sic',
            pos: 'adverb',
            meanings: ['thus', 'so', 'in this way'],
            grammar: 'Modal adverb'
        },
        'sicut': {
            lemma: 'sicut',
            pos: 'conjunction/adverb',
            meanings: ['just as', 'as', 'like'],
            grammar: 'Comparative conjunction'
        },
        'simon': {
            lemma: 'Simon',
            pos: 'proper noun',
            meanings: ['Simon'],
            grammar: 'Nominative singular masculine'
        },
        'sine': {
            lemma: 'sine',
            pos: 'preposition',
            meanings: ['without'],
            grammar: 'Takes ablative case'
        },
        'spiritu': {
            lemma: 'spiritus',
            pos: 'noun',
            meanings: ['spirit', 'breath'],
            grammar: 'Ablative singular masculine'
        },
        'spiritum': {
            lemma: 'spiritus',
            pos: 'noun',
            meanings: ['spirit', 'breath'],
            grammar: 'Accusative singular masculine'
        },
        'spiritus': {
            lemma: 'spiritus',
            pos: 'noun',
            meanings: ['spirit', 'breath', 'wind'],
            grammar: 'Nominative/genitive singular masculine, 4th declension'
        },
        'sub': {
            lemma: 'sub',
            pos: 'preposition',
            meanings: ['under', 'beneath', 'at the foot of'],
            grammar: 'Takes ablative (location) or accusative (motion)'
        },
        'sui': {
            lemma: 'sui',
            pos: 'pronoun',
            meanings: ['of himself', 'of herself', 'of itself'],
            grammar: 'Genitive singular reflexive'
        },
        'sum': {
            lemma: 'sum',
            pos: 'verb',
            meanings: ['I am', 'I exist'],
            grammar: '1st person singular present indicative active'
        },
        'sumus': {
            lemma: 'sum',
            pos: 'verb',
            meanings: ['we are'],
            grammar: '1st person plural present indicative active'
        },
        'sunt': {
            lemma: 'sum',
            pos: 'verb',
            meanings: ['they are', 'there are'],
            grammar: '3rd person plural present indicative active'
        },
        'super': {
            lemma: 'super',
            pos: 'preposition/adverb',
            meanings: ['above', 'over', 'upon', 'concerning'],
            grammar: 'Takes accusative or ablative'
        },
        'suos': {
            lemma: 'suus',
            pos: 'adjective',
            meanings: ['his own', 'her own', 'their own'],
            grammar: 'Accusative plural masculine'
        },
        'suum': {
            lemma: 'suus',
            pos: 'adjective',
            meanings: ['his own', 'her own', 'its own'],
            grammar: 'Accusative singular masculine/neuter or nominative singular neuter'
        },
        'suus': {
            lemma: 'suus',
            pos: 'adjective',
            meanings: ['his own', 'her own', 'its own', 'their own'],
            grammar: 'Nominative singular masculine possessive reflexive'
        },
        'sua': {
            lemma: 'suus',
            pos: 'adjective',
            meanings: ['his own', 'her own', 'its own'],
            grammar: 'Nominative/ablative singular feminine or nominative/accusative plural neuter'
        },
        'suam': {
            lemma: 'suus',
            pos: 'adjective',
            meanings: ['his own', 'her own'],
            grammar: 'Accusative singular feminine'
        },

        // T
        'tam': {
            lemma: 'tam',
            pos: 'adverb',
            meanings: ['so', 'so much', 'to such a degree'],
            grammar: 'Adverb of degree'
        },
        'tamen': {
            lemma: 'tamen',
            pos: 'conjunction',
            meanings: ['however', 'nevertheless', 'yet'],
            grammar: 'Adversative conjunction'
        },
        'te': {
            lemma: 'tu',
            pos: 'pronoun',
            meanings: ['you', 'yourself'],
            grammar: 'Accusative/ablative singular 2nd person'
        },
        'templo': {
            lemma: 'templum',
            pos: 'noun',
            meanings: ['temple'],
            grammar: 'Dative/ablative singular neuter'
        },
        'templum': {
            lemma: 'templum',
            pos: 'noun',
            meanings: ['temple'],
            grammar: 'Nominative/accusative singular neuter, 2nd declension'
        },
        'tempore': {
            lemma: 'tempus',
            pos: 'noun',
            meanings: ['time'],
            grammar: 'Ablative singular neuter'
        },
        'temporis': {
            lemma: 'tempus',
            pos: 'noun',
            meanings: ['of time'],
            grammar: 'Genitive singular neuter'
        },
        'tempus': {
            lemma: 'tempus',
            pos: 'noun',
            meanings: ['time', 'season', 'occasion'],
            grammar: 'Nominative/accusative singular neuter, 3rd declension'
        },
        'tenebrae': {
            lemma: 'tenebrae',
            pos: 'noun',
            meanings: ['darkness', 'shadows', 'gloom'],
            grammar: 'Nominative plural feminine (plural only), 1st declension'
        },
        'tenebrarum': {
            lemma: 'tenebrae',
            pos: 'noun',
            meanings: ['of darkness'],
            grammar: 'Genitive plural feminine'
        },
        'tenebras': {
            lemma: 'tenebrae',
            pos: 'noun',
            meanings: ['darkness'],
            grammar: 'Accusative plural feminine'
        },
        'tenebris': {
            lemma: 'tenebrae',
            pos: 'noun',
            meanings: ['darkness'],
            grammar: 'Dative/ablative plural feminine'
        },
        'testimonio': {
            lemma: 'testimonium',
            pos: 'noun',
            meanings: ['testimony', 'witness'],
            grammar: 'Dative/ablative singular neuter'
        },
        'terra': {
            lemma: 'terra',
            pos: 'noun',
            meanings: ['earth', 'land', 'ground'],
            grammar: 'Nominative/ablative singular feminine, 1st declension'
        },
        'terrae': {
            lemma: 'terra',
            pos: 'noun',
            meanings: ['of the earth', 'lands'],
            grammar: 'Genitive/dative singular or nominative plural feminine'
        },
        'terram': {
            lemma: 'terra',
            pos: 'noun',
            meanings: ['earth', 'land'],
            grammar: 'Accusative singular feminine'
        },
        'tibi': {
            lemma: 'tu',
            pos: 'pronoun',
            meanings: ['to you', 'for you'],
            grammar: 'Dative singular 2nd person'
        },
        'timete': {
            lemma: 'timeo',
            pos: 'verb',
            meanings: ['fear!', 'be afraid!'],
            grammar: '2nd person plural present imperative active'
        },
        'timor': {
            lemma: 'timor',
            pos: 'noun',
            meanings: ['fear', 'dread'],
            grammar: 'Nominative singular masculine, 3rd declension'
        },
        'timorem': {
            lemma: 'timor',
            pos: 'noun',
            meanings: ['fear'],
            grammar: 'Accusative singular masculine'
        },
        'tu': {
            lemma: 'tu',
            pos: 'pronoun',
            meanings: ['you'],
            grammar: 'Nominative singular 2nd person'
        },
        'tua': {
            lemma: 'tuus',
            pos: 'adjective',
            meanings: ['your', 'yours'],
            grammar: 'Nominative/ablative singular feminine or nominative/accusative plural neuter'
        },
        'tuam': {
            lemma: 'tuus',
            pos: 'adjective',
            meanings: ['your', 'yours'],
            grammar: 'Accusative singular feminine'
        },
        'tui': {
            lemma: 'tuus',
            pos: 'adjective',
            meanings: ['your', 'of you'],
            grammar: 'Genitive singular masculine/neuter or nominative plural masculine'
        },
        'tuum': {
            lemma: 'tuus',
            pos: 'adjective',
            meanings: ['your', 'yours'],
            grammar: 'Accusative singular masculine/neuter or nominative singular neuter'
        },
        'tuus': {
            lemma: 'tuus',
            pos: 'adjective',
            meanings: ['your', 'yours'],
            grammar: 'Nominative singular masculine'
        },
        'tunc': {
            lemma: 'tunc',
            pos: 'adverb',
            meanings: ['then', 'at that time'],
            grammar: 'Temporal adverb'
        },

        // U
        'ubi': {
            lemma: 'ubi',
            pos: 'adverb/conjunction',
            meanings: ['where', 'when'],
            grammar: 'Adverb of place or temporal conjunction'
        },
        'unam': {
            lemma: 'unus',
            pos: 'adjective',
            meanings: ['one'],
            grammar: 'Accusative singular feminine'
        },
        'unum': {
            lemma: 'unus',
            pos: 'adjective',
            meanings: ['one'],
            grammar: 'Accusative singular masculine/neuter or nominative singular neuter'
        },
        'unus': {
            lemma: 'unus',
            pos: 'adjective',
            meanings: ['one', 'single', 'alone'],
            grammar: 'Nominative singular masculine'
        },
        'uno': {
            lemma: 'unus',
            pos: 'adjective',
            meanings: ['one'],
            grammar: 'Dative/ablative singular masculine/neuter'
        },
        'unigeniti': {
            lemma: 'unigenitus',
            pos: 'adjective',
            meanings: ['only-begotten', 'only'],
            grammar: 'Genitive singular masculine/neuter or nominative plural masculine'
        },
        'unigenitum': {
            lemma: 'unigenitus',
            pos: 'adjective',
            meanings: ['only-begotten', 'only'],
            grammar: 'Accusative singular masculine or nominative/accusative singular neuter'
        },
        'unigenitus': {
            lemma: 'unigenitus',
            pos: 'adjective',
            meanings: ['only-begotten', 'only'],
            grammar: 'Nominative singular masculine'
        },
        'usque': {
            lemma: 'usque',
            pos: 'adverb/preposition',
            meanings: ['all the way', 'continuously', 'until'],
            grammar: 'Adverb or preposition (with ad)'
        },
        'ut': {
            lemma: 'ut',
            pos: 'conjunction/adverb',
            meanings: ['that', 'so that', 'in order that', 'as', 'when'],
            grammar: 'Purpose/result conjunction or comparative adverb'
        },

        // V
        'valde': {
            lemma: 'valde',
            pos: 'adverb',
            meanings: ['very', 'greatly', 'exceedingly'],
            grammar: 'Adverb of degree'
        },
        'vel': {
            lemma: 'vel',
            pos: 'conjunction',
            meanings: ['or', 'even'],
            grammar: 'Disjunctive conjunction'
        },
        'veni': {
            lemma: 'venio',
            pos: 'verb',
            meanings: ['come!', 'I came'],
            grammar: '2nd person singular present imperative or 1st person singular perfect indicative'
        },
        'venit': {
            lemma: 'venio',
            pos: 'verb',
            meanings: ['comes', 'came'],
            grammar: '3rd person singular present or perfect indicative active'
        },
        'veniunt': {
            lemma: 'venio',
            pos: 'verb',
            meanings: ['they come'],
            grammar: '3rd person plural present indicative active'
        },
        'venientem': {
            lemma: 'venio',
            pos: 'verb',
            meanings: ['coming'],
            grammar: 'Accusative singular masculine/feminine present active participle'
        },
        'vera': {
            lemma: 'verus',
            pos: 'adjective',
            meanings: ['true', 'real', 'genuine'],
            grammar: 'Nominative/ablative singular feminine or nominative/accusative plural neuter'
        },
        'verum': {
            lemma: 'verus',
            pos: 'adjective/noun',
            meanings: ['true', 'truth', 'real'],
            grammar: 'Accusative singular masculine/neuter or nominative singular neuter'
        },
        'verus': {
            lemma: 'verus',
            pos: 'adjective',
            meanings: ['true', 'real', 'genuine'],
            grammar: 'Nominative singular masculine'
        },
        'verba': {
            lemma: 'verbum',
            pos: 'noun',
            meanings: ['words'],
            grammar: 'Nominative/accusative plural neuter'
        },
        'verbi': {
            lemma: 'verbum',
            pos: 'noun',
            meanings: ['of the word'],
            grammar: 'Genitive singular neuter'
        },
        'verbo': {
            lemma: 'verbum',
            pos: 'noun',
            meanings: ['word'],
            grammar: 'Dative/ablative singular neuter'
        },
        'verborum': {
            lemma: 'verbum',
            pos: 'noun',
            meanings: ['of words'],
            grammar: 'Genitive plural neuter'
        },
        'verbum': {
            lemma: 'verbum',
            pos: 'noun',
            meanings: ['Word', 'word'],
            grammar: 'Nominative/accusative singular neuter, 2nd declension'
        },
        'veritas': {
            lemma: 'veritas',
            pos: 'noun',
            meanings: ['truth'],
            grammar: 'Nominative singular feminine, 3rd declension'
        },
        'veritatem': {
            lemma: 'veritas',
            pos: 'noun',
            meanings: ['truth'],
            grammar: 'Accusative singular feminine'
        },
        'veritatis': {
            lemma: 'veritas',
            pos: 'noun',
            meanings: ['of truth'],
            grammar: 'Genitive singular feminine'
        },
        'vero': {
            lemma: 'vero',
            pos: 'adverb/conjunction',
            meanings: ['truly', 'indeed', 'but', 'however'],
            grammar: 'Postpositive adverb or conjunction'
        },
        'vester': {
            lemma: 'vester',
            pos: 'adjective',
            meanings: ['your', 'yours (plural)'],
            grammar: 'Nominative singular masculine'
        },
        'vestra': {
            lemma: 'vester',
            pos: 'adjective',
            meanings: ['your', 'yours (plural)'],
            grammar: 'Nominative/ablative singular feminine or nominative/accusative plural neuter'
        },
        'via': {
            lemma: 'via',
            pos: 'noun',
            meanings: ['way', 'road', 'path', 'journey'],
            grammar: 'Nominative/ablative singular feminine, 1st declension'
        },
        'viam': {
            lemma: 'via',
            pos: 'noun',
            meanings: ['way', 'road'],
            grammar: 'Accusative singular feminine'
        },
        'vias': {
            lemma: 'via',
            pos: 'noun',
            meanings: ['ways', 'roads'],
            grammar: 'Accusative plural feminine'
        },
        'videns': {
            lemma: 'video',
            pos: 'verb',
            meanings: ['seeing'],
            grammar: 'Present active participle, nominative singular'
        },
        'videt': {
            lemma: 'video',
            pos: 'verb',
            meanings: ['sees'],
            grammar: '3rd person singular present indicative active'
        },
        'videte': {
            lemma: 'video',
            pos: 'verb',
            meanings: ['see!', 'look!'],
            grammar: '2nd person plural present imperative active'
        },
        'vidi': {
            lemma: 'video',
            pos: 'verb',
            meanings: ['I saw'],
            grammar: '1st person singular perfect indicative active'
        },
        'vidit': {
            lemma: 'video',
            pos: 'verb',
            meanings: ['saw'],
            grammar: '3rd person singular perfect indicative active'
        },
        'vir': {
            lemma: 'vir',
            pos: 'noun',
            meanings: ['man', 'husband'],
            grammar: 'Nominative singular masculine, 2nd declension'
        },
        'virum': {
            lemma: 'vir',
            pos: 'noun',
            meanings: ['man', 'husband'],
            grammar: 'Accusative singular masculine'
        },
        'viri': {
            lemma: 'vir',
            pos: 'noun',
            meanings: ['of the man', 'men'],
            grammar: 'Genitive singular or nominative plural masculine'
        },
        'vita': {
            lemma: 'vita',
            pos: 'noun',
            meanings: ['life'],
            grammar: 'Nominative/ablative singular feminine, 1st declension'
        },
        'vitae': {
            lemma: 'vita',
            pos: 'noun',
            meanings: ['of life', 'lives'],
            grammar: 'Genitive/dative singular or nominative plural feminine'
        },
        'vitam': {
            lemma: 'vita',
            pos: 'noun',
            meanings: ['life'],
            grammar: 'Accusative singular feminine'
        },
        'vocabitur': {
            lemma: 'voco',
            pos: 'verb',
            meanings: ['will be called'],
            grammar: '3rd person singular future indicative passive'
        },
        'vocavit': {
            lemma: 'voco',
            pos: 'verb',
            meanings: ['called', 'named'],
            grammar: '3rd person singular perfect indicative active'
        },
        'vobis': {
            lemma: 'vos',
            pos: 'pronoun',
            meanings: ['to you', 'for you', 'you'],
            grammar: 'Dative/ablative plural 2nd person'
        },
        'vos': {
            lemma: 'vos',
            pos: 'pronoun',
            meanings: ['you (plural)'],
            grammar: 'Nominative/accusative plural 2nd person'
        },
        'voluntate': {
            lemma: 'voluntas',
            pos: 'noun',
            meanings: ['will', 'wish', 'desire'],
            grammar: 'Ablative singular feminine'
        },
        'voluntatem': {
            lemma: 'voluntas',
            pos: 'noun',
            meanings: ['will', 'wish', 'desire'],
            grammar: 'Accusative singular feminine'
        },
        'voluntas': {
            lemma: 'voluntas',
            pos: 'noun',
            meanings: ['will', 'wish', 'desire', 'intention'],
            grammar: 'Nominative singular feminine, 3rd declension'
        },
        'voluntatis': {
            lemma: 'voluntas',
            pos: 'noun',
            meanings: ['of the will'],
            grammar: 'Genitive singular feminine'
        },
        'vox': {
            lemma: 'vox',
            pos: 'noun',
            meanings: ['voice', 'sound', 'word'],
            grammar: 'Nominative singular feminine, 3rd declension'
        },
        'vocem': {
            lemma: 'vox',
            pos: 'noun',
            meanings: ['voice'],
            grammar: 'Accusative singular feminine'
        },
        'vocis': {
            lemma: 'vox',
            pos: 'noun',
            meanings: ['of the voice'],
            grammar: 'Genitive singular feminine'
        },

        // Additional common words
        'inanis': {
            lemma: 'inanis',
            pos: 'adjective',
            meanings: ['empty', 'void', 'vain'],
            grammar: 'Nominative singular masculine/feminine, 3rd declension'
        },
        'vacua': {
            lemma: 'vacuus',
            pos: 'adjective',
            meanings: ['empty', 'void', 'vacant'],
            grammar: 'Nominative/ablative singular feminine or nominative/accusative plural neuter'
        },
        'ferebatur': {
            lemma: 'fero',
            pos: 'verb',
            meanings: ['was moving', 'was being carried', 'was hovering'],
            grammar: '3rd person singular imperfect indicative passive'
        },
        'faciem': {
            lemma: 'facies',
            pos: 'noun',
            meanings: ['face', 'surface', 'appearance'],
            grammar: 'Accusative singular feminine'
        },
        'facie': {
            lemma: 'facies',
            pos: 'noun',
            meanings: ['face', 'surface'],
            grammar: 'Ablative singular feminine'
        },
        'abyssi': {
            lemma: 'abyssus',
            pos: 'noun',
            meanings: ['abyss', 'deep', 'bottomless pit'],
            grammar: 'Genitive singular feminine'
        },
        'abyssus': {
            lemma: 'abyssus',
            pos: 'noun',
            meanings: ['abyss', 'deep', 'bottomless pit'],
            grammar: 'Nominative singular feminine, 2nd declension (Greek loanword)'
        },
        'divisit': {
            lemma: 'divido',
            pos: 'verb',
            meanings: ['divided', 'separated'],
            grammar: '3rd person singular perfect indicative active'
        },
        'appellavit': {
            lemma: 'appello',
            pos: 'verb',
            meanings: ['called', 'named'],
            grammar: '3rd person singular perfect indicative active'
        },
        'congregationes': {
            lemma: 'congregatio',
            pos: 'noun',
            meanings: ['gatherings', 'assemblies', 'collections'],
            grammar: 'Nominative/accusative plural feminine'
        },
        'congregentur': {
            lemma: 'congrego',
            pos: 'verb',
            meanings: ['let them be gathered'],
            grammar: '3rd person plural present subjunctive passive'
        },
        'appareat': {
            lemma: 'appareo',
            pos: 'verb',
            meanings: ['let it appear', 'may it appear'],
            grammar: '3rd person singular present subjunctive active'
        },
        'arida': {
            lemma: 'aridus',
            pos: 'adjective/noun',
            meanings: ['dry', 'dry land'],
            grammar: 'Nominative singular feminine or nominative/accusative plural neuter'
        },
        'aridam': {
            lemma: 'aridus',
            pos: 'adjective',
            meanings: ['dry', 'dry land'],
            grammar: 'Accusative singular feminine'
        },
        'germinet': {
            lemma: 'germino',
            pos: 'verb',
            meanings: ['let it sprout', 'let it bring forth'],
            grammar: '3rd person singular present subjunctive active'
        },
        'herbam': {
            lemma: 'herba',
            pos: 'noun',
            meanings: ['plant', 'herb', 'grass'],
            grammar: 'Accusative singular feminine'
        },
        'virentem': {
            lemma: 'virens',
            pos: 'participle',
            meanings: ['green', 'verdant', 'flourishing'],
            grammar: 'Accusative singular masculine/feminine, present active participle'
        },
        'facientem': {
            lemma: 'facio',
            pos: 'verb',
            meanings: ['making', 'producing'],
            grammar: 'Accusative singular masculine/feminine, present active participle'
        },
        'semen': {
            lemma: 'semen',
            pos: 'noun',
            meanings: ['seed', 'offspring'],
            grammar: 'Nominative/accusative singular neuter, 3rd declension'
        },
        'lignum': {
            lemma: 'lignum',
            pos: 'noun',
            meanings: ['tree', 'wood'],
            grammar: 'Nominative/accusative singular neuter, 2nd declension'
        },
        'pomiferum': {
            lemma: 'pomifer',
            pos: 'adjective',
            meanings: ['fruit-bearing'],
            grammar: 'Accusative singular masculine/neuter or nominative singular neuter'
        },
        'fructum': {
            lemma: 'fructus',
            pos: 'noun',
            meanings: ['fruit'],
            grammar: 'Accusative singular masculine, 4th declension'
        },
        'genus': {
            lemma: 'genus',
            pos: 'noun',
            meanings: ['kind', 'type', 'species', 'race'],
            grammar: 'Nominative/accusative singular neuter, 3rd declension'
        },
        'cui': {
            lemma: 'qui',
            pos: 'pronoun',
            meanings: ['to whom', 'to which'],
            grammar: 'Dative singular masculine/feminine/neuter'
        },
        'cuius': {
            lemma: 'qui',
            pos: 'pronoun',
            meanings: ['whose', 'of which'],
            grammar: 'Genitive singular masculine/feminine/neuter'
        },
        'semetipso': {
            lemma: 'semetipse',
            pos: 'pronoun',
            meanings: ['itself', 'himself'],
            grammar: 'Ablative singular masculine/neuter, emphatic reflexive'
        },
        'secundum': {
            lemma: 'secundum',
            pos: 'preposition/adjective',
            meanings: ['according to', 'after', 'second'],
            grammar: 'Preposition taking accusative or accusative adjective'
        },
        'speciem': {
            lemma: 'species',
            pos: 'noun',
            meanings: ['appearance', 'kind', 'species'],
            grammar: 'Accusative singular feminine, 5th declension'
        },
        'protulit': {
            lemma: 'profero',
            pos: 'verb',
            meanings: ['brought forth', 'produced'],
            grammar: '3rd person singular perfect indicative active'
        },
        'luminaria': {
            lemma: 'luminare',
            pos: 'noun',
            meanings: ['lights', 'luminaries'],
            grammar: 'Nominative/accusative plural neuter, 3rd declension'
        },
        'luminare': {
            lemma: 'luminare',
            pos: 'noun',
            meanings: ['light', 'luminary'],
            grammar: 'Nominative/accusative singular neuter'
        },
        'maius': {
            lemma: 'magnus',
            pos: 'adjective',
            meanings: ['greater', 'larger'],
            grammar: 'Nominative/accusative singular neuter comparative'
        },
        'minus': {
            lemma: 'parvus',
            pos: 'adjective',
            meanings: ['smaller', 'less'],
            grammar: 'Nominative/accusative singular neuter comparative'
        },
        'praeesset': {
            lemma: 'praesum',
            pos: 'verb',
            meanings: ['to preside over', 'to rule'],
            grammar: '3rd person singular imperfect subjunctive active'
        },
        'stellas': {
            lemma: 'stella',
            pos: 'noun',
            meanings: ['stars'],
            grammar: 'Accusative plural feminine'
        },
        'posuit': {
            lemma: 'pono',
            pos: 'verb',
            meanings: ['placed', 'put', 'set'],
            grammar: '3rd person singular perfect indicative active'
        },
        'lucerent': {
            lemma: 'luceo',
            pos: 'verb',
            meanings: ['to shine', 'to give light'],
            grammar: '3rd person plural imperfect subjunctive active'
        },
        'dividerent': {
            lemma: 'divido',
            pos: 'verb',
            meanings: ['to divide', 'to separate'],
            grammar: '3rd person plural imperfect subjunctive active'
        },
        'producant': {
            lemma: 'produco',
            pos: 'verb',
            meanings: ['let them bring forth', 'let them produce'],
            grammar: '3rd person plural present subjunctive active'
        },
        'reptile': {
            lemma: 'reptile',
            pos: 'noun',
            meanings: ['creeping thing', 'reptile'],
            grammar: 'Nominative/accusative singular neuter, 3rd declension'
        },
        'viventis': {
            lemma: 'vivens',
            pos: 'participle',
            meanings: ['living'],
            grammar: 'Genitive singular, present active participle of vivo'
        },
        'volatile': {
            lemma: 'volatile',
            pos: 'noun/adjective',
            meanings: ['flying creature', 'bird', 'flying'],
            grammar: 'Nominative/accusative singular neuter'
        },
        'volet': {
            lemma: 'volo',
            pos: 'verb',
            meanings: ['may fly', 'let it fly'],
            grammar: '3rd person singular present subjunctive active'
        },
        'creavitque': {
            lemma: 'creo',
            pos: 'verb',
            meanings: ['and created'],
            grammar: '3rd person singular perfect indicative active + enclitic -que'
        },
        'cete': {
            lemma: 'cetus',
            pos: 'noun',
            meanings: ['sea creatures', 'whales', 'large fish'],
            grammar: 'Accusative plural neuter (Greek loanword)'
        },
        'grandia': {
            lemma: 'grandis',
            pos: 'adjective',
            meanings: ['great', 'large'],
            grammar: 'Nominative/accusative plural neuter'
        },
        'atque': {
            lemma: 'atque',
            pos: 'conjunction',
            meanings: ['and', 'and also', 'as well as'],
            grammar: 'Coordinating conjunction'
        },
        'motabilem': {
            lemma: 'motabilis',
            pos: 'adjective',
            meanings: ['movable', 'moving'],
            grammar: 'Accusative singular masculine/feminine'
        },
        'produxerunt': {
            lemma: 'produco',
            pos: 'verb',
            meanings: ['brought forth', 'produced'],
            grammar: '3rd person plural perfect indicative active'
        },
        'benedixitque': {
            lemma: 'benedico',
            pos: 'verb',
            meanings: ['and blessed'],
            grammar: '3rd person singular perfect indicative active + enclitic -que'
        },
        'crescite': {
            lemma: 'cresco',
            pos: 'verb',
            meanings: ['grow!', 'increase!'],
            grammar: '2nd person plural present imperative active'
        },
        'multiplicamini': {
            lemma: 'multiplico',
            pos: 'verb',
            meanings: ['be multiplied!', 'multiply!'],
            grammar: '2nd person plural present imperative passive/deponent'
        },
        'implete': {
            lemma: 'impleo',
            pos: 'verb',
            meanings: ['fill!'],
            grammar: '2nd person plural present imperative active'
        },
        'multiplicetur': {
            lemma: 'multiplico',
            pos: 'verb',
            meanings: ['let it be multiplied'],
            grammar: '3rd person singular present subjunctive passive'
        },
        'producat': {
            lemma: 'produco',
            pos: 'verb',
            meanings: ['let it bring forth'],
            grammar: '3rd person singular present subjunctive active'
        },
        'iumenta': {
            lemma: 'jumentum',
            pos: 'noun',
            meanings: ['beasts of burden', 'cattle', 'livestock'],
            grammar: 'Nominative/accusative plural neuter'
        },
        'jumenta': {
            lemma: 'jumentum',
            pos: 'noun',
            meanings: ['beasts of burden', 'cattle', 'livestock'],
            grammar: 'Nominative/accusative plural neuter'
        },
        'iuxta': {
            lemma: 'juxta',
            pos: 'preposition/adverb',
            meanings: ['near', 'beside', 'according to'],
            grammar: 'Takes accusative case'
        },
        'juxta': {
            lemma: 'juxta',
            pos: 'preposition/adverb',
            meanings: ['near', 'beside', 'according to'],
            grammar: 'Takes accusative case'
        },
        'joseph': {
            lemma: 'Joseph',
            pos: 'proper noun',
            meanings: ['Joseph'],
            grammar: 'Indeclinable Hebrew name'
        },
        'ioseph': {
            lemma: 'Joseph',
            pos: 'proper noun',
            meanings: ['Joseph'],
            grammar: 'Indeclinable Hebrew name'
        },
        'reptilia': {
            lemma: 'reptile',
            pos: 'noun',
            meanings: ['creeping things', 'reptiles'],
            grammar: 'Nominative/accusative plural neuter'
        },
        'bestias': {
            lemma: 'bestia',
            pos: 'noun',
            meanings: ['beasts', 'wild animals'],
            grammar: 'Accusative plural feminine'
        },
        'faciamus': {
            lemma: 'facio',
            pos: 'verb',
            meanings: ['let us make'],
            grammar: '1st person plural present subjunctive active (hortatory)'
        },
        'illuminat': {
            lemma: 'illumino',
            pos: 'verb',
            meanings: ['illuminates', 'enlightens', 'lights up'],
            grammar: '3rd person singular present indicative active'
        },
        'imaginem': {
            lemma: 'imago',
            pos: 'noun',
            meanings: ['image', 'likeness'],
            grammar: 'Accusative singular feminine'
        },
        'nostram': {
            lemma: 'noster',
            pos: 'adjective',
            meanings: ['our'],
            grammar: 'Accusative singular feminine'
        },
        'praesit': {
            lemma: 'praesum',
            pos: 'verb',
            meanings: ['let him rule', 'let him preside'],
            grammar: '3rd person singular present subjunctive active'
        },
        'piscibus': {
            lemma: 'piscis',
            pos: 'noun',
            meanings: ['fish'],
            grammar: 'Dative/ablative plural masculine'
        },
        'maris': {
            lemma: 'mare',
            pos: 'noun',
            meanings: ['of the sea', 'sea'],
            grammar: 'Genitive singular neuter'
        },
        'volatilibus': {
            lemma: 'volatile',
            pos: 'noun',
            meanings: ['flying creatures', 'birds'],
            grammar: 'Dative/ablative plural neuter'
        },
        'bestiis': {
            lemma: 'bestia',
            pos: 'noun',
            meanings: ['beasts', 'wild animals'],
            grammar: 'Dative/ablative plural feminine'
        },
        'universae': {
            lemma: 'universus',
            pos: 'adjective',
            meanings: ['whole', 'entire', 'all'],
            grammar: 'Genitive/dative singular feminine or nominative plural feminine'
        },
        'universaeque': {
            lemma: 'universus',
            pos: 'adjective',
            meanings: ['and the whole', 'and all'],
            grammar: 'Genitive/dative singular feminine + enclitic -que'
        },
        'reptat': {
            lemma: 'repto',
            pos: 'verb',
            meanings: ['creeps', 'crawls'],
            grammar: '3rd person singular present indicative active'
        },
        'masculum': {
            lemma: 'masculus',
            pos: 'noun/adjective',
            meanings: ['male'],
            grammar: 'Accusative singular masculine'
        },
        'feminam': {
            lemma: 'femina',
            pos: 'noun',
            meanings: ['female', 'woman'],
            grammar: 'Accusative singular feminine'
        },
        'dominamini': {
            lemma: 'dominor',
            pos: 'verb',
            meanings: ['have dominion!', 'rule!'],
            grammar: '2nd person plural present imperative deponent'
        },
        'mare': {
            lemma: 'mare',
            pos: 'noun',
            meanings: ['sea'],
            grammar: 'Nominative/accusative singular neuter, 3rd declension'
        },
        'moventur': {
            lemma: 'moveo',
            pos: 'verb',
            meanings: ['are moved', 'move'],
            grammar: '3rd person plural present indicative passive'
        },
        'dedique': {
            lemma: 'do',
            pos: 'verb',
            meanings: ['and I have given'],
            grammar: '1st person singular perfect indicative active + enclitic -que'
        },
        'dedi': {
            lemma: 'do',
            pos: 'verb',
            meanings: ['I gave', 'I have given'],
            grammar: '1st person singular perfect indicative active'
        },
        'escam': {
            lemma: 'esca',
            pos: 'noun',
            meanings: ['food'],
            grammar: 'Accusative singular feminine'
        },
        'fecerat': {
            lemma: 'facio',
            pos: 'verb',
            meanings: ['had made'],
            grammar: '3rd person singular pluperfect indicative active'
        },
        'vespere': {
            lemma: 'vesper',
            pos: 'noun',
            meanings: ['evening'],
            grammar: 'Ablative singular masculine'
        },
        'mane': {
            lemma: 'mane',
            pos: 'noun/adverb',
            meanings: ['morning', 'in the morning'],
            grammar: 'Indeclinable noun or adverb'
        },
        'primus': {
            lemma: 'primus',
            pos: 'adjective',
            meanings: ['first'],
            grammar: 'Nominative singular masculine'
        },
        'secundus': {
            lemma: 'secundus',
            pos: 'adjective',
            meanings: ['second'],
            grammar: 'Nominative singular masculine'
        },
        'tertius': {
            lemma: 'tertius',
            pos: 'adjective',
            meanings: ['third'],
            grammar: 'Nominative singular masculine'
        },
        'quartus': {
            lemma: 'quartus',
            pos: 'adjective',
            meanings: ['fourth'],
            grammar: 'Nominative singular masculine'
        },
        'quintus': {
            lemma: 'quintus',
            pos: 'adjective',
            meanings: ['fifth'],
            grammar: 'Nominative singular masculine'
        },
        'sextus': {
            lemma: 'sextus',
            pos: 'adjective',
            meanings: ['sixth'],
            grammar: 'Nominative singular masculine'
        },
        'septimus': {
            lemma: 'septimus',
            pos: 'adjective',
            meanings: ['seventh'],
            grammar: 'Nominative singular masculine'
        },
        'liber': {
            lemma: 'liber',
            pos: 'noun',
            meanings: ['book'],
            grammar: 'Nominative singular masculine, 2nd declension'
        },
        'generationis': {
            lemma: 'generatio',
            pos: 'noun',
            meanings: ['of the generation', 'of the genealogy'],
            grammar: 'Genitive singular feminine'
        },
        'thamar': {
            lemma: 'Thamar',
            pos: 'proper noun',
            meanings: ['Tamar'],
            grammar: 'Indeclinable Hebrew name'
        },
        'phares': {
            lemma: 'Phares',
            pos: 'proper noun',
            meanings: ['Perez'],
            grammar: 'Hebrew name'
        },
        'zara': {
            lemma: 'Zara',
            pos: 'proper noun',
            meanings: ['Zerah'],
            grammar: 'Hebrew name'
        },
        'esrom': {
            lemma: 'Esrom',
            pos: 'proper noun',
            meanings: ['Hezron'],
            grammar: 'Hebrew name'
        },
        'aram': {
            lemma: 'Aram',
            pos: 'proper noun',
            meanings: ['Ram'],
            grammar: 'Hebrew name'
        },

        // Additional common Vulgate words
        'perfecti': {
            lemma: 'perfectus',
            pos: 'adjective/participle',
            meanings: ['perfect', 'complete', 'finished'],
            grammar: 'Nominative plural masculine or genitive singular'
        },
        'ornatus': {
            lemma: 'ornatus',
            pos: 'noun/participle',
            meanings: ['adornment', 'decoration', 'array'],
            grammar: 'Nominative singular masculine or genitive singular'
        },
        'complevit': {
            lemma: 'compleo',
            pos: 'verb',
            meanings: ['completed', 'finished', 'fulfilled'],
            grammar: '3rd person singular perfect indicative active'
        },
        'requievit': {
            lemma: 'requiesco',
            pos: 'verb',
            meanings: ['rested'],
            grammar: '3rd person singular perfect indicative active'
        },
        'universo': {
            lemma: 'universus',
            pos: 'adjective',
            meanings: ['whole', 'entire', 'all'],
            grammar: 'Dative/ablative singular masculine/neuter'
        },
        'patrarat': {
            lemma: 'patro',
            pos: 'verb',
            meanings: ['had accomplished', 'had performed'],
            grammar: '3rd person singular pluperfect indicative active'
        },
        'cessaverat': {
            lemma: 'cesso',
            pos: 'verb',
            meanings: ['had ceased', 'had stopped'],
            grammar: '3rd person singular pluperfect indicative active'
        },
        'istae': {
            lemma: 'iste',
            pos: 'pronoun',
            meanings: ['these', 'those'],
            grammar: 'Nominative plural feminine'
        },
        'creata': {
            lemma: 'creo',
            pos: 'verb',
            meanings: ['created'],
            grammar: 'Nominative/ablative singular feminine or nominative/accusative plural neuter perfect passive participle'
        },
        'virgultum': {
            lemma: 'virgultum',
            pos: 'noun',
            meanings: ['shrub', 'bush', 'thicket'],
            grammar: 'Nominative/accusative singular neuter'
        },
        'agri': {
            lemma: 'ager',
            pos: 'noun',
            meanings: ['of the field', 'fields'],
            grammar: 'Genitive singular or nominative plural masculine'
        },
        'antequam': {
            lemma: 'antequam',
            pos: 'conjunction',
            meanings: ['before'],
            grammar: 'Temporal conjunction'
        },
        'oriretur': {
            lemma: 'orior',
            pos: 'verb',
            meanings: ['would arise', 'would spring up'],
            grammar: '3rd person singular imperfect subjunctive deponent'
        },
        'regionis': {
            lemma: 'regio',
            pos: 'noun',
            meanings: ['of the region'],
            grammar: 'Genitive singular feminine'
        },
        'priusquam': {
            lemma: 'priusquam',
            pos: 'conjunction',
            meanings: ['before'],
            grammar: 'Temporal conjunction'
        },
        'germinaret': {
            lemma: 'germino',
            pos: 'verb',
            meanings: ['would sprout', 'would bud'],
            grammar: '3rd person singular imperfect subjunctive active'
        },
        'plenum': {
            lemma: 'plenus',
            pos: 'adjective',
            meanings: ['full', 'filled'],
            grammar: 'Accusative singular masculine/neuter or nominative singular neuter'
        },
        'plena': {
            lemma: 'plenus',
            pos: 'adjective',
            meanings: ['full', 'filled'],
            grammar: 'Nominative/ablative singular feminine or nominative/accusative plural neuter'
        },
        'plenus': {
            lemma: 'plenus',
            pos: 'adjective',
            meanings: ['full', 'filled'],
            grammar: 'Nominative singular masculine'
        },
        'pluerat': {
            lemma: 'pluo',
            pos: 'verb',
            meanings: ['had rained'],
            grammar: '3rd person singular pluperfect indicative active'
        },
        'operaretur': {
            lemma: 'operor',
            pos: 'verb',
            meanings: ['would work', 'would till'],
            grammar: '3rd person singular imperfect subjunctive deponent'
        },
        'fons': {
            lemma: 'fons',
            pos: 'noun',
            meanings: ['spring', 'fountain', 'source'],
            grammar: 'Nominative singular masculine'
        },
        'ascendebat': {
            lemma: 'ascendo',
            pos: 'verb',
            meanings: ['was rising', 'was going up'],
            grammar: '3rd person singular imperfect indicative active'
        },
        'irrigans': {
            lemma: 'irrigo',
            pos: 'verb',
            meanings: ['watering', 'irrigating'],
            grammar: 'Present active participle, nominative singular'
        },
        'superficiem': {
            lemma: 'superficies',
            pos: 'noun',
            meanings: ['surface'],
            grammar: 'Accusative singular feminine'
        },
        'formavit': {
            lemma: 'formo',
            pos: 'verb',
            meanings: ['formed', 'shaped'],
            grammar: '3rd person singular perfect indicative active'
        },
        'limo': {
            lemma: 'limus',
            pos: 'noun',
            meanings: ['mud', 'clay', 'slime'],
            grammar: 'Dative/ablative singular masculine'
        },
        'inspiravit': {
            lemma: 'inspiro',
            pos: 'verb',
            meanings: ['breathed into', 'inspired'],
            grammar: '3rd person singular perfect indicative active'
        },
        'spiraculum': {
            lemma: 'spiraculum',
            pos: 'noun',
            meanings: ['breath', 'breathing'],
            grammar: 'Nominative/accusative singular neuter'
        },
        'plantaverat': {
            lemma: 'planto',
            pos: 'verb',
            meanings: ['had planted'],
            grammar: '3rd person singular pluperfect indicative active'
        },
        'paradisum': {
            lemma: 'paradisus',
            pos: 'noun',
            meanings: ['paradise', 'garden'],
            grammar: 'Accusative singular masculine'
        },
        'voluptatis': {
            lemma: 'voluptas',
            pos: 'noun',
            meanings: ['of pleasure', 'of delight'],
            grammar: 'Genitive singular feminine'
        },
        'formaverat': {
            lemma: 'formo',
            pos: 'verb',
            meanings: ['had formed'],
            grammar: '3rd person singular pluperfect indicative active'
        },
        'produxitque': {
            lemma: 'produco',
            pos: 'verb',
            meanings: ['and brought forth'],
            grammar: '3rd person singular perfect indicative active + enclitic -que'
        },
        'humo': {
            lemma: 'humus',
            pos: 'noun',
            meanings: ['ground', 'earth', 'soil'],
            grammar: 'Dative/ablative singular feminine'
        },
        'pulchrum': {
            lemma: 'pulcher',
            pos: 'adjective',
            meanings: ['beautiful', 'fair', 'lovely'],
            grammar: 'Accusative singular masculine/neuter or nominative singular neuter'
        },
        'visu': {
            lemma: 'visus',
            pos: 'noun',
            meanings: ['to see', 'sight', 'appearance'],
            grammar: 'Ablative/dative singular masculine (supine)'
        },
        'vescendum': {
            lemma: 'vescor',
            pos: 'verb',
            meanings: ['to eat'],
            grammar: 'Gerund/gerundive accusative neuter'
        },
        'suave': {
            lemma: 'suavis',
            pos: 'adjective',
            meanings: ['sweet', 'pleasant', 'agreeable'],
            grammar: 'Nominative/accusative singular neuter'
        },
        'medio': {
            lemma: 'medius',
            pos: 'adjective',
            meanings: ['middle', 'midst'],
            grammar: 'Dative/ablative singular masculine/neuter'
        },
        'paradisi': {
            lemma: 'paradisus',
            pos: 'noun',
            meanings: ['of paradise', 'of the garden'],
            grammar: 'Genitive singular masculine'
        },
        'scientiae': {
            lemma: 'scientia',
            pos: 'noun',
            meanings: ['of knowledge'],
            grammar: 'Genitive/dative singular feminine'
        },
        'mali': {
            lemma: 'malus',
            pos: 'adjective',
            meanings: ['of evil', 'bad'],
            grammar: 'Genitive singular masculine/neuter'
        },
        'fluvius': {
            lemma: 'fluvius',
            pos: 'noun',
            meanings: ['river'],
            grammar: 'Nominative singular masculine'
        },
        'egrediebatur': {
            lemma: 'egredior',
            pos: 'verb',
            meanings: ['was going out', 'was flowing out'],
            grammar: '3rd person singular imperfect indicative deponent'
        },
        'irrigandum': {
            lemma: 'irrigo',
            pos: 'verb',
            meanings: ['to water', 'to irrigate'],
            grammar: 'Gerund/gerundive accusative neuter'
        },
        'inde': {
            lemma: 'inde',
            pos: 'adverb',
            meanings: ['from there', 'thence'],
            grammar: 'Adverb of place'
        },
        'dividitur': {
            lemma: 'divido',
            pos: 'verb',
            meanings: ['is divided', 'divides'],
            grammar: '3rd person singular present indicative passive'
        },
        'quatuor': {
            lemma: 'quatuor',
            pos: 'numeral',
            meanings: ['four'],
            grammar: 'Indeclinable cardinal number'
        },
        'capita': {
            lemma: 'caput',
            pos: 'noun',
            meanings: ['heads', 'sources'],
            grammar: 'Nominative/accusative plural neuter'
        },
        'tulit': {
            lemma: 'fero',
            pos: 'verb',
            meanings: ['took', 'carried', 'bore'],
            grammar: '3rd person singular perfect indicative active'
        },
        'custodiret': {
            lemma: 'custodio',
            pos: 'verb',
            meanings: ['might guard', 'might keep'],
            grammar: '3rd person singular imperfect subjunctive active'
        },
        'praecepitque': {
            lemma: 'praecipio',
            pos: 'verb',
            meanings: ['and commanded'],
            grammar: '3rd person singular perfect indicative active + enclitic -que'
        },
        'comede': {
            lemma: 'comedo',
            pos: 'verb',
            meanings: ['eat!'],
            grammar: '2nd person singular present imperative active'
        },
        'comedas': {
            lemma: 'comedo',
            pos: 'verb',
            meanings: ['you may eat', 'you should eat'],
            grammar: '2nd person singular present subjunctive active'
        },
        'quocumque': {
            lemma: 'quicumque',
            pos: 'pronoun',
            meanings: ['whatever', 'whichever'],
            grammar: 'Ablative singular masculine/neuter'
        },
        'comederis': {
            lemma: 'comedo',
            pos: 'verb',
            meanings: ['you will have eaten'],
            grammar: '2nd person singular future perfect indicative active'
        },
        'morte': {
            lemma: 'mors',
            pos: 'noun',
            meanings: ['death', 'by death'],
            grammar: 'Ablative singular feminine'
        },
        'morieris': {
            lemma: 'morior',
            pos: 'verb',
            meanings: ['you will die'],
            grammar: '2nd person singular future indicative deponent'
        },
        'solum': {
            lemma: 'solus',
            pos: 'adjective',
            meanings: ['alone', 'only'],
            grammar: 'Accusative singular masculine/neuter or nominative singular neuter'
        },
        'adiutorium': {
            lemma: 'adiutorium',
            pos: 'noun',
            meanings: ['help', 'helper', 'aid'],
            grammar: 'Nominative/accusative singular neuter'
        },
        'simile': {
            lemma: 'similis',
            pos: 'adjective',
            meanings: ['similar', 'like'],
            grammar: 'Nominative/accusative singular neuter'
        },
        'sibi': {
            lemma: 'sui',
            pos: 'pronoun',
            meanings: ['to himself', 'to herself', 'to itself'],
            grammar: 'Dative singular reflexive'
        },
        'formatis': {
            lemma: 'formo',
            pos: 'verb',
            meanings: ['having been formed'],
            grammar: 'Ablative plural perfect passive participle'
        },
        'cunctis': {
            lemma: 'cunctus',
            pos: 'adjective',
            meanings: ['all', 'the whole'],
            grammar: 'Dative/ablative plural'
        },
        'animantibus': {
            lemma: 'animans',
            pos: 'noun/participle',
            meanings: ['living things', 'animals'],
            grammar: 'Dative/ablative plural'
        },
        'adduxit': {
            lemma: 'adduco',
            pos: 'verb',
            meanings: ['brought', 'led to'],
            grammar: '3rd person singular perfect indicative active'
        },
        'videret': {
            lemma: 'video',
            pos: 'verb',
            meanings: ['might see'],
            grammar: '3rd person singular imperfect subjunctive active'
        },
        'vocaret': {
            lemma: 'voco',
            pos: 'verb',
            meanings: ['might call'],
            grammar: '3rd person singular imperfect subjunctive active'
        },
        'inveniebatur': {
            lemma: 'invenio',
            pos: 'verb',
            meanings: ['was found'],
            grammar: '3rd person singular imperfect indicative passive'
        },
        'adiutor': {
            lemma: 'adiutor',
            pos: 'noun',
            meanings: ['helper', 'assistant'],
            grammar: 'Nominative singular masculine'
        },
        'immisit': {
            lemma: 'immitto',
            pos: 'verb',
            meanings: ['sent in', 'cast upon'],
            grammar: '3rd person singular perfect indicative active'
        },
        'soporem': {
            lemma: 'sopor',
            pos: 'noun',
            meanings: ['deep sleep'],
            grammar: 'Accusative singular masculine'
        },
        'cumque': {
            lemma: 'cum',
            pos: 'conjunction',
            meanings: ['and when'],
            grammar: 'Conjunction + enclitic -que'
        },
        'obdormisset': {
            lemma: 'obdormio',
            pos: 'verb',
            meanings: ['had fallen asleep'],
            grammar: '3rd person singular pluperfect subjunctive active'
        },
        'costis': {
            lemma: 'costa',
            pos: 'noun',
            meanings: ['ribs'],
            grammar: 'Dative/ablative plural feminine'
        },
        'replevit': {
            lemma: 'repleo',
            pos: 'verb',
            meanings: ['filled up', 'replaced'],
            grammar: '3rd person singular perfect indicative active'
        },
        'aedificavit': {
            lemma: 'aedifico',
            pos: 'verb',
            meanings: ['built', 'made'],
            grammar: '3rd person singular perfect indicative active'
        },
        'costam': {
            lemma: 'costa',
            pos: 'noun',
            meanings: ['rib'],
            grammar: 'Accusative singular feminine'
        },
        'tulerat': {
            lemma: 'fero',
            pos: 'verb',
            meanings: ['had taken'],
            grammar: '3rd person singular pluperfect indicative active'
        },
        'ossibus': {
            lemma: 'os',
            pos: 'noun',
            meanings: ['bones'],
            grammar: 'Dative/ablative plural neuter'
        },
        'meis': {
            lemma: 'meus',
            pos: 'adjective',
            meanings: ['my'],
            grammar: 'Dative/ablative plural'
        },
        'carne': {
            lemma: 'caro',
            pos: 'noun',
            meanings: ['flesh'],
            grammar: 'Ablative singular feminine'
        },
        'virago': {
            lemma: 'virago',
            pos: 'noun',
            meanings: ['woman (from man)', 'heroine'],
            grammar: 'Nominative singular feminine'
        },
        'viro': {
            lemma: 'vir',
            pos: 'noun',
            meanings: ['man', 'husband'],
            grammar: 'Dative/ablative singular masculine'
        },
        'sumpta': {
            lemma: 'sumo',
            pos: 'verb',
            meanings: ['taken'],
            grammar: 'Nominative singular feminine perfect passive participle'
        },
        'relinquet': {
            lemma: 'relinquo',
            pos: 'verb',
            meanings: ['will leave'],
            grammar: '3rd person singular future indicative active'
        },
        'adhaerebit': {
            lemma: 'adhaereo',
            pos: 'verb',
            meanings: ['will cling to', 'will adhere'],
            grammar: '3rd person singular future indicative active'
        },
        'uxori': {
            lemma: 'uxor',
            pos: 'noun',
            meanings: ['wife'],
            grammar: 'Dative singular feminine'
        },
        'duo': {
            lemma: 'duo',
            pos: 'numeral',
            meanings: ['two'],
            grammar: 'Nominative/accusative masculine'
        },
        'una': {
            lemma: 'unus',
            pos: 'adjective',
            meanings: ['one'],
            grammar: 'Nominative/ablative singular feminine'
        },
        'uterque': {
            lemma: 'uterque',
            pos: 'pronoun',
            meanings: ['both', 'each of two'],
            grammar: 'Nominative singular masculine'
        },
        'nudus': {
            lemma: 'nudus',
            pos: 'adjective',
            meanings: ['naked', 'bare'],
            grammar: 'Nominative singular masculine'
        },
        'scilicet': {
            lemma: 'scilicet',
            pos: 'adverb',
            meanings: ['namely', 'of course', 'evidently'],
            grammar: 'Adverb'
        },
        'erubescebant': {
            lemma: 'erubesco',
            pos: 'verb',
            meanings: ['were ashamed'],
            grammar: '3rd person plural imperfect indicative active'
        },
        'serpens': {
            lemma: 'serpens',
            pos: 'noun',
            meanings: ['serpent', 'snake'],
            grammar: 'Nominative singular masculine/feminine'
        },
        'callidior': {
            lemma: 'callidus',
            pos: 'adjective',
            meanings: ['more cunning', 'craftier'],
            grammar: 'Nominative singular masculine/feminine comparative'
        },
        'cur': {
            lemma: 'cur',
            pos: 'adverb',
            meanings: ['why'],
            grammar: 'Interrogative adverb'
        },
        'praecepit': {
            lemma: 'praecipio',
            pos: 'verb',
            meanings: ['commanded', 'ordered'],
            grammar: '3rd person singular perfect indicative active'
        },
        'comederetis': {
            lemma: 'comedo',
            pos: 'verb',
            meanings: ['you should eat'],
            grammar: '2nd person plural imperfect subjunctive active'
        },
        'fructu': {
            lemma: 'fructus',
            pos: 'noun',
            meanings: ['fruit'],
            grammar: 'Ablative singular masculine'
        },
        'lignorum': {
            lemma: 'lignum',
            pos: 'noun',
            meanings: ['of trees', 'of wood'],
            grammar: 'Genitive plural neuter'
        },
        'vescimur': {
            lemma: 'vescor',
            pos: 'verb',
            meanings: ['we eat'],
            grammar: '1st person plural present indicative deponent'
        },
        'comederemus': {
            lemma: 'comedo',
            pos: 'verb',
            meanings: ['we should eat'],
            grammar: '1st person plural imperfect subjunctive active'
        },
        'tangeremus': {
            lemma: 'tango',
            pos: 'verb',
            meanings: ['we should touch'],
            grammar: '1st person plural imperfect subjunctive active'
        },
        'forte': {
            lemma: 'forte',
            pos: 'adverb',
            meanings: ['perhaps', 'by chance', 'lest'],
            grammar: 'Adverb'
        },
        'nequaquam': {
            lemma: 'nequaquam',
            pos: 'adverb',
            meanings: ['by no means', 'not at all'],
            grammar: 'Negative adverb'
        },
        'moriemini': {
            lemma: 'morior',
            pos: 'verb',
            meanings: ['you will die'],
            grammar: '2nd person plural future indicative deponent'
        },
        'scit': {
            lemma: 'scio',
            pos: 'verb',
            meanings: ['knows'],
            grammar: '3rd person singular present indicative active'
        },
        'comederitis': {
            lemma: 'comedo',
            pos: 'verb',
            meanings: ['you will have eaten'],
            grammar: '2nd person plural future perfect indicative active'
        },
        'aperientur': {
            lemma: 'aperio',
            pos: 'verb',
            meanings: ['will be opened'],
            grammar: '3rd person plural future indicative passive'
        },
        'oculi': {
            lemma: 'oculus',
            pos: 'noun',
            meanings: ['eyes'],
            grammar: 'Nominative plural masculine'
        },
        'vestri': {
            lemma: 'vester',
            pos: 'adjective',
            meanings: ['your'],
            grammar: 'Genitive singular masculine/neuter or nominative plural masculine'
        },
        'eritis': {
            lemma: 'sum',
            pos: 'verb',
            meanings: ['you will be'],
            grammar: '2nd person plural future indicative active'
        },
        'dii': {
            lemma: 'deus',
            pos: 'noun',
            meanings: ['gods'],
            grammar: 'Nominative plural masculine'
        },
        'scientes': {
            lemma: 'scio',
            pos: 'verb',
            meanings: ['knowing'],
            grammar: 'Present active participle, nominative plural'
        },
        'oculis': {
            lemma: 'oculus',
            pos: 'noun',
            meanings: ['eyes'],
            grammar: 'Dative/ablative plural masculine'
        },
        'aspectu': {
            lemma: 'aspectus',
            pos: 'noun',
            meanings: ['sight', 'appearance'],
            grammar: 'Ablative singular masculine'
        },
        'delectabile': {
            lemma: 'delectabilis',
            pos: 'adjective',
            meanings: ['delightful', 'pleasing'],
            grammar: 'Nominative/accusative singular neuter'
        },
        'illius': {
            lemma: 'ille',
            pos: 'pronoun',
            meanings: ['of that', 'his', 'her', 'its'],
            grammar: 'Genitive singular'
        },
        'comedit': {
            lemma: 'comedo',
            pos: 'verb',
            meanings: ['ate'],
            grammar: '3rd person singular perfect indicative active'
        },
        'dedit': {
            lemma: 'do',
            pos: 'verb',
            meanings: ['gave'],
            grammar: '3rd person singular perfect indicative active'
        },
        'deditque': {
            lemma: 'do',
            pos: 'verb',
            meanings: ['and gave'],
            grammar: '3rd person singular perfect indicative active + enclitic -que'
        },
        'aperti': {
            lemma: 'aperio',
            pos: 'verb',
            meanings: ['opened'],
            grammar: 'Nominative plural masculine perfect passive participle'
        },
        'amborum': {
            lemma: 'ambo',
            pos: 'adjective',
            meanings: ['of both'],
            grammar: 'Genitive plural'
        },
        'cognovissent': {
            lemma: 'cognosco',
            pos: 'verb',
            meanings: ['they had known'],
            grammar: '3rd person plural pluperfect subjunctive active'
        },
        'cognovit': {
            lemma: 'cognosco',
            pos: 'verb',
            meanings: ['knew', 'recognized', 'learned'],
            grammar: '3rd person singular perfect indicative active'
        },
        'cognoscit': {
            lemma: 'cognosco',
            pos: 'verb',
            meanings: ['knows', 'recognizes'],
            grammar: '3rd person singular present indicative active'
        },
        'nudos': {
            lemma: 'nudus',
            pos: 'adjective',
            meanings: ['naked'],
            grammar: 'Accusative plural masculine'
        },
        'consuerunt': {
            lemma: 'consuo',
            pos: 'verb',
            meanings: ['sewed together'],
            grammar: '3rd person plural perfect indicative active'
        },
        'folia': {
            lemma: 'folium',
            pos: 'noun',
            meanings: ['leaves'],
            grammar: 'Nominative/accusative plural neuter'
        },
        'ficus': {
            lemma: 'ficus',
            pos: 'noun',
            meanings: ['fig tree'],
            grammar: 'Genitive singular feminine'
        },
        'fecerunt': {
            lemma: 'facio',
            pos: 'verb',
            meanings: ['made'],
            grammar: '3rd person plural perfect indicative active'
        },
        'perizomata': {
            lemma: 'perizoma',
            pos: 'noun',
            meanings: ['loin cloths', 'aprons'],
            grammar: 'Nominative/accusative plural neuter'
        },
        'audissent': {
            lemma: 'audio',
            pos: 'verb',
            meanings: ['they had heard'],
            grammar: '3rd person plural pluperfect subjunctive active'
        },
        'deambulantis': {
            lemma: 'deambulo',
            pos: 'verb',
            meanings: ['walking'],
            grammar: 'Genitive singular present active participle'
        },
        'auram': {
            lemma: 'aura',
            pos: 'noun',
            meanings: ['breeze', 'air'],
            grammar: 'Accusative singular feminine'
        },
        'meridiem': {
            lemma: 'meridies',
            pos: 'noun',
            meanings: ['midday', 'noon'],
            grammar: 'Accusative singular masculine'
        },
        'abscondit': {
            lemma: 'abscondo',
            pos: 'verb',
            meanings: ['hid'],
            grammar: '3rd person singular perfect indicative active'
        },
        'ligni': {
            lemma: 'lignum',
            pos: 'noun',
            meanings: ['of the tree', 'of wood'],
            grammar: 'Genitive singular neuter'
        },
        'vocavitque': {
            lemma: 'voco',
            pos: 'verb',
            meanings: ['and called'],
            grammar: '3rd person singular perfect indicative active + enclitic -que'
        },
        'audivi': {
            lemma: 'audio',
            pos: 'verb',
            meanings: ['I heard'],
            grammar: '1st person singular perfect indicative active'
        },
        'timui': {
            lemma: 'timeo',
            pos: 'verb',
            meanings: ['I feared'],
            grammar: '1st person singular perfect indicative active'
        },
        'essem': {
            lemma: 'sum',
            pos: 'verb',
            meanings: ['I was'],
            grammar: '1st person singular imperfect subjunctive active'
        },
        'abscondi': {
            lemma: 'abscondo',
            pos: 'verb',
            meanings: ['I hid'],
            grammar: '1st person singular perfect indicative active'
        },
        'indicavit': {
            lemma: 'indico',
            pos: 'verb',
            meanings: ['showed', 'told', 'revealed'],
            grammar: '3rd person singular perfect indicative active'
        },
        'esses': {
            lemma: 'sum',
            pos: 'verb',
            meanings: ['you were'],
            grammar: '2nd person singular imperfect subjunctive active'
        },
        'praeceperam': {
            lemma: 'praecipio',
            pos: 'verb',
            meanings: ['I had commanded'],
            grammar: '1st person singular pluperfect indicative active'
        },
        'comederes': {
            lemma: 'comedo',
            pos: 'verb',
            meanings: ['you should eat'],
            grammar: '2nd person singular imperfect subjunctive active'
        },
        'comedisti': {
            lemma: 'comedo',
            pos: 'verb',
            meanings: ['you ate'],
            grammar: '2nd person singular perfect indicative active'
        },
        'sociam': {
            lemma: 'socia',
            pos: 'noun',
            meanings: ['companion', 'partner'],
            grammar: 'Accusative singular feminine'
        },
        'comedi': {
            lemma: 'comedo',
            pos: 'verb',
            meanings: ['I ate'],
            grammar: '1st person singular perfect indicative active'
        },
        'quare': {
            lemma: 'quare',
            pos: 'adverb',
            meanings: ['why', 'wherefore'],
            grammar: 'Interrogative adverb'
        },
        'fecisti': {
            lemma: 'facio',
            pos: 'verb',
            meanings: ['you did', 'you made'],
            grammar: '2nd person singular perfect indicative active'
        },
        'decepit': {
            lemma: 'decipio',
            pos: 'verb',
            meanings: ['deceived'],
            grammar: '3rd person singular perfect indicative active'
        },
        'serpentem': {
            lemma: 'serpens',
            pos: 'noun',
            meanings: ['serpent', 'snake'],
            grammar: 'Accusative singular'
        },
        'maledictus': {
            lemma: 'maledictus',
            pos: 'adjective/participle',
            meanings: ['cursed'],
            grammar: 'Nominative singular masculine perfect passive participle'
        },
        'pectus': {
            lemma: 'pectus',
            pos: 'noun',
            meanings: ['breast', 'chest', 'belly'],
            grammar: 'Nominative/accusative singular neuter'
        },
        'gradieris': {
            lemma: 'gradior',
            pos: 'verb',
            meanings: ['you will go', 'you will crawl'],
            grammar: '2nd person singular future indicative deponent'
        },
        'comedes': {
            lemma: 'comedo',
            pos: 'verb',
            meanings: ['you will eat'],
            grammar: '2nd person singular future indicative active'
        },
        'inimicitias': {
            lemma: 'inimicitia',
            pos: 'noun',
            meanings: ['enmities', 'hostility'],
            grammar: 'Accusative plural feminine'
        },
        'ponam': {
            lemma: 'pono',
            pos: 'verb',
            meanings: ['I will place', 'I will put'],
            grammar: '1st person singular future indicative active'
        },
        'conteret': {
            lemma: 'contero',
            pos: 'verb',
            meanings: ['will crush', 'will bruise'],
            grammar: '3rd person singular future indicative active'
        },
        'caput': {
            lemma: 'caput',
            pos: 'noun',
            meanings: ['head'],
            grammar: 'Nominative/accusative singular neuter'
        },
        'insidiaberis': {
            lemma: 'insidior',
            pos: 'verb',
            meanings: ['you will lie in wait for'],
            grammar: '2nd person singular future indicative deponent'
        },
        'calcaneo': {
            lemma: 'calcaneum',
            pos: 'noun',
            meanings: ['heel'],
            grammar: 'Dative/ablative singular neuter'
        },
        'multiplicabo': {
            lemma: 'multiplico',
            pos: 'verb',
            meanings: ['I will multiply'],
            grammar: '1st person singular future indicative active'
        },
        'aerumnas': {
            lemma: 'aerumna',
            pos: 'noun',
            meanings: ['troubles', 'hardships'],
            grammar: 'Accusative plural feminine'
        },
        'tuas': {
            lemma: 'tuus',
            pos: 'adjective',
            meanings: ['your'],
            grammar: 'Accusative plural feminine'
        },
        'conceptus': {
            lemma: 'conceptus',
            pos: 'noun',
            meanings: ['conceptions', 'pregnancies'],
            grammar: 'Accusative plural masculine'
        },
        'dolore': {
            lemma: 'dolor',
            pos: 'noun',
            meanings: ['pain', 'sorrow'],
            grammar: 'Ablative singular masculine'
        },
        'paries': {
            lemma: 'pario',
            pos: 'verb',
            meanings: ['you will bring forth', 'you will bear'],
            grammar: '2nd person singular future indicative active'
        },
        'potestate': {
            lemma: 'potestas',
            pos: 'noun',
            meanings: ['power', 'authority'],
            grammar: 'Ablative singular feminine'
        },
        'eris': {
            lemma: 'sum',
            pos: 'verb',
            meanings: ['you will be'],
            grammar: '2nd person singular future indicative active'
        },
        'dominabitur': {
            lemma: 'dominor',
            pos: 'verb',
            meanings: ['will rule over', 'will dominate'],
            grammar: '3rd person singular future indicative deponent'
        },
        'audisti': {
            lemma: 'audio',
            pos: 'verb',
            meanings: ['you heard'],
            grammar: '2nd person singular perfect indicative active'
        },
        'uxoris': {
            lemma: 'uxor',
            pos: 'noun',
            meanings: ['of the wife'],
            grammar: 'Genitive singular feminine'
        },
        'maledicta': {
            lemma: 'maledictus',
            pos: 'adjective/participle',
            meanings: ['cursed'],
            grammar: 'Nominative singular feminine perfect passive participle'
        },
        'laboribus': {
            lemma: 'labor',
            pos: 'noun',
            meanings: ['labors', 'toils'],
            grammar: 'Dative/ablative plural masculine'
        },
        'spinas': {
            lemma: 'spina',
            pos: 'noun',
            meanings: ['thorns'],
            grammar: 'Accusative plural feminine'
        },
        'tribulos': {
            lemma: 'tribulus',
            pos: 'noun',
            meanings: ['thistles'],
            grammar: 'Accusative plural masculine'
        },
        'germinabit': {
            lemma: 'germino',
            pos: 'verb',
            meanings: ['will sprout', 'will produce'],
            grammar: '3rd person singular future indicative active'
        },
        'sudore': {
            lemma: 'sudor',
            pos: 'noun',
            meanings: ['sweat'],
            grammar: 'Ablative singular masculine'
        },
        'vultus': {
            lemma: 'vultus',
            pos: 'noun',
            meanings: ['face', 'countenance'],
            grammar: 'Genitive singular masculine'
        },
        'vesceris': {
            lemma: 'vescor',
            pos: 'verb',
            meanings: ['you will eat'],
            grammar: '2nd person singular future indicative deponent'
        },
        'panem': {
            lemma: 'panis',
            pos: 'noun',
            meanings: ['bread'],
            grammar: 'Accusative singular masculine'
        },
        'donec': {
            lemma: 'donec',
            pos: 'conjunction',
            meanings: ['until', 'while'],
            grammar: 'Temporal conjunction'
        },
        'revertaris': {
            lemma: 'revertor',
            pos: 'verb',
            meanings: ['you return'],
            grammar: '2nd person singular present subjunctive deponent'
        },
        'sumptus': {
            lemma: 'sumo',
            pos: 'verb',
            meanings: ['taken'],
            grammar: 'Nominative singular masculine perfect passive participle'
        },
        'pulvis': {
            lemma: 'pulvis',
            pos: 'noun',
            meanings: ['dust'],
            grammar: 'Nominative singular masculine'
        },
        'pulverem': {
            lemma: 'pulvis',
            pos: 'noun',
            meanings: ['dust'],
            grammar: 'Accusative singular masculine'
        },
        'reverteris': {
            lemma: 'revertor',
            pos: 'verb',
            meanings: ['you will return'],
            grammar: '2nd person singular future indicative deponent'
        },
        'heva': {
            lemma: 'Heva',
            pos: 'proper noun',
            meanings: ['Eve'],
            grammar: 'Nominative singular feminine'
        },
        'mater': {
            lemma: 'mater',
            pos: 'noun',
            meanings: ['mother'],
            grammar: 'Nominative singular feminine'
        },
        'viventium': {
            lemma: 'vivens',
            pos: 'participle',
            meanings: ['of the living'],
            grammar: 'Genitive plural present active participle'
        },
        'tunicas': {
            lemma: 'tunica',
            pos: 'noun',
            meanings: ['tunics', 'garments'],
            grammar: 'Accusative plural feminine'
        },
        'pelliceas': {
            lemma: 'pelliceus',
            pos: 'adjective',
            meanings: ['of skin', 'leather'],
            grammar: 'Accusative plural feminine'
        },
        'induit': {
            lemma: 'induo',
            pos: 'verb',
            meanings: ['clothed'],
            grammar: '3rd person singular perfect indicative active'
        },
        'quasi': {
            lemma: 'quasi',
            pos: 'adverb/conjunction',
            meanings: ['as if', 'as', 'like'],
            grammar: 'Adverb or conjunction'
        },
        'mittat': {
            lemma: 'mitto',
            pos: 'verb',
            meanings: ['may send', 'may put forth'],
            grammar: '3rd person singular present subjunctive active'
        },
        'sumat': {
            lemma: 'sumo',
            pos: 'verb',
            meanings: ['may take'],
            grammar: '3rd person singular present subjunctive active'
        },
        'comedat': {
            lemma: 'comedo',
            pos: 'verb',
            meanings: ['may eat'],
            grammar: '3rd person singular present subjunctive active'
        },
        'vivat': {
            lemma: 'vivo',
            pos: 'verb',
            meanings: ['may live'],
            grammar: '3rd person singular present subjunctive active'
        },
        'emisit': {
            lemma: 'emitto',
            pos: 'verb',
            meanings: ['sent out', 'expelled'],
            grammar: '3rd person singular perfect indicative active'
        },
        'eiecitque': {
            lemma: 'eicio',
            pos: 'verb',
            meanings: ['and cast out'],
            grammar: '3rd person singular perfect indicative active + enclitic -que'
        },
},

    // Function to look up a word
    lookup(word) {
        // Normalize: lowercase and remove punctuation
        const normalized = word.toLowerCase().replace(/[.,;:!?'"()]/g, '');

        // 1. Exact match
        if (this.words[normalized]) {
            return this.words[normalized];
        }

        // 2. Handle enclitics (-que, -ve, -ne)
        // Common in Latin: et... -> ...que
        // We check suffixes and ensure the base word exists
        const suffixes = [
            { suffix: 'que', meaning: ' (+ and)' },
            { suffix: 've', meaning: ' (+ or)' },
            { suffix: 'ne', meaning: ' (?)' } // Enclitic question marker
        ];

        for (const { suffix, meaning } of suffixes) {
            if (normalized.endsWith(suffix)) {
                const base = normalized.slice(0, -suffix.length);
                if (this.words[base]) {
                    // Start with a strict clone to avoid mutating the original definition
                    const baseEntry = this.words[base];
                    return {
                        lemma: baseEntry.lemma, // Keep original lemma
                        pos: baseEntry.pos,
                        grammar: baseEntry.grammar + ` (with suffix -${suffix})`,
                        // Append meaning to all definitions
                        meanings: baseEntry.meanings.map(m => m + meaning)
                    };
                }
            }
        }

        return null;
    },

    // Function to get basic translation
    getTranslation(word) {
        const entry = this.lookup(word);
        if (entry && entry.meanings && entry.meanings.length > 0) {
            return entry.meanings[0];
        }
        return '?';
    }
};

