const QUESTIONS = [
    // Questions 1–10 (Block 1)
    {
      queNum: 1,
      question:
        "Which of the following correctly describes the contraction and relaxation during breathing?",
      options: [
        "(1) Contraction IICM Antero-Posterior axis Thoracic chamber in dorso-ventral axis",
        "(2) Contraction EICM Antero-Posterior axis Thoracic chamber in dorso-ventral axis",
        "(3) Relaxation EICM Antero-Posterior axis Thoracic chamber in antero-ventral axis",
        "(4) Relaxation IICM Dorso-ventral axis Thoracic chamber in antero-ventral axis",
      ],
      answer:
        "(2) Contraction EICM Antero-Posterior axis Thoracic chamber in dorso-ventral axis",
    },
    {
      queNum: 2,
      question:
        "Which of the following is correct?\nTissue  Alveoli  Deoxygenated Blood",
      options: [
        "(1) PCO₂ = 40 mm Hg, PO₂ = 95 mm Hg, PCO₂ = 45 mm Hg",
        "(2) PCO₂ = 45 mm Hg, PO₂ = 104 mm Hg, PCO₂ = 45 mm Hg",
        "(3) PCO₂ = 40 mm Hg, PCO₂ = 40 mm Hg, PCO₂ = 40 mm Hg",
        "(4) PCO₂ = 40 mg Hg, PO₂ = 45 mm Hg, PCO₂ = 95 mm Hg",
      ],
      answer:
        "(2) PCO₂ = 45 mm Hg, PO₂ = 104 mm Hg, PCO₂ = 45 mm Hg",
    },
    {
      queNum: 3,
      question:
        "Consider the following four statements and select the option which includes all the correct ones only:\n(A) O₂ can bind with haemoglobin in reversible manner.\n(B) Binding of O₂ with haemoglobin is primarily related to partial pressure of O₂.\n(C) Sigmoid curve is obtained when percentage saturation of haemoglobin with O₂ is plotted against PO₂.\n(D) Every 100 ml of oxygenated blood can deliver around 5 ml of O₂ to tissue under normal physiological conditions.",
      options: [
        "(1) Statements (A), (B) and (C)",
        "(2) Statements (A), (B), (C) and (D)",
        "(3) Statements (B), (C) and (D)",
        "(4) Statements (C), (D) and (A)",
      ],
      answer: "(2) Statements (A), (B), (C) and (D)",
    },
    {
      queNum: 4,
      question:
        "Given below are two statements:\nStatement I: ↑PO₂, ↓PCO₂, ↓H⁺ concentration, ↓T  ⇒ Binding of O₂ with haemoglobin in alveoli\nStatement II: ↓PO₂, ↑PCO₂, ↑H⁺ concentration, ↑T  ⇒ O₂ dissociates with haemoglobin in tissue",
      options: [
        "(1) Both statement-I & statement-II are false",
        "(2) Statement-I is true but statement-II is false",
        "(3) Both statement-I & statement-II are true",
        "(4) None of these",
      ],
      answer: "(3) Both statement-I & statement-II are true",
    },
    {
      queNum: 5,
      question:
        "Find out the incorrect statement regarding transport of gases:",
      options: [
        "(1) Carbonic anhydrase present in high quantity in RBC, while minute quantities present in plasma too.",
        "(2) CA catalyzes: CO₂ + H₂O → H₂CO₃ → HCO₃⁻ + H⁺",
        "(3) Transportation of CO₂ by RBCs = 70%, Bicarbonate = 20-25%, Plasma = 7%",
        "(4) Every 100 ml of deoxygenated blood delivers approximately 4 ml of CO₂ to alveoli",
      ],
      answer: "(3) Transportation of CO₂ by RBCs = 70%, Bicarbonate = 20-25%, Plasma = 7%",
    },
    {
      queNum: 6,
      question:
        "Read the following statements regarding the processes in respiration and identify the correct sequence from the options below:\n(i) Diffusion of gases across alveolar membrane\n(ii) Utilization of O₂ by cells for catabolic reactions\n(iii) Breathing (pulmonary ventilation) by which atmospheric air is drawn\n(iv) Transport of gases by blood\n(v) Diffusion of O₂ & CO₂ between blood & tissues",
      options: [
        "(1) ii → i → iv → iii → v",
        "(2) iii → v → iv → i → ii",
        "(3) ii → i → iv → v → iii",
        "(4) iii → i → iv → v → ii",
      ],
      answer: "(4) iii → i → iv → v → ii",
    },
    {
      queNum: 7,
      question:
        "Inspiration can occur if pressure within the lungs i.e. _____P_____ is less than the _____R_____ (i.e. there is _____Q_____ in lungs) with respect to _____S_____",
      options: [
        "(1) Inter-pulmonary pressure, Negative pressure, Atmospheric pressure, Atmospheric pressure",
        "(2) Intra-pulmonary pressure, Negative pressure, Atmospheric pressure, Atmospheric pressure",
        "(3) Atmospheric pressure, Positive pressure, Intra-pulmonary pressure, Atmospheric pressure",
        "(4) Atmospheric pressure, Positive pressure, Pulmonary pressure, Atmospheric pressure",
      ],
      answer: "(2) Intra-pulmonary pressure, Negative pressure, Atmospheric pressure, Atmospheric pressure",
    },
    {
      queNum: 8,
      question:
        "Identify A, B, C and D in the given diagram & choose the correct option accordingly.",
      options: [
        "(1) PO₂ = 45 mm Hg, PCO₂ = 40 mm Hg, Systemic vein, Artery; PO₂ = 104 mm Hg, PCO₂ = 40 mm Hg",
        "(2) PO₂ = 95 mm Hg, PCO₂ = 40 mm Hg, Systemic vein, Pulmonary artery; PO₂ = 104 mm Hg, PCO₂ = 40 mm Hg",
        "(3) PO₂ = 40 mm Hg, PCO₂ = 45 mm Hg, Systemic vein, Pulmonary artery; PO₂ = 104 mm Hg, PCO₂ = 40 mm Hg",
        "(4) PO₂ = 95 mm Hg, PCO₂ = 40 mm Hg, Systemic vein, Pulmonary vein; PO₂ = 40 mm Hg, PCO₂ = 45 mm Hg",
      ],
      answer: "(2) PO₂ = 95 mm Hg, PCO₂ = 40 mm Hg, Systemic vein, Pulmonary artery; PO₂ = 104 mm Hg, PCO₂ = 40 mm Hg",
      img: "/assets/breathing-8.png",
    },
    {
      queNum: 9,
      question:
        "Which of the following statements are correct?\nA. Inspiration & expiration are carried out by creating pressure gradients between atmosphere and alveoli.\nB. Exchange of O₂ & CO₂ is carried out by diffusion.\nC. In FRC, the volume of air that will remain in the lungs after forceful expiration.\nD. Maximum volume of air a person can breathe out after a forced inspiration (i.e., VC).",
      options: [
        "(1) A, B, and C",
        "(2) A, B, and D",
        "(3) B, C, and D",
        "(4) A, C, and D",
      ],
      answer: "(2) A, B, and D",
    },
    {
      queNum: 10,
      question:
        "Which of the following statement is incorrect?",
      options: [
        "(1) IC → Total volume of air a person can inspire after a normal expiration.",
        "(2) EC → Total volume of air a person can expire after a normal inspiration.",
        "(3) VC → Total volume of air a person can breathe in after a normal expiration.",
        "(4) FRC → Volume of air that will remain in the lungs after normal expiration.",
      ],
      answer: "(3) VC → Total volume of air a person can breathe in after a normal expiration.",
    },
    
    // Questions 11–15 (Block 2)
    {
      queNum: 11,
      question:
        "Inspiration & expiration are carried out by creating ____ between the atmosphere & ____ with the help of specialized muscles ____ and ____. Volume of air involved in these activities can be estimated with help of ____.",
      options: [
        "(1) P=Pressure gradient, Q=Intercostals, R=Spirometer, S=Diaphragm, T=Alveoli",
        "(2) P=Negative pressure, Q=Diaphragm, R=Alveoli, S=Spirometer, T=Intercostal",
        "(3) P=Negative pressure, Q=Alveoli, R=Intercostal, S=Diaphragm, T=Spirometer",
        "(4) P=Pressure gradient, Q=Diaphragm, R=Alveoli, S=Spirometer, T=Intercostal",
      ],
      answer: "(4) P=Pressure gradient, Q=Diaphragm, R=Alveoli, S=Spirometer, T=Intercostal",
    },
    {
      queNum: 12,
      question:
        "Match the following columns:\nColumn-I: (A) Primary sites for exchange of gases, (B) O₂ & CO₂ exchanged by, (C) Solubility of CO₂, (D) Factors that affect rate of Diffusion\nColumn-II: (i) Solubility, (ii) Alveoli, (iii) Simple diffusion, (iv) Much higher than O₂",
      options: [
        "(1) i iii iv ii",
        "(2) ii i iv iii",
        "(3) i ii iii iv",
        "(4) ii iii i iv",
      ],
      answer: "(4) ii iii i iv",
    },
    {
      queNum: 13,
      question:
        "Consider the following statements (a-d) & select the option which includes all correct ones only:\n(a) In alveoli PO₂ = 104 mmHg while in atmosphere PO₂ = 159 mmHg, because of this O₂ moves from higher partial pressure (atmosphere) to lower partial pressure (alveoli).\n(b) At tissue level PO₂ = 40 mmHg while PCO₂ = 45 mmHg, because of metabolic processes in tissues.\n(c) O₂ gets bound to hemoglobin which is easily associated at tissue level.\n(d) In pulmonary vein PO₂ = 45 mmHg while PCO₂ = 40 mmHg.",
      options: [
        "(1) Statements (a), (b), (c) and (d)",
        "(2) Statement (c) only",
        "(3) Statements (a), (b) and (c)",
        "(4) Statements (a) and (b) only",
      ],
      answer: "(4) Statements (a) and (b) only",
    },
    {
      queNum: 14,
      question:
        "In given diagram, identify what is depicted by A, B & C choose the correct options.",
      options: [
        "(1) A → Ribs & sternum returned to original position, B → volume of thorax increases, C → Diaphragm contracted",
        "(2) A → Ribs & sternum returned to original position, B → Volume of thorax decreases, C → Diaphragm related & arched upwards",
        "(3) A → Ribs & sternum returned to original position, B → volume of thorax increases, C → Diaphragm relaxed",
        "(4) A → Ribs & sternum raised, B → volume of thorax decreases, C → Diaphragm contracted",
      ],
      answer: "(2) A → Ribs & sternum returned to original position, B → Volume of thorax decreases, C → Diaphragm related & arched upwards",
      img: "/assets/breathing-14.png",
    },
    {
      queNum: 15,
      question:
        "In given diagram, identify what is depicted by A, B & C.",
      options: [
        "(1) Asthma, Occupational respiratory disorders, Emphysema",
        "(2) Emphysema, Asthma, Occupational respiratory disorders",
        "(3) Asthma, Emphysema, Occupational respiratory disorders",
        "(4) Hypoxia, Asthma, Emphysema",
      ],
      answer: "(3) Asthma, Emphysema, Occupational respiratory disorders",
      img: "/assets/breathing-15.png",
    },
    
    // Questions 16–30 (Block 3)
    {
      queNum: 16,
      question:
        "CO₂ is carried by hemoglobin as ____ , the role of ____ in regulation of respiratory rhythm is quite insignificant. ____ enzyme facilitates the reaction in both directions.",
      options: [
        "(1) Carboxyhemoglobin, Oxygen, Carbonic anhydrase",
        "(2) Carboxyhemoglobin, Carbon-dioxide, Anhydrase",
        "(3) Carbaminohemoglobin, Carbon-dioxide, Carbonic anhydrase",
        "(4) Carbaminohemoglobin, Oxygen, Carbonic anhydrase",
      ],
      answer: "(4) Carbaminohemoglobin, Oxygen, Carbonic anhydrase",
    },
    {
      queNum: 17,
      question:
        "The part starting with ____ up to terminal bronchioles constitutes the ____ whereas the alveoli & their ducts form the ____ of the respiratory system.",
      options: [
        "(1) Pharynx, Respiratory part, Exchange part",
        "(2) External nostrils, Conducting part, Respiratory part",
        "(3) Nostrils, Respiratory part, Conducting part",
        "(4) External nostrils, Exchange part, Respiratory part",
      ],
      answer: "(2) External nostrils, Conducting part, Respiratory part",
    },
    {
      queNum: 18,
      question:
        "The volume of air involved in breathing movements can be estimated by __________ which helps in clinical assessment of __________ functions.",
      options: [
        "(1) Residual volume, Pulmonary",
        "(2) Spirometer, Alveoli",
        "(3) Residual volume, Alveoli",
        "(4) Spirometer, Pulmonary",
      ],
      answer: "(4) Spirometer, Pulmonary",
    },
    {
      queNum: 19,
      question:
        "Expiration is initiated by ____ of diaphragm which ____ the volume of thoracic chamber in the ____ axis.",
      options: [
        "(1) P = Contraction, R = Increases, Q = Antero-posterior",
        "(2) P = Contraction, R = Antero-posterior, Q = Increases",
        "(3) P = Relaxation, R = Decreases, Q = Antero-posterior",
        "(4) P = Relaxation, R = Antero-posterior, Q = Decreases",
      ],
      answer: "(4) P = Relaxation, R = Antero-posterior, Q = Decreases",
    },
    {
      queNum: 20,
      question:
        "Which of the following statements is not true?",
      options: [
        "(1) Volume of air involved in activities can be estimated with the help of spirometer.",
        "(2) Mammals have a well-developed respiratory system comprising the two lungs & associated air passages to perform function.",
        "(3) The partial pressure of O₂ in deoxygenated blood is 45 mmHg.",
        "(4) Oxygenated blood is carried by systemic arteries.",
      ],
      answer: "(3) The partial pressure of O₂ in deoxygenated blood is 45 mmHg.",
    },
    {
      queNum: 21,
      question:
        "In given figure, identify A, B & C choose the correct option.",
      options: [
        "(1) A → IC (1500), B → VC [2500 ml], C → FRC 2300 ml",
        "(2) A → EC (3500), B → IC (3500 ml), C → FRV (2300 ml)",
        "(3) A → IC (3500), B → VC (4500 ml), C → FRC 2300 ml",
        "(4) A → IRV (3000), B → VC (4500 ml), C → TV 500 ml",
      ],
      answer: "(3) A → IC (3500), B → VC (4500 ml), C → FRC 2300 ml",
      img: "/assets/breathing-21.png",
    },
    {
      queNum: 22,
      question:
        "Arrange the following in the order of decreasing volume:\n(i) Vital capacity (VC)\n(ii) Functional residual capacity (FRC)\n(iii) Residual volume (RV)\n(iv) Inspiratory capacity (IC)",
      options: [
        "(1) VC > RV > FRC > IC",
        "(2) RV > FRC > IC > VC",
        "(3) IC > VC > FRC > RV",
        "(4) VC > IC > FRC > RV",
      ],
      answer: "(4) VC > IC > FRC > RV",
    },
    {
      queNum: 23,
      question:
        "Listed below are four respiratory capacities (a-d) & four jumbled respiratory volumes of an adult:\n(a) Expiratory reserve volume\n(b) Vital capacity\n(c) Expiratory capacity\n(d) Functional residual capacity\nWhich of the following is the correct matching?",
      options: [
        "(1) (a) → 3000 ml, (b) → 2500 ml",
        "(2) (b) → 6000 ml, (c) → 3000 ml",
        "(3) (b) → 2500 ml",
        "(4) (b) → 4300 ml, (d) → 2500 ml",
      ],
      answer:  "(4) (b) → 4300 ml, (d) → 2500 ml",
    },
    {
      queNum: 24,
      question:
        "Human beings have significant ability to maintain & moderate the ____ to suit the demands of body tissues, this is done by the ____ . A specialized centre present in ____ region of brain called ____ centre.",
      options: [
        "(1) Respiratory rhythm, Pneumotaxic centre, Neural system, Respiratory rhythm",
        "(2) Respiratory rhythm, Neural system, Medulla, Respiratory rhythm",
        "(3) Pneumotaxic centre, Neural system, PONS, Respiratory rhythm",
        "(4) Pneumotaxic centre, Respiratory centre, Medulla, Neural system",
      ],
      answer: "(2) Respiratory rhythm, Neural system, Medulla, Respiratory rhythm",
    },
    {
      queNum: 25,
      question:
        "Find out the incorrect statement regarding the respiratory system.",
      options: [
        "(1) Respiratory rhythm is maintained by respiratory centre in medulla region of brain",
        "(2) Pneumotaxic centre in PONS region of the brain",
        "(3) Chemosensitive area in medulla can after respiratory mechanism",
        "(4) The role of oxygen in regulation of respiratory rhythm is quite significant",
      ],
      answer: "(4) The role of oxygen in regulation of respiratory rhythm is quite significant",
    },
    {
      queNum: 26,
      question:
        "Assertion (A): CO₂ trapped as bicarbonate at tissue level & transported to the alveoli is released out as CO₂.\nReason (R): Carbonic anhydrase facilitates the trapping of CO₂.",
      options: [
        "(1) Assertion is true but reason is false",
        "(2) Assertion is true but reason is not correct explanation of assertion",
        "(3) Both assertion & reason are true and reason is correct explanation of assertion",
        "(4) Both assertion & reason are true",
      ],
      answer: "(3) Both assertion & reason are true and reason is correct explanation of assertion",
    },
    {
      queNum: 27,
      question:
        "CO₂ + H₂O → ?",
      options: [
        "(1) Carbonic anhydrase, Bicarbonate",
        "(2) Carbonic anhydrase, Carbamino-haemoglobin",
        "(3) Hydrase, Bicarbonate",
        "(4) Carbonase, Carbamino-haemoglobin",
      ],
      answer: "(1) Carbonic anhydrase, Bicarbonate",
    },
    {
      queNum: 28,
      question:
        "At the ____ where PCO₂ is low, the reaction proceeds in opposite direction leading to formation of ____ & H₂O.",
      options: [
        "(1) X = Tissue site, Y = O₂",
        "(2) X = Alveolar site, Y = CO₂",
        "(3) X = Alveolar site, Y = CO₂",
        "(4) X = Tissue site, Y = CO₂",
      ],
      answer: "(3) X = Alveolar site, Y = CO₂",
    },
    {
      queNum: 29,
      question:
        "Statement-I: Carbonic anhydrase facilitates the trapping of CO₂.\nStatement-II: CO₂ trapped as bicarbonate at tissue level & transported to alveoli is released out as CO₂.",
      options: [
        "(1) Both statement-I & statement-II are false.",
        "(2) Both statement-I & statement-II are true.",
        "(3) Statement-I is true but statement-II is false.",
        "(4) Statement-I is false but statement-II is true.",
      ],
      answer: "(2) Both statement-I & statement-II are true.",
    },
    {
      queNum: 30,
      question:
        "The ____ formed dorsally by vertebral column, ____ by the sternum, laterally by the ____.",
      options: [
        "(1) P = Ribs, Q = Dorsally, R = Thoracic chamber",
        "(2) P = Thoracic chamber, Q = Ventrally, R = Ribs",
        "(3) P = Lungs, Q = Ventrally, R = Diaphragm",
        "(4) P = Thoracic chamber, Q = Dorsally, R = Ribs",
      ],
      answer: "(2) P = Thoracic chamber, Q = Ventrally, R = Ribs",
    },
    
    // Questions 31–33 (Block 4)
    {
      queNum: 31,
      question:
        "Which of the following statement is not correct?",
      options: [
        "(1) Nasal chamber open into pharynx",
        "(2) The branching network of bronchi, bronchioles & alveoli comprise the lungs",
        "(3) External nostrils up to terminal bronchioles constitute the exchange part",
        "(4) Exchange part is site of actual diffusion of O₂ & CO₂ between blood & atmospheric air",
      ],
      answer: "(3) External nostrils up to terminal bronchioles constitute the exchange part",
    },
    {
      queNum: 32,
      question:
        "Find out True/False statements regarding respiratory system:\n(A) Respiratory system comprising two lungs associated air passage to perform this function.\n(B) Exchange of O₂ & CO₂ between deoxygenated blood & Tissue.\n(C) Inspiration & expiration carried out by creating pressure gradients.\n(D) FRC = EC + RV",
      options: [
        "(1) True, False, True, False",
        "(2) False, False, True, False",
        "(3) False, True, False, True",
        "(4) True, False, False, True",
      ],
      answer: "(1) True, False, True, False",
    },
    {
      queNum: 33,
      question:
        "Select the incorrect statement.",
      options: [
        "(1) Trachea is a straight tube extending up to mid-thoracic cavity.",
        "(2) Amphibians like frogs can respire through moist skin.",
        "(3) Cutaneous respiration takes place in fishes.",
        "(4) Double layer pleura reduces the friction of lung-surface.",
      ],
      answer: "(3) Cutaneous respiration takes place in fishes.",
    },
  ];
  
  export default QUESTIONS;
  
  