const QUESTIONS = [
    // ----- File A: molecular.pdf (26 Questions)
    {
      queNum: 1,
      question:
        "Assertion: In capping an unusual nucleotide, methyl guanosine triphosphate is added to the 5' end of hn‑RNA.\nReason: In tailing, adenylate residues are added at the 3' end in a template‑independent manner.",
      options: [
        "(1) Both Assertion & Reason are True & the Reason is a correct explanation of the Assertion.",
        "(2) Both Assertion & Reason are True but Reason is not a correct explanation of the Assertion.",
        "(3) Assertion is True but the Reason is False.",
        "(4) Both Assertion & Reason are False.",
      ],
      answer:
        "(2) Both Assertion & Reason are True but Reason is not a correct explanation of the Assertion.",
    },
    {
      queNum: 2,
      question:
        "Untranslated regions (UTR) are present on mRNA at:",
      options: [
        "(1) 5' end before start codon and 3' end before start codon",
        "(2) 5' end before start codon and 3' end after stop codon",
        "(3) 5' end after stop codon and 3' end before start codon",
        "(4) 5' end after stop codon and 3' end after stop codon",
      ],
      answer: "(2) 5' end before start codon and 3' end after stop codon",
    },
    {
      queNum: 3,
      question:
        "The below figure represents:",
      options: [
        "(1) Chain termination during transcription",
        "(2) Chain initiation in the presence of σ factor",
        "(3) Chain elongation catalysed by RNA polymerase alone",
        "(4) Binding of σ factor with promoter sequence on DNA",
      ],
      answer: "(2) Chain initiation in the presence of σ factor",
      img: "/assets/molecular-3.png"
    },
    {
      queNum: 4,
      question: "Satellite DNA –" + "(1) Is classified into categories such as microsatellites and minisatellites based on base composition, segment length and number of repeats" +
      "(2) Normally does not code for any protein" +
      "(3) Shows polymorphism" +
      "(4) Forms the basis of DNA fingerprinting",
      options: [
        "(1) A, C",
        "(2) A, B, C, D",
        "(3) B, C, D",
        "(4) A, B, C",
      ],
      answer: "(2) A, B, C, D",  // Note: Option (2) here means “A, B, C, D” as per the original answer key.
    },
    {
      queNum: 5,
      question:
        "Allelic sequence variations, where more than one variant (allele) at a locus in a human population has a frequency greater than 0.01, is referred to as:",
      options: [
        "(1) Incomplete dominance",
        "(2) EST",
        "(3) snRNP",
        "(4) DNA polymorphism",
      ],
      answer: "(4) DNA polymorphism",
    },
    {
      queNum: 6,
      question:
        "In human:\nI. Non‑coding DNA is abundant.\nII. Less than 2% of the genome codes for protein.\nIII. The function of more than 50% of genes is unknown.\nIV. Total number of genes is 30000.\nSelect the correct combination:",
      options: [
        "(1) I, II, III and IV",
        "(2) I and III",
        "(3) I, II and IV",
        "(4) I, II and III",
      ],
      answer: "(4) I, II and III",
    },
    {
      queNum: 7,
      question:
        "Which set of RNA are involved in protein synthesis?",
      options: [
        "(1) tRNA, mRNA, rRNA",
        "(2) tRNA, mRNA, hnRNA",
        "(3) hnRNA, mRNA, rRNA",
        "(4) hnRNA, tRNA, rRNA",
      ],
      answer: "(1) tRNA, mRNA, rRNA",
    },
    {
      queNum: 8,
      question:
        "Assertion: DNA‑dependent RNA polymerase catalyses transcription of all types of RNA in bacteria.\nReason: A cistron is a segment of DNA coding for a polypeptide.",
      options: [
        "(1) Both Assertion & Reason are True & the Reason is a correct explanation of the Assertion.",
        "(2) Both Assertion & Reason are True but Reason is not a correct explanation of the Assertion.",
        "(3) Assertion is True but the Reason is False.",
        "(4) Both Assertion & Reason are False.",
      ],
      answer:
        "(2) Both Assertion & Reason are True but Reason is not a correct explanation of the Assertion.",
    },
    {
      queNum: 9,
      question:
        "Assertion: The repressor of the operon is synthesized all the time.\nReason: The regulator gene is constitutive.",
      options: [
        "(1) Both Assertion & Reason are True & the Reason is a correct explanation of the Assertion.",
        "(2) Both Assertion & Reason are True but the Reason is not a correct explanation of the Assertion.",
        "(3) Assertion is True but the Reason is False.",
        "(4) Both Assertion & Reason are False.",
      ],
      answer:
        "(2) Both Assertion & Reason are True but the Reason is not a correct explanation of the Assertion.",
    },
    {
      queNum: 10,
      question:
        "A molecule that can act as genetic material must not have the following property:",
      options: [
        "(1) It should be chemically and structurally highly active",
        "(2) It should be able to generate its replica",
        "(3) It should provide scope for slow changes",
        "(4) It should be structurally more stable",
      ],
      answer: "(1) It should be chemically and structurally highly active",
    },
    {
      queNum: 11,
      question:
        "Which of the following statement forms the basis of DNA fingerprinting?",
      options: [
        "(1) The relative proportions of purines and pyrimidines in DNA",
        "(2) The relative differences in VNTRs of different individuals",
        "(3) The relative difference in the DNA occurrence in blood, skin, and saliva",
        "(4) The relative amount of DNA in the ridges and grooves of the fingerprints",
      ],
      answer: "(2) The relative differences in VNTRs of different individuals",
    },
    {
      queNum: 12,
      question:
        "Select the correct statement regarding protein synthesis:",
      options: [
        "(1) When the small subunit of the ribosome encounters an mRNA, translation begins",
        "(2) Peptidase catalyses the formation of the peptide bond",
        "(3) UTRs are present between the start codon and stop codon",
        "(4) At the end of translation, the release factor binds to the initiation codon",
      ],
      answer:
        "(1) When the small subunit of the ribosome encounters an mRNA, translation begins",
    },
    {
      queNum: 13,
      question:
        "Choose the incorrect statement regarding the observations drawn from the human genome project:",
      options: [
        "(1) Repetitive sequences are stretches of RNA",
        "(2) Less than 2 per cent of the genome codes for protein",
        "(3) SNPs help in tracing human history",
        "(4) Repetitive sequences make up a very large portion of the human genome",
      ],
      answer: "(1) Repetitive sequences are stretches of RNA",
    },
    {
      queNum: 14,
      question:
        "Which of the following statement is incorrect?",
      options: [
        "(1) VNTR belong to a class of minisatellite DNA",
        "(2) DNA sequencers work on the principle developed by F. Sanger",
        "(3) The Human Genome Project was coordinated by the US Department of Energy and the National Institutes of Health",
        "(4) DNA fingerprinting involves identifying similarities in repetitive DNA",
      ],
      answer: "(4) DNA fingerprinting involves identifying similarities in repetitive DNA",
    },
    {
      queNum: 15,
      question:
        "Identify the incorrect statement regarding gene structure:",
      options: [
        "(1) In prokaryotes, the gene is polycistronic",
        "(2) In eukaryotes, structural genes have interrupted coding sequences",
        "(3) Eukaryotes have split gene arrangement",
        "(4) Intervening sequences appear in mature RNA",
      ],
      answer: "(4) Intervening sequences appear in mature RNA",
    },
    {
      queNum: 16,
      question:
        "Find out the incorrect statement regarding the process of RNA formation on the DNA template:",
      options: [
        "(1) Uracil is present in RNA in place of thymine",
        "(2) The complex of DNA and protein in a chromosome is called chromatin",
        "(3) Heterochromatin is the highly condensed form of chromatin",
        "(4) The process involved in RNA formation on the DNA template is called replication",
      ],
      answer: "(4) The process involved in RNA formation on the DNA template is called replication",
    },
    // -- Additional File A Questions (17–26)
    {
        queNum: 17,
        question:
        "Select the two correct statements out of the four (i–iv) given below about lac operon:\n(i) Glucose or galactose may bind with the repressor and inactivate it.\n(ii) In the absence of lactose, the repressor binds with the operator region.\n(iii) The z-gene codes for permease.\n(iv) This was elucidated by Jacob and Monod.",
        options: [
        "(1) (ii) and (iii)",
        "(2) (i) and (iii)",
        "(3) (ii) and (iv)",
        "(4) (i) and (ii)",
        ],
        answer: "(1) (ii) and (iii)",
    },
    {
        queNum: 18,
        question:
        "Match the column–I with column–II and choose the correct combination from the given options:\n\nColumn - I     | Column - II\nA. Helicase    | (I) Joining of nucleotides\nB. Gyrase      | (II) Opening of DNA helix\nC. Primase     | (III) Releasing of supercoils\nD. DNA polymerase III | (IV) RNA priming",
        options: [
        "(1) A–II; B–I; C–III; D–IV",
        "(2) A–II; B–I; C–IV; D–III",
        "(3) A–IV; B–III; C–I; D–II",
        "(4) A–II; B–III; C–IV; D–I",
        ],
        answer: "(4) A–II; B–III; C–IV; D–I",
    },
    {
        queNum: 19,
        question:
        "Match the following and choose the correct combination from the given options:\n\nColumn - I        | Column - II\nA. Splicing       | (I) Lac operon\nB. Okazaki fragments | (II) Lagging strands\nC. Jacob and Monod | (III) Lactose\nD. Inducer        | (IV) Removal of intron",
        options: [
        "(1) A–IV; B–II; C–I; D–III",
        "(2) A–II; B–I; C–IV; D–III",
        "(3) A–IV; B–III; C–I; D–II",
        "(4) A–II; B–III; C–I; D–IV",
        ],
        answer: "(1) A–IV; B–II; C–I; D–III",
    },
    {
        queNum: 20,
        question:
        "Match the column–I with column–II and choose the correct combination from the given options:\n\nColumn - I      | Column - II\nA. Operator site | (I) Binding site for RNA polymerase\nB. Promoter site | (II) Binding site for repressor molecule\nC. Structural gene | (III) Codes for enzyme\nD. Regulator gene  | (IV) Codes for repressor molecules",
        options: [
        "(1) A–II; B–I; C–III; D–IV",
        "(2) A–II; B–I; C–IV; D–III",
        "(3) A–IV; B–III; C–I; D–II",
        "(4) A–II; B–III; C–I; D–IV",
        ],
        answer: "(1) A–II; B–I; C–III; D–IV",
    },
    {
        queNum: 21,
        question:
        "Match column–I with column–II and select the correct combination from the given options:\n\nColumn - I    | Column - II\nA. Sigma factor | (I) 5′–3′\nB. Capping      | (II) Initiation\nC. Tailing      | (III) Termination\nD. Coding strand| (IV) 5′ end, (V) 3′ end",
        options: [
        "(1) A–III; B–V; C–IV; D–II",
        "(2) A–II; B–IV; C–V; D–I",
        "(3) A–II; B–IV; C–V; D–III",
        "(4) A–III; B–V; C–IV; D–I",
        ],
        answer: "(2) A–II; B–IV; C–V; D–I",
    },
    {
        queNum: 22,
        question:
        "Which of the following DNA is undigested by restriction endonuclease in this diagram?",
        options: [
        "(1) Lane 1",
        "(2) Lane 2",
        "(3) Lane 3",
        "(4) Lane 4",
        ],
        answer: "(1) Lane 1",
        img: "/assets/molecular-22.png"
    },
    {
        queNum: 23,
        question:
        "Match the column–I with column–II and select the correct combination from the given options:\n\nColumn - I      | Column - II\nA. Griffith     | (I) Nucleoid\nB. Hershey and Chase | (II) Active chromatin\nC. Prokaryotic DNA | (III) T₂-phage\nD. Euchromatin  | (IV) Transformation",
        options: [
        "(1) A–II; B–I; C–III; D–IV",
        "(2) A–III; B–I; C–IV; D–II",
        "(3) A–IV; B–III; C–I; D–II",
        "(4) A–II; B–III; C–I; D–IV",
        ],
        answer: "(3) A–IV; B–III; C–I; D–II",
    },
    {
        queNum: 24,
        question:
        "Match the enzymes given in column–I with its function given in column–II and select the correct option:\n\nColumn–I        | Column–II\nA. β-galactosidase | (I) Joining of DNA fragments\nB. Permease        | (II) Peptide bond formation\nC. Ligase          | (III) Break down of lactose\nD. Ribozyme        | (IV) Increase permeability for lactose",
        options: [
        "(1) A–II; B–I; C–IV; D–III",
        "(2) A–III; B–IV; C–I; D–II",
        "(3) A–II; B–IV; C–I; D–III",
        "(4) A–I; B–II; C–IV; D–III",
        ],
        answer: "(2) A–III; B–IV; C–I; D–II",
    },
    {
        queNum: 25,
        question:
        "Which of the following statements about RNA polymerase are correct?\n(i) RNA polymerase I transcribes rRNAs.\n(ii) RNA polymerase II transcribes snRNAs.\n(iii) RNA polymerase III transcribes hnRNA.\n(iv) RNA polymerase II transcribes hnRNAs.",
        options: [
        "(1) (i) and (ii)",
        "(2) (i) and (iii)",
        "(3) (ii) and (iii)",
        "(4) (i) and (iv)",
        ],
        answer: "(4) (i) and (iv)",
    },
    {
        queNum: 26,
        question:
        "Which of the following statements are correct?\n(i) r-RNA provides the template for synthesis of proteins.\n(ii) t-RNA brings amino acids and reads the genetic code.\n(iii) RNA polymerase binds to promoter and initiates transcription using sigma factor.\n(iv) A segment of DNA coding for polypeptide is called intron.",
        options: [
        "(1) (i) and (iii)",
        "(2) (i) and (ii)",
        "(3) (i), (ii) and (iii)",
        "(4) (ii) and (iii)",
        ],
        answer: "(4) (ii) and (iii)",
    },      
    // ----- File B: molecular-basis-of-Inheritance-18-09-2023.pdf (30 Questions; renumbered 27–56)
    {
      queNum: 27,
      question:
        "N15–N15 DNA molecule is continuously replicated in N14 medium; then what is the % of heavy DNA in the 4th generation?",
      options: [
        "(1) 25%",
        "(2) 0%",
        "(3) 12.5%",
        "(4) 100%",
      ],
      answer: "(2) 0%",
    },
    {
      queNum: 28,
      question:
        "Identify the process given here and the place in a eukaryotic cell where it takes place:",
      options: [
        "(1) DNA replication – Ribosome",
        "(2) Transcription – Nucleus",
        "(3) DNA replication – Nucleus",
        "(4) Translation – Cytoplasm",
      ],
      answer: "(3) DNA replication – Nucleus",
      img: "/assets/molecular-28.png"
    },
    {
      queNum: 29,
      question:
        "Deoxyribonucleoside triphosphate serves the dual purpose of ___ and ___ in the process of DNA replication:",
      options: [
        "(1) Enzyme, substrate",
        "(2) Catalyst, substrate",
        "(3) Substrate, energy provider",
        "(4) Energy, mutation provider",
      ],
      answer: "(3) Substrate, energy provider",
    },
    {
      queNum: 30,
      question:
        "A N14–N14 DNA molecule is continuously replicated in N15 medium; then what is the % of heavy DNA in the 2nd generation?",
      options: [
        "(1) 25%",
        "(2) 50%",
        "(3) 12.5%",
        "(4) 100%",
      ],
      answer: "(2) 50%",
    },
    {
      queNum: 31,
      question:
        "Select the incorrect statement:",
      options: [
        "(1) Both DNA and RNA have the ability to direct their duplication",
        "(2) RNA is labile and easily degradable",
        "(3) Presence of uracil in place of thymine provides additional stability to DNA",
        "(4) Both DNA and RNA are able to mutate",
      ],
      answer: "(3) Presence of uracil in place of thymine provides additional stability to DNA",
    },
    {
      queNum: 32,
      question:
        "A molecule that can act as genetic material must fulfill the traits given below, except:",
      options: [
        "(1) It should be able to express itself in the form of Mendelian characters",
        "(2) It should be chemically and structurally unstable",
        "(3) It should provide scope for slow changes required for evolution",
        "(4) It should be able to generate its replica",
      ],
      answer: "(2) It should be chemically and structurally unstable",
    },
    {
      queNum: 33,
      question:
        "DNA polymerase, primase, sigma factor, rho factor, DNA ligase, ribosome, t‑RNA. How many of the above are required for DNA replication?",
      options: [
        "(1) Three",
        "(2) Four",
        "(3) Five",
        "(4) Six",
      ],
      answer: "(1) Three",
    },
    {
      queNum: 34,
      question:
        "In a newly synthesized DNA strand the nucleotide sequence is:\n3' ATTCGAGTCCAGCTCA 5'\nThen what is the sequence in the template strand?",
      options: [
        "(1) 3' ATTCGAGTCCAGCTCA 5'",
        "(2) 5' ACTCGACCTGAGCTTA 3'",
        "(3) 5' TAAGCTCAGGTCGAGT 3'",
        "(4) 5' ATTCGAGTCCAGCTCA 3'",
      ],
      answer: "(4) 5' ATTCGAGTCCAGCTCA 3'",
    },
    {
      queNum: 35,
      question:
        "Which one should be correctly related with this diagram:\n(a) A is coding strand\n(b) A is non‑coding strand\n(c) B is antisense strand\n(d) B is sense strand",
      options: [
        "(1) a & b",
        "(2) a & c",
        "(3) b & d",
        "(4) b & c",
      ],
      answer: "(2) a & c",
      img: "/assets/molecular-35.png"
    },
    {
      queNum: 36,
      question:
        "If both strands of a DNA segment are transcribed, then the two RNA molecules formed must be:",
      options: [
        "(1) Parallel and complementary",
        "(2) Parallel and identical",
        "(3) Antiparallel and complementary",
        "(4) Antiparallel and identical",
      ],
      answer: "(3) Antiparallel and complementary",
    },
    {
      queNum: 37,
      question:
        "Capping is a process in which:",
      options: [
        "(1) Methyl guanosine is added at the 3' end of mRNA",
        "(2) Methyl guanosine triphosphate is added to the 5' end of hn‑RNA",
        "(3) Adenylate residues are added at the 5' end of mRNA",
        "(4) Adenylate residues are added at the 3' end of mRNA",
      ],
      answer: "(2) Methyl guanosine triphosphate is added to the 5' end of hn‑RNA",
    },
    {
      queNum: 38,
      question:
        "Which of the following statements about RNA polymerase are correct?\n(i) RNA polymerase I transcribes rRNAs.\n(ii) RNA polymerase II transcribes snRNAs.\n(iii) RNA polymerase III transcribes hnRNA.\n(iv) RNA polymerase II transcribes hnRNAs.",
      options: [
        "(1) (i) and (ii)",
        "(2) (i) and (iii)",
        "(3) (ii) and (iii)",
        "(4) (i) and (iv)",
      ],
      answer: "(4) (i) and (iv)",
    },
    {
      queNum: 39,
      question:
        "Match column‑I with column‑II and choose the correct combination:\nColumn‑I: (A) Sigma factor, (B) Capping, (C) Tailing, (D) Coding strand\nColumn‑II: I: 5'–3', II: Initiation, III: Termination, IV: 5' end, V: 3' end",
      options: [
        "(1) A – III; B – V; C – IV; D – II",
        "(2) A – II; B – IV; C – V; D – I",
        "(3) A – II; B – IV; C – V; D – III",
        "(4) A – III; B – V; C – IV; D – I",
      ],
      answer: "(2) A – II; B – IV; C – V; D – I",
    },
    {
      queNum: 40,
      question:
        "RNA can act as:",
      options: [
        "(1) Messenger, Adapter molecule, Catalytic molecule",
        "(2) Genetic material, Structural molecule, Catalytic molecule",
        "(3) Genetic material, Messenger, Adapter molecule",
        "(4) Genetic material, Messenger, Adapter molecule, Structural molecule, Catalytic molecule",
      ],
      answer: "(4) Genetic material, Messenger, Adapter molecule, Structural molecule, Catalytic molecule",
    },
    {
      queNum: 41,
      question:
        "Identify A, B & C in the given diagram:",
      options: [
        "(1) Histone H1, DNA, Histone octamer",
        "(2) DNA, Histone octamer, Histone H1",
        "(3) Histone octamer, Histone H1, DNA",
        "(4) Histone octamer, DNA, Histone H1",
      ],
      answer: "(2) DNA, Histone octamer, Histone H1",
      img: "/assets/molecular-41.png"
    },
    {
      queNum: 42,
      question:
        "Which of the given is/are involved in DNA replication?\nA) Template DNA with polarity 3' → 5'\nB) Template DNA with polarity 5' → 3'\nC) DNA‑dependent DNA polymerase\nD) RNA‑dependent DNA polymerase",
      options: [
        "(1) Only (A) and (C)",
        "(2) Only (C)",
        "(3) (A), (B) and (C) only",
        "(4) All (A), (B), (C) and (D)",
      ],
      answer: "(3) (A), (B) and (C) only",
    },
    {
      queNum: 43,
      question:
        "Light DNA molecule is replicated in a heavy medium. After four successive replications, 16 molecules of DNA are formed. Which one of the following is true for these DNA?",
      options: [
        "(1) [Option 1]",
        "(2) [Option 2]",
        "(3) [Option 3]",
        "(4) [Option 4]",
      ],
      answer: "(3) [Option 3]",
      img: "/assets/molecular-43.png"
    },
    {
      queNum: 44,
      question:
        "Which of the following is an incorrect statement with respect to RNA polymerase:",
      options: [
        "(1) It unwinds a short stretch of double helical DNA to use as a template",
        "(2) It makes phosphodiester bonds",
        "(3) It carries out only the elongation step of transcription (alone)",
        "(4) It binds to the promoter region without any factor",
      ],
      answer: "(4) It binds to the promoter region without any factor",
    },
    {
      queNum: 45,
      question:
        "In DNA, two nucleotides are linked through __________ to form a dinucleotide. (Fill in the blank)",
      options: [
        "(1) Phosphoester bond",
        "(2) Hydrogen bond",
        "(3) N–Glycosidic bond",
        "(4) Phosphodiester bond",
      ],
      answer: "(4) Phosphodiester bond",
    },
    {
      queNum: 46,
      question:
        "During analysis of the DNA of an organism having 5386 nucleotides, it was found that A = 34%, G = 17%, C = 32% and T = 17%. According to Chargaff's rule, it can be:",
      options: [
        "(1) Double stranded circular DNA",
        "(2) Double stranded linear DNA",
        "(3) Single stranded DNA",
        "(4) Both (1) and (2)",
      ],
      answer: "(3) Single stranded DNA",
    },
    {
      queNum: 47,
      question:
        "How many base pairs are present in the DNA of λ‑Bacteriophage?",
      options: [
        "(1) 48502 bp",
        "(2) 4000 bp",
        "(3) 3.3 × 10^? bp",
        "(4) 5386 bp",
      ],
      answer: "(1) 48502 bp",
    },
    {
      queNum: 48,
      question:
        "All the reference points while defining a transcription unit are made with –",
      options: [
        "(1) Template strand",
        "(2) Antisense strand",
        "(3) Coding strand",
        "(4) Non‑coding strand",
      ],
      answer: "(3) Coding strand",
    },
    {
      queNum: 49,
      question:
        "_________ being a catalyst was reactive and hence __________.",
      options: [
        "(1) DNA, unstable",
        "(2) DNA, stable",
        "(3) RNA, stable",
        "(4) RNA, unstable",
      ],
      answer: "(4) RNA, unstable",
    },
    {
      queNum: 50,
      question:
        "Identify the incorrect statement about RNA.",
      options: [
        "(1) RNA was the first genetic material to evolve in living systems",
        "(2) Apart from being a genetic material, it is also a catalyst",
        "(3) DNA evolved from RNA with chemical modifications",
        "(4) RNA being a catalyst is non‑reactive and stable",
      ],
      answer: "(4) RNA being a catalyst is non‑reactive and stable",
    },
    {
      queNum: 51,
      question:
        "The most abundant type of RNA in the cell is:",
      options: [
        "(1) rRNA",
        "(2) mRNA",
        "(3) tRNA",
        "(4) hnRNA",
      ],
      answer: "(1) rRNA",
    },
    {
      queNum: 52,
      question:
        "Which of the following is not a pyrimidine?",
      options: [
        "(1) Guanine",
        "(2) Cytosine",
        "(3) Thymine",
        "(4) Uracil",
      ],
      answer: "(1) Guanine",
    },
    {
      queNum: 53,
      question:
        "Which of the following is not a component of a nucleotide?",
      options: [
        "(1) Phosphate moiety",
        "(2) Glucose",
        "(3) Pentose sugar",
        "(4) Heterocyclic nitrogenous base",
      ],
      answer: "(2) Glucose",
    },
    {
      queNum: 54,
      question:
        "A nitrogenous base is linked to the ______ carbon of the pentose sugar to form a nucleoside.",
      options: [
        "(1) Fifth",
        "(2) Second",
        "(3) First",
        "(4) Third",
      ],
      answer: "(3) First",
    },
    {
      queNum: 55,
      question:
        "RNA is the genetic material in –",
      options: [
        "(1) QB bacteriophage",
        "(2) Bacteriophage lambda",
        "(3) Bacteriophage ϕ×174",
        "(4) E.coli",
      ],
      answer: "(1) QB bacteriophage",
    },
    {
      queNum: 56,
      question:
        "The unequivocal proof that DNA is the genetic material came from the experiments of Hershey and Chase in the year:",
      options: [
        "(1) 1928",
        "(2) 1932",
        "(3) 1963",
        "(4) 1952",
      ],
      answer: "(4) 1952",
    },
  ];
  
  export default QUESTIONS;
  