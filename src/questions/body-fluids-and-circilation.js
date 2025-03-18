const QUESTIONS = [
    {
      queNum: 1,
      question:
        "Atrial diastole takes place when :-",
      options: [
        "(1) Right atrium is filled with blood",
        "(2) Left atrium is filled with blood",
        "(3) Both atria are filled with blood",
        "(4) Both ventricles are filled with blood",
      ],
      answer: "(4) Both ventricles are filled with blood",
    },
    {
      queNum: 2,
      question:
        "When two atria contract simultaneously and results in the blood pumping into ventricles, this is called :-",
      options: [
        "(1) Atrial diastole",
        "(2) Atrial systole",
        "(3) Ventricular diastole",
        "(4) Ventricular systole",
      ],
      answer: "(2) Atrial systole",
    },
    {
      queNum: 3,
      question:
        "Blood circulation takes following course in the heart of man :-",
      options: [
        "(1) Left atrium - left ventricle - body organ - right atrium - right ventricle",
        "(2) Right atrium - left ventricle",
        "(3) Left atrium - left ventricle - lungs - right atrium – right ventricle",
        "(4) Right atrium - left atrium - left ventricle - right ventricle - body parts",
      ],
      answer: "(1) Left atrium - left ventricle - body organ - right atrium - right ventricle",
    },
    {
      queNum: 4,
      question:
        "To reach the left side of the heart the blood must pass through :-",
      options: [
        "(1) Sinus venosus",
        "(2) Kidneys",
        "(3) Liver",
        "(4) Lungs",
      ],
      answer: "(4) Lungs",
    },
    {
      queNum: 5,
      question:
        "Blood Capillaries are made of :-",
      options: [
        "(1) Endothelium and thin coat of connective tissue",
        "(2) Endothelium and thin coat of muscle fibres",
        "(3) Endothelium and thin coat of connective tissue and muscle fibres",
        "(4) Only endothelium",
      ],
      answer: "(4) Only endothelium",
    },
    {
      queNum: 6,
      question:
        "Serum differs from plasma as it lacks :-",
      options: [
        "(1) Albumins",
        "(2) Globulins",
        "(3) Antibodies",
        "(4) Clotting factors",
      ],
      answer: "(4) Clotting factors",
    },
    {
      queNum: 7,
      question:
        "Angina occurs to :-",
      options: [
        "(1) When enough oxygen is reaching to the heart muscle",
        "(2) When not enough oxygen is reaching to the heart muscle",
        "(3) The deposition of carbohydrates in artery",
        "(4) The deposition of protein in artery",
      ],
      answer: "(2) When not enough oxygen is reaching to the heart muscle",
    },
    {
      queNum: 8,
      question:
        "Ist Heart sound is due to :-",
      options: [
        "(1) Closure of semilunar valve",
        "(2) Closure of Pulmonary & Aortic valve",
        "(3) Vibration just after closure of Mitral & Tricuspid valve",
        "(4) Vibration after closure of Pulmonary & Aortic valve",
      ],
      answer: "(3) Vibration just after closure of Mitral & Tricuspid valve",
    },
    {
      queNum: 9,
      question:
        "The ‘Lub’ and ‘Dub’ heart sounds are due to :-",
      options: [
        "(1) Opening of heart valves",
        "(2) Action of papillary muscles",
        "(3) Closing of heart valves",
        "(4) Activity of the pace maker",
      ],
      answer: "(3) Closing of heart valves",
    },
    {
      queNum: 10,
      question:
        "When two atria contract simultaneously and results in blood pumping into the ventricles, this is called :-",
      options: [
        "(1) Atrial diastole",
        "(2) Atrial systole",
        "(3) Ventricular diastole",
        "(4) Ventricular systole",
      ],
      answer: "(2) Atrial systole",
    },
    {
      queNum: 11,
      question:
        "Given below are two statements:\nStatement-I: Lymph is derived from the blood vascular system and drains back to the blood.\nStatement-II: Lymph is an important carrier for nutrients, hormones, and fatty acids.\nChoose the most appropriate answer:",
      options: [
        "(1) Both Statement-I and II are incorrect",
        "(2) Statement-I is correct but Statement-II is incorrect",
        "(3) Statement-I is incorrect and Statement-II is correct",
        "(4) Both Statement-I and Statement-II are correct",
      ],
      answer: "(4) Both Statement-I and Statement-II are correct",
    },
    {
      queNum: 12,
      question:
        "During ventricular systole :-",
      options: [
        "(1) Oxygenated blood is pumped into the aorta and deoxygenated blood is pumped into the pulmonary artery",
        "(2) Oxygenated blood is pumped into the pulmonary artery and deoxygenated blood is pumped into the aorta",
        "(3) Oxygenated blood is pumped into the aorta and deoxygenated blood is pumped into the pulmonary vein",
        "(4) Oxygenated blood is pumped into the pulmonary vein and deoxygenated blood is pumped into the pulmonary artery",
      ],
      answer: "(1) Oxygenated blood is pumped into the aorta and deoxygenated blood is pumped into the pulmonary artery",
    },
    {
      queNum: 13,
      question:
        "P wave of ECG indicates :-",
      options: [
        "(1) Activation of the SA node and depolarization of atrial muscles",
        "(2) Depolarization of atrial muscles and repolarization of the atria along with depolarization of ventricles",
        "(3) Activation of the SA node and spread of excitation from the AV node to Purkinje fibres",
        "(4) Activation of the SA node, depolarization of atrial muscles and spread of excitation from the AV node to Purkinje fibres",
      ],
      answer: "(1) Activation of the SA node and depolarization of atrial muscles",
    },
    {
      queNum: 14,
      question:
        "Which is a correct pair of an ECG wave with respect to the cardiac event?",
      options: [
        "(1) P wave – depolarization of the ventricles",
        "(2) P wave – depolarization of the AV node",
        "(3) QRS wave – depolarization of the ventricles",
        "(4) T-wave – repolarization of the atria",
      ],
      answer: "(3) QRS wave – depolarization of the ventricles",
    },
    {
      queNum: 15,
      question:
        "True about veins is :-",
      options: [
        "(1) All veins carry deoxygenated blood except the coronary vein",
        "(2) All veins carry oxygenated blood except the pulmonary vein",
        "(3) Veins carry blood from organs toward the heart",
        "(4) Veins carry blood from the heart toward the organs",
      ],
      answer: "(3) Veins carry blood from organs toward the heart",
    },
    {
      queNum: 16,
      question:
        "Normal platelets count is :-",
      options: [
        "(1) 5 – 5.5 million/mm³ of blood",
        "(2) 6000 – 8000 /mm³ of blood",
        "(3) 1.5 – 3.5 lakh/mm³ of blood",
        "(4) 0.5 – 1.5 lakh/mm³ of blood",
      ],
      answer: "(3) 1.5 – 3.5 lakh/mm³ of blood",
    },
    {
      queNum: 17,
      question:
        "Leucocytes are characterised by :-\nI. They are nucleated.\nII. They are enucleated like RBC.\nIII. They are 6000-8000/mm³ of blood.\nIV. They are long lived.\nV. They are short lived.\nChoose the appropriate option:",
      options: [
        "(1) I, III and V",
        "(2) II, IV and V",
        "(3) I, IV and V",
        "(4) I, III and IV",
      ],
      answer: "(1) I, III and V",
    },
    {
      queNum: 18,
      question:
        "Blood group A has :-",
      options: [
        "(1) Antigen A and antibody B",
        "(2) Antigen B and antibody A",
        "(3) Antigens A and B",
        "(4) Antibody A and B",
      ],
      answer: "(1) Antigen A and antibody B",
    },
    {
      queNum: 19,
      question:
        "Blood without corpuscles and fibrinogen is called :-",
      options: [
        "(1) Lymph",
        "(2) Serum",
        "(3) Plasma",
        "(4) Platelets",
      ],
      answer: "(2) Serum",
    },
    {
      queNum: 20,
      question:
        "Universal receiver is :-",
      options: [
        "(1) Blood group O+",
        "(2) Blood group O–",
        "(3) Blood group AB+",
        "(4) Blood group AB–",
      ],
      answer: "(3) Blood group AB+",
    },
    {
      queNum: 21,
      question:
        "Blood group which is considered as universal donor :-",
      options: [
        "(1) Blood group A",
        "(2) Blood group B",
        "(3) Blood group O",
        "(4) Blood group AB",
      ],
      answer: "(3) Blood group O",
    },
    {
      queNum: 22,
      question:
        "Fibrinogen is converted into fibrin by :-",
      options: [
        "(1) Thrombin",
        "(2) Prothrombin",
        "(3) Heparin",
        "(4) Thromboplastin",
      ],
      answer: "(1) Thrombin",
    },
    {
      queNum: 23,
      question:
        "Clotting disorders occur mainly due to the reduction in the number of :-",
      options: [
        "(1) Granulocytes",
        "(2) RBC",
        "(3) WBC",
        "(4) Platelets",
      ],
      answer: "(4) Platelets",
    },
    {
      queNum: 24,
      question:
        "Grouping of ABO blood is based on the :-",
      options: [
        "(1) Surface antigens present on RBCs",
        "(2) Surface lipids present on the cell membrane",
        "(3) Nature of all constituents",
        "(4) Nature of RBC and WBC",
      ],
      answer: "(1) Surface antigens present on RBCs",
    },
    {
      queNum: 25,
      question:
        "Factors for coagulation or clotting of the blood are present in the ...A... in an ...B... form. Plasma without the clotting factors is called ...C... . Choose the correct option:",
      options: [
        "(1) A-Plasma, B-inactive, C-serum",
        "(2) A-Plasma, B-active, C-serum",
        "(3) A-Plasma, B-inactive, C-lymph",
        "(4) A-Plasma, B-active, C-lymph",
      ],
      answer: "(1) A-Plasma, B-inactive, C-serum",
    },
    {
      queNum: 26,
      question:
        "If the bicuspid valve is not working properly then :-",
      options: [
        "(1) Blood will go back to the right atrium",
        "(2) Supply of blood to the lungs will be reduced",
        "(3) Supply of blood to the body will be reduced",
        "(4) Supply of blood in the pulmonary artery will be reduced",
      ],
      answer: "(1) Blood will go back to the right atrium",
    },
    {
      queNum: 27,
      question:
        "Which chamber of the heart receives deoxygenated blood from the vena cava?",
      options: [
        "(1) Left atrium",
        "(2) Right atrium",
        "(3) Left ventricle",
        "(4) All of the above",
      ],
      answer: "(2) Right atrium",
    },
    {
      queNum: 28,
      question:
        "In DLC, neutrophils are found as :-",
      options: [
        "(1) 0 - 2%",
        "(2) 2 - 8%",
        "(3) 25%",
        "(4) 65%",
      ],
      answer: "(4) 65%",
    },
    {
      queNum: 29,
      question:
        "Match the following:\nColumn-I: (A) Fish, (B) Amphibia, (C) Birds\nColumn-II: (i) 3-chambered heart, (ii) Incomplete double circulation, (iii) 4-chambered heart, (iv) Single circulation, (v) 2-chambered heart, (vi) Double circulation\nChoose the correct matching:",
      options: [
        "(1) A → (i), (ii); B → (iii), (vi); C → (iv), (v)",
        "(2) A → (v), (iv); B → (i), (ii); C → (iii), (vi)",
        "(3) A → (i), (iv); B → (v), (ii); C → (iii), (vi)",
        "(4) A → (iii), (ii); B → (i), (iv); C → (v), (vi)",
      ],
      answer: "(2) A → (v), (iv); B → (i), (ii); C → (iii), (vi)",
    },
    {
      queNum: 30,
      question:
        "Birds and Mammals have :-",
      options: [
        "(1) Single and closed type circulation",
        "(2) Double and closed type circulation",
        "(3) Double and open type circulation",
        "(4) Single and open type circulation",
      ],
      answer: "(2) Double and closed type circulation",
    },
    {
      queNum: 31,
      question:
        "Prothrombin is found in :-",
      options: [
        "(1) Intestine and helps in cellulose digestion",
        "(2) Blood and gives red colour",
        "(3) Liver and helps in production of bile",
        "(4) Blood and helps in blood clotting",
      ],
      answer: "(4) Blood and helps in blood clotting",
    },
  ];
  
  export default QUESTIONS;
  