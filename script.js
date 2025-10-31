// Register the datalabels plugin globally.
// This is used to display the bubble labels (A, B, C) directly on the chart.
Chart.register(ChartDataLabels);

const ctx = document.getElementById('myBubbleChart').getContext('2d');

// --- DATA UNTUK CHART ---
const chartData = {
    datasets: [
        {
            label: 'Cluster A',
            backgroundColor: 'rgba(128, 0, 128, 0.6)', // Ungu
            borderColor: 'purple',
            data: [{
                x: 85,
                y: 85,
                r: 22, // Radius gelembung
                label: 'A',
                // --- Detail untuk Modal ---
                title: 'Cluster A: Strategic Growth Investors',
                details: `
                    <p>Cluster A mewakili kelompok investor yang sangat fokus pada pertumbuhan strategis dan dampak jangka panjang. Mereka cenderung memiliki pengalaman investasi yang luas dan portofolio yang terdiversifikasi.</p>
                    <ul>
                        <li>**Investor Contribution:** 15 individu, 5 yayasan, 3 family office, 2 perusahaan investasi.</li>
                        <li>**Demografi:** 25% D, 15% A, 30% B, 30% C.</li>
                        <li>**Alokasi:** 60% Tradisional, 20% Signal Values, 10% Signal Financial ESG, 5% Engage, 5% Grow.</li>
                        <li>**Aset:** 70% listed, 10% FI, 10% PE, 5% RA, 5% cash.</li>
                        <li>**Pengalaman:** 80% memiliki lebih dari 5 tahun pengalaman.</li>
                    </ul>
                    <p>Mereka proaktif mencari peluang investasi yang tidak hanya memberikan keuntungan finansial, tetapi juga selaras dengan nilai-nilai keberlanjutan dan tanggung jawab sosial.</p>
                    <p>Contohnya, mereka mungkin berinvestasi pada perusahaan teknologi hijau atau startup yang inovatif dalam solusi energi terbarukan. Keputusan investasi mereka didasarkan pada analisis mendalam dan visi jangka panjang untuk dampak positif.</p>
                `
            }]
        },
        {
            label: 'Cluster B',
            backgroundColor: 'rgba(128, 0, 128, 0.4)', // Ungu lebih terang
            borderColor: 'purple',
            data: [{
                x: 45,
                y: 35,
                r: 28,
                label: 'B',
                title: 'Cluster B: Balanced Impact Seekers',
                details: `
                    <p>Investor di Cluster B mencari keseimbangan antara pengembalian finansial dan dampak sosial. Mereka cenderung lebih konservatif dibandingkan Cluster A tetapi tetap berkomitmen pada investasi yang bertanggung jawab.</p>
                    <ul>
                        <li>**Investor Contribution:** 10 individu, 4 yayasan, 2 dana pensiun.</li>
                        <li>**Demografi:** 30% D, 20% A, 25% B, 25% C.</li>
                        <li>**Alokasi:** 50% Tradisional, 30% Signal Values, 10% Flexible, 10% Engage.</li>
                        <li>**Aset:** 50% listed, 20% FI, 15% PE, 10% RA, 5% cash.</li>
                        <li>**Pengalaman:** 60% memiliki lebih dari 5 tahun pengalaman.</li>
                    </ul>
                    <p>Mereka cenderung berinvestasi pada perusahaan yang sudah mapan namun memiliki praktik ESG yang kuat atau produk yang memberikan manfaat sosial yang jelas.</p>
                    <p>Fokus mereka adalah meminimalkan risiko sambil tetap berkontribusi pada perubahan positif. Edukasi dan keterlibatan aktif dalam portofolio investasi mereka adalah hal yang umum.</p>
                `
            }]
        },
        {
            label: 'Cluster C',
            backgroundColor: 'rgba(128, 0, 128, 0.8)', // Ungu lebih gelap
            borderColor: 'purple',
            data: [{
                x: 40,
                y: 95,
                r: 26,
                label: 'C',
                title: 'Cluster C: High Social Impact Focus',
                details: `
                    <p>Cluster C adalah investor yang sangat termotivasi oleh dampak sosial, seringkali bersedia menerima pengembalian finansial yang moderat demi mencapai tujuan sosial yang kuat. Ini seringkali termasuk organisasi nirlaba dan individu dengan misi sosial yang jelas.</p>
                    <ul>
                        <li>**Investor Contribution:** 8 yayasan, 5 individu, 2 organisasi filantropi.</li>
                        <li>**Demografi:** 10% D, 10% A, 40% B, 40% C.</li>
                        <li>**Alokasi:** 40% Tradisional, 40% Signal Values, 10% Grow, 10% Flexible.</li>
                        <li>**Aset:** 30% listed, 30% FI, 20% PE, 10% RA, 10% cash.</li>
                        <li>**Pengalaman:** 70% memiliki lebih dari 5 tahun pengalaman.</li>
                    </ul>
                    <p>Mereka sangat tertarik pada investasi di bidang pendidikan, kesehatan, dan pembangunan komunitas. Portofolio mereka mungkin mencakup obligasi dampak sosial atau investasi ekuitas di perusahaan sosial.</p>
                    <p>Transparansi dan pengukuran dampak adalah kunci bagi kelompok ini. Mereka seringkali terlibat langsung dalam pemantauan proyek yang mereka danai.</p>
                `
            }]
        },
        {
            label: 'Cluster D',
            backgroundColor: 'rgba(128, 0, 128, 0.7)',
            borderColor: 'purple',
            data: [{
                x: 85,
                y: 30,
                r: 18,
                label: 'D',
                title: 'Cluster D: Emerging ESG Adopters',
                details: `
                    <p>Investor di Cluster D baru mulai mengintegrasikan kriteria ESG ke dalam strategi investasi mereka. Mereka masih berfokus kuat pada pengembalian tradisional tetapi terbuka untuk mempelajari dan menerapkan pendekatan investasi yang lebih bertanggung jawab.</p>
                    <ul>
                        <li>**Investor Contribution:** 12 individu, 3 dana pensiun, 1 perusahaan investasi.</li>
                        <li>**Demografi:** 40% D, 30% A, 15% B, 15% C.</li>
                        <li>**Alokasi:** 70% Tradisional, 15% Signal Financial ESG, 10% Flexible, 5% Engage.</li>
                        <li>**Aset:** 80% listed, 10% FI, 5% RA, 5% cash.</li>
                        <li>**Pengalaman:** 50% memiliki kurang dari 5 tahun pengalaman.</li>
                    </ul>
                    <p>Mereka sering mencari panduan dari penasihat keuangan mengenai cara terbaik untuk memasukkan pertimbangan ESG tanpa mengorbankan kinerja finansial. Pendidikan dan alat yang mudah digunakan sangat penting bagi mereka.</p>
                    <p>Awalnya, mereka mungkin memilih dana ESG yang sudah ada atau berinvestasi pada perusahaan besar dengan reputasi ESG yang baik.</p>
                `
            }]
        },
        {
            label: 'Cluster E',
            backgroundColor: 'rgba(128, 0, 128, 0.5)',
            borderColor: 'purple',
            data: [{
                x: 80,
                y: 85,
                r: 16,
                label: 'E',
                title: 'Cluster E: Niche Impact Specialists',
                details: `
                    <p>Cluster E terdiri dari investor yang memiliki minat khusus pada sektor atau tema dampak tertentu, seperti energi terbarukan, air bersih, atau pendidikan khusus. Mereka sangat berpengetahuan di area fokus mereka.</p>
                    <ul>
                        <li>**Investor Contribution:** 7 individu, 3 family office, 2 yayasan.</li>
                        <li>**Demografi:** 20% D, 20% A, 30% B, 30% C.</li>
                        <li>**Alokasi:** 50% Tradisional, 30% Signal Values, 10% Grow, 10% Engage.</li>
                        <li>**Aset:** 60% listed, 10% FI, 20% PE, 10% cash.</li>
                        <li>**Pengalaman:** 75% memiliki lebih dari 5 tahun pengalaman.</li>
                    </ul>
                    <p>Mereka cenderung melakukan riset mendalam dan seringkali berinvestasi langsung pada proyek atau perusahaan di ceruk pasar pilihan mereka. Mereka menghargai transparansi dan bukti dampak yang terukur.</p>
                    <p>Contohnya, mereka mungkin berinvestasi pada startup yang mengembangkan teknologi pengolahan air atau sekolah vokasi di daerah terpencil.</p>
                `
            }]
        },
        {
            label: 'Cluster F',
            backgroundColor: 'rgba(128, 0, 128, 0.9)',
            borderColor: 'purple',
            data: [{
                x: 90,
                y: 80,
                r: 24,
                label: 'F',
                title: 'Cluster F: Integrated ESG Leaders',
                details: `
                    <p>Investor di Cluster F adalah para pemimpin dalam mengintegrasikan kriteria ESG ke dalam setiap aspek proses investasi mereka. Mereka melihat ESG sebagai pendorong nilai dan manajemen risiko, bukan hanya sebagai kepatuhan.</p>
                    <ul>
                        <li>**Investor Contribution:** 20 individu, 8 yayasan, 5 family office, 3 perusahaan investasi besar.</li>
                        <li>**Demografi:** 30% D, 20% A, 25% B, 25% C.</li>
                        <li>**Alokasi:** 55% Tradisional, 25% Signal Financial ESG, 10% Engage+Grow, 10% Flexible.</li>
                        <li>**Aset:** 75% listed, 10% FI, 10% PE, 5% cash.</li>
                        <li>**Pengalaman:** 90% memiliki lebih dari 5 tahun pengalaman.</li>
                    </ul>
                    <p>Mereka aktif terlibat dalam *shareholder engagement* untuk mendorong perubahan positif di perusahaan portofolio mereka dan seringkali menjadi pionir dalam pengembangan produk investasi ESG baru.</p>
                    <p>Mereka memprioritaskan perusahaan dengan tata kelola yang kuat, praktik lingkungan yang inovatif, dan hubungan karyawan yang adil, percaya bahwa ini akan menghasilkan kinerja jangka panjang yang unggul.</p>
                `
            }]
        },
        {
            label: 'Cluster G',
            backgroundColor: 'rgba(128, 0, 128, 0.3)',
            borderColor: 'purple',
            data: [{
                x: 18,
                y: 22,
                r: 35,
                label: 'G',
                title: 'Cluster G: Avoid Harm with Traditional and Signal Financial ESG Investor Contribution',
                details: `
                    <div class="section">
                        <h4>Investor Contribution</h4>
                        <ul>
                            <li>5 individuals, 2 foundations, 2 endowments, 1 DAF, 1 investment company</li>
                            <li>10% D, <strong>71% A</strong>, 7% B, 13% C</li>
                            <li><strong>50% Traditional</strong>, <strong>28% Signal Financial ESG</strong>, 9% Signal Values, 4% Grow, 2% Engage, 7% Flexible</li>
                            <li>47% listed, 19% FI, 16% PE, 14% RA, 4% cash</li>
                            <li>66% have less than 5 years experience</li>
                        </ul>
                    </div>
                    
                    <p>Cluster G mewakili investor yang sebagian besar berfokus pada strategi investasi tradisional dengan pertimbangan ESG yang minimal. Mereka cenderung menghindari investasi yang merugikan tetapi tidak secara aktif mencari dampak sosial tinggi.</p>
                    
                    <h3>Tentang Cluster G</h3>
                    <p>Investor di cluster ini melihat ESG terutama dari perspektif manajemen risiko finansial. Mereka tertarik pada investasi yang tidak membahayakan nilai portofolio mereka tetapi tidak secara aktif mencari dampak sosial atau lingkungan yang tinggi.</p>
                    
                    <h3>Panduan Tambahan</h3>
                    <ul>
                        <li>Pelajari tentang <a href="https://www.investopedia.com/terms/s/sri.asp" target="_blank">Socially Responsible Investing (SRI)</a></li>
                        <li>Baca lebih lanjut tentang <a href="#" onclick="alert('Materi Signal Financial ESG akan segera tersedia'); return false;">Signal Financial ESG Strategy</a></li>
                    </ul>
                `
            }]
        },
        {
            label: 'Cluster I',
            backgroundColor: 'rgba(128, 0, 128, 0.5)',
            borderColor: 'purple',
            data: [{
                x: 13,
                y: 18,
                r: 48, // I jauh lebih besar dari G
                label: 'I',
                title: 'Cluster I: Mixed ABC Classification with Traditional and Signal Values Investor Contribution',
                details: `
                    <div class="section">
                        <h4>Investor Contribution</h4>
                        <ul>
                            <li>11 individuals, 7 foundations, 4 family office, 3 endowments</li>
                            <li>39% D, 20% A, 23% B, 17% C</li>
                            <li><strong>48% Traditional</strong>, <strong>21% Signal Values</strong>, 12% Signal Financial ESG, 10% Engage, 3% Grow, 3% Flexible, 2% Engage+Grow</li>
                            <li>41% listed, 16% RA, 15% FI, 14% PE, 8% cash, 6% other alternatives</li>
                            <li>64% have less than 5 years experience</li>
                        </ul>
                    </div>
                    
                    <p>Cluster I terdiri dari investor dengan klasifikasi demografis yang beragam dan fokus pada kombinasi strategi tradisional dan nilai-nilai sinyal. Investor di cluster ini memiliki portofolio yang lebih terdiversifikasi dengan fokus pada nilai-nilai tradisional yang dikombinasikan dengan pertimbangan nilai-nilai sinyal.</p>
                    
                    <h3>Karakteristik Utama</h3>
                    <p>Mereka mencari keseimbangan antara pengembalian finansial dan nilai-nilai yang selaras dengan keyakinan mereka. Portofolio mereka mencerminkan pendekatan hibrida yang menggabungkan investasi tradisional dengan strategi yang lebih berorientasi pada nilai.</p>
                    
                    <h3>Sumber Daya Tambahan</h3>
                    <ul>
                        <li>Pelajari lebih lanjut tentang <a href="https://www.investopedia.com/terms/e/esg.asp" target="_blank">investasi ESG</a></li>
                        <li>Baca panduan tentang <a href="#" onclick="alert('Panduan Signal Values akan segera tersedia'); return false;">Signal Values Strategy</a></li>
                        <li>Kunjungi <a href="https://www.example.com/investment-resources" target="_blank">Investment Resources</a> untuk informasi lebih lanjut</li>
                        <li>Hubungi tim kami di <a href="mailto:support@example.com">support@example.com</a></li>
                    </ul>
                    
                    <h3>Penelitian & Data</h3>
                    <p>Data cluster ini didasarkan pada survei komprehensif terhadap 25 investor yang mewakili berbagai kategori demografis. Untuk detail metodologi penelitian, silakan kunjungi <a href="#" onclick="alert('Metodologi penelitian akan tersedia dalam laporan lengkap'); return false;">halaman metodologi</a>.</p>
                `
            }]
        },
        {
            label: 'Cluster J',
            backgroundColor: 'rgba(128, 0, 128, 0.6)',
            borderColor: 'purple',
            data: [{
                x: 10,
                y: 80,
                r: 20,
                label: 'J',
                title: 'Cluster J: High Contribution with Low Enterprise Impact',
                details: `
                    <p>Cluster J mewakili investor yang memiliki kontribusi investasi tinggi tetapi enterprise impact yang relatif rendah. Mereka mungkin fokus pada investasi tradisional atau belum sepenuhnya mengintegrasikan dampak dalam strategi mereka.</p>
                    <ul>
                        <li>**Investor Contribution:** Data akan diisi sesuai kebutuhan.</li>
                        <li>**Demografi:** Data akan diisi sesuai kebutuhan.</li>
                        <li>**Alokasi:** Data akan diisi sesuai kebutuhan.</li>
                        <li>**Aset:** Data akan diisi sesuai kebutuhan.</li>
                        <li>**Pengalaman:** Data akan diisi sesuai kebutuhan.</li>
                    </ul>
                    <p>Investor di cluster ini memberikan kontribusi investasi yang signifikan tetapi masih dalam tahap pengembangan dalam mengintegrasikan dampak enterprise dalam strategi investasi mereka.</p>
                `
            }]
        }
    ]
};


