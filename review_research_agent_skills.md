# Review Skills Set Research-Agent untuk Riset Penelitian

## 1. Penilaian Umum

Set skills ini sudah bagus sebagai fondasi **Research-Agent**, terutama karena pembagiannya mengikuti alur kerja riset yang cukup natural:

```text
mencari fenomena → menemukan gap → membaca paper → membuat literature review → mensintesis temuan → mengecek novelty/paten
```

Struktur awal ini sudah cukup kuat untuk membantu peneliti dari tahap eksplorasi sampai perumusan kontribusi penelitian. Lima skill utama yang tersedia saat ini adalah:

```text
skills/
├── discover_phenomenon_and_gap/
├── extract_methodology/
├── literature_review_generator/
├── patent_and_literature_matcher/
└── synthesize_research/
```

Secara garis besar, alur kerjanya dapat dibayangkan seperti berikut:

| Tahap | Skill | Fungsi Utama |
|---|---|---|
| 1 | `discover_phenomenon_and_gap` | Menemukan fenomena, tren, dan gap awal |
| 2 | `literature_review_generator` | Menyusun peta literatur dan posisi riset |
| 3 | `extract_methodology` | Membedah metode, dataset, eksperimen, dan metrik paper |
| 4 | `synthesize_research` | Menyatukan temuan menjadi argumen ilmiah |
| 5 | `patent_and_literature_matcher` | Mengecek novelty dan potensi prior art |

Kekuatan utama dari desain ini adalah pembagian fungsi yang tidak terlalu tumpang tindih. Masing-masing skill punya fokus kerja yang jelas. Tapi kalau Research-Agent ini ingin dipakai untuk riset akademik serius, terutama untuk proposal, tesis, disertasi, atau artikel jurnal bereputasi, masih ada beberapa bagian yang perlu diperkuat.

Hal yang perlu dijaga sejak awal: agent jangan hanya menjadi alat peringkas paper. Agent harus mampu menilai kualitas bukti, membedakan gap yang benar-benar ilmiah dengan gap yang sekadar “belum banyak diteliti”, serta menghindari klaim yang terlalu percaya diri ketika sumbernya lemah.

---

## 2. Review Per Skill

## 2.1 `discover_phenomenon_and_gap`

Skill ini sangat penting karena menentukan arah awal penelitian. Fungsi utamanya sudah tepat, yaitu mendeteksi fenomena ilmiah atau teknologi baru, melihat tren publikasi, lalu mencari research gap.

### Kelebihan

- Cocok untuk tahap awal pencarian topik.
- Membantu peneliti yang masih bingung menentukan sudut pandang penelitian.
- Relevan untuk bidang yang cepat berubah seperti AI, smart contract, kesehatan digital, edtech, bisnis digital, dan teknologi audit.

### Hal yang Perlu Diperkuat

Skill ini jangan hanya mencari “tren”. Tren belum tentu layak dijadikan penelitian. Agent perlu membedakan beberapa jenis gap, misalnya:

| Jenis Gap | Penjelasan |
|---|---|
| *Phenomenon gap* | Ada fenomena baru yang belum dipahami dengan baik |
| *Theoretical gap* | Teori lama belum cukup menjelaskan fenomena baru |
| *Methodological gap* | Metode sebelumnya lemah, terbatas, atau belum sesuai |
| *Empirical gap* | Konteks, dataset, sektor, wilayah, atau populasi tertentu belum diuji |
| *Performance gap* | Model atau metode lama belum optimal |
| *Evaluation gap* | Evaluasi sebelumnya belum adil, belum robust, atau belum terkontrol |

### Format Output yang Disarankan

| Elemen | Isi |
|---|---|
| Fenomena utama | Isu ilmiah atau teknologi yang sedang muncul |
| Bukti tren | Paper terbaru, jumlah publikasi, konferensi/jurnal terkait |
| Masalah yang belum selesai | Kelemahan atau tantangan yang masih terbuka |
| Jenis gap | Empirical/methodological/theoretical/evaluation gap |
| Potensi kontribusi | Kontribusi yang mungkin ditawarkan oleh riset baru |
| Risiko topik | Ketersediaan data, keluasan topik, dan kesulitan pembuktian |

### Catatan Penting

Skill ini wajib memiliki aturan agar tidak menyebut sesuatu sebagai gap hanya karena “belum banyak diteliti”. Gap yang kuat harus memiliki dasar, misalnya kelemahan metode, keterbatasan evaluasi, kontradiksi hasil, bias dataset, atau kebutuhan praktis yang belum terpenuhi.

---

## 2.2 `extract_methodology`

