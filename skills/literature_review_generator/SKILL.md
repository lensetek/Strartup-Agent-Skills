---
name: literature-review-generator
description: >-
  Melakukan tinjauan pustaka terstruktur, menyusun kronologi perkembangan riset, dan mengidentifikasi celah penelitian (research gaps) pada topik tertentu.
---

# Literature Review Generator

## Overview
Skill ini dirancang untuk menghasilkan tinjauan pustaka (literature review) yang sistematis, mendalam, dan memiliki bobot argumentasi ilmiah yang kuat. Agen akan membantu memetakan perkembangan riset dari waktu ke waktu, mengidentifikasi kontradiksi/konsensus, dan secara logis membangun argumentasi yang menjustifikasi mengapa penelitian baru yang diusulkan bernilai penting untuk dilakukan.

## Dependencies
- `literature-search-openalex`
- `literature-search-arxiv`
- `pubmed-database`
- `literature-search-biorxiv`
- `literature-search-europepmc`

## Quick Start
Contoh penggunaan:
*"Gunakan skill literature-review-generator untuk memetakan perkembangan algoritma reinforcement learning dari tahun 2018 hingga sekarang dan cari research gaps yang ada."*

## Workflow

### 1. Perencanaan Protokol Review & Penentuan Mode
Tentukan batasan review (rentang tahun, tipe dokumen) dan pilih salah satu mode kerja berikut:
- **Narrative Literature Review Mode**: Untuk proposal konseptual atau penyusunan bab teori umum.
- **Systematic Literature Review (SLR) Mode**: Menggunakan kriteria inklusi-eksklusi formal, penentuan kata kunci/query database terstruktur, dokumentasi proses pencarian/screening (misal: diagram PRISMA sederhana), dan tabel ekstraksi data komprehensif.
- **Thematic Review Mode**: Mengelompokkan paper berdasarkan tema, konsep, atau sub-topik masalah.
- **Chronological Review Mode**: Menelusuri sejarah perkembangan ide/teknologi dari pionir awal hingga tren termutakhir untuk menunjukkan evolusi paradigma.
- **Critical Review Mode**: Berfokus mengevaluasi kelemahan asumsi teoretis, kelemahan evaluasi, bias data, dan keterbatasan metodologis dari studi sebelumnya.

### 2. Penelusuran & Pemetaan Historis (Timeline)
- Cari literatur pionir (seminal papers) dan paper ulasan (survey papers) terbaru menggunakan mesin pencari literatur.
- Susun garis waktu kronologis perkembangan riset tersebut.

### 3. Analisis Celah Penelitian & Argument Map
- Buat **Argument Map** untuk membangun alur argumentasi yang menjustifikasi posisi riset baru. Contoh alur:
  * *Riset terdahulu banyak fokus pada akurasi metodologi X.*
  * *Namun, evaluasi akurasi tersebut sering tidak menguji robustness dalam kondisi riil.*
  * *Beberapa paper menggunakan dataset yang tidak seimbang tanpa penanganan bias.*
  * *Oleh karena itu, riset baru ini hadir untuk menutup gap tersebut dengan menawarkan evaluasi robustness berbasis ablation.*

### 4. Format Laporan Literature Review
Struktur penulisan tinjauan pustaka harus memuat:
- **Pendahuluan**: Urgensi topik, pertanyaan riset yang dipecahkan, dan batasan review.
- **Matriks Ringkasan Literatur**: Tabel terstruktur wajib dengan kolom berikut:
  | Tahun | Penulis | Fokus Riset | Metode | Dataset / Konteks | Temuan Utama | Keterbatasan Utama | Relevansi dengan Riset Kita |
  |---|---|---|---|---|---|---|---|
- **Argument Map (Peta Posisi Penelitian)**: Penjelasan berbasis poin-poin alur argumentasi yang mengarah pada kontribusi riset Anda.
- **Analisis Kritis & Kategorisasi Tema**: Pengelompokan literatur secara kritis berdasarkan pendekatan yang digunakan (e.g., pendekatan berbasis aturan vs deep learning).
- **Kesimpulan**: Ringkasan implikasi teoritis dan metodologis untuk riset mendatang.

### 5. Sitasi & Referensi
- Pastikan setiap klaim didukung oleh referensi yang tepat dengan mencantumkan metadata DOI/URL yang valid pada Daftar Pustaka.

## Common Mistakes & Aturan Kritis
- **Hanya Merangkum Tanpa Mengkritik**: Menghindari model penulisan deskriptif daftar ringkasan (e.g., "Peneliti A menemukan X. Peneliti B menemukan Y."). Agen harus membandingkan, mengelompokkan, dan mengkritisi.
- **Kronologi Acak**: Menulis sejarah konsep tanpa urutan waktu yang jelas.
- **Referensi Tidak Valid**: Menulis kutipan tanpa menyertakan DOI atau tautan referensi asli yang dapat dilacak. Dilarang keras mengarang referensi.
