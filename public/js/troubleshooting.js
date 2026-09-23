const troubleshootingCases = [
  {
    id: "kabel-putus",
    title: "Kasus 1: Internet Mati Total (Lampu LOS Merah Berkedip)",
    description: "Pelanggan di Jl. Kenanga melaporkan bahwa koneksi internet di rumahnya terputus total. Lampu indikator LOS pada modem ONT berkedip merah terang.",
    correctSteps: ["OPM", "OTDR", "SPLICE", "OPM", "VERIFY"],
    stepsMetadata: {
      "OPM": {
        label: "Ukur Daya Optik di ONT dengan OPM",
        resultText: "Hasil OPM menunjukkan daya terima <strong class='text-red-750'>-50.0 dBm (LO / No Light)</strong>. Tidak ada sinyal cahaya sama sekali yang terdeteksi di modem pelanggan.",
        nextRequired: "OTDR"
      },
      "OTDR": {
        label: "Lakukan Pengujian Jalur Menggunakan OTDR",
        resultText: "Grafik OTDR menunjukkan pantulan reflektansi tinggi (End of Fiber / Putus) pada <strong class='text-cyan-700 font-bold'>jarak 1.2 Km</strong> dari rumah pelanggan (di area kabel udara dekat tiang persimpangan jalan).",
        nextRequired: "SPLICE"
      },
      "SPLICE": {
        label: "Lakukan Splicing Ulang di Lokasi Kerusakan",
        resultText: "Teknisi menuju lokasi 1.2 Km, menemukan kabel tertimpa dahan pohon hingga putus. Teknisi memotong kabel yang rusak, membersihkan core kaca, dan menyambungnya kembali menggunakan <strong>Fusion Splicer</strong>. Hasil las menunjukkan loss <strong class='text-green-700 font-bold'>0.02 dB</strong>.",
        nextRequired: "OPM"
      },
      "VERIFY": {
        label: "Selesaikan & Verifikasi Jaringan",
        resultText: "Kasus ditutup. Koneksi pelanggan berhasil pulih, lampu LOS merah mati, dan lampu PON menyala hijau stabil.",
        nextRequired: null
      }
    }
  },
  {
    id: "redaman-tinggi",
    title: "Kasus 2: Koneksi Lambat & Sering RTO (Redaman Tinggi)",
    description: "Pelanggan melapor bahwa koneksi internetnya sangat lambat untuk streaming, game online sering mengalami RTO (Request Time Out), namun lampu modem tidak merah.",
    correctSteps: ["OPM", "VFL", "BENDING", "OPM", "VERIFY"],
    stepsMetadata: {
      "OPM": {
        label: "Ukur Daya Optik di ONT dengan OPM",
        resultText: "Hasil OPM menunjukkan daya terima <strong class='text-yellow-700'>-31.5 dBm</strong>. Nilai ini berada di bawah batas normal standar GPON (-8 s/d -27 dBm). Menunjukkan adanya redaman yang tidak wajar di sepanjang kabel.",
        nextRequired: "VFL"
      },
      "VFL": {
        label: "Tembakkan Laser VFL (Laser Pen) dari OTB",
        resultText: "Laser merah VFL ditransmisikan. Di dekat kotak OTB pelanggan, terlihat adanya <strong>pancaran cahaya merah bocor menembus jaket pigtail</strong> yang tertekuk kencang karena terikat kabel ties terlalu keras.",
        nextRequired: "BENDING"
      },
      "BENDING": {
        label: "Rapikan Tekukan Kabel Pigtail (Bending)",
        resultText: "Teknisi memotong kabel ties yang mengikat terlalu kencang dan merapikan radius tekukan pigtail agar melingkar longgar sesuai batas bending radius aman.",
        nextRequired: "OPM"
      },
      "VERIFY": {
        label: "Selesaikan & Verifikasi Jaringan",
        resultText: "Kasus ditutup. Jaringan pulih normal. Kecepatan internet pelanggan kembali penuh tanpa RTO.",
        nextRequired: null
      }
    }
  },
  {
    id: "konektor-kotor",
    title: "Kasus 3: Sinyal Tidak Stabil Setelah Perbaikan Tiang",
    description: "Setelah adanya pemindahan kabel udara pada proyek tiang jalan raya, daya terima internet di kompleks perumahan menurun drastis menjadi -29.8 dBm. Dicurigai ada kotoran saat proses cabut-colok konektor di ODP.",
    correctSteps: ["OPM", "CLEAN_CONN", "OPM", "VERIFY"],
    stepsMetadata: {
      "OPM": {
        label: "Ukur Daya Optik di ONT dengan OPM",
        resultText: "Daya terima terukur <strong class='text-yellow-700'>-29.8 dBm</strong>. Sinyal lemah dan tidak stabil.",
        nextRequired: "CLEAN_CONN"
      },
      "CLEAN_CONN": {
        label: "Bersihkan Konektor di ODP dan Roset Pelanggan",
        resultText: "Teknisi melepas adapter patch cord, membersihkan ujung ferrule kaca konektor SC menggunakan <strong>Alkohol 99%</strong> dan tisu kering bebas debu (lint-free wipes).",
        nextRequired: "OPM"
      },
      "VERIFY": {
        label: "Selesaikan & Verifikasi Jaringan",
        resultText: "Kasus ditutup. Redaman berkurang, internet pelanggan kembali lancar.",
        nextRequired: null
      }
    }
  }
];