// --- KONFIGURASI CHART.JS ---
const myBubbleChart = new Chart(ctx, {
    type: 'bubble',
    data: chartData,
    options: {
        responsive: true,
        maintainAspectRatio: false, // Penting agar bisa menyesuaikan ukuran di dalam container
        backgroundColor: '#f0f5ff', // Background chart putih kebiruan
        plugins: {
            title: {
                display: true,
                text: 'Investor Impact vs. Investment Contribution',
                font: {
                    size: 20,
                    weight: 'bold'
                },
                color: '#333'
            },
            tooltip: {
                // Konfigurasi tooltip saat hover
                callbacks: {
                    label: function(context) {
                        const dataPoint = context.dataset.data[context.dataIndex];
                        return dataPoint.title; // Menampilkan judul singkat saat hover
                    }
                },
                backgroundColor: 'rgba(0,0,0,0.7)',
                titleFont: { size: 14, weight: 'bold' },
                bodyFont: { size: 12 },
                padding: 10,
                boxPadding: 5,
                borderRadius: 5,
            },
            datalabels: { // Plugin datalabels untuk menampilkan label huruf pada bubble
                formatter: function(value, context) {
                    return value.label;
                },
                color: '#fff',
                font: {
                    weight: 'bold',
                    size: 12
                }
            }
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                min: 0,
                max: 100,
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                },
                title: {
                    display: true,
                    text: 'Enterprise Impact',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    color: '#333'
                },
                grid: {
                    color: 'rgba(200, 150, 255, 0.3)' // Warna garis grid ungu muda
                }
            },
            y: {
                type: 'linear',
                min: 0,
                max: 100,
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                },
                title: {
                    display: true,
                    text: 'Investment Contribution',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    color: '#333'
                },
                grid: {
                    color: 'rgba(200, 150, 255, 0.3)' // Warna garis grid ungu muda
                }
            }
        },
        // --- Event handler untuk klik gelembung ---
        onClick: (e) => {
            const points = myBubbleChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);

            if (points.length) {
                const firstPoint = points[0];
                const datasetIndex = firstPoint.datasetIndex;
                const dataIndex = firstPoint.index;
                const clickedData = myBubbleChart.data.datasets[datasetIndex].data[dataIndex];

                // Update info box dan juga tampilkan modal
                updateInfoBox(clickedData.title, clickedData.details);
                showModal(clickedData.title, clickedData.details);
            }
        }
    }
});

