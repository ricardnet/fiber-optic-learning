const quizPool = {
  "Dasar Fiber Optik": [
    {
      question: "Apa singkatan dari istilah fiber optik dalam bahasa Inggris?",
      options: ["Fibre Optics", "Fiber Optical", "Optical Fiber", "Semua jawaban benar"],
      answer: 3,
      explanation: "Baik Fibre Optics, Fiber Optical, maupun Optical Fiber umum digunakan untuk mendefinisikan media transmisi serat optik."
    },
    {
      question: "Prinsip fisika apa yang menyebabkan cahaya terpantul sempurna di dalam core kaca?",
      options: ["Hukum Snellius tentang Pembiasan", "Pemantulan Internal Sempurna (Total Internal Reflection)", "Dispersi Cahaya Matahari", "Polarisasi Cahaya Vertikal"],
      answer: 1,
      explanation: "Pemantulan internal sempurna merangkap cahaya di dalam inti kaca karena indeks bias inti yang lebih tinggi dari selubungnya."
    },
    {
      question: "Apakah peran dari lapisan Cladding pada kabel serat optik?",
      options: ["Melindungi kabel dari sengatan petir", "Memantulkan berkas cahaya kembali ke dalam core", "Menghantarkan arus listrik cadangan", "Mengubah warna sinar laser"],
      answer: 1,
      explanation: "Cladding bertugas sebagai cermin pembatas indeks bias rendah agar berkas cahaya tetap memantul di dalam core."
    },
    {
      question: "Warna jaket patch cord manakah yang mengindikasikan jenis serat optik Single Mode?",
      options: ["Oranye", "Kuning", "Aqua (Biru Muda)", "Abu-abu"],
      answer: 1,
      explanation: "Kabel Single Mode (OS1/OS2) diidentifikasi secara universal dengan jaket berwarna kuning."
    },
    {
      question: "Berapakah ukuran diameter core yang umum pada serat optik Single Mode?",
      options: ["9 Mikron (&mu;m)", "50 Mikron (&mu;m)", "125 Mikron (&mu;m)", "250 Mikron (&mu;m)"],
      answer: 0,
      explanation: "Serat optik Single Mode memiliki inti yang sangat sempit, yaitu berkisar 9 mikron."
    },
    {
      question: "Berapakah ukuran diameter cladding standar yang digunakan baik pada SM maupun MM?",
      options: ["9 &mu;m", "50 &mu;m", "125 &mu;m", "250 &mu;m"],
      answer: 2,
      explanation: "Ukuran diameter terluar cladding standar industri adalah 125 mikron."
    },
    {
      question: "Manakah jenis kabel fiber optik yang cocok digunakan untuk transmisi jaringan jarak jauh antar pulau?",
      options: ["Multi Mode Step Index", "Multi Mode Graded Index", "Single Mode", "Kabel UTP Cat 6"],
      answer: 2,
      explanation: "Single Mode memiliki redaman sangat kecil dan tidak mengalami dispersi modal, menjadikannya pilihan utama untuk transmisi jarak sangat jauh."
    },
    {
      question: "Apa sumber cahaya yang biasa dipakai pada sistem transmisi kabel Multi Mode?",
      options: ["Laser Dioda", "LED atau VCSEL", "Lampu Pijar Tungsten", "Sinar Ultraviolet"],
      answer: 1,
      explanation: "Logika Multi Mode berdiameter besar sehingga sumber cahaya LED atau VCSEL yang bermata lebar sudah cukup memadai dan ekonomis."
    },
    {
      question: "Mengapa fiber optik kebal terhadap gangguan gelombang elektromagnetik (EMI)?",
      options: ["Karena memiliki pelindung baja yang tebal", "Karena media transmisinya terbuat dari kaca/plastik dan menggunakan cahaya (bukan listrik)", "Karena frekuensi cahaya sangat rendah", "Karena dipasang di bawah tanah"],
      answer: 1,
      explanation: "Cahaya foton merambat pada bahan isolator (kaca), sehingga tidak terpengaruh oleh gelombang elektromagnetik seperti kabel tembaga."
    },
    {
      question: "Tipe serat optik yang dirancang tahan terhadap tekukan ekstrem tanpa peningkatan loss yang besar disebut...",
      options: ["Bend-insensitive (misal G.657)", "Multi Mode Step Index", "Core Steel Optic", "Backbone G.652"],
      answer: 0,
      explanation: "Serat optik standar G.657 merupakan tipe Bend-insensitive yang dirancang khusus untuk instalasi rumah (FTTH) yang banyak berbelok."
    }
  ],
  "Warna Core": [
    {
      question: "Apakah nama warna core fiber optik yang menempati urutan nomor 1?",
      options: ["Oranye", "Biru", "Hijau", "Coklat"],
      answer: 1,
      explanation: "Urutan warna pertama dalam kode warna serat optik 12 core adalah Biru."
    },
    {
      question: "Urutan warna standar core ke-3 adalah...",
      options: ["Coklat", "Abu-abu", "Hijau", "Putih"],
      answer: 2,
      explanation: "Berdasarkan kode warna (BOHAPuMeHiKuUPT), urutan ketiga adalah Hijau."
    },
    {
      question: "Dalam urutan 12 core serat optik, warna nomor 6 adalah...",
      options: ["Putih", "Merah", "Hitam", "Abu-abu"],
      answer: 0,
      explanation: "Urutan nomor 6 adalah Putih. Jembatan keledai: A (Abu-5), Pu (Putih-6)."
    },
    {
      question: "Warna Hitam menempati posisi urutan core nomor berapa?",
      options: ["Nomor 7", "Nomor 8", "Nomor 9", "Nomor 10"],
      answer: 1,
      explanation: "Urutan warna ke-8 adalah Hitam. Jembatan keledai: Me (Merah-7), Hi (Hitam-8)."
    },
    {
      question: "Core nomor 12 (terakhir dalam satu tube) berwarna...",
      options: ["Ungu", "Pink", "Toska", "Kuning"],
      answer: 2,
      explanation: "Core terakhir atau nomor 12 diidentifikasi dengan warna Toska."
    },
    {
      question: "Jika Anda menemukan core berwarna Kuning, itu merupakan core nomor...",
      options: ["Nomor 8", "Nomor 9", "Nomor 10", "Nomor 11"],
      answer: 1,
      explanation: "Core nomor 9 adalah berwarna Kuning. Urutannya: Merah(7), Hitam(8), Kuning(9)."
    },
    {
      question: "Core nomor 10 diidentifikasi dengan warna...",
      options: ["Ungu", "Pink", "Toska", "Putih"],
      answer: 0,
      explanation: "Core nomor 10 adalah Ungu. Urutannya: Kuning(9), Ungu(10), Pink(11)."
    },
    {
      question: "Manakah jembatan keledai hafal kode warna core optik yang benar dan populer di Indonesia?",
      options: [
        "ME-JI-KU-HI-BI-NI-U",
        "BI-OR-HI-CO-A-PU-ME-HI-KU-U-PI-T",
        "BI-OR-ME-HI-KU-PU-CO-A-U-PI-T-HI",
        "HI-OR-BI-CO-A-PU-ME-HI-KU-U-PI-T"
      ],
      answer: 1,
      explanation: "BOHAPuMeHiKuUPT: Biru, Oranye, Hijau, Coklat, Abu-abu, Putih, Merah, Hitam, Kuning, Ungu, Pink, Toska."
    },
    {
      question: "Dalam satu kabel besar berisi 24 core dengan 2 Loose Tube (masing-masing tube berisi 12 core). Core nomor 13 adalah core pertama di Loose Tube ke-2. Warna core nomor 13 tersebut adalah...",
      options: ["Biru", "Hitam", "Oranye", "Kuning"],
      answer: 0,
      explanation: "Setiap loose tube mengulang urutan warna dari awal (1-12). Maka core 13 (core ke-1 di tube 2) akan kembali berwarna Biru."
    },
    {
      question: "Jika di lapangan Anda menemukan core nomor 11, warna apakah itu?",
      options: ["Ungu", "Pink", "Toska", "Coklat"],
      answer: 1,
      explanation: "Core nomor 11 adalah berwarna Pink."
    }
  ],
  "Perhitungan Redaman": [
    {
      question: "Rumus manakah yang digunakan untuk menghitung total redaman (loss) kabel serat optik?",
      options: [
        "Total Loss = Panjang Kabel + Sambungan + Konektor",
        "Total Loss = (Panjang Kabel x Koefisien Redaman) + (Jumlah Sambungan x Loss Sambungan) + (Jumlah Konektor x Loss Konektor)",
        "Total Loss = Daya Tx / Daya Rx",
        "Total Loss = Hambatan x Kuat Arus"
      ],
      answer: 1,
      explanation: "Total redaman diperoleh dengan menjumlahkan redaman kabel intrinsik, redaman setiap sambungan splicing, dan redaman konektor."
    },
    {
      question: "Sebuah kabel Single Mode memiliki panjang 10 Km dengan koefisien redaman 0.2 dB/Km. Berapa redaman murni kabel tersebut?",
      options: ["20 dB", "2 dB", "0.2 dB", "10.2 dB"],
      answer: 1,
      explanation: "Redaman kabel = 10 Km × 0.2 dB/Km = 2 dB."
    },
    {
      question: "Jika sebuah link memiliki 4 sambungan fusion splicing dengan loss per sambungan adalah 0.05 dB, berapa total loss sambungan tersebut?",
      options: ["0.2 dB", "0.05 dB", "0.5 dB", "2.0 dB"],
      answer: 0,
      explanation: "Loss sambungan = 4 × 0.05 dB = 0.2 dB."
    },
    {
      question: "Hitung total loss link: Panjang kabel 5 Km (redaman 0.3 dB/Km), 2 sambungan (redaman 0.1 dB/sambungan), dan 2 konektor (redaman 0.5 dB/konektor).",
      options: ["1.7 dB", "2.7 dB", "3.0 dB", "2.2 dB"],
      answer: 1,
      explanation: "Total Loss = (5 × 0.3) + (2 × 0.1) + (2 × 0.5) = 1.5 + 0.2 + 1.0 = 2.7 dB."
    },
    {
      question: "Berapakah batas maksimal redaman (loss) konektor SC yang direkomendasikan standar TIA/EIA-568?",
      options: ["0.05 dB", "0.75 dB", "1.5 dB", "3.0 dB"],
      answer: 1,
      explanation: "Standar TIA/EIA-568 membatasi loss maksimal konektor optik sebesar 0.75 dB per konektor, meskipun rata-rata di lapangan di bawah 0.5 dB."
    },
    {
      question: "Jika Tx Power adalah +3 dBm dan Rx Power yang terukur adalah -22 dBm, berapakah redaman total (Link Loss) sistem tersebut?",
      options: ["19 dB", "25 dB", "22 dB", "-25 dB"],
      answer: 1,
      explanation: "Loss = Tx Power - Rx Power = 3 - (-22) = 25 dB."
    },
    {
      question: "Berapakah Rx Power jika Tx Power dari SFP laser adalah +5 dBm dan total redaman link adalah 20 dB?",
      options: ["-15 dBm", "-25 dBm", "25 dBm", "-20 dBm"],
      answer: 0,
      explanation: "Rx Power = Tx Power - Loss = 5 dBm - 20 dB = -15 dBm."
    },
    {
      question: "Dalam Link Power Budget, mengapa kita perlu menambahkan Safety Margin (Faktor Pengaman)?",
      options: [
        "Untuk mengantisipasi penuaan perangkat laser dan kemungkinan perbaikan splicing di masa depan",
        "Untuk mempercepat jalannya cahaya laser",
        "Agar biaya proyek menjadi lebih mahal",
        "Untuk menghilangkan noise elektromagnetik"
      ],
      answer: 0,
      explanation: "Safety Margin (biasanya 2-3 dB) ditambahkan untuk mengantisipasi penurunan performa laser seiring waktu dan perbaikan sambungan jika kabel putus di kemudian hari."
    },
    {
      question: "Mengapa loss penyambungan dengan Fusion Splicer jauh lebih kecil daripada menggunakan Konektor?",
      options: [
        "Bagian penyambung fusion menggunakan tembaga",
        "Karena kedua kaca murni melebur menyatu sehingga meminimalkan celah udara atau refleksi balik",
        "Karena konektor berukuran lebih besar",
        "Karena cahaya tidak melewati area splicing"
      ],
      answer: 1,
      explanation: "Peleburan kaca menghilangkan celah udara (air gap) yang merupakan penyebab utama refleksi balik dan pembiasan cahaya keluar jalur."
    },
    {
      question: "Sebuah modem ONT menerima daya -32 dBm. Jika sensitivitas minimum receiver modem adalah -28 dBm, bagaimanakah status link tersebut?",
      options: [
        "Link berjalan normal dan kencang",
        "Daya terima terlalu kuat (saturasi)",
        "Link drop / tidak dapat terkoneksi (LOS)",
        "Daya pas"
      ],
      answer: 2,
      explanation: "-32 dBm berada di bawah batas sensitivitas minimum (-28 dBm). Sinyal terlalu lemah untuk diterjemahkan oleh receiver, mengakibatkan kegagalan link (LOS)."
    }
  ],
  "Alat Fiber Optik": [
    {
      question: "Alat pengupas jaket pelindung dan coating serat optik bernama...",
      options: ["Fiber Cleaver", "Miller Stripper", "Fusion Splicer", "OPM"],
      answer: 1,
      explanation: "Stripper (tang pengupas) digunakan khusus untuk mengupas kulit pelindung buffer dan coating tanpa mematahkan core kaca."
    },
    {
      question: "Untuk membersihkan kotoran/debu pada ujung konektor sebelum dicolokkan ke port, cairan apa yang wajib digunakan?",
      options: ["Air mineral bersih", "Alkohol murni kadar 90% ke atas", "Minyak pelumas mesin", "Cairan sabun cuci"],
      answer: 1,
      explanation: "Alkohol isopropil kadar tinggi (90-99%) digunakan karena cepat menguap dan tidak meninggalkan residu air atau noda pada ujung ferrule."
    },
    {
      question: "Alat pemotong inti serat optik agar menghasilkan patahan ujung yang rata dan tegak lurus adalah...",
      options: ["Cleaver", "Splicer", "Stripper", "Gunting Baja"],
      answer: 0,
      explanation: "Fiber Cleaver memotong/mematahkan kaca secara presisi dengan sudut 90 derajat."
    },
    {
      question: "Alat yang berfungsi memancarkan cahaya laser stabil (1310nm/1550nm) untuk keperluan pengetesan redaman adalah...",
      options: ["Optical Power Meter (OPM)", "Optical Light Source (OLS)", "Visual Fault Locator (VFL)", "OTDR"],
      answer: 1,
      explanation: "OLS berfungsi memancarkan cahaya laser dengan panjang gelombang dan daya pancar yang konstan untuk diukur oleh OPM di ujung seberang."
    },
    {
      question: "Senter laser merah terang berdaya tinggi yang memancarkan cahaya tampak untuk memeriksa keretakan serat optik jarak dekat disebut...",
      options: ["OTDR", "OPM", "Visual Fault Locator (VFL)", "Optical Light Source (OLS)"],
      answer: 2,
      explanation: "VFL memancarkan cahaya laser merah (visible light) yang dapat dilihat langsung oleh mata jika terjadi kebocoran sinyal pada kabel optik."
    },
    {
      question: "Alat pengukur yang mampu menggambarkan grafik redaman di sepanjang kabel dan menentukan jarak lokasi kerusakan kabel secara visual adalah...",
      options: ["Optical Power Meter (OPM)", "OTDR", "Visual Fault Locator (VFL)", "Fusion Splicer"],
      answer: 1,
      explanation: "OTDR (Optical Time Domain Reflectometer) mengirim pulsa cahaya dan mengukur pantulan baliknya untuk memetakan kondisi fisik kabel sepanjang rute."
    },
    {
      question: "Fungsi dari tabung plastik pelindung sambungan las (Protection Sleeve) adalah...",
      options: [
        "Mencegah kebocoran arus listrik",
        "Melindungi titik sambungan core kaca yang rapuh setelah displicing agar tidak mudah patah",
        "Menurunkan redaman sambungan",
        "Mengikat kabel ke tiang"
      ],
      answer: 1,
      explanation: "Setelah displicing, kaca telanjang tidak lagi memiliki coating pelindung. Protection sleeve memberikan perlindungan kaku berkawat baja."
    },
    {
      question: "Untuk memotong serat aramid (Kevlar) yang sangat ulet di dalam kabel optik, digunakan alat...",
      options: ["Cleaver", "Gunting Kevlar Khusus (Kevlar Cutter)", "Splicer", "Tang Potong Kawat"],
      answer: 1,
      explanation: "Serat Kevlar sangat ulet dan sulit dipotong dengan gunting biasa, sehingga membutuhkan gunting khusus bergerigi tajam."
    },
    {
      question: "Manakah alat berikut yang membutuhkan catu daya baterai untuk memancarkan api listrik pengelas kaca?",
      options: ["Fiber Cleaver", "Fusion Splicer", "OTB Panel", "Joint Closure"],
      answer: 1,
      explanation: "Fusion Splicer membutuhkan daya listrik tegangan tinggi untuk menciptakan busur api listrik pelebur kaca."
    },
    {
      question: "Ketika menggunakan OTDR, peristiwa turunnya grafik secara mendadak tanpa refleksi puncak menunjukkan adanya...",
      options: ["Sambungan konektor baru", "Tekukan tajam (bending) atau sambungan las", "Ujung kabel yang terbuka bersih", "Sinyal yang membaik"],
      answer: 1,
      explanation: "Sambungan las (splice) atau bending menghasilkan penurunan grafik (step down) tanpa puncak refleksi karena tidak ada celah udara pemantul."
    }
  ],
  "Troubleshooting": [
    {
      question: "Langkah pertama yang paling tepat dilakukan saat menghadapi laporan internet pelanggan mati dengan status LOS merah di modem adalah...",
      options: [
        "Langsung mengganti modem baru",
        "Mengukur daya terima cahaya menggunakan OPM di kabel drop pelanggan",
        "Memanjat tiang dan memotong kabel",
        "Melakukan reset konfigurasi pabrik pada modem pelanggan"
      ],
      answer: 1,
      explanation: "Mengukur daya terima (Rx Power) dengan OPM adalah langkah diagnosis pertama untuk memastikan apakah ada sinyal optik yang masuk atau tidak."
    },
    {
      question: "Daya terima cahaya pada OPM menunjukkan nilai -32 dBm. Indikator internet lambat dan putus-putus. Apakah penyebab paling umum masalah ini?",
      options: [
        "Kabel optik putus total",
        "Terjadi redaman tinggi akibat kabel terjepit/menekuk tajam atau connector kotor",
        "Daya laser pemancar OLT terlalu kuat",
        "Kabel optik terlalu pendek"
      ],
      answer: 1,
      explanation: "-32 dBm menunjukkan sinyal tetap sampai namun sangat lemah, mengindikasikan adanya redaman tinggi (bukan kabel putus total)."
    },
    {
      question: "Jika hasil pengukuran OPM adalah -50 dBm atau 'LO' (Low), tindakan diagnostik selanjutnya untuk melacak lokasi kerusakan kabel jarak jauh adalah menggunakan...",
      options: ["Optical Light Source (OLS)", "Visual Fault Locator (VFL)", "OTDR", "Miller Stripper"],
      answer: 2,
      explanation: "Untuk mendeteksi lokasi kabel putus jarak jauh yang tidak terlihat mata, teknisi menggunakan OTDR untuk mengetahui jarak gangguan secara presisi."
    },
    {
      question: "Sebuah kabel optik putus di tengah jalan pada jarak 1.5 Km dari OTB. Tindakan perbaikan yang harus dilakukan teknisi adalah...",
      options: [
        "Membersihkan connector dengan alkohol",
        "Menyambung kembali ujung kabel yang putus menggunakan Fusion Splicer di dalam Joint Closure",
        "Mengganti seluruh kabel dari ujung ke ujung",
        "Mengikat kedua ujung kabel dengan tali simpul"
      ],
      answer: 1,
      explanation: "Kabel putus di tengah rute diperbaiki dengan mengupas ujung-ujungnya lalu dilas (splicing) menggunakan Fusion Splicer dan dilindungi dalam Joint Closure."
    },
    {
      question: "Saat pengetesan dengan VFL, terlihat cahaya merah terang memancar bocor menembus jaket pelindung pigtail di dalam kotak OTB. Tindakan perbaikan yang tepat adalah...",
      options: [
        "Merapikan tekukan pigtail agar tidak melengkung terlalu tajam (memperbaiki bending)",
        "Membiarkan saja karena cahaya merah terlihat indah",
        "Memotong pigtail dan menyambungnya dengan kabel UTP",
        "Menutup kebocoran cahaya dengan isolasi hitam"
      ],
      answer: 0,
      explanation: "Kebocoran cahaya disebabkan oleh bending (tekukan tajam). Memperbaiki radius lekukan kabel pigtail akan memulihkan redaman ke kondisi normal."
    },
    {
      question: "Mengapa teknisi dilarang keras melihat langsung ke ujung konektor serat optik yang sedang aktif menggunakan mata telanjang?",
      options: [
        "Karena cahaya laser inframerah tidak terlihat namun energinya dapat membakar retina mata secara permanen",
        "Karena kabel tersebut mengandung tegangan listrik 220V",
        "Karena debu kaca dapat terbang masuk ke mata",
        "Karena cahaya tersebut terlalu silau berwarna-warni"
      ],
      answer: 0,
      explanation: "Laser telekomunikasi menggunakan gelombang inframerah (tidak kasat mata). Meskipun tidak terlihat silau, energinya sangat fokus dan berbahaya bagi kornea/retina."
    },
    {
      question: "Indikasi apa yang muncul pada modem ONT pelanggan jika port SFP di sisi sentral OLT dinonaktifkan (admin down)?",
      options: ["Lampu indikator internet menyala hijau normal", "Lampu indikator LOS berkedip merah", "Lampu indikator Power mati", "Modem meledak"],
      answer: 1,
      explanation: "Jika port OLT mati, tidak ada cahaya laser dikirimkan, sehingga modem pelanggan akan mendeteksi hilangnya sinyal dan menyalakan lampu LOS merah."
    },
    {
      question: "Apakah dampak jika debu menempel pada ujung kaca ferrule connector serat optik?",
      options: [
        "Sinyal cahaya terhalang sehingga memicu redaman tinggi atau refleksi balik besar",
        "Kecepatan cahaya menjadi bertambah cepat",
        "Kabel optik dapat terbakar",
        "Tidak ada dampak sama sekali"
      ],
      answer: 0,
      explanation: "Debu menghalangi jalur cahaya kaca yang sangat kecil (9 mikron), sehingga membiaskan cahaya keluar rute dan menurunkan kekuatan sinyal."
    },
    {
      question: "Di dalam diagram OTDR, peristiwa kabel putus (end of fiber) ditunjukkan oleh...",
      options: [
        "Sebuah garis lurus mendatar tanpa penurunan",
        "Puncak refleksi tinggi diikuti jatuhnya grafik secara vertikal ke dasar noise floor",
        "Grafik menaik secara tajam",
        "Garis putus-putus bergelombang"
      ],
      answer: 1,
      explanation: "Ujung kabel patah memantulkan cahaya di celah udara (puncak refleksi) kemudian sinyal mati total sehingga grafik jatuh ke dasar garis noise."
    },
    {
      question: "Alat pembersih ujung konektor optik tanpa menyentuh ferrule secara langsung dinamakan...",
      options: ["One-Click Cleaner / Fiber Optic Cleaner Pen", "Splicer cleaner", "Air Duster", "Kertas Amplas halus"],
      answer: 0,
      explanation: "One-Click Cleaner berbentuk pena khusus yang dapat memutar benang pembersih kering pada ujung ferrule di dalam adapter."
    }
  ]
};

