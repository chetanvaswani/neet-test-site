const QUESTIONS = [
    {
      queNum: 1,
      question:
        "Which of the following is true for sexual reproduction in flowering plant? (A) Double fertilization \n (B) Triple fusion \n  (C) Zoidiogamy \n  (D) Siphonogamy \n  (E) Haploid endosperm \n (F) Triploid endosperm",
      options: [
        "(1) A, B, C and F only",
        "(2) A, B, D and F only",
        "(3) A and D only",
        "(4) A, B, D, E and F",
      ],
      answer: "(2) A, B, D and F only",
    },
    {
      queNum: 2,
      question:
        "Identify the correct statement and select the correct option from options given below :-\n(A) Synergids have special cellular thickening at chalazal end.\n(B) Polar nuclei are situated above the egg apparatus.\n(C) In angiosperms both male and female gametes are nonmotile.\n(D) Largest cell in embryo sac is central cell.",
      options: [
        "(1) A,B,C and D",
        "(2) Only B,C and D",
        "(3) Only C and D",
        "(4) Only A,C and D",
      ],
      answer: "(3) Only C and D",
    },
    {
      queNum: 3,
      question:
        "Few events of male gametophyte development in angiosperm are shown in figure given below. Arrange the diagram in progressive order of their occurrence and select the correct order from options given below:",
      options: [
        "(1) i, ii, iii, iv, v",
        "(2) i, v, iv, iii, ii",
        "(3) i, ii, iv, iii, v",
        "(4) i, v, ii, iii, iv",
      ],
      answer: "(4) i, v, ii, iii, iv",
      img: "/assets/sexual-reproduction-plants-3.png",
    },
    {
      queNum: 4,
      question:
        "Read the following five statements (A-E) and answer as asked next to them -\n(A) The anther is a tetralobed structure consisting of two pollen sacs.\n(B) Each cell of sporogenous tissue is capable of giving rise to a microspore tetrad.\n(C) Sporopollenin is one of the most, resistant inorganic material known.\n(D) Flower is a modified stem.\n(E) The inner most layer of microsporangium is tapetum and it nourishes the developing pollen grains.\nHow many of the above statements are correct:",
      options: ["(1) Four", "(2) One", "(3) Two", "(4) Three"],
      answer: "(3) Two",
    },
    {
      queNum: 5,
      question:
        "How many of the following structures in angiosperm plant have haploid set of chromosomes in their cells?\nMicrospore, generative cell, synergid, nucellus, integument, antipodal cell, archesporial cell, endosperm, zygote, vegetative cell of pollen.",
      options: ["(1) Six", "(2) Eight", "(3) Five", "(4) Three"],
      answer: "(3) Five",
    },
    {
      queNum: 6,
      question:
        "Consider the following four statements (a-d) and select the option which includes all the correct ones only:-\n(a) The proximal end of the stamen filament is attached to the thalamus or the petal of flower.\n(b) Pollen grains of some members of Rosaceae, Leguminosae and Solanaceae lose viability within 30 minutes of their release.\n(c) The anther is a tetragonal structure consisting of four microsporangia located at the corners, two in each lobe.\n(d) Parthenium or carrot grass that came into India as a contaminant with imported wheat has become ubiquitous in occurrence and causes pollen allergy.",
      options: [
        "(1) Statements (b), (c) and (d)",
        "(2) Statements (a), (b)",
        "(3) Statements (c), (d)",
        "(4) Statements (a), (c) and (d)",
      ],
      answer: "(4) Statements (a), (c) and (d)",
    },
    {
      queNum: 7,
      question:
        "Read the following statements carefully and identify the two correct statements ?\n(A) The central cell after triple fusion becomes the primary endosperm cell and develops into the endosperm.\n(B) A dicot embryo consists of one embryonal axis and one cotyledon.\n(C) Radicle and root cap in monocot plant in embryonic stage enclosed in coleorrhiza.\n(D) The coconut water in tender coconut is cellular endosperm.",
      options: [
        "(1) B and D",
        "(2) A and C",
        "(3) A and B",
        "(4) A and D",
      ],
      answer: "(2) A and C",
    },
    {
      queNum: 8,
      question:
        "In angiosperm :-\n(a) Male gametes are non motile\n(b) Male gametophyte is highly reduced\n(c) Mostly, dehiscence of anther is longitudinal\n(d) In over 60%, pollination takes place in bicelled stage\n(e) Pollen tube develops from vegetative cell\nHow many statements are correct ?",
      options: ["(1) Four", "(2) Three", "(3) Five", "(4) One"],
      answer: "(3) Five",
    },
    {
      queNum: 9,
      question:
        "Read the following statements :-\n(A) Typical angiosperm anther is monothecous\n(B) Formation of functional megaspore generally take place at chalazal end\n(C) Basal part of ovule is known as hilum\nHow many above statements are correct and incorrect ?",
      options: [
        "(1) 2-correct, 1-incorrect",
        "(2) 3-correct, 0-incorrect",
        "(3) 1-correct, 2-incorrect",
        "(4) 0-correct, 3-incorrect",
      ],
      answer: "(3) 1-correct, 2-incorrect",
    },
    {
      queNum: 10,
      question:
        "Assertion : Megaspore mother cell (MMC) forms only one functional megaspore commonly in angiosperms.\nReason : Ovules generally differentiate the single megaspore mother cell in nucellus.",
      options: [
        "(1) Both Assertion & Reason are True & the Reason is a correct explanation of the Assertion.",
        "(2) Both Assertion & Reason are True but Reason is not a correct explanation of the Assertion.",
        "(3) Assertion is True but the Reason is False",
        "(4) Both Assertion & Reason are false",
      ],
      answer:
        "(2) Both Assertion & Reason are True but Reason is not a correct explanation of the Assertion.",
    },
    {
      queNum: 11,
      question:
        "A. Outer most layer\nB. Nutritive, polyploid and multinucleated\nC. Multi layered\nD. Presence of hygroscopic, a-cellulosic fibrous bands in inner tangential wall\nE. Formation of proubisch body\nF. Endomitosis\nG. Formation of enzymes and hormones\nH. Secretion of sporopollenin, pollen kitt and sometimes compatibility proteins\nHow many features among the given above, belongs to tapetum.",
      options: ["(1) Two", "(2) Three", "(3) Four", "(4) Five"],
      answer: "(4) Five",
    },
    {
      queNum: 12,
      question:
        "Choose the correct combination from given table ?\nColumn-I    Column-II     Column-III\n(A) Scutellum      Diploid       Cotyledon\n(B) Integumented megasporangium     Ovule       Seed\n(C) Female gametophyte      Embryo sac     8 celled + 7 nucleated",
      options: [
        "(1) A, B and C",
        "(2) A and C",
        "(3) A and B",
        "(4) B and C",
      ],
      answer: "(3) A and B",
    },
    {
      queNum: 13,
      question:
        "Find out incorrect option?\n(1) Parthenogenesis → Formation of embryo directly from egg cell without fertilization.\n(2) Diplospory → Formation of embryo directly from megaspore mother cell.\n(3) Apospory → Formation of embryo directly from nucellus or integument.\n(4) Adventive embryony → Formation of embryo directly from nucellus or integument",
      options: [
        "(1) Parthenogenesis → Formation of embryo directly from egg cell without fertilization.",
        "(2) Diplospory → Formation of embryo directly from megaspore mother cell.",
        "(3) Apospory → Formation of embryo directly from nucellus or integument.",
        "(4) Adventive embryony → Formation of embryo directly from nucellus or integument",
      ],
      answer:
        "(2) Diplospory → Formation of embryo directly from megaspore mother cell.",
    },
    {
      queNum: 14,
      question:
        "Which of the following statement is incorrect?\n(1) Autogamy is prevented in maize, castor and Vallisneria.\n(2) Functional megaspore in an angiosperm develops into an embryo sac.\n(3) Exine of pollen wall is made up of pectin, cellulose and sporopollenin.\n(4) In pea and groundnut endosperm is completely consumed.",
      options: [
        "(1) Autogamy is prevented in maize, castor and Vallisneria.",
        "(2) Functional megaspore in an angiosperm develops into an embryo sac.",
        "(3) Exine of pollen wall is made up of pectin, cellulose and sporopollenin.",
        "(4) In pea and groundnut endosperm is completely consumed.",
      ],
      answer:
        "(3) Exine of pollen wall is made up of pectin, cellulose and sporopollenin.",
    },
    {
      queNum: 15,
      question:
        "How many statements are correct?\n(i) Pollen sac develops from microsporangium.\n(ii) Mature male gametophyte is always three celled.\n(iii) Monoecious plants have both male and female flowers on same plant but flowers are unisexual.\n(iv) First cell of female gametophyte is microspore.\n(v) Double fertilization results in formation of seed.",
      options: ["(1) Two", "(2) Three", "(3) Four", "(4) Five"],
      answer: "(2) Three",
    },
    {
      queNum: 16,
      question:
        "Assertion :- Most zygotes divide only after certain amount of endosperm is formed.\nReason :- The part of seed left after removal of seed coat is known as kernel.",
      options: [
        "(1) Assertion is correct but reason is not correct.",
        "(2) Assertion is not correct but reason is correct.",
        "(3) Assertion and reason both are incorrect.",
        "(4) Assertion and reason both are correct.",
      ],
      answer: "(4) Assertion and reason both are correct.",
    },
    {
      queNum: 17,
      question:
        "Consider the following four statement (a-d) and select the option which includes all the correct one only\n(a) Pollen grains are spherical and measure 25-50 micrometer in diameter\n(b) At germpore sporopollenin is absent\n(c) Pollen grain consumption increase performance of athletes and race horse\n(d) Pollen grain are shed at 3-called stage in more than 60% angiospermie plants.",
      options: [
        "(1) Statments (b),(c),and (d)",
        "(2) Statements (a),(b),and (c)",
        "(3) Statements (a),(b),(c) and (d)",
        "(4) Statements (a),(c),and (d)",
      ],
      answer: "(2) Statements (a),(b),and (c)",
    },
  ];
  
  export default QUESTIONS;
  