const genericActions = {
  "OPM": { label: "Ukur Daya Optik dengan OPM" },
  "OTDR": { label: "Jalankan Pengujian OTDR" },
  "VFL": { label: "Tembakkan Laser VFL (Laser Pen)" },
  "CLEAN_CONN": { label: "Bersihkan Konektor dengan Alkohol & Tisu" },
  "SPLICE": { label: "Lakukan Splicing Kabel Optik" },
  "BENDING": { label: "Rapikan Tekukan Kabel (Bending)" },
  "REPLACE_PATCH": { label: "Ganti Patch Cord Pelanggan" },
  "VERIFY": { label: "Selesaikan & Verifikasi" }
};

const repairVerifications = {
  "kabel-putus": {
    afterRepairs: ["SPLICE"],
    opmResultAfter: "Hasil OPM menunjukkan daya terima pasca-penyambungan adalah <strong class='text-green-700 font-bold'>-18.4 dBm (Normal)</strong>. Sinyal laser pulih sepenuhnya.",
    nextRequired: "VERIFY"
  },
  "redaman-tinggi": {
    afterRepairs: ["BENDING"],
    opmResultAfter: "Hasil OPM menunjukkan daya terima pasca-perbaikan tekukan adalah <strong class='text-green-700 font-bold'>-19.1 dBm (Normal)</strong>. Redaman berkurang signifikan.",
    nextRequired: "VERIFY"
  },
  "konektor-kotor": {
    afterRepairs: ["CLEAN_CONN"],
    opmResultAfter: "Hasil OPM menunjukkan daya terima pasca-pembersihan konektor adalah <strong class='text-green-700 font-bold'>-17.5 dBm (Normal)</strong>. Debu penyerap cahaya hilang.",
    nextRequired: "VERIFY"
  }
};

let simState = {
  currentCase: null,
  completedSteps: [],
  logs: [],
  repairsApplied: []
};

function initTroubleshootingSection() {
  renderTroubleshootingDashboard();
}

