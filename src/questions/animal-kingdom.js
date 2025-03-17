const QUESTIONS = [
    {
      queNum: 1,
      question: "Find the correct match:",
      options: [
        "(1) Porifera — Cellular level, Acoelomate, Diploblastic",
        "(2) Coelenterata — Tissue level, Acoelomate, Triploblastic",
        "(3) Ctenophora — Organ level, Pseudocoelomate, Diploblastic",
        "(4) Echinodermata — Organ system level, Coelomate, Triploblastic",
      ],
      answer: "(4) Echinodermata — Organ system level, Coelomate, Triploblastic",
    },
    {
      queNum: 2,
      question: "How many statements are correct about coelenterates?\n" +
        "a. Digestion is only intracellular\n" +
        "b. Cnidoblasts are used for anchorage, offence and defence\n" +
        "c. Exhibit two basic forms polyp and medusa\n" +
        "d. Tissue level of organisation\n" +
        "e. They have a central gastro vascular cavity with a single opening, hypostome",
      options: [
        "(1) Only three a, b, c",
        "(2) Only three c, d, e",
        "(3) Only four a, b, c, d",
        "(4) Only four b, c, d, e",
      ],
      answer: "(4) Only four b, c, d, e",
    },
    {
      queNum: 3,
      question: "The following features belong to which phylum?\n" +
        "a. Triploblastic\n" +
        "b. Eucoelomate\n" +
        "c. Metameric segmentation\n" +
        "d. Bilaterally symmetrical\n" +
        "e. Closed circulatory system",
      options: [
        "(1) Aschelminthes",
        "(2) Annelida",
        "(3) Arthropoda",
        "(4) Echinodermata",
      ],
      answer: "(2) Annelida",
    },
    {
      queNum: 4,
      question: "Which of the following is correct about PARAPODIA?",
      options: [
        "(1) Dorsal appendages of Nereis",
        "(2) Circular muscles which help in locomotion",
        "(3) Longitudinal muscles which help in locomotion",
        "(4) Help in swimming",
      ],
      answer: "(4) Help in swimming",
    },
    {
      queNum: 5,
      question: "Select the animals which are:\n" +
        "a. Economically important insects\n" +
        "b. Vectors\n" +
        "c. Gregarious pest\n" +
        "d. Living fossil",
      options: [
        "(1) I",
        "(2) II",
        "(3) III",
        "(4) IV",
      ],
      answer: "(2) II",
    },
    {
      queNum: 6,
      question: "Fill in the blanks for Mollusca:\n" +
        "(A) A soft and spongy layer of skin a __(i)__ over the visceral\n" +
        "(B) A __(ii)__ cavity containing __(iii)__ like gills.\n" +
        "(C) The anterior head region has sensory __(iv)__.",
      options: [
        "(1) mantle, mantle, comb, papilla",
        "(2) mantle, mesoglea, feather, papilla",
        "(3) mantle, mantle, feather, tentacles",
        "(4) mantle, mantle, comb, tentacles",
      ],
      answer: "(3) mantle, mantle, feather, tentacles",
    },
    {
      queNum: 7,
      question: "Which one is not a cartilaginous fish?",
      options: [
        "(1) Carcharodon (great white shark), Trygon (sting ray)",
        "(2) Exocoetus (Flying fish), Catla (katla), Clarias (Magur)",
        "(3) Scolidon (dog fish)",
        "(4) Pristis (saw fish)",
      ],
      answer: "(2) Exocoetus (Flying fish), Catla (katla), Clarias (Magur)",
    },
    {
      queNum: 8,
      question: "Choose the incorrect statement:",
      options: [
        "(1) Both cartilaginous and bony fishes are dioecious",
        "(2) Cartilaginous fishes show sexual dimorphism",
        "(3) Male cartilaginous fish have claspers",
        "(4) Female cartilaginous fish have claspers",
      ],
      answer: "(4) Female cartilaginous fish have claspers",
    },
    {
      queNum: 9,
      question: "Choose the incorrect statement for class Reptilia:",
      options: [
        "(1) Sexes are separate",
        "(2) Kidneys are excretory organ",
        "(3) Limbs are always present and are two pairs",
        "(4) Possess creeping or crawling mode of locomotion",
      ],
      answer: "(3) Limbs are always present and are two pairs",
    },
    {
      queNum: 10,
      question: "Which of the following statements are correct regarding class Aves?\n" +
        "(i) The forelimbs are modified into wings and the hindlimbs generally have scales and are modified for walking, swimming or clasping the tree branches\n" +
        "(ii) Heart is completely four-chambered\n" +
        "(iii) They are warm-blooded (homoiothermous) animals i.e., they are able to maintain a constant body temperature.",
      options: [
        "(1) Both (i) and (iii)",
        "(2) Both (i) and (ii)",
        "(3) Both (ii) and (iii)",
        "(4) All of these",
      ],
      answer: "(4) All of these",
    },
    {
        queNum: 11,
        question: "Identify A, B, C and D in the given diagram:",
        options: [
          "(1) A – Notochord, B – Gill slits, C – Nerve cord, D – Post anal tail",
          "(2) A – Gill slits, B – Notochord, C – Nerve cord, D – Post anal tail",
          "(3) A – Nerve cord, B – Notochord, C – Gill slits, D – Post anal tail",
          "(4) A – Notochord, B – Nerve cord, C – Gill slits, D – Post anal tail",
        ],
        answer: "(1) A – Notochord, B – Gill slits, C – Nerve cord, D – Post anal tail",
        img: "/assets/animal-11.png",
      },
      {
        queNum: 12,
        question: "Which of the following is not a characteristic of phylum Chordata?",
        options: [
          "(1) Presence of notochord",
          "(2) Dorsally located nerve cord",
          "(3) Pharyngeal gill slits",
          "(4) Open circulatory system",
        ],
        answer: "(4) Open circulatory system",
      },
      {
        queNum: 13,
        question: "Which of the following pairs is correctly matched?",
        options: [
          "(1) Urochordata — Ascidia",
          "(2) Cephalochordata — Petromyzon",
          "(3) Cyclostomata — Amphioxus",
          "(4) Osteichthyes — Trygon",
        ],
        answer: "(1) Urochordata — Ascidia",
      },
      {
        queNum: 14,
        question: "Which of the following statements is incorrect for class Amphibia?",
        options: [
          "(1) The heart is three-chambered",
          "(2) Respiration is by gills, lungs and skin",
          "(3) Fertilization is external",
          "(4) They are ovoviviparous",
        ],
        answer: "(4) They are ovoviviparous",
      },
      {
        queNum: 15,
        question: "Which one of the following pairs of animals is correctly matched with their particular characteristics?",
        options: [
          "(1) Crocodile — Completely four-chambered heart",
          "(2) Parrot — Pneumatic bones",
          "(3) Hagfish — Jawless vertebrate",
          "(4) All of these",
        ],
        answer: "(4) All of these",
      },
  ];
  
  export default QUESTIONS;
  