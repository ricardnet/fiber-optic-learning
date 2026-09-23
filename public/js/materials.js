const materialsData = [
  {
    id: "pengertian",
    title: "Pengertian Fiber Optik",
    category: "Dasar Fiber Optik",
    summary: "Fiber optik adalah media transmisi data berupa kabel yang terbuat dari kaca atau plastik halus yang menggunakan pulsa cahaya untuk mengirimkan data dengan kecepatan tinggi.",
    content: `
      <p class="mb-4"><strong>Fiber Optik (Serat Optik)</strong> adalah saluran transmisi data yang terbuat dari helai kaca murni yang sangat halus (bahkan lebih tipis dari sehelai rambut manusia) yang berfungsi untuk memandu gelombang cahaya dari satu titik ke titik lainnya.</p>
      <div class="my-6 p-4 bg-slate-800/80 rounded-xl border border-cyan-500/20 text-center">
        <span class="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Ilustrasi Dasar</span>
        <div class="flex justify-center items-center gap-4 my-3">
          <div class="px-3 py-1.5 bg-blue-600 rounded text-xs text-white">Sumber Cahaya (Laser/LED)</div>
          <div class="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></div>
          <div class="px-3 py-1.5 bg-cyan-600 rounded text-xs text-white">Kabel Kaca (Pandu Cahaya)</div>
          <div class="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
          <div class="px-3 py-1.5 bg-blue-600 rounded text-xs text-white">Penerima (Photo Detector)</div>
        </div>
        <p class="text-xs text-slate-400">Transmisi data merambat menggunakan kecepatan cahaya di dalam inti kaca.</p>
      </div>
      <p class="mb-4">Berbeda dengan kabel tembaga biasa (seperti UTP atau coaxial) yang menggunakan gelombang elektron/listrik untuk mengirim data, fiber optik menggunakan <strong>foton (cahaya)</strong>. Hal ini membuat fiber optik kebal terhadap interferensi elektromagnetik (EMI) dari listrik AC, petir, atau frekuensi radio.</p>
      <p class="mb-4">Dalam dunia telekomunikasi modern, fiber optik merupakan tulang punggung (backbone) utama jaringan internet global, menghubungkan antar pulau bahkan antar benua melalui kabel bawah laut.</p>
    `,
    examples: [
      "Kabel internet rumah FTTH (Fiber to the Home) seperti Indihome, Biznet, First Media.",
      "Kabel bawah laut (submarine cable) yang menghubungkan jaringan internet Indonesia ke server global di Singapura atau Amerika Serikat.",
      "Koneksi jaringan berkecepatan tinggi antar gedung sekolah atau ruang server."
    ],
    quiz: [
      {
        question: "Apakah bahan utama pembuatan serat kaca pada kabel fiber optik?",
        options: ["Tembaga murni", "Silika atau kaca murni", "Alumunium campuran", "Plastik PVC daur ulang"],
        answer: 1,
        explanation: "Fiber optik terbuat dari silika atau kaca murni berkualitas tinggi agar cahaya dapat merambat tanpa terhambat kotoran."
      },
      {
        question: "Media apa yang digunakan oleh fiber optik untuk mengirimkan data?",
        options: ["Arus listrik AC", "Frekuensi gelombang radio", "Pulsa cahaya (foton)", "Tekanan udara"],
        answer: 2,
        explanation: "Fiber optik memindahkan data dengan cara mengubah sinyal listrik menjadi pulsa cahaya."
      },
      {
        question: "Apa kelebihan utama kabel fiber optik dibandingkan kabel tembaga?",
        options: ["Harganya jauh lebih murah", "Kebal terhadap interferensi elektromagnetik", "Dapat ditekuk secara ekstrem", "Lebih mudah disambungkan tanpa alat khusus"],
        answer: 1,
        explanation: "Karena menggunakan cahaya dan terbuat dari kaca, fiber optik tidak terpengaruh oleh gangguan gelombang elektromagnetik sekitar."
      }
    ]
  },
  {
    id: "sejarah",
    title: "Sejarah Fiber Optik",
    category: "Dasar Fiber Optik",
    summary: "Perjalanan fiber optik dimulai dari demonstrasi pembiasan cahaya oleh Daniel Colladon hingga penemuan serat kaca minim redaman oleh Dr. Charles Kao.",
    content: `
      <p class="mb-4">Sejarah perkembangan teknologi fiber optik melalui proses panjang riset fisika:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2 text-slate-300">
        <li><strong>Tahun 1840-an:</strong> Daniel Colladon dan Jacques Babinet mendemonstrasikan bahwa cahaya dapat dipandu di dalam aliran air (prinsip pembiasan total).</li>
        <li><strong>Tahun 1870:</strong> John Tyndall mempopulerkan fenomena ini dengan menyorotkan cahaya ke dalam aliran air yang keluar dari tangki.</li>
        <li><strong>Tahun 1930-an:</strong> Para ilmuwan mulai mencoba membuat tabung kaca fleksibel untuk keperluan medis (endoskopi), namun redamannya masih sangat tinggi sehingga cahaya hilang dalam jarak beberapa sentimeter saja.</li>
        <li><strong>Tahun 1966:</strong> <strong>Dr. Charles Kao</strong> dan George Hockham mempublikasikan karya ilmiah revolusioner yang membuktikan bahwa redaman tinggi disebabkan oleh kotoran (impure) di dalam kaca, bukan sifat kaca itu sendiri. Jika kaca dapat dibuat sangat murni, redaman dapat ditekan di bawah 20 dB/km. Beliau kemudian dijuluki <em>'Bapak Fiber Optik'</em> dan menerima Hadiah Nobel Fisika tahun 2009.</li>
        <li><strong>Tahun 1970:</strong> Corning Glass Works memproduksi serat optik praktis pertama dengan redaman di bawah 20 dB/km, memulai era revolusi telekomunikasi digital.</li>
      </ul>
    `,
    examples: [
      "Dr. Charles K. Kao dianugerahi Nobel Fisika atas jasanya merintis pengiriman cahaya melalui serat kaca untuk komunikasi optik.",
      "Redaman kabel optik pertama buatan Corning memiliki redaman sekitar 17 dB/km, sementara kabel modern saat ini memiliki redaman kurang dari 0.2 dB/km."
    ],
    quiz: [
      {
        question: "Siapakah ilmuwan yang dijuluki sebagai 'Bapak Fiber Optik'?",
        options: ["Alexander Graham Bell", "Dr. Charles Kao", "Albert Einstein", "Nikola Tesla"],
        answer: 1,
        explanation: "Dr. Charles Kao membuktikan bahwa serat kaca dengan tingkat kemurnian tinggi dapat digunakan untuk komunikasi jarak jauh."
      },
      {
        question: "Berapa target batas redaman yang ditetapkan Dr. Charles Kao agar serat optik layak dipakai komunikasi?",
        options: ["100 dB/km", "50 dB/km", "20 dB/km", "0.2 dB/km"],
        answer: 2,
        explanation: "Dr. Charles Kao merumuskan target redaman di bawah 20 dB/km sebagai syarat pengiriman data jarak jauh."
      },
      {
        question: "Perusahaan apa yang berhasil memproduksi kabel fiber optik komersial pertama dengan redaman rendah di tahun 1970?",
        options: ["Corning Glass Works", "Bell Labs", "Siemens", "General Electric"],
        answer: 0,
        explanation: "Corning Glass Works menjadi pabrik pertama yang memproduksi serat kaca rendah redaman berkat riset silika murni."
      }
    ]
  },
  {
    id: "cara-kerja",
    title: "Cara Kerja Fiber Optik",
    category: "Dasar Fiber Optik",
    summary: "Fiber optik bekerja berdasarkan hukum fisika pemantulan internal sempurna (Total Internal Reflection), memantulkan cahaya di sepanjang inti kabel.",
    content: `
      <p class="mb-4">Bagaimana cahaya dapat merambat berliku-liku di dalam kabel kaca tanpa menembus dindingnya? Jawabannya adalah prinsip fisika bernama <strong>Pemantulan Internal Sempurna (Total Internal Reflection)</strong>.</p>
      <div class="my-6 p-4 bg-slate-800/80 rounded-xl border border-cyan-500/20">
        <h4 class="text-sm font-semibold text-cyan-400 mb-2 text-center">Fisika di Balik Fiber Optik: Total Internal Reflection</h4>
        <div class="flex flex-col md:flex-row items-center gap-6 justify-center">
          <svg width="240" height="120" viewBox="0 0 240 120" class="bg-slate-900 rounded p-2 border border-slate-700">
            <!-- Cladding -->
            <rect x="10" y="10" width="220" height="100" fill="#1e293b" stroke="#475569" stroke-width="2" />
            <!-- Core -->
            <rect x="10" y="40" width="220" height="40" fill="#38bdf8" fill-opacity="0.2" stroke="#0284c7" stroke-dasharray="4" />
            <!-- Light path -->
            <path d="M 10 60 L 50 40 L 100 80 L 150 40 L 200 80 L 230 60" fill="none" stroke="#22d3ee" stroke-width="3" class="animate-pulse" />
            <text x="120" y="30" fill="#94a3b8" font-size="10" text-anchor="middle">Cladding (Indeks Bias Rendah)</text>
            <text x="120" y="63" fill="#ffffff" font-size="10" text-anchor="middle" font-weight="bold">Core (Indeks Bias Tinggi)</text>
            <text x="120" y="102" fill="#94a3b8" font-size="10" text-anchor="middle">Cladding (Indeks Bias Rendah)</text>
          </svg>
          <div class="text-xs space-y-2 max-w-sm text-slate-300">
            <p>1. Cahaya ditembakkan ke dalam <strong>Core</strong> dengan sudut tertentu (Sudut Kritis).</p>
            <p>2. Karena Indeks Bias <strong>Core</strong> lebih besar dari <strong>Cladding</strong>, cahaya dipantulkan kembali ke dalam inti alih-alih menembus keluar.</p>
            <p>3. Pantulan ini terjadi terus menerus sampai ujung kabel tujuan.</p>
          </div>
        </div>
      </div>
      <p class="mb-4">Prinsip kerja ini menuntut dua komponen utama dengan kerapatan optik berbeda:</p>
      <ul class="list-disc pl-6 mb-4 space-y-1">
        <li><strong>Core (Inti):</strong> Area tengah bermassa jenis optik lebih padat (indeks bias tinggi).</li>
        <li><strong>Cladding (Selubung):</strong> Menyelimuti inti dengan kerapatan optik lebih rendah (indeks bias rendah).</li>
      </ul>
      <p class="mb-4">Sinyal listrik dari komputer pengirim dikonversi oleh komponen <strong>Transmitter (E/O - Electric to Optic)</strong> seperti laser dioda menjadi cahaya, kemudian di ujung penerima diubah kembali menjadi sinyal listrik oleh <strong>Receiver (O/E - Optic to Electric)</strong>.</p>
    `,
    examples: [
      "Ketika kita menyorotkan laser mainan ke dalam batang lem tembak transparan, ujung satunya ikut menyala karena cahaya terpandu di dalamnya.",
      "Sudut datang cahaya harus berada dalam batas Acceptance Angle (Sudut Penerimaan) agar terjadi pemantulan sempurna."
    ],
    quiz: [
      {
        question: "Prinsip fisika apa yang mendasari perambatan cahaya di dalam serat optik?",
        options: ["Pembiasan cahaya biasa", "Pemantulan internal sempurna (Total Internal Reflection)", "Dispersi warna cahaya", "Polarisasi linear gelombang"],
        answer: 1,
        explanation: "Pemantulan internal sempurna mengurung cahaya di dalam inti kaca karena perbedaan indeks bias inti dengan selubungnya."
      },
      {
        question: "Bagaimana hubungan indeks bias Core (n1) dan Cladding (n2) agar cahaya dapat terpandu?",
        options: ["n1 harus lebih kecil dari n2", "n1 harus sama dengan n2", "n1 harus lebih besar dari n2", "n1 harus bernilai nol"],
        answer: 2,
        explanation: "Indeks bias core (n1) harus selalu lebih besar dari indeks bias cladding (n2) agar cahaya dipantulkan kembali saat membentur cladding."
      },
      {
        question: "Apakah fungsi utama alat Transmitter pada ujung pengirim fiber optik?",
        options: ["Mengatur IP address data", "Mengubah sinyal listrik menjadi sinyal cahaya (E/O)", "Memperbaiki serat optik yang putus", "Mengukur redaman kabel"],
        answer: 1,
        explanation: "Transmitter mengubah sinyal listrik perangkat jaringan (seperti switch/router) menjadi cahaya laser/LED."
      }
    ]
  },
  {
    id: "struktur",
    title: "Struktur Kabel Fiber Optik",
    category: "Dasar Fiber Optik",
    summary: "Kabel fiber optik terdiri dari 4 lapisan pelindung utama: Core, Cladding, Coating, Strength Member, dan Outer Jacket.",
    content: `
      <p class="mb-4">Meskipun bagian kaca utama sangat tipis, kabel fiber optik didesain memiliki pelindung berlapis-lapis agar tahan terhadap tekanan mekanis, kelembapan, air, dan tarikan fisik.</p>
      <div class="my-6 p-4 bg-slate-800/80 rounded-xl border border-cyan-500/20">
        <h4 class="text-sm font-semibold text-cyan-400 mb-4 text-center">Lapisan Struktur Kabel Fiber Optik</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div class="flex justify-center">
            <svg width="180" height="180" viewBox="0 0 100 100">
              <!-- Outer Jacket (Black) -->
              <circle cx="50" cy="50" r="48" fill="#1e293b" stroke="#64748b" stroke-width="2" />
              <!-- Strength Member (Yellow) -->
              <circle cx="50" cy="50" r="38" fill="#facc15" fill-opacity="0.3" stroke="#eab308" stroke-width="1.5" />
              <!-- Coating / Buffer (Orange) -->
              <circle cx="50" cy="50" r="26" fill="#f97316" fill-opacity="0.4" stroke="#ea580c" stroke-width="1" />
              <!-- Cladding (White/Gray) -->
              <circle cx="50" cy="50" r="14" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1" />
              <!-- Core (Cyan) -->
              <circle cx="50" cy="50" r="6" fill="#06b6d4" stroke="#0891b2" stroke-width="1" />
              
              <!-- Text indicators -->
              <circle cx="50" cy="50" r="1" fill="#fff" />
            </svg>
          </div>
          <div class="text-xs space-y-2">
            <p><strong class="text-cyan-400">1. Core (9 &mu;m - 62.5 &mu;m):</strong> Bagian terdalam tempat merambatnya pulsa cahaya.</p>
            <p><strong class="text-slate-300">2. Cladding (125 &mu;m):</strong> Lapisan kaca penyelimut core yang memantulkan cahaya.</p>
            <p><strong class="text-orange-400">3. Coating / Buffer (250 &mu;m):</strong> Lapisan plastik elastis pelindung dari goresan dan kelembapan.</p>
            <p><strong class="text-yellow-400">4. Strength Member (Kevlar):</strong> Serat penguat untuk melindungi kabel dari tarikan fisik.</p>
            <p><strong class="text-slate-400">5. Outer Jacket:</strong> Selubung luar (biasanya polyethylene/PVC) sebagai pelindung utama dari cuaca luar.</p>
          </div>
        </div>
      </div>
      <p class="mb-2 font-semibold">Tabel Ukuran Umum Diameter Core & Cladding:</p>
      <div class="overflow-x-auto mb-4">
        <table class="min-w-full text-xs text-left bg-slate-900 border border-slate-800 rounded">
          <thead>
            <tr class="bg-slate-800 text-slate-300">
              <th class="p-2 border-b border-slate-700">Jenis Serat</th>
              <th class="p-2 border-b border-slate-700">Diameter Core</th>
              <th class="p-2 border-b border-slate-700">Diameter Cladding</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border-b border-slate-800 text-cyan-400 font-mono">Single Mode (G.652)</td>
              <td class="p-2 border-b border-slate-800">9 Mikron (&mu;m)</td>
              <td class="p-2 border-b border-slate-800">125 Mikron (&mu;m)</td>
            </tr>
            <tr class="bg-slate-900/50">
              <td class="p-2 border-b border-slate-800 text-yellow-500 font-mono">Multi Mode (OM3/OM4)</td>
              <td class="p-2 border-b border-slate-800">50 atau 62.5 Mikron (&mu;m)</td>
              <td class="p-2 border-b border-slate-800">125 Mikron (&mu;m)</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    examples: [
      "Kabel outdoor udara yang terpasang di tiang listrik memiliki kawat baja (Strength Member) tambahan di samping selubung kabel agar tidak putus bergelantungan.",
      "Kevlar pembungkus buffer juga digunakan pada bahan rompi antipeluru karena kekuatannya menahan beban tarik."
    ],
    quiz: [
      {
        question: "Berapa diameter standar lapisan Cladding pada kabel fiber optik single mode maupun multi mode?",
        options: ["9 &mu;m", "50 &mu;m", "125 &mu;m", "250 &mu;m"],
        answer: 2,
        explanation: "Hampir semua standar serat optik modern menggunakan ukuran diameter luar cladding sebesar 125 mikron."
      },
      {
        question: "Apakah fungsi dari lapisan Strength Member (misal bahan Kevlar/Aramid)?",
        options: ["Memancarkan cahaya cadangan", "Melindungi kabel dari kerusakan akibat regangan/tarikan saat instalasi", "Menurunkan indeks bias core", "Mengubah warna cahaya"],
        answer: 1,
        explanation: "Strength member ditambahkan agar kabel memiliki daya tahan tarik tinggi sehingga serat kaca di dalamnya tidak patah saat ditarik di pipa pipa duct."
      },
      {
        question: "Lapisan yang bersentuhan langsung dengan Cladding dan bertugas melindungi kaca dari goresan fisik pertama kali adalah...",
        options: ["Outer Jacket", "Strength Member", "Coating / Buffer", "Core"],
        answer: 2,
        explanation: "Coating (biasanya berupa lapisan akrilat/plastik tipis ukuran 250 mikron) melindungi kaca dari retakan mikro akibat kelembapan dan gesekan."
      }
    ]
  },
  {
    id: "jenis-jenis",
    title: "Jenis-jenis Fiber Optik",
    category: "Jenis & Perbedaan",
    summary: "Berdasarkan jumlah mode rambatan cahayanya, fiber optik dibagi menjadi Single Mode dan Multi Mode (Step Index & Graded Index).",
    content: `
      <p class="mb-4">Secara garis besar, fiber optik dikelompokkan menjadi 2 jenis berdasarkan cara cahaya merambat di dalam inti serat:</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 bg-slate-800/60 rounded-lg border border-cyan-500/30">
          <h4 class="font-bold text-cyan-400 mb-2">1. Single Mode Fiber (SMF)</h4>
          <p class="text-xs text-slate-300 mb-2">Memiliki inti (core) sangat kecil (kisaran 9 mikron). Sifat ini memaksa cahaya merambat hanya melalui <strong>satu lintasan tunggal (mode tunggal)</strong> lurus sejajar sumbu kabel.</p>
          <span class="text-xs px-2 py-0.5 bg-cyan-950 text-cyan-400 rounded">Jarak Jauh / Bandwidth Tinggi</span>
        </div>
        <div class="p-4 bg-slate-800/60 rounded-lg border border-yellow-500/30">
          <h4 class="font-bold text-yellow-400 mb-2">2. Multi Mode Fiber (MMF)</h4>
          <p class="text-xs text-slate-300 mb-2">Memiliki inti jauh lebih besar (50 - 62.5 mikron) sehingga cahaya merambat secara bersamaan melalui <strong>banyak lintasan (banyak mode)</strong> yang saling memantul.</p>
          <span class="text-xs px-2 py-0.5 bg-yellow-950 text-yellow-400 rounded">Jarak Pendek / Biaya Perangkat Murah</span>
        </div>
      </div>
      <p class="mb-4">Pada tipe <strong>Multi Mode</strong>, terdapat dua varian berdasarkan profil indeks bias intinya:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2 text-slate-300">
        <li><strong>Step Index:</strong> Transisi indeks bias dari core ke cladding sangat tajam (bertingkat). Menyebabkan dispersi modal tinggi (cahaya sampai tidak bersamaan).</li>
        <li><strong>Graded Index:</strong> Indeks bias core menurun secara melengkung perlahan dari pusat ke batas cladding. Ini memfokuskan rambatan cahaya sehingga sampai relatif bersamaan dan meningkatkan lebar pita frekuensi (bandwidth).</li>
      </ul>
    `,
    examples: [
      "Single Mode digunakan untuk interkoneksi antar kota (Metro Ethernet), backbone ISP, FTTH GPON.",
      "Multi Mode digunakan di dalam datacenter, jaringan LAN antar lantai gedung perkantoran (jarak kurang dari 500 meter)."
    ],
    quiz: [
      {
        question: "Mengapa fiber optik Single Mode dapat mentransmisikan data lebih jauh daripada Multi Mode?",
        options: [
          "Karena memiliki inti lebih besar sehingga cahaya tidak mudah tersesat",
          "Karena cahaya merambat dalam jalur tunggal tanpa tabrakan pantulan (meminimalisir dispersi modal)",
          "Karena menggunakan lampu LED biasa yang murah",
          "Karena kabelnya dilapisi emas"
        ],
        answer: 1,
        explanation: "Dengan jalur tunggal, berkas cahaya tidak mengalami dispersi modal (perbedaan waktu tiba berkas cahaya), sehingga sinyal tetap utuh dalam jarak puluhan kilometer."
      },
      {
        question: "Tipe Multi Mode yang indeks bias intinya berubah secara perlahan/gradual dari pusat ke arah cladding disebut...",
        options: ["Step Index", "Graded Index", "Single Mode G.652", "Laser Mode"],
        answer: 1,
        explanation: "Graded Index dirancang agar cahaya di luar sumbu merambat lebih cepat, sehingga seluruh mode tiba di tujuan hampir bersamaan."
      },
      {
        question: "Jenis serat optik apa yang biasa digunakan di dalam instalasi FTTH (kabel drop ke modem rumah)?",
        options: ["Multi Mode Step Index", "Multi Mode Graded Index", "Single Mode G.657 (Bend Insensitive)", "Kabel Coaxial"],
        answer: 2,
        explanation: "Serat optik Single Mode G.657 merupakan jenis bend-insensitive yang tahan tekukan, sangat cocok untuk belokan instalasi rumah."
      }
    ]
  },
  {
    id: "single-vs-multi",
    title: "Single Mode dan Multi Mode",
    category: "Jenis & Perbedaan",
    summary: "Perbandingan mendalam parameter teknis, sumber cahaya, jarak transmisi, dan peruntukan Single Mode vs Multi Mode.",
    content: `
      <p class="mb-4">Memahami perbedaan spesifikasi teknis antara Single Mode dan Multi Mode sangat penting bagi teknisi jaringan:</p>
      <div class="overflow-x-auto mb-4">
        <table class="min-w-full text-xs text-left bg-slate-900 border border-slate-800 rounded">
          <thead>
            <tr class="bg-slate-800 text-slate-300">
              <th class="p-2 border-b border-slate-700">Parameter</th>
              <th class="p-2 border-b border-slate-700 text-cyan-400">Single Mode (SM)</th>
              <th class="p-2 border-b border-slate-700 text-yellow-500">Multi Mode (MM)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border-b border-slate-800 font-semibold">Ukuran Core</td>
              <td class="p-2 border-b border-slate-800 font-mono">9 &mu;m</td>
              <td class="p-2 border-b border-slate-800 font-mono">50 &mu;m atau 62.5 &mu;m</td>
            </tr>
            <tr class="bg-slate-900/50">
              <td class="p-2 border-b border-slate-800 font-semibold">Sumber Cahaya</td>
              <td class="p-2 border-b border-slate-800">Laser Dioda (Sinar Sempit)</td>
              <td class="p-2 border-b border-slate-800">LED / VCSEL (Sinar Melebar)</td>
            </tr>
            <tr>
              <td class="p-2 border-b border-slate-800 font-semibold">Panjang Gelombang (Wave)</td>
              <td class="p-2 border-b border-slate-800 font-mono">1310 nm, 1490 nm, 1550 nm</td>
              <td class="p-2 border-b border-slate-800 font-mono">850 nm, 1300 nm</td>
            </tr>
            <tr class="bg-slate-900/50">
              <td class="p-2 border-b border-slate-800 font-semibold">Jarak Maksimal</td>
              <td class="p-2 border-b border-slate-800">Hingga >100 Km tanpa repeater</td>
              <td class="p-2 border-b border-slate-800">Terbatas ~300 - 550 meter</td>
            </tr>
            <tr>
              <td class="p-2 border-b border-slate-800 font-semibold">Redaman Sinyal</td>
              <td class="p-2 border-b border-slate-800 font-mono">Rendah (0.2 - 0.4 dB/Km)</td>
              <td class="p-2 border-b border-slate-800 font-mono">Tinggi (1.5 - 3.0 dB/Km)</td>
            </tr>
            <tr class="bg-slate-900/50">
              <td class="p-2 border-b border-slate-800 font-semibold">Biaya Alat Aktif (SFP)</td>
              <td class="p-2 border-b border-slate-800 text-red-400">Lebih Mahal (Laser presisi)</td>
              <td class="p-2 border-b border-slate-800 text-green-400">Lebih Murah (Transmitter LED)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="mb-4 text-xs text-slate-400">Catatan: Meskipun harga modul SFP Single Mode lebih mahal, harga kabelnya sendiri seringkali lebih murah dibanding Multi Mode karena efisiensi bahan pembuatan intinya.</p>
    `,
    examples: [
      "Warna selubung luar (jacket) standar internasional: Kuning untuk Single Mode (OS1/OS2), Aqua/Biru Muda untuk Multi Mode OM3, Orange untuk Multi Mode OM1/OM2.",
      "Kabel drop core dari tiang Telkom ke rumah Anda berwarna hitam (karena dilindungi anti-UV), tapi patch cord kuning yang ditancapkan ke modem rumah adalah jenis Single Mode."
    ],
    quiz: [
      {
        question: "Warna standar jaket luar (jacket patch cord) yang melambangkan serat kabel Single Mode adalah...",
        options: ["Oranye", "Kuning", "Aqua (Biru Muda)", "Merah"],
        answer: 1,
        explanation: "Kuning adalah kode warna internasional yang disepakati untuk mengidentifikasi serat optik Single Mode."
      },
      {
        question: "Panjang gelombang (wavelength) yang paling sering digunakan pada pengiriman data Single Mode untuk download internet FTTH (GPON) adalah...",
        options: ["850 nm", "1300 nm", "1490 nm", "1900 nm"],
        answer: 2,
        explanation: "Dalam standar GPON FTTH, arah download (downstream) dari OLT ke modem ONT menggunakan panjang gelombang 1490 nm."
      },
      {
        question: "Sumber cahaya manakah yang umum digunakan pada modul SFP Single Mode?",
        options: ["Lampu Pijar Halogen", "LED Putih", "Laser Dioda", "Inframerah Kompor"],
        answer: 2,
        explanation: "Laser dioda menghasilkan pancaran cahaya koheren dan sempit yang sangat presisi untuk ditembakkan ke dalam core 9 mikron."
      }
    ]
  },
  {
    id: "alat-bahan",
    title: "Alat dan Bahan Fiber Optik",
    category: "Praktik & Peralatan",
    summary: "Seorang teknisi fiber optik memerlukan peralatan khusus seperti Fusion Splicer, Stripper, Cleaver, OPM, OLS, OTDR, dan VFL.",
    content: `
      <p class="mb-4">Bekerja dengan kaca berskala mikron membutuhkan alat penanganan yang sangat presisi. Berikut alat-alat kerja wajib teknisi Fiber Optik:</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">
        <div class="p-3 bg-slate-800/80 rounded border border-cyan-500/20">
          <strong class="text-cyan-400 block mb-1">1. Fusion Splicer</strong>
          Alat penyambung serat optik dengan memanfaatkan busur api listrik untuk meleburkan dua ujung kaca secara presisi.
        </div>
        <div class="p-3 bg-slate-800/80 rounded border border-cyan-500/20">
          <strong class="text-cyan-400 block mb-1">2. Miller Stripper</strong>
          Tang khusus pengupas lapisan coating/buffer luar dari serat kaca tanpa merusak kaca di dalamnya.
        </div>
        <div class="p-3 bg-slate-800/80 rounded border border-cyan-500/20">
          <strong class="text-cyan-400 block mb-1">3. Fiber Cleaver</strong>
          Alat pemotong presisi untuk memotong ujung core agar menghasilkan penampang 90 derajat yang rata sebelum disambung.
        </div>
        <div class="p-3 bg-slate-800/80 rounded border border-cyan-500/20">
          <strong class="text-cyan-400 block mb-1">4. Optical Power Meter (OPM)</strong>
          Alat pengukur intensitas daya cahaya (dalam dBm) yang diterima di ujung kabel, untuk mengetahui kualitas redaman.
        </div>
        <div class="p-3 bg-slate-800/80 rounded border border-cyan-500/20">
          <strong class="text-cyan-400 block mb-1">5. Optical Light Source (OLS)</strong>
          Alat pemancar cahaya laser dengan panjang gelombang tertentu yang stabil sebagai pasangan uji bagi OPM.
        </div>
        <div class="p-3 bg-slate-800/80 rounded border border-cyan-500/20">
          <strong class="text-cyan-400 block mb-1">6. Visual Fault Locator (VFL / Laser Pen)</strong>
          Senter laser merah terang berdaya tinggi untuk mendeteksi tekukan tajam, kebocoran cahaya, atau kabel optik putus jarak dekat.
        </div>
        <div class="p-3 bg-slate-800/80 rounded border border-cyan-500/20">
          <strong class="text-cyan-400 block mb-1">7. OTDR (Optical Time Domain Reflectometer)</strong>
          Alat canggih yang menganalisis pelemahan sinyal di sepanjang serat optik, mendeteksi lokasi sambungan rusak, dan mengukur jarak titik putus secara visual grafis.
        </div>
        <div class="p-3 bg-slate-800/80 rounded border border-cyan-500/20">
          <strong class="text-cyan-400 block mb-1">8. Protection Sleeve</strong>
          Tabung plastik kecil berperekat panas dengan kawat penyangga baja di dalamnya untuk melindungi titik sambungan splicing dari tekanan luar.
        </div>
      </div>
    `,
    examples: [
      "Ketika internet pelanggan mati total, teknisi menembakkan laser merah VFL dari kotak ODP untuk melihat apakah ada cahaya merah bocor dari sela-sela drop core yang menandakan kabel retak.",
      "Sebelum disambung, core kaca wajib dibersihkan menggunakan Alkohol kadar 90-99% dengan tisu bebas serat (lint-free wipes)."
    ],
    quiz: [
      {
        question: "Alat manakah yang digunakan untuk menyambungkan dua ujung serat optik dengan melelehkan kaca menggunakan api listrik?",
        options: ["Fiber Cleaver", "Fusion Splicer", "Optical Power Meter", "Miller Stripper"],
        answer: 1,
        explanation: "Fusion Splicer menyatukan dua serat optik secara fisik menggunakan busur listrik tegangan tinggi."
      },
      {
        question: "Alat pemotong presisi untuk menghasilkan permukaan potongan ujung core 90 derajat yang lurus adalah...",
        options: ["Gunting Kevlar", "Stripper", "Cleaver", "Splicer"],
        answer: 2,
        explanation: "Fiber Cleaver digunakan untuk mematahkan kaca dengan sudut tegak lurus sempurna agar transmisi cahaya setelah splicing tidak terhambat."
      },
      {
        question: "Jika Anda ingin mengetahui daya pancar cahaya yang diterima di ujung kabel pelanggan, alat ukur apa yang Anda gunakan?",
        options: ["Optical Light Source (OLS)", "Visual Fault Locator (VFL)", "Optical Power Meter (OPM)", "Multimeter Digital"],
        answer: 2,
        explanation: "OPM digunakan untuk mengukur daya terima cahaya (Rx power) di titik penerima, biasanya diukur dalam satuan dBm."
      }
    ]
  },
  {
    id: "penyambungan",
    title: "Penyambungan Fiber Optik",
    category: "Praktik & Peralatan",
    summary: "Penyambungan fiber optik terdiri atas dua metode utama: Splicing (permanen melebur kaca) dan Connector (semi-permanen menggunakan konektor).",
    content: `
      <p class="mb-4">Untuk menyatukan dua segmen kabel optik yang terputus atau menghubungkan kabel optik ke perangkat aktif, ada dua metode utama:</p>
      
      <h4 class="font-bold text-cyan-400 mt-2 mb-1">A. Splicing (Peleburan Kaca / Fusion Splice)</h4>
      <p class="text-xs mb-3 text-slate-300">Merupakan metode penyambungan permanen. Kedua ujung serat dikupas, dibersihkan dengan alkohol, dipotong rata dengan cleaver, lalu diletakkan di dalam Fusion Splicer untuk dilelehkan secara mekanis. Hasil penyambungan sangat kokoh dengan redaman terkecil (&lt; 0.05 dB).</p>
      
      <h4 class="font-bold text-cyan-400 mt-2 mb-1">B. Konektorisasi (Connector / Mechanical Splice)</h4>
      <p class="text-xs mb-3 text-slate-300">Merupakan penyambungan non-permanen yang memungkinkan pasang-lepas. Ujung serat dipasangi konektor fisik agar dapat dicolokkan ke port panel hubung (ODF/ODP) atau modem. Redaman konektor berkisar antara 0.2 hingga 0.5 dB per pasang.</p>

      <div class="my-4 p-3 bg-slate-900 border border-slate-800 rounded">
        <h5 class="text-xs font-semibold text-slate-300 mb-2">Tipe-Tipe Konektor Fiber Optik yang Populer:</h5>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs">
          <div class="p-2 bg-slate-800 rounded border border-slate-700">
            <span class="font-bold text-cyan-400 block">SC</span>
            (Subscriber Connector) - Bentuk kotak, push-pull. Paling banyak dipakai di FTTH/modem.
          </div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700">
            <span class="font-bold text-cyan-400 block">LC</span>
            (Lucent Connector) - Bentuk kotak mini. Banyak dipakai di modul SFP Switch/Router.
          </div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700">
            <span class="font-bold text-cyan-400 block">FC</span>
            (Ferrule Connector) - Bentuk bulat ulir sekrup. Biasa untuk instrumen uji/alat ukur.
          </div>
          <div class="p-2 bg-slate-800 rounded border border-slate-700">
            <span class="font-bold text-cyan-400 block">ST</span>
            (Straight Tip) - Bentuk bulat bayonet (putar). Populer untuk jaringan lan lama/industri.
          </div>
        </div>
      </div>

      <div class="my-4 p-3 bg-slate-900 border border-slate-800 rounded">
        <h5 class="text-xs font-semibold text-slate-300 mb-2">Tipe Poles Ujung Ferrule (Konektor):</h5>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
          <div>
            <strong class="text-cyan-400 block mb-1">UPC (Ultra Physical Contact) - Warna Biru</strong>
            Ujung konektor dipoles datar. Memiliki refleksi balik sedang (~ -50 dB). Digunakan untuk transmisi data umum/ethernet.
          </div>
          <div>
            <strong class="text-green-400 block mb-1">APC (Angled Physical Contact) - Warna Hijau</strong>
            Ujung konektor dipoles miring 8 derajat. Memiliki refleksi balik sangat rendah (~ -60 dB) karena pantulan terlempar ke cladding. Sangat cocok untuk jaringan TV Kabel (RF) atau GPON dengan sensitivitas tinggi.
          </div>
        </div>
      </div>
    `,
    examples: [
      "Di rumah pelanggan FTTH IndiHome, kabel drop core disambung secara cepat di lapangan menggunakan Fast Connector SC/UPC berwarna biru tanpa mesin las (mechanical connector).",
      "Pada pusat data backbone, kabel interkoneksi utama disambung permanen menggunakan Fusion Splicer di dalam kotak Joint Closure agar terlindung dari cuaca."
    ],
    quiz: [
      {
        question: "Metode penyambungan serat optik permanen yang memiliki nilai redaman paling kecil adalah...",
        options: ["Penyambungan menggunakan isolasi listrik", "Fusion Splicing", "Mechanical Connector", "Lem Kaca Cair"],
        answer: 1,
        explanation: "Fusion Splicing mengelas kedua kaca murni kembali menjadi satu kesatuan utuh, menghasilkan loss terkecil (kurang dari 0.05 dB)."
      },
      {
        question: "Apakah warna dari badan konektor dengan polesan APC (Angled Physical Contact) yang ujungnya miring 8 derajat?",
        options: ["Kuning", "Biru", "Hijau", "Hitam"],
        answer: 2,
        explanation: "Konektor tipe APC (Angled Physical Contact) diidentifikasi secara universal dengan warna hijau pada boot/body-nya."
      },
      {
        question: "Konektor berbentuk kotak kecil yang biasa dicolokkan ke transceiver SFP pada switch manageable berdensitas tinggi adalah...",
        options: ["ST", "FC", "LC", "SC"],
        answer: 2,
        explanation: "LC (Lucent Connector) adalah konektor berukuran kecil (SFF - Small Form Factor) setengah ukuran SC, ideal untuk port densitas tinggi."
      }
    ]
  },
  {
    id: "redaman",
    title: "Redaman Fiber Optik",
    category: "Pengukuran & Teori",
    summary: "Redaman (Attenuation) adalah pelemahan kekuatan sinyal cahaya saat merambat yang diukur dalam desibel (dB) akibat absorpsi, sebaran Rayleigh, dan rugi tekukan.",
    content: `
      <p class="mb-4"><strong>Redaman (Attenuation)</strong> adalah hilangnya sebagian energi cahaya sepanjang serat optik saat ditransmisikan. Redaman diukur dalam satuan <strong>desibel (dB)</strong>.</p>
      
      <p class="mb-3 font-semibold text-cyan-400">Penyebab Utama Redaman:</p>
      <ol class="list-decimal pl-6 mb-4 space-y-2 text-slate-300">
        <li><strong>Absorpsi (Penyerapan):</strong> Pengurangan daya cahaya karena diserap oleh molekul air (kelembapan) atau pengotor kimia logam di dalam kaca menjadi energi panas.</li>
        <li><strong>Hamburan Rayleigh (Rayleigh Scattering):</strong> Cahaya menabrak partikel ketidakrataan mikro kaca saat pendinginan pembuatan serat, memantul acak ke segala arah, dan sebagian hilang keluar cladding.</li>
        <li><strong>Rugi Tekukan (Bending Loss):</strong>
          <ul class="list-disc pl-6 space-y-1">
            <li><em>Macrobending:</em> Kabel menekuk terlalu tajam melebihi batas radius bengkok aman kabel, sehingga sudut datang melanggar syarat pemantulan sempurna.</li>
            <li><em>Microbending:</em> Tekukan mikro akibat tekanan fisik terlokalisasi di dalam jaket kabel (tekanan instalasi, kerutan pelindung).</li>
          </ul>
        </li>
      </ol>

      <div class="my-4 p-3 bg-slate-800/80 rounded border border-cyan-500/20 text-xs">
        <strong class="text-cyan-400 block mb-1">Standar Batas Redaman Perangkat:</strong>
        <p>Agar jaringan berjalan normal, total redaman tidak boleh melebihi nilai ambang batas anggaran daya perangkat aktif (Link Power Budget). Kehilangan sinyal kumulatif dihitung dari rugi transmisi kabel, rugi sambungan las, dan rugi konektor.</p>
      </div>
    `,
    examples: [
      "Kabel fiber optik ditekuk patah/terjepit pintu akan menghasilkan redaman masif, VFL akan mendeteksi cahaya laser bocor keluar di area yang menekuk tersebut.",
      "Nilai koefisien redaman rata-rata kabel Single Mode pada panjang gelombang 1550 nm adalah sebesar 0.2 dB per kilometer."
    ],
    quiz: [
      {
        question: "Satuan unit ukuran yang digunakan untuk menyatakan hilangnya kekuatan sinyal cahaya (redaman) adalah...",
        options: ["dB (Desibel)", "dBm (Desibel-miliwatt)", "Watt", "Ohm"],
        answer: 0,
        explanation: "Redaman menyatakan rasio kehilangan daya relatif, sehingga menggunakan satuan dB (Desibel). Sementara level daya mutlak menggunakan dBm."
      },
      {
        question: "Tekukan kabel optik yang sangat tajam dan terlihat oleh mata biasa yang memicu terjadinya kebocoran cahaya disebut...",
        options: ["Microbending", "Macrobending", "Rayleigh Bending", "Absorpsi bending"],
        answer: 1,
        explanation: "Macrobending adalah tekukan makroskopis (terlihat jelas) melebihi radius batas minimum kabel yang merusak pemantulan internal sempurna."
      },
      {
        question: "Fenomena hilangnya sebagian cahaya akibat menabrak ketidakrataan struktur mikroskopis molekul kaca disebut...",
        options: ["Hamburan Rayleigh", "Refraksi Laser", "Penyerapan Air", "Dispersi Modal"],
        answer: 0,
        explanation: "Hamburan Rayleigh (Rayleigh Scattering) menyumbang porsi terbesar kehilangan daya alami akibat struktur mikro kaca yang tak seragam."
      }
    ]
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting Jaringan Fiber Optik",
    category: "Pengukuran & Teori",
    summary: "Panduan praktis melacak, mendiagnosis, dan menyelesaikan gangguan putus total atau penurunan kualitas pada jaringan serat optik.",
    content: `
      <p class="mb-4">Masalah pada jaringan fiber optik umumnya terbagi menjadi dua kategori: <strong>Mati Total (Loss of Signal / LOS)</strong> atau <strong>Penurunan Performa (Redaman Tinggi / Latency / RTO)</strong>.</p>
      
      <h4 class="font-bold text-cyan-400 mt-2 mb-2">Langkah Sistematis Penanganan Masalah:</h4>
      <div class="space-y-3 text-xs mb-4">
        <div class="p-3 bg-slate-900 border-l-4 border-cyan-500 text-slate-300">
          <strong class="text-white block mb-1">Langkah 1: Cek Status Port & Ukur Daya Terima (Rx Power)</strong>
          Gunakan OPM pada ujung modem pelanggan atau port SFP.
          <ul class="list-disc pl-4 mt-1">
            <li>Nilai normal berkisar antara -8 dBm hingga -27 dBm.</li>
            <li>Jika &lt; -27 dBm (misal -30 dBm), berarti terjadi redaman tinggi di jalur.</li>
            <li>Jika tidak terbaca sama sekali (biasanya tertulis -50 dBm atau LO), berarti kabel putus total.</li>
          </ul>
        </div>
        
        <div class="p-3 bg-slate-900 border-l-4 border-cyan-500 text-slate-300">
          <strong class="text-white block mb-1">Langkah 2: Gunakan VFL (Visual Fault Locator)</strong>
          Bila jarak gangguan dekat (di area rumah pelanggan/ODP), sorotkan laser merah untuk melihat kebocoran cahaya akibat tekukan/kabel terjepit.
        </div>
        
        <div class="p-3 bg-slate-900 border-l-4 border-cyan-500 text-slate-300">
          <strong class="text-white block mb-1">Langkah 3: Jalankan Pengujian OTDR</strong>
          Untuk kabel yang membentang jauh, hubungkan OTDR pada ujung kabel. Lihat grafik grafik hasil untuk mengetahui jarak titik putus secara tepat (misalnya putus pada kilometer 4.2).
        </div>

        <div class="p-3 bg-slate-900 border-l-4 border-cyan-500 text-slate-300">
          <strong class="text-white block mb-1">Langkah 4: Lakukan Pembersihan atau Penyambungan Ulang</strong>
          Jika masalah ada pada konektor kotor, bersihkan dengan alkohol & tisu khusus. Jika kabel putus, lakukan splicing ulang menggunakan Fusion Splicer.
        </div>
      </div>
    `,
    examples: [
      "Lampu indikator LOS merah berkedip di modem rumah menandakan modem tidak menerima sinyal optik sama sekali dari pusat.",
      "Kabel pigtail yang ditekuk kencang dengan pengikat kabel di dalam OTB sering menjadi penyebab redaman tinggi hingga -32 dBm."
    ],
    quiz: [
      {
        question: "Jika modem pelanggan menunjukkan indikator LOS menyala merah, dan OPM menunjukkan -50 dBm (No Light), kemungkinan terbesar kerusakannya adalah...",
        options: [
          "Connector kotor berdebu sedikit",
          "Kabel drop core putus total atau port OLT mati",
          "Redaman kabel terlalu bagus",
          "Konfigurasi IP address salah"
        ],
        answer: 1,
        explanation: "-50 dBm pada OPM mengindikasikan tidak adanya energi cahaya laser yang sampai sama sekali, biasanya akibat kabel putus total (LOS)."
      },
      {
        question: "Berapa rentang daya optik receiver (Rx Power) yang dianggap aman/baik pada perangkat modem ONT pelanggan FTTH?",
        options: [
          "0 dBm sampai +10 dBm",
          "-8 dBm sampai -27 dBm",
          "-28 dBm sampai -40 dBm",
          "-50 dBm ke bawah"
        ],
        answer: 1,
        explanation: "Rentang ideal penerimaan daya optik di modem pelanggan adalah -8 dBm hingga -27 dBm agar sinyal dapat diterjemahkan tanpa error."
      },
      {
        question: "Bagaimanakah tindakan awal yang tepat jika nilai redaman link tinggi disebabkan oleh connector kotor di patch panel?",
        options: [
          "Langsung memotong kabel untuk splicing ulang",
          "Membersihkan ujung ferrule connector dengan alkohol swab/kain fiber pembersih khusus",
          "Mengganti switch hub dengan yang baru",
          "Menurunkan daya pancar Optical Light Source"
        ],
        answer: 1,
        explanation: "Connector kotor cukup dibersihkan dahulu dengan alkohol 99% dan lap bebas debu, tidak perlu langsung memotong kabel."
      }
    ]
  }
];

if (typeof module !== 'undefined') {
  module.exports = materialsData;
}
