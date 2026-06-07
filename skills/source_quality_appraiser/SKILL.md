---
name: source-quality-appraiser
description: >-
  Menilai kualitas ilmiah, indeksasi venue (Scopus Q1/Q2, CORE), dan kekuatan metodologis dari dokumen referensi untuk memastikan kredibilitas rujukan riset.
---

# Source Quality Appraiser

## Overview
Skill ini ditujukan untuk memverifikasi kredibilitas, kualitas ilmiah, serta risiko bias dari artikel rujukan yang akan dijadikan landasan teori utama. Tujuannya adalah mencegah penggunaan paper yang lemah metodologinya, terbit di jurnal predator/berkualitas rendah, atau memiliki kecacatan eksperimen sebagai rujukan utama riset.

## Dependencies
- `literature-search-openalex`
- `pubmed-database`

## Quick Start
Contoh penggunaan:
*"Gunakan skill source-quality-appraiser untuk menilai reputasi venue, risiko bias, dan kualitas metodologi dari daftar 5 rujukan paper berikut."*

## Workflow

### 1. Pengecekan Reputasi & Indeksasi Venue
Periksa tempat penerbitan artikel ilmiah (*venue*) untuk mengidentifikasi tingkat kredibilitasnya:
- **Jurnal Terindeks**: Cek kuartil jurnal (Scopus Q1/Q2/Q3/Q4, SJR, atau status indeksasi terkemuka lainnya).
- **Konferensi Bereputasi**: Cek peringkat konferensi (misalnya CORE Ranking A*/A/B/C untuk bidang Ilmu Komputer).
- **Preprint**: Identifikasi jika dokumen merupakan draf pra-cetak (arXiv, bioRxiv, medRxiv) yang belum melalui proses penelaahan sejawat (*peer-review*). Tandai dengan hati-hati.
- **Predatory/Low Quality**: Waspadai jurnal yang memiliki reputasi buruk atau tidak terindeks secara kredibel.

### 2. Evaluasi Kekuatan Metodologi Paper
Analisis bagian isi untuk melihat kualitas metode yang digunakan penulis:
- Apakah ukuran sampel (*sample size*) memadai untuk menarik kesimpulan?
- Apakah ada kelompok kontrol (*control group*) dan pengujian acak yang adil?
- Apakah desain eksperimen dijelaskan secara transparan dan detail?
- Apakah instrumen pengukur (kuesioner/alat ukur) sudah divalidasi dengan baik?

### 3. Penilaian Risiko Bias & Konflik Kepentingan
- Periksa adanya potensi konflik kepentingan (*conflict of interest*), seperti pendanaan dari industri tertentu yang dapat memengaruhi kesimpulan hasil riset.
- Analisis bias seleksi data (*selection bias*) atau metode pengujian yang disederhanakan secara tidak wajar (*cherry-picked setup*).

### 4. Penentuan Kredibilitas & Skor Kelayakan
Berdasarkan hasil analisis, klasifikasikan kelayakan dokumen referensi:
- **Sangat Layak (High Quality)**: Metode robust, diterbitkan di jurnal/konferensi peringkat atas (Q1/Q2, CORE A*/A), dan tidak ada konflik kepentingan. Sangat direkomendasikan sebagai pilar teori utama.
- **Cukup Layak (Moderate Quality)**: Metode cukup baik tetapi terdapat keterbatasan kecil pada data/evaluasi, diterbitkan di venue menengah (Q3/Q4, CORE B/C), atau merupakan preprint dari penulis bereputasi.
- **Kurang Layak (Low Quality)**: Metodologi tidak jelas, bias tinggi, diterbitkan di publisher predator/tidak bereputasi, atau klaim tidak didukung data konkret. Sebaiknya dihindari sebagai rujukan inti.

### 5. Format Laporan Penilaian Kualitas Sumber
Sajikan hasil evaluasi dalam format tabel wajib berikut:
| Dokumen Rujukan | Venue & Peringkat (Q1/Q2/CORE/Preprint) | Kekuatan Metodologi | Risiko Bias & Keterbatasan | Status Kelayakan & Rekomendasi Penggunaan |
|---|---|---|---|---|

## Common Mistakes & Aturan Kritis
- **Menyamakan Kredibilitas Preprint dengan Peer-Reviewed Paper**: Menggunakan draf preprint (e.g., arXiv) tanpa memverifikasi reputasi penulis atau meninjau metodologinya secara mandiri dan kritis.
- **Hanya Percaya pada Impact Factor/Peringkat**: Mengasumsikan paper yang diterbitkan di jurnal Q1 pasti bebas dari kesalahan metodologi. Setiap paper harus tetap dievaluasi secara kritis secara per-kasus.
- **Mengabaikan Ukuran Sampel dan Skenario Kontrol**: Melewatkan fakta bahwa eksperimen hanya diuji pada sampel yang sangat sedikit namun membuat generalisasi yang luas.
- **Ketiadaan Transparansi Konflik Kepentingan**: Mengabaikan bias pendanaan riset industri yang dapat menghasilkan bias klaim komersial.
