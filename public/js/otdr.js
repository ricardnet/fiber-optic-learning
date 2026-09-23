function initOtdrSection() {
  renderOtdrLayout();
}

function renderOtdrLayout() {
  const container = document.getElementById('otdr-content');
  if (!container) return;

  container.innerHTML = `
    <div class="flex flex-col gap-6 text-slate-800 animate-fade-in">
      <div>
        <h3 class="text-xl font-bold text-slate-800 flex items-center gap-2">
          <i class="fas fa-chart-line text-cyan-600"></i> Simulator Grafis OTDR (Optical Time Domain Reflectometer)
        </h3>
        <p class="text-slate-500 text-xs mt-1">
          Masukkan parameter panjang kabel dan jarak gangguan untuk melihat simulasi visual dan grafik pelemahan daya (trace graph) pada instrumen OTDR.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Panel Kontrol Input -->
        <div class="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 flex flex-col gap-4 shadow-sm">
          <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2 mb-2">Parameter Kabel</h4>
          
          <div>
            <label class="block text-[10px] text-slate-500 font-bold mb-1 uppercase tracking-wider">Panjang Kabel Total (Km):</label>
            <input 
              type="number" 
              id="otdr-length-input" 
              value="10" 
              min="1" 
              max="50" 
              step="1"
              class="w-full bg-slate-50 border border-slate-200 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-xs text-slate-800 font-mono transition-colors outline-none"
            >
          </div>

          <div>
            <label class="block text-[10px] text-slate-500 font-bold mb-1 uppercase tracking-wider">Jarak Gangguan/Putus (Km):</label>
            <input 
              type="number" 
              id="otdr-fault-input" 
              value="4.5" 
              min="0.1" 
              max="50" 
              step="0.1"
              class="w-full bg-slate-50 border border-slate-200 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-xs text-slate-800 font-mono transition-colors outline-none"
            >
            <p class="text-[10px] text-slate-400 mt-1">Harus kurang dari atau sama dengan panjang kabel total.</p>
          </div>

          <button 
            onclick="runOtdrSimulation()"
            class="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl text-xs transition-all active:scale-95 shadow-sm mt-2"
          >
            Simulasikan Pulsa Cahaya
          </button>

          <div class="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-150 text-xs text-slate-500 space-y-2">
            <h5 class="font-bold text-slate-700">Penjelasan Grafik OTDR:</h5>
            <p>1. <strong class="text-cyan-700">Puncak Awal (0 Km):</strong> Refleksi Fresnel pada konektor pemancar (launch connector).</p>
            <p>2. <strong class="text-slate-650">Kemiringan (Slope):</strong> Redaman alami serat kaca (~0.2 dB/Km).</p>
            <p>3. <strong class="text-red-650">Puncak/Drop Gangguan:</strong> Terjadi penurunan daya ekstrem di lokasi patah/putus kabel.</p>
            <p>4. <strong class="text-slate-400">Noise Floor:</strong> Garis acak bergerigi menunjukkan batas sensitivitas alat ukur.</p>
          </div>
        </div>

        <!-- Visualisasi Grafis -->
        <div class="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-200 flex flex-col gap-6 shadow-sm">
          <!-- Skema Fisik Kabel -->
          <div>
            <h5 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">1. Skema Fisik Bentangan Serat Optik</h5>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-150 flex flex-col items-center relative overflow-hidden min-h-[90px] justify-center shadow-inner">
              <canvas id="otdr-cable-canvas" width="650" height="60" class="w-full max-h-[60px]"></canvas>
            </div>
          </div>

          <!-- Grafik OTDR Trace -->
          <div>
            <h5 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">2. Grafik OTDR Trace (Power dB vs Jarak Km)</h5>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-150 flex justify-center items-center shadow-inner">
              <canvas id="otdr-chart-canvas" width="650" height="260" class="w-full max-h-[260px] bg-white rounded-lg"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  runOtdrSimulation();
}

function runOtdrSimulation() {
  const lengthInput = document.getElementById('otdr-length-input');
  const faultInput = document.getElementById('otdr-fault-input');
  if (!lengthInput || !faultInput) return;

  let totalLength = parseFloat(lengthInput.value) || 10;
  let faultDistance = parseFloat(faultInput.value) || 4.5;

  if (totalLength < 1) totalLength = 1;
  if (totalLength > 50) totalLength = 50;
  if (faultDistance > totalLength) {
    faultDistance = totalLength;
    faultInput.value = totalLength;
  }
  if (faultDistance < 0.1) {
    faultDistance = 0.1;
    faultInput.value = 0.1;
  }

  drawOtdrCableLayout(totalLength, faultDistance);
  drawOtdrTraceGraph(totalLength, faultDistance);
}

function drawOtdrCableLayout(totalLength, faultDistance) {
  const canvas = document.getElementById('otdr-cable-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(0, 0, w, h);

  const startX = 40;
  const endX = w - 40;
  const lengthX = endX - startX;
  const lineY = h / 2;

  const scale = lengthX / totalLength;

  ctx.beginPath();
  ctx.moveTo(startX, lineY);
  ctx.lineTo(startX + (faultDistance * scale), lineY);
  ctx.strokeStyle = '#0891b2'; // Cyan
  ctx.lineWidth = 4;
  ctx.shadowColor = '#0891b2';
  ctx.shadowBlur = 4;
  ctx.stroke();
  ctx.shadowBlur = 0;

  if (faultDistance < totalLength) {
    ctx.beginPath();
    ctx.moveTo(startX + (faultDistance * scale), lineY);
    ctx.lineTo(endX, lineY);
    ctx.strokeStyle = '#cbd5e1'; // Light grey
    ctx.lineWidth = 4;
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.arc(startX, lineY, 8, 0, 2 * Math.PI);
  ctx.fillStyle = '#2563eb';
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#64748b';
  ctx.font = 'bold 9px sans-serif';
  ctx.fillText('OLT (0 Km)', startX - 25, lineY - 14);

  ctx.beginPath();
  ctx.arc(endX, lineY, 5, 0, 2 * Math.PI);
  ctx.fillStyle = '#94a3b8';
  ctx.fill();
  
  ctx.fillStyle = '#64748b';
  ctx.font = '9px sans-serif';
  ctx.fillText(`${totalLength} Km`, endX - 12, lineY - 12);

  const faultX = startX + (faultDistance * scale);
  
  ctx.beginPath();
  ctx.arc(faultX, lineY, 6, 0, 2 * Math.PI);
  ctx.fillStyle = '#dc2626';
  ctx.fill();
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(faultX - 4, lineY - 4);
  ctx.lineTo(faultX + 4, lineY + 4);
  ctx.moveTo(faultX + 4, lineY - 4);
  ctx.lineTo(faultX - 4, lineY + 4);
  ctx.stroke();

  ctx.fillStyle = '#ef4444';
  ctx.font = 'bold 10px sans-serif';
  ctx.fillText(`Gangguan (${faultDistance} Km)`, faultX - 35, lineY + 20);
}

function drawOtdrTraceGraph(totalLength, faultDistance) {
  const canvas = document.getElementById('otdr-chart-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, w, h);

  // Grid garis bantu latar belakang (Soft Grey)
  ctx.strokeStyle = '#f1f5f9';
  ctx.lineWidth = 1;
  const gridSpacing = 30;

  for (let x = 0; x < w; x += gridSpacing) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += gridSpacing) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  const paddingLeft = 50;
  const paddingRight = 40;
  const paddingTop = 30;
  const paddingBottom = 40;

  const graphWidth = w - paddingLeft - paddingRight;
  const graphHeight = h - paddingTop - paddingBottom;

  const maxDb = 5;
  const minDb = -55;
  const dbRange = maxDb - minDb;

  function getX(km) {
    return paddingLeft + (km / totalLength) * graphWidth;
  }

  function getY(db) {
    const ratio = (db - minDb) / dbRange;
    return h - paddingBottom - ratio * graphHeight;
  }

  // Sumbu utama X dan Y (Slate)
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(paddingLeft, paddingTop);
  ctx.lineTo(paddingLeft, h - paddingBottom);
  ctx.lineTo(w - paddingRight, h - paddingBottom);
  ctx.stroke();

  ctx.fillStyle = '#64748b';
  ctx.font = '9px monospace';
  ctx.textAlign = 'right';
  
  const yLabels = [0, -10, -20, -30, -40, -50];
  yLabels.forEach(db => {
    ctx.fillText(`${db} dB`, paddingLeft - 8, getY(db) + 3);
    ctx.beginPath();
    ctx.moveTo(paddingLeft - 4, getY(db));
    ctx.lineTo(paddingLeft, getY(db));
    ctx.strokeStyle = '#cbd5e1';
    ctx.stroke();
  });

  ctx.textAlign = 'center';
  const numSteps = 5;
  for (let i = 0; i <= numSteps; i++) {
    const km = (i / numSteps) * totalLength;
    ctx.fillText(`${km.toFixed(1)} Km`, getX(km), h - paddingBottom + 15);
    ctx.beginPath();
    ctx.moveTo(getX(km), h - paddingBottom);
    ctx.lineTo(getX(km), h - paddingBottom + 4);
    ctx.strokeStyle = '#cbd5e1';
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.strokeStyle = '#0284c7'; // Darker Blue for light theme trace line
  ctx.lineWidth = 2.5;

  ctx.moveTo(getX(0), getY(-30));
  ctx.lineTo(getX(0), getY(2));
  ctx.lineTo(getX(0.1), getY(-3));

  const attenuationCoefficient = 0.25; 
  let currentDb = -3;

  const numPoints = 200;
  const faultPtIndex = Math.floor((faultDistance / totalLength) * numPoints);

  let curX = 0.1;
  for (let i = 1; i <= faultPtIndex; i++) {
    const km = (i / numPoints) * totalLength;
    currentDb = -3 - (km * attenuationCoefficient);
    ctx.lineTo(getX(km), getY(currentDb));
    curX = km;
  }

  if (faultDistance < totalLength) {
    ctx.lineTo(getX(faultDistance), getY(currentDb));
    const reflectionPeak = currentDb + 10; 
    ctx.lineTo(getX(faultDistance), getY(reflectionPeak));
    
    currentDb = -50; 
    ctx.lineTo(getX(faultDistance + 0.05), getY(currentDb));
    curX = faultDistance + 0.05;
  } else {
    ctx.lineTo(getX(totalLength), getY(currentDb));
    const reflectionPeak = currentDb + 8;
    ctx.lineTo(getX(totalLength), getY(reflectionPeak));
    ctx.lineTo(getX(totalLength + 0.02), getY(-50));
    currentDb = -50;
    curX = totalLength + 0.02;
  }

  while (curX <= totalLength) {
    const noiseDb = -50 + (Math.random() * 2 - 1); 
    ctx.lineTo(getX(curX), getY(noiseDb));
    curX += totalLength / 100;
  }

  ctx.stroke();

  if (faultDistance < totalLength) {
    const fx = getX(faultDistance);
    
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = '#ef4444'; // Red dashed
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(fx, paddingTop);
    ctx.lineTo(fx, h - paddingBottom);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = 'rgba(239, 68, 68, 0.08)';
    ctx.fillRect(fx - 40, paddingTop + 10, 80, 18);
    ctx.strokeStyle = '#f87171';
    ctx.strokeRect(fx - 40, paddingTop + 10, 80, 18);

    ctx.fillStyle = '#dc2626';
    ctx.font = 'bold 9px monospace';
    ctx.fillText(`${faultDistance} Km`, fx, paddingTop + 22);
  }
}
