const QUESTIONS = [
    {
      queNum: 1,
      question:
        "Name the petals A, B and C in vexillary aestivation shown in the below figure :-\n" +
        "A. A - Standards, B - Wing, C - Perianth\n" +
        "B. A - Standards, B - Keel, C - Wing\n" +
        "C. A - Wing, B - Keel, C - Wing\n" +
        "D. A - Standards, B - Wing, C - Keel",
      options: [
        "(1) A - Standards, B - Wing, C - Perianth",
        "(2) A - Standards, B - Keel, C - Wing",
        "(3) A - Wing, B - Keel, C - Wing",
        "(4) A - Standards, B - Wing, C - Keel",
      ],
      answer: "(4) A - Standards, B - Wing, C - Keel",
    },
    {
      queNum: 2,
      question:
        "Epigynous flowers are present in :-\n" +
        "(1) Mustard\n" +
        "(2) Brinjal\n" +
        "(3) China rose\n" +
        "(4) Cucumber",
      options: [
        "(1) Mustard",
        "(2) Brinjal",
        "(3) China rose",
        "(4) Cucumber",
      ],
      answer: "(4) Cucumber",
    },
    {
      queNum: 3,
      question:
        "Polyadelphous stamens are found in :-\n" +
        "(1) Cotton\n" +
        "(2) China rose\n" +
        "(3) Pea\n" +
        "(4) Lemon",
      options: [
        "(1) Cotton",
        "(2) China rose",
        "(3) Pea",
        "(4) Lemon",
      ],
      answer: "(4) Lemon",
    },
    {
      queNum: 4,
      question:
        "Aestivation of petals in family Malvaceae is :-\n" +
        "(1) Valvate\n" +
        "(2) Imbricate\n" +
        "(3) Twisted\n" +
        "(4) Vexillary",
      options: [
        "(1) Valvate",
        "(2) Imbricate",
        "(3) Twisted",
        "(4) Vexillary",
      ],
      answer: "(3) Twisted",
    },
    {
      queNum: 5,
      question:
        "Lady finger and cotton belong to family :-\n" +
        "(1) Malvaceae\n" +
        "(2) Cruciferae\n" +
        "(3) Compositae\n" +
        "(4) Liliaceae",
      options: [
        "(1) Malvaceae",
        "(2) Cruciferae",
        "(3) Compositae",
        "(4) Liliaceae",
      ],
      answer: "(1) Malvaceae",
    },
    {
      queNum: 6,
      question:
        "Spike of spikelets inflorescences commonly occurs in :-\n" +
        "(1) Cruciferae\n" +
        "(2) Papilionatae/Fabaceae\n" +
        "(3) Poaceae/Gramineae\n" +
        "(4) Solanaceae",
      options: [
        "(1) Cruciferae",
        "(2) Papilionatae/Fabaceae",
        "(3) Poaceae/Gramineae",
        "(4) Solanaceae",
      ],
      answer: "(3) Poaceae/Gramineae",
    },
    {
      queNum: 7,
      question:
        "Lycopersicum esculentum (Tomato) belongs to family :-\n" +
        "(1) Solanaceae\n" +
        "(2) Malvaceae\n" +
        "(3) Cruciferae\n" +
        "(4) Cucurbitaceae",
      options: [
        "(1) Solanaceae",
        "(2) Malvaceae",
        "(3) Cruciferae",
        "(4) Cucurbitaceae",
      ],
      answer: "(1) Solanaceae",
    },
    {
      queNum: 8,
      question:
        "Diadelphous condition is common in :-\n" +
        "(1) Malvaceae\n" +
        "(2) Cruciferae\n" +
        "(3) Liliaceae\n" +
        "(4) Fabaceae",
      options: [
        "(1) Malvaceae",
        "(2) Cruciferae",
        "(3) Liliaceae",
        "(4) Fabaceae",
      ],
      answer: "(4) Fabaceae",
    },
    {
      queNum: 9,
      question:
        "Fruit legume is characteristic feature of :-\n" +
        "(1) Solanaceae\n" +
        "(2) Liliaceae\n" +
        "(3) Fabaceae\n" +
        "(4) Malvaceae",
      options: [
        "(1) Solanaceae",
        "(2) Liliaceae",
        "(3) Fabaceae",
        "(4) Malvaceae",
      ],
      answer: "(3) Fabaceae",
    },
    {
      queNum: 10,
      question:
        "The flower of Compositae is :-\n" +
        "(1) Epigynous\n" +
        "(2) Perigynous\n" +
        "(3) Hypogynous\n" +
        "(4) Half perigynous",
      options: [
        "(1) Epigynous",
        "(2) Perigynous",
        "(3) Hypogynous",
        "(4) Half perigynous",
      ],
      answer: "(1) Epigynous",
    },
    {
      queNum: 11,
      question:
        "In which of the following family, perianth and trimerous flowers are found :–\n" +
        "(1) Malvaceae\n" +
        "(2) Crucifereae\n" +
        "(3) Liliaceae\n" +
        "(4) Papilionaceae",
      options: [
        "(1) Malvaceae",
        "(2) Crucifereae",
        "(3) Liliaceae",
        "(4) Papilionaceae",
      ],
      answer: "(3) Liliaceae",
    },
    {
      queNum: 12,
      question:
        "Match the following figures with I, II and III :-\n" +
        "I - Hypogynous flower\n" +
        "II - Perigynous flower\n" +
        "III - Epigynous flower\n" +
        "(1) A - I, B - II, C - III\n" +
        "(2) A - I, B - III, C - II\n" +
        "(3) A - III, B - II, C - I\n" +
        "(4) A - III, B - I, C - II",
      options: [
        "(1) A - I, B - II, C - III",
        "(2) A - I, B - III, C - II",
        "(3) A - III, B - II, C - I",
        "(4) A - III, B - I, C - II",
      ],
      answer: "(1) A - I, B - II, C - III",
    },
    {
      queNum: 13,
      question:
        "In unilocular ovary with a single ovule the placentation is :-\n" +
        "(1) Axile\n" +
        "(2) Marginal\n" +
        "(3) Basal\n" +
        "(4) Free Central",
      options: [
        "(1) Axile",
        "(2) Marginal",
        "(3) Basal",
        "(4) Free Central",
      ],
      answer: "(3) Basal",
    },
    {
      queNum: 14,
      question:
        "The correct floral formula of soyabean is :-\n" +
        "(1) %  K5C1+(2)+2 A(9)+1 G1\n" +
        "(2) %   K(5)C1+2+(2) A(9)+1 G1\n" +
        "(3) %   K(5)C1+2+(2) A1+(9) G1\n" +
        "(4) %   K(5)C1+(2)+2 A(9)+1",
      options: [
        "(1) %  K5C1+(2)+2 A(9)+1 G1",
        "(2) %   K(5)C1+2+(2) A(9)+1 G1",
        "(3) %   K(5)C1+2+(2) A1+(9) G1",
        "(4) %   K(5)C1+(2)+2 A(9)+1",
      ],
      answer: "(2) %   K(5)C1+2+(2) A(9)+1 G1",
    },
    {
      queNum: 15,
      question:
        "Aestivation of petals in the flower of cotton is correctly shown in :-\n" +
        "(1) [Image-based option]\n" +
        "(2) [Image-based option]\n" +
        "(3) [Image-based option]\n" +
        "(4) [Image-based option]",
      options: [
        "(1) Option 1",
        "(2) Option 2",
        "(3) Option 3",
        "(4) Option 4",
      ],
      answer: "(3) Option 3",
    },
    {
      queNum: 16,
      question:
        "Which one of the following diagrams represents the placentation in Dianthus ?\n" +
        "(1) Diagram 1\n" +
        "(2) Diagram 2\n" +
        "(3) Diagram 3\n" +
        "(4) Diagram 4",
      options: [
        "(1) Diagram 1",
        "(2) Diagram 2",
        "(3) Diagram 3",
        "(4) Diagram 4",
      ],
      answer: "(3) Diagram 3",
    },
    {
      queNum: 17,
      question:
        "How many plants in the list given below have marginal placentation ?\n" +
        "Mustard, Gram, Tulip, Asparagus, Arhar, Sunnhemp, Chilli, Colchicine, Onion, Moong, Pea, Tobacco, Lupin",
      options: [
        "(1) Six",
        "(2) Three",
        "(3) Four",
        "(4) Five",
      ],
      answer: "(1) Six",
    },
    {
      queNum: 18,
      question:
        "Among bitter gourd, mustard, brinjal, pumpkin, china rose, lupin, cucumber, sunnhemp, gram, guava, bean, chilli, plum, petunia, tomato, rose, Withania, potato, onion, Aloe and tulip, how many plants have hypogynous flower ?\n",
      options: [
        "(1) Eighteen",
        "(2) Six",
        "(3) Ten",
        "(4) Fifteen",
      ],
      answer: "(4) Fifteen",
    },
    {
      queNum: 19,
      question:
        "Correct position of floral parts over thalamus in mustard plant is :-\n" +
        "(1) Gynoecium occupies the highest position, while the other parts are situated below it.\n" +
        "(2) Margin of the thalamus grows upward, enclosing the ovary completely, and other parts arise below the ovary.\n" +
        "(3) Gynoecium is present in the centre and other parts cover it partially.\n" +
        "(4) Gynoecium is situated in the centre, and other parts of the flower are located at the rim of the thalamus, at the same level.",
      options: [
        "(1) Gynoecium occupies the highest position, while the other parts are situated below it.",
        "(2) Margin of the thalamus grows upward, enclosing the ovary completely, and other parts arise below the ovary.",
        "(3) Gynoecium is present in the centre and other parts cover it partially.",
        "(4) Gynoecium is situated in the centre, and other parts of the flower are located at the rim of the thalamus, at the same level.",
      ],
      answer: "(1) Gynoecium occupies the highest position, while the other parts are situated below it.",
    },
    {
      queNum: 20,
      question:
        "Match List - I with List - II :-\n" +
        "List - I:\n" +
        "  (a) Imbricate\n" +
        "  (b) Valvate\n" +
        "  (c) Vexillary\n" +
        "  (d) Twisted\n" +
        "List - II:\n" +
        "  (i) Calotropis\n" +
        "  (ii) Cassia\n" +
        "  (iii) Cotton\n" +
        "  (iv) Bean\n" +
        "Choose the correct answer from the options given below :\n" +
        "(1) (a)-(ii), (b)-(i), (c)-(iii), (d)-(iv)\n" +
        "(2) (a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)\n" +
        "(3) (a)-(ii), (b)-(iv), (c)-(iii), (d)-(i)\n" +
        "(4) (a)-(i), (b)-(iii), (c)-(iv), (d)-(ii)",
      options: [
        "(1) (a)-(ii), (b)-(i), (c)-(iii), (d)-(iv)",
        "(2) (a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
        "(3) (a)-(ii), (b)-(iv), (c)-(iii), (d)-(i)",
        "(4) (a)-(i), (b)-(iii), (c)-(iv), (d)-(ii)",
      ],
      answer: "(2) (a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
    },
  ];
  
  export default QUESTIONS;
  