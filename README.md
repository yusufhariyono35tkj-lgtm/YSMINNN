# Profil Saya Iman

Website profil pribadi resmi **Yusuf Iman Hariyono** (pelajar SMK Telkom Malang, jurusan Teknik Komputer & Jaringan) yang terdiri atas 3 halaman dengan tema terang (*light theme*) dan bahasa Indonesia formal, serta telah dikonfigurasi untuk ditayangkan melalui **Vercel**.

## Struktur Halaman

1. **Halaman 1 (`index.html` / `/`)**: Pembukaan dan judul resmi *"Profil Saya Iman"* beserta kata pengantar.
2. **Halaman 2 (`profil.html` / `/profil`)**: Data profil lengkap:
   - **Nama**: Yusuf Iman Hariyono
   - **Umur**: 16 Tahun
   - **Student of**: SMK Telkom Malang
   - **Jurusan**: Teknik Komputer & Jaringan
3. **Halaman 3 (`kontak.html` / `/kontak`)**: Informasi kontak resmi melalui Instagram.

## Penyesuaian Username Instagram

Sebelum menayangkan situs web ke publik, silakan perbarui username Instagram pada file `kontak.html`:

- Ubah `@username_instagram` pada elemen `#igHandleText` dengan username Instagram Anda.
- Ubah tautan `https://www.instagram.com/` pada tombol **Buka Instagram** menjadi `https://www.instagram.com/USERNAME_ANDA/`.

## Cara Menampilkan Website di Vercel

Konfigurasi Vercel sudah tersedia pada file `vercel.json` (`cleanUrls: true`, *security headers*, dan *asset caching*), tanpa memerlukan proses *build* tambahan (*Framework Preset: Other*).

### Opsi 1: Melalui GitHub & Vercel Dashboard (Direkomendasikan)
1. Unggah seluruh isi folder `profil-iman` ke repositori GitHub Anda.
2. Masuk ke [vercel.com](https://vercel.com) dan pilih **Add New... > Project**.
3. Impor repositori GitHub tersebut.
4. Pada bagian **Framework Preset**, biarkan **Other** dan **Output Directory** tetap default, lalu klik **Deploy**.

### Opsi 2: Melalui Vercel CLI
Jika Node.js dan Vercel CLI sudah terpasang di komputer Anda, jalankan perintah berikut di dalam folder proyek:

```bash
npx vercel --prod
```