Skill ini sangat krusial, apalagi jika Research-Agent dipakai untuk riset berbasis paper teknis. Deskripsi awalnya sudah baik karena mencakup metodologi, arsitektur model, parameter eksperimen, dataset, dan metrik kinerja.

### Kelebihan

- Cocok untuk membedah paper AI, machine learning, eksperimen komputasional, dan penelitian kuantitatif.
- Membantu membuat tabel perbandingan metode.
- Berguna untuk mencegah salah paham terhadap isi paper.
- Dapat menjadi dasar untuk menyusun metodologi penelitian baru.

### Hal yang Perlu Diperkuat

Skill ini harus sangat ketat. Banyak AI agent gagal pada bagian metodologi karena terlalu cepat menyimpulkan metode paper tanpa membaca detail eksperimen.

### Format Output yang Disarankan

| Komponen | Detail |
|---|---|
| Tujuan paper | Masalah utama yang ingin diselesaikan |
| Dataset | Nama dataset, ukuran, sumber, label, periode data |
| Preprocessing | Tahapan pembersihan, normalisasi, tokenisasi, atau feature extraction |
| Model/metode | Algoritma utama dan baseline |
| Arsitektur | Detail layer, model, atau framework bila tersedia |
| Parameter | Hyperparameter, epoch, learning rate, data split |
| Evaluasi | Metrik, skenario uji, validasi silang |
| Hasil utama | Angka performa yang benar-benar dilaporkan |
| Keterbatasan | Batasan dari penulis dan batasan yang bisa dikritisi |
| Reproducibility | Ketersediaan kode, dataset, atau konfigurasi eksperimen |

### Aturan Anti-Halusinasi

Skill ini perlu memiliki aturan eksplisit:

- Jika paper tidak menyebut parameter, tulis **“tidak dilaporkan”**.
- Jika dataset tidak jelas, tulis **“tidak dijelaskan secara eksplisit”**.
- Jika angka performa tidak ada, jangan membuat angka baru.
- Jika hanya ada grafik tanpa angka, tulis bahwa nilai performa perlu dibaca hati-hati dari grafik.
- Jangan menyamakan hasil antar-paper jika dataset, skenario, dan metriknya berbeda.

Skill ini cocok menjadi tulang punggung untuk riset seperti DIVE BFT, fraud detection, prediksi saham, dashboard XAI, dan SLR teknis.

---

## 2.3 `literature_review_generator`

Skill ini posisinya sangat strategis. Ia bukan hanya membuat tinjauan pustaka, tetapi juga menyusun kronologi perkembangan riset dan mengidentifikasi gap.

### Kelebihan

- Cocok untuk membuat Bab 2 proposal, tesis, disertasi, atau artikel ilmiah.
- Bisa dipakai untuk narrative review, comprehensive literature review, atau systematic literature review.
- Membantu menyusun alur: penelitian terdahulu → perkembangan metode → kelemahan → posisi penelitian baru.

### Hal yang Perlu Diperkuat

Nama `literature_review_generator` cukup praktis, tetapi ada risiko agent dianggap hanya “menulis otomatis”. Padahal tinjauan pustaka akademik tidak cukup hanya ditulis. Ia harus berbasis kriteria, sumber, dan argumentasi.

Skill ini sebaiknya memiliki beberapa mode kerja.

### Mode yang Disarankan

| Mode | Fungsi |
|---|---|
| Narrative Literature Review Mode | Cocok untuk proposal, paper konseptual, dan bab teori |
| Systematic Literature Review Mode | Menggunakan kriteria inklusi-eksklusi, database, query, screening, PRISMA, dan tabel ekstraksi |
| Thematic Review Mode | Mengelompokkan paper berdasarkan tema, metode, dataset, atau gap |
| Chronological Review Mode | Menjelaskan perkembangan riset dari tahun ke tahun |
| Critical Review Mode | Mengkritisi kelemahan metode, data, evaluasi, dan kontribusi |

### Format Output yang Disarankan

| Tahun | Penulis | Fokus | Metode | Dataset/Konteks | Temuan | Keterbatasan | Relevansi dengan Riset Kita |
|---|---|---|---|---|---|---|---|

### Catatan Penting

Skill ini perlu mampu menghasilkan **argument map**, bukan sekadar paragraf panjang. Contoh alur argumentasi yang baik:

```text
Riset terdahulu banyak fokus pada akurasi.
Masalahnya, evaluasi akurasi sering tidak menguji robustness.
Beberapa paper memakai dataset tidak seimbang.
Belum banyak studi yang melakukan ablation terkontrol.
Maka penelitian ini masuk dengan kontribusi berupa evaluasi robustness berbasis ablation terkontrol.
```

