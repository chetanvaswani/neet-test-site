const QUESTIONS = [
  {
    queNum: 1,
    question:
      "Which of the following are isostructural pairs?\n" +
      "A. 24SO⁻ and 24CrO⁻\n" +
      "B. SiCl4 and TiCl4\n" +
      "C. NH3 and 3NO⁻\n" +
      "D. BCl3 and BrCl3",
    options: [
      "(1) C and D only",
      "(2) A and B only",
      "(3) A and C only",
      "(4) B and C only",
    ],
    answer: "(2) A and B only",
  },
  {
    queNum: 2,
    question:
      "Out of the following, which type of interaction is responsible for the stabilization of α-helix structure of proteins?\n",
    options: [
      "(1) Ionic bonding",
      "(2) Hydrogen bonding",
      "(3) Covalent bonding",
      "(4) Vander Waals forces",
    ],
    answer: "(2) Hydrogen bonding",
  },
  {
    queNum: 3,
    question:
      "Which of the following compounds are amphoteric?\n" +
      "A. BeO\n" +
      "B. BaO\n" +
      "C. Be(OH)₂\n" +
      "D. Sr(OH)₂",
    options: [
      "(1) Only BeO",
      "(2) BeO and Be(OH)₂",
      "(3) BaO and Sr(OH)₂",
      "(4) All are amphoteric",
    ],
    answer: "(2) BeO and Be(OH)₂",
  },
  {
    queNum: 4,
    question:
      "The correct shape and I–I–I bond angles respectively in the 3I⁻ ion are:\n",
    options: [
      "(1) Distorted trigonal planar; 135° and 90°",
      "(2) T-shaped; 180° and 90°",
      "(3) Trigonal planar; 120°",
      "(4) Linear; 180°",
    ],
    answer: "(4) Linear; 180°",
  },
  {
    queNum: 5,
    question:
      "The correct set from the following in which both pairs are in correct order of melting point is:\n",
    options: [
      "(1) LiF > LiCl ; MgO > NaCl",
      "(2) LiCl > LiF ; NaCl > MgO",
      "(3) LiF > LiCl ; NaCl > MgO",
      "(4) LiCl > LiF ; MgO > NaCl",
    ],
    answer: "(1) LiF > LiCl ; MgO > NaCl",
  },
  {
    queNum: 6,
    question:
      "Among the following allotropic forms of sulphur, the number of forms which will show paramagnetism is:\n",
    options: ["(1) 1", "(2) 2", "(3) 3", "(4) 0"],
    answer: "(1) 1",
  },
  {
    queNum: 7,
    question:
      "According to molecular theory, the species among the following that does not exist is:\n",
    options: [
      "(1) He₂⁺",
      "(2) He₂⁻",
      "(3) Be₂",
      "(4) O₂²⁻",
    ],
    answer: "(3) Be₂",
  },
  {
    queNum: 8,
    question:
      "The correct statement about B₂H₆ is:\n",
    options: [
      "(1) Terminal B–H bonds have less p-character when compared to bridging bonds.",
      "(2) The two B–H–B bonds are not of same length",
      "(3) All B–H–B angles are of 120°",
      "(4) Its fragment, BH₃, behaves as a Lewis base",
    ],
    answer:
      "(1) Terminal B–H bonds have less p-character when compared to bridging bonds.",
  },
  {
    queNum: 9,
    question:
      "Among the following, the number of halide(s) which is/are inert to hydrolysis is:\n",
    options: [
      "(1) 1",
      "(2) 2",
      "(3) 3",
      "(4) 4",
    ],
    answer: "(1) 1",
  },
  {
    queNum: 10,
    question:
      "Which among the following species has unequal bond lengths?\n",
    options: [
      "(1) BF₄⁻",
      "(2) XeF₄",
      "(3) SF₄",
      "(4) SiF₄",
    ],
    answer: "(3) SF₄",
  },
  {
    queNum: 11,
    question:
      "The correct order of bond dissociation enthalpy of halogens is:\n",
    options: [
      "(1) Cl₂ > F₂ > Br₂ > I₂",
      "(2) I₂ > Br₂ > Cl₂ > F₂",
      "(3) Cl₂ > Br₂ > F₂ > I₂",
      "(4) F₂ > Cl₂ > Br₂ > I₂",
    ],
    answer: "(3) Cl₂ > Br₂ > F₂ > I₂",
  },
  {
    queNum: 12,
    question:
      "Assertion A: Dipole-dipole interactions are the only non-covalent interactions, resulting in hydrogen bond formation.\n" +
      "Reason R: Fluorine is the most electronegative element and hydrogen bonds in HF are symmetrical.\n" +
      "Choose the most appropriate answer.\n",
    options: [
      "(1) A is false but R is true",
      "(2) Both A and R are true and R is the correct explanation of A",
      "(3) A is true but R is false",
      "(4) Both A and R are true but R is NOT the correct explanation of A",
    ],
    answer: "(1) A is false but R is true",
  },
  {
    queNum: 13,
    question:
      "Statement I: o-Nitrophenol is steam volatile due to intramolecular hydrogen bonding.\n" +
      "Statement II: o-Nitrophenol has high melting due to hydrogen bonding.\n" +
      "Choose the most appropriate answer.\n",
    options: [
      "(1) Statement I is false but Statement II is true",
      "(2) Both statements are true",
      "(3) Both statements are false",
      "(4) Statement I is true but Statement II is false",
    ],
    answer: "(4) Statement I is true but Statement II is false",
  },
  {
    queNum: 14,
    question:
      "Assertion A: In TℓI₃ (isomorphous to CsI₃), the metal is present in +1 oxidation state.\n" +
      "Reason R: Tℓ metal has fourteen f electrons in the electronic configuration.\n" +
      "Choose the most appropriate answer.\n",
    options: [
      "(1) A is correct but R is not correct",
      "(2) Both A and R are correct and R is the correct explanation of A",
      "(3) A is not correct but R is correct",
      "(4) Both A and R are correct but R is NOT the correct explanation of A",
    ],
    answer: "(4) Both A and R are correct but R is NOT the correct explanation of A",
  },
  {
    queNum: 15,
    question:
      "Match List-I with List-II:\n" +
      "List-I (Molecule):\n" +
      "  (a) Ne₂,\n" +
      "  (b) N₂,\n" +
      "  (c) F₂,\n" +
      "  (d) O₂\n" +
      "List-II (Bond order):\n" +
      "  (i) 1,\n" +
      "  (ii) 2,\n" +
      "  (iii) 0,\n" +
      "  (iv) 3\n" +
      "Choose the correct answer.\n",
    options: [
      "(1) (a)→(iii), (b)→(iv), (c)→(i), (d)→(ii)",
      "(2) (a)→(i), (b)→(ii), (c)→(iii), (d)→(iv)",
      "(3) (a)→(ii), (b)→(i), (c)→(iv), (d)→(iii)",
      "(4) (a)→(iv), (b)→(iii), (c)→(ii), (d)→(i)",
    ],
    answer: "(1) (a)→(iii), (b)→(iv), (c)→(i), (d)→(ii)",
  },
  {
    queNum: 16,
    question:
      "Match List-I with List-II:\n" +
      "List-I (Name of oxo acid):\n" +
      "  (a) Hypophosphorous acid,\n" +
      "  (b) Orthophosphoric acid,\n" +
      "  (c) Hypophosphoric acid,\n" +
      "  (d) Orthophosphorous acid\n" +
      "List-II (Oxidation state of 'P'):\n" +
      "  (i) +5,\n" +
      "  (ii) +4,\n" +
      "  (iii) +3,\n" +
      "  (iv) +2,\n" +
      "  (v) +1\n" +
      "Choose the correct answer.\n",
    options: [
      "(1) (a)-(v), (b)-(i), (c)-(ii), (d)-(iii)",
      "(2) (a)-(iv), (b)-(i), (c)-(ii), (d)-(iii)",
      "(3) (a)-(iv), (b)-(v), (c)-(ii), (d)-(iii)",
      "(4) (a)-(v), (b)-(iv), (c)-(ii), (d)-(iii)",
    ],
    answer: "(1) (a)-(v), (b)-(i), (c)-(ii), (d)-(iii)",
  },
  {
    queNum: 17,
    question:
      "Assertion A: The H–O–H bond angle in a water molecule is 104.5°.\n" +
      "Reason R: The lone pair–lone pair repulsion of electrons is higher than the bond pair–bond pair repulsion.\n" +
      "Choose the most appropriate answer.\n",
    options: [
      "(1) A is false but R is true",
      "(2) Both A and R are true, but R is not the correct explanation of A",
      "(3) A is true but R is false",
      "(4) Both A and R are true, and R is the correct explanation of A",
    ],
    answer: "(4) Both A and R are true, and R is the correct explanation of A",
  },
  {
    queNum: 18,
    question:
      "Which of the following is the INCORRECT statement regarding the structure of C₆₀?\n",
    options: [
      "(1) The six-membered rings are fused to both six- and five-membered rings.",
      "(2) Each carbon atom forms three sigma bonds.",
      "(3) The five-membered rings are fused only to six-membered rings.",
      "(4) It contains 12 six-membered rings and 24 five-membered rings.",
    ],
    answer: "(4) It contains 12 six-membered rings and 24 five-membered rings.",
  },
  {
    queNum: 19,
    question:
      "A central atom in a molecule has two lone pairs of electrons and forms three single bonds.\n" +
      "The shape of this molecule is:\n",
    options: [
      "(1) see-saw",
      "(2) planar triangular",
      "(3) T-shaped",
      "(4) trigonal pyramidal",
    ],
    answer: "(3) T-shaped",
  },
  {
    queNum: 20,
    question:
      "Which of the following compounds cannot act as a Lewis base?\n",
    options: [
      "(1) NF₃",
      "(2) PCl₅",
      "(3) SF₄",
      "(4) ClF₃",
    ],
    answer: "(2) PCl₅",
  },
  {
    queNum: 21,
    question:
      "Amongst the following, the linear species is:\n",
    options: [
      "(1) NO₂",
      "(2) Cl₂O",
      "(3) O₃",
      "(4) N₃⁻",
    ],
    answer: "(4) N₃⁻",
  },
  {
    queNum: 22,
    question:
      "AX is a covalent diatomic molecule where A and X are second row elements.\n" +
      "Based on Molecular Orbital Theory, if the bond order of AX is 2.5, what is the total number of electrons in AX? (Round off to the nearest integer)\n",
    options: [
      "(1) 14",
      "(2) 15",
      "(3) 16",
      "(4) 17",
    ],
    answer: "(2) 15",
  },
  {
    queNum: 23,
    question:
      "The number of species among the following that have two lone pairs on their central atom (round off to the nearest integer):\n" +
      "SF₄, BF₄⁻, CIF₃, AsF₃, PCl₅, BrF₅, XeF₄, SF₆\n",
    options: [
      "(1) 1",
      "(2) 2",
      "(3) 3",
      "(4) 4",
    ],
    answer: "(2) 2",
  },
  {
    queNum: 24,
    question:
      "A xenon compound 'A' upon partial hydrolysis gives XeO₂F₂.\n" +
      "The number of lone pairs of electrons present in compound A is (round off to the nearest integer):\n",
    options: [
      "(1) 17",
      "(2) 18",
      "(3) 19",
      "(4) 20",
    ],
    answer: "(3) 19",
  },
  {
    queNum: 25,
    question:
      "The number of lone pairs of electrons on the central iodine atom in I₃⁻ is:\n",
    options: [
      "(1) 1",
      "(2) 2",
      "(3) 3",
      "(4) 4",
    ],
    answer: "(3) 3",
  },
  {
    queNum: 26,
    question:
      "The hybridisations of the atomic orbitals of nitrogen in NO₂, NO⁻, and NH₄⁺ respectively are:\n",
    options: [
      "(1) sp³, sp² and sp",
      "(2) sp, sp² and sp³",
      "(3) sp³, sp and sp²",
      "(4) sp², sp and sp³",
    ],
    answer: "(4) sp², sp and sp³",
  },
  {
    queNum: 27,
    question:
      "Match List-I with List-II:\n" +
      "List-I (Species):\n" +
      "  (a) SF₄,\n" +
      "  (b) IF₅,\n" +
      "  (c) NO₂⁺,\n" +
      "  (d) NH₄⁺\n" +
      "List-II (Hybrid Orbitals):\n" +
      "  (i) sp₃d₂,\n" +
      "  (ii) d₂sp₃,\n" +
      "  (iii) sp,\n" +
      "  (iv) sp³,\n" +
      "  (v) sp\n" +
      "Choose the correct answer.\n",
    options: [
      "(1) (a)-(i), (b)-(ii), (c)-(v) and (d)-(iii)",
      "(2) (a)-(ii), (b)-(i), (c)-(iv) and (d)-(v)",
      "(3) (a)-(iii), (b)-(i), (c)-(v) and (d)-(iv)",
      "(4) (a)-(iv), (b)-(iii), (c)-(ii) and (d)-(v)",
    ],
    answer: "(3) (a)-(iii), (b)-(i), (c)-(v) and (d)-(iv)",
  },
  {
    queNum: 28,
    question:
      "The number of sigma bonds in CH₃–C≡C–CH is:\n",
    options: [
      "(1) 8",
      "(2) 9",
      "(3) 10",
      "(4) 11",
    ],
    answer: "(3) 10",
  },
  {
    queNum: 29,
    question:
      "In the following, select the correct bond order sequence (as indicated by the symbols):\n",
    options: [
      "(1) – + – > > >",
      "(2) + – – > > >",
      "(3) + – – > > >",
      "(4) – – + > > >",
    ],
    answer: "(3) + – – > > >",
  },
  {
    queNum: 30,
    question:
      "Identify the species having one π-bond and the maximum number of canonical forms:\n",
    options: [
      "(1) SO₃",
      "(2) O₂",
      "(3) SO₂",
      "(4) CO₃²⁻",
    ],
    answer: "(4) CO₃²⁻",
  },
  {
    queNum: 31,
    question:
      "The oxidation states of 'P' in H₄P₂O₇, H₄P₂O₅, and H₄P₂O₆, respectively, are:\n",
    options: [
      "(1) 7, 5 and 6",
      "(2) 5, 4 and 3",
      "(3) 5, 3 and 4",
      "(4) 6, 4 and 5",
    ],
    answer: "(3) 5, 3 and 4",
  },
  {
    queNum: 32,
    question:
      "Assertion A: Lithium halides are somewhat covalent in nature.\n" +
      "Reason R: Lithium possesses high polarization capability.\n" +
      "Choose the most appropriate answer.\n",
    options: [
      "(1) A is true but R is false",
      "(2) A is false but R is true",
      "(3) Both A and R are true but R is NOT the correct explanation of A",
      "(4) Both A and R are true and R is the correct explanation of A",
    ],
    answer: "(4) Both A and R are true and R is the correct explanation of A",
  },
  {
    queNum: 33,
    question:
      "In gaseous triethyl amine the '–C–N–C–' bond angle is (in degrees):\n",
    options: [
      "(1) 102",
      "(2) 108",
      "(3) 112",
      "(4) 120",
    ],
    answer: "(2) 108",
  },
  {
    queNum: 34,
    question:
      "The difference between bond orders of CO and NO⁺ is x/2.\n" +
      "Find x (round off to the nearest integer):\n",
    options: [
      "(1) 0",
      "(2) 1",
      "(3) 2",
      "(4) 3",
    ],
    answer: "(1) 0",
  },
  {
    queNum: 35,
    question:
      "The number of Cl=O bonds in chlorous acid, chloric acid, and perchloric acid respectively are:\n",
    options: [
      "(1) 3, 1 and 1",
      "(2) 4, 1 and 0",
      "(3) 1, 1 and 3",
      "(4) 1, 2 and 3",
    ],
    answer: "(4) 1, 2 and 3",
  },
  {
    queNum: 36,
    question:
      "The total number of electrons in all bonding molecular orbitals of O₂²⁻ is (round off to the nearest integer):\n",
    options: [
      "(1) 8",
      "(2) 10",
      "(3) 12",
      "(4) 14",
    ],
    answer: "(2) 10",
  },
  {
    queNum: 37,
    question:
      "AB₃ is an interhalogen T-shaped molecule.\n" +
      "The number of lone pairs of electrons on A is:\n",
    options: [
      "(1) 1",
      "(2) 2",
      "(3) 3",
      "(4) 4",
    ],
    answer: "(2) 2",
  },
  {
    queNum: 38,
    question:
      "The interaction energy of London forces between two particles is proportional to rˣ, where r is the distance between the particles.\n" +
      "What is the value of x?\n",
    options: [
      "(1) 3",
      "(2) -3",
      "(3) -6",
      "(4) 6",
    ],
    answer: "(3) -6",
  },
  {
    queNum: 39,
    question:
      "The number of non-ionisable hydrogen atoms present in the final product obtained from the hydrolysis of PCl₅ is:\n",
    options: [
      "(1) 0",
      "(2) 2",
      "(3) 1",
      "(4) 3",
    ],
    answer: "(1) 0",
  },
  {
    queNum: 40,
    question:
      "The bond order and magnetic behaviour of O₂⁻ ion are, respectively:\n",
    options: [
      "(1) 1.5 and paramagnetic",
      "(2) 1.5 and diamagnetic",
      "(3) 2 and diamagnetic",
      "(4) 1 and paramagnetic",
    ],
    answer: "(1) 1.5 and paramagnetic",
  },
  {
    queNum: 41,
    question:
      "Assertion (A): Barium carbonate is insoluble in water and is highly stable.\n" +
      "Reason (R): The thermal stability of the carbonates increases with increasing cationic size.\n" +
      "Choose the most appropriate answer.\n",
    options: [
      "(1) Both (A) and (R) are true but (R) is the true explanation of (A)",
      "(2) (A) is true but (R) is false",
      "(3) Both (A) and (R) are true and (R) is not the true explanation of (A)",
      "(4) (A) is false but (R) is true",
    ],
    answer: "(1) Both (A) and (R) are true but (R) is the true explanation of (A)",
  },
  {
    queNum: 42,
    question:
      "Match List–I with List–II:\n" +
      "List–I:\n" +
      "  (a) XeF₂,\n" +
      "  (b) XeO₂F₂,\n" +
      "  (c) XeO₃F₂,\n" +
      "  (d) XeF₄\n" +
      "List–II:\n" +
      "  (i) 0,\n" +
      "  (ii) 1,\n" +
      "  (iii) 2,\n" +
      "  (iv) 3\n" +
      "Choose the correct answer.\n",
    options: [
      "(1) (a)–(iv), (b)–(i), (c)–(ii), (d)–(iii)",
      "(2) (a)–(iii), (b)–(iv), (c)–(ii), (d)–(i)",
      "(3) (a)–(iii), (b)–(ii), (c)–(iv), (d)–(i)",
      "(4) (a)–(iv), (b)–(ii), (c)–(i), (d)–(iii)",
    ],
    answer: "(4) (a)–(iv), (b)–(ii), (c)–(i), (d)–(iii)",
  },
  {
    queNum: 43,
    question:
      "In which one of the following molecules is the strongest back donation of an electron pair from halide to boron expected?\n",
    options: [
      "(1) BCl₃",
      "(2) BF₃",
      "(3) BBr₃",
      "(4) BI₃",
    ],
    answer: "(2) BF₃",
  },
  {
    queNum: 44,
    question:
      "The number of species having non-pyramidal shape among the following is:\n",
    options: [
      "(1) 1",
      "(2) 2",
      "(3) 3",
      "(4) 4",
    ],
    answer: "(3) 3",
  },
  {
    queNum: 45,
    question:
      "The number of hydrogen bonded water molecules associated with the stoichiometry of CuSO₄·5H₂O is:\n",
    options: [
      "(1) 1",
      "(2) 2",
      "(3) 3",
      "(4) 4",
    ],
    answer: "(1) 1",
  },
  {
    queNum: 46,
    question:
      "Which one of the following correctly represents the order of stability of oxides, X₂O (where X is a halogen)?\n",
    options: [
      "(1) Br > Cl > I",
      "(2) Br > I > Cl",
      "(3) Cl > I > Br",
      "(4) I > Cl > Br",
    ],
    answer: "(4) I > Cl > Br",
  },
  {
    queNum: 47,
    question:
      "According to molecular orbital theory, the number of unpaired electrons in O₂⁻ is:\n",
    options: [
      "(1) 0",
      "(2) 1",
      "(3) 2",
      "(4) 3",
    ],
    answer: "(1) 0",
  },
  {
    queNum: 48,
    question:
      "Number of paramagnetic oxides among the following—Li₂O, CaO, Na₂O₂, KO₂, MgO, and K₂O—is:\n",
    options: [
      "(1) 1",
      "(2) 2",
      "(3) 3",
      "(4) 0",
    ],
    answer: "(1) 1",
  },
  {
    queNum: 49,
    question:
      "The spin-only magnetic moment value of 2B⁺ species (in BM, rounded to the nearest integer) is:\n",
    options: [
      "(1) 1.73",
      "(2) 2",
      "(3) 3",
      "(4) 4",
    ],
    answer: "(2) 2",
  },
];

export default QUESTIONS;