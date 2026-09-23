// Kalkulator Redaman Fiber Optik
function calculateAttenuation(inputs) {
  const { length, lossPerKm, splices, lossPerSplice, connectors, lossPerConnector } = inputs;

  const cableLoss = length * lossPerKm;
  const spliceLoss = splices * lossPerSplice;
  const connectorLoss = connectors * lossPerConnector;
  const totalLoss = cableLoss + spliceLoss + connectorLoss;

  const steps = [
    `<strong>Langkah 1 (Redaman Kabel):</strong> Panjang Kabel × Redaman per Km<br>
     <span class="font-mono text-cyan-700 font-bold">${length} Km × ${lossPerKm} dB/Km = ${cableLoss.toFixed(3)} dB</span>`,
    
    `<strong>Langkah 2 (Redaman Sambungan):</strong> Jumlah Sambungan × Redaman per Sambungan<br>
     <span class="font-mono text-cyan-700 font-bold">${splices} × ${lossPerSplice} dB = ${spliceLoss.toFixed(3)} dB</span>`,
    
    `<strong>Langkah 3 (Redaman Connector):</strong> Jumlah Connector × Redaman per Connector<br>
     <span class="font-mono text-cyan-700 font-bold">${connectors} × ${lossPerConnector} dB = ${connectorLoss.toFixed(3)} dB</span>`,
    
    `<strong>Langkah 4 (Total Redaman):</strong> Redaman Kabel + Redaman Sambungan + Redaman Connector<br>
     <span class="font-mono text-cyan-700 font-bold">${cableLoss.toFixed(3)} dB + ${spliceLoss.toFixed(3)} dB + ${connectorLoss.toFixed(3)} dB = ${totalLoss.toFixed(3)} dB</span>`
  ];

  let conclusion = "";
  if (totalLoss <= 15) {
    conclusion = "<strong>Kesimpulan:</strong> Kualitas jalur sangat baik. Redaman total sangat rendah, sangat aman untuk pengiriman data kecepatan tinggi.";
  } else if (totalLoss <= 25) {
    conclusion = "<strong>Kesimpulan:</strong> Kualitas jalur sedang. Redaman masih dalam batas wajar, namun perlu dipastikan tidak ada penambahan sambungan lagi.";
  } else {
    conclusion = "<strong>Kesimpulan:</strong> Kualitas jalur buruk / Redaman tinggi. Redaman melebihi batas rekomendasi standar transmisi sehat. Disarankan untuk meminimalkan sambungan atau membersihkan konektor.";
  }

  return {
    cableLoss,
    spliceLoss,
    connectorLoss,
    totalLoss,
    steps,
    conclusion
  };
}

// Kalkulator Power Budget
function calculatePowerBudget(txPower, totalLoss) {
  const rxPower = txPower - totalLoss;
  let status = "";
  let statusClass = "";
  let description = "";

  // Menggunakan standar GPON ITU-T G.984 untuk Light Theme
  if (rxPower >= -27 && rxPower <= -8) {
    status = "Baik (Sinyal Normal)";
    statusClass = "bg-green-50 text-green-700 border border-green-200 shadow-sm";
    description = "Sinyal yang diterima oleh receiver dalam kondisi optimal. Jaringan stabil, tidak ada packet loss, dan internet berjalan lancar.";
  } else if ((rxPower < -27 && rxPower >= -30) || (rxPower > -8 && rxPower <= -3)) {
    status = "Perlu Diperiksa (Warning)";
    statusClass = "bg-yellow-50 text-yellow-750 border border-yellow-200 shadow-sm";
    description = "Daya terima mendekati batas sensitivitas minimum receiver (sensitivitas terendah biasanya -30 dBm). Koneksi mungkin lambat atau sering terputus (intermittent). Disarankan untuk memeriksa kebersihan konektor atau lekukan kabel.";
  } else {
    status = "Redaman Tinggi / Sinyal Drop (Critical)";
    statusClass = "bg-red-50 text-red-700 border border-red-200 shadow-sm";
    description = "Daya terima terlalu rendah (di bawah -30 dBm, sinyal drop/LOS) atau terlalu tinggi (di atas -3 dBm, saturasi optik yang bisa merusak receiver). Jaringan akan mengalami putus total atau kegagalan koneksi.";
  }

  return {
    rxPower,
    status,
    statusClass,
    description
  };
}

if (typeof module !== 'undefined') {
  module.exports = { calculateAttenuation, calculatePowerBudget };
}
