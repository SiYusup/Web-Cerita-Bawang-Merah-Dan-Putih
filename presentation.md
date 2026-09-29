# 📜 Naskah lan Struktur Presentasi Aplikasi: Web Cerita Bawang Merah & Bawang Putih

> **Basa:** Basa Jawa Ngoko Alus  
> **Tema:** Presentasi Proyek Media Pembelajaran Interaktif Basa Jawa & Dongeng Nusantara  
> **Penyaji:** Syekh Yusuf Pramadi (Absen: 32 | Kelas: XII RPL 2)  

---

## 🎬 Slide 1: Pambuka lan Perkenalan (Introduction & Greeting)

### 📌 Poin Perkenalan:
- **Nama:** Syekh Yusuf Pramadi
- **Nomer Absen:** 32
- **Kelas:** XII RPL 2

### 📢 Pangandikan Presenter:
"Sugeng panggihan Bapak/Ibu lan kanca-kanca sedaya. Tepangaken, nami kula **Syekh Yusuf Pramadi**, nomer absen **32** saking kelas **XII RPL 2**. 

Ing kalodhangan ingkang sae punika, kula badhe ngenalaken sarta mempresentasikan setunggal karya media interaktif ingkang nyesuekaken kemajuan teknologi visual kaliyan pelestarian budaya Nusantara, yaiku **Web Landing Page Interaktif Dongeng Bawang Merah lan Bawang Putih**.

Aplikasi menika dipunrancang mligi kagem paring pengalaman maos dongeng ingkang beda, nggunakaken basa dwibasa (Basa Indonesia lan Basa Jawa), sarta dipunjangkepi visual animasi sinematik berbasis *scroll*."

---

## 💡 Slide 2: Latar Belakang lan Ancas/Tujuan (Background & Purpose)

### 📌 Poin Utama:
1. **Nglestariaken Dongeng Nusantara:** Ngangkat cerita rakyat populer supados tetep resep dipunwaos dening generasi mudha.
2. **Media Pasinaon Basa Jawa:** Paring fasilitas sinau Basa Jawa ingkang luwih interaktif lan boten mboseni.
3. **Inovasi Visual:** Nggabungaken seni crita tradisional kaliyan animasi modern berbasis web.

### 📢 Pangandikan Presenter:
"Latar belakang dipun-damelipun aplikasi punika amargi kathahipun kanca-kanca mudha ingkang kadang rumaos angel utawi kirang tertarik nalika sinau Basa Jawa kanthi cara konvensional. 

Mila saking punika, ancas utami (tujuan utama) saking aplikasi punika yaiku:
- Supados maos dongeng Basa Jawa rumaos luwih seru lan modern.
- Paring kemudahan kagem panjenengan sedaya nalika kepengin memahami tegesipun cerita liwat **fitur tombol saklar basa (bilingual toggle)** secara instan.
- Ngemot pesen moral ingkang luhur babagan kesabaran lan akibat saking watek srakah."

---

## 🛠️ Slide 3: Fitur-fitur Unggulan Aplikasi (Key Features)

### 📌 Poin Utama:
1. **Fitur Dwibasa (Bilingual Switch ID/JV):** Basa Indonesia & Basa Jawa.
2. **Cinematic Scroll & Pinning Effect:** Gambar lan cerita mlaku alon ngetutaken *scroll*.
3. **Efek Partikel 3D (Three.js):** Efek cahya partikel gaib nalika pindah babak.
4. **Desain Monochrome (B&W Elegance):** Gaya visual tegas, elegan, lan nyaman dipunwaos.
5. **Dukungan Mode Offline:** Boten mbetahaken sambungan internet nalika dipun-setel ing komputer lokal.

### 📢 Pangandikan Presenter:
"Menawa panjenengan mriksani aplikasi punika, wonten sawetara fitur unggulan ingkang dados kekuatan utama:
- **Sepisan, Fitur Dwibasa:** Panjenengan saged ngowahi basa saking Basa Indonesia menyang Basa Jawa ingkang alus mung kanthi sekali klik ing tombol navigasi inggil. Teks bakal berganti langsung tanpa ngrusak posisi maos utawi animasi.
- **Kaping kalih, Cinematic Scroll:** Crita dipun-buntel ing 6 babak visual. Saben panjenengan nggulir (*scroll*) layar mudhun, foto lan teks bakal mandheg (*pinned*) kanthi efek transisi ingkang alus lan dramatis.
- **Kaping tiga, Efek Partikel 3D:** Dipundhukung teknologi Three.js kagem paring sensasi sihir nalika transisi antarbabak.
- **Kaping sekawan, Fleksibilitas:** Aplikasi punika ugi saged dipun-bukak kanthi **100% offline**, dadi gampang dipun-angge ing sekolah utawi papan ingkang kirang sinyal internet."

