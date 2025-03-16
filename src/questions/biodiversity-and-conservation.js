const QUESTIONS = [
    // --- PDF 1 (Questions 1–15) ---
    {
      queNum: 1,
      question:
        "Maximum biodiversity is found in:\n" +
        "A. Mangroves\n" +
        "B. Deserts\n" +
        "C. Alpine meadows\n" +
        "D. Coral reefs",
      options: [
        "(1) Mangroves",
        "(2) Deserts",
        "(3) Alpine meadows",
        "(4) Coral reefs",
      ],
      answer: "(4) Coral reefs",
    },
    {
      queNum: 2,
      question:
        "Given below are two statements:\n" +
        "Statement-I: In general species diversity decreases as we move away from the equator toward the poles.\n" +
        "Statement-II: A stable community must be resistant to invasion by alien species.\n" +
        "Choose the correct answer:\n" +
        "(1) Both statement-I and II are incorrect\n" +
        "(2) Statement-I is correct but statement-II is incorrect\n" +
        "(3) Statement-I is incorrect but statement-II is correct\n" +
        "(4) Both statement-I and II are correct",
      options: [
        "(1) Both incorrect",
        "(2) I correct, II incorrect",
        "(3) I incorrect, II correct",
        "(4) Both correct",
      ],
      answer: "(4) Both correct",
    },
    {
      queNum: 3,
      question:
        "How much area does India contribute in total world's land area?\n" +
        "(1) Only 2.4%\n" +
        "(2) Only 8.1%\n" +
        "(3) Only 4.2%\n" +
        "(4) Only 1.8%",
      options: [
        "(1) Only 2.4%",
        "(2) Only 8.1%",
        "(3) Only 4.2%",
        "(4) Only 1.8%",
      ],
      answer: "(1) Only 2.4%",
    },
    {
      queNum: 4,
      question:
        "Which of the following is the most abundant among the different known species of animals?\n" +
        "(1) Vertebrates\n" +
        "(2) Invertebrates\n" +
        "(3) Molluscs\n" +
        "(4) Insects",
      options: [
        "(1) Vertebrates",
        "(2) Invertebrates",
        "(3) Molluscs",
        "(4) Insects",
      ],
      answer: "(2) Invertebrates",
    },
    {
      queNum: 5,
      question:
        "Select the correct statements:\n" +
        "(a) The species diversity shown by the medicinal plant Rauwolfia vomitoria growing in different Himalayan ranges might be in terms of the potency and concentration of the active chemical (reserpine) that the plant produces.\n" +
        "(b) The Western Ghats have a greater amphibian species diversity than the Eastern Ghats.\n" +
        "(c) India has more than 2,000 genetically different varieties of mango.\n" +
        "(1) (b) and (c)\n" +
        "(2) (a) and (b)\n" +
        "(3) (b) only\n" +
        "(4) (c) only",
      options: [
        "(1) (b) and (c)",
        "(2) (a) and (b)",
        "(3) (b) only",
        "(4) (c) only",
      ],
      answer: "(3) (b) only",
    },
    {
      queNum: 6,
      question:
        "India has only _________ of the world’s land area. Its share of the global species diversity is an impressive _________.\n" +
        "(1) 2.4, 8.1\n" +
        "(2) 8.1, 2.4\n" +
        "(3) 4.1, 8.2\n" +
        "(4) 8.4, 2.1",
      options: [
        "(1) 2.4, 8.1",
        "(2) 8.1, 2.4",
        "(3) 4.1, 8.2",
        "(4) 8.4, 2.1",
      ],
      answer: "(1) 2.4, 8.1",
    },
    {
      queNum: 7,
      question:
        "Above given pie chart is showing number of vertebrate species. In the pie chart, S represents species of:\n" +
        "(1) Reptiles\n" +
        "(2) Amphibians\n" +
        "(3) Birds\n" +
        "(4) Fishes",
      options: [
        "(1) Reptiles",
        "(2) Amphibians",
        "(3) Birds",
        "(4) Fishes",
      ],
      answer: "(1) Reptiles",
      img: "./../public/assets/1.png"
    },
    {
      queNum: 8,
      question:
        "Robert May placed the global species diversity at about:\n" +
        "(1) 7 Billion\n" +
        "(2) 5.5 Million\n" +
        "(3) 10 Million\n" +
        "(4) 7 Million",
      options: [
        "(1) 7 Billion",
        "(2) 5.5 Million",
        "(3) 10 Million",
        "(4) 7 Million",
      ],
      answer: "(4) 7 Million",
    },
    {
      queNum: 9,
      question:
        "Statement I: Among animals, insects are the most species-rich taxonomic group.\n" +
        "Statement II: Out of every 100 animals on the planet, 7 are insects.\n" +
        "Choose the most appropriate answer:\n" +
        "(1) Both Statement I and II are incorrect\n" +
        "(2) Statement I is correct but Statement II is incorrect\n" +
        "(3) Statement I is incorrect but Statement II is correct\n" +
        "(4) Both Statement I and II are correct",
      options: [
        "(1) Both incorrect",
        "(2) I correct, II incorrect",
        "(3) I incorrect, II correct",
        "(4) Both correct",
      ],
      answer: "(2) I correct, II incorrect",
    },
    {
      queNum: 10,
      question:
        "Select the incorrect statement:\n" +
        "(1) For many taxonomic groups, species inventories are more complete in temperate regions than tropical regions\n" +
        "(2) Robert May places the global species diversity at about 7 million\n" +
        "(3) The number of fungi species in the world is more than the combined total of the species of fishes, amphibians, reptiles and mammals\n" +
        "(4) More than 70 percent of all the species recorded are plants as they include algae to angiosperms",
      options: [
        "(1) Statement 1",
        "(2) Statement 2",
        "(3) Statement 3",
        "(4) Statement 4",
      ],
      answer: "(4) Statement 4",
    },
    {
      queNum: 11,
      question:
        "For the given graph, identify X, Y and Z:\n" +
        "(1) X = Area, Y = Slope of curve, Z = Species richness\n" +
        "(2) X = Area, Y = Species richness, Z = Intercept\n" +
        "(3) X = Species richness, Y = Slope of curve, Z = Area\n" +
        "(4) X = Species richness, Y = Area, Z = Slope of curve",
      options: [
        "(1) X = Area, Y = Slope, Z = Richness",
        "(2) X = Area, Y = Richness, Z = Intercept",
        "(3) X = Richness, Y = Slope, Z = Area",
        "(4) X = Richness, Y = Area, Z = Slope",
      ],
      answer: "(4) X = Richness, Y = Area, Z = Slope",
      img: "../../public/assets/2.png"
    },
    {
      queNum: 12,
      question:
        "Assertion: Biologists are not sure about how many prokaryotic species are present globally.\n" +
        "Reason: Conventional taxonomic methods are not suitable for identification of prokaryotic species.\n" +
        "(1) Both Assertion & Reason are True & the Reason is a correct explanation of the Assertion.\n" +
        "(2) Both Assertion & Reason are True but the Reason is not a correct explanation of the Assertion.\n" +
        "(3) Assertion is True but the Reason is False.\n" +
        "(4) Both Assertion & Reason are False.",
      options: [
        "(1) Both True, Reason correct",
        "(2) Both True, Reason incorrect",
        "(3) Assertion True, Reason False",
        "(4) Both False",
      ],
      answer: "(1) Both True, Reason correct",
    },
    {
      queNum: 13,
      question:
        "The term biodiversity is popularised by:\n" +
        "(1) Odum\n" +
        "(2) Paul Ehrlich\n" +
        "(3) Edward Wilson\n" +
        "(4) Tilman",
      options: [
        "(1) Odum",
        "(2) Paul Ehrlich",
        "(3) Edward Wilson",
        "(4) Tilman",
      ],
      answer: "(3) Edward Wilson",
    },
    {
      queNum: 14,
      question:
        "Genetic variations affect the production of the drug reserpine in the medicinal plant Rauwolfia vomitoria growing in different Himalayan ranges. What kind of diversity does it indicate?\n" +
        "(1) Species diversity\n" +
        "(2) Genetic diversity\n" +
        "(3) Ecological diversity\n" +
        "(4) None of these",
      options: [
        "(1) Species diversity",
        "(2) Genetic diversity",
        "(3) Ecological diversity",
        "(4) None of these",
      ],
      answer: "(2) Genetic diversity",
    },
    {
      queNum: 15,
      question:
        "Western Ghats have a greater number of amphibian species than the Eastern Ghats. What kind of diversity does it represent?\n" +
        "(1) Species diversity\n" +
        "(2) Genetic diversity\n" +
        "(3) Ecological diversity\n" +
        "(4) None of these",
      options: [
        "(1) Species diversity",
        "(2) Genetic diversity",
        "(3) Ecological diversity",
        "(4) None of these",
      ],
      answer: "(1) Species diversity",
    },
  
    // --- PDF 2 (Questions 1–19, renumbered as overall Q16–Q34) ---
    {
      queNum: 16,
      question:
        "In which of this approach are the threatened animals and plants taken out from their natural habitat and placed in a special setting where they can be protected and given special care?\n" +
        "(1) In situ conservation: National Parks\n" +
        "(2) Ex situ conservation: Sanctuaries\n" +
        "(3) Offsite conservation: Zoological parks\n" +
        "(4) Onsite conservation: Botanical gardens",
      options: [
        "(1) In situ conservation: National Parks",
        "(2) Ex situ conservation: Sanctuaries",
        "(3) Offsite conservation: Zoological parks",
        "(4) Onsite conservation: Botanical gardens",
      ],
      answer: "(3) Offsite conservation: Zoological parks",
    },
    {
      queNum: 17,
      question:
        "Jhum cultivation (slash and burn agriculture) is found in which part of India?\n" +
        "(1) North-eastern state\n" +
        "(2) Western state\n" +
        "(3) Southern state\n" +
        "(4) Desert state",
      options: [
        "(1) North-eastern state",
        "(2) Western state",
        "(3) Southern state",
        "(4) Desert state",
      ],
      answer: "(1) North-eastern state",
    },
    {
      queNum: 18,
      question:
        "We should conserve our biodiversity for which of the following reasons?\n" +
        "a) Economic benefits\n" +
        "b) Ecosystem services\n" +
        "c) Some ethical reasons\n" +
        "Choose the correct one:\n" +
        "(1) Only a\n" +
        "(2) Only a & b\n" +
        "(3) Only b\n" +
        "(4) All a, b & c",
      options: [
        "(1) Only a",
        "(2) Only a & b",
        "(3) Only b",
        "(4) All a, b & c",
      ],
      answer: "(4) All a, b & c",
    },
    {
      queNum: 19,
      question:
        "How many of the following are broadly utilitarian reasons for conserving biodiversity?\n" +
        "(a) Firewood\n" +
        "(b) Fibres\n" +
        "(c) Pollination\n" +
        "(d) Product of medicinal importance\n" +
        "(1) One\n" +
        "(2) Two\n" +
        "(3) Three\n" +
        "(4) Four",
      options: [
        "(1) One",
        "(2) Two",
        "(3) Three",
        "(4) Four",
      ],
      answer: "(1) One",
    },
    {
      queNum: 20,
      question:
        "Which cause of extinction badly affected ‘Lungs of Planet’?\n" +
        "(1) Habitat loss and fragmentation\n" +
        "(2) Over-exploitation\n" +
        "(3) Alien species invasion\n" +
        "(4) Co-extinction",
      options: [
        "(1) Habitat loss and fragmentation",
        "(2) Over-exploitation",
        "(3) Alien species invasion",
        "(4) Co-extinction",
      ],
      answer: "(1) Habitat loss and fragmentation",
    },
    {
      queNum: 21,
      question:
        "Exploring molecular genetic and species level diversity for products of economic importance is called:-\n" +
        "(1) Biodiversity\n" +
        "(2) Bioprospecting\n" +
        "(3) Biopiracy\n" +
        "(4) Bioremediation",
      options: [
        "(1) Biodiversity",
        "(2) Bioprospecting",
        "(3) Biopiracy",
        "(4) Bioremediation",
      ],
      answer: "(2) Bioprospecting",
    },
    {
      queNum: 22,
      question:
        "Which of the following is correct for ecosystem service pollination:\n" +
        "(1) Narrow utilitarian\n" +
        "(2) Ethical\n" +
        "(3) Broad utilitarian\n" +
        "(4) None",
      options: [
        "(1) Narrow utilitarian",
        "(2) Ethical",
        "(3) Broad utilitarian",
        "(4) None",
      ],
      answer: "(3) Broad utilitarian",
    },
    {
      queNum: 23,
      question:
        "Find the correct option with respect to deforestation:\n" +
        "(1) Decrease a major greenhouse gas\n" +
        "(2) Promote better hydrological cycle\n" +
        "(3) Promote biodiversity conservation\n" +
        "(4) Loss of biodiversity",
      options: [
        "(1) Decrease a major greenhouse gas",
        "(2) Promote better hydrological cycle",
        "(3) Promote biodiversity conservation",
        "(4) Loss of biodiversity",
      ],
      answer: "(4) Loss of biodiversity",
    },
    {
      queNum: 24,
      question:
        "Assertion: Introduction of alien species is responsible for extinction of indigenous species.\n" +
        "Reason: Alien species have no natural predator, so they cause uncontrolled predation and do not show prudent nature.\n" +
        "Choose the correct answer:\n" +
        "(1) Both Assertion & Reason are true and the reason is a correct explanation\n" +
        "(2) Both Assertion & Reason are true but the reason is not a correct explanation\n" +
        "(3) Assertion is true but the reason is false\n" +
        "(4) Both are false",
      options: [
        "(1) Both true, reason correct",
        "(2) Both true, reason incorrect",
        "(3) Assertion true, reason false",
        "(4) Both false",
      ],
      answer: "(1) Both true, reason correct",
    },
    {
      queNum: 25,
      question:
        "The main cause for the extinction of more than 200 species of cichlid fish in Lake Victoria in East Africa was:-\n" +
        "(1) Over-exploitation\n" +
        "(2) Co-extinction\n" +
        "(3) Alien-species invasion\n" +
        "(4) Habitat fragmentation",
      options: [
        "(1) Over-exploitation",
        "(2) Co-extinction",
        "(3) Alien-species invasion",
        "(4) Habitat fragmentation",
      ],
      answer: "(3) Alien-species invasion",
    },
    {
      queNum: 26,
      question:
        "How many of all amphibian species in the world are facing the threat of extinction?\n" +
        "(1) 32%\n" +
        "(2) 23%\n" +
        "(3) 21%\n" +
        "(4) 12%",
      options: [
        "(1) 32%",
        "(2) 23%",
        "(3) 21%",
        "(4) 12%",
      ],
      answer: "(1) 32%",
    },
    {
      queNum: 27,
      question:
        "Which is not in the group of hotspots in the world?\n" +
        "(1) Western Ghats and Sri Lanka\n" +
        "(2) Indo-Burma\n" +
        "(3) Himalaya\n" +
        "(4) Indo-Pakistan",
      options: [
        "(1) Western Ghats and Sri Lanka",
        "(2) Indo-Burma",
        "(3) Himalaya",
        "(4) Indo-Pakistan",
      ],
      answer: "(4) Indo-Pakistan",
    },
    {
      queNum: 28,
      question:
        "All the following are key criteria for determining a hotspot except:\n" +
        "(1) High number of invader species\n" +
        "(2) High level of species richness\n" +
        "(3) High degree of endemism\n" +
        "(4) Degree of threat in terms of habitat loss",
      options: [
        "(1) High number of invader species",
        "(2) High level of species richness",
        "(3) High degree of endemism",
        "(4) Degree of threat in terms of habitat loss",
      ],
      answer: "(1) High number of invader species",
    },
    {
      queNum: 29,
      question:
        "Presently, _______% of all gymnosperm species in the world face the threat of extinction.\n" +
        "(1) 32\n" +
        "(2) 23\n" +
        "(3) 12\n" +
        "(4) 81",
      options: [
        "(1) 32",
        "(2) 23",
        "(3) 12",
        "(4) 81",
      ],
      answer: "(2) 23",
    },
    {
      queNum: 30,
      question:
        "Find the false statement:\n" +
        "(A) In the last 20 years alone there is a disappearance of 27 species.\n" +
        "(B) Three species (Bali, Javan and Caspian) of tiger are included in recently extinct animals.\n" +
        "(C) If we apply May's estimate then there are probably more than 1,00,000 plant species in India that are yet to be discovered and described.\n" +
        "(D) There is more solar energy available in temperate regions, which contributes directly to greater diversity.\n" +
        "(1) A only\n" +
        "(2) C, D only\n" +
        "(3) B, D only\n" +
        "(4) A and C only",
      options: [
        "(1) A only",
        "(2) C, D only",
        "(3) B, D only",
        "(4) A and C only",
      ],
      answer: "(3) B, D only",
    },
    {
      queNum: 31,
      question:
        "Match some examples of recent extinctions of animals in Column-A with their locations in Column-B:\n" +
        "Column A: (a) Steller's Sea cow, (b) Thylacine, (c) Bali Tiger, (d) Quagga\n" +
        "Column B: (i) Africa, (ii) Indonesia, (iii) Mauritirs, (iv) Russia, (v) Australia\n" +
        "(1) a(iv), b(v), c(ii), d(i)\n" +
        "(2) a(iv), b(v), c(iii), d(i)\n" +
        "(3) a(iv), b(v), c(i), d(ii)\n" +
        "(4) a(iii), b(iv), c(ii), d(i)",
      options: [
        "(1) a(iv), b(v), c(ii), d(i)",
        "(2) a(iv), b(v), c(iii), d(i)",
        "(3) a(iv), b(v), c(i), d(ii)",
        "(4) a(iii), b(iv), c(ii), d(i)",
      ],
      answer: "(1) a(iv), b(v), c(ii), d(i)",
    },
    {
      queNum: 32,
      question:
        "Find out the Incorrect Match:\n" +
        "(1) Biosphere Reserve –14\n" +
        "(2) Wildlife Sanctuaries–448\n" +
        "(3) Indian Hotspot – 3\n" +
        "(4) National Parks – 85",
      options: [
        "(1) Biosphere Reserve –14",
        "(2) Wildlife Sanctuaries–448",
        "(3) Indian Hotspot – 3",
        "(4) National Parks – 85",
      ],
      answer: "(4) National Parks – 85",
    },
    {
      queNum: 33,
      question:
        "Assertion: India is one of the 12 mega diversity countries of the world.\n" +
        "Reason: India’s share of the global species diversity is an impressive 8.1 percent.\n" +
        "(1) Both Assertion & Reason are True & the Reason is a correct explanation\n" +
        "(2) Both Assertion & Reason are True but the Reason is not a correct explanation\n" +
        "(3) Assertion is True but the Reason is False\n" +
        "(4) Both are False",
      options: [
        "(1) Both true, reason correct",
        "(2) Both true, reason incorrect",
        "(3) Assertion true, reason false",
        "(4) Both false",
      ],
      answer: "(1) Both true, reason correct",
    },
    {
      queNum: 34,
      question:
        "Introduction of alien species into a new area poses a threat to extinction of indigenous species due to:\n" +
        "(1) Their high nutrient requirement\n" +
        "(2) Their symbiotic relationship\n" +
        "(3) Absence of their natural predators\n" +
        "(4) More intraspecific competition",
      options: [
        "(1) Their high nutrient requirement",
        "(2) Their symbiotic relationship",
        "(3) Absence of their natural predators",
        "(4) More intraspecific competition",
      ],
      answer: "(3) Absence of their natural predators",
    },
  ];
  
  export default QUESTIONS;
  