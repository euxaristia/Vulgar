// Vulgar - Bible Data
// Contains the Latin text of the Vulgate Bible

const VulgateData = {
    // ==========================================
    // OLD TESTAMENT
    // ==========================================

    genesis: {
        name: 'Genesis',
        abbrev: 'Gen',
        testament: 'OT',
        order: 1,
        chapters: {
            1: {
                1: { latin: "In principio creavit Deus caelum et terram.", english: "In the beginning God created the heaven and the earth." },
                2: { latin: "Terra autem erat inanis et vacua, et tenebrae erant super faciem abyssi: et spiritus Dei ferebatur super aquas.", english: "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters." },
                3: { latin: "Dixitque Deus: Fiat lux. Et facta est lux.", english: "And God said, Let there be light: and there was light." },
                4: { latin: "Et vidit Deus lucem quod esset bona: et divisit lucem a tenebris.", english: "And God saw the light, that it was good: and God divided the light from the darkness." },
                5: { latin: "Appellavitque lucem Diem, et tenebras Noctem: factumque est vespere et mane, dies unus.", english: "And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day." },
                6: { latin: "Dixit quoque Deus: Fiat firmamentum in medio aquarum: et dividat aquas ab aquis.", english: "And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters." },
                7: { latin: "Et fecit Deus firmamentum, divisitque aquas, quae erant sub firmamento, ab his, quae erant super firmamentum. Et factum est ita.", english: "And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so." },
                8: { latin: "Vocavitque Deus firmamentum, Caelum: et factum est vespere et mane, dies secundus.", english: "And God called the firmament Heaven. And the evening and the morning were the second day." },
                9: { latin: "Dixit vero Deus: Congregentur aquae, quae sub caelo sunt, in locum unum: et appareat arida. Et factum est ita.", english: "And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so." },
                10: { latin: "Et vocavit Deus aridam Terram, congregationesque aquarum appellavit Maria. Et vidit Deus quod esset bonum.", english: "And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good." },
                11: { latin: "Et ait: Germinet terra herbam virentem, et facientem semen, et lignum pomiferum faciens fructum iuxta genus suum, cuius semen in semetipso sit super terram. Et factum est ita.", english: "And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so." },
                12: { latin: "Et protulit terra herbam virentem, et facientem semen iuxta genus suum, lignumque faciens fructum, et habens unumquodque sementem secundum speciem suam. Et vidit Deus quod esset bonum.", english: "And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good." },
                13: { latin: "Et factum est vespere et mane, dies tertius.", english: "And the evening and the morning were the third day." },
                14: { latin: "Dixit autem Deus: Fiant luminaria in firmamento caeli, et dividant diem ac noctem, et sint in signa et tempora, et dies et annos:", english: "And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years:" },
                15: { latin: "ut luceant in firmamento caeli, et illuminent terram. Et factum est ita.", english: "And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so." },
                16: { latin: "Fecitque Deus duo luminaria magna: luminare maius, ut praeesset diei: et luminare minus, ut praeesset nocti: et stellas.", english: "And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also." },
                17: { latin: "Et posuit eas in firmamento caeli, ut lucerent super terram,", english: "And God set them in the firmament of the heaven to give light upon the earth," },
                18: { latin: "et praeessent diei ac nocti, et dividerent lucem ac tenebras. Et vidit Deus quod esset bonum.", english: "And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good." },
                19: { latin: "Et factum est vespere et mane, dies quartus.", english: "And the evening and the morning were the fourth day." },
                20: { latin: "Dixit etiam Deus: Producant aquae reptile animae viventis, et volatile super terram sub firmamento caeli.", english: "And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven." },
                21: { latin: "Creavitque Deus cete grandia, et omnem animam viventem atque motabilem, quam produxerant aquae in species suas, et omne volatile secundum genus suum. Et vidit Deus quod esset bonum.", english: "And God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good." },
                22: { latin: "Benedixitque eis, dicens: Crescite, et multiplicamini, et replete aquas maris: avesque multiplicentur super terram.", english: "And God blessed them, saying, Be fruitful, and multiply, and fill the waters in the seas, and let fowl multiply in the earth." },
                23: { latin: "Et factum est vespere et mane, dies quintus.", english: "And the evening and the morning were the fifth day." },
                24: { latin: "Dixit quoque Deus: Producat terra animam viventem in genere suo, iumenta, et reptilia, et bestias terrae secundum species suas. Factumque est ita.", english: "And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so." },
                25: { latin: "Et fecit Deus bestias terrae iuxta species suas, et iumenta, et omne reptile terrae in genere suo. Et vidit Deus quod esset bonum.", english: "And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good." },
                26: { latin: "Et ait: Faciamus hominem ad imaginem et similitudinem nostram: et praesit piscibus maris, et volatilibus caeli, et bestiis, universaeque terrae, omnique reptili, quod movetur in terra.", english: "And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth." },
                27: { latin: "Et creavit Deus hominem ad imaginem suam: ad imaginem Dei creavit illum, masculum et feminam creavit eos.", english: "So God created man in his own image, in the image of God created he him; male and female created he them." },
                28: { latin: "Benedixitque illis Deus, et ait: Crescite et multiplicamini, et replete terram, et subiicite eam, et dominamini piscibus maris, et volatilibus caeli, et universis animantibus, quae moventur super terram.", english: "And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth." },
                29: { latin: "Dixitque Deus: Ecce dedi vobis omnem herbam afferentem semen super terram, et universa ligna quae habent in semetipsis sementem generis sui, ut sint vobis in escam:", english: "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat." },
                30: { latin: "et cunctis animantibus terrae, omnique volucri caeli, et universis quae moventur in terra, et in quibus est anima vivens, ut habeant ad vescendum. Et factum est ita.", english: "And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is life, I have given every green herb for meat: and it was so." },
                31: { latin: "Viditque Deus cuncta quae fecerat, et erant valde bona. Et factum est vespere et mane, dies sextus.", english: "And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day." }
            },
            2: {
                1: "Igitur perfecti sunt caeli et terra, et omnis ornatus eorum.",
                2: "Complevitque Deus die septimo opus suum quod fecerat: et requievit die septimo ab universo opere quod patrarat.",
                3: "Et benedixit diei septimo, et sanctificavit illum: quia in ipso cessaverat ab omni opere suo quod creavit Deus ut faceret.",
                4: "Istae sunt generationes caeli et terrae, quando creata sunt, in die quo fecit Dominus Deus caelum et terram:",
                5: "et omne virgultum agri antequam oriretur in terra, omnemque herbam regionis priusquam germinaret: non enim pluerat Dominus Deus super terram, et homo non erat qui operaretur terram:",
                6: "sed fons ascendebat e terra, irrigans universam superficiem terrae.",
                7: "Formavit igitur Dominus Deus hominem de limo terrae, et inspiravit in faciem eius spiraculum vitae, et factus est homo in animam viventem.",
                8: "Plantaverat autem Dominus Deus paradisum voluptatis a principio: in quo posuit hominem quem formaverat.",
                9: "Produxitque Dominus Deus de humo omne lignum pulchrum visu, et ad vescendum suave: lignum etiam vitae in medio paradisi, lignumque scientiae boni et mali.",
                10: "Et fluvius egrediebatur de loco voluptatis ad irrigandum paradisum, qui inde dividitur in quatuor capita.",
                11: "Nomen uni Phison: ipse est qui circuit omnem terram Hevilath, ubi nascitur aurum:",
                12: "et aurum terrae illius optimum est: ibi invenitur bdellium, et lapis onychinus.",
                13: "Et nomen fluvii secundi Gehon: ipse est qui circuit omnem terram Aethiopiae.",
                14: "Nomen vero fluminis tertii, Tigris: ipse vadit contra Assyrios. Fluvius autem quartus, ipse est Euphrates.",
                15: "Tulit ergo Dominus Deus hominem, et posuit eum in paradiso voluptatis, ut operaretur, et custodiret illum:",
                16: "praecepitque ei dicens: Ex omni ligno paradisi comede:",
                17: "de ligno autem scientiae boni et mali ne comedas: in quocumque enim die comederis ex eo, morte morieris.",
                18: "Dixit quoque Dominus Deus: Non est bonum esse hominem solum: faciamus ei adiutorium simile sibi.",
                19: "Formatis igitur Dominus Deus de humo cunctis animantibus terrae, et universis volatilibus caeli, adduxit ea ad Adam, ut videret quid vocaret ea: omne enim quod vocavit Adam animae viventis, ipsum est nomen eius.",
                20: "Appellavitque Adam nominibus suis cuncta animantia, et universa volatilia caeli, et omnes bestias terrae: Adae vero non inveniebatur adiutor similis eius.",
                21: "Immisit ergo Dominus Deus soporem in Adam: cumque obdormisset, tulit unam de costis eius, et replevit carnem pro ea.",
                22: "Et aedificavit Dominus Deus costam, quam tulerat de Adam, in mulierem: et adduxit eam ad Adam.",
                23: "Dixitque Adam: Hoc nunc os ex ossibus meis, et caro de carne mea: haec vocabitur Virago, quoniam de viro sumpta est.",
                24: "Quam ob rem relinquet homo patrem suum, et matrem, et adhaerebit uxori suae: et erunt duo in carne una.",
                25: "Erat autem uterque nudus, Adam scilicet et uxor eius: et non erubescebant."
            },
            3: {
                1: "Sed et serpens erat callidior cunctis animantibus terrae quae fecerat Dominus Deus. Qui dixit ad mulierem: Cur praecepit vobis Deus ut non comederetis de omni ligno paradisi?",
                2: "Cui respondit mulier: De fructu lignorum, quae sunt in paradiso, vescimur:",
                3: "de fructu vero ligni, quod est in medio paradisi, praecepit nobis Deus ne comederemus, et ne tangeremus illud, ne forte moriamur.",
                4: "Dixit autem serpens ad mulierem: Nequaquam morte moriemini.",
                5: "Scit enim Deus quod in quocumque die comederitis ex eo, aperientur oculi vestri, et eritis sicut dii, scientes bonum et malum.",
                6: "Vidit igitur mulier quod bonum esset lignum ad vescendum, et pulchrum oculis, aspectuque delectabile: et tulit de fructu illius, et comedit: deditque viro suo, qui comedit.",
                7: "Et aperti sunt oculi amborum: cumque cognovissent se esse nudos, consuerunt folia ficus, et fecerunt sibi perizomata.",
                8: "Et cum audissent vocem Domini Dei deambulantis in paradiso ad auram post meridiem, abscondit se Adam et uxor eius a facie Domini Dei in medio ligni paradisi.",
                9: "Vocavitque Dominus Deus Adam, et dixit ei: Ubi es?",
                10: "Qui ait: Vocem tuam audivi in paradiso: et timui, eo quod nudus essem, et abscondi me.",
                11: "Cui dixit: Quis enim indicavit tibi quod nudus esses, nisi quod ex ligno de quo praeceperam tibi ne comederes, comedisti?",
                12: "Dixitque Adam: Mulier, quam dedisti mihi sociam, dedit mihi de ligno, et comedi.",
                13: "Et dixit Dominus Deus ad mulierem: Quare hoc fecisti? Quae respondit: Serpens decepit me, et comedi.",
                14: "Et ait Dominus Deus ad serpentem: Quia fecisti hoc, maledictus es inter omnia animantia, et bestias terrae: super pectus tuum gradieris, et terram comedes cunctis diebus vitae tuae.",
                15: "Inimicitias ponam inter te et mulierem, et semen tuum et semen illius: ipsa conteret caput tuum, et tu insidiaberis calcaneo eius.",
                16: "Mulieri quoque dixit: Multiplicabo aerumnas tuas, et conceptus tuos: in dolore paries filios, et sub viri potestate eris, et ipse dominabitur tui.",
                17: "Adae vero dixit: Quia audisti vocem uxoris tuae, et comedisti de ligno, ex quo praeceperam tibi ne comederes, maledicta terra in opere tuo: in laboribus comedes ex ea cunctis diebus vitae tuae.",
                18: "Spinas et tribulos germinabit tibi, et comedes herbam terrae.",
                19: "In sudore vultus tui vesceris pane, donec revertaris in terram de qua sumptus es: quia pulvis es, et in pulverem reverteris.",
                20: "Et vocavit Adam nomen uxoris suae, Heva: eo quod mater esset cunctorum viventium.",
                21: "Fecit quoque Dominus Deus Adae et uxori eius tunicas pelliceas, et induit eos.",
                22: "Et ait: Ecce Adam quasi unus ex nobis factus est, sciens bonum et malum: nunc ergo ne forte mittat manum suam, et sumat etiam de ligno vitae, et comedat, et vivat in aeternum.",
                23: "Et emisit eum Dominus Deus de paradiso voluptatis, ut operaretur terram de qua sumptus est.",
                24: "Eiecitque Adam: et collocavit ante paradisum voluptatis cherubim, et flammeum gladium, atque versatilem, ad custodiendam viam ligni vitae."
            }
        }
    },

    exodus: {
        name: 'Exodus',
        abbrev: 'Exod',
        testament: 'OT',
        order: 2,
        chapters: {
            20: {
                1: { latin: "Locutusque est Dominus cunctos sermones hos:", english: "And God spake all these words, saying," },
                2: { latin: "Ego sum Dominus Deus tuus, qui eduxi te de terra Aegypti, de domo servitutis.", english: "I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage." },
                3: { latin: "Non habebis deos alienos coram me.", english: "Thou shalt have no other gods before me." },
                4: { latin: "Non facies tibi sculptile, neque omnem similitudinem quae est in caelo desuper, et quae in terra deorsum, nec eorum quae sunt in aquis sub terra.", english: "Thou shalt not make unto thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth:" },
                5: { latin: "Non adorabis ea, neque coles: ego sum Dominus Deus tuus fortis, zelotes, visitans iniquitatem patrum in filios, in tertiam et quartam generationem eorum qui oderunt me:", english: "Thou shalt not bow down thyself to them, nor serve them: for I the LORD thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me;" },
                6: { latin: "et faciens misericordiam in millia his qui diligunt me, et custodiunt praecepta mea.", english: "And shewing mercy unto thousands of them that love me, and keep my commandments." },
                7: { latin: "Non assumes nomen Domini Dei tui in vanum: nec enim habebit insontem Dominus eum qui assumpserit nomen Domini Dei sui frustra.", english: "Thou shalt not take the name of the LORD thy God in vain; for the LORD will not hold him guiltless that taketh his name in vain." },
                8: { latin: "Memento ut diem sabbati sanctifices.", english: "Remember the sabbath day, to keep it holy." },
                9: { latin: "Sex diebus operaberis, et facies omnia opera tua.", english: "Six days shalt thou labour, and do all thy work:" },
                10: { latin: "Septimo autem die sabbatum Domini Dei tui est: non facies omne opus in eo, tu, et filius tuus et filia tua, servus tuus et ancilla tua, iumentum tuum, et advena qui est intra portas tuas.", english: "But the seventh day is the sabbath of the LORD thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates:" },
                11: { latin: "Sex enim diebus fecit Dominus caelum et terram, et mare, et omnia quae in eis sunt, et requievit in die septimo: idcirco benedixit Dominus diei sabbati, et sanctificavit eum.", english: "For in six days the LORD made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the LORD blessed the sabbath day, and hallowed it." },
                12: { latin: "Honora patrem tuum et matrem tuam, ut sis longaevus super terram, quam Dominus Deus tuus dabit tibi.", english: "Honour thy father and thy mother: that thy days may be long upon the land which the LORD thy God giveth thee." },
                13: { latin: "Non occides.", english: "Thou shalt not kill." },
                14: { latin: "Non moechaberis.", english: "Thou shalt not commit adultery." },
                15: { latin: "Non furtum facies.", english: "Thou shalt not steal." },
                16: { latin: "Non loqueris contra proximum tuum falsum testimonium.", english: "Thou shalt not bear false witness against thy neighbour." },
                17: { latin: "Non concupisces domum proximi tui: nec desiderabis uxorem eius, non servum, non ancillam, non bovem, non asinum, nec omnia quae illius sunt.", english: "Thou shalt not covet thy neighbour's house, thou shalt not covet thy neighbour's wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbour's." }
            },
        }
    },

    psalms: {
        name: 'Psalmi',
        abbrev: 'Ps',
        testament: 'OT',
        order: 19,
        chapters: {
            1: {
                1: "Beatus vir, qui non abiit in consilio impiorum, et in via peccatorum non stetit, et in cathedra pestilentiae non sedit:",
                2: "sed in lege Domini voluntas eius, et in lege eius meditabitur die ac nocte.",
                3: "Et erit tamquam lignum, quod plantatum est secus decursus aquarum, quod fructum suum dabit in tempore suo: et folium eius non defluet: et omnia quaecumque faciet, prosperabuntur.",
                4: "Non sic impii, non sic: sed tamquam pulvis, quem proiicit ventus a facie terrae.",
                5: "Ideo non resurgent impii in iudicio: neque peccatores in concilio iustorum.",
                6: "Quoniam novit Dominus viam iustorum: et iter impiorum peribit."
            },
            23: {
                1: { latin: "Dominus regit me, et nihil mihi deerit:", english: "The LORD is my shepherd; I shall not want." },
                2: { latin: "in loco pascuae ibi me collocavit. Super aquam refectionis educavit me:", english: "He maketh me to lie down in green pastures: he leadeth me beside the still waters." },
                3: { latin: "animam meam convertit. Deduxit me super semitas iustitiae, propter nomen suum.", english: "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake." },
                4: { latin: "Nam, et si ambulavero in medio umbrae mortis, non timebo mala: quoniam tu mecum es. Virga tua, et baculus tuus: ipsa me consolata sunt.", english: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me." },
                5: { latin: "Parasti in conspectu meo mensam, adversus eos qui tribulant me. Impinguasti in oleo caput meum: et calix meus inebrians quam praeclarus est!", english: "Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over." },
                6: { latin: "Et misericordia tua subsequetur me omnibus diebus vitae meae: et ut inhabitem in domo Domini, in longitudinem dierum.", english: "Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever." }
            },
            51: {
                1: "Miserere mei, Deus, secundum magnam misericordiam tuam. Et secundum multitudinem miserationum tuarum, dele iniquitatem meam.",
                2: "Amplius lava me ab iniquitate mea: et a peccato meo munda me.",
                3: "Quoniam iniquitatem meam ego cognosco: et peccatum meum contra me est semper.",
                4: "Tibi soli peccavi, et malum coram te feci: ut iustificeris in sermonibus tuis, et vincas cum iudicaris.",
                5: "Ecce enim in iniquitatibus conceptus sum: et in peccatis concepit me mater mea.",
                6: "Ecce enim veritatem dilexisti: incerta et occulta sapientiae tuae manifestasti mihi.",
                7: "Asperges me hyssopo, et mundabor: lavabis me, et super nivem dealbabor.",
                8: "Auditui meo dabis gaudium et laetitiam: et exsultabunt ossa humiliata.",
                9: "Averte faciem tuam a peccatis meis: et omnes iniquitates meas dele.",
                10: "Cor mundum crea in me, Deus: et spiritum rectum innova in visceribus meis.",
                11: "Ne proiicias me a facie tua: et spiritum sanctum tuum ne auferas a me.",
                12: "Redde mihi laetitiam salutaris tui: et spiritu principali confirma me.",
                13: "Docebo iniquos vias tuas: et impii ad te convertentur.",
                14: "Libera me de sanguinibus, Deus, Deus salutis meae: et exsultabit lingua mea iustitiam tuam.",
                15: "Domine, labia mea aperies: et os meum annuntiabit laudem tuam.",
                16: "Quoniam si voluisses sacrificium, dedissem utique: holocaustis non delectaberis.",
                17: "Sacrificium Deo spiritus contribulatus: cor contritum, et humiliatum, Deus, non despicies.",
                18: "Benigne fac, Domine, in bona voluntate tua Sion: ut aedificentur muri Ierusalem.",
                19: "Tunc acceptabis sacrificium iustitiae, oblationes, et holocausta: tunc imponent super altare tuum vitulos."
            },
            91: {
                1: "Qui habitat in adiutorio Altissimi, in protectione Dei caeli commorabitur.",
                2: "Dicet Domino: Susceptor meus es tu, et refugium meum: Deus meus sperabo in eum.",
                3: "Quoniam ipse liberavit me de laqueo venantium, et a verbo aspero.",
                4: "Scapulis suis obumbrabit tibi: et sub pennis eius sperabis.",
                5: "Scuto circumdabit te veritas eius: non timebis a timore nocturno.",
                6: "A sagitta volante in die, a negotio perambulante in tenebris: ab incursu, et daemonio meridiano.",
                7: "Cadent a latere tuo mille, et decem millia a dextris tuis: ad te autem non appropinquabit.",
                8: "Verumtamen oculis tuis considerabis: et retributionem peccatorum videbis.",
                9: "Quoniam tu es, Domine, spes mea: Altissimum posuisti refugium tuum.",
                10: "Non accedet ad te malum: et flagellum non appropinquabit tabernaculo tuo.",
                11: "Quoniam angelis suis mandavit de te: ut custodiant te in omnibus viis tuis.",
                12: "In manibus portabunt te: ne forte offendas ad lapidem pedem tuum.",
                13: "Super aspidem et basiliscum ambulabis: et conculcabis leonem et draconem.",
                14: "Quoniam in me speravit, liberabo eum: protegam eum, quoniam cognovit nomen meum.",
                15: "Clamabit ad me, et ego exaudiam eum: cum ipso sum in tribulatione: eripiam eum et glorificabo eum.",
                16: "Longitudine dierum replebo eum: et ostendam illi salutare meum."
            },
            150: {
                1: "Laudate Dominum in sanctis eius: laudate eum in firmamento virtutis eius.",
                2: "Laudate eum in virtutibus eius: laudate eum secundum multitudinem magnitudinis eius.",
                3: "Laudate eum in sono tubae: laudate eum in psalterio et cithara.",
                4: "Laudate eum in tympano et choro: laudate eum in chordis et organo.",
                5: "Laudate eum in cymbalis benesonantibus: laudate eum in cymbalis iubilationis:",
                6: "omnis spiritus laudet Dominum. Alleluia."
            }
        }
    },

    isaiah: {
        name: 'Isaias',
        abbrev: 'Is',
        testament: 'OT',
        order: 23,
        chapters: {
            53: {
                1: "Quis credidit auditui nostro? et brachium Domini cui revelatum est?",
                2: "Et ascendet sicut virgultum coram eo, et sicut radix de terra sitienti: non est species ei, neque decor: et vidimus eum, et non erat aspectus, et desideravimus eum:",
                3: "despectum, et novissimum virorum, virum dolorum, et scientem infirmitatem: et quasi absconditus vultus eius et despectus, unde nec reputavimus eum.",
                4: "Vere languores nostros ipse tulit, et dolores nostros ipse portavit: et nos putavimus eum quasi leprosum, et percussum a Deo et humiliatum.",
                5: "Ipse autem vulneratus est propter iniquitates nostras, attritus est propter scelera nostra: disciplina pacis nostrae super eum, et livore eius sanati sumus.",
                6: "Omnes nos quasi oves erravimus, unusquisque in viam suam declinavit: et posuit Dominus in eo iniquitatem omnium nostrum.",
                7: "Oblatus est quia ipse voluit, et non aperuit os suum: sicut ovis ad occisionem ducetur, et quasi agnus coram tondente se obmutescet, et non aperiet os suum.",
                8: "De angustia, et de iudicio sublatus est: generationem eius quis enarrabit? quia abscissus est de terra viventium: propter scelus populi mei percussi eum.",
                9: "Et dabit impios pro sepultura, et divitem pro morte sua: eo quod iniquitatem non fecerit, neque dolus fuerit in ore eius.",
                10: "Et Dominus voluit conterere eum in infirmitate: si posuerit pro peccato animam suam, videbit semen longaevum, et voluntas Domini in manu eius dirigetur.",
                11: "Pro eo quod laboravit anima eius, videbit et saturabitur: in scientia sua iustificabit ipse iustus servus meus multos, et iniquitates eorum ipse portabit.",
                12: "Ideo dispertiam ei plurimos: et fortium dividet spolia, pro eo quod tradidit in mortem animam suam, et cum sceleratis reputatus est: et ipse peccata multorum tulit, et pro transgressoribus rogavit."
            }
        }
    },

    // ==========================================
    // NEW TESTAMENT
    // ==========================================

    matthew: {
        name: 'Evangelium secundum Matthaeum',
        abbrev: 'Matt',
        testament: 'NT',
        order: 40,
        chapters: {
            1: {
                1: "Liber generationis Iesu Christi filii David, filii Abraham.",
                2: "Abraham genuit Isaac. Isaac autem genuit Iacob. Iacob autem genuit Iudam, et fratres eius.",
                3: "Iudas autem genuit Phares, et Zaram de Thamar. Phares autem genuit Esrom. Esrom autem genuit Aram.",
                4: "Aram autem genuit Aminadab. Aminadab autem genuit Naasson. Naasson autem genuit Salmon.",
                5: "Salmon autem genuit Booz de Rahab. Booz autem genuit Obed ex Ruth. Obed autem genuit Iesse.",
                6: "Iesse autem genuit David regem. David autem rex genuit Salomonem ex ea, quae fuit Uriae.",
                7: "Salomon autem genuit Roboam. Roboam autem genuit Abiam. Abias autem genuit Asa.",
                8: "Asa autem genuit Iosaphat. Iosaphat autem genuit Ioram. Ioram autem genuit Oziam.",
                9: "Ozias autem genuit Ioatham. Ioatham autem genuit Achaz. Achaz autem genuit Ezechiam.",
                10: "Ezechias autem genuit Manassen. Manasses autem genuit Amon. Amon autem genuit Iosiam.",
                11: "Iosias autem genuit Iechoniam, et fratres eius in transmigratione Babylonis.",
                12: "Et post transmigrationem Babylonis: Iechonias genuit Salathiel. Salathiel autem genuit Zorobabel.",
                13: "Zorobabel autem genuit Abiud. Abiud autem genuit Eliacim. Eliacim autem genuit Azor.",
                14: "Azor autem genuit Sadoc. Sadoc autem genuit Achim. Achim autem genuit Eliud.",
                15: "Eliud autem genuit Eleazar. Eleazar autem genuit Mathan. Mathan autem genuit Iacob.",
                16: "Iacob autem genuit Ioseph virum Mariae, de qua natus est Iesus, qui vocatur Christus.",
                17: "Omnes itaque generationes ab Abraham usque ad David, generationes quatuordecim: et a David usque ad transmigrationem Babylonis, generationes quatuordecim: et a transmigratione Babylonis usque ad Christum, generationes quatuordecim.",
                18: "Christi autem generatio sic erat: Cum esset desponsata mater eius Maria Ioseph, antequam convenirent inventa est in utero habens de Spiritu Sancto.",
                19: "Ioseph autem vir eius cum esset iustus, et nollet eam traducere, voluit occulte dimittere eam.",
                20: "Haec autem eo cogitante, ecce angelus Domini apparuit in somnis ei, dicens: Ioseph, fili David, noli timere accipere Mariam coniugem tuam: quod enim in ea natum est, de Spiritu Sancto est.",
                21: "Pariet autem filium: et vocabis nomen eius Iesum: ipse enim salvum faciet populum suum a peccatis eorum.",
                22: "Hoc autem totum factum est, ut adimpleretur quod dictum est a Domino per prophetam dicentem:",
                23: "Ecce virgo in utero habebit, et pariet filium: et vocabunt nomen eius Emmanuel, quod est interpretatum Nobiscum Deus.",
                24: "Exsurgens autem Ioseph a somno, fecit sicut praecepit ei angelus Domini, et accepit coniugem suam.",
                25: "Et non cognoscebat eam donec peperit filium suum primogenitum: et vocavit nomen eius Iesum."
            },
            5: {
                1: { latin: "Videns autem Iesus turbas, ascendit in montem, et cum sedisset, accesserunt ad eum discipuli eius,", english: "And seeing the multitudes, he went up into a mountain: and when he was set, his disciples came unto him:" },
                2: { latin: "et aperiens os suum docebat eos dicens:", english: "And he opened his mouth, and taught them, saying," },
                3: { latin: "Beati pauperes spiritu: quoniam ipsorum est regnum caelorum.", english: "Blessed are the poor in spirit: for theirs is the kingdom of heaven." },
                4: { latin: "Beati mites: quoniam ipsi possidebunt terram.", english: "Blessed are they that mourn: for they shall be comforted." },
                5: { latin: "Beati qui lugent: quoniam ipsi consolabuntur.", english: "Blessed are the meek: for they shall inherit the earth." },
                6: { latin: "Beati qui esuriunt et sitiunt iustitiam: quoniam ipsi saturabuntur.", english: "Blessed are they which do hunger and thirst after righteousness: for they shall be filled." },
                7: { latin: "Beati misericordes: quoniam ipsi misericordiam consequentur.", english: "Blessed are the merciful: for they shall obtain mercy." },
                8: { latin: "Beati mundo corde: quoniam ipsi Deum videbunt.", english: "Blessed are the pure in heart: for they shall see God." },
                9: { latin: "Beati pacifici: quoniam filii Dei vocabuntur.", english: "Blessed are the peacemakers: for they shall be called the children of God." },
                10: { latin: "Beati qui persecutionem patiuntur propter iustitiam: quoniam ipsorum est regnum caelorum.", english: "Blessed are they which are persecuted for righteousness' sake: for theirs is the kingdom of heaven." },
                11: { latin: "Beati estis cum maledixerint vobis, et persecuti vos fuerint, et dixerint omne malum adversum vos mentientes, propter me:", english: "Blessed are ye, when men shall revile you, and persecute you, and shall say all manner of evil against you falsely, for my sake." },
                12: { latin: "gaudete, et exsultate, quoniam merces vestra copiosa est in caelis. Sic enim persecuti sunt prophetas, qui fuerunt ante vos.", english: "Rejoice, and be exceeding glad: for great is your reward in heaven: for so persecuted they the prophets which were before you." },
                13: { latin: "Vos estis sal terrae. Quod si sal evanuerit, in quo salietur? ad nihilum valet ultra, nisi ut mittatur foras, et conculcetur ab hominibus.", english: "Ye are the salt of the earth: but if the salt have lost his savour, wherewith shall it be salted? it is thenceforth good for nothing, but to be cast out, and to be trodden under foot of men." },
                14: { latin: "Vos estis lux mundi. Non potest civitas abscondi supra montem posita.", english: "Ye are the light of the world. A city that is set on an hill cannot be hid." },
                15: { latin: "Neque accendunt lucernam, et ponunt eam sub modio, sed super candelabrum, ut luceat omnibus qui in domo sunt.", english: "Neither do men light a candle, and put it under a bushel, but on a candlestick; and it giveth light unto all that are in the house." },
                16: { latin: "Sic luceat lux vestra coram hominibus, ut videant opera vestra bona, et glorificent Patrem vestrum, qui in caelis est.", english: "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven." }
            },
            6: {
                9: "Sic ergo vos orabitis: Pater noster, qui es in caelis, sanctificetur nomen tuum.",
                10: "Adveniat regnum tuum. Fiat voluntas tua, sicut in caelo et in terra.",
                11: "Panem nostrum supersubstantialem da nobis hodie.",
                12: "Et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris.",
                13: "Et ne nos inducas in tentationem. Sed libera nos a malo. Amen."
            },
            28: {
                1: "Vespere autem sabbati, quae lucescit in prima sabbati, venit Maria Magdalene, et altera Maria, videre sepulchrum.",
                2: "Et ecce terraemotus factus est magnus. Angelus enim Domini descendit de caelo: et accedens revolvit lapidem, et sedebat super eum:",
                3: "erat autem aspectus eius sicut fulgur: et vestimentum eius sicut nix.",
                4: "Prae timore autem eius exterriti sunt custodes, et facti sunt velut mortui.",
                5: "Respondens autem angelus dixit mulieribus: Nolite timere vos: scio enim, quod Iesum, qui crucifixus est, quaeritis.",
                6: "Non est hic: surrexit enim, sicut dixit. Venite, et videte locum, ubi positus erat Dominus.",
                7: "Et cito euntes dicite discipulis eius quia surrexit: et ecce praecedit vos in Galilaeam: ibi eum videbitis: ecce praedixi vobis.",
                8: "Et exierunt cito de monumento cum timore et gaudio magno, currentes nuntiare discipulis eius.",
                9: "Et ecce Iesus occurrit illis, dicens: Avete. Illae autem accesserunt, et tenuerunt pedes eius, et adoraverunt eum.",
                10: "Tunc ait illis Iesus: Nolite timere: ite, nuntiate fratribus meis ut eant in Galilaeam, ibi me videbunt.",
                18: "Et accedens Iesus locutus est eis, dicens: Data est mihi omnis potestas in caelo et in terra:",
                19: "euntes ergo docete omnes gentes: baptizantes eos in nomine Patris, et Filii, et Spiritus Sancti:",
                20: "docentes eos servare omnia quaecumque mandavi vobis: et ecce ego vobiscum sum omnibus diebus, usque ad consummationem saeculi."
            }
        }
    },

    john: {
        name: 'Evangelium secundum Joannem',
        abbrev: 'Jo',
        testament: 'NT',
        order: 43,
        chapters: {
            1: {
                1: { latin: "In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum.", english: "In the beginning was the Word, and the Word was with God, and the Word was God." },
                2: { latin: "Hoc erat in principio apud Deum.", english: "The same was in the beginning with God." },
                3: { latin: "Omnia per ipsum facta sunt: et sine ipso factum est nihil, quod factum est.", english: "All things were made by him; and without him was not any thing made that was made." },
                4: { latin: "In ipso vita erat, et vita erat lux hominum:", english: "In him was life; and the life was the light of men." },
                5: { latin: "et lux in tenebris lucet, et tenebrae eam non comprehenderunt.", english: "And the light shineth in darkness; and the darkness comprehended it not." },
                6: { latin: "Fuit homo missus a Deo, cui nomen erat Ioannes.", english: "There was a man sent from God, whose name was John." },
                7: { latin: "Hic venit in testimonium ut testimonium perhiberet de lumine, ut omnes crederent per illum.", english: "The same came for a witness, to bear witness of the Light, that all men through him might believe." },
                8: { latin: "Non erat ille lux, sed ut testimonium perhiberet de lumine.", english: "He was not that Light, but was sent to bear witness of that Light." },
                9: { latin: "Erat lux vera, quae illuminat omnem hominem venientem in hunc mundum.", english: "That was the true Light, which lighteth every man that cometh into the world." },
                10: { latin: "In mundo erat, et mundus per ipsum factus est, et mundus eum non cognovit.", english: "He was in the world, and the world was made by him, and the world knew him not." },
                11: { latin: "In propria venit, et sui eum non receperunt.", english: "He came unto his own, and his own received him not." },
                12: { latin: "Quotquot autem receperunt eum, dedit eis potestatem filios Dei fieri, his qui credunt in nomine eius:", english: "But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name:" },
                13: { latin: "qui non ex sanguinibus, neque ex voluntate carnis, neque ex voluntate viri, sed ex Deo nati sunt.", english: "Which were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God." },
                14: { latin: "Et Verbum caro factum est, et habitavit in nobis: et vidimus gloriam eius, gloriam quasi unigeniti a Patre, plenum gratiae et veritatis.", english: "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth." }
            },
            3: {
                16: { latin: "Sic enim Deus dilexit mundum, ut Filium suum unigenitum daret: ut omnis qui credit in eum, non pereat, sed habeat vitam aeternam.", english: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." },
                17: { latin: "Non enim misit Deus Filium suum in mundum, ut iudicet mundum, sed ut salvetur mundus per ipsum.", english: "For God sent not his Son into the world to condemn the world; but that the world through him might be saved." },
                18: { latin: "Qui credit in eum, non iudicatur: qui autem non credit, iam iudicatus est: quia non credit in nomine unigeniti Filii Dei.", english: "He that believeth on him is not condemned: but he that believeth not is condemned already, because he hath not believed in the name of the only begotten Son of God." }
            },
            14: {
                1: "Non turbetur cor vestrum. Creditis in Deum, et in me credite.",
                2: "In domo Patris mei mansiones multae sunt. Si quo minus, dixissem vobis: quia vado parare vobis locum.",
                3: "Et si abiero, et praeparavero vobis locum: iterum venio, et accipiam vos ad meipsum, ut ubi sum ego, et vos sitis.",
                4: "Et quo ego vado scitis, et viam scitis.",
                5: "Dicit ei Thomas: Domine, nescimus quo vadis: et quomodo possumus viam scire?",
                6: "Dicit ei Iesus: Ego sum via, et veritas, et vita. Nemo venit ad Patrem, nisi per me."
            }
        }
    },

    romans: {
        name: 'Epistula ad Romanos',
        abbrev: 'Rom',
        testament: 'NT',
        order: 45,
        chapters: {
            1: {
                1: "Paulus servus Iesu Christi, vocatus Apostolus, segregatus in Evangelium Dei,",
                2: "quod ante promiserat per prophetas suos in Scripturis sanctis",
                3: "de Filio suo, qui factus est ei ex semine David secundum carnem,",
                4: "qui praedestinatus est Filius Dei in virtute secundum spiritum sanctificationis ex resurrectione mortuorum Iesu Christi Domini nostri:",
                5: "per quem accepimus gratiam, et apostolatum ad obediendum fidei in omnibus gentibus pro nomine eius,",
                6: "in quibus estis et vos vocati Iesu Christi:",
                7: "omnibus qui sunt Romae, dilectis Dei, vocatis sanctis. Gratia vobis, et pax a Deo Patre nostro, et Domino Iesu Christo.",
                16: "Non enim erubesco Evangelium. Virtus enim Dei est in salutem omni credenti, Iudaeo primum, et Graeco.",
                17: "Iustitia enim Dei in eo revelatur ex fide in fidem: sicut scriptum est: Iustus autem ex fide vivit."
            },
            3: {
                23: "omnes enim peccaverunt, et egent gloria Dei,",
                24: "iustificati gratis per gratiam ipsius, per redemptionem quae est in Christo Iesu,",
                25: "quem proposuit Deus propitiationem per fidem in sanguine ipsius, ad ostensionem iustitiae suae propter remissionem praecedentium delictorum"
            },
            5: {
                1: "Iustificati ergo ex fide, pacem habeamus ad Deum per Dominum nostrum Iesum Christum:",
                2: "per quem et habemus accessum per fidem in gratiam istam, in qua stamus, et gloriamur in spe gloriae filiorum Dei.",
                8: "Commendat autem caritatem suam Deus in nobis: quoniam cum adhuc peccatores essemus, secundum tempus"
            },
            6: {
                23: "Stipendia enim peccati, mors. Gratia autem Dei, vita aeterna, in Christo Iesu Domino nostro."
            },
            8: {
                1: "Nihil ergo nunc damnationis est iis qui sunt in Christo Iesu, qui non secundum carnem ambulant.",
                28: "Scimus autem quoniam diligentibus Deum omnia cooperantur in bonum, iis qui secundum propositum vocati sunt sancti.",
                31: "Quid ergo dicemus ad haec? Si Deus pro nobis, quis contra nos?",
                35: "Quis ergo nos separabit a caritate Christi? tribulatio? an angustia? an fames? an nuditas? an periculum? an persecutio? an gladius?",
                37: "Sed in his omnibus superamus propter eum qui dilexit nos.",
                38: "Certus sum enim quia neque mors, neque vita, neque angeli, neque principatus, neque virtutes, neque instantia, neque futura, neque fortitudo,",
                39: "neque altitudo, neque profundum, neque creatura alia poterit nos separare a caritate Dei, quae est in Christo Iesu Domino nostro."
            },
            12: {
                1: "Obsecro itaque vos fratres per misericordiam Dei, ut exhibeatis corpora vestra hostiam viventem, sanctam, Deo placentem, rationabile obsequium vestrum.",
                2: "Et nolite conformari huic saeculo, sed reformamini in novitate sensus vestri: ut probetis quae sit voluntas Dei bona, et beneplacens, et perfecta."
            }
        }
    },

    corinthians1: {
        name: 'Epistula I ad Corinthios',
        abbrev: '1 Cor',
        testament: 'NT',
        order: 46,
        chapters: {
            13: {
                1: { latin: "Si linguis hominum loquar, et angelorum, caritatem autem non habeam, factus sum velut aes sonans, aut cymbalum tinniens.", english: "Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal." },
                2: { latin: "Et si habuero prophetiam, et noverim mysteria omnia, et omnem scientiam: et si habuero omnem fidem ita ut montes transferam, caritatem autem non habuero, nihil sum.", english: "And though I have the gift of prophecy, and understand all mysteries, and all knowledge; and though I have all faith, so that I could remove mountains, and have not charity, I am nothing." },
                3: { latin: "Et si distribuero in cibos pauperum omnes facultates meas, et si tradidero corpus meum ita ut ardeam, caritatem autem non habuero, nihil mihi prodest.", english: "And though I bestow all my goods to feed the poor, and though I give my body to be burned, and have not charity, it profiteth me nothing." },
                4: { latin: "Caritas patiens est, benigna est. Caritas non aemulatur, non agit perperam, non inflatur,", english: "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up," },
                5: { latin: "non est ambitiosa, non quaerit quae sua sunt, non irritatur, non cogitat malum,", english: "Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil;" },
                6: { latin: "non gaudet super iniquitate, congaudet autem veritati:", english: "Rejoiceth not in iniquity, but rejoiceth in the truth;" },
                7: { latin: "omnia suffert, omnia credit, omnia sperat, omnia sustinet.", english: "Beareth all things, believeth all things, hopeth all things, endureth all things." },
                8: { latin: "Caritas numquam excidit: sive prophetiae evacuabuntur, sive linguae cessabunt, sive scientia destruetur.", english: "Charity never faileth: but whether there be prophecies, they shall fail; whether there be tongues, they shall cease; whether there be knowledge, it shall vanish away." },
                9: { latin: "Ex parte enim cognoscimus, et ex parte prophetamus.", english: "For we know in part, and we prophesy in part." },
                10: { latin: "Cum autem venerit quod perfectum est, evacuabitur quod ex parte est.", english: "But when that which is perfect is come, then that which is in part shall be done away." },
                11: { latin: "Cum essem parvulus, loquebar ut parvulus, sapiebam ut parvulus, cogitabam ut parvulus. Quando autem factus sum vir, evacuavi quae erant parvuli.", english: "When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things." },
                12: { latin: "Videmus nunc per speculum in aenigmate: tunc autem facie ad faciem. Nunc cognosco ex parte: tunc autem cognoscam sicut et cognitus sum.", english: "For now we see through a glass, darkly; but then face to face: now I know in part; but then shall I know even as also I am known." },
                13: { latin: "Nunc autem manent fides, spes, caritas, tria haec: maior autem horum est caritas.", english: "And now abideth faith, hope, charity, these three; but the greatest of these is charity." }
            },
            15: {
                55: "Ubi est, mors, victoria tua? ubi est, mors, stimulus tuus?",
                56: "Stimulus autem mortis peccatum est: virtus vero peccati lex.",
                57: "Deo autem gratias, qui dedit nobis victoriam per Dominum nostrum Iesum Christum."
            }
        }
    },

    galatians: {
        name: 'Epistula ad Galatas',
        abbrev: 'Gal',
        testament: 'NT',
        order: 48,
        chapters: {
            5: {
                22: "Fructus autem Spiritus est caritas, gaudium, pax, patientia, benignitas, bonitas, longanimitas,",
                23: "mansuetudo, fides, modestia, continentia, castitas. Adversus huiusmodi non est lex."
            }
        }
    },

    ephesians: {
        name: 'Epistula ad Ephesios',
        abbrev: 'Eph',
        testament: 'NT',
        order: 49,
        chapters: {
            2: {
                8: "Gratia enim estis salvati per fidem, et hoc non ex vobis: Dei enim donum est:",
                9: "non ex operibus, ut ne quis glorietur.",
                10: "Ipsius enim sumus factura, creati in Christo Iesu in operibus bonis, quae praeparavit Deus ut in illis ambulemus."
            },
            6: {
                10: "De cetero fratres confortamini in Domino, et in potentia virtutis eius.",
                11: "Induite vos armaturam Dei, ut possitis stare adversus insidias diaboli.",
                12: "Quoniam non est nobis colluctatio adversus carnem et sanguinem: sed adversus principes, et potestates, adversus mundi rectores tenebrarum harum, contra spiritualia nequitiae, in caelestibus."
            }
        }
    },

    philippians: {
        name: 'Epistula ad Philippenses',
        abbrev: 'Phil',
        testament: 'NT',
        order: 50,
        chapters: {
            4: {
                4: "Gaudete in Domino semper: iterum dico, gaudete.",
                6: "Nihil solliciti sitis: sed in omni oratione, et obsecratione, cum gratiarum actione petitiones vestrae innotescant apud Deum.",
                7: "Et pax Dei, quae exsuperat omnem sensum, custodiat corda vestra, et intelligentias vestras in Christo Iesu.",
                8: "De cetero, fratres, quaecumque sunt vera, quaecumque pudica, quaecumque iusta, quaecumque sancta, quaecumque amabilia, quaecumque bonae famae, si qua virtus, si qua laus disciplinae, haec cogitate.",
                13: "Omnia possum in eo qui me confortat."
            }
        }
    },

    timothy1: {
        name: 'Epistula I ad Timotheum',
        abbrev: '1 Tim',
        testament: 'NT',
        order: 54,
        chapters: {
            6: {
                10: "Radix enim omnium malorum est cupiditas: quam quidam appetentes erraverunt a fide, et inseruerunt se doloribus multis.",
                12: "Certa bonum certamen fidei, apprehende vitam aeternam, in qua vocatus es, et confessus bonam confessionem coram multis testibus."
            }
        }
    },

    hebrews: {
        name: 'Epistula ad Hebraeos',
        abbrev: 'Heb',
        testament: 'NT',
        order: 58,
        chapters: {
            11: {
                1: "Est autem fides sperandarum substantia rerum, argumentum non apparentium.",
                6: "Sine fide autem impossibile est placere Deo. Credere enim oportet accedentem ad Deum quia est, et inquirentibus se remunerator sit."
            },
            12: {
                1: "Ideoque et nos tantam habentes impositam nubem testium, deponentes omne pondus, et circumstans nos peccatum, per patientiam curramus ad propositum nobis certamen:",
                2: "aspicientes in auctorem fidei, et consummatorem Iesum, qui proposito sibi gaudio sustinuit crucem, confusione contempta, atque in dextera sedis Dei sedet."
            }
        }
    },

    james: {
        name: 'Epistula Jacobi',
        abbrev: 'Jac',
        testament: 'NT',
        order: 59,
        chapters: {
            1: {
                2: "Omne gaudium existimate fratres mei, cum in tentationes varias incideritis:",
                3: "scientes quod probatio fidei vestrae patientiam operatur.",
                5: "Si quis autem vestrum indiget sapientia, postulet a Deo, qui dat omnibus affluenter, et non improperat: et dabitur ei.",
                17: "Omne datum optimum, et omne donum perfectum desursum est, descendens a Patre luminum, apud quem non est transmutatio, nec vicissitudinis obumbratio.",
                22: "Estote autem factores verbi, et non auditores tantum: fallentes vosmetipsos."
            },
            2: {
                17: "Sic et fides, si non habeat opera, mortua est in semetipsa.",
                26: "Sicut enim corpus sine spiritu mortuum est, ita et fides sine operibus mortua est."
            }
        }
    },

    peter1: {
        name: 'Epistula I Petri',
        abbrev: '1 Pet',
        testament: 'NT',
        order: 60,
        chapters: {
            5: {
                6: "Humiliamini igitur sub potenti manu Dei, ut vos exaltet in tempore visitationis:",
                7: "omnem sollicitudinem vestram proiicientes in eum, quoniam ipsi cura est de vobis.",
                8: "Sobrii estote, et vigilate: quia adversarius vester diabolus tamquam leo rugiens circuit, quaerens quem devoret:"
            }
        }
    },

    john1: {
        name: 'Epistula I Joannis',
        abbrev: '1 Jo',
        testament: 'NT',
        order: 62,
        chapters: {
            1: {
                5: "Et haec est annuntiatio, quam audivimus ab eo, et annuntiamus vobis: Quoniam Deus lux est, et tenebrae in eo non sunt ullae.",
                8: "Si dixerimus quoniam peccatum non habemus, ipsi nos seducimus, et veritas in nobis non est.",
                9: "Si confiteamur peccata nostra: fidelis est, et iustus, ut remittat nobis peccata nostra, et emundet nos ab omni iniquitate."
            },
            4: {
                7: "Carissimi, diligamus nos invicem: quia caritas ex Deo est. Et omnis qui diligit, ex Deo natus est, et cognoscit Deum.",
                8: "Qui non diligit, non novit Deum: quoniam Deus caritas est.",
                16: "Et nos cognovimus, et credidimus caritati, quam habet Deus in nobis. Deus caritas est: et qui manet in caritate, in Deo manet, et Deus in eo.",
                18: "Timor non est in caritate: sed perfecta caritas foras mittit timorem, quoniam timor poenam habet: qui autem timet, non est perfectus in caritate.",
                19: "Nos ergo diligamus Deum, quoniam Deus prior dilexit nos."
            }
        }
    },

    revelation: {
        name: 'Apocalypsis',
        abbrev: 'Apoc',
        testament: 'NT',
        order: 66,
        chapters: {
            1: {
                8: "Ego sum Alpha et Omega, principium et finis, dicit Dominus Deus: qui est, et qui erat, et qui venturus est, Omnipotens."
            },
            3: {
                20: "Ecce sto ad ostium, et pulso: si quis audierit vocem meam, et aperuerit mihi ianuam, intrabo ad illum, et coenabo cum illo, et ipse mecum."
            },
            21: {
                1: "Et vidi caelum novum, et terram novam. Primum enim caelum, et prima terra abiit, et mare iam non est.",
                3: "Et audivi vocem magnam de throno dicentem: Ecce tabernaculum Dei cum hominibus, et habitabit cum eis. Et ipsi populus eius erunt, et ipse Deus cum eis erit eorum Deus:",
                4: "et absterget Deus omnem lacrimam ab oculis eorum: et mors ultra non erit, neque luctus, neque clamor, neque dolor erit ultra, quia prima abierunt.",
                5: "Et dixit qui sedebat in throno: Ecce nova facio omnia. Et dixit mihi: Scribe, quia haec verba fidelissima sunt, et vera.",
                6: "Et dixit mihi: Factum est: ego sum Alpha et Omega: initium et finis. Ego sitienti dabo de fonte aquae vitae, gratis."
            },
            22: {
                13: "Ego sum Alpha et Omega, primus et novissimus, principium et finis.",
                20: "Dicit qui testimonium perhibet istorum: Etiam venio cito: Amen. Veni, Domine Iesu.",
                21: "Gratia Domini nostri Iesu Christi cum omnibus vobis. Amen."
            }
        }
    }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VulgateData;
}
