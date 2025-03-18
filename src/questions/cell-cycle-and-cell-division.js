const QUESTIONS = [
    {
      queNum: 1,
      question:
        "Read the following statements and choose the option which is true for them.\nStatement A: The steps of cell column are themselves under genetic control.\nStatement B: Cell growth in terms cytoplasmic increase is a continuous process",
      options: [
        "(1) Only statement A correct",
        "(2) Only statement B is correct",
        "(3) Both the statement are correct",
        "(4) Both the statement are incorrect"
      ],
      answer: "(3) Both the statement are correct"
    },
    {
      queNum: 2,
      question: "Mitotic cell division occurs in",
      options: [
        "(1) Diploid cell only",
        "(2) Haploid cell only",
        "(3) Gametes only",
        "(4) Both (1) and (2)"
      ],
      answer: "(4) Both (1) and (2)"
    },
    {
      queNum: 3,
      question: "Double metaphase plate is formed during.",
      options: [
        "(1) Mitosis",
        "(2) Meiosis I",
        "(3) Meiosis II",
        "(4) Mitosis and meiosis II"
      ],
      answer: "(3) Meiosis II"
    },
    {
      queNum: 4,
      question:
        "Which of the following is not a significance of mitosis:",
      options: [
        "(1) It brings about reproduction in unicellular organisms",
        "(2) It is essential for growth and development in multicellular organisms",
        "(3) It increases genetic variability in the population",
        "(4) In produces new cells for healing the wounds."
      ],
      answer: "(3) It increases genetic variability in the population"
    },
    {
      queNum: 5,
      question:
        "The stage during which homologous chromosomes starts pairing together is :",
      options: [
        "(1) Leptotene",
        "(2) Zygotene",
        "(3) Pachytene",
        "(4) Diakinesis"
      ],
      answer: "(2) Zygotene"
    },
    {
      queNum: 6,
      question:
        "How many bivalents are possible if a diploid cell undergoing meiosis has 36 chromosomes?",
      options: [
        "(1) 36",
        "(2) 18",
        "(3) 9",
        "(4) 27"
      ],
      answer: "(2) 18",
    },
    {
      queNum: 7,
      question:
        "Select the correct option with respect to that chromosome number per cell on comparing the occurrence of mitosis and meiosis in same organism.",
      options: [
        "(1) Mitotic metaphase > Meiotic metaphase-I = meiotic metaphase-II",
        "(2) Mitotic metaphase = Meiotic metaphase-I > meiotic metaphase II",
        "(3) Mitotic metaphase < Meiotic metaphase-I = Meiotic metaphase-II",
        "(4) Mitotic metaphase = Meiotic metaphase-I < meiotic metaphase-II"
      ],
      answer: "(3) Mitotic metaphase < Meiotic metaphase-I = Meiotic metaphase-II"
    },
    {
      queNum: 8,
      question:
        "Refer the given figure with respect to that schematic break up of stages of cell cycle : Which one of the following is correctly matched w.r.t. stages of cell cycle.",
      options: [
        "(1) Z-DNA duplication",
        "(2) P-Condensation of chromosome",
        "(3) Q-Final state of karyokinesis",
        "(4) M-Occurs by furrow formation in animal cells"
      ],
      answer: "(4) M-Occurs by furrow formation in animal cells",
      img: "/assets/cell-division-8.png",
    },
    {
      queNum: 9,
      question:
        "How many generations of mitosis are required for producing 32 cells.",
      options: [
        "(1) 16",
        "(2) 32",
        "(3) 33",
        "(4) 5"
      ],
      answer: "(4) 5"
    },
    {
      queNum: 10,
      question: "Interphase is called the resting phase because:",
      options: [
        "(1) It is the most active phase of cell cycle",
        "(2) There is no apparent activity related to cell division",
        "(3) It does not prepare cell for cell division",
        "(4) It is the phase where cell rests before entering into mitosis"
      ],
      answer: "(2) There is no apparent activity related to cell division"
    },
    {
      queNum: 11,
      question:
        "Read the following statements:\na. Complete disintegration of the nuclear envelope marks the start of the second phase of mitosis.\nb. Metaphase chromosome is made up of one sister chromatid.",
      options: [
        "(1) Only b is correct",
        "(2) Both a and b are incorrect",
        "(3) Only a is correct",
        "(4) Both a and b are correct"
      ],
      answer: "(3) Only a is correct"
    },
    {
      queNum: 12,
      question:
        "What is not true about cell cycle.\na. During G1 phase there is active synthesis of RNA and protein but no change in its DNA content.\nb. In synthesis or S phase, each chromosome carries a duplicate set of genes.\nc. During G2 phase a cell contains double the amount (4C) of DNA present in the original diploid cell (2C).\nd. In S-phase a cell doubles the original diploid (2n) chromosome number.",
      options: [
        "(1) c and d",
        "(2) b and c",
        "(3) d only",
        "(4) b, c and d"
      ],
      answer: "(3) d only"
    },
    {
      queNum: 13,
      question:
        "Chromatin fibres duplication, Genetic material 2C to 4C, histone protein synthesis, DNA repairing, DNA replication, centriole duplication.\nHow many of the above features are associated with synthesis phase of cell cycle.",
      options: [
        "(1) Three",
        "(2) Five",
        "(3) Four",
        "(4) Six"
      ],
      answer: "(2) Five"
    },
    {
      queNum: 14,
      question:
        "Cytokinesis in a plant cell is achieved by the formation of cell plate instead of a cleavage furrow, which is formed in",
      options: [
        "(1) Centripetal manner",
        "(2) Centrifugal manner",
        "(3) Both (1) and (2)",
        "(4) Equational manner"
      ],
      answer: "(2) Centrifugal manner"
    },
    {
      queNum: 15,
      question:
        "All are the essential stages that take place during meiosis, except.",
      options: [
        "(1) Two successive divisions without any DNA replication occurring between them",
        "(2) Formation of chiasmata and crossing over",
        "(3) Segregation of homologous chromosomes",
        "(4) Number of chromosomes in daughter cell after meiosis II is reduced to half but the amount of DNA remains the same"
      ],
      answer: "(4) Number of chromosomes in daughter cell after meiosis II is reduced to half but the amount of DNA remains the same"
    },
    {
      queNum: 16,
      question: "Find out the wrong statement.",
      options: [
        "(1) Each metaphase plate in heterotypic division of meiosis contains half the number of diploid set of chromosomes.",
        "(2) Interkinesis is generally short lived.",
        "(3) Synaptonemal complex and nuclear membrane completely disappear in diplotene.",
        "(4) Homologous chromosomes move to respective poles in anaphase-I"
      ],
      answer: "(3) Synaptonemal complex and nuclear membrane completely disappear in diplotene."
    },
    {
      queNum: 17,
      question:
        "Diplotene phase of meiosis is also characterised by :\na. Desynapsis\nb. Complete terminalisation of chiasmata.\nc. In oocytes of some vertebrates, diplotene can last for months or years.\nd. Complete disappearance of visibility of chromosome nuclear membrane and nucleoli.\ne. Complete development of astral rays and aster\nf. Longest phase of prophase-I",
      options: [
        "(1) a, b, c and e",
        "(2) b, d, e and f",
        "(3) a, c and f",
        "(4) b, d, and f"
      ],
      answer: "(3) a, c and f"
    },
    {
      queNum: 18,
      question:
        "Zygotene is important because of",
      options: [
        "(1) Formation of synaptonemal complex along the length of homologous chromosomes",
        "(2) Crossing over",
        "(3) Chiasmata formation",
        "(4) Initiation of condensation and coiling of chromatin fibres.."
      ],
      answer: "(1) Formation of synaptonemal complex along the length of homologous chromosomes"
    },
    {
      queNum: 19,
      question:
        "The beginning of stage in which chromosomes appear thickest and shortest is marked by :",
      options: [
        "(1) DNA replication",
        "(2) Beginning of attachment of spindle fibres to kinetochore",
        "(3) Complete disintegration of nuclear envelope",
        "(4) Initiation of assembly of mitotic spindle."
      ],
      answer: "(3) Complete disintegration of nuclear envelope"
    },
    {
      queNum: 20,
      question:
        "Anaphase II differs from anaphase I in :",
      options: [
        "(1) Involvement of splitting of centromere",
        "(2) Separating the homologous chromosomes",
        "(3) Resulting the homologous chromosomes",
        "(4) It occurrence in diploid cells"
      ],
      answer: "(1) Involvement of splitting of centromere"
    },
    {
      queNum: 21,
      question:
        "A diploid cell undergoes meiosis and forms total 10 bivalents during zygotene stage. It means.\na. The cell has diploid set of chromosomes\nb. 10 pair of homologous chromosomes are there.\nc. The cell has 20 tetrads.\nd. Total number of univalent in the cell is 10.",
      options: [
        "(1) Only c is correct",
        "(2) Both c and d are incorrect",
        "(3) Only a, b and c are incorrect",
        "(4) Only a and d are incorrect"
      ],
      answer: "(2) Both c and d are incorrect"
    },
    {
      queNum: 22,
      question:
        "A stage of mitosis is shown in the diagram. Select the correct option regarding this stage.",
      options: [
        "(1) Telophase : Chromosomes reach their respective poles.",
        "(2) Anaphase : Chromatids move towards the pole.",
        "(3) Metaphase : Chromosomes align at the equator.",
        "(4) Prophase: Nuclear membrane disappears"
      ],
      answer: "(2) Anaphase : Chromatids move towards the pole.",
      img: "/assets/cell-division-22.png",
    },
    {
      queNum: 23,
      question:
        "Fill in the blanks :\na. Dyad of cell develop after _A_\nb. Tetrad of cell develop after _B_\nc. Crossing over occur after _C_\nd. Homologous chromosome becomes separate after _D_.",
      options: [
        "(1) A-Telophase-II, B-Anaphase-I, C-Prophase-I, D-Metaphase-II.",
        "(2) A-Telophase-I, B-Telophase-II, C-Zygotene, D-Metaphase-I",
        "(3) A-Telophase-I; B-telophase-II, C-Pachytene, D-metaphase-I",
        "(4) A-Telophase-II, B-Telophase-I, C-Pachytene, D-Anaphase-I"
      ],
      answer: "(4) A-Telophase-II, B-Telophase-I, C-Pachytene, D-Anaphase-I"
    },
    {
      queNum: 24,
      question:
        "Study the following option carefully and select the correct option related to following events.\ni. Terminalisation of chiasmata.\nii. Chromosomes are fully condensed.\niii. Nucleolus disappears",
      options: [
        "(1) Leptotene",
        "(2) Zygotene",
        "(3) Pachytene",
        "(4) Diakinesis"
      ],
      answer: "(4) Diakinesis"
    },
    {
      queNum: 25,
      question:
        "Select the correct statement with respect to that G1-Phase.",
      options: [
        "(1) Cell stops growing",
        "(2) Macromolecules do not synthesize",
        "(3) Cell is metabolically inactive",
        "(4) DNA does not replicate"
      ],
      answer: "(4) DNA does not replicate"
    },
    {
      queNum: 26,
      question:
        "Nuclear DNA synthesis occurs in the cell cycle:",
      options: [
        "(1) Only during one specific stage",
        "(2) Only during two specific stage",
        "(3) Any stage",
        "(4) None"
      ],
      answer: "(1) Only during one specific stage"
    },
    {
      queNum: 27,
      question:
        "Duration of cell cycle dependent on :",
      options: [
        "(1) Organism to organism",
        "(2) Type of cell",
        "(3) Both (1) and (2)",
        "(4) None"
      ],
      answer: "(3) Both (1) and (2)"
    },
    {
      queNum: 28,
      question:
        "Which of the following is the correct sequence of events of cell cycle.\na. Cells metabolically active.\nb. Duplication of the chromatid.\nc. Synthesis of protein (tubulin)\nd. Chromatid move to opposite poles.",
      options: [
        "(1) a-c-b-d",
        "(2) a-b-c-d",
        "(3) c-b-a-d",
        "(4) d-b-c-a"
      ],
      answer: "(2) a-b-c-d"
    },
    {
      queNum: 29,
      question:
        "Which of the characteristic feature of metaphase?",
      options: [
        "(1) Initiation of condensation of chromosomal material",
        "(2) Chromosome cluster at opposite pole",
        "(3) Spindle fibres attach to kinetochore of chromosomes",
        "(4) Centromeres split"
      ],
      answer: "(3) Spindle fibres attach to kinetochore of chromosomes"
    },
    {
      queNum: 30,
      question:
        "Select the phase from the following where actual cell occurs division.",
      options: [
        "(1) G0",
        "(2) Interphase",
        "(3) G1 phase",
        "(4) M-phase"
      ],
      answer: "(4) M-phase"
    },
    {
      queNum: 31,
      question:
        "If the initial amount DNA is denoted by 2C. Then the amount of DNA present after S phase",
      options: [
        "(1) 2C",
        "(2) 8C",
        "(3) 4C",
        "(4) 1C"
      ],
      answer: "(3) 4C"
    },
    {
      queNum: 32,
      question:
        "At metaphase of mitosis, each chromosome consists of chromatid ___, centromere ___, kinetochore ___ ?",
      options: [
        "(1) 2,1,2",
        "(2) 2,2,2",
        "(3) 2,1,1",
        "(4) 1,1,2"
      ],
      answer: "(1) 2,1,2"
    },
    {
      queNum: 33,
      question:
        "The mitotic spindle is composed of :",
      options: [
        "(1) Chromatin",
        "(2) Microtubules",
        "(3) Micro filament",
        "(4) All of these"
      ],
      answer: "(2) Microtubules"
    },
    {
      queNum: 34,
      question:
        "Arrange the given diagram sequentially according to the stages of cell division.",
      options: [
        "(1) ABCD",
        "(2) CDAB",
        "(3) DACB",
        "(4) CABD"
      ],
      answer: "(4) CABD",
      img: "/assets/cell-division-34.png",
    },
    {
      queNum: 35,
      question:
        "Crossing over does not involve",
      options: [
        "(1) Exchange of genetic material",
        "(2) Exchange of DNA segments of sister chromatids",
        "(3) Activity of recombinase enzyme",
        "(4) Formation of recombination nodule"
      ],
      answer: "(2) Exchange of DNA segments of sister chromatids"
    },
    {
      queNum: 36,
      question:
        "Assertion : Crossing over takes place during pachytene stage.\nReason : It is process of interchange of chromatid between non-sister chromatid of homologous chromosomes.",
      options: [
        "(1) Both assertion and reason are true and the reason is the correct explanation of the assertion.",
        "(2) Both assertion and reason are true but the reason is not the correct explanation of the assertion.",
        "(3) Assertion is true statement but reason is false.",
        "(4) Both assertion and reason are false statements"
      ],
      answer:
        "(1) Both assertion and reason are true and the reason is the correct explanation of the assertion."
    },
    {
      queNum: 37,
      question:
        "What is not true for anaphase?",
      options: [
        "(1) Chromosomes move to opposite poles",
        "(2) Spindle poles move apart",
        "(3) Golgi bodies and E.R. are reformed",
        "(4) Centromeres split and chromatids separate"
      ],
      answer: "(3) Golgi bodies and E.R. are reformed"
    },
    {
      queNum: 38,
      question:
        "How many cells and meiosis division are require to produce 1000 pollen grains?",
      options: [
        "(1) 500, 250",
        "(2) 250, 250",
        "(3) 250, 250",
        "(4) 250, 150"
      ],
      answer: "(3) 250, 250"
    },
    {
      queNum: 39,
      question:
        "Which among the following cells are being constantly replaced?",
      options: [
        "(1) Upper layer of epidermis",
        "(2) Lower layer of epidermis",
        "(3) Cells of lining of gut",
        "(4) Both (1) and (3)"
      ],
      answer: "(4) Both (1) and (3)"
    },
    {
      queNum: 40,
      question:
        "Most of the organelle duplication occurs during",
      options: [
        "(1) G1-phase",
        "(2) S-phase",
        "(3) G2-phase",
        "(4) M-phase"
      ],
      answer: "(1) G1-phase"
    }
  ];
  
  export default QUESTIONS