// State Global Aplikasi
let appState = {
  currentUser: { username: 'Siswa Tamu', class_name: 'Umum' },
  activeView: 'dashboard',
  materials: (typeof materialsData !== 'undefined') ? materialsData : []
};

// Hubungkan Event Listener saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
  // Pastikan data materi dimuat
  if ((!appState.materials || appState.materials.length === 0) && typeof materialsData !== 'undefined') {
    appState.materials = materialsData;
  }
  
  checkSession();
  setupEventListeners();
  
  // Tangani responsive sidebar untuk mobile
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
    });
  }
});

// Cek Sesi Pengguna: Siap pakai langsung tanpa popup login
function checkSession() {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    try {
      appState.currentUser = JSON.parse(userStr);
    } catch (e) {
      appState.currentUser = { username: 'Siswa Tamu', class_name: 'Umum' };
      localStorage.setItem('user', JSON.stringify(appState.currentUser));
    }
  } else {
    localStorage.setItem('user', JSON.stringify(appState.currentUser));
  }

  switchView('dashboard');
}

// Setup Event Listeners Navigasi
function setupEventListeners() {
  const navLinks = document.querySelectorAll('[data-view]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = link.getAttribute('data-view');
      switchView(view);
      
      const sidebar = document.getElementById('sidebar');
      if (window.innerWidth < 1024 && sidebar) {
        sidebar.classList.add('-translate-x-full');
      }
    });
  });
}

// Ganti View Halaman (SPA Router)
function switchView(viewName) {
  appState.activeView = viewName;

  const views = [
    'dashboard', 'materi', 'kalkulator-redaman', 
    'kalkulator-power', 'warna-core', 'quiz', 
    'simulasi-troubleshooting', 'simulasi-otdr', 'profil'
  ];
  
  views.forEach(v => {
    const el = document.getElementById(`${v}-view`);
    if (el) el.classList.add('hidden');
  });

  const activeEl = document.getElementById(`${viewName}-view`);
  if (activeEl) activeEl.classList.remove('hidden');

  const navLinks = document.querySelectorAll('[data-view]');
  navLinks.forEach(link => {
    const v = link.getAttribute('data-view');
    if (v === viewName) {
      link.className = "flex items-center gap-4 px-4 py-3 bg-cyan-50 border-l-4 border-cyan-500 text-cyan-650 rounded-r-xl font-bold text-sm transition-all shadow-[inset_4px_0_15px_rgba(6,182,212,0.02)]";
    } else {
      link.className = "flex items-center gap-4 px-4 py-3 border-l-4 border-transparent text-slate-650 hover:text-slate-900 hover:bg-slate-50 rounded-r-xl font-medium text-sm transition-all";
    }
  });

  triggerViewInit(viewName);
}

function triggerViewInit(viewName) {
  if (viewName === 'dashboard') {
    fetchDashboardStats();
  } else if (viewName === 'materi') {
    renderMaterialsList();
  } else if (viewName === 'warna-core') {
    if (typeof initCoreColorsSection === 'function') initCoreColorsSection();
  } else if (viewName === 'quiz') {
    if (typeof initQuizSection === 'function') initQuizSection();
  } else if (viewName === 'simulasi-troubleshooting') {
    if (typeof initTroubleshootingSection === 'function') initTroubleshootingSection();
  } else if (viewName === 'simulasi-otdr') {
    if (typeof initOtdrSection === 'function') initOtdrSection();
  }
}

async function fetchDashboardStats() {
  if (!appState.currentUser) return;
  
  try {
    const res = await fetch(`/api/stats?username=${encodeURIComponent(appState.currentUser.username)}`);
    if (res.ok) {
      const stats = await res.json();
      renderDashboardStats(stats);
      return;
    }
  } catch (err) {
    console.warn("Gagal memuat statistik online, menggunakan penyimpanan lokal");
  }

  // Fallback lokal jika berjalan di hosting statis
  const localStats = getLocalFallbackStats();
  renderDashboardStats(localStats);
}

function getLocalFallbackStats() {
  const completed = JSON.parse(localStorage.getItem('completed_materials') || '[]');
  const quizzes = JSON.parse(localStorage.getItem('recent_quizzes') || '[]');
  return {
    completedMaterials: completed,
    quiz: { attempts: quizzes.length, averageScore: quizzes.length > 0 ? Math.round(quizzes.reduce((a, b) => a + b.score, 0) / quizzes.length) : 0 },
    troubleshooting: { attempts: 0, success: 0, successRate: 0 },
    recentQuizzes: quizzes
  };
}