let quizState = {
  category: "",
  questions: [],
  currentIndex: 0,
  score: 0,
  selectedAnswer: null,
  answersHistory: [],
  isPlaying: false
};

function initQuizSection() {
  renderQuizDashboard();
}

function renderQuizDashboard() {
  const container = document.getElementById('quiz-content');
  if (!container) return;

  container.innerHTML = `
    <div class="flex flex-col gap-6 text-slate-800">
      <div>
        <h3 class="text-xl font-bold text-slate-800 flex items-center gap-2">
          <i class="fas fa-graduation-cap text-cyan-600"></i> Evaluasi Pembelajaran: Quiz Fiber Optik
        </h3>
        <p class="text-slate-500 text-xs mt-1">Uji pemahaman Anda dengan menyelesaikan 10 soal pilihan ganda di setiap kategori pilihan.</p>
      </div>

      <!-- Kategori Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="quiz-category-list">
        ${Object.keys(quizPool).map(cat => {
          let icon = "fa-book";
          let color = "text-cyan-650";
          let bgClass = "bg-cyan-50 border-cyan-100";
          
          if (cat === "Warna Core") {
            icon = "fa-palette";
            color = "text-pink-600";
            bgClass = "bg-pink-50 border-pink-100";
          } else if (cat === "Perhitungan Redaman") {
            icon = "fa-calculator";
            color = "text-yellow-700";
            bgClass = "bg-yellow-50 border-yellow-150";
          } else if (cat === "Alat Fiber Optik") {
            icon = "fa-tools";
            color = "text-blue-600";
            bgClass = "bg-blue-50 border-blue-100";
          } else if (cat === "Troubleshooting") {
            icon = "fa-bug";
            color = "text-red-600";
            bgClass = "bg-red-50 border-red-100";
          }

          return `
            <div class="bg-white p-5 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between gap-4 shadow-sm">
              <div>
                <div class="w-10 h-10 rounded-xl ${bgClass} flex items-center justify-center mb-3 border">
                  <i class="fas ${icon} ${color} text-lg"></i>
                </div>
                <h4 class="text-sm font-bold text-slate-850">${cat}</h4>
                <p class="text-[11px] text-slate-450 mt-1">Materi pengujian berisi 10 soal pilihan ganda acak disertai pembahasan.</p>
              </div>
              <button 
                onclick="startQuizSession('${cat}')"
                class="w-full py-2 bg-slate-100 hover:bg-cyan-600 hover:text-white text-slate-700 text-xs font-bold rounded-lg transition-all shadow-sm"
              >
                Mulai Quiz
              </button>
            </div>
          `;
        }).join('')}
      </div>

      <div id="quiz-game-container" class="hidden bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <!-- Diisi dinamis saat kuis dimainkan -->
      </div>
    </div>
  `;
}

