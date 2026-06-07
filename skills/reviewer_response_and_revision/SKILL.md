---
name: reviewer-response-and-revision
description: >-
  Membantu proses revisi naskah akademik dengan mengklasifikasikan komentar reviewer, merancang berkas tanggapan (Response to Reviewers), dan merencanakan perubahan teks naskah.
---

# Reviewer Response & Revision

## Overview
Skill ini dirancang untuk memandu Research Agent dalam mengelola dan menyelesaikan tahap revisi artikel ilmiah pasca-penelaahan sejawat (*peer-review*). Agen membantu menyortir komentar, memformulasikan draf jawaban ilmiah yang diplomatis, serta memastikan perubahan yang dilakukan pada naskah konsisten dan menjawab seluruh kekhawatiran yang diajukan oleh reviewer.

## Dependencies
- `synthesize-research`
- `citation-and-reference-validator`

## Quick Start
Contoh penggunaan:
*"Gunakan skill reviewer-response-and-revision untuk menganalisis daftar komentar reviewer ini, kelompokkan menjadi mayor/minor, dan buat draf jawaban Response to Reviewers."*

## Workflow

### 1. Klasifikasi Komentar Reviewer
- Baca dokumen hasil keputusan editor dan komentar dari para reviewer.
- Pecah komentar panjang menjadi poin-poin masukan spesifik yang terpisah.
- Klasifikasikan tiap poin komentar ke dalam kategori urgensi:
  - **Mayor (Major Revision)**: Masalah mendasar pada metodologi, tambahan eksperimen baru, penulisan ulang bagian teori utama, atau perbaikan analisis data kritis.
  - **Minor (Minor Revision)**: Koreksi penulisan (*typos*), permintaan klarifikasi teks, penambahan referensi tertentu, atau perbaikan visualisasi grafik/tabel.

### 2. Penyusunan Dokumen Tanggapan (Response to Reviewers)
Tulis rancangan jawaban tanggapan yang sopan, profesional, dan berbasis bukti ilmiah untuk setiap poin komentar. Format respons wajib memuat:
- **Komentar Reviewer**: Salinan teks asli komentar reviewer.
- **Tanggapan Penulis (Author Response)**: Jawaban penjelasan yang logis (e.g., *"Kami setuju dengan pendapat reviewer. Oleh karena itu, kami telah melakukan..."* atau penjelasan ilmiah jika penulis memilih menyanggah masukan reviewer disertai bukti sitasi).
- **Perubahan Naskah (Changes in Manuscript)**: Salinan teks lama sebelum revisi vs teks baru setelah revisi beserta lokasi halaman/baris perubahannya.

### 3. Perencanaan Revisi Konsisten pada Naskah
- Petakan perubahan teks agar tidak merusak konsistensi antar-bagian dalam naskah (misalnya, jika ada parameter eksperimen yang diubah karena masukan reviewer, pastikan data pada tabel hasil, pembahasan, dan kesimpulan ikut diperbarui).

### 4. Format Laporan Tindak Lanjut Revisi
Sajikan laporan tindak lanjut revisi menggunakan format tabel wajib berikut:
| ID Komentar | Reviewer # | Isi Komentar Reviewer | Kategori (Mayor/Minor) | Tindakan Revisi & Draf Tanggapan Penulis |
|---|---|---|---|---|

## Common Mistakes & Aturan Kritis
- **Tanggapan Defensif Tanpa Dasar**: Menyanggah komentar reviewer hanya berdasarkan opini subjektif tanpa menyertakan argumen metodologis atau rujukan ilmiah pembanding yang valid.
- **Mengabaikan Komentar Tertentu**: Tidak menjawab salah satu poin komentar reviewer. Semua komentar (baik mayor maupun minor) harus dijawab secara eksplisit dan tuntas.
- **Inkonsistensi Revisi Naskah**: Menulis di dokumen tanggapan bahwa teks naskah telah diubah, tetapi lupa melakukan pembaruan pada berkas dokumen naskah asli.
- **Bahasa yang Kurang Sopan**: Menggunakan nada bicara yang terkesan menyalahkan reviewer karena "tidak memahami metode penulis". Nada tulisan harus selalu tetap profesional, diplomatis, dan apresiatif terhadap waktu reviewer.
