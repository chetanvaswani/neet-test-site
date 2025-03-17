const QUESTIONS = [
    // --- From locomotion-and-movement-23-10-2023.pdf ---
    {
      queNum: 1,
      question: "Cranial bone related to ear is:",
      options: [
        "(1) Occipital",
        "(2) Frontal",
        "(3) Nasal",
        "(4) Temporal",
      ],
      answer: "(4) Temporal",
    },
    {
      queNum: 2,
      question: "These facial bones are unpaired:",
      options: [
        "(1) Lacrimal, Vomer",
        "(2) Vomer, Mandible",
        "(3) Nasal, Vomer",
        "(4) Palatine, Mandible",
      ],
      answer: "(2) Vomer, Mandible",
    },
    {
      queNum: 3,
      question: "In human beings the cranium is formed by:",
      options: [
        "(1) Ten bones of which two are paired",
        "(2) Eight bones of which two are paired",
        "(3) Fourteen bones of which six are paired",
        "(4) Twelve bones of which four are paired",
      ],
      answer: "(2) Eight bones of which two are paired",
    },
    {
      queNum: 4,
      question: "Which one of the following is the correct description of a certain part of a normal human skeleton?",
      options: [
        "(1) First vertebra is axis which articulates with the occipital condyles.",
        "(2) The 9th and 10th pairs of ribs are called the floating ribs.",
        "(3) Glenoid cavity is a depression to which the thigh bone articulates.",
        "(4) Parietal bone and the temporal bone of the skull are joined by fibrous joint.",
      ],
      answer: "(4) Parietal bone and the temporal bone of the skull are joined by fibrous joint.",
    },
    {
      queNum: 5,
      question: "The increase in vertebrae size from the neck to the lower back is due to:",
      options: [
        "(1) Supporting more weight in the lower back than in the neck.",
        "(2) Supporting less weight in the lower back than in the neck.",
        "(3) Evolution",
        "(4) Vertebrae don't increase in size.",
      ],
      answer: "(1) Supporting more weight in the lower back than in the neck.",
    },
    {
      queNum: 6,
      question: "Select the correct statement with respect to locomotion in humans:",
      options: [
        "(1) The joint between adjacent vertebrae is a fibrous joint.",
        "(2) A decreased level of progesterone causes osteoporosis in old people.",
        "(3) Accumulation of uric acid crystals in joints causes their inflammation.",
        "(4) The vertebral column has 10 thoracic vertebrae.",
      ],
      answer: "(3) Accumulation of uric acid crystals in joints causes their inflammation.",
    },
    {
      queNum: 7,
      question: "Select the correct matching of the type of joint with the example in human skeletal system:",
      options: [
        "(1) Cartilaginous joint – Between frontal and parietal",
        "(2) Pivot joint – Between third and fourth cervical vertebrae",
        "(3) Hinge joint – Between humerus and pectoral girdle",
        "(4) Gliding joint – Between carpals",
      ],
      answer: "(4) Gliding joint – Between carpals",
    },
    {
      queNum: 8,
      question: "Osteoporosis, an age–related disease of the skeletal system, may occur due to:",
      options: [
        "(1) Decreased level of estrogen",
        "(2) Accumulation of uric acid leading to inflammation of joints.",
        "(3) Immune disorder affecting neuromuscular junction leading to fatigue.",
        "(4) High concentration of Ca++ and Na+.",
      ],
      answer: "(1) Decreased level of estrogen",
    },
    {
      queNum: 9,
      question: "Select the correct option:",
      options: [
        "(1) 8th, 9th and 10th pairs of ribs articulate directly with the sternum.",
        "(2) 11th and 12th pairs of ribs are connected to the sternum with the help of hyaline cartilage.",
        "(3) Each rib is a flat thin bone and all the ribs are connected dorsally to the thoracic vertebrae and ventrally to the sternum.",
        "(4) There are seven pairs of vertebrosternal, three pairs of vertebrochondral and two pairs of vertebral ribs.",
      ],
      answer: "(4) There are seven pairs of vertebrosternal, three pairs of vertebrochondral and two pairs of vertebral ribs.",
    },
    {
      queNum: 10,
      question: "Match the following joints with the bones involved:-",
      options: [
        "(1) Option A",
        "(2) Option B",
        "(3) Option C",
        "(4) Option D",
      ],
      answer: "(1) Option A",
      img: "/assets/locomotion-10.png"
    },
    {
      queNum: 11,
      question: "Match list - I with list – II:",
      options: [
        "(1) (a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)",
        "(2) (a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)",
        "(3) (a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)",
        "(4) (a)-(iv), (b)-(iii), (c)-(ii), (d)-(iv)",
      ],
      answer: "(4) (a)-(iv), (b)-(iii), (c)-(ii), (d)-(iv)",
      img: "/assets/locomotion-11.png"
    },
    
    // --- From locomotion-and-movement-24-10-2023.pdf ---
    {
      queNum: 12,
      question: "The type of muscles present in our:",
      options: [
        "(1) upper arm are smooth muscle fibres fusiform in shape.",
        "(2) heart are involuntary and unstriated smooth muscles.",
        "(3) intestine are striated and involuntary.",
        "(4) thigh are striated and voluntary.",
      ],
      answer: "(1) upper arm are smooth muscle fibres fusiform in shape.",
    },
    {
      queNum: 13,
      question: "Which one of the following pairs of chemical substances is correctly categorised?",
      options: [
        "(1) Troponin and myosin – Complex proteins in striated muscles",
        "(2) Secretin and rhodopsin – Polypeptide hormones",
        "(3) Calcitonin and thymosin – Thyroid hormones",
        "(4) Pepsin and prolactin – Two digestive enzymes secreted in stomach",
      ],
      answer: "(1) Troponin and myosin – Complex proteins in striated muscles",
    },
    {
      queNum: 14,
      question: "The H-zone in the skeletal muscle fibre is due to:",
      options: [
        "(1) extension of myosin filaments in the central portion of the A-band",
        "(2) the absence of myofibrils in the central portion of A-band",
        "(3) the central gap between myosin filaments in the A-band",
        "(4) the central gap between actin filaments extending through myosin filaments in the A-band",
      ],
      answer: "(4) the central gap between actin filaments extending through myosin filaments in the A-band",
    },
    {
      queNum: 15,
      question: "Stimulation of a muscle fiber by a motor neuron occurs at:",
      options: [
        "(1) the neuromuscular junction",
        "(2) the transverse tubules",
        "(3) the myofibril",
        "(4) the sarcoplasmic reticulum",
      ],
      answer: "(1) the neuromuscular junction",
    },
    {
      queNum: 16,
      question: "Sliding filament theory can be best explained as:",
      options: [
        "(1) Actin and Myosin filaments shorten and slide past each other",
        "(2) Actin and Myosin filaments do not shorten but rather slide past each other",
        "(3) When myofilaments slide past each other, Myosin filaments shorten while Actin filaments do not shorten",
        "(4) When myofilaments slide past each other, Actin filaments shorten while Myosin filaments do not shorten",
      ],
      answer: "(2) Actin and Myosin filaments do not shorten but rather slide past each other",
    },
    {
      queNum: 17,
      question: "Lack of relaxation between successive stimuli in sustained muscle contraction is known as:",
      options: [
        "(1) Spasm",
        "(2) Fatigue",
        "(3) Tetanus",
        "(4) Tonus",
      ],
      answer: "(3) Tetanus",
    },
    {
      queNum: 18,
      question: "Smooth muscles are:",
      options: [
        "(1) Involuntary, cylindrical, striated",
        "(2) Voluntary, spindle–shaped, uninucleate",
        "(3) Involuntary, fusiform, non-striated",
        "(4) Voluntary, multinucleate, cylindrical",
      ],
      answer: "(3) Involuntary, fusiform, non-striated",
    },
    {
      queNum: 19,
      question: "Name the ion responsible for unmasking of active sites for myosin for cross–bridge activity during muscle contraction.",
      options: [
        "(1) Sodium",
        "(2) Potassium",
        "(3) Calcium",
        "(4) Magnesium",
      ],
      answer: "(3) Calcium",
    },
    {
      queNum: 20,
      question: "Select the correct match:",
      options: [
        "(1) A-Skeletal muscles → biceps, striated muscles, involuntary",
        "(2) B-Smooth muscles → walls of stomach, voluntary",
        "(3) C-Cardiac muscles → heart, dorsal wall of aorta, voluntary",
        "(4) A-Skeletal muscle → biceps, striated, voluntary",
      ],
      answer: "(4) A-Skeletal muscle → biceps, striated, voluntary",
      img: "/assets/locomotion-20.png"
    },
    {
      queNum: 21,
      question: "Given below are two statements –\nStatement I: Each myofibril has alternate dark and light bands on it.\nStatement II: Myosin filaments are thinner as compared to the actin filaments.\nChoose the correct answer:",
      options: [
        "(1) Both statement – I and statement – II are incorrect.",
        "(2) Statement – I is correct but statement – II is incorrect.",
        "(3) Statement – I is incorrect but statement – II is correct.",
        "(4) Both statement – I and statement – II are correct.",
      ],
      answer: "(2) Statement – I is correct but statement – II is incorrect.",
    },
    {
      queNum: 22,
      question: "Given below are two statements. One is labelled as Assertion (A) and the other is labelled as Reason (R).\n" 
      + "Assertion (A) : Increase Ca+2 level leads to the binding of calcium with a subunit of troponin on actin filaments.\n" + 
      "Reason (R) : Action potential spreads through the muscle fibre and causes the release of calcium ion into the sarcoplasm. In the light of the above statements, choose the correct answer from the option given below",
      options: [
        "(1) Both (A) and (R) are correct but (R) is not the correct explanation of (A).",
        "(2) (A) is correct but (R) is not correct.",
        "(3) (A) is not correct but (R) is correct.",
        "(4) Both (A) and (R) are correct and (R) is the correct explanation of (A)",
      ],
      answer: "(1) Both (A) and (R) are correct but (R) is not the correct explanation of (A).",
    },
  ];
  
  export default QUESTIONS;  