Literature review yang kuat bukan hanya menyebut “Penelitian A menemukan..., Penelitian B menemukan...”. Ia harus mampu membangun posisi ilmiah penelitian baru.

---

## 2.4 `patent_and_literature_matcher`

Skill ini menarik dan bernilai tinggi. Tidak semua Research-Agent memiliki kemampuan mencocokkan klaim invensi atau paten dengan literatur ilmiah.

### Kelebihan

- Cocok untuk riset berbasis inovasi teknologi.
- Membantu mengecek novelty sebelum membuat proposal, prototipe, atau paten.
- Relevan untuk startup berbasis riset, teknologi pendidikan, AI, IoT, kesehatan digital, sistem otomatis, dan perangkat lunak berbasis model.

### Hal yang Perlu Diperkuat

Skill ini harus hati-hati karena analisis paten punya risiko interpretasi hukum. Agent boleh membantu analisis awal, tetapi jangan diposisikan sebagai pengganti konsultan paten.

### Format Output yang Disarankan

| Klaim Invensi | Padanan di Literatur | Tingkat Kemiripan | Potensi Prior Art | Catatan Novelty |
|---|---|---|---|---|

### Kategori Tingkat Kemiripan

| Kategori | Penjelasan |
|---|---|
| Identical | Klaim hampir sama |
| Highly similar | Mekanisme inti mirip |
| Partially similar | Sebagian komponen mirip |
| Conceptually related | Ide umum mirip, implementasi berbeda |
| No clear match | Belum ditemukan padanan yang jelas |

### Catatan Penting

Skill ini perlu membedakan beberapa jenis novelty:

- Novelty akademik.
- Novelty teknis.
- Novelty implementasi.
- Novelty klaim paten.

Sesuatu bisa saja baru secara akademik, tetapi belum cukup kuat untuk paten. Sebaliknya, inovasi implementasi bisa memiliki nilai paten meskipun konsep dasarnya sudah pernah dibahas dalam literatur.

---

## 2.5 `synthesize_research`

Skill ini paling penting untuk menghasilkan argumen akhir. Deskripsinya sudah bagus karena menyebut analisis, rangkuman, sintesis, dan larangan fabrikasi data.

### Kelebihan

- Cocok untuk menjawab pertanyaan riset berbasis banyak paper.
- Membantu membuat bagian pembahasan.
- Berguna untuk menyusun kontribusi, implikasi, dan rekomendasi penelitian.
- Dapat menjadi penghubung antara literature review dan novelty penelitian.

### Hal yang Perlu Diperkuat

Sintesis bukan ringkasan. Skill ini harus diarahkan untuk melakukan pekerjaan intelektual yang lebih dalam.

### Fungsi Sintesis yang Perlu Ada

| Fungsi | Penjelasan |
|---|---|
| Membandingkan temuan | Apakah paper A dan paper B sejalan atau bertentangan |
| Menilai kekuatan bukti | Paper mana yang lebih kuat dari sisi dataset, evaluasi, atau metode |
| Mencari pola | Apakah model tertentu hanya unggul pada dataset tertentu |
| Membangun posisi riset | Celah mana yang masih layak diteliti |
| Menulis klaim hati-hati | Menghindari klaim berlebihan ketika bukti belum cukup kuat |

### Format Output yang Disarankan

| Pertanyaan Riset | Sintesis Temuan | Bukti Utama | Kontradiksi | Implikasi | Keterbatasan |
|---|---|---|---|---|---|

### Aturan Penting

- Jangan membuat angka baru.
- Jangan menggabungkan metrik yang tidak sebanding.
- Jangan menyimpulkan model terbaik jika dataset dan skenario evaluasinya berbeda.
- Jangan menyebut “semua penelitian menunjukkan” jika hanya 2–3 paper yang mendukung.
- Wajib memisahkan antara temuan paper dan interpretasi agent.

---

## 3. Gap dalam Skill Set Saat Ini

Lima skill awal sudah kuat, tetapi belum lengkap untuk workflow riset penuh. Ada beberapa skill tambahan yang sebaiknya dipertimbangkan.

---

## 3.1 Tambahkan `research_question_builder`

Saat ini belum ada skill khusus untuk mengubah gap menjadi rumusan masalah, research question, objective, dan kontribusi.

Padahal bagian ini sangat penting. Banyak peneliti bisa menemukan gap, tetapi kesulitan mengubahnya menjadi pertanyaan penelitian yang tajam.

### Fungsi Utama

- Mengubah gap menjadi research question.
- Membuat tujuan penelitian.
- Menentukan kontribusi teoretis, metodologis, dan praktis.
- Membatasi scope penelitian agar tidak terlalu luas.