function renderDashboardStats(stats) {
  const progressCount = (stats.completedMaterials && stats.completedMaterials.length) || 0;
  const progressPercent = Math.round((progressCount / 10) * 100);
  
  const elProgressCount = document.getElementById('stat-materials-count');
  const elProgressPercent = document.getElementById('stat-materials-percent');
  const elProgressBar = document.getElementById('stat-materials-bar');
  
  if (elProgressCount) elProgressCount.innerText = `${progressCount}/10`;
  if (elProgressPercent) elProgressPercent.innerText = `${progressPercent}%`;
  if (elProgressBar) elProgressBar.style.width = `${progressPercent}%`;

  const elAvgScore = document.getElementById('stat-quiz-avg');
  const elQuizAttempts = document.getElementById('stat-quiz-attempts');
  if (elAvgScore) elAvgScore.innerText = `${stats.quiz ? (stats.quiz.averageScore || 0) : 0}%`;
  if (elQuizAttempts) elQuizAttempts.innerText = `${stats.quiz ? stats.quiz.attempts : 0}x Percobaan`;

  const elTroubleRate = document.getElementById('stat-troubleshoot-rate');
  const elTroubleAttempts = document.getElementById('stat-troubleshoot-count');
  if (elTroubleRate) elTroubleRate.innerText = `${stats.troubleshooting ? stats.troubleshooting.successRate : 0}%`;
  if (elTroubleAttempts) elTroubleAttempts.innerText = `${stats.troubleshooting ? stats.troubleshooting.success : 0}/${stats.troubleshooting ? stats.troubleshooting.attempts : 0} Sukses`;

  const tbody = document.getElementById('dashboard-recent-quizzes');
  if (tbody) {
    if (!stats.recentQuizzes || stats.recentQuizzes.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="4" class="p-4 text-center text-slate-400 text-xs italic bg-white">Belum ada evaluasi quiz yang dikerjakan. Silakan pilih menu Quiz!</td>
        </tr>
      `;
    } else {
      tbody.innerHTML = stats.recentQuizzes.map(q => {
        const date = new Date(q.completed_at || Date.now()).toLocaleDateString('id-ID', {
          day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
        });
        
        let scoreColor = "text-cyan-600 font-bold";
        if (q.score < 60) scoreColor = "text-red-500 font-bold";
        else if (q.score >= 80) scoreColor = "text-green-600 font-bold";

        return `
          <tr class="border-b border-slate-100 hover:bg-slate-50 text-xs text-slate-600">
            <td class="p-3 font-semibold text-slate-800">${q.category}</td>
            <td class="p-3 font-mono">${date}</td>
            <td class="p-3">${q.correct_answers}/${q.total_questions} Soal</td>
            <td class="p-3 ${scoreColor}">${q.score}</td>
          </tr>
        `;
      }).join('');
    }
  }
}

// RENDER MATERI PEMBELAJARAN
function renderMaterialsList() {
  const container = document.getElementById('materi-content');
  if (!container) return;

  // Pastikan data selalu ada
  if ((!appState.materials || appState.materials.length === 0) && typeof materialsData !== 'undefined') {
    appState.materials = materialsData;
  }

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6" id="materials-layout-container">
      <!-- Daftar Judul Kategori (Sidebar Kiri) -->
      <div class="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-200 flex flex-col gap-3 max-h-[600px] overflow-y-auto pr-2 shadow-sm">
        <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-100 pb-2 flex justify-between items-center">
          <span>Daftar Modul Belajar</span>
          <span class="text-[10px] text-cyan-600 font-semibold" id="materials-sidebar-progress">0/10 Selesai</span>
        </h4>
        <div class="flex flex-col gap-1.5" id="materials-sidebar-list">
          <!-- Diisi dinamis -->
        </div>
      </div>

      <!-- Detail Pembacaan Materi (Kanan) -->
      <div class="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-200 min-h-[500px] flex flex-col justify-between shadow-sm text-slate-700" id="materials-viewer-panel">
        <div class="flex flex-col justify-center items-center h-full text-slate-400 gap-3 my-20">
          <i class="fas fa-book-open text-4xl text-slate-300"></i>
          <p class="text-sm">Pilih salah satu modul di sebelah kiri untuk mulai belajar.</p>
        </div>
      </div>
    </div>
  `;

  renderMaterialsSidebar();

  // Buka otomatis materi pertama jika belum ada materi aktif
  if (appState.materials && appState.materials.length > 0) {
    openMaterialDetail(appState.materials[0].id);
  }
}

async function renderMaterialsSidebar() {
  const sidebarList = document.getElementById('materials-sidebar-list');
  if (!sidebarList) return;

  // Pastikan data terisi
  if ((!appState.materials || appState.materials.length === 0) && typeof materialsData !== 'undefined') {
    appState.materials = materialsData;
  }

  let completedList = JSON.parse(localStorage.getItem('completed_materials') || '[]');

  if (appState.currentUser) {
    try {
      const res = await fetch(`/api/stats?username=${encodeURIComponent(appState.currentUser.username)}`);
      if (res.ok) {
        const stats = await res.json();
        if (stats.completedMaterials && stats.completedMaterials.length > 0) {
          completedList = stats.completedMaterials;
        }
      }
    } catch (e) {
      console.warn("Menggunakan status pembelajaran lokal");
    }
  }

  const progressProgress = document.getElementById('materials-sidebar-progress');
  if (progressProgress) {
    progressProgress.innerText = `${completedList.length}/10 Selesai`;
  }

  sidebarList.innerHTML = appState.materials.map(m => {
    const isCompleted = completedList.includes(m.id);
    const badge = isCompleted 
      ? '<span class="text-[10px] text-green-600 flex items-center gap-1 font-semibold"><i class="fas fa-check-circle"></i> Selesai</span>' 
      : '<span class="text-[10px] text-slate-400">Belum dibaca</span>';

    return `
      <button 
        onclick="openMaterialDetail('${m.id}')"
        id="mat-btn-${m.id}"
        class="w-full text-left p-3 rounded-xl border border-slate-100 hover:border-slate-250 bg-slate-50/50 hover:bg-white transition-all flex justify-between items-center group shadow-xs"
      >
        <div class="flex flex-col gap-0.5">
          <span class="text-[9px] uppercase tracking-wider text-slate-450 font-bold group-hover:text-cyan-600 transition-colors">${m.category}</span>
          <span class="text-xs font-bold text-slate-700 group-hover:text-slate-900 transition-colors">${m.title}</span>
        </div>
        ${badge}
      </button>
    `;
  }).join('');
}

let activeMaterial = null;
let matQuizState = {
  answers: {},
  submitted: false
};

function openMaterialDetail(id) {
  if ((!appState.materials || appState.materials.length === 0) && typeof materialsData !== 'undefined') {
    appState.materials = materialsData;
  }

  const material = appState.materials.find(m => m.id === id);
  if (!material) return;

  activeMaterial = material;
  matQuizState = { answers: {}, submitted: false };

  appState.materials.forEach(m => {
    const btn = document.getElementById(`mat-btn-${m.id}`);
    if (btn) {
      if (m.id === id) {
        btn.className = "w-full text-left p-3 rounded-xl border border-cyan-400 bg-cyan-50/40 transition-all flex justify-between items-center group shadow-xs";
      } else {
        btn.className = "w-full text-left p-3 rounded-xl border border-slate-100 hover:border-slate-250 bg-slate-50/50 hover:bg-white transition-all flex justify-between items-center group shadow-xs";
      }
    }
  });

  const viewer = document.getElementById('materials-viewer-panel');
  if (!viewer) return;

  viewer.innerHTML = `
    <div class="flex flex-col gap-6 text-slate-800">
      <!-- Header Materi -->
      <div class="border-b border-slate-100 pb-4">
        <span class="text-xs uppercase font-bold text-cyan-600 tracking-wider">${material.category}</span>
        <h3 class="text-2xl font-black text-slate-800 mt-1">${material.title}</h3>
      </div>

      <!-- Isi Pembahasan Utama -->
      <div class="text-slate-650 text-xs leading-relaxed space-y-4 prose font-normal max-w-none">
        ${material.content}
      </div>

      <!-- Contoh Praktis -->
      <div class="p-5 rounded-2xl border border-cyan-100 bg-cyan-50/15 flex flex-col gap-3">
        <h4 class="text-xs font-bold text-cyan-700 uppercase tracking-wider flex items-center gap-1.5">
          <i class="fas fa-lightbulb"></i> Contoh & Aplikasi Lapangan
        </h4>
        <ul class="list-disc pl-5 text-xs text-slate-650 space-y-1.5">
          ${material.examples.map(ex => `<li>${ex}</li>`).join('')}
        </ul>
      </div>

      <!-- Ringkasan Materi -->
      <div class="p-5 rounded-2xl border border-slate-150 bg-slate-50/50 flex flex-col gap-2">
        <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider">Ringkasan Modul</h4>
        <p class="text-xs text-slate-500 italic">${material.summary}</p>
      </div>

      <!-- Evaluasi Quiz Singkat -->
      <div class="border-t border-slate-100 pt-6 flex flex-col gap-4">
        <div>
          <h4 class="text-sm font-bold text-slate-800 flex items-center gap-2">
            <i class="fas fa-clipboard-list text-cyan-600"></i> Uji Pemahaman: Quiz Singkat (3 Soal)
          </h4>
          <p class="text-slate-400 text-[10px] mt-0.5">Selesaikan kuis di bawah ini dengan benar untuk menandai modul ini sebagai selesai.</p>
        </div>

        <div class="flex flex-col gap-6" id="mat-quiz-questions-container">
          ${material.quiz.map((q, qIdx) => `
            <div class="p-4 bg-slate-50/80 rounded-xl border border-slate-100 flex flex-col gap-3">
              <span class="text-xs font-bold text-slate-700">${qIdx + 1}. ${q.question}</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                ${q.options.map((opt, optIdx) => `
                  <button 
                    onclick="selectMatQuizOption(${qIdx}, ${optIdx})"
                    id="mat-q-${qIdx}-opt-${optIdx}"
                    class="py-2.5 px-4 bg-white hover:bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 font-semibold rounded-lg transition-all"
                  >
                    ${opt}
                  </button>
                `).join('')}
              </div>
              <div id="mat-q-${qIdx}-feedback" class="hidden text-[10px] p-2 bg-slate-100 rounded border mt-2"></div>
            </div>
          `).join('')}
        </div>

        <button 
          onclick="submitMatQuiz()"
          id="btn-submit-mat-quiz"
          class="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl text-xs transition-all active:scale-95 shadow-sm"
        >
          Kirim Sinyal Jawaban
        </button>
      </div>
    </div>
  `;
}

function selectMatQuizOption(qIdx, optIdx) {
  if (matQuizState.submitted) return;

  matQuizState.answers[qIdx] = optIdx;

  activeMaterial.quiz[qIdx].options.forEach((_, idx) => {
    const btn = document.getElementById(`mat-q-${qIdx}-opt-${idx}`);
    if (btn) {
      btn.className = "py-2.5 px-4 bg-white border border-slate-200 text-left text-xs text-slate-600 font-semibold rounded-lg transition-all";
    }
  });

  const selectedBtn = document.getElementById(`mat-q-${qIdx}-opt-${optIdx}`);
  if (selectedBtn) {
    selectedBtn.className = "py-2.5 px-4 bg-cyan-50 border border-cyan-400 text-left text-xs text-cyan-700 font-bold rounded-lg transition-all shadow-sm";
  }
}

async function submitMatQuiz() {
  if (matQuizState.submitted) return;

  const totalQ = activeMaterial.quiz.length;
  const answeredCount = Object.keys(matQuizState.answers).length;

  if (answeredCount < totalQ) {
    alert("Harap jawab semua pertanyaan quiz terlebih dahulu!");
    return;
  }

  matQuizState.submitted = true;
  document.getElementById('btn-submit-mat-quiz').classList.add('hidden');

  let allCorrect = true;

  activeMaterial.quiz.forEach((q, qIdx) => {
    const selected = matQuizState.answers[qIdx];
    const isCorrect = (selected === q.answer);
    
    if (!isCorrect) {
      allCorrect = false;
    }

    const feedbackBox = document.getElementById(`mat-q-${qIdx}-feedback`);
    if (feedbackBox) {
      feedbackBox.classList.remove('hidden');
      if (isCorrect) {
        feedbackBox.className = "text-[10px] p-3 bg-green-50 text-green-700 border border-green-200 rounded-lg mt-2 shadow-sm";
        feedbackBox.innerHTML = `<strong><i class="fas fa-check-circle mr-1"></i>Benar!</strong> ${q.explanation}`;
      } else {
        feedbackBox.className = "text-[10px] p-3 bg-red-50 text-red-700 border border-red-200 rounded-lg mt-2 shadow-sm";
        feedbackBox.innerHTML = `<strong><i class="fas fa-times-circle mr-1"></i>Salah!</strong> Jawaban yang benar adalah: <em>${q.options[q.answer]}</em>.<br><span class="text-slate-500 mt-1 block">${q.explanation}</span>`;
      }
    }

    q.options.forEach((_, idx) => {
      const btn = document.getElementById(`mat-q-${qIdx}-opt-${idx}`);
      if (btn) {
        if (idx === q.answer) {
          btn.className = "py-2.5 px-4 bg-green-50 border border-green-400 text-left text-xs text-green-700 font-bold rounded-lg transition-all cursor-not-allowed shadow-sm";
        } else if (idx === selected) {
          btn.className = "py-2.5 px-4 bg-red-50 border border-red-400 text-left text-xs text-red-700 font-semibold rounded-lg transition-all cursor-not-allowed shadow-sm";
        } else {
          btn.className = "py-2.5 px-4 bg-slate-50 border border-slate-100 text-left text-xs text-slate-400 rounded-lg transition-all cursor-not-allowed";
        }
      }
    });
  });

  if (allCorrect) {
    // Simpan progres ke localStorage
    const saved = JSON.parse(localStorage.getItem('completed_materials') || '[]');
    if (!saved.includes(activeMaterial.id)) {
      saved.push(activeMaterial.id);
      localStorage.setItem('completed_materials', JSON.stringify(saved));
    }

    if (appState.currentUser) {
      try {
        await fetch('/api/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: appState.currentUser.username,
            material_id: activeMaterial.id
          })
        });
      } catch (err) {
        console.warn("Progres disimpan di lokal browser");
      }
    }

    const viewer = document.getElementById('materials-viewer-panel');
    const alertBox = document.createElement('div');
    alertBox.className = "p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-xs font-bold text-center mt-4 animate-fade-in shadow-sm";
    alertBox.innerHTML = `<i class="fas fa-check-circle mr-1"></i> Hebat! Anda menjawab semua quiz dengan benar. Modul '${activeMaterial.title}' ditandai selesai!`;
    viewer.appendChild(alertBox);

    renderMaterialsSidebar();
  } else {
    const viewer = document.getElementById('materials-viewer-panel');
    const retryBtn = document.createElement('button');
    retryBtn.className = "w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs mt-4 border border-slate-200 transition-all shadow-sm";
    retryBtn.innerText = "Ulangi Kuis Modul";
    retryBtn.onclick = () => {
      openMaterialDetail(activeMaterial.id);
    };
    viewer.appendChild(retryBtn);
  }
}