function startQuizSession(category) {
  document.getElementById('quiz-category-list').classList.add('hidden');
  const gameContainer = document.getElementById('quiz-game-container');
  gameContainer.classList.remove('hidden');

  const originalQuestions = quizPool[category];
  const shuffled = shuffleArray(originalQuestions).slice(0, 10);

  quizState = {
    category,
    questions: shuffled,
    currentIndex: 0,
    score: 0,
    selectedAnswer: null,
    answersHistory: [],
    isPlaying: true
  };

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const container = document.getElementById('quiz-game-container');
  if (!container) return;

  const currentQ = quizState.questions[quizState.currentIndex];
  const progressPercent = ((quizState.currentIndex) / quizState.questions.length) * 100;

  container.innerHTML = `
    <div class="flex flex-col gap-6 text-slate-800">
      <!-- Header Kuis -->
      <div class="flex justify-between items-center border-b border-slate-100 pb-3">
        <div>
          <span class="text-xs font-bold text-cyan-600 uppercase tracking-wider">${quizState.category}</span>
          <h4 class="text-xs text-slate-400 mt-0.5">Progress Soal ${quizState.currentIndex + 1} dari ${quizState.questions.length}</h4>
        </div>
        <button 
          onclick="abortQuizSession()"
          class="text-xs text-slate-400 hover:text-red-650 transition-colors"
        >
          <i class="fas fa-sign-out-alt mr-1"></i>Keluar Quiz
        </button>
      </div>

      <!-- Progress Bar -->
      <div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div class="h-full bg-cyan-500 transition-all duration-300" style="width: ${progressPercent}%"></div>
      </div>

      <!-- Soal -->
      <div class="py-2">
        <p class="text-slate-800 font-semibold text-sm leading-relaxed">${currentQ.question}</p>
      </div>

      <!-- Pilihan Jawaban -->
      <div class="flex flex-col gap-2">
        ${currentQ.options.map((opt, index) => `
          <button 
            id="quiz-opt-${index}"
            onclick="selectQuizOption(${index})"
            class="w-full p-4 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-left text-xs text-slate-650 font-bold transition-all flex justify-between items-center group active:scale-[0.99] shadow-sm"
          >
            <span>${opt}</span>
            <div class="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
              <div id="quiz-opt-dot-${index}" class="w-2 h-2 rounded-full bg-transparent transition-all"></div>
            </div>
          </button>
        `).join('')}
      </div>

      <!-- Tombol Navigasi -->
      <div class="flex justify-end pt-2">
        <button 
          id="btn-quiz-next"
          onclick="submitQuizQuestion()"
          disabled
          class="px-6 py-2.5 bg-slate-100 text-slate-400 font-bold rounded-lg text-xs cursor-not-allowed border border-slate-200 transition-all shadow-sm"
        >
          Kirim Jawaban
        </button>
      </div>
    </div>
  `;
}

