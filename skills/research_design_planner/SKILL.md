---
name: research-design-planner
description: >-
  Merancang desain penelitian terperinci, termasuk pendekatan metodologi (kuantitatif, kualitatif, mixed-method, eksperimental), variabel, pengumpulan data, dan rencana analisis.
---

# Research Design Planner

## Overview
Skill ini memandu Research Agent dalam menyusun rancangan metodologi penelitian (*research design*) secara sistematis. Rancangan ini menentukan pendekatan riset, pemetaan konstruk/variabel, alur pengujian data, serta skenario eksperimen (khusus untuk bidang komputasi/AI/ML) guna memastikan riset berjalan secara terstruktur dan dapat direproduksi (*reproducible*).

## Dependencies
- `research-question-builder`

## Quick Start
Contoh penggunaan:
*"Gunakan skill research-design-planner untuk merancang alur eksperimen perbandingan robustness LLM menggunakan dataset benchmark GSM8K dan baseline GPT-4."*

## Workflow

### 1. Penentuan Pendekatan Penelitian (Research Approach)
Tentukan dan beri pembenaran atas pendekatan yang dipilih:
- **Kuantitatif**: Pengujian hipotesis secara statistik, survei terstruktur, atau eksperimen laboratorium.
- **Kualitatif**: Studi kasus mendalam, analisis tematis, wawancara semi-terstruktur, atau etnografi.
- **Mixed-Methods**: Kombinasi sekuensial atau konkuren antara kuantitatif dan kualitatif.
- **Eksperimen Komputasional / AI / ML**: Riset pengembangan model, analisis performa, uji ketahanan (*robustness*), atau studi ablasi (*ablation study*).
- **Design Science Research**: Pembuatan artefak sistem/software baru beserta evaluasi kinerjanya.

### 2. Operasionalisasi Variabel / Konstruk
- Untuk riset kuantitatif/sosial: Identifikasi Variabel Independen (IV), Variabel Dependen (DV), Variabel Mediator/Moderator, serta metrik pengukurannya.
- Untuk riset komputasional/AI: Tentukan baseline model, data masukan (*input data*), parameter kontrol (*control variables*), dan metrik kinerja utama (e.g., F1-score, Latency, Accuracy).

### 3. Pengumpulan Data & Rencana Sampling
- Rancang sumber data yang digunakan (data primer vs sekunder).
- Tentukan metode *sampling* (probability vs non-probability) atau detail pengumpulan dataset (e.g., scraping, dataset benchmark publik, API log).
- Rancang teknik pembersihan (*preprocessing*) dan pelabelan data.

### 4. Rencana Analisis Data & Validasi
- Tentukan metode analisis statistik yang sesuai (e.g., ANOVA, SEM, Regresi) atau alur pelatihan model (*model training workflow*).
- Rancang uji validitas/reliabilitas instrumen atau rencana pengujian silang (*cross-validation*) untuk keandalan hasil.

### 5. Komponen Khusus Riset AI / Machine Learning (Jika Relevan)
Untuk penelitian berbasis AI/ML, rancangan eksperimen harus menjabarkan secara rinci:
1. **Dataset & Data Splitting**: Skenario pembagian data (train/validation/test split) serta penanganan ketidakseimbangan data (*class imbalance*).
2. **Baseline Model**: Model pembanding standar yang akan diuji secara setara (*fair comparison*).
3. **Robustness & Stress Testing**: Pengujian model pada kondisi ekstrem (noise data, serangan adversarial, atau distribusi di luar latih/*out-of-distribution*).
4. **Studi Ablasi (Ablation Study)**: Rencana pengujian untuk memverifikasi kontribusi tiap komponen arsitektur baru dengan cara menonaktifkannya secara bertahap.

## Common Mistakes & Aturan Kritis
- **Desain Tidak Sinkron dengan RQ**: Memilih metode analisis yang tidak dapat menjawab pertanyaan penelitian (RQ).
- **Perbandingan Eksperimen yang Bias (Unfair Comparison)**: Dalam riset ML, menguji model baru pada lingkungan yang dioptimalkan khusus sementara baseline model dijalankan tanpa penyetelan hyperparameter yang adil.
- **Ketiadaan Rencana Validasi**: Tidak menyertakan uji signifikansi statistik atau uji ketahanan data, sehingga hasil rentan dianggap sebagai kebetulan (*cherry-picked*).
- **Kurang Detail pada Prosedur Reproduksibilitas**: Tidak merinci konfigurasi perangkat lunak, pustaka (*libraries*), hardware, atau seed acak (*random seed*) yang digunakan.
