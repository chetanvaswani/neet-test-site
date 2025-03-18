const QUESTIONS = [
    {
      queNum: 1,
      question:
        "Which gas formed after the temperature came down of the universe?",
      options: [
        "(1) Hydrogen",
        "(2) Helium",
        "(3) Oxygen",
        "(4) (1) and (2) both"
      ],
      answer: "(4) (1) and (2) both"
    },
    {
      queNum: 2,
      question: "Life appeared",
      options: [
        "(1) 500 million years after the formation of Earth",
        "(2) 4 BYA",
        "(3) Both (1) and (2)",
        "(4) 4.5 BYA"
      ],
      answer: "(4) 4.5 BYA"
    },
    {
      queNum: 3,
      question:
        "In __x__, __y__, and __z__, scientists created a simulation of early Earth conditions in a laboratory. Identify x, y and z.",
      options: [
        "(1) x – 1963; y – Oparin; z – American",
        "(2) x – 1953; y – S.L. Miller; z – American",
        "(3) x – 1973; y – Halden; z – England",
        "(4) x – 1963; y – S.L. Milla; z – American"
      ],
      answer: "(2) x – 1953; y – S.L. Miller; z – American",
    },
    {
      queNum: 4,
      question:
        "Read the following statements and select the correct option:\n(a) A single huge explosion in the past is known as the Big Bang.\n(b) The universe expanded and hence, the temperature came down.\n(c) Earth was supposed to have been formed about 20 BYA.",
      options: [
        "(1) a – False, b – True, c – True",
        "(2) a – True, b – True, c – False",
        "(3) a – True, b – True, c – True",
        "(4) a – False, b – False, c – False"
      ],
      answer: "(2) a – True, b – True, c – False"
    },
    {
      queNum: 5,
      question:
        "Marsupials evolved from ancestral stock, but all within the Australian continent. This represents:",
      options: [
        "(1) Adaptive radiation like in Darwin’s Finches",
        "(2) Adaptive radiation unlike in Darwin’s Finches",
        "(3) Convergent evolution like in Darwin’s Finches",
        "(4) Convergent evolution unlike in Darwin’s Finches"
      ],
      answer: "(1) Adaptive radiation like in Darwin’s Finches"
    },
    {
      queNum: 6,
      question:
        "Flying squirrel and flying phalanges show ____",
      options: [
        "(1) Divergent evolution",
        "(2) Convergent evolution",
        "(3) Adaptive radiation",
        "(4) More than one option is correct"
      ],
      answer: "(2) Convergent evolution"
    },
    {
      queNum: 7,
      question: "Choose the incorrect statement.",
      options: [
        "(1) Fitness of individuals, according to Charles Darwin, means reproductive fitness",
        "(2) Homology in vertebrate brains indicates their common ancestry",
        "(3) The idea of ‘survival of the fittest’ by Alfred Wallace was based on his studies on Galapagos Islands",
        "(4) All options are correct"
      ],
      answer: "(4) All options are correct"
    },
    {
      queNum: 8,
      question:
        "Process of evolution of __A__ species in a given __B__ area __C__ from a point literally radiating to other areas of habitat is called __D__.",
      options: [
        "(1) Same, Geographical, Starting, Adaptive radiation",
        "(2) Same, Geographical, Ending, Adaptive radiation",
        "(3) Different, Geographical, Starting, Adaptive radiation",
        "(4) Different, Biogeographical, Ending, Adaptive radiation"
      ],
      answer: "(1) Same, Geographical, Starting, Adaptive radiation"
    },
    {
      queNum: 9,
      question:
        "When __A__ adaptive radiation appeared to have occurred in an isolated geographical area, one can call this __B__.",
      options: [
        "(1) A – Only one, B – Divergent evolution",
        "(2) A – Only one, B – Convergent evolution",
        "(3) A – More than one, B – Convergent evolution",
        "(4) A – More than one, B – Divergent evolution"
      ],
      answer: "(4) A – More than one, B – Divergent evolution"
    },
    {
      queNum: 10,
      question:
        "Statement I: During a voyage, Darwin used a ship called H.M.S. Beagle.\nStatement II: The fitness, according to Darwin, refers ultimately and only to reproductive fitness.",
      options: [
        "(1) Both statements are correct",
        "(2) Statement I is correct and II is incorrect",
        "(3) Statement I is incorrect and II is correct",
        "(4) Both statements are incorrect"
      ],
      answer: "(1) Both statements are correct"
    },
    {
      queNum: 11,
      question:
        "Choose the true (T) and false (F) statement:\n(A) All the existing life forms share similarities and share common ancestors.\n(B) Geological history of Earth closely correlates with the biological history of Earth.\n(C) A common permissible conclusion is that Earth is very old, not thousands of years as was thought earlier but billions of years.",
      options: [
        "(1) A – T, B – T, C – T",
        "(2) A – T, B – T, C – F",
        "(3) A – F, B – T, C – T",
        "(4) A – F, B – F, C – T"
      ],
      answer: "(1) A – T, B – T, C – T"
    },
    {
      queNum: 12,
      question:
        "Two key concepts of Darwin's theory are:",
      options: [
        "(1) Branching descent",
        "(2) Natural selection",
        "(3) (1) and (2) Both",
        "(4) None"
      ],
      answer: "(3) (1) and (2) Both"
    },
    {
      queNum: 13,
      question:
        "The essence of Darwinian theory about evolution is:",
      options: [
        "(1) Natural selection",
        "(2) Survival of the fittest",
        "(3) Overproduction",
        "(4) None of these"
      ],
      answer: "(1) Natural selection"
    },
    {
      queNum: 14,
      question:
        "Statement I: Louis Pasteur demonstrated that life comes only from pre‑existing life.\nStatement II: Oparin of England and Haldane of Russia proposed that the first form of life could have come from pre‑existing non‑living organic molecules.",
      options: [
        "(1) Both statements are correct",
        "(2) Statement I is correct and II is incorrect",
        "(3) Statement I is incorrect and II is correct",
        "(4) Both statements are incorrect"
      ],
      answer: "(1) Both statements are correct"
    },
    {
      queNum: 15,
      question:
        "Statement I: Homology is based on divergent evolution\nStatement II: Analogy is based on convergent evolution",
      options: [
        "(1) Both statements are correct",
        "(2) Statement I is correct and II is incorrect",
        "(3) Statement I is incorrect and II is correct",
        "(4) Both statements are incorrect"
      ],
      answer: "(1) Both statements are correct"
    },
    {
      queNum: 16,
      question:
        "Statement I: Thorn and tendrils of Bougainvillea and Cucurbita represent analogy.\nStatement II: Flippers of dolphins and penguins represent homology.",
      options: [
        "(1) Both statements are correct",
        "(2) Statement I is correct and II is incorrect",
        "(3) Statement I is incorrect and II is correct",
        "(4) Both statements are incorrect"
      ],
      answer: "(1) Both statements are correct"
    },
    {
      queNum: 17,
      question:
        "Statement I: Darwinian variations are random and directionless.\nStatement II: Mutations are small and directional.",
      options: [
        "(1) Both statements are correct",
        "(2) Statement I is correct and II is incorrect",
        "(3) Statement I is incorrect and II is correct",
        "(4) Both statements are incorrect"
      ],
      answer: "(2) Statement I is correct and II is incorrect"
    },
    {
      queNum: 18,
      question:
        "The first living organisms on Earth were:",
      options: [
        "(1) Chemoautotrophs, anaerobic",
        "(2) Chemoheterotrophs, aerobic",
        "(3) Photoautotrophs, aerobic",
        "(4) Chemoheterotrophs, anaerobic"
      ],
      answer: "(4) Chemoheterotrophs, anaerobic"
    },
    {
      queNum: 19,
      question:
        "Assertion: The diversity was always the same since creation and will be the same in future also.\nReason: All living organisms that we see today are created as such.",
      options: [
        "(1) Assertion is correct, reason is correct; reason is a correct explanation of assertion",
        "(2) Assertion is correct, reason is correct; reason is not a correct explanation for assertion",
        "(3) Assertion is correct, reason is incorrect",
        "(4) Assertion and reason both are incorrect"
      ],
      answer: "(3) Assertion is correct, reason is incorrect"
    },
    {
      queNum: 20,
      question:
        "Assertion: First form of life could have come from organic molecules.\nReason: Constituents by chemical evolution.",
      options: [
        "(1) Assertion is correct, reason is correct; reason is a correct explanation of assertion",
        "(2) Assertion is correct, reason is correct; reason is not a correct explanation for assertion",
        "(3) Assertion is correct, reason is incorrect",
        "(4) Assertion and reason both are incorrect"
      ],
      answer: "(1) Assertion is correct, reason is correct; reason is a correct explanation of assertion"
    },
    {
      queNum: 21,
      question:
        "Assertion: Those who are better fit in an environment leave more progeny than others.\nReason: More reproducing organisms will survive more and hence are selected by nature.",
      options: [
        "(1) Assertion is correct, reason is correct; reason is a correct explanation of assertion",
        "(2) Assertion is correct, reason is correct; reason is not a correct explanation for assertion",
        "(3) Assertion is correct, reason is incorrect",
        "(4) Assertion and reason both are incorrect"
      ],
      answer: "(1) Assertion is correct, reason is correct; reason is a correct explanation of assertion"
    },
    {
      queNum: 22,
      question: "Simple step large mutation is _____",
      options: [
        "(1) Crossing over",
        "(2) Mutation",
        "(3) Variation",
        "(4) Saltation"
      ],
      answer: "(4) Saltation"
    },
    {
      queNum: 23,
      question:
        "Match the column:\n\nColumn I           Column II\n(a) Invertebrate   (i) 350 mya\n(b) Jawless fishes (ii) 1938\n(c) Sea weeds      (iii) 500 mya\n(d) Coelacanth    (iv) 320 mya",
      options: [
        "(1) a-iii, b-i, c-iv, d-ii",
        "(2) a-iii, b-i, c-ii, d-iv",
        "(3) a-iii, b-iv, c-i, d-ii",
        "(4) a-i, b-iii, c-iv, d-ii"
      ],
      answer: "(1) a-iii, b-i, c-iv, d-ii"
    },
    {
      queNum: 24,
      question:
        "Fossil remains of Archaeopteryx indicate that:",
      options: [
        "(1) It was a flying reptile from Triassic",
        "(2) It was a flying reptile from Permian",
        "(3) Reptiles gave rise to amphibia",
        "(4) Reptiles gave rise to Birds"
      ],
      answer: "(4) Reptiles gave rise to Birds"
    },
    {
      queNum: 25,
      question:
        "Which of the following are in favour of Lamarckism?",
      options: [
        "(1) Long neck and forelimbs of girdle",
        "(2) Toes and webbed feet of aquatic birds",
        "(3) Limbless snakes",
        "(4) All of the above"
      ],
      answer: "(4) All of the above"
    },
    {
      queNum: 26,
      question:
        "Which of the following is the most patent force of organic evolution?",
      options: [
        "(1) Intraspecific struggle",
        "(2) Environmental struggle",
        "(3) Interspecific struggle",
        "(4) Struggle for existence"
      ],
      answer: "(4) Struggle for existence"
    },
    {
      queNum: 27,
      question:
        "Unit of natural selection is __i__ and unit of evolution is __ii__.",
      options: [
        "(1) i-Population; ii-Individual",
        "(2) i-Individual; ii-Population",
        "(3) i-Better fit; ii-Mutation",
        "(4) i-Mutation; ii-Genes"
      ],
      answer: "(2) i-Individual; ii-Population"
    },
    {
      queNum: 28,
      question:
        "Given below are two statements:\nStatement-I: Milky Way is a galaxy in the universe.\nStatement-II: Our Earth is part of the Milky Way galaxy.",
      options: [
        "(1) Both Statement-I and II are incorrect.",
        "(2) Statement-I is correct but Statement-II is incorrect.",
        "(3) Statement-I is incorrect and Statement-II is correct.",
        "(4) Both Statement-I and Statement-II are correct."
      ],
      answer: "(4) Both Statement-I and Statement-II are correct."
    },
    {
      queNum: 29,
      question:
        "Given below are two statements:\nAssertion (A): Theory of chemical evolution proposed that the first form of life could have come from pre‑existing non‑living organic molecules.\nReason (R): The primitive Earth conditions led to the production of organic molecules.",
      options: [
        "(1) Both (A) and (R) are correct but (R) is not the correct explanation of (A)",
        "(2) (A) is correct but (R) is not correct",
        "(3) (A) is not correct but (R) is correct",
        "(4) Both (A) and (R) are correct and (R) is the correct explanation of (A)"
      ],
      answer: "(1) Both (A) and (R) are correct but (R) is not the correct explanation of (A)"
    },
    {
      queNum: 30,
      question:
        "Given below are two statements:\nAssertion (A): The primitive atmosphere of Earth was reducing i.e. without free oxygen.\nReason (R): In the primitive atmosphere, free oxygen was involved in forming ozone about 4.5 BYA.",
      options: [
        "(1) Both (A) and (R) are correct but (R) is not the correct explanation of (A)",
        "(2) (A) is correct but (R) is not correct",
        "(3) (A) is not correct but (R) is correct",
        "(4) Both (A) and (R) are correct and (R) is the correct explanation of (A)"
      ],
      answer: "(1) Both (A) and (R) are correct but (R) is not the correct explanation of (A)"
    },
  ];
  
  export default QUESTIONS;
  