// HANDLE CALCULATOR FORM SUBMISSIONS
function setupCalculatorInteractivity() {
  const formLoss = document.getElementById('calc-attenuation-form');
  if (formLoss) {
    formLoss.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const inputs = {
        length: parseFloat(document.getElementById('loss-cable-length').value) || 0,
        lossPerKm: parseFloat(document.getElementById('loss-cable-coeff').value) || 0,
        splices: parseInt(document.getElementById('loss-splice-count').value) || 0,
        lossPerSplice: parseFloat(document.getElementById('loss-splice-coeff').value) || 0,
        connectors: parseInt(document.getElementById('loss-conn-count').value) || 0,
        lossPerConnector: parseFloat(document.getElementById('loss-conn-coeff').value) || 0
      };

      const result = calculateAttenuation(inputs);

      document.getElementById('loss-out-cable').innerText = `${result.cableLoss.toFixed(3)} dB`;
      document.getElementById('loss-out-splice').innerText = `${result.spliceLoss.toFixed(3)} dB`;
      document.getElementById('loss-out-conn').innerText = `${result.connectorLoss.toFixed(3)} dB`;
      document.getElementById('loss-out-total').innerText = `${result.totalLoss.toFixed(3)} dB`;
      
      const elConclusion = document.getElementById('loss-out-conclusion');
      elConclusion.innerHTML = result.conclusion;
      elConclusion.parentNode.classList.remove('hidden');

      const stepsContainer = document.getElementById('loss-calculation-steps');
      stepsContainer.innerHTML = result.steps.map(step => `
        <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs leading-relaxed text-slate-700">
          ${step}
        </div>
      `).join('');
      stepsContainer.parentNode.classList.remove('hidden');
    });
  }

  const formPower = document.getElementById('calc-power-form');
  if (formPower) {
    formPower.addEventListener('submit', (e) => {
      e.preventDefault();

      const txPower = parseFloat(document.getElementById('pb-tx-power').value) || 0;
      const totalLoss = parseFloat(document.getElementById('pb-total-loss').value) || 0;

      const result = calculatePowerBudget(txPower, totalLoss);

      document.getElementById('pb-out-rx').innerText = `${result.rxPower.toFixed(2)} dBm`;
      
      const elStatus = document.getElementById('pb-out-status');
      elStatus.innerText = result.status;
      elStatus.className = `p-3 rounded-xl font-bold text-center text-xs ${result.statusClass}`;

      document.getElementById('pb-out-desc').innerHTML = result.description;

      document.getElementById('pb-results-container').classList.remove('hidden');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupCalculatorInteractivity();
});