function renderTroubleshootingDashboard() {
  const container = document.getElementById('troubleshooting-content');
  if (!container) return;

  container.innerHTML = `
    <div class="flex flex-col gap-6 text-slate-800 animate-fade-in">
      <div>
        <h3 class="text-xl font-bold text-slate-800 flex items-center gap-2">
          <i class="fas fa-tools text-cyan-600"></i> Simulasi Troubleshooting Jaringan Fiber Optik
        </h3>
        <p class="text-slate-500 text-xs mt-1">Ujilah keahlian analisis Anda dalam mendiagnosis dan memperbaiki kerusakan fisik pada jaringan serat optik.</p>
      </div>

      <!-- Kasus List -->
      <div id="sim-case-selection" class="grid grid-cols-1 md:grid-cols-3 gap-4">
        ${troubleshootingCases.map(c => `
          <div class="bg-white p-5 rounded-2xl border border-slate-200 hover:border-slate-350 transition-all flex flex-col justify-between gap-4 shadow-sm">
            <div>
              <span class="text-[10px] px-2.5 py-0.5 bg-cyan-50 border border-cyan-100 text-cyan-700 rounded-full font-bold uppercase tracking-wider">Misi Praktik</span>
              <h4 class="text-sm font-bold text-slate-800 mt-3">${c.title}</h4>
              <p class="text-slate-500 text-[11px] mt-2 line-clamp-3">${c.description}</p>
            </div>
            <button 
              onclick="startTroubleshootingSession('${c.id}')"
              class="w-full py-2.5 bg-slate-100 hover:bg-cyan-650 hover:text-white text-slate-700 text-xs font-bold rounded-lg transition-all shadow-sm"
            >
              Mulai Simulasi
            </button>
          </div>
        `).join('')}
      </div>

      <!-- Area Simulasi Aktif -->
      <div id="sim-workspace" class="hidden grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Kolom Kiri: Deskripsi Kasus & Tindakan Teknisi -->
        <div class="lg:col-span-7 flex flex-col gap-4">
          <!-- Deskripsi Kasus Card -->
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h4 class="text-xs font-bold text-cyan-650 uppercase tracking-wider mb-2" id="sim-case-title"></h4>
            <p class="text-xs text-slate-650 leading-relaxed" id="sim-case-desc"></p>
          </div>

          <!-- Pilihan Aksi Panel -->
          <div class="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col gap-4 shadow-sm">
            <div>
              <h5 class="text-xs font-bold text-slate-800 uppercase tracking-wider">Pilih Tindakan Diagnosis / Perbaikan:</h5>
              <p class="text-[10px] text-slate-400 mt-0.5">Lakukan langkah penyelesaian secara logis. Lakukan pengukuran sebelum dan sesudah perbaikan!</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2" id="sim-actions-grid">
              <!-- Diisi dinamis -->
            </div>
          </div>
        </div>

        <!-- Kolom Kanan: Log Aktivitas & Status Jaringan -->
        <div class="lg:col-span-5 flex flex-col gap-4">
          <!-- Log Aktivitas -->
          <div class="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between min-h-[350px] shadow-sm">
            <div>
              <h5 class="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2 mb-3">Log Analisis Lapangan:</h5>
              <div id="sim-log-box" class="flex flex-col gap-2.5 max-h-[250px] overflow-y-auto pr-1 text-xs text-slate-500">
                <!-- Diisi dinamis -->
              </div>
            </div>

            <!-- Tombol Keluar -->
            <button 
              onclick="abortTroubleshooting()"
              class="w-full py-2 bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-650 text-xs font-bold rounded-lg border border-slate-200 mt-4 transition-all shadow-sm"
            >
              Batalkan Misi & Keluar
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function startTroubleshootingSession(caseId) {
  const selectedCase = troubleshootingCases.find(c => c.id === caseId);
  if (!selectedCase) return;

  document.getElementById('sim-case-selection').classList.add('hidden');
  document.getElementById('sim-workspace').classList.remove('hidden');

  document.getElementById('sim-case-title').innerText = selectedCase.title;
  document.getElementById('sim-case-desc').innerText = selectedCase.description;

  simState = {
    currentCase: selectedCase,
    completedSteps: [],
    logs: [
      { text: "Teknisi tiba di lokasi penugasan.", class: "text-slate-400" }
    ],
    repairsApplied: []
  };

  renderSimActions();
  renderSimLogs();
}

function renderSimActions() {
  const grid = document.getElementById('sim-actions-grid');
  if (!grid) return;

  grid.innerHTML = Object.keys(genericActions).map(actionKey => {
    const act = genericActions[actionKey];
    return `
      <button 
        onclick="executeSimAction('${actionKey}')"
        class="py-2.5 px-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-650 hover:text-slate-900 rounded-xl text-left text-xs font-bold flex items-center gap-2 group transition-all shadow-sm active:scale-[0.98]"
      >
        <span class="w-2 h-2 rounded-full bg-cyan-600 shadow-sm opacity-50 group-hover:opacity-100 transition-opacity"></span>
        <span>${act.label}</span>
      </button>
    `;
  }).join('');
}

function executeSimAction(actionKey) {
  const { currentCase, completedSteps, repairsApplied } = simState;
  const metadata = currentCase.stepsMetadata[actionKey];

  let logText = "";
  let logClass = "text-slate-600";

  if (actionKey === "OPM") {
    const verification = repairVerifications[currentCase.id];
    const isRepaired = verification.afterRepairs.every(r => repairsApplied.includes(r));

    if (isRepaired) {
      logText = verification.opmResultAfter;
      logClass = "text-green-700 font-bold bg-green-50 border border-green-100";
      
      if (completedSteps.includes(currentCase.correctSteps[0]) && completedSteps.includes(currentCase.correctSteps[2])) {
        if (!completedSteps.includes("OPM2")) {
          completedSteps.push("OPM");
        }
      }
    } else {
      logText = currentCase.stepsMetadata["OPM"].resultText;
      logClass = "text-yellow-750 font-bold bg-yellow-50 border border-yellow-100";
      if (completedSteps.length === 0) {
        completedSteps.push("OPM");
      }
    }
  } else if (actionKey === "VERIFY") {
    const requiredOrder = currentCase.correctSteps;
    const isCompletedCorrectly = verifyStepsMatch(completedSteps, requiredOrder, repairsApplied, currentCase.id);

    if (isCompletedCorrectly) {
      logText = metadata.resultText;
      logClass = "text-green-700 font-bold bg-green-50 border border-green-200";
      simState.logs.push({ text: logText, class: logClass });
      renderSimLogs();
      finishTroubleshootingCase(true);
      return;
    } else {
      logText = "<i class='fas fa-exclamation-triangle mr-1'></i> Gagal Verifikasi: Jaringan belum pulih sepenuhnya atau langkah investigasi diabaikan. Lakukan pengecekan secara sistematis!";
      logClass = "text-red-700 font-bold bg-red-50 border border-red-150";
    }
  } else {
    if (metadata) {
      logText = metadata.resultText;
      const index = completedSteps.length;
      const expectedAction = currentCase.correctSteps[index];
      
      if (actionKey === expectedAction) {
        completedSteps.push(actionKey);
      } else {
        completedSteps.push(actionKey);
      }

      if (actionKey === "SPLICE" || actionKey === "BENDING" || actionKey === "CLEAN_CONN") {
        repairsApplied.push(actionKey);
      }
    } else {
      if (actionKey === "REPLACE_PATCH") {
        logText = "Teknisi mengganti kabel patch cord kuning. Namun, tidak ada perubahan karena gangguan ada di bagian luar gedung.";
        logClass = "text-slate-500 bg-slate-50";
      } else if (actionKey === "SPLICE") {
        logText = "Teknisi berniat menyambung kabel, namun tidak tahu di titik mana yang putus karena belum diukur dengan OTDR.";
        logClass = "text-red-700 bg-red-50 border border-red-100";
      } else if (actionKey === "CLEAN_CONN") {
        logText = "Konektor dibersihkan. Namun, redaman masih tinggi karena penyebab utamanya adalah pembengkokan kabel pigtail.";
        logClass = "text-slate-500 bg-slate-50";
      } else {
        logText = `Tindakan '${genericActions[actionKey].label}' diterapkan, namun tidak membuahkan hasil untuk menyelesaikan akar masalah.`;
        logClass = "text-slate-400 bg-slate-50";
      }
      completedSteps.push(actionKey);
    }
  }

  simState.logs.push({ text: logText, class: logClass });
  renderSimLogs();
}

function verifyStepsMatch(userSteps, correctSteps, repairs, caseId) {
  if (caseId === "kabel-putus") {
    return repairs.includes("SPLICE") && userSteps.includes("OTDR") && userSteps.includes("OPM") && userSteps.filter(s => s === "OPM").length >= 2;
  } else if (caseId === "redaman-tinggi") {
    return repairs.includes("BENDING") && userSteps.includes("VFL") && userSteps.includes("OPM") && userSteps.filter(s => s === "OPM").length >= 2;
  } else if (caseId === "konektor-kotor") {
    return repairs.includes("CLEAN_CONN") && userSteps.includes("OPM") && userSteps.filter(s => s === "OPM").length >= 2;
  }
  return false;
}

function renderSimLogs() {
  const box = document.getElementById('sim-log-box');
  if (!box) return;

  box.innerHTML = simState.logs.map(log => `
    <div class="p-2.5 rounded border border-slate-100 leading-relaxed shadow-sm bg-white ${log.class}">
      ${log.text}
    </div>
  `).join('');

  box.scrollTop = box.scrollHeight;
}

function abortTroubleshooting() {
  if (confirm("Apakah Anda yakin ingin membatalkan misi troubleshooting ini?")) {
    document.getElementById('sim-workspace').classList.add('hidden');
    document.getElementById('sim-case-selection').classList.remove('hidden');
  }
}

async function finishTroubleshootingCase(isSuccess) {
  const grid = document.getElementById('sim-actions-grid');
  if (grid) {
    grid.innerHTML = `
      <div class="col-span-2 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-center font-bold text-xs shadow-sm">
        <i class="fas fa-check-circle mr-1"></i> Selamat! Masalah Berhasil Teratasi.
      </div>
    `;
  }

  const userStr = localStorage.getItem('user');
  if (userStr) {
    try {
      const userObj = JSON.parse(userStr);
      await fetch('/api/troubleshooting/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: userObj.username,
          case_id: simState.currentCase.id,
          is_success: isSuccess ? 1 : 0
        })
      });
      if (typeof fetchDashboardStats === 'function') {
        fetchDashboardStats();
      }
    } catch (e) {
      console.error("Gagal menyimpan log troubleshooting ke database:", e);
    }
  }

  const box = document.getElementById('sim-log-box').parentNode;
  const finishBtn = document.createElement('button');
  finishBtn.className = "w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg text-xs mt-4 transition-all shadow-md active:scale-95";
  finishBtn.innerText = "Selesaikan Misi & Kembali";
  finishBtn.onclick = () => {
    document.getElementById('sim-workspace').classList.add('hidden');
    document.getElementById('sim-case-selection').classList.remove('hidden');
  };
  box.appendChild(finishBtn);
}
