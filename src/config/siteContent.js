// ─────────────────────────────────────────
// siteContent.js
// Konfigurasi terpusat untuk konten dan teks website Company Profile.
// Edit file ini untuk mengubah isi konten di seluruh halaman.
// ─────────────────────────────────────────

export const siteContent = {
  // ── Global ──
  global: {
    companyName: "Bibit Investama",
    companyTagline: "Mitra Strategis Investasi & Manajemen Portofolio Korporasi",
    logoTextPart1: "Bibit",
    logoTextPart2: "Investama",
  },

  // ── SEO & Meta ──
  seo: {
    homeTitle: "BibitInvestama - Company Profile & Portofolio Perusahaan",
    homeDescription: "BibitInvestama adalah perusahaan manajemen investasi dan solusi strategis pasar modal yang berfokus pada pertumbuhan berkelanjutan dan tata kelola profesional.",
  },

  // ── Halaman Beranda (Home) ──
  home: {
    hero: {
      badge: "Profil & Portofolio Korporasi",
      titlePart1: "Mitra Strategis.",
      titlePart2: "Solusi Terukur.",
      titleHighlight: "Bernilai Jangka Panjang.",
      subtitle: "BibitInvestama menghadirkan solusi manajemen portofolio, konsultasi investasi strategis, dan transformasi finansial modern yang dirancang untuk mendorong pertumbuhan bisnis serta korporasi di Indonesia.",
      ctaPrimary: "Jelajahi Portofolio",
      ctaSecondary: "Hubungi Kami",
      trustIndicators: [
        "Terdaftar & Diawasi Resmi",
        "Tata Kelola Korporasi Transparan",
        "Manajemen Strategis & Terukur"
      ],
      illustration: {
        mainImageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=85&w=1200",
        mainImageAlt: "Ilustrasi Gedung & Ekosistem Korporasi BibitInvestama",
        badgeTopTitle: "Portofolio Korporasi",
        badgeTopSubtitle: "Strategi Terintegrasi & Berkelanjutan",
        badgeBottomTitle: "Tata Kelola Profesional",
        badgeBottomSubtitle: "Standar Kepatuhan & Keamanan Berlapis",
        pillars: [
          "Manajemen Aset",
          "Advisory Korporasi",
          "Transformasi Finansial"
        ]
      }
    },
    about: {
      badge: "Tentang Perusahaan",
      title: "Mengenal Lebih Dekat",
      titleHighlight: "BibitInvestama.",
      description: "Kami adalah perusahaan solusi investasi dan manajemen korporasi yang berkomitmen membangun ekosistem finansial yang sehat, transparan, dan berdaya saing tinggi.\n\nMelalui pendekatan berbasis riset mendalam, teknologi modern, serta tata kelola perusahaan yang kuat, BibitInvestama menjadi mitra terpercaya bagi berbagai institusi dan korporasi dalam mengoptimalkan nilai portofolio mereka.",
      highlights: [
        {
          title: "Tata Kelola & Kepatuhan",
          desc: "Menjalankan setiap inisiatif bisnis sesuai standar regulasi dan prinsip Good Corporate Governance (GCG)."
        },
        {
          title: "Strategi Berbasis Riset",
          desc: "Setiap keputusan dan pengelolaan portofolio didukung oleh analisis fundamental serta pemetaan risiko menyeluruh."
        },
        {
          title: "Kemitraan Berkelanjutan",
          desc: "Fokus pada penciptaan nilai jangka panjang bersama mitra bisnis, institusi, dan pemangku kepentingan."
        }
      ],
      cta: "Selengkapnya Tentang Kami"
    },
    services: {
      badge: "Layanan & Fokus Bisnis",
      title: "Solusi Strategis",
      titleHighlight: "Perusahaan",
      subtitle: "Kami memadukan keahlian finansial, tata kelola profesional, dan inovasi teknologi untuk menghadirkan layanan terbaik bagi mitra korporasi.",
      items: [
        {
          id: "portfolio-management",
          title: "Manajemen Portofolio & Aset",
          desc: "Pengelolaan alokasi aset strategis yang dirancang untuk menjaga stabilitas sekaligus memaksimalkan potensi pertumbuhan nilai investasi jangka panjang.",
          highlights: ["Diversifikasi Sektor Strategis", "Optimalisasi Nilai Aset", "Evaluasi Kinerja Berkala"]
        },
        {
          id: "corporate-advisory",
          title: "Konsultasi & Advisory Korporasi",
          desc: "Pendampingan strategis dalam perencanaan struktur finansial, ekspansi usaha, hingga kemitraan investasi antar institusi.",
          highlights: ["Perencanaan Struktur Modal", "Uji Tuntas & Kelayakan", "Sinergi Kemitraan Bisnis"]
        },
        {
          id: "digital-transformation",
          title: "Inovasi & Infrastruktur Finansial",
          desc: "Modernisasi ekosistem pengelolaan investasi berbasis teknologi untuk meningkatkan efisiensi, akurasi pelaporan, dan transparansi data.",
          highlights: ["Dashboard Analitik Korporasi", "Pelaporan Real-Time", "Arsitektur Keamanan Data"]
        },
        {
          id: "risk-governance",
          title: "Manajemen Risiko & Tata Kelola",
          desc: "Kerangka kerja mitigasi risiko komprehensif guna memastikan setiap inisiatif bisnis berjalan aman di tengah dinamika ekonomi.",
          highlights: ["Mitigasi Risiko Pasar", "Audit & Kepatuhan Regulasi", "Keberlanjutan ESG"]
        }
      ]
    },
    portfolio: {
      badge: "Portofolio Perusahaan",
      title: "Rekam Jejak &",
      titleHighlight: "Portofolio Kami",
      subtitle: "Berbagai inisiatif strategis, proyek kolaborasi, dan pengelolaan portofolio korporasi yang telah kami jalankan bersama mitra di berbagai sektor industri.",
      categories: [
        "Semua",
        "Manajemen Aset",
        "Advisory Korporasi",
        "Transformasi Digital",
        "Inisiatif ESG"
      ],
      items: [
        {
          id: "port-1",
          title: "Optimalisasi Portofolio Aset Korporasi Nasional",
          category: "Manajemen Aset",
          client: "Holding Industri Manufaktur & Logistik",
          year: "2026",
          featured: true,
          summary: "Restrukturisasi dan pengelolaan alokasi aset multi-sektor untuk memperkuat likuiditas serta efisiensi modal kerja grup perusahaan.",
          challenge: "Mitra menghadapi tantangan fragmentasi aset di berbagai anak perusahaan yang berdampak pada kurang optimalnya imbal hasil modal kerja.",
          solution: "BibitInvestama merancang kerangka konsolidasi portofolio terpusat dengan strategi penyeimbangan risiko (rebalancing) berbasis kinerja sektoral.",
          deliverables: [
            "Kerangka Alokasi Aset Terpadu",
            "Sistem Pemantauan Likuiditas Grup",
            "Optimalisasi Struktur Modal Jangka Menengah"
          ],
          impact: "Struktur Portofolio Terkonsolidasi",
          imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=900"
        },
        {
          id: "port-2",
          title: "Kemitraan Pembiayaan Infrastruktur Energi Bersih",
          category: "Inisiatif ESG",
          client: "Konsorsium Energi Terbarukan Nusantara",
          year: "2025",
          featured: true,
          summary: "Pendampingan investasi dan penyusunan struktur pendanaan berkelanjutan untuk proyek pengembangan fasilitas energi ramah lingkungan.",
          challenge: "Kebutuhan akan skema investasi jangka panjang yang memenuhi standar keberlanjutan internasional (ESG) serta menarik bagi mitra institusi.",
          solution: "Menyusun kerangka green investment dan uji tuntas komprehensif yang menyelaraskan target finansial dengan indikator dampak lingkungan.",
          deliverables: [
            "Struktur Pendanaan Berbasis ESG",
            "Laporan Kepatuhan & Dampak Berkelanjutan",
            "Kemitraan Sindikasi Institusi"
          ],
          impact: "Standar Green Investment Tersertifikasi",
          imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=900"
        },
        {
          id: "port-3",
          title: "Transformasi Platform Analitik Portofolio Institusi",
          category: "Transformasi Digital",
          client: "Lembaga Pengelola Dana & Investasi",
          year: "2025",
          featured: false,
          summary: "Pengembangan ekosistem pelaporan dan pemantauan portofolio digital terintegrasi untuk mendukung pengambilan keputusan eksekutif.",
          challenge: "Proses kompilasi data lintas instrumen yang sebelumnya dilakukan secara manual membutuhkan waktu lama dan rentan terhadap keterlambatan analisis.",
          solution: "Membangun arsitektur dashboard analitik modern yang menyajikan visibilitas penuh atas eksposur risiko dan performa aset secara akurat.",
          deliverables: [
            "Executive Portfolio Dashboard",
            "Otomatisasi Pelaporan Kepatuhan",
            "Integrasi Data Multi-Instrumen"
          ],
          impact: "Efisiensi Pelaporan & Transparansi Penuh",
          imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=900"
        },
        {
          id: "port-4",
          title: "Advisory Ekspansi & Akuisisi Strategis Sektor Teknologi",
          category: "Advisory Korporasi",
          client: "Grup Perusahaan Teknologi & Layanan Digital",
          year: "2024",
          featured: false,
          summary: "Konsultasi strategis, valuasi korporasi, dan penataan struktur transaksi dalam rangka penguatan ekosistem bisnis digital di Asia Tenggara.",
          challenge: "Menentukan valuasi yang objektif serta memitigasi risiko integrasi pasca-akuisisi di tengah dinamika industri teknologi yang bergerak cepat.",
          solution: "Melakukan kajian komersial mendalam, pemodelan skenario finansial, serta pendampingan negosiasi strategis hingga tahap penyelesaian transaksi.",
          deliverables: [
            "Kajian Valuasi & Uji Tuntas Finansial",
            "Perencanaan Sinergi Pasca-Akuisisi",
            "Tata Kelola Transaksi Korporasi"
          ],
          impact: "Integrasi Bisnis Strategis Berjalan Mulus",
          imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900"
        },
        {
          id: "port-5",
          title: "Pengembangan Strategi Investasi Dana Abadi & Yayasan",
          category: "Manajemen Aset",
          client: "Yayasan Pendidikan & Riset Nasional",
          year: "2024",
          featured: false,
          summary: "Perancangan kebijakan investasi berprofil risiko terukur guna menjaga nilai pokok dana abadi sekaligus menghasilkan arus kas berkelanjutan.",
          challenge: "Menjaga keseimbangan antara pelestarian modal jangka panjang dan kebutuhan pendanaan operasional program sosial tahunan.",
          solution: "Menetapkan kebijakan alokasi aset berimbang dengan instrumen berpendapatan tetap berkualitas tinggi serta tata kelola komite investasi.",
          deliverables: [
            "Dokumen Kebijakan Investasi (IPS)",
            "Tata Kelola Komite Investasi",
            "Strategi Pelestarian Modal Jangka Panjang"
          ],
          impact: "Keberlanjutan Pendanaan Jangka Panjang",
          imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=900"
        },
        {
          id: "port-6",
          title: "Modernisasi Kerangka Manajemen Risiko Korporasi",
          category: "Advisory Korporasi",
          client: "Perusahaan Jasa Keuangan & Pembiayaan",
          year: "2024",
          featured: false,
          summary: "Pembaruan menyeluruh atas sistem pengendalian internal dan kerangka mitigasi risiko pasar sesuai regulasi terbaru.",
          challenge: "Kebutuhan penyesuaian standar manajemen risiko perusahaan terhadap perkembangan regulasi industri jasa keuangan yang semakin ketat.",
          solution: "Merumuskan matriks risiko korporasi, prosedur stress-testing berkala, serta penguatan fungsi kepatuhan lintas departemen.",
          deliverables: [
            "Kerangka Enterprise Risk Management (ERM)",
            "Prosedur Evaluasi & Stress-Testing",
            "Pedoman Tata Kelola & Kepatuhan"
          ],
          impact: "Kepatuhan Regulasi & Mitigasi Risiko Optimal",
          imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=900"
        }
      ]
    },
    kontak: {
      badge: "Kontak & Kemitraan",
      title: "Mari Bangun",
      titleHighlight: "Kolaborasi Strategis",
      subtitle: "Tim kami siap mendiskusikan kebutuhan korporasi dan strategi portofolio perusahaan Anda. Hubungi kami untuk menjadwalkan sesi konsultasi.",
      ctaPrimary: "Diskusi via WhatsApp",
      ctaSecondary: "Ke Halaman Kontak"
    }
  },

  // ── Halaman Tentang Kami ──
  tentangKami: {
    hero: {
      badge: "Tentang Kami",
      title: "Mengenal Lebih Dekat",
      titleHighlight: "BibitInvestama",
      subtitle: "Mitra strategis dalam pengelolaan portofolio, solusi korporasi, dan pertumbuhan investasi berkelanjutan di Indonesia."
    },
    perusahaan: {
      badge: "Profil Perusahaan",
      title: "Identitas &",
      titleHighlight: "Dedikasi Kami",
      paragraphs: [
        "{COMPANY_NAME} adalah perusahaan manajemen investasi dan konsultasi finansial yang berfokus pada penciptaan nilai jangka panjang bagi mitra korporasi maupun institusi di Indonesia.",
        "Kami memadukan keahlian analisis pasar, teknologi finansial modern, serta tata kelola perusahaan yang transparan untuk menghadirkan solusi portofolio yang terukur dan adaptif terhadap perkembangan ekonomi.",
        "Berlandaskan kepatuhan terhadap regulasi Otoritas Jasa Keuangan (OJK), {COMPANY_NAME} senantiasa menjunjung tinggi integritas, akuntabilitas, dan standar profesionalisme dalam setiap kemitraan strategis yang kami jalankan."
      ],
      pillars: [
        {
          title: "Kepatuhan & Integritas",
          desc: "Beroperasi dengan standar tata kelola perusahaan yang baik (GCG) serta kepatuhan penuh terhadap regulasi."
        },
        {
          title: "Keunggulan Portofolio",
          desc: "Pendekatan pengelolaan aset yang disiplin, terdiversifikasi, dan berorientasi pada ketahanan nilai jangka panjang."
        },
        {
          title: "Inovasi Berkelanjutan",
          desc: "Mengintegrasikan teknologi analitik modern untuk mendukung ketepatan pengambilan keputusan strategis."
        },
        {
          title: "Sinergi Kemitraan",
          desc: "Membangun hubungan kolaboratif yang erat dengan berbagai pemangku kepentingan lintas sektor industri."
        }
      ]
    },
    visiMisi: {
      badge: "Arah Strategis",
      title: "Visi &",
      titleHighlight: "Misi",
      visi: "Menjadi perusahaan manajemen investasi dan mitra strategis korporasi terkemuka di Indonesia yang mendorong pertumbuhan ekonomi berkelanjutan melalui tata kelola yang transparan, inovatif, dan terpercaya.",
      misi: [
        "Menghadirkan solusi pengelolaan portofolio dan konsultasi strategis yang memberikan nilai tambah nyata bagi mitra.",
        "Menerapkan standar manajemen risiko dan tata kelola perusahaan tertinggi dalam setiap aspek operasional.",
        "Mengembangkan inovasi teknologi finansial yang meningkatkan efisiensi dan transparansi pengelolaan aset.",
        "Membangun ekosistem kemitraan jangka panjang yang berkontribusi positif terhadap pembangunan ekonomi nasional."
      ]
    },
    nilai: {
      badge: "Prinsip Korporasi",
      title: "Nilai-Nilai",
      titleHighlight: "Kami",
      subtitle: "Prinsip utama yang menjadi fondasi budaya kerja, pengambilan keputusan, dan komitmen kami kepada setiap mitra.",
      items: [
        { title: "Integritas", desc: "Menjaga kepercayaan mitra melalui kejujuran, etika profesional, dan kepatuhan ketat terhadap standar regulasi." },
        { title: "Inovasi", desc: "Terus mengembangkan metode analisis dan pemanfaatan teknologi untuk menghadirkan solusi finansial yang relevan." },
        { title: "Transparansi", desc: "Menyajikan pelaporan, kajian risiko, dan tata kelola portofolio secara terbuka, objektif, dan akuntabel." },
        { title: "Keberlanjutan", desc: "Mengutamakan pertumbuhan jangka panjang yang bertanggung jawab serta memberikan dampak positif bagi ekosistem bisnis." }
      ]
    },
    timeline: {
      badge: "Rekam Jejak",
      title: "Perjalanan",
      titleHighlight: "Perusahaan",
      subtitle: "Tonggak sejarah pertumbuhan dan transformasi {COMPANY_NAME} dalam membangun portofolio korporasi yang tangguh.",
      items: [
        { year: "2019", title: "Pendirian {COMPANY_NAME}", desc: "Didirikan dengan fokus awal pada riset pasar modal dan konsultasi strategis bagi pelaku usaha nasional." },
        { year: "2020", title: "Pengembangan Sistem Analitik Portofolio", desc: "Meluncurkan kerangka kerja manajemen portofolio berbasis data untuk meningkatkan akurasi pemetaan risiko." },
        { year: "2021", title: "Penguatan Tata Kelola & Lisensi Resmi", desc: "Memperkuat struktur kepatuhan regulasi dan memperluas cakupan layanan manajemen aset korporasi." },
        { year: "2022", title: "Ekspansi Kemitraan Lintas Industri", desc: "Menjalin kolaborasi strategis dengan berbagai korporasi di sektor manufaktur, infrastruktur, dan teknologi." },
        { year: "2023", title: "Integrasi Prinsip Investasi Berkelanjutan (ESG)", desc: "Mengadopsi kerangka penilaian keberlanjutan dalam penyusunan portofolio dan proyek pembiayaan strategis." },
        { year: "2024 - Kini", title: "Transformasi Ekosistem Portofolio Korporasi", desc: "Memperkokoh posisi sebagai mitra strategis pengelolaan aset dan solusi korporasi terintegrasi di Indonesia." }
      ]
    },
    tim: {
      badge: "Kepemimpinan",
      title: "Jajaran",
      titleHighlight: "Manajemen",
      subtitle: "Dipimpin oleh para profesional berpengalaman di bidang manajemen investasi, tata kelola korporasi, dan teknologi.",
      items: [
        { name: "Adi Pratama", role: "Chief Executive Officer", initial: "AP" },
        { name: "Sari Dewi", role: "Chief Technology Officer", initial: "SD" },
        { name: "Budi Santoso", role: "Chief Financial Officer", initial: "BS" },
        { name: "Lina Wijaya", role: "Head of Portfolio Management", initial: "LW" },
        { name: "Reza Firmansyah", role: "Head of Corporate Advisory", initial: "RF" },
        { name: "Maya Putri", role: "Head of Risk & Compliance", initial: "MP" },
        { name: "Dika Hermawan", role: "Head of Strategic Partnership", initial: "DH" },
        { name: "Nadia Kusuma", role: "Head of ESG & Research", initial: "NK" }
      ]
    },
    cta: {
      title: "Siap Berkolaborasi Bersama",
      titleHighlight: "Kami?",
      subtitle: "Pelajari lebih lanjut bagaimana {COMPANY_NAME} dapat mendukung pencapaian tujuan strategis dan optimalisasi portofolio perusahaan Anda.",
      primary: "Lihat Portofolio Kami",
      secondary: "Hubungi Tim Kami"
    }
  },

  // ── Halaman Kontak ──
  kontak: {
    hero: {
      badge: "Hubungi Kami",
      title: "Mari",
      titleHighlight: "Terhubung",
      subtitle: "Ingin mendiskusikan kemitraan strategis atau mengenal portofolio perusahaan kami lebih jauh? Tim kami siap melayani Anda.",
      back: "Kembali ke Beranda"
    },
    info: {
      whatsappNumber: "6281234567890",
      email: "corporate@bibitinvestama.com",
      address: "Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan, 12190"
    },
    form: {
      title: "Kirimkan Pesan Kemitraan",
      nameLabel: "Nama Lengkap / Perusahaan",
      namePlaceholder: "Masukkan nama Anda atau instansi",
      emailLabel: "Alamat Email Bisnis",
      emailPlaceholder: "nama@perusahaan.com",
      messageLabel: "Detail Kebutuhan / Pesan",
      messagePlaceholder: "Ceritakan kebutuhan kolaborasi atau pertanyaan Anda di sini...",
      submitBtn: "Kirim Pesan"
    },
    whatsappBtn: {
      text: "Diskusi via WhatsApp",
      message: "Halo Tim BibitInvestama, saya ingin berdiskusi mengenai profil dan portofolio layanan perusahaan."
    }
  },

  // ── Footer ──
  footer: {
    description: "Mitra strategis manajemen portofolio, konsultasi investasi korporasi, dan solusi transformasi finansial yang berorientasi pada pertumbuhan jangka panjang.",
    links: [
      {
        title: "Perusahaan",
        items: [
          { label: "Beranda", href: "/" },
          { label: "Tentang Kami", href: "/tentang" },
          { label: "Layanan Strategis", href: "/#layanan" },
          { label: "Portofolio", href: "/#portofolio" },
          { label: "Hubungi Kami", href: "/kontak" }
        ]
      },
      {
        title: "Fokus Portofolio",
        items: [
          { label: "Manajemen Aset", href: "/#portofolio" },
          { label: "Advisory Korporasi", href: "/#portofolio" },
          { label: "Transformasi Digital", href: "/#portofolio" },
          { label: "Inisiatif ESG", href: "/#portofolio" }
        ]
      },
      {
        title: "Tata Kelola & Legal",
        items: [
          { label: "Komitmen Kepatuhan", href: "/tentang" },
          { label: "Syarat & Ketentuan", href: "#" },
          { label: "Kebijakan Privasi", href: "#" },
          { label: "Manajemen Risiko", href: "/tentang" }
        ]
      }
    ],
    copyright: "© 2026 {COMPANY_NAME}. Hak Cipta Dilindungi."
  }
}

// Utility to replace {COMPANY_NAME} variables in text
export const parseText = (text) => {
  if (typeof text !== 'string') return text;
  return text.replace(/{COMPANY_NAME}/g, siteContent.global.companyName);
}
