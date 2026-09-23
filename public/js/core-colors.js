// Data Standar 12 Warna Serat Optik & Tube (Standar TIA/EIA-598 & Telkom Indonesia)
const colorStandards = [
  { number: 1, name: "Biru", en: "Blue", hex: "#2563eb", textHex: "#ffffff", border: "#1d4ed8" },
  { number: 2, name: "Oranye", en: "Orange", hex: "#ea580c", textHex: "#ffffff", border: "#c2410c" },
  { number: 3, name: "Hijau", en: "Green", hex: "#16a34a", textHex: "#ffffff", border: "#15803d" },
  { number: 4, name: "Cokelat", en: "Brown", hex: "#78350f", textHex: "#ffffff", border: "#451a03" },
  { number: 5, name: "Abu-abu", en: "Slate/Grey", hex: "#64748b", textHex: "#ffffff", border: "#475569" },
  { number: 6, name: "Putih", en: "White", hex: "#f8fafc", textHex: "#0f172a", border: "#cbd5e1" },
  { number: 7, name: "Merah", en: "Red", hex: "#dc2626", textHex: "#ffffff", border: "#b91c1c" },
  { number: 8, name: "Hitam", en: "Black", hex: "#0f172a", textHex: "#ffffff", border: "#475569" },
  { number: 9, name: "Kuning", en: "Yellow", hex: "#eab308", textHex: "#0f172a", border: "#ca8a04" },
  { number: 10, name: "Ungu", en: "Violet/Purple", hex: "#9333ea", textHex: "#ffffff", border: "#7e22ce" },
  { number: 11, name: "Pink", en: "Rose/Pink", hex: "#db2777", textHex: "#ffffff", border: "#be185d" },
  { number: 12, name: "Toska", en: "Aqua/Cyan", hex: "#0d9488", textHex: "#ffffff", border: "#0f766e" }
];

// State Interaktif untuk Modul Tube & Core
let coreTubeState = {
  activeTab: 'visualizer', // 'visualizer' | 'calculator' | 'matrix' | 'quiz'
  selectedTube: 1,
  coresPerTube: 12,
  calcCoreInput: 28,
  quiz: {
    questionIndex: 0,
    score: 0,
    totalQuestions: 8,
    currentQuestion: null,
    answered: false
  }
};

function initCoreColorsSection() {
  renderCoreColorsLayout();
  setCoreTubeTab('visualizer');
}

