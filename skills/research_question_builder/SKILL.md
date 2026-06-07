---
name: research-question-builder
description: >-
  Mengubah celah penelitian (research gap) menjadi rumusan masalah, pertanyaan penelitian (Research Questions), tujuan riset, dan kontribusi ilmiah secara terstruktur.
---

# Research Question Builder

## Overview
Skill ini memandu Research Agent dalam memformulasikan pertanyaan penelitian (*Research Questions*/RQ) yang tajam, terukur, dan terarah berdasarkan celah penelitian (*research gap*) yang telah diidentifikasi sebelumnya. Tujuannya adalah memastikan bahwa riset memiliki batas operasional yang jelas, tujuan yang eksplisit, serta kontribusi ilmiah yang dapat diukur.

## Dependencies
- `discover-phenomenon-and-gap`

## Quick Start
Contoh penggunaan:
*"Gunakan skill research-question-builder untuk merumuskan pertanyaan penelitian dan kontribusi ilmiah berdasarkan methodological gap pada evaluasi robustness model LLM."*

## Workflow

### 1. Dekonstruksi & Analisis Gap
- Evaluasi celah penelitian (*research gap*) yang ditargetkan dari tahap pencarian.
- Pastikan gap tersebut bukan sekadar *"belum banyak diteliti"*, melainkan memiliki justifikasi akademik (seperti keterbatasan metode, inkonsistensi temuan, atau bias data).

### 2. Formulasi Research Questions (RQ)
- Rumuskan 2 hingga 4 pertanyaan penelitian (RQ) yang spesifik.
- Pastikan pertanyaan menggunakan kata tanya yang mendorong analisis kritis (e.g., *"Bagaimana..."*, *"Sejauh mana..."*, *"Mengapa..."*) alih-alih pertanyaan tertutup ya/tidak.

### 3. Penentuan Sasaran Penelitian (Research Objectives)
- Sinkronkan setiap RQ dengan tujuan penelitian (*Objectives*) yang konkret. 
- Gunakan kata kerja operasional yang dapat diukur (e.g., *"Menganalisis..."*, *"Mengembangkan..."*, *"Mengevaluasi..."*, *"Memvalidasi..."*).

### 4. Pemetaan Kontribusi Penelitian
Klasifikasikan kontribusi potensial dari penelitian ini ke dalam tiga dimensi:
- **Kontribusi Teoretis**: Bagaimana riset memperluas, menyempurnakan, atau menantang teori konseptual yang sudah ada.
- **Kontribusi Metodologis**: Alat, metrik, alur eksperimen baru, atau modifikasi algoritma yang ditawarkan.
- **Kontribusi Praktis**: Solusi atau implikasi langsung terhadap industri, kebijakan, atau pemecahan masalah praktis di lapangan.

### 5. Batasan Ruang Lingkup (Scope Limitation)
- Tentukan batasan apa saja yang *tidak* akan dibahas dalam riset ini (misalnya tipe dataset tertentu, batasan platform hardware, atau rentang parameter tertentu) untuk menjaga fokus penelitian.

### 6. Format Laporan Formulasi Pertanyaan Riset
Hasil formulasi wajib disajikan dalam format tabel terstruktur berikut:
| Gap Penelitian | Research Question (RQ) | Objective (Tujuan) | Kontribusi Utama (Teoretis/Metodologis/Praktis) | Batasan Scope (Ruang Lingkup) |
|---|---|---|---|---|

## Common Mistakes & Aturan Kritis
- **RQ Terlalu Deskriptif atau Sederhana**: Membuat RQ yang jawabannya bisa diperoleh hanya dengan pencarian Google dasar (e.g., *"Apa itu algoritma X?"*). RQ harus menuntut pengujian empiris atau analisis mendalam.
- **Tujuan dan RQ Tidak Sinkron**: Jumlah atau esensi dari tujuan penelitian tidak selaras dengan pertanyaan penelitian yang diajukan.
- **Kontribusi yang Berlebihan (Overclaiming)**: Mengklaim kontribusi revolusioner tanpa dasar pembuktian yang realistis dalam batasan riset.
- **Ketiadaan Batasan Scope**: Membuat ruang lingkup penelitian terlalu luas sehingga sulit untuk diselesaikan dalam kerangka waktu riset.
