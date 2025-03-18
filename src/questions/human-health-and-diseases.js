const QUESTIONS = [
    // ---------- From human-health-and-disease-09-10-2023.pdf (Questions 1–30) ----------
    {
      queNum: 1,
      question:
        "Which biological response modifier activates immune system and helps in destroying the tumor ?",
      options: [
        "(1) α-interferons",
        "(2) Taxol drug",
        "(3) Cytoleukins",
        "(4) Vincristin drug"
      ],
      answer: "(1) α-interferons"
    },
    {
      queNum: 2,
      question:
        "Following diagram of HIV shows which parts marked as A, B, C and D respectively :-",
      options: [
        "(1) SS-RNA, Reverse transcriptase, Lipoprotein, GP-120",
        "(2) GP-120, SS-RNA, Reverse transcriptase, Lipoprotein",
        "(3) Reverse transcriptase, SS-RNA, Lipoprotein, GP-120",
        "(4) GP-120, Lipoprotein, SS-RNA, Reverse transcriptase"
      ],
      answer: "(3) Reverse transcriptase, SS-RNA, Lipoprotein, GP-120",
      img: "/assets/human-health-2.png",
    },
    {
      queNum: 3,
      question: "Replication of HIV takes place in :-",
      options: [
        "(1) TH cells",
        "(2) TK cells",
        "(3) Macrophage",
        "(4) Both (1) and (3)"
      ],
      answer: "(4) Both (1) and (3)"
    },
    {
      queNum: 4,
      question:
        "Which infection more often sprends due to concious behaviour pattern ?",
      options: [
        "(1) HIV",
        "(2) Cancer",
        "(3) Pneumonia",
        "(4) Typhoid"
      ],
      answer: "(1) HIV"
    },
    {
      queNum: 5,
      question: "Which property is not shown by cancer cells?",
      options: [
        "(1) Metastasis",
        "(2) Uncontrolled division",
        "(3) Contact inhibition",
        "(4) Invasion"
      ],
      answer: "(3) Contact inhibition"
    },
    {
      queNum: 6,
      question:
        "A certain patient is suspected to be suffering from Acquired Immuno Deficiency Syndrome. Which diagnostic technique will you recommend for its detection ?",
      options: [
        "(1) ELISA",
        "(2) MRI",
        "(3) Ultra sound",
        "(4) WIDAL"
      ],
      answer: "(1) ELISA"
    },
    {
      queNum: 7,
      question:
        "Consider the following characteristics and answer the question.\n(a) Metastasis\n(b) Contact inhibition\n(c) Uncontrolled meiosis\n(d) Malignancy\n(e) Invasion\n(f) Oncogenic transformation\nThe properties shown by malignant tumor are?",
      options: [
        "(1) a, b, d, e, f",
        "(2) a, d, e, f",
        "(3) a, b, d, e",
        "(4) a, b, c, d, e, f"
      ],
      answer: "(2) a, d, e, f"
    },
    {
      queNum: 8,
      question:
        "Which of following gene is not related to normal body growth ?",
      options: [
        "(1) Protooncogene",
        "(2) Oncogene",
        "(3) Tumour suppresser gene",
        "(4) Gene related to programmed cell death"
      ],
      answer: "(2) Oncogene"
    },
    {
      queNum: 9,
      question: "Oestrogen works in cancer as :-",
      options: [
        "(1) Tumour promoters",
        "(2) Tumour marker",
        "(3) Oncogenic transformers",
        "(4) All the above"
      ],
      answer: "(1) Tumour promoters"
    },
    {
      queNum: 10,
      question:
        "Transformation of normal cells into cancerous neoplastic cells may be induced by:\n(i) x-rays   (ii) Chemical agents   (iii) g-rays  (iv) Oncovirus   (v) Smoking  (vi) U.V. rays",
      options: [
        "(1) i, iii, vi",
        "(2) i, iii, iv, vi",
        "(3) i, ii, iii, iv, v, vi",
        "(4) i, ii, iii, iv, vi"
      ],
      answer: "(3) i, ii, iii, iv, v, vi"
    },
    {
      queNum: 11,
      question:
        "Which of the following virus is sexually transmitted which cause cancer ?",
      options: [
        "(1) Human papilloma virus",
        "(2) Pox virus",
        "(3) HIV",
        "(4) Influenza virus"
      ],
      answer: "(1) Human papilloma virus"
    },
    {
      queNum: 12,
      question: "Mark the odd one",
      options: [
        "(1) Tuberculosis",
        "(2) Typhoid",
        "(3) AIDS",
        "(4) Pneumonia"
      ],
      answer: "(3) AIDS"
    },
    {
      queNum: 13,
      question: "Cannabinoid receptors present principally in:",
      options: [
        "(1) Heart",
        "(2) Liver",
        "(3) Brain",
        "(4) GIT"
      ],
      answer: "(3) Brain"
    },
    {
      queNum: 14,
      question: "Which of the following is not cannabinoid ?",
      options: [
        "(1) Heroin",
        "(2) Hashish",
        "(3) Marijuana",
        "(4) Ganja"
      ],
      answer: "(1) Heroin"
    },
    {
      queNum: 15,
      question:
        "In the above diagram what is A, B and C respectively ?",
      options: [
        "(1) Stomach Ethyl alcohol Acetaldehyde",
        "(2) Ethyl alcohol Acetaldehyde Liver",
        "(3) Ethyl alcohol Liver Acetaldehyde",
        "(4) Liver Acetaldehyde Ethyl alcohol"
      ],
      answer: "(3) Ethyl alcohol Liver Acetaldehyde",
      img: "/assets/human-health-15.png",
    },
    {
      queNum: 16,
      question: "Smoke of tabacco contains :-",
      options: [
        "(1) Carcinogen",
        "(2) Nicotine",
        "(3) CO",
        "(4) All"
      ],
      answer: "(4) All"
    },
    {
      queNum: 17,
      question:
        "Which of the following combination is not a cannabinoids ?",
      options: [
        "(1) Charas, Ganja",
        "(2) Datura, LSD",
        "(3) Charas, Hashish",
        "(4) Marijuana, Bhang"
      ],
      answer: "(2) Datura, LSD"
    },
    {
      queNum: 18,
      question:
        "(a) Smack  (b) Diacetylmorphine  (c) White  (d) Odourless  (e) Bitter crystalline compound\nAbove statements/informations are correct for:-",
      options: [
        "(1) Morphine",
        "(2) Heroin",
        "(3) Coccain",
        "(4) Barbiturates"
      ],
      answer: "(2) Heroin"
    },
    {
      queNum: 19,
      question:
        "Mark the correctly matched options :-\n(A) Leaves of Cannabis sativa\n(B) Opium poppy\n(C) Flowing branch of Datura",
      options: [
        "(1) A and B",
        "(2) B and C",
        "(3) A, B and C",
        "(4) Only C"
      ],
      answer: "(4) Only C",
      img: "/assets/human-health-19.png",
    },
    {
      queNum: 20,
      question:
        "The period between.......of age may be thought of as adolescence period",
      options: [
        "(1) 18-21 yrs.",
        "(2) 12-21 yrs.",
        "(3) 12-18 yrs.",
        "(4) 18-25 yrs."
      ],
      answer: "(3) 12-18 yrs."
    },
    {
      queNum: 21,
      question:
        "Which disorder is not related with smoking?\n(a) Lung cancer  (b) Bronchitis  (c) Emphysema  (d) Coronary heart disease  (e) Gastric ulcer   (f) Urinary bladder cancer  (g) Throat cancer",
      options: [
        "(1) a, b, e, g",
        "(2) a, b, c, f, g",
        "(3) c, d, f",
        "(4) None of these (all are related)"
      ],
      answer: "(4) None of these (all are related)"
    },
    {
      queNum: 22,
      question:
        "Withdrawal syndrome is characterised by:-\n(a) Anxiety  (b) Shakiness  (c) Nausea  (d) Sweating",
      options: [
        "(1) a, c",
        "(2) b, c",
        "(3) a, c, d",
        "(4) a, b, c, d"
      ],
      answer: "(4) a, b, c, d"
    },
    {
      queNum: 23,
      question:
        "Which measure would be particularly useful for prevention and control of alcohol and drug abuse among adolescents ?",
      options: [
        "(1) a, b, d",
        "(2) a, c, d, e",
        "(3) c, e",
        "(4) a, b, c, d, e"
      ],
      answer: "(4) a, b, c, d, e"
    },
    {
      queNum: 24,
      question:
        "Match the column-I with column-II and select the correct one :-\nColumn-I: (A) Charas, (B) Cocaine, (C) L.S.D., (D) Amphetamine\nColumn-II: (i) Claviceps purpuria, (ii) Euphoria, (iii) Stimulant, (iv) Cannabis sativa",
      options: [
        "(1) iv ii iii i",
        "(2) iv ii i iii",
        "(3) iv i ii iii",
        "(4) iii i iv ii"
      ],
      answer: "(2) iv ii i iii"
    },
    {
      queNum: 25,
      question: "The cells affected in leukaemia are",
      options: [
        "(1) plasma cells",
        "(2) erythrocytes",
        "(3) thrombocytes",
        "(4) leucocytes"
      ],
      answer: "(4) leucocytes"
    },
    {
      queNum: 26,
      question:
        "Which of the following statements regarding drugs are correct ?\n(i) Heroin, commonly called smack, is obtained by acetylation of morphine.\n(ii) Cocaine is obtained from the latex of Papaver somniferum.\n(iii) Marijuana interferes with the transmission of dopamine.\n(iv) Morphine is an effective sedative and pain killer.",
      options: [
        "(1) (i) and (ii)",
        "(2) (i) and (iv)",
        "(3) (ii) and (iii)",
        "(4) (iii) and (iv)"
      ],
      answer: "(2) (i) and (iv)"
    },
    {
      queNum: 27,
      question:
        "Which of the following is the correct statement regarding the particular psychotropic drug specified?",
      options: [
        "(1) Barbiturates cause relaxation and temporary euphoria",
        "(2) Hashish causes after thought perceptions and hallucinations",
        "(3) Opium stimulates nervous system and causes hallucinations",
        "(4) Morphine leads to delusions and disturbed emotions"
      ],
      answer: "(2) Hashish causes after thought perceptions and hallucinations"
    },
    {
      queNum: 28,
      question:
        "At which stage of HIV infection does one usually show symptoms of AIDS?",
      options: [
        "(1) Within 15 days of sexual contact with an infected person",
        "(2) When the infecting retrovirus enters host cells",
        "(3) When viral DNA is produced by reverse transcriptase",
        "(4) When HIV replicates rapidly in helper T-lymphocytes and damages large number of these"
      ],
      answer: "(4) When HIV replicates rapidly in helper T-lymphocytes and damages large number of these"
    },
    {
      queNum: 29,
      question:
        "Techniques like radiography (use of X-rays), CT scanning and MRI are very useful to detect",
      options: [
        "(1) autoimmune disorders",
        "(2) disease caused by viral infection",
        "(3) disease caused by bacterial infection",
        "(4) disease caused by an uncontrolled division of abnormal cells of internal organs"
      ],
      answer: "(4) disease caused by an uncontrolled division of abnormal cells of internal organs"
    },
    {
      queNum: 30,
      question:
        "Which one of the following pair is correctly match?",
      options: [
        "(1) Bhang – Analgesic",
        "(2) Cocaine – Opiate narcotics",
        "(3) Morphine – Hallucinogen",
        "(4) Barbiturate – Sedatives"
      ],
      answer: "(4) Barbiturate – Sedatives"
    },
  
    // ---------- From human-health-and-disease-26-09-2023.pdf (Questions 31–60) ----------
    {
      queNum: 31,
      question:
        "Which of the following is not a component of innate immunity ?",
      options: [
        "(1) Interferons",
        "(2) Phagocytes",
        "(3) Skin",
        "(4) Antibodies"
      ],
      answer: "(4) Antibodies"
    },
    {
      queNum: 32,
      question:
        "Virus infected cells secrete proteins called as interferons which protect non-infected cells from viral infection. They are a part of :-",
      options: [
        "(1) Physical barriers",
        "(2) Physiological barriers",
        "(3) Cellular barriers",
        "(4) Cytokine barriers"
      ],
      answer: "(4) Cytokine barriers"
    },
    {
      queNum: 33,
      question:
        "In which one of the following options examples are incorrectly matched with their particular type of immunity ?\n\nExamples:\n1. Saliva in mouth and tears in eyes – Physiological barrier\n2. Skin, HCl in stomach and mucus coating – Physical barrier\n3. Polymorphonuclear leukocytes and monocytes – Cellular barrier\n4. NK cell – Cellular barrier",
      options: [
        "(1) 1",
        "(2) 2",
        "(3) 3",
        "(4) 4"
      ],
      answer: "(2) 2"
    },
    {
      queNum: 34,
      question: "Incorrect about bone marrow is :-",
      options: [
        "(1) b",
        "(2) c",
        "(3) b + c",
        "(4) All statements are correct"
      ],
      answer: "(1) b"
    },
    {
      queNum: 35,
      question:
        "The exaggerated response of the immune system to certain antigens is called :-",
      options: [
        "(1) Primary immune response",
        "(2) Secondary immune response",
        "(3) Immune suppression response",
        "(4) Allergy"
      ],
      answer: "(4) Allergy"
    },
    {
      queNum: 36,
      question: "Mark the incorrect match :-",
      options: [
        "(1) Colostrum = Yellowish fluid, IgA present",
        "(2) Antivenom = Passive immunisation",
        "(3) Peyer's patches = PLO of small intestine",
        "(4) Antibody = H2L2"
      ],
      answer: "(3) Peyer's patches = PLO of small intestine"
    },
    {
      queNum: 37,
      question:
        "Primary and secondary immune response are carried out with the help of two special types of ______ present in our blood.",
      options: [
        "(1) Macrophages",
        "(2) Lymphocytes",
        "(3) Neutrophils",
        "(4) Monocytes"
      ],
      answer: "(2) Lymphocytes"
    },
    {
      queNum: 38,
      question:
        "Which of the following statement is correct?\n(A) Health is affected by genetic disorders, life style and infections.\n(B) Balanced diet, personal hygiene and regular exercise are very important to maintain good health.\n(C) Health is only \"absence of disease\" or \"physical fitness\"\n(D) \"Good humor\" hypothesis was disproved by William harvey.",
      options: [
        "(1) A, C",
        "(2) A, C, D",
        "(3) A, B, D",
        "(4) All are correct"
      ],
      answer: "(3) A, B, D"
    },
    {
      queNum: 39,
      question:
        "Health is a state of complete __(A)__, __(B)__ and __(C)__ well being.",
      options: [
        "(1) A = Physiological, B = Mental, C = Social",
        "(2) A = Mental, B = Physical, C = Economical",
        "(3) A = Physical, B = Mental, C = Social",
        "(4) Both (2) and (3)"
      ],
      answer: "(3) A = Physical, B = Mental, C = Social"
    },
    {
      queNum: 40,
      question:
        "When people are healthy they are?\n(A) More efficient at work\n(B) Decreases productivity\n(C) Brings economic prosperity\n(D) Increases longevity of people\n(E) Increases infant and maternal mortality\nHow many statements are correct about healthy people?",
      options: [
        "(1) Two",
        "(2) Three",
        "(3) Four",
        "(4) One"
      ],
      answer: "(2) Three"
    },
    {
      queNum: 41,
      question: "Interferon is considered with :-",
      options: [
        "(1) First line of defence",
        "(2) Second line of defence",
        "(3) Third line of defence",
        "(4) All the above"
      ],
      answer: "(2) Second line of defence"
    },
    {
      queNum: 42,
      question:
        "Which antibodies activate the B–lymphocyte for further release of antibodies ?",
      options: [
        "(1) IgG",
        "(2) IgA",
        "(3) IgE",
        "(4) IgD"
      ],
      answer: "(2) IgA"
    },
    {
      queNum: 43,
      question:
        "All are the function of antibody except :-",
      options: [
        "(1) Antigen binds with antibody leading to cell lysis",
        "(2) After binding of antigen with antibody facilitate phagocytosis",
        "(3) Body cell directly binds with antigen and kill the antigen related cell by releasing lymphotoxic substances",
        "(4) Antibodies also bind with bacterial products and inhibit the activity of bacterial product"
      ],
      answer: "(4) Antibodies also bind with bacterial products and inhibit the activity of bacterial product"
    },
    {
      queNum: 44,
      question: "α–IFN is used in :-",
      options: [
        "(1) Cancer treatment",
        "(2) Viral growth inhibition",
        "(3) Bacterial growth inhibition",
        "(4) Both (1) and (2)"
      ],
      answer: "(3) Bacterial growth inhibition"
    },
    {
      queNum: 45,
      question:
        "Which category of lymphocyte is produced by T-cell and is absent in B-cells ?",
      options: [
        "(1) Memory cell",
        "(2) Plasma cell",
        "(3) Suppressor cell",
        "(4) Cartwheel cells"
      ],
      answer: "(4) Cartwheel cells"
    },
    {
      queNum: 46,
      question: "Humoral immune system is mediated by -",
      options: [
        "(1) B-cells",
        "(2) T-cells",
        "(3) NK cells",
        "(4) Mast cells"
      ],
      answer: "(1) B-cells"
    },
    {
      queNum: 47,
      question:
        "Which one of the following group is not of infectious diseases ?",
      options: [
        "(1) Cancer, Allergy, Rheumatoid arthritis",
        "(2) Dysentery, Plaque, Diphtheria",
        "(3) Polio, Pneumonia, Tetanus",
        "(4) Smallpox, Ringworm, Common Cold"
      ],
      answer: "(1) Cancer, Allergy, Rheumatoid arthritis"
    },
    {
      queNum: 48,
      question:
        "Haemophilis influenze bacteria are responsible for :-",
      options: [
        "(1) Influenza",
        "(2) Pneumonia",
        "(3) Dengue",
        "(4) Filariasis"
      ],
      answer: "(2) Pneumonia"
    },
    {
      queNum: 49,
      question:
        "Salmonella typhi is a bacteria and causes typhoid, this Pathogen causes lesions and ulceration in the _____ .",
      options: [
        "(1) Stomach wall",
        "(2) Intestinal wall",
        "(3) Gall bladder",
        "(4) Blood vessels"
      ],
      answer: "(2) Intestinal wall"
    },
    {
      queNum: 50,
      question:
        "Match the columns w.r.t. diseases and causative agents :-\nColumn-I: (a) Pneumonia, (b) Common cold, (c) Filariasis, (d) Ringworms\nColumn-II: (p) Rhino viruses, (q) Haemophilus influenze, (r) Microsporum, (s) Wuchereria bamcrofti",
      options: [
        "(1) a – p, b – q, c – r, d – s",
        "(2) a – r, b – p, c – s, d – q",
        "(3) a – q, b – p, c – s, d – r",
        "(4) a – p, b – q, c – s, d – r"
      ],
      answer: "(3) a – q, b – p, c – s, d – r"
    },
    {
      queNum: 51,
      question:
        "(a) Nasal congestion and discharge\n(b) Sore throat, hoarseness, cough\n(c) Headache, Tiredness etc, are characters of",
      options: [
        "(1) Malaria",
        "(2) Typhoid",
        "(3) Common cold",
        "(4) Pneumonia"
      ],
      answer: "(3) Common cold"
    },
    {
      queNum: 52,
      question:
        "Infectious form of Plasmodium for human is :-",
      options: [
        "(1) Sporozoite",
        "(2) Mosquito",
        "(3) Haemozoin",
        "(4) Schizont"
      ],
      answer: "(1) Sporozoite"
    },
    {
      queNum: 53,
      question:
        "Select the incorrect match in the table given below :-\nDisease and Causative agent:\n(a) Common cold – Rhino virus\n(b) Typhoid – Salmonella typhi\n(c) Pneumonia – Haemophilus influenzae\n(d) Plague – Xemopsylla",
      options: [
        "(1) 1",
        "(2) 2",
        "(3) 3",
        "(4) 4"
      ],
      answer: "(4) 4"
    },
    {
      queNum: 54,
      question:
        "Which of the following is not correct about pneumonia ?\n(A) It is caused by Streptococcus pneumoniae.\n(B) Infects the alveoli of the lungs.\n(C) Symptoms of pneumonia include fever, chills, Cough and headache.\n(D) In all cases the lips and finger nails turn blue to grayish in colour.",
      options: [
        "(1) A, B, D",
        "(2) B and D",
        "(3) D only",
        "(4) A, B, C, D"
      ],
      answer: "(3) D only"
    },
    {
      queNum: 55,
      question:
        "Which one of the following option gives the correct matching of a disease with its pathogen and mode of infection?",
      options: [
        "(1) Pneumonia – Haemophilus influenzae – Droplet infection",
        "(2) Typhoid – Salmonella Typhi – Airborne infection",
        "(3) Malaria – Plasmodium – Bite by male Anopheles",
        "(4) Filariasis – Wuchereria Bancrofti – Infected food and water"
      ],
      answer: "(1) Pneumonia – Haemophilus influenzae – Droplet infection"
    },
    {
      queNum: 56,
      question:
        "Read the following four statements (A-D):\n(A) The lips and finger nails may turn gray to bluish in colour in severe cases of Typhoid\n(B) Rhino viruses infect the nose and upper respiratory passage but not the lungs.\n(C) Intestinal perforation and death may occur in severe cases of typhoid.\n(D) Streptococcus pneumoniae infects the alveoli of the lungs.\nHow many of the above statements are right :",
      options: [
        "(1) One",
        "(2) Two",
        "(3) Three",
        "(4) Four"
      ],
      answer: "(3) Three"
    },
    {
      queNum: 57,
      question:
        "How many of the following diseases are vector borne- Malaria, Dengue, Common cold, Filariasis, Chikungunya, Ascariasis, Typhoid, Pneumonia",
      options: [
        "(1) Seven",
        "(2) Six",
        "(3) Five",
        "(4) Four"
      ],
      answer: "(4) Four"
    },
    {
      queNum: 58,
      question:
        "How many statements are correct about common cold?\n(A) It is caused by rhino virus\n(B) Infection of alveoli of the lungs\n(C) Symptoms are nasal congestion and discharge, sore throat, hoarseness, cough, headache and tiredness.\n(D) Usually last for one or two days.",
      options: [
        "(1) One",
        "(2) Two",
        "(3) Three",
        "(4) Four"
      ],
      answer: "(2) Two"
    },
    {
      queNum: 59,
      question:
        "Which of the following is not a sign/symptom of amoebiasis?",
      options: [
        "(1) Constipation",
        "(2) Abdominal pain and cramps",
        "(3) Stool with excess mucous and blood clots",
        "(4) Intestinal blockage"
      ],
      answer: "(4) Intestinal blockage"
    },
    {
      queNum: 60,
      question:
        "______ cause a slowly developing chronic inflammation of the organs :-",
      options: [
        "(1) Common round worm",
        "(2) Filarial worm",
        "(3) Guinea worm",
        "(4) Ascaris"
      ],
      answer: "(2) Filarial worm"
    }
  ];

  export default QUESTIONS