---

## 💻 Slide 4: Teknologi ingkang Dipungunakaken (Tech Stack)

### 📌 Poin Utama:
- **HTML5 & CSS3 (Tailwind CSS):** Struktur lan desain visual responsif.
- **Vanilla JavaScript:** Logika aplikasi tanpa *framework* berat.
- **GSAP 3.12.5 & ScrollTrigger:** Piranti animasi *scroll* interaktif.
- **Three.js:** Visual 3D partikel transisi background.
- **Lenis Smooth Scroll:** Njamin pengalaman *scroll* tetep alus ing desktop.

### 📢 Pangandikan Presenter:
"Babagan arsitektur teknisipun, aplikasi punika dipun-bangun nggunakaken teknologi web murni tanpa mbetahaken proses *build* utawi *npm install* ingkang rumit:
- Kita nggunakaken **Vanilla JavaScript** lan **HTML5 semantik**.
- Kagem urusan animasi interaktif berbasis scroll, kita nggunakaken **GSAP (GreenSock) lan ScrollTrigger**, dadi saben gerakan *scroll* pangguna langsung ngendhalikake jalaran cerita (*scrubbed animation*).
- Sedaya piranti perpustakaan (*library*) dipun-simpen ing folder `vendor/` lokal, saengga performa aplikasi cepet banget lan boten bergantung marang jaringan CDN eksternal."

---

## 📱 Slide 5: Tata Cara Ngalankake lan Demonstrasi (How to Run & Demo)

### 📌 Langkah Praktis:
1. **Cara Gampang:** Cukup klik ganda file `index.html` ing folder komputer panjenengan.
2. **Cara Server Lokal:** Jalankaken perintah `python -m http.server 8000` ing terminal, lajeng bukak `http://localhost:8000`.

### 📢 Pangandikan Presenter:
"Kagem panjenengan ingkang kepengin nyoba utawi ngelakokaken aplikasi punika, caranipun gampil sanget:
1. Cukup bukak folder project, lajeng klik ganda file `index.html`. Aplikasi bakal langsung kabukak ing browser (*Chrome, Edge, utawi Firefox*).
2. Manawi kepengin asil ingkang luwih maksimal lan bebas alangan *security protocol*, panjenengan saged ngelakokaken `python -m http.server` lajeng akses lumantar `localhost:8000`.

Nalika aplikasi wis kabukak:
- Pangguna saged mencet tombol **'Mulai Cerita'** utawi langsung nggulir tetikus mudhun.
- Panjenengan saged nyoba mencet tombol **ID | JV** ing bagian ndhuwur kagem mriksani owah-owahan basa ingkang cepet lan instan."

---

## 🌟 Slide 6: Pesen Moral lan Panutup (Moral Value & Closing)

### 📌 Pesen Moral Dongeng:
> *"Kebaikan dan kesabaran akan berbuah manis, sedangkan keserakahan akan menghancurkan dirinya sendiri."*  
> *(Kesaenan lan kesabaran bakal woh manis, dene kesrakahan bakal ngrusak awake dhewe.)*

### 📢 Pangandikan Presenter:
"Minangka penutup saking presentasi punika, piwulang luhur saking dongeng Bawang Merah lan Bawang Putih punika ngenalaken babagan pentingipun watek jujur, sregep, lan sabar kados Bawang Putih, sarta nilaraken watek srakah lan drengki kados Bawang Merah.

Mugi-mugi media pembelajaran interaktif punika saged paring manfaat, nambah rasa tresna dhumateng budaya Nusantara, lan nglarani semangat sinau Basa Jawa kagem panjenengan sedaya.

Matur nuwun sanget atas kawatosan panjenengan sedaya. Menawi wonten pitakenan, kula aturi sumangga."
