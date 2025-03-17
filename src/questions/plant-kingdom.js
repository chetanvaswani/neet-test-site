const QUESTIONS = [
    {
      queNum: 1,
      question: "Which of the following algae contains mannitol as reserve food material?",
      options: [
        "(1) Ectocarpus",
        "(2) Gracilaria",
        "(3) Volvox",
        "(4) Ulothrix",
      ],
      answer: "(1) Ectocarpus",
    },
    {
      queNum: 2,
      question: "Phycoerythrin is the major pigment in:",
      options: [
        "(1) Blue green algae",
        "(2) Red algae",
        "(3) Green algae",
        "(4) Brown algae",
      ],
      answer: "(2) Red algae",
    },
    {
      queNum: 3,
      question: "In pteridophytes, reduction division takes place in:",
      options: [
        "(1) Prothallus",
        "(2) Spore mother cell",
        "(3) Gametangia",
        "(4) Zygote",
      ],
      answer: "(2) Spore mother cell",
    },
    {
      queNum: 4,
      question: "Which option is not related with Cycas?",
      options: [
        "(1) Unbranched stem",
        "(2) Symbiosis with cyanobacteria",
        "(3) More than one Archegonia",
        "(4) Monoecious sporophyte",
      ],
      answer: "(4) Monoecious sporophyte",
    },
    {
      queNum: 5,
      question: "In Cycas the microsporangia are born on which side of microsporophyll?",
      options: [
        "(1) Adaxial",
        "(2) Abaxial",
        "(3) Lateral",
        "(4) Terminal",
      ],
      answer: "(2) Abaxial",
    },
    {
      queNum: 6,
      question: "Pteridophytes differ from Mosses in having?",
      options: [
        "(1) Dependent gametophyte",
        "(2) Independent and dominant sporophyte",
        "(3) Independent and dominant gametophyte",
        "(4) Presence of leafy gametophytes",
      ],
      answer: "(2) Independent and dominant sporophyte",
    },
    {
      queNum: 7,
      question: "Water is not required for fertilization in:",
      options: [
        "(1) Mango",
        "(2) Salvinia",
        "(3) Riccia",
        "(4) Chara",
      ],
      answer: "(1) Mango",
    },
    {
      queNum: 8,
      question: "Which one of the following is considered important in the development of seed habit?",
      options: [
        "(1) Free-living gametophyte",
        "(2) Dependent sporophyte",
        "(3) Heterospory",
        "(4) Haplontic life cycle",
      ],
      answer: "(3) Heterospory",
    },
    {
      queNum: 9,
      question: "Floridean starch has structure similar to:",
      options: [
        "(1) Laminarin and cellulose",
        "(2) Starch and cellulose",
        "(3) Amylopectin and glycogen",
        "(4) Mannitol and algin",
      ],
      answer: "(3) Amylopectin and glycogen",
    },
    {
      queNum: 10,
      question: "Identify the diagrams A, B and C:",
      options: [
        "(1) A-Fern, B-Marchantia, C-Pinus",
        "(2) A-Riccia, B-Equisetum, C-Fern",
        "(3) A- Funaria, B-Equisetum , C-Selaginella",
        "(4) A- Selaginella, B- Equisetum, C-Fern",
      ],
      answer: "(4) A- Selaginella, B- Equisetum, C-Fern",
      img: "/assets/plant-10.png",
    },
    {
        queNum: 11,
        question: "Identify the red algae marked as A and B:",
        options: [
          "(1) A = Gracilaria, B = Gelidium",
          "(2) A = Fucus, B = Laminaria",
          "(3) A = Porphyra, B = Polysiphonia",
          "(4) A = Batrachospermum, B = Laminaria",
        ],
        answer: "(3) A = Porphyra, B = Polysiphonia",
        img: "/assets/plant-15.png",
      },
      {
        queNum: 12,
        question: "Match the column-I and column-II:\n\n" +
          "Column-I             Column-II\n" +
          "(A) Brown algae   (i) Cyanophycean granules\n" +
          "(B) Blue green algae (ii) Starch\n" +
          "(C) Green algae   (iii) Floridean starch\n" +
          "(D) Red algae      (iv) Laminarin",
        options: [
          "(1) A-iii, B-i, C-ii, D-iv",
          "(2) A-iii, B-ii, C-i, D-iv",
          "(3) A-iv, B-i, C-ii, D-iii",
          "(4) A-iv, B-ii, C-i, D-iii",
        ],
        answer: "(3) A-iv, B-i, C-ii, D-iii",
      },
      {
        queNum: 13,
        question: "Recognise the figure and find out the correct matching:",
        options: [
          "(1) a-Frond, b-Stipe, c-Holdfast",
          "(2) a-Stipe, b-Frond, c-Holdfast",
          "(3) a-Frond, b-Holdfast, c-Stipe",
          "(4) a-Stipe, b-Holdfast, c-Frond",
        ],
        answer: "(1) a-Frond, b-Stipe, c-Holdfast",
        img: "/assets/plant-13.png",
      },
      {
        queNum: 14,
        question: "Algin and agar-agar are phycocolloids, found in:",
        options: [
          "(1) Red algae and brown algae respectively",
          "(2) Green algae and red algae respectively",
          "(3) Green algae and brown algae respectively",
          "(4) Brown algae and red algae respectively",
        ],
        answer: "(4) Brown algae and red algae respectively",
      },
      {
        queNum: 15,
        question: "Select incorrect statement with respect to the given diagram:",
        options: [
          "(1) Spores germinate to produce creeping, green, branches and frequently filamentous protonema",
          "(2) Sex organs are present at apex of protonema",
          "(3) Sporophyte has foot, seta and capsule",
          "(4) Spore germination gives rise to protonema",
        ],
        answer: "(2) Sex organs are present at apex of protonema",
        img: "/assets/plant-15.png",
      },
      {
        queNum: 16,
        question: "Match the column-I with column-II and give the correct answer:\n\n" +
          "Column-I                  Column-II\n" +
          "P Unicellular rhizoids   A Gymnosperm\n" +
          "Q Monoecious Prothallus B Pteridophytes\n" +
          "R Budding in protonema  C Mosses\n" +
          "S Heterospory and seed habit D Liverworts",
        options: [
          "(1) P-D, Q-C, R-B, S-A",
          "(2) P-A, Q-B, R-C, S-D",
          "(3) P-D, Q-B, R-C, S-A",
          "(4) P-A, Q-B, R-C, S-D",
        ],
        answer: "(3) P-D, Q-B, R-C, S-A",
      },
      {
        queNum: 17,
        question: "Which are correct about both bryophytes and pteridophytes?\n" +
          "(A) Protonema (B) Antheridium (C) Archegonium\n" +
          "(D) Vascular tissue (E) Embryo (F) Pollen grain (G) Heterospory",
        options: [
          "(1) Three",
          "(2) Four",
          "(3) Five",
          "(4) Six",
        ],
        answer: "(1) Three",
      },
  ];
  
  export default QUESTIONS;
  