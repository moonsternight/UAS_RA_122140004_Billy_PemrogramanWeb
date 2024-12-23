# Bagian 1: Pemrograman Sisi Klien (Bobot: 30%)

1.1 Manipulasi DOM dengan JavaScript (15%)
- **Form Input:** Form input yang dibuat mengandung minimal 4 elemen input yang berbeda seperti teks, checkbox, radio, dan lainnya. Hal ini memungkinkan pengguna untuk memasukkan data yang kemudian dapat diproses.
- **Tampilan Data:** JavaScript digunakan untuk menampilkan data yang diterima dari server dalam tabel HTML. Ini termasuk mengambil data dari server dan menyisipkannya ke dalam elemen tabel di DOM.

![image](https://github.com/user-attachments/assets/14d9e819-e733-4b8c-b40d-b4108a11403c)

1.2 Event Handling (15%)
- **Penanganan Event:** Tiga jenis event atau lebih yang berbeda ditambahkan untuk menangani interaksi dengan form, termasuk click, submit, dan change.
- **Validasi JavaScript:** Fungsi validasi diimplementasikan di sisi klien untuk memastikan semua input memenuhi kriteria sebelum dikirim ke server. Ini mencakup validasi format email, panjang karakter, dan ketentuan lain yang harus dipenuhi.

![image](https://github.com/user-attachments/assets/69ebbbf7-9426-4a46-b188-20b46563d977)
![image](https://github.com/user-attachments/assets/5af038a2-9fa8-478d-a0de-d3b39b46118d)
![image](https://github.com/user-attachments/assets/0b408f31-a19f-4e2b-a0f3-9af6444a92c8)
![image](https://github.com/user-attachments/assets/6b63cfff-1c06-430e-9ebe-4da3f9596c59)
![image](https://github.com/user-attachments/assets/552e9c14-9cfe-4822-a907-050ccdeeb815)
![image](https://github.com/user-attachments/assets/42064edf-1d32-463d-a605-c81a457586cd)

# Bagian 2: Pemrograman Sisi Server (Bobot: 30%)

2.1 Pengelolaan Data dengan PHP (20%)
- **Metode Formulir:** Metode POST atau GET digunakan untuk mengirimkan data dari formulir ke server.
- **Parsing Data:** Parsing data dilakukan dari variabel global POST atau GET dan data tersebut divalidasi di sisi server.
- **Simpan ke Database:** Data disimpan ke dalam basis data yang juga mencakup informasi tentang jenis browser dan alamat IP pengguna.
![image](https://github.com/user-attachments/assets/bf571fb4-59e7-4e5c-ac57-3666e6226ddc)
![image](https://github.com/user-attachments/assets/d800d951-5fd7-4dc2-bc07-dd0da4af00c1)

2.2 Objek PHP Berbasis OOP (10%)
- **Objek Berbasis OOP:** Objek dalam PHP dibuat dengan setidaknya dua metode yang digunakan untuk memproses data mahasiswa.
- **Penggunaan Objek:** Objek tersebut digunakan untuk melakukan operasi seperti menyimpan atau mengambil data dari database.

![image](https://github.com/user-attachments/assets/20a28c97-a621-4345-8229-136a717a2713)

# Bagian 3: Pengelolaan Database (Bobot: 20%)

3.1 Pembuatan Tabel Database (5%)
- **Struktur Tabel:** Tabel dalam database didefinisikan dan diciptakan yang sesuai untuk menyimpan data mahasiswa.

![image](https://github.com/user-attachments/assets/02ef3bc9-3367-4c16-8047-1de0719d915b)

3.2 Konfigurasi Koneksi Database (5%)
- **Koneksi Database:** Koneksi ke database dikonfigurasi menggunakan PHP untuk memungkinkan operasi data.

![image](https://github.com/user-attachments/assets/09275646-20c2-4ecc-8612-096358f370b0)

3.3 Manipulasi Data pada Database (10%)
- **Operasi Database:** Operasi CRUD (Create, Read, Update, Delete) dilakukan pada database untuk mengelola data mahasiswa.

![image](https://github.com/user-attachments/assets/e56d1bd4-c5b2-4f31-b50c-e0f300667bf0)
![image](https://github.com/user-attachments/assets/b39824be-4b3e-403d-b67b-19002dc6a2ce)


# Bagian 4: Pengelolaan State (Bobot: 20%)

4.1 State Management dengan Session (10%)
- **Penggunaan Session:** Session dimulai di awal skrip untuk melacak dan menyimpan informasi pengguna selama sesi berlangsung.

![image](https://github.com/user-attachments/assets/0f8ce188-6451-4687-8c8d-ec1a50fbea5c)

4.2 Pengelolaan State dengan Cookie dan Browser Storage (10%)
- **Cookie:** Fungsi digunakan untuk menetapkan, mendapatkan, dan menghapus cookie yang menyimpan informasi secara lokal di browser.
- **Browser Storage:** LocalStorage dimanfaatkan untuk menyimpan data yang diperlukan secara lokal di sisi klien.

![image](https://github.com/user-attachments/assets/711af604-d9eb-4855-b445-da9249517a01)
![image](https://github.com/user-attachments/assets/468b50da-53b1-4434-b011-f422beb99f81)

# Bagian Bonus: Hosting Aplikasi Web (Bobot: 20%)
- **Langkah Hosting:** Langkah-langkah yang dilakukan untuk meng-host aplikasi web dijelaskan, termasuk pengaturan server dan konfigurasi.
Untuk meng-host aplikasi web saya, langkah pertama yang saya lakukan adalah mempersiapkan aplikasi yang berjalan dengan baik di lingkungan lokal. Setelah memastikan aplikasi bebas dari error, saya memilih InfinityFree sebagai penyedia hosting web karena menawarkan hosting PHP dan MySQL secara gratis, yang cukup untuk aplikasi web saya. Saya mendaftar di situs InfinityFree, membuat akun, dan mengunggah aplikasi menggunakan File Manager atau FTP ke direktori htdocs. Saya juga mengonfigurasi database MySQL yang diperlukan aplikasi dan memastikan aplikasi dapat mengakses serta menyimpan data dengan benar. Setelah aplikasi diunggah dan database terkonfigurasi, saya melakukan pengujian untuk memastikan bahwa aplikasi berfungsi dengan baik di server.

- **Pemilihan Penyedia Hosting:** Diskusi mengenai pemilihan penyedia hosting tertentu untuk aplikasi web.
Penyedia hosting yang saya pilih adalah InfinityFree, yang menawarkan beberapa keunggulan, seperti hosting gratis, dukungan PHP dan MySQL, serta cPanel yang mudah digunakan untuk mengelola file, database, dan pengaturan lainnya. Meskipun hosting gratis, InfinityFree tidak menampilkan iklan di website, sehingga memberikan pengalaman pengguna yang lebih baik. Subdomain gratis yang disediakan juga memungkinkan saya untuk mulai meng-host aplikasi saya tanpa biaya tambahan. Meskipun begitu, jika aplikasi saya berkembang dan membutuhkan lebih banyak sumber daya atau kontrol yang lebih besar, saya akan mempertimbangkan untuk beralih ke penyedia hosting berbayar.

- **Keamanan:** Langkah-langkah yang diambil untuk memastikan keamanan aplikasi web dijelaskan, termasuk penggunaan HTTPS, sanitasi data, dan proteksi server.
Untuk memastikan keamanan aplikasi web yang saya host, saya menggunakan HTTPS untuk mengenkripsi komunikasi antara server dan klien, sehingga data pengguna tetap aman. Saya juga mengenkripsi password pengguna dengan menggunakan fungsi password_hash() di PHP dan memastikan bahwa semua input dari pengguna disaring untuk mencegah serangan seperti SQL Injection, Cross-Site Scripting (XSS), dan Cross-Site Request Forgery (CSRF). Selain itu, saya membatasi jumlah percobaan login untuk mencegah serangan brute force dan melakukan backup data secara berkala. Pengaturan keamanan lainnya meliputi penggunaan .htaccess untuk membatasi akses ke file dan folder sensitif.

- **Konfigurasi Server:** Pengaturan dan konfigurasi server yang digunakan untuk mendukung aplikasi web dijelaskan, termasuk pengaturan PHP, database, dan server web.
Untuk mendukung aplikasi web saya, saya mengonfigurasi server dengan versi PHP yang sesuai, serta pengaturan seperti max_execution_time, memory_limit, dan upload_max_filesize. Aplikasi ini juga terhubung ke database MySQL melalui informasi koneksi yang disediakan oleh cPanel di InfinityFree. Untuk meningkatkan performa dan SEO, saya menggunakan mod_rewrite di Apache melalui file .htaccess untuk mengonfigurasi URL aplikasi agar lebih bersih. Selama pengembangan, saya mengaktifkan error reporting untuk memudahkan deteksi masalah, tetapi mematikannya di lingkungan produksi. Selain itu, saya mengonfigurasi server untuk melakukan backup otomatis guna menjaga keamanan dan keberlanjutan data aplikasi. Dengan langkah-langkah ini, saya memastikan aplikasi web saya berjalan dengan optimal dan aman di server yang telah dikonfigurasi dengan baik.