function selectQuizOption(index) {
  quizState.selectedAnswer = index;

  quizState.questions[quizState.currentIndex].options.forEach((_, idx) => {
    const btn = document.getElementById(`quiz-opt-${idx}`);
    const dot = document.getElementById(`quiz-opt-dot-${idx}`);
    if (btn && dot) {
      btn.className = "w-full p-4 bg-white border border-slate-200 rounded-xl text-left text-xs text-slate-650 font-bold transition-all flex justify-between items-center group shadow-sm";
      dot.className = "w-2 h-2 rounded-full bg-transparent transition-all";
    }
  });

  const selectedBtn = document.getElementById(`quiz-opt-${index}`);
  const selectedDot = document.getElementById(`quiz-opt-dot-${index}`);
  if (selectedBtn && selectedDot) {
    selectedBtn.className = "w-full p-4 bg-cyan-50 border border-cyan-400 rounded-xl text-left text-xs text-cyan-700 font-bold transition-all flex justify-between items-center group shadow-sm";
    selectedDot.className = "w-2 h-2 rounded-full bg-cyan-600 transition-all";
  }

  const nextBtn = document.getElementById('btn-quiz-next');
  if (nextBtn) {
    nextBtn.removeAttribute('disabled');
    nextBtn.className = "px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg text-xs transition-all cursor-pointer shadow-sm";
  }
}

