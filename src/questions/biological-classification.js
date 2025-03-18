const QUESTIONS = [
    {
      queNum: 1,
      question:
        "Which of the following option is correct:\n(A) In basidiomycetes class asexual spores are generally not found.\n(B) Yeast are a unicellular fungi.\n(C) Fungi are divided into different classes on the basis of morphology of mycelium and sexual reproduction.\n(D) Branched, aseptate and multinucleate mycelium are found in club fungi.",
      options: [
        "(1) B, C and D are correct",
        "(2) A, C and D are incorrect",
        "(3) A, B and C are correct",
        "(4) A and D are incorrect"
      ],
      answer: "(3) A, B and C are correct"
    },
    {
      queNum: 2,
      question:
        "Which of the following statements is/are correct?\n(i) Mycoplasma has no cell wall\n(ii) Mycoplasma is the smallest living organism.\n(iii) Mycoplasma cannot survive without O₂\n(iv) Mycoplasma are pathogenic in both animals and plants.\n(v) True sexuality is not found in bacteria\n(vi) A sort of sexual reproduction by adopting a primitive type of DNA transfer from one bacterium to the other is found in bacteria.",
      options: [
        "(1) All",
        "(2) Only iii",
        "(3) i, ii, iv, v, vi",
        "(4) i, iii, vi"
      ],
      answer: "(3) i, ii, iv, v, vi"
    },
    {
      queNum: 3,
      question:
        "Examine the figure (A–D) given below and select the right option in which all the four figures A, B, C and D are identified correctly:",
      options: [
        "(1) Nostoc, Euglena, Aspergillus, Spirullina",
        "(2) Nostoc, Euglena, Chlamydomonas, Basidiocarp",
        "(3) Nostoc, Paramoecium, Ascocarp, Chlamydomonas",
        "(4) Nostoc, Diatoms, Mucor, Chara"
      ],
      answer: "(2) Nostoc, Euglena, Chlamydomonas, Basidiocarp",
      img: "/assets/bio-classification-3.png"
    },
    {
      queNum: 4,
      question:
        "Which of the following statement is not true for members of kingdom Monera?",
      options: [
        "(1) All the member of monera are prokaryotic",
        "(2) Some members play an important role in nutrient cycling",
        "(3) They do not have a cellulosic cell wall",
        "(4) They have circular ds-DNA with histone proteins"
      ],
      answer: "(4) They have circular ds-DNA with histone proteins"
    },
    {
      queNum: 5,
      question: "Three domain system is based on:",
      options: [
        "(1) Mode of nutrition",
        "(2) Body organization",
        "(3) Cell type",
        "(4) r-RNA"
      ],
      answer: "(4) r-RNA"
    },
    {
      queNum: 6,
      question:
        "Match the columns:\n\nColumn-I                        Column-II\nA. Rust fungi                   i. Neurospora\nB. Antibiotic source           ii. Puccinia\nC. Edible fungi                iii. Truffles and Morels\nD. Experimental genetics        iv. Penicillium",
      options: [
        "(1) A-i, B-ii, C-iv, D-iii",
        "(2) A-i, B-ii, C-iii, D-iv",
        "(3) A-ii, B-iv, C-iii, D-i",
        "(4) A-iv, B-i, C-ii, D-iii"
      ],
      answer: "(3) A-ii, B-iv, C-iii, D-i"
    },
    {
      queNum: 7,
      question:
        "Which of the following is incorrect about dinoflagellates?",
      options: [
        "(1) Cell wall has stiff cellulose plates",
        "(2) Mostly presence of two flagella",
        "(3) They appear yellow, green, brown, blue or red",
        "(4) Both flagella are of equal length"
      ],
      answer: "(4) Both flagella are of equal length"
    },
    {
      queNum: 8,
      question:
        "Dikaryophase of fungi is clearly observed in:",
      options: [
        "(1) Phycomycetes and ascomycetes",
        "(2) Phycomycetes and basidiomycetes",
        "(3) Phycomycetes, ascomycetes and basidiomycetes",
        "(4) Basidiomycetes and ascomycetes"
      ],
      answer: "(4) Basidiomycetes and ascomycetes"
    },
    {
      queNum: 9,
      question:
        "Which of the following is incorrect about blue-green algae?",
      options: [
        "(1) They may be unicellular, colonial or filamentous.",
        "(2) Their colonies are generally surrounded by a membranous sheath and form tissue.",
        "(3) They often form bloom in polluted water bodies.",
        "(4) Some of the members can fix atmospheric nitrogen."
      ],
      answer: "(2) Their colonies are generally surrounded by a membranous sheath and form tissue."
    },
    {
      queNum: 10,
      question:
        "Statement –1: Lichens are a symbiotic association of algae and fungi.\nStatement –2: In lichens, fungi prepare food for algae and algae provide shelter and absorb mineral nutrients and water for their partner.",
      options: [
        "(1) Statement–1 is true, statement –2 is true; Statement –2 is not the correct explanation of statement –1",
        "(2) Statement–1 is true, statement –2 is true; Statement –2 is the correct explanation of statement –1",
        "(3) Statement–1 is true, statement –2 is false",
        "(4) Statement–1 is false, statement –2 is true"
      ],
      answer: "(3) Statement–1 is true, statement –2 is false"
    },
    {
      queNum: 11,
      question: "Which of the following is not correctly matched?",
      options: [
        "(1) Heterocyst – Nitrogen fixation structure of Blue Green Algae.",
        "(2) Cyanophycean granules = storage bodies of Blue Green Algae.",
        "(3) Mixotrophic = method of nutrition in Euglenoids.",
        "(4) Floridean starch = Stored food of Blue Green Algae."
      ],
      answer: "(4) Floridean starch = Stored food of Blue Green Algae."
    },
    {
      queNum: 12,
      question:
        "According to phylogeny, which of the following scheme is most correct?",
      options: [
        "(1) Monera → Protista → Fungi → Plantae → Animalia",
        "(2) [Option 2]",
        "(3) [Option 3]",
        "(4) [Option 4]"
      ],
      answer: "(2) [Option 2]",
      img: "/assets/bio-classification-12.png"
    },
    {
      queNum: 13,
      question:
        "A virus differs from a viroid as, virus :-",
      options: [
        "(1) Contains a nucleic acid only",
        "(2) Has proteinaceous capsid",
        "(3) Is smaller than viroids",
        "(4) Does not cause diseases in plants"
      ],
      answer: "(2) Has proteinaceous capsid"
    },
    {
      queNum: 14,
      question: "Red tide is because of:",
      options: [
        "(1) Desmids",
        "(2) Gonyaulax",
        "(3) Euglena",
        "(4) Red algae"
      ],
      answer: "(2) Gonyaulax"
    },
    {
      queNum: 15,
      question: "Chrysophytes include:",
      options: [
        "(1) Diatoms and desmids (golden algae)",
        "(2) Dinoflagellates",
        "(3) Euglenoids",
        "(4) Slime moulds"
      ],
      answer: "(1) Diatoms and desmids (golden algae)"
    },
    {
      queNum: 16,
      question:
        "The main difference between gram positive and gram negative bacteria is in the composition of:",
      options: [
        "(1) Cillia",
        "(2) Cell wall",
        "(3) Cell membrane",
        "(4) Cytoplasm"
      ],
      answer: "(2) Cell wall"
    },
    {
      queNum: 17,
      question:
        "Consider the following four statements (A–D) and select the option which includes all the correct ones only.\n(A) Archaebacteria differ from other bacteria in having a different cell wall structure.\n(B) Bacteria as a group show the most extensive metabolic diversity.\n(C) Cyanobacteria have chlorophyll 'b' similar to green plants.\n(D) Mycoplasma cannot survive without oxygen.",
      options: [
        "(1) Statements B, C and D only",
        "(2) Statements A and C only",
        "(3) Statements B and D only",
        "(4) Statements A and B only"
      ],
      answer: "(4) Statements A and B only"
    },
    {
      queNum: 18,
      question: "Symbiotic association of Anabaena occurs with:",
      options: [
        "(1) Pteridium",
        "(2) Pinus",
        "(3) Azolla",
        "(4) Rice"
      ],
      answer: "(3) Azolla"
    },
    {
      queNum: 19,
      question: "Which algae show similarities in pigments with diatoms?",
      options: [
        "(1) Fucus",
        "(2) Spirogyra",
        "(3) Cephaleuros",
        "(4) Batrachospermum"
      ],
      answer: "(1) Fucus"
    },
    {
      queNum: 20,
      question:
        "Which is a group of organisms in which reproduction is synonymous with growth?",
      options: [
        "(1) Amoeba, bacteria and unicellular algae",
        "(2) Algae, fungi and lichen",
        "(3) Lower organisms",
        "(4) Higher multicellular organisms"
      ],
      answer: "(1) Amoeba, bacteria and unicellular algae"
    },
    {
      queNum: 21,
      question:
        "Assertion: All living organisms present, past and future are linked to one another.\nReason: Because all organisms share common genetic material, but to varying degrees.",
      options: [
        "(1) If both the assertion and the reason are true and the reason is a correct explanation of the assertion.",
        "(2) If both the assertion and reason are true but the reason is not a correct explanation of the assertion.",
        "(3) If the assertion is true but the reason is false.",
        "(4) If both the assertion and reason are false."
      ],
      answer: "(1) If both the assertion and the reason are true and the reason is a correct explanation of the assertion."
    },
    {
      queNum: 22,
      question:
        "Select correct statement with respect to monera:",
      options: [
        "(1) All are autotrophic prokaryotes",
        "(2) All are chemoautotrophs",
        "(3) Unicellular, colonial or filamentous organisms",
        "(4) Prokaryotes with 70S ribosome and histonic DNA"
      ],
      answer: "(1) All are autotrophic prokaryotes"
    },
    {
      queNum: 23,
      question:
        "Consider the following statements:\nI. All prokaryotic organisms were grouped together under kingdom Monera.\nII. The unicellular eukaryotic organisms were placed in kingdom Protista.\nIII. Chlorella and Chlamydomonas both have cell wall.\nIV. Paramoecium and Amoeba lack cell walls.\nV. Kingdom Protista has brought together Chlamydomonas, Chlorella with Paramoecium and Amoeba.\nWhich of the statements given above are correct?",
      options: [
        "(1) Only I, II, III and IV",
        "(2) Only II, III, IV and V",
        "(3) Only I, II, III and IV",
        "(4) I, II, III, IV and V"
      ],
      answer: "(3) Only I, II, III and IV"
    },
    {
      queNum: 24,
      question: "Choose the incorrect match of the following:",
      options: [
        "(1) Diatoms – Silicated cell wall",
        "(2) Gonyaulax – Soap box like cell wall",
        "(3) Albugo – Parasite on mustard",
        "(4) Euglenoids – Mixotrophic nutrition"
      ],
      answer: "(2) Gonyaulax – Soap box like cell wall"
    }
  ];
  
  export default QUESTIONS;
  