### Format Output yang Disarankan

| Gap | Research Question | Objective | Contribution | Scope Limitation |
|---|---|---|---|---|

---

## 3.2 Tambahkan `research_design_planner`

Belum ada skill yang merancang desain penelitian. Setelah gap ditemukan, agent perlu membantu menentukan metode.

### Fungsi Utama

- Menentukan pendekatan: kuantitatif, kualitatif, mixed-method, eksperimen, SLR, bibliometrik, atau design science research.
- Menyusun variabel atau konstruk.
- Menentukan data, sampling, instrumen, dan teknik analisis.
- Untuk AI/ML: menentukan dataset, baseline, evaluasi, validasi, dan robustness test.

Skill ini penting agar Research-Agent tidak berhenti di literature review saja.

---

## 3.3 Tambahkan `source_quality_appraiser`

Skill ini sebaiknya dianggap wajib. Agent perlu bisa menilai kualitas sumber.

### Fungsi Utama

- Mengecek apakah paper berasal dari jurnal Q1/Q2, conference bereputasi, preprint, atau jurnal lemah.
- Menilai kekuatan metodologi paper.
- Mengecek kejelasan dataset dan evaluasi.
- Memberi skor kualitas literatur.
- Menandai paper yang tidak layak dijadikan rujukan utama.

### Format Output yang Disarankan

| Paper | Venue | Reputasi | Kekuatan Metodologi | Risiko Bias | Layak Digunakan? |
|---|---|---|---|---|---|

Tanpa skill ini, agent bisa saja menyamakan paper kuat dengan paper lemah. Itu berbahaya untuk riset yang menargetkan jurnal bereputasi.

---

## 3.4 Tambahkan `citation_and_reference_validator`

Kalau Research-Agent dipakai untuk penulisan akademik, validasi sitasi wajib ada.

### Fungsi Utama

- Memastikan DOI atau link benar.
- Memastikan judul, penulis, tahun, dan jurnal sesuai.
- Mengecek apakah referensi benar-benar mendukung klaim.
- Menandai referensi yang tidak dapat diverifikasi.
- Mencegah referensi palsu atau keliru masuk ke naskah.

Skill ini penting karena kesalahan referensi bisa langsung merusak kredibilitas naskah.

---

## 3.5 Tambahkan `paper_matrix_builder`

Skill ini praktis, tetapi sangat berguna.

### Fungsi Utama

- Membuat matriks penelitian terdahulu.
- Membuat tabel SLR.
- Membuat tabel metode, dataset, metrik, hasil, dan gap.
- Membuat evidence map.

Meskipun sebagian fungsi ini bisa dilakukan oleh `literature_review_generator`, sebaiknya dibuat skill tersendiri agar output lebih rapi dan konsisten.

---

## 3.6 Tambahkan `hypothesis_or_proposition_builder`

Untuk riset kuantitatif dan kualitatif, agent perlu membantu menyusun hipotesis atau proposisi.

### Fungsi Utama

- Membuat hipotesis berdasarkan teori dan penelitian terdahulu.
- Membuat proposisi untuk riset kualitatif.
- Menyusun kerangka konseptual.
- Menghubungkan variabel atau konstruk.

Skill ini sangat berguna untuk proposal mahasiswa, tesis, disertasi, dan artikel manajemen/bisnis.

---

## 3.7 Tambahkan `reviewer_response_and_revision`

Kalau target akhirnya publikasi, skill ini sangat berguna.

### Fungsi Utama

- Membaca komentar reviewer.
- Mengklasifikasikan komentar mayor dan minor.
- Menyusun response to reviewers.
- Menyarankan revisi naskah.
- Memastikan perubahan konsisten dengan komentar reviewer.

Untuk proyek paper Q1, skill seperti ini akan sangat membantu.

---

## 4. Struktur Skill Set yang Disarankan

Agar Research-Agent lebih matang, skills dapat disusun menjadi tiga lapisan.

---

## 4.1 Layer 1 — Discovery & Framing

| No | Skill | Fungsi |
|---|---|---|
| 1 | `discover_phenomenon_and_gap` | Menemukan fenomena dan gap awal |
| 2 | `research_question_builder` | Mengubah gap menjadi RQ, tujuan, dan kontribusi |
| 3 | `research_design_planner` | Merancang metode penelitian |

Fokus layer ini adalah menemukan topik, gap, research question, tujuan, kontribusi, dan rancangan penelitian.

---

## 4.2 Layer 2 — Literature Intelligence

