---
name: patent-and-literature-matcher
description: >-
  Membandingkan klaim invensi teknologi atau paten dengan literatur publikasi ilmiah yang ada untuk mengevaluasi kebaruan (novelty) dan potensi prior art.
---

# Patent & Literature Matcher

## Overview
Skill ini dirancang untuk membantu penemu, peneliti, dan spesialis kekayaan intelektual (IP) dalam mengidentifikasi apakah suatu invensi teknologi baru sudah pernah dipublikasikan sebelumnya dalam bentuk paper ilmiah (mendeteksi *prior art*). Agen memetakan klaim paten terhadap makalah-makalah ilmiah yang relevan dan menghitung kecocokan konsepnya untuk mengukur aspek kebaruan (*novelty*).

*Peringatan Hukum: Analisis ini bersifat analitis-akademik dan bukan merupakan pendapat hukum resmi atau pengganti konsultasi dengan kuasa hukum paten terdaftar.*

## Dependencies
- `literature-search-openalex`
- `literature-search-arxiv`
- `literature-search-europepmc`
- `pubmed-database`

## Quick Start
Contoh penggunaan:
*"Gunakan skill patent-and-literature-matcher untuk memverifikasi apakah klaim sistem pendingin baterai EV berbasis graphene di bawah ini sudah memiliki prior art di publikasi ilmiah."*

## Workflow

### 1. Dekonstruksi Klaim Invensi
- Baca deskripsi teknologi atau klaim paten yang diberikan oleh pengguna.
- Pecah klaim utama menjadi beberapa komponen kunci (misalnya: material yang digunakan, mekanisme kerja, aplikasi spesifik).

### 2. Formulasi Query Pencarian Paten & Literatur
- Buat query pencarian terarah berdasarkan komponen klaim tersebut.
- Lakukan pencarian literatur menggunakan tools database ilmiah (OpenAlex, arXiv, dll.).

### 3. Pemetaan & Pencocokan Klaim (Claim Mapping Table)
Bandingkan setiap komponen klaim invensi dengan paper-paper ilmiah teratas hasil pencarian. Buat **Claim-Mapping Table** wajib dengan format berikut:
| Klaim Invensi | Padanan di Literatur | Tingkat Kemiripan | Potensi Prior Art | Catatan Novelty |
|---|---|---|---|---|

### 4. Penentuan Kategori Tingkat Kemiripan & Risiko Prior Art
Klasifikasikan kemiripan setiap klaim komponen menggunakan kategori formal berikut:
- **Identical**: Klaim memiliki deskripsi teknis dan alur mekanisme kerja yang hampir persis sama dengan literatur pembanding.
- **Highly Similar**: Mekanisme inti atau fungsi utama sangat mirip, meskipun terdapat variasi parameter kecil.
- **Partially Similar**: Sebagian komponen klaim memiliki kecocokan, namun komponen penunjang lainnya berbeda.
- **Conceptually Related**: Ide umum memiliki keterkaitan (menggunakan paradigma atau teori dasar yang sama), namun implementasi dan kombinasi metodenya berbeda secara signifikan.
- **No Clear Match**: Belum ditemukan padanan konsep atau mekanisme kerja yang jelas di dalam literatur.

### 5. Analisis Pembeda Novelty
Uraikan penilaian kebaruan ke dalam beberapa kategori novelty berikut:
- **Novelty Akademik**: Apakah konsep mendasar dari invensi ini memecahkan masalah teoretis baru yang belum pernah dijawab di literatur.
- **Novelty Teknis**: Apakah desain arsitektur/sistem yang diusulkan memiliki keunikan operasional.
- **Novelty Implementasi**: Apakah penggunaan teknologi ini dalam domain aplikasi tertentu merupakan hal yang baru secara praktis.
- **Novelty Klaim Paten**: Apakah kombinasi seluruh elemen dalam klaim mandiri belum pernah dipublikasikan sebagai kesatuan fungsional di masa lalu.

## Common Mistakes & Aturan Kritis
- **Hanya Mencocokkan Kata Kunci**: Menganggap riset identik hanya karena menggunakan kata kunci yang sama tanpa memahami konteks teknologi secara mendalam.
- **Klaim Parsial**: Hanya membandingkan satu aspek dari invensi dan mengabaikan aspek inovatif lainnya yang terintegrasi.
- **Overclaiming Hukum**: Mengambil kesimpulan hukum mutlak bahwa invensi "pasti disetujui" atau "pasti ditolak" oleh kantor paten. Selalu gunakan perspektif indikatif ("Potensi Prior Art Tinggi/Sedang/Rendah") dan lampirkan disclaimer hukum.