function submitQuizQuestion() {
  if (quizState.selectedAnswer === null) return;

  const currentQ = quizState.questions[quizState.currentIndex];
  const isCorrect = (quizState.selectedAnswer === currentQ.answer);

  if (isCorrect) {
    quizState.score++;
  }

  quizState.answersHistory.push({
    question: currentQ.question,
    selected: currentQ.options[quizState.selectedAnswer],
    correct: currentQ.options[currentQ.answer],
    isCorrect,
    explanation: currentQ.explanation
  });

  quizState.currentIndex++;

  if (quizState.currentIndex < quizState.questions.length) {
    quizState.selectedAnswer = null;
    renderQuizQuestion();
  } else {
    finishQuizSession();
  }
}

function abortQuizSession() {
  if (confirm("Apakah Anda yakin ingin keluar dari sesi kuis ini? Progres pengerjaan Anda akan hilang.")) {
    document.getElementById('quiz-game-container').classList.add('hidden');
    document.getElementById('quiz-category-list').classList.remove('hidden');
  }
}

async function finishQuizSession() {
  const finalScore = Math.round((quizState.score / quizState.questions.length) * 100);
  const container = document.getElementById('quiz-game-container');
  if (!container) return;

  container.innerHTML = `
    <div class="flex flex-col gap-6 text-center text-slate-800 animate-fade-in">
      <div>
        <span class="text-xs uppercase font-bold text-cyan-600 tracking-wider">Quiz Selesai</span>
        <h4 class="text-xl font-bold text-slate-800 mt-1">Hasil Evaluasi - ${quizState.category}</h4>
      </div>

      <!-- Skor Ring -->
      <div class="p-6 bg-slate-50 rounded-2xl border border-slate-150 max-w-[220px] mx-auto w-full shadow-sm">
        <div class="text-4xl font-black text-cyan-650">${finalScore}</div>
        <div class="text-[10px] text-slate-450 uppercase tracking-widest font-bold mt-1">Skor Diperoleh</div>
      </div>

      <div class="text-xs text-slate-650">
        Anda menjawab benar <strong class="text-slate-800">${quizState.score}</strong> dari <strong class="text-slate-800">${quizState.questions.length}</strong> soal yang diujikan.
      </div>

      <!-- Box Pembahasan -->
      <div class="text-left space-y-4 max-h-[300px] overflow-y-auto bg-slate-50 p-4 rounded-xl border border-slate-150">
        <h5 class="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200 pb-2 mb-2 text-center">Analisis Jawaban & Pembahasan</h5>
        
        ${quizState.answersHistory.map((ans, idx) => `
          <div class="border-b border-slate-200 pb-3 flex flex-col gap-1 text-[11px] text-slate-650">
            <div class="flex justify-between items-start gap-3">
              <span class="font-bold text-slate-850">${idx + 1}. ${ans.question}</span>
              <span>
                ${ans.isCorrect 
                  ? '<span class="text-green-600 font-bold"><i class="fas fa-check-circle mr-1"></i>Benar</span>' 
                  : '<span class="text-red-600 font-bold"><i class="fas fa-times-circle mr-1"></i>Salah</span>'}
              </span>
            </div>
            
            <div class="mt-1 text-slate-500">
              <p>Jawaban Anda: <span class="${ans.isCorrect ? 'text-green-600 font-bold' : 'text-red-500 font-semibold'}">${ans.selected}</span></p>
              ${!ans.isCorrect ? `<p>Jawaban Benar: <span class="text-green-600 font-bold">${ans.correct}</span></p>` : ''}
            </div>

            <div class="mt-1.5 p-2.5 bg-white border border-slate-200 rounded text-[10px] text-slate-500">
              <strong class="text-cyan-700 block mb-0.5 font-bold"><i class="fas fa-info-circle mr-1"></i>Pembahasan:</strong>
              ${ans.explanation}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Action Button -->
      <div class="flex gap-2">
        <button 
          onclick="startQuizSession('${quizState.category}')"
          class="flex-1 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg text-xs transition-all active:scale-95 shadow-md"
        >
          Ulangi Quiz
        </button>
        <button 
          onclick="initQuizSection()"
          class="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg text-xs border border-slate-200 transition-all active:scale-95 shadow-sm"
        >
          Pilih Kategori Lain
        </button>
      </div>
    </div>
  `;

  const userStr = localStorage.getItem('user');
  if (userStr) {
    try {
      const userObj = JSON.parse(userStr);
      await fetch('/api/quiz/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: userObj.username,
          category: quizState.category,
          score: finalScore,
          correct_answers: quizState.score,
          total_questions: quizState.questions.length
        })
      });
      if (typeof fetchDashboardStats === 'function') {
        fetchDashboardStats();
      }
    } catch (e) {
      console.error("Gagal mengirim data skor kuis ke API:", e);
    }
  }
}

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