// Render Kerangka Utama
function renderCoreColorsLayout() {
  const container = document.getElementById('core-colors-content');
  if (!container) return;

  container.innerHTML = `
    <div class="flex flex-col gap-6 text-slate-800 animate-fade-in">
      
      <!-- Header & Panduan Jembatan Keledai -->
      <div class="bg-gradient-to-r from-blue-50 to-pink-50 p-6 lg:p-8 rounded-3xl border border-pink-200 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 shadow-sm">
        <div class="max-w-2xl">
          <span class="text-xs uppercase tracking-widest text-pink-600 font-extrabold flex items-center gap-1.5">
            <i class="fas fa-palette"></i> Standar TIA/EIA-598 & Telkom Indonesia
          </span>
          <h3 class="text-2xl font-black text-slate-800 mt-1">Kode Warna Core & Loose Tube</h3>
          <p class="text-slate-650 text-xs mt-2 leading-relaxed">
            Pada kabel berkapasitas besar (24, 48, 96, 144 core), serat kaca dibungkus dalam tabung pelindung yang disebut <strong>Loose Tube</strong>. 
            Urutan warna Tube dan warna Core menggunakan <strong>12 warna standar yang persis sama</strong> dengan jembatan keledai:
          </p>
          <div class="mt-3 flex flex-wrap items-center gap-1.5 font-mono text-xs">
            <span class="px-2 py-1 bg-white border border-pink-200 rounded-lg font-black text-pink-700 shadow-sm">BOHAPuMeHiKuUPT</span>
            <span class="text-slate-500 text-[11px]">= Biru, Oranye, Hijau, Cokelat, Abu, Putih, Merah, Hitam, Kuning, Ungu, Pink, Toska</span>
          </div>
        </div>
        <div class="hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-pink-150 shadow-sm">
          <div class="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center text-xl font-bold">
            <i class="fas fa-layer-group"></i>
          </div>
          <div class="text-left">
            <div class="text-xs font-bold text-slate-800">12 Warna Standar</div>
            <div class="text-[10px] text-slate-400">1 Tube = 12 Core Serat Optik</div>
          </div>
        </div>
      </div>

      <!-- Tab Navigasi Fitur Pembelajaran -->
      <div class="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        <button 
          onclick="setCoreTubeTab('visualizer')" 
          id="tab-btn-visualizer" 
          class="px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 bg-cyan-600 text-white shadow-sm"
        >
          <i class="fas fa-eye"></i> Anatomi Tube & Core
        </button>
        <button 
          onclick="setCoreTubeTab('calculator')" 
          id="tab-btn-calculator" 
          class="px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800"
        >
          <i class="fas fa-calculator"></i> Kalkulator Pencari Tube & Core
        </button>
        <button 
          onclick="setCoreTubeTab('matrix')" 
          id="tab-btn-matrix" 
          class="px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800"
        >
          <i class="fas fa-table"></i> Tabel Matriks Lapangan
        </button>
        <button 
          onclick="setCoreTubeTab('quiz')" 
          id="tab-btn-quiz" 
          class="px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800"
        >
          <i class="fas fa-graduation-cap"></i> Kuis Latihan Tube & Core
        </button>
      </div>

      <!-- Kontainer Konten Sesuai Tab -->
      <div id="core-tube-tab-content">
        <!-- Diisi dinamis -->
      </div>

    </div>
  `;
}

