---
name: discover-phenomenon-and-gap
description: >-
  Membantu mendeteksi fenomena ilmiah/teknologi baru yang sedang tren dan menganalisis celah penelitian (research gap) di sekitarnya berdasarkan publikasi terbaru.
---

# Discover Phenomenon and Gap

## Overview
Skill ini dirancang khusus untuk fase awal penelitian (eksplorasi). Tujuannya adalah memandu Research Agent dalam memindai literatur terbaru untuk mengidentifikasi fenomena baru (tren, anomali data, penemuan teknologi baru) dan merumuskan celah penelitian (*research gap*) konkret yang valid dan dapat dipertanggungjawabkan secara akademik.

## Dependencies
- `literature-search-openalex`
- `literature-search-arxiv`
- `literature-search-biorxiv`
- `pubmed-database`

## Quick Start
Contoh penggunaan:
*"Gunakan skill discover-phenomenon-and-gap untuk mengeksplorasi fenomena penggunaan model AI kolaboratif (multi-agent) dalam dunia pendidikan dan cari gap risetnya."*

## Workflow

### 1. Eksplorasi Fenomena Awal
- Lakukan pencarian literatur berbasis kata kunci luas untuk menangkap tren dalam 1–2 tahun terakhir.
- Identifikasi:
  * **Fenomena Utama**: Konsep, metode, atau perilaku baru yang banyak dilaporkan di paper terbaru.
  * **Anomali/Perdebatan**: Temuan eksperimen yang tidak biasa atau tidak sesuai dengan teori lama.

### 2. Analisis Kritis Literatur Terkini
- Cari paper dengan tipe "Review", "Survey", atau paper dengan sitasi cepat untuk memahami konsensus saat ini.
- Analisis bagian pembahasan (*discussion*) dan kesimpulan (*conclusion*) dari paper-paper tersebut untuk mencari pernyataan eksplisit hambatan atau tantangan terbuka.

### 3. Pemetaan Celah Penelitian (Research Gap Extraction)
Klasifikasikan celah yang ditemukan ke dalam tipe-tipe spesifik berikut:
- **Phenomenon Gap**: Adanya fenomena baru (misalnya perilaku pasar, dampak sosial teknologi baru, atau anomali fisis) yang belum dipahami atau dijelaskan dengan baik oleh literatur saat ini.
- **Theoretical Gap**: Teori atau model konseptual yang ada saat ini tidak cukup/belum mampu menjelaskan fenomena baru atau terdapat inkonsistensi teoritis antar-studi.
- **Methodological Gap**: Metode yang digunakan penelitian sebelumnya memiliki kelemahan bawaan (misal: kurang akurat, tidak efisien, bias, tidak transparan) atau metode baru belum diujikan pada masalah ini.
- **Empirical Gap**: Kurangnya bukti empiris nyata, data eksperimen, atau studi kasus untuk memverifikasi hipotesis/teori tertentu pada konteks spesifik.
- **Performance Gap**: Model, algoritma, atau sistem yang ada belum mencapai tingkat optimal atau gagal dalam skenario/kasus uji tertentu.
- **Evaluation Gap**: Evaluasi penelitian terdahulu tidak memadai, belum robust, memiliki bias seleksi data, atau tidak mencakup pengujian stres/ablation yang terkontrol.

### 4. Formulasi Usulan Pertanyaan Riset (Research Questions)
- Rumuskan 3–5 pertanyaan penelitian konkret (Research Questions/RQ) yang menjembatani fenomena yang ditemukan dengan celah penelitian tersebut secara spesifik.

### 5. Format Laporan Hasil Eksplorasi
Laporan wajib mengikuti struktur berikut:
1. **Fenomena Utama**: Isu ilmiah, teknologi, atau sosial baru yang sedang muncul dan membutuhkan penjelasan/solusi.
2. **Bukti Tren**: Daftar rujukan ilmiah pendukung (judul paper, penulis, tahun, DOI) yang membuktikan eksistensi fenomena ini dalam 1-2 tahun terakhir.
3. **Masalah yang Belum Selesai**: Tantangan, kelemahan, atau keterbatasan yang belum dipecahkan oleh penelitian saat ini.
4. **Jenis Gap**: Klasifikasi celah yang ditargetkan (pilih satu atau lebih: *Phenomenon, Theoretical, Methodological, Empirical, Performance, atau Evaluation gap*) disertai argumen penjelas.
5. **Potensi Kontribusi**: Apa nilai tambah baru yang dapat ditawarkan oleh riset baru ini untuk menutup celah tersebut.
6. **Risiko Topik**: Analisis awal mengenai ketersediaan data, kompleksitas pembuktian, dan keluasan ruang lingkup riset.

## Common Mistakes & Aturan Kritis
- **Gap yang Dibuat-buat (Fabricated Gap)**: Menyatakan ada gap padahal sebenarnya sudah banyak paper yang membahas solusi tersebut. Wajib melakukan kueri pencarian berlapis sebelum menyimpulkan ketiadaan studi.
- **Argumen Gap yang Lemah**: Menyebut sesuatu sebagai gap **hanya** karena *"belum banyak diteliti"* atau *"belum ada yang menguji di wilayah/konteks X"*. Gap yang kuat harus memiliki dasar ilmiah (misal: mengapa ketiadaan pengujian di wilayah X memicu perbedaan hasil atau ketidakcocokan model teoritis).
- **Topik Terlalu Luas**: Tidak mempersempit fenomena (misal: membahas "AI secara umum" alih-alih "fenomena halusinasi pada LLM di domain hukum").
