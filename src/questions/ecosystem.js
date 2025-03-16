const QUESTIONS = [
    // From ecosystem-16-10-2023.pdf (Questions 1–15)
    {
      queNum: 1,
      question: "Man-made ecosystems are:",
      options: [
        "(1) a and d",
        "(2) b and c",
        "(3) Only b",
        "(4) b and d",
      ],
      answer: "(4) b and d",
    },
    {
      queNum: 2,
      question: "Largest ecosystem of the world is:",
      options: [
        "(1) Forests",
        "(2) Grasslands",
        "(3) Great lakes",
        "(4) Oceans",
      ],
      answer: "(4) Oceans",
    },
    {
      queNum: 3,
      question: "Ecosystem is a dynamic system because continuous interaction occurs between biotic and abiotic components and a balance is maintained among different trophic levels. It is called:",
      options: [
        "(1) Ecosystem",
        "(2) Homeostasis",
        "(3) Ecology",
        "(4) Energy flow",
      ],
      answer: "(2) Homeostasis",
    },
    {
      queNum: 4,
      question: "Most animals that live in deep oceanic waters are:",
      options: [
        "(1) Detritivores",
        "(2) Primary consumers",
        "(3) Secondary consumers",
        "(4) Tertiary consumers",
      ],
      answer: "(1) Detritivores",
    },
    {
      queNum: 5,
      question: "Which of the following food chains is the major conduit of energy flow in aquatic and terrestrial ecosystems respectively?",
      options: [
        "(1) GFC, DFC",
        "(2) GFC, PFC",
        "(3) PFC, DFC",
        "(4) DFC, GFC",
      ],
      answer: "(1) GFC, DFC",
    },
    {
      queNum: 6,
      question: "On the basis of ecology, which is not essential for a self-sustaining ecosystem?",
      options: [
        "(1) Producer",
        "(2) Macro-consumers",
        "(3) Micro-consumers",
        "(4) All of the above",
      ],
      answer: "(2) Macro-consumers",
    },
    {
      queNum: 7,
      question: "Which trophic level would have the least amount of available energy?",
      options: [
        "(1) Producers",
        "(2) First trophic level",
        "(3) Second trophic level",
        "(4) Third trophic level",
      ],
      answer: "(4) Third trophic level",
    },
    {
      queNum: 8,
      question: "A plant receives 10^6 J of sunlight energy. The energy reaching the tertiary consumer will be:",
      options: [
        "(1) 1000 J",
        "(2) 100 J",
        "(3) 10 J",
        "(4) 1 J",
      ],
      answer: "(3) 10 J",
    },
    {
      queNum: 9,
      question: "Grass → Deer → Tiger. In this food chain, if the biomass of grass is 1 tonne, the tiger biomass will be:",
      options: [
        "(1) 100 kg",
        "(2) 10 kg",
        "(3) 1 kg",
        "(4) 1000 kg",
      ],
      answer: "(2) 10 kg",
    },
    {
      queNum: 10,
      question: "Which of the following processes helps in nutrient conservation?",
      options: [
        "(1) Mineralisation",
        "(2) Immobilisation",
        "(3) Leaching",
        "(4) Nitrification",
      ],
      answer: "(2) Immobilisation",
    },
    {
      queNum: 11,
      question: "The standing crop is measured as:",
      options: [
        "(1) The amount of nutrients in a particular area",
        "(2) Mass or number of living organisms in a unit area",
        "(3) Amount of photosynthates produced by plants",
        "(4) Available net primary productivity to decomposers",
      ],
      answer: "(2) Mass or number of living organisms in a unit area",
    },
    {
      queNum: 12,
      question: "Which one of the following ecosystem types has the highest annual net primary productivity?",
      options: [
        "(1) Temperate deciduous forest",
        "(2) Tropical rain forest",
        "(3) Tropical deciduous forest",
        "(4) Temperate evergreen forest",
      ],
      answer: "(2) Tropical rain forest",
    },
    {
      queNum: 13,
      question: "Synthesis of organic matter by using solar energy is the process that:",
      options: [
        "(1) Follows first law of thermodynamics",
        "(2) Shows the conversion of heat energy into chemical energy",
        "(3) Traps the energy in the form of photons in the animals",
        "(4) Follows second law of thermodynamics",
      ],
      answer: "(1) Follows first law of thermodynamics",
    },
    {
      queNum: 14,
      question: "In a pond ecosystem:",
      options: [
        "(1) Decomposers are absent",
        "(2) Phytoplanktons, submerged and marginal plants are primary consumers",
        "(3) Free swimmers and bottom-dwelling forms are also present as consumers",
        "(4) Nutrient cycling is not possible",
      ],
      answer: "(3) Free swimmers and bottom-dwelling forms are also present as consumers",
    },
    {
      queNum: 15,
      question: "Vertical distribution of different species occupying different levels is called:",
      options: [
        "(1) Stratification",
        "(2) Productivity",
        "(3) Decomposition",
        "(4) Nutrient cycling",
      ],
      answer: "(1) Stratification",
    },
  
    // From ecosystem-17-10-2023.pdf (Renumbered as Questions 16–35)
    {
      queNum: 16,
      question: "Ecological pyramids show diagrammatic representation of ecological parameters like number, biomass and energy. Which is/are limitation of ecological pyramids?",
      options: [
        "(1) It does not take into account the same species belonging to two or more trophic levels",
        "(2) It does not accommodate a food web",
        "(3) Saprophytes are not given any place in pyramids",
        "(4) All of these",
      ],
      answer: "(4) All of these",
    },
    {
      queNum: 17,
      question: "Read the following statements and select the option which is true for them:\nStatement A: Pyramid of energy is always upright.\nStatement B: The pyramid of biomass in aquatic ecosystem is generally inverted.",
      options: [
        "(1) Only statement A is correct",
        "(2) Only statement B is correct",
        "(3) Both the statements A and B are correct",
        "(4) Both the statements A and B are incorrect",
      ],
      answer: "(3) Both the statements A and B are correct",
    },
    {
      queNum: 18,
      question: "NPP is equal to:",
      options: [
        "(1) GPP + R",
        "(2) GPP – R",
        "(3) GPP × R",
        "(4) GPP ÷ R",
      ],
      answer: "(2) GPP – R",
    },
    {
      queNum: 19,
      question: "Decomposition is one of the important functional aspects of an ecosystem. About which of the following statements is not correct?",
      options: [
        "(1) Warm and moist environment favors decomposition",
        "(2) Nitrogen and sugar components favor decomposition",
        "(3) Low temperature and anaerobiosis favors decomposition",
        "(4) Decomposition is largely an oxygen-requiring process",
      ],
      answer: "(3) Low temperature and anaerobiosis favors decomposition",
    },
    {
      queNum: 20,
      question: "Which one of the following ecosystem types has the highest annual net primary productivity?",
      options: [
        "(1) Temperate deciduous forest",
        "(2) Tropical rain forest",
        "(3) Tropical deciduous forest",
        "(4) Temperate evergreen forest",
      ],
      answer: "(2) Tropical rain forest",
    },
    {
      queNum: 21,
      question: "Net primary productivity belongs to:",
      options: [
        "(1) Producers",
        "(2) Available to carnivores",
        "(3) Consumers",
        "(4) All of these",
      ],
      answer: "(1) Producers",
    },
    {
      queNum: 22,
      question: "Rate of formation of new organic matter at the consumers level is:",
      options: [
        "(1) Primary productivity",
        "(2) Gross primary productivity",
        "(3) Secondary productivity",
        "(4) Net primary productivity",
      ],
      answer: "(3) Secondary productivity",
    },
    {
      queNum: 23,
      question: "Most animals that live in deep oceanic waters are:",
      options: [
        "(1) Detritivores",
        "(2) Primary consumers",
        "(3) Secondary consumers",
        "(4) Tertiary consumers",
      ],
      answer: "(1) Detritivores",
    },
    {
      queNum: 24,
      question: "Secondary producers are:",
      options: [
        "(1) Herbivores",
        "(2) Producers",
        "(3) Carnivores",
        "(4) None of the above",
      ],
      answer: "(1) Herbivores",
    },
    {
      queNum: 25,
      question: "What are correct for decomposers? (a) They convert solar energy into chemical energy, (b) They have first trophic level, (c) They help convert detritus into humus, (d) They are saprophytes.",
      options: [
        "(1) b, c",
        "(2) a, b",
        "(3) c, d",
        "(4) a, d",
      ],
      answer: "(3) c, d",
    },
    {
      queNum: 26,
      question: "Which of the following organisms and trophic levels is mismatched?",
      options: [
        "(1) Algae – producer",
        "(2) Phytoplankton – primary consumer",
        "(3) Fungi – detritivore/decomposer",
        "(4) Frog – secondary consumer",
      ],
      answer: "(2) Phytoplankton – primary consumer",
    },
    {
      queNum: 27,
      question: "Available biomass for herbivores is measured as:",
      options: [
        "(1) Net productivity",
        "(2) Secondary productivity",
        "(3) Net primary productivity",
        "(4) Gross primary productivity",
      ],
      answer: "(2) Secondary productivity",
    },
    {
      queNum: 28,
      question: "Which of the following organisms & trophic level is mismatched?",
      options: [
        "(1) Pathogen – Producer",
        "(2) Fungi – Detritivore",
        "(3) Phytoplankton – Producer",
        "(4) Small fish – consumer",
      ],
      answer: "(1) Pathogen – Producer",
    },
    {
      queNum: 29,
      question: "Find out correct limitations of ecological pyramids:",
      options: [
        "(1) It does not take into account the same species belonging to two or more trophic levels",
        "(2) It does not accommodate a food web",
        "(3) Saprophytes are not given any place",
        "(4) All of these",
      ],
      answer: "(4) All of these",
    },
    {
      queNum: 30,
      question: "The importance of an ecosystem lies in:",
      options: [
        "(1) Flow of energy",
        "(2) Cycling of materials",
        "(3) Both the above",
        "(4) Deforestation",
      ],
      answer: "(3) Both the above",
    },
    {
      queNum: 31,
      question: "Find out the total number of incorrect statements from the following:\n(A) Decomposition is largely an anaerobic process.\n(B) Fragmentation, leaching and catabolism occur simultaneously on detritus.\n(C) Vertical distribution of different species occupying different levels is called stratification.\n(D) Pond is a deep water body.\n(E) The rate of decomposition is controlled by the chemical composition of detritus and climatic factors.",
      options: [
        "(1) 1",
        "(2) 2",
        "(3) 3",
        "(4) 4",
      ],
      answer: "(2) 2",
    },
    {
      queNum: 32,
      question: "Stranding crop is measured in terms of:",
      options: [
        "(1) Biomass/unit area",
        "(2) Number of organisms/unit area",
        "(3) Both (1) or (2)",
        "(4) None of these",
      ],
      answer: "(3) Both (1) or (2)",
    },
    {
      queNum: 33,
      question: "Oceans occupy _________ % of the surface of earth but productivity of oceans is _________ billion tons.",
      options: [
        "(1) 70, 45",
        "(2) 60, 55",
        "(3) 70, 55",
        "(4) 60, 65",
      ],
      answer: "(3) 70, 55",
    },
    {
      queNum: 34,
      question: "Mark the odd one out regarding the trophic level of the organisms:",
      options: [
        "(1) Zooplanktons",
        "(2) Tedpole",
        "(3) Grasshopper",
        "(4) Hydra",
      ],
      answer: "(4) Hydra",
    },
    {
      queNum: 35,
      question: "Which one is included in an ecological pyramid?",
      options: [
        "(1) Food web",
        "(2) Saprotrophs",
        "(3) Food chain",
        "(4) Same species in two or more trophic levels",
      ],
      answer: "(3) Food chain",
    },
  ];
  
  export default QUESTIONS;
  