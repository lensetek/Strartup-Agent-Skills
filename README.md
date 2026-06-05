# Research Agent Skills Collection

*Read this in other languages: [English](#english), [Bahasa Indonesia](#bahasa-indonesia).*

---

## Bahasa Indonesia

Repositori ini adalah kumpulan **Skills** khusus untuk **Research Agent** (Asisten Agen Peneliti). Kumpulan skill ini dipasang langsung ke dalam sistem plugin `science` untuk membekali agen AI dengan prosedur metodologis ilmiah yang kokoh dalam mencari, menganalisis, mengekstrak, dan mengevaluasi literatur akademis serta paten teknologi secara valid tanpa halusinasi.

### Kumpulan Skill yang Tersedia

#### 1. 🔍 [Discover Phenomenon & Gap](file:///C:/Users/ACER/.gemini/config/plugins/science/skills/discover_phenomenon_and_gap/SKILL.md)
* **Kegunaan**: Tahap awal eksplorasi untuk mendeteksi tren fenomena baru serta merumuskan celah riset (*research gaps*).
* **Fitur**: Klasifikasi celah riset (Metodologis, Empiris, Aplikasi) dan perumusan Pertanyaan Riset (RQ).

#### 2. 📝 [Literature Review Generator](file:///C:/Users/ACER/.gemini/config/plugins/science/skills/literature_review_generator/SKILL.md)
* **Kegunaan**: Pembuatan draf tinjauan pustaka (*literature review*) yang sistematis dan terstruktur secara kronologis.
* **Fitur**: Pembuatan garis waktu evolusi riset dan penentuan batas kriteria inklusi/eksklusi paper.

#### 3. 🔬 [Synthesize Research](file:///C:/Users/ACER/.gemini/config/plugins/science/skills/synthesize_research/SKILL.md)
* **Kegunaan**: Mensintesis temuan dari berbagai paper secara tematis untuk menjawab pertanyaan riset tertentu secara kritis.
* **Fitur**: Sintesis matriks perbandingan metodologi & hasil eksperimen, serta analisis konsensus vs kontradiksi.

#### 4. 📊 [Extract Methodology](file:///C:/Users/ACER/.gemini/config/plugins/science/skills/extract_methodology/SKILL.md)
* **Kegunaan**: Membedah paper untuk mengekstrak informasi teknis secara terstruktur dan presisi.
* **Fitur**: Ekstraksi detail dataset, parameter eksperimen (hyperparameters), arsitektur model, skor evaluasi, dan cek reproduksibilitas.

#### 5. 💡 [Patent & Literature Matcher](file:///C:/Users/ACER/.gemini/config/plugins/science/skills/patent_and_literature_matcher/SKILL.md)
* **Kegunaan**: Membandingkan klaim teknologi/paten dengan publikasi ilmiah guna mendeteksi *prior art*.
* **Fitur**: *Claim mapping table* dan penilaian tingkat risiko kebaruan (*novelty risk assessment*).

---

## English

This repository is a collection of custom **Skills** for **Research Agents**. These skills are directly installed into the `science` plugin system to equip AI agents with solid scientific methodology procedures to search, analyze, extract, and evaluate academic literature and technology patents factually without hallucination.

### Available Skills

#### 1. 🔍 [Discover Phenomenon & Gap](file:///C:/Users/ACER/.gemini/config/plugins/science/skills/discover_phenomenon_and_gap/SKILL.md)
* **Use Case**: Initial exploration phase to detect new trending phenomena and formulate concrete research gaps.
* **Features**: Classification of research gaps (Methodological, Empirical, Application) and formulation of Research Questions (RQ).

#### 2. 📝 [Literature Review Generator](file:///C:/Users/ACER/.gemini/config/plugins/science/skills/literature_review_generator/SKILL.md)
* **Use Case**: Generating systematic and chronologically structured literature review drafts.
* **Features**: Research evolution timeline creation and definition of paper inclusion/exclusion criteria.

#### 3. 🔬 [Synthesize Research](file:///C:/Users/ACER/.gemini/config/plugins/science/skills/synthesize_research/SKILL.md)
* **Use Case**: Synthesizing findings from multiple papers thematically to answer specific research questions critically.
* **Features**: Synthesis matrix comparing methodologies & experimental results, and consensus vs. contradiction analysis.

#### 4. 📊 [Extract Methodology](file:///C:/Users/ACER/.gemini/config/plugins/science/skills/extract_methodology/SKILL.md)
* **Use Case**: Dissecting scientific papers to extract technical information in a structured and precise manner.
* **Features**: Extraction of dataset details, experimental parameters (hyperparameters), model architectures, evaluation scores, and reproducibility checks.

#### 5. 💡 [Patent & Literature Matcher](file:///C:/Users/ACER/.gemini/config/plugins/science/skills/patent_and_literature_matcher/SKILL.md)
* **Use Case**: Comparing technology/patent claims with scientific publications to detect *prior art*.
* **Features**: *Claim mapping table* and novelty risk assessment.

---

## Dependensi Sistem Pencarian / Search System Dependencies
Seluruh skill ini memanfaatkan modul pencarian literatur bawaan sistem / All these skills utilize the system's built-in literature search modules:
* **arXiv API** (`literature-search-arxiv`)
* **OpenAlex API** (`literature-search-openalex`)
* **bioRxiv/medRxiv API** (`literature-search-biorxiv`)
* **PubMed/Entrez API** (`pubmed-database`)
* **Europe PMC API** (`literature-search-europepmc`)

## Cara Menggunakan Skill / How to Use the Skills
Untuk mengaktifkan skill tertentu, Anda cukup memberikan instruksi berbahasa alami ke agen AI yang menyertakan nama skill / To activate a specific skill, simply provide a natural language instruction to the AI agent containing the skill name:

> **ID**: *"Gunakan skill **discover-phenomenon-and-gap** untuk mengeksplorasi tren teknologi baterai solid-state."*
>
> **EN**: *"Use the **discover-phenomenon-and-gap** skill to explore trends in solid-state battery technology."*