// --- LOGIKA INFO BOX (Selalu Tampil) ---
const infoBoxTitle = document.getElementById("infoBoxTitle");
const infoBoxContent = document.getElementById("infoBoxContent");

function updateInfoBox(title, content) {
    infoBoxTitle.innerHTML = title;
    infoBoxContent.innerHTML = content;
}

// Event listener untuk hover pada canvas
const canvas = document.getElementById('myBubbleChart');
canvas.addEventListener('mousemove', (e) => {
    const points = myBubbleChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);
    
    if (points.length > 0) {
        const firstPoint = points[0];
        const datasetIndex = firstPoint.datasetIndex;
        const dataIndex = firstPoint.index;
        const hoveredData = myBubbleChart.data.datasets[datasetIndex].data[dataIndex];

        // Update info box saat hover
        updateInfoBox(hoveredData.title, hoveredData.details);
    }
});

// Set default info box dengan cluster pertama setelah chart dibuat
setTimeout(() => {
    const defaultData = myBubbleChart.data.datasets[0].data[0];
    if (defaultData) {
        updateInfoBox(defaultData.title, defaultData.details);
    }
}, 100);

// --- LOGIKA MODAL ---
const modal = document.getElementById("dataModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeButton = document.querySelector(".close-button");

function showModal(title, content) {
    modalTitle.innerHTML = title;
    modalBody.innerHTML = content;
    modal.style.display = "flex"; // Gunakan flex untuk centering
}

// Saat user klik tombol close (x)
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Saat user klik di luar modal (area gelap)
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}