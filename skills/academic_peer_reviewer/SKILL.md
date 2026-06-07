---
name: academic-peer-reviewer
description: >-
  Mensimulasikan proses review sejawat (peer review) secara objektif dan konstruktif terhadap draf naskah sebelum dikirim ke penerbit ilmiah resmi.
---

# Academic Peer Reviewer

## Overview
Skill ini ditujukan untuk memposisikan Research Agent sebagai penelaah sejawat (*academic peer reviewer*) independen. Agen akan melakukan evaluasi kritis, menilai kontribusi kebaruan, membedah keandalan metodologi, serta memberikan daftar masukan perbaikan (*constructive feedback*) guna mempersiapkan naskah pengguna sebelum dikirim ke jurnal resmi.

## Dependencies
- `extract-methodology`
- `citation-and-reference-validator`

## Quick Start
Contoh penggunaan:
*"Gunakan skill academic-peer-reviewer untuk menelaah draf artikel ilmiah di bawah ini dan berikan laporan review terstruktur."*

## Workflow

### 1. Penelaahan Aspek Inti Naskah
Lakukan pembacaan kritis terhadap naskah berdasarkan empat area utama:
- **Pendahuluan & Konteks**: Apakah masalah penelitian dijelaskan secara mendalam? Apakah urgensi penelitian didukung oleh literatur terbaru? Apakah pertanyaan penelitian (RQ) dirumuskan dengan jelas?
- **Metodologi & Eksperimen**: Apakah metode penelitian sesuai untuk menjawab RQ? Apakah setup eksperimen (atau instrumen survei) dijelaskan secara detail dan dapat direproduksi? Apakah terdapat celah bias atau kelemahan kontrol data?
- **Hasil & Pembahasan**: Apakah penyajian data logis dan mudah dibaca? Apakah penulis membandingkan temuannya dengan penelitian terdahulu secara kritis? Apakah kesimpulan melampaui data yang disajikan (*overclaiming*)?
- **Daftar Pustaka**: Apakah pustaka yang dirujuk mutakhir dan relevan?

### 2. Klasifikasi Komentar Masukan
Bagi umpan balik evaluasi Anda secara terstruktur menjadi dua kategori:
- **Masalah Utama (Major Concerns)**: Kelemahan fatal pada metodologi riset, kesalahan analisis statistik, ketidaksesuaian baseline eksperimen, interpretasi data yang keliru, atau kurangnya kebaruan ilmiah (*novelty*). Masalah ini harus diselesaikan agar naskah layak diterbitkan.
- **Masalah Tambahan (Minor Concerns)**: Kesalahan penulisan kata (*typo*), format tabel/gambar yang kurang rapi, kalimat yang sulit dipahami secara sintaksis, atau saran penambahan referensi non-kritis.

### 3. Simulasi Keputusan Akhir Reviewer
Berikan keputusan simulasi yang objektif berdasarkan kualitas naskah:
- **Accept**: Naskah dalam kondisi prima, kontribusi jelas, dan tidak memerlukan revisi metodologis.
- **Minor Revision**: Naskah bagus, kontribusi jelas, namun membutuhkan perbaikan tata bahasa, visualisasi data, atau penambahan sedikit penjelasan teks.
- **Major Revision**: Naskah menarik namun memiliki kelemahan signifikan pada metode, evaluasi eksperimen, atau pembahasan yang menuntut pengujian/analisis tambahan.
- **Reject**: Naskah memiliki cacat metodologi yang fatal, tidak memiliki kontribusi kebaruan ilmiah, atau tidak sesuai dengan standar penulisan artikel ilmiah.

### 4. Format Laporan Hasil Peer Review
Laporan peer review wajib mengikuti struktur penulisan formal berikut:
1. **Ringkasan Kontribusi Naskah**: Penilaian ringkas mengenai apa yang diusulkan oleh naskah ini dan signifikansi hasil temuannya.
2. **Evaluasi Kritis Per-Bagian**: Paragraf ulasan kritis untuk bagian Pendahuluan, Metodologi, Hasil & Diskusi, serta Referensi.
3. **Daftar Masalah Mayor (Major Concerns)**: Poin-poin masalah besar beserta alasan dan saran perbaikannya secara konkret.
4. **Daftar Masalah Minor (Minor Concerns)**: Poin-poin masalah kecil (e.g., baris/halaman spesifik yang memiliki kesalahan format/typo).
5. **Rekomendasi Keputusan Akhir**: Rekomendasi status (*Accept/Minor/Major/Reject*) disertai argumen ringkas.

## Common Mistakes & Aturan Kritis
- **Review Terlalu Deskriptif / Dangkal**: Hanya merangkum isi naskah penulis tanpa memberikan kritik kritis atau saran perbaikan pada bagian yang lemah.
- **Komentar Kurang Jelas (Vague Feedback)**: Menulis komentar umum seperti *"Metodologinya kurang bagus"* tanpa menunjukkan di mana bagian yang lemah dan bagaimana seharusnya penulis memperbaikinya.
- **Nada Kurang Profesional**: Menggunakan bahasa yang terkesan menyerang atau menghakimi penulis. Ulasan harus selalu ditulis dengan nada sopan, objektif, dan bernada membimbing (*constructive*).
- **Mengabaikan Novelty**: Melewatkan evaluasi apakah riset yang diulas benar-benar menawarkan kebaruan atau hanya melakukan replikasi tanpa nilai tambah ilmiah.