| No | Skill | Fungsi |
|---|---|---|
| 4 | `literature_review_generator` | Menyusun tinjauan pustaka |
| 5 | `extract_methodology` | Mengekstrak metodologi paper |
| 6 | `source_quality_appraiser` | Menilai kualitas sumber |
| 7 | `paper_matrix_builder` | Membuat matriks penelitian terdahulu |
| 8 | `citation_and_reference_validator` | Memvalidasi sitasi dan referensi |

Fokus layer ini adalah membaca, menilai, mengekstrak, dan memetakan literatur.

---

## 4.3 Layer 3 — Synthesis, Novelty & Publication

| No | Skill | Fungsi |
|---|---|---|
| 9 | `synthesize_research` | Mensintesis temuan dari banyak publikasi |
| 10 | `patent_and_literature_matcher` | Mengecek novelty dan prior art |
| 11 | `hypothesis_or_proposition_builder` | Membuat hipotesis atau proposisi |
| 12 | `reviewer_response_and_revision` | Membantu revisi berdasarkan reviewer |

Fokus layer ini adalah membangun argumen akhir, novelty, kontribusi, dan kesiapan publikasi.

---

## 5. Risiko yang Perlu Diantisipasi

## 5.1 Overlap Antar-Skill

Beberapa skill berpotensi membahas hal yang sama, terutama soal gap. Perlu dibuat batasan yang jelas:

| Skill | Batas Fungsi |
|---|---|
| `discover_phenomenon_and_gap` | Menemukan gap awal |
| `literature_review_generator` | Membangun narasi literatur |
| `synthesize_research` | Menarik kesimpulan dari banyak bukti |

---

## 5.2 Risiko Fabrikasi Referensi dan Data

Setiap skill wajib memiliki aturan: jika informasi tidak ditemukan di sumber, jangan dibuat-buat. Gunakan label seperti:

- Tidak tersedia.
- Tidak dilaporkan.
- Tidak dijelaskan secara eksplisit.
- Belum dapat diverifikasi.

---

## 5.3 Risiko Gap Palsu

Banyak agent akan menulis “belum banyak penelitian tentang X” sebagai gap. Ini lemah.

Gap yang kuat harus berbasis masalah nyata, seperti:

- Kelemahan metode.
- Ketidakkonsistenan hasil.
- Bias dataset.
- Evaluasi belum robust.
- Skenario uji belum realistis.
- Kebutuhan teoretis atau praktis yang belum dijawab.

---

## 5.4 Risiko Literature Review Terlalu Deskriptif

Literature review tidak boleh hanya menjadi kumpulan ringkasan paper. Agent harus diarahkan untuk menulis secara kritis dengan membandingkan, mengelompokkan, dan menunjukkan posisi riset baru.

---

## 6. Rekomendasi Final

Kalau hanya untuk versi awal, 5 skills ini sudah layak dipakai. Tapi kalau targetnya Research-Agent yang benar-benar kuat untuk riset akademik, sebaiknya jangan berhenti di 5 skill.

Minimal tambahkan 4 skill berikut:

```text
research_question_builder
research_design_planner
source_quality_appraiser
citation_and_reference_validator
```

Dengan tambahan tersebut, Research-Agent akan lebih lengkap karena tidak hanya membantu membaca dan menulis, tetapi juga membantu memastikan topik, metode, sumber, dan klaim akademiknya lebih aman.

Versi idealnya menjadi 12 skills:

```text
skills/
├── discover_phenomenon_and_gap/
├── research_question_builder/
├── research_design_planner/
├── literature_review_generator/
├── extract_methodology/
├── source_quality_appraiser/
├── paper_matrix_builder/
├── citation_and_reference_validator/
├── synthesize_research/
├── patent_and_literature_matcher/
├── hypothesis_or_proposition_builder/
└── reviewer_response_and_revision/
```

## 7. Penilaian Akhir

Konsep awal Research-Agent ini kuat, tetapi masih terlalu berpusat pada literatur. Untuk menjadi Research-Agent yang benar-benar membantu penelitian dari nol sampai publikasi, perlu ditambah kemampuan framing, validasi sumber, desain metode, dan revisi publikasi.

Nilai awalnya sudah bagus. Tapi pembeda utamanya nanti bukan pada kemampuan merangkum paper, melainkan pada kemampuan agent untuk:

- menemukan gap yang benar-benar defensible,
- menilai kualitas sumber,
- menyusun metode yang masuk akal,
- menjaga klaim agar tidak berlebihan,
- memvalidasi referensi,
- dan membantu naskah siap menghadapi reviewer.

Itulah yang akan membuat Research-Agent ini naik kelas dari sekadar “AI peringkas paper” menjadi **asisten riset akademik yang serius**.