// Handler Penggantian Tab
function setCoreTubeTab(tabName) {
  coreTubeState.activeTab = tabName;

  const tabs = ['visualizer', 'calculator', 'matrix', 'quiz'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tab-btn-${t}`);
    if (btn) {
      if (t === tabName) {
        btn.className = "px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 bg-cyan-600 text-white shadow-sm";
      } else {
        btn.className = "px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800";
      }
    }
  });

  const contentArea = document.getElementById('core-tube-tab-content');
  if (!contentArea) return;

  if (tabName === 'visualizer') {
    renderVisualizerTab(contentArea);
  } else if (tabName === 'calculator') {
    renderCalculatorTab(contentArea);
  } else if (tabName === 'matrix') {
    renderMatrixTab(contentArea);
  } else if (tabName === 'quiz') {
    renderQuizTab(contentArea);
  }
}

// ================= 1. TAB ANATOMI & VISUALISASI TUBE & CORE =================

function renderVisualizerTab(container) {
  const currentTube = colorStandards.find(c => c.number === coreTubeState.selectedTube) || colorStandards[0];
  const startCore = (coreTubeState.selectedTube - 1) * 12 + 1;
  const endCore = coreTubeState.selectedTube * 12;

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      <!-- Panel Kiri: Pemilihan Tube & Diagram Kabel Melintang -->
      <div class="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 flex flex-col gap-5 shadow-sm">
        <div>
          <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider">Pilih Loose Tube (1 - 12)</h4>
          <p class="text-[11px] text-slate-500 mt-0.5">Klik salah satu tabung (Tube) untuk melihat 12 core serat optik di dalamnya:</p>
        </div>

        <!-- Tombol Pilihan Tube 1 s/d 12 -->
        <div class="grid grid-cols-4 sm:grid-cols-6 gap-2">
          ${colorStandards.map(c => {
            const isSelected = c.number === coreTubeState.selectedTube;
            return `
              <button 
                onclick="selectTube(${c.number})"
                class="p-2.5 rounded-xl border flex flex-col items-center gap-1.5 transition-all text-center ${
                  isSelected 
                    ? 'border-cyan-500 ring-2 ring-cyan-400/40 bg-cyan-50/50 shadow-sm scale-105' 
                    : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'
                }"
              >
                <div class="w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] shadow-sm" style="background-color: ${c.hex}; color: ${c.textHex}; ${c.border ? `border: 1px solid ${c.border}` : ''}">
                  ${c.number}
                </div>
                <span class="text-[10px] font-bold text-slate-700 leading-tight">${c.name}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Diagram Interaktif Potongan Melintang (Cross-Section) -->
        <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col items-center gap-3">
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Potongan Melintang Kabel (Cross-Section)</span>
          
          <svg width="220" height="220" viewBox="0 0 200 200" class="overflow-visible select-none">
            <!-- Kulit Luar Kabel (Outer Jacket) -->
            <circle cx="100" cy="100" r="95" fill="#1e293b" stroke="#475569" stroke-width="3" />
            <circle cx="100" cy="100" r="86" fill="#334155" />
            <circle cx="100" cy="100" r="82" fill="#0f172a" />
            
            <!-- Central Strength Member (Batang Penguat Tengah) -->
            <circle cx="100" cy="100" r="24" fill="#cbd5e1" stroke="#94a3b8" stroke-width="2" />
            <text x="100" y="103" text-anchor="middle" font-size="7" font-weight="bold" fill="#334155">CSM</text>

            <!-- 12 Tube Melingkar Mengelilingi CSM -->
            ${colorStandards.map((c, idx) => {
              const angle = (idx / 12) * 2 * Math.PI - Math.PI / 2;
              const radius = 55;
              const cx = 100 + radius * Math.cos(angle);
              const cy = 100 + radius * Math.sin(angle);
              const isSelected = c.number === coreTubeState.selectedTube;

              return `
                <g onclick="selectTube(${c.number})" class="cursor-pointer group">
                  ${isSelected ? `<circle cx="${cx}" cy="${cy}" r="17" fill="none" stroke="#06b6d4" stroke-width="3" class="animate-pulse" />` : ''}
                  <circle cx="${cx}" cy="${cy}" r="13" fill="${c.hex}" stroke="${isSelected ? '#ffffff' : '#475569'}" stroke-width="${isSelected ? '2' : '1'}" />
                  <text x="${cx}" y="${cy + 3}" text-anchor="middle" font-size="8" font-weight="bold" fill="${c.textHex}">${c.number}</text>
                </g>
              `;
            }).join('')}
          </svg>
          
          <div class="text-[10px] text-slate-500 text-center">
            Tube aktif terpilih: <strong class="text-cyan-700">Tube #${currentTube.number} (${currentTube.name})</strong>
          </div>
        </div>
      </div>

      <!-- Panel Kanan: Bedah 12 Core di Dalam Tube Terpilih -->
      <div class="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200 flex flex-col gap-4 shadow-sm">
        <div class="flex justify-between items-center border-b border-slate-100 pb-3">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-4 h-4 rounded-full shadow-sm" style="background-color: ${currentTube.hex}; ${currentTube.border ? `border: 1px solid ${currentTube.border}` : ''}"></span>
              <h4 class="text-sm font-bold text-slate-800">Isi Serat Optik pada Tube #${currentTube.number} (${currentTube.name})</h4>
            </div>
            <p class="text-[11px] text-slate-500 mt-0.5">Membungkus <strong>Core nomor ${startCore} s.d. ${endCore}</strong></p>
          </div>
          <span class="px-3 py-1 bg-cyan-50 border border-cyan-200 text-cyan-700 font-bold rounded-full text-xs">
            12 Core Serat
          </span>
        </div>

        <!-- Visualisasi Serat di dalam Tabung -->
        <div class="p-4 bg-slate-50 rounded-2xl border border-slate-150 flex flex-col gap-2">
          ${colorStandards.map((coreColor, idx) => {
            const globalCoreNum = startCore + idx;
            return `
              <div class="flex items-center gap-3 p-2 bg-white rounded-xl border border-slate-100 hover:border-cyan-300 transition-all shadow-sm">
                <!-- No Core Global -->
                <div class="w-16 text-left">
                  <span class="font-mono text-xs font-black text-slate-800">Core ${globalCoreNum}</span>
                </div>

                <!-- Jalur Serat Optik -->
                <div class="flex-1 h-4 relative flex items-center">
                  <div class="absolute inset-y-1.5 left-0 right-0 bg-slate-100 rounded"></div>
                  <div 
                    class="absolute inset-y-1 left-0 right-0 rounded transition-all shadow-sm" 
                    style="background-color: ${coreColor.hex}; ${coreColor.border ? `border: 1px solid ${coreColor.border}` : ''}"
                  ></div>
                </div>

                <!-- Keterangan Warna Core & Urutan dalam Tube -->
                <div class="w-36 text-right flex items-center justify-end gap-2">
                  <span class="text-[10px] text-slate-400 font-mono">Urutan #${coreColor.number}</span>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold" style="background-color: ${coreColor.hex}15; color: ${coreColor.hex}; border: 1px solid ${coreColor.hex}30;">
                    ${coreColor.name}
                  </span>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div class="p-4 bg-blue-50 border border-blue-200 rounded-2xl text-xs text-blue-900 flex items-start gap-2.5">
          <i class="fas fa-info-circle text-blue-600 mt-0.5"></i>
          <div>
            <strong>Prinsip Lapangan:</strong> Setiap kali teknisi membuka satu Loose Tube, urutan warna serat optik di dalamnya selalu berulang dari warna <strong>1 (Biru) sampai 12 (Toska)</strong>. Yang membedakan antar core adalah nomor urut globalnya yang ditentukan oleh letak Tube-nya.
          </div>
        </div>
      </div>

    </div>
  `;
}

function selectTube(tubeNumber) {
  coreTubeState.selectedTube = tubeNumber;
  const contentArea = document.getElementById('core-tube-tab-content');
  if (contentArea) renderVisualizerTab(contentArea);
}

// ================= 2. TAB KALKULATOR CEPAT CORE & TUBE =================

function renderCalculatorTab(container) {
  const result = getCoreTubeInfo(coreTubeState.calcCoreInput, coreTubeState.coresPerTube);

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      <!-- Panel Input Kalkulator -->
      <div class="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 flex flex-col gap-5 shadow-sm">
        <div>
          <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider">Cari Posisi Tube & Core</h4>
          <p class="text-[11px] text-slate-500 mt-0.5">Ketikkan nomor core kabel untuk mengetahui otomatis warna tube dan warna core-nya.</p>
        </div>

        <div class="flex flex-col gap-4">
          <!-- Input Nomor Core -->
          <div>
            <label class="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">Nomor Core Kabel:</label>
            <input 
              type="number" 
              id="calc-core-num" 
              value="${coreTubeState.calcCoreInput}" 
              min="1" 
              max="288" 
              class="w-full bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl px-4 py-3 text-base text-slate-800 font-mono font-bold transition-colors outline-none"
              oninput="handleCalcCoreInput(this.value)"
            >
          </div>

          <!-- Preset Cepat Nomor Core Populer -->
          <div>
            <span class="block text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1.5">Contoh Cepat Core Lapangan:</span>
            <div class="flex flex-wrap gap-1.5">
              ${[1, 12, 13, 24, 28, 43, 50, 72, 96, 144].map(n => `
                <button 
                  onclick="setCalcCorePreset(${n})"
                  class="px-2.5 py-1 bg-slate-100 hover:bg-cyan-100 hover:text-cyan-800 text-slate-600 rounded-lg text-xs font-mono font-semibold transition-all"
                >
                  Core ${n}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Konfigurasi Core per Tube -->
          <div>
            <label class="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">Kapasitas Tube:</label>
            <select 
              id="calc-cores-per-tube" 
              class="w-full bg-slate-50 border border-slate-200 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-xs text-slate-800 font-semibold outline-none"
              onchange="handleCalcTubeCapacity(this.value)"
            >
              <option value="12" ${coreTubeState.coresPerTube === 12 ? 'selected' : ''}>12 Core per Tube (Standar Utama Telkom / ISP)</option>
              <option value="6" ${coreTubeState.coresPerTube === 6 ? 'selected' : ''}>6 Core per Tube (Kabel Distribusi Khusus)</option>
            </select>
          </div>
        </div>

        <!-- Penjelasan Rumus Matematika -->
        <div class="p-4 bg-slate-50 rounded-2xl border border-slate-150 text-xs text-slate-600 space-y-2">
          <strong class="text-slate-800 block">Rumus Perhitungan Standar:</strong>
          <p>1. <strong>Nomor Tube</strong> = <code class="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-cyan-700">ceil(Nomor Core / Kapasitas Tube)</code></p>
          <p>2. <strong>Urutan Core di Tube</strong> = <code class="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-cyan-700">((Nomor Core - 1) % Kapasitas Tube) + 1</code></p>
        </div>
      </div>

      <!-- Panel Hasil Visualisasi Pencarian -->
      <div class="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200 flex flex-col justify-between gap-6 shadow-sm">
        <div>
          <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-3">
            Hasil Analisis Posisi Fisik: Core #${result.coreNumber}
          </h4>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
            <!-- Kartu Warna Tube -->
            <div class="p-5 rounded-2xl border border-slate-200 flex flex-col items-center text-center gap-3 bg-slate-50">
              <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Tabung Pembungkus (Loose Tube)</span>
              <div 
                class="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold shadow-md"
                style="background-color: ${result.tubeColor.hex}; color: ${result.tubeColor.textHex}; ${result.tubeColor.border ? `border: 2px solid ${result.tubeColor.border}` : ''}"
              >
                ${result.tubeNumber}
              </div>
              <div>
                <h5 class="text-lg font-black text-slate-800">Tube #${result.tubeNumber} (${result.tubeColor.name})</h5>
                <p class="text-[11px] text-slate-500">Warna Tabung Pelindung</p>
              </div>
            </div>

            <!-- Kartu Warna Core -->
            <div class="p-5 rounded-2xl border border-slate-200 flex flex-col items-center text-center gap-3 bg-slate-50">
              <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Serat Kaca Optik (Core)</span>
              <div 
                class="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold shadow-md"
                style="background-color: ${result.coreColor.hex}; color: ${result.coreColor.textHex}; ${result.coreColor.border ? `border: 2px solid ${result.coreColor.border}` : ''}"
              >
                ${result.coreInTubeIndex}
              </div>
              <div>
                <h5 class="text-lg font-black text-slate-800">Core #${result.coreInTubeIndex} (${result.coreColor.name})</h5>
                <p class="text-[11px] text-slate-500">Warna Serat di Dalam Tube</p>
              </div>
            </div>
          </div>

          <!-- Rincian Langkah Kalkulasi -->
          <div class="mt-6 p-4 bg-cyan-50/40 border border-cyan-100 rounded-2xl text-xs space-y-2 text-slate-700">
            <span class="font-bold text-cyan-800 block">Langkah Pembuktian Matematis:</span>
            <p>&bull; <strong>Perhitungan Tube:</strong> ${result.coreNumber} &divide; ${result.coresPerTube} = ${(result.coreNumber / result.coresPerTube).toFixed(2)} &rarr; Pembulatan ke atas = <strong>Tube ke-${result.tubeNumber}</strong> (${result.tubeColor.name}).</p>
            <p>&bull; <strong>Perhitungan Core:</strong> ((${result.coreNumber} - 1) mod ${result.coresPerTube}) + 1 = <strong>Core urutan ke-${result.coreInTubeIndex}</strong> (${result.coreColor.name}) di dalam tube tersebut.</p>
          </div>
        </div>

        <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-800 font-semibold flex items-center gap-2">
          <i class="fas fa-check-circle text-emerald-600 text-base"></i>
          <span>Kesimpulan: Buka <strong>Tube ${result.tubeColor.name}</strong>, lalu ambil serat optik berwarna <strong>${result.coreColor.name}</strong>.</span>
        </div>
      </div>

    </div>
  `;
}

function handleCalcCoreInput(val) {
  let num = parseInt(val) || 1;
  if (num < 1) num = 1;
  if (num > 288) num = 288;
  coreTubeState.calcCoreInput = num;
  const contentArea = document.getElementById('core-tube-tab-content');
  if (contentArea) renderCalculatorTab(contentArea);
}

function setCalcCorePreset(num) {
  coreTubeState.calcCoreInput = num;
  const contentArea = document.getElementById('core-tube-tab-content');
  if (contentArea) renderCalculatorTab(contentArea);
}

function handleCalcTubeCapacity(val) {
  coreTubeState.coresPerTube = parseInt(val) || 12;
  const contentArea = document.getElementById('core-tube-tab-content');
  if (contentArea) renderCalculatorTab(contentArea);
}

function getCoreTubeInfo(coreNumber, coresPerTube = 12) {
  const tubeNumber = Math.ceil(coreNumber / coresPerTube);
  const coreInTubeIndex = ((coreNumber - 1) % coresPerTube) + 1;
  
  const tubeColorIndex = ((tubeNumber - 1) % 12) + 1;
  const tubeColor = colorStandards.find(c => c.number === tubeColorIndex) || colorStandards[0];
  const coreColor = colorStandards.find(c => c.number === coreInTubeIndex) || colorStandards[0];

  return {
    coreNumber,
    tubeNumber,
    tubeColor,
    coreInTubeIndex,
    coreColor,
    coresPerTube
  };
}

// ================= 3. TAB TABEL MATRIKS LAPANGAN =================

let matrixFilterCapacity = 24;

function renderMatrixTab(container) {
  container.innerHTML = `
    <div class="bg-white p-6 rounded-3xl border border-slate-200 flex flex-col gap-5 shadow-sm">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
        <div>
          <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider">Tabel Matriks Acuan Tube & Core (Standar Lapangan)</h4>
          <p class="text-[11px] text-slate-500 mt-0.5">Panduan cepat pencocokan nomor kabel untuk teknisi splicer di lapangan.</p>
        </div>

        <!-- Filter Kapasitas Kabel -->
        <div class="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
          ${[24, 48, 96, 144].map(cap => `
            <button 
              onclick="setMatrixCapacity(${cap})"
              class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                matrixFilterCapacity === cap ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }"
            >
              Kabel ${cap} Core
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Tabel Responsif -->
      <div class="overflow-x-auto max-h-[500px] overflow-y-auto">
        <table class="w-full text-left border-collapse">
          <thead class="sticky top-0 bg-slate-50 border-b border-slate-200 text-[10px] text-slate-500 uppercase font-bold">
            <tr>
              <th class="p-3">No. Core Global</th>
              <th class="p-3">Tube (Nomor & Warna)</th>
              <th class="p-3">Urutan dalam Tube</th>
              <th class="p-3">Warna Serat Optik</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-xs">
            ${Array.from({ length: matrixFilterCapacity }, (_, i) => i + 1).map(coreNum => {
              const info = getCoreTubeInfo(coreNum, 12);
              return `
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-3 font-mono font-bold text-slate-800">Core #${coreNum}</td>
                  <td class="p-3">
                    <span class="inline-flex items-center gap-2 font-semibold text-slate-700">
                      <span class="w-3.5 h-3.5 rounded-full shadow-sm" style="background-color: ${info.tubeColor.hex}; ${info.tubeColor.border ? `border: 1px solid ${info.tubeColor.border}` : ''}"></span>
                      Tube ${info.tubeNumber} (${info.tubeColor.name})
                    </span>
                  </td>
                  <td class="p-3 font-mono text-slate-500">Core ke-${info.coreInTubeIndex}</td>
                  <td class="p-3">
                    <span class="inline-flex items-center gap-2 font-bold" style="color: ${info.coreColor.hex};">
                      <span class="w-3.5 h-3.5 rounded-full shadow-sm" style="background-color: ${info.coreColor.hex}; ${info.coreColor.border ? `border: 1px solid ${info.coreColor.border}` : ''}"></span>
                      ${info.coreColor.name}
                    </span>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function setMatrixCapacity(cap) {
  matrixFilterCapacity = cap;
  const contentArea = document.getElementById('core-tube-tab-content');
  if (contentArea) renderMatrixTab(contentArea);
}

// ================= 4. TAB KUIS LATIHAN TUBE & CORE =================

const quizQuestionsPool = [
  {
    question: "Kabel optik 48 core (12 core/tube) putus pada Core #28. Apa warna TUBE dan warna CORE yang harus disambung oleh teknisi?",
    options: [
      "Tube Hijau, Core Cokelat",
      "Tube Hijau, Core Abu-abu",
      "Tube Oranye, Core Cokelat",
      "Tube Cokelat, Core Hijau"
    ],
    answer: 0,
    explanation: "Core 28: Tube = ceil(28/12) = 3 (Hijau). Urutan core = ((28-1)%12)+1 = 4 (Cokelat). Jadi: Tube Hijau, Core Cokelat."
  },
  {
    question: "Berapa nomor core global untuk serat optik berwarna MERAH yang berada di dalam Tube ABU-ABU (kabel 12 core/tube)?",
    options: ["Core 43", "Core 55", "Core 67", "Core 31"],
    answer: 1,
    explanation: "Tube Abu-abu adalah Tube #5. Core Merah adalah urutan ke-7. Core global = (5 - 1) * 12 + 7 = 48 + 7 = Core 55."
  },
  {
    question: "Jika seorang teknisi membuka Tube Cokelat (Tube ke-4), berapakah rentang nomor core yang ada di dalam tube tersebut?",
    options: [
      "Core 25 sampai Core 36",
      "Core 37 sampai Core 48",
      "Core 49 sampai Core 60",
      "Core 13 sampai Core 24"
    ],
    answer: 1,
    explanation: "Tube 1 = 1-12, Tube 2 = 13-24, Tube 3 = 25-36, Tube 4 = 37-48."
  },
  {
    question: "Apa warna core urutan ke-11 dalam jembatan keledai BOHAPuMeHiKuUPT?",
    options: ["Ungu", "Pink", "Toska", "Kuning"],
    answer: 1,
    explanation: "Urutan ke-11 adalah Pink (Rose). Urutan ke-10 Ungu, dan urutan ke-12 Toska."
  },
  {
    question: "Pada kabel 96 core, Core #72 berada pada tube warna apa dan core warna apa?",
    options: [
      "Tube Putih, Core Toska",
      "Tube Merah, Core Biru",
      "Tube Hitam, Core Toska",
      "Tube Abu-abu, Core Putih"
    ],
    answer: 0,
    explanation: "Core 72: Tube = 72/12 = 6 (Putih). Urutan core = 12 (Toska). Jadi Tube Putih, Core Toska."
  },
  {
    question: "Apa warna serat optik pertama (Core #1) di dalam setiap tube?",
    options: ["Kuning", "Biru", "Putih", "Hijau"],
    answer: 1,
    explanation: "Warna pertama selalu Biru (Blue) sebagai nomor urut 1 dalam standar TIA/EIA-598."
  }
];

function renderQuizTab(container) {
  const q = quizQuestionsPool[coreTubeState.quiz.questionIndex % quizQuestionsPool.length];
  coreTubeState.quiz.currentQuestion = q;
  coreTubeState.quiz.answered = false;

  container.innerHTML = `
    <div class="bg-white p-6 lg:p-8 rounded-3xl border border-slate-200 flex flex-col gap-6 shadow-sm max-w-2xl mx-auto">
      <div class="flex justify-between items-center border-b border-slate-100 pb-4">
        <div>
          <span class="text-xs font-bold text-pink-600 uppercase tracking-wider">Uji Kompetensi Lapangan</span>
          <h4 class="text-lg font-black text-slate-800 mt-0.5">Soal #${(coreTubeState.quiz.questionIndex % quizQuestionsPool.length) + 1} dari ${quizQuestionsPool.length}</h4>
        </div>
        <div class="text-right font-mono text-xs">
          <span class="text-slate-400">Skor:</span>
          <strong class="text-cyan-600 text-sm font-bold ml-1">${coreTubeState.quiz.score} Poin</strong>
        </div>
      </div>

      <!-- Pertanyaan -->
      <div class="text-sm font-bold text-slate-800 leading-relaxed">
        ${q.question}
      </div>

      <!-- Pilihan Jawaban -->
      <div class="flex flex-col gap-2.5" id="quiz-options-container">
        ${q.options.map((opt, optIdx) => `
          <button 
            onclick="answerTubeQuiz(${optIdx})"
            id="quiz-opt-btn-${optIdx}"
            class="p-3.5 rounded-xl border border-slate-200 hover:border-cyan-400 hover:bg-slate-50 text-left text-xs font-semibold text-slate-700 transition-all active:scale-98"
          >
            ${String.fromCharCode(65 + optIdx)}. ${opt}
          </button>
        `).join('')}
      </div>

      <!-- Kotak Penjelasan -->
      <div id="quiz-feedback-box" class="hidden p-4 rounded-2xl text-xs leading-relaxed"></div>

      <!-- Tombol Next -->
      <button 
        onclick="nextTubeQuizQuestion()" 
        id="quiz-btn-next" 
        class="hidden w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl text-xs transition-all shadow-md active:scale-95"
      >
        Lanjut ke Soal Berikutnya &rarr;
      </button>
    </div>
  `;
}

function answerTubeQuiz(optIdx) {
  if (coreTubeState.quiz.answered) return;
  coreTubeState.quiz.answered = true;

  const q = coreTubeState.quiz.currentQuestion;
  const isCorrect = (optIdx === q.answer);

  if (isCorrect) {
    coreTubeState.quiz.score += 10;
  }

  const feedbackBox = document.getElementById('quiz-feedback-box');
  if (feedbackBox) {
    feedbackBox.classList.remove('hidden');
    if (isCorrect) {
      feedbackBox.className = "p-4 rounded-2xl text-xs leading-relaxed bg-green-50 border border-green-200 text-green-800 font-semibold shadow-sm";
      feedbackBox.innerHTML = `<i class="fas fa-check-circle text-green-600 mr-1.5"></i><strong>Luar Biasa, Jawaban Benar!</strong><p class="mt-1 font-normal text-slate-650">${q.explanation}</p>`;
    } else {
      feedbackBox.className = "p-4 rounded-2xl text-xs leading-relaxed bg-red-50 border border-red-200 text-red-800 font-semibold shadow-sm";
      feedbackBox.innerHTML = `<i class="fas fa-times-circle text-red-600 mr-1.5"></i><strong>Kurang Tepat!</strong> Jawaban yang benar adalah: <em>${q.options[q.answer]}</em>.<p class="mt-1 font-normal text-slate-650">${q.explanation}</p>`;
    }
  }

  q.options.forEach((_, idx) => {
    const btn = document.getElementById(`quiz-opt-btn-${idx}`);
    if (btn) {
      if (idx === q.answer) {
        btn.className = "p-3.5 rounded-xl border border-green-500 bg-green-50 text-green-800 text-left text-xs font-bold shadow-sm";
      } else if (idx === optIdx) {
        btn.className = "p-3.5 rounded-xl border border-red-400 bg-red-50 text-red-700 text-left text-xs font-semibold shadow-sm";
      } else {
        btn.className = "p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 text-left text-xs";
      }
    }
  });

  const nextBtn = document.getElementById('quiz-btn-next');
  if (nextBtn) nextBtn.classList.remove('hidden');
}

function nextTubeQuizQuestion() {
  coreTubeState.quiz.questionIndex++;
  const contentArea = document.getElementById('core-tube-tab-content');
  if (contentArea) renderQuizTab(contentArea);
}
