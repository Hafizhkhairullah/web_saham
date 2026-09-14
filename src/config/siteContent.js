// ─────────────────────────────────────────
// siteContent.js
// Konfigurasi terpusat untuk konten dan teks website.
// Edit file ini untuk mengubah isi konten di seluruh halaman (white-label).
// ─────────────────────────────────────────

export const siteContent = {
  // ── Global ──
  global: {
    companyName: "bibit investama",
    companyTagline: "Investasi Saham Lebih Cerdas",
    logoTextPart1: "Bibit",
    logoTextPart2: "Investama",
  },

  // ── SEO & Meta ──
  seo: {
    homeTitle: "BibitInvestama - Investasi Saham Lebih Cerdas",
    homeDescription: "BibitInvestama adalah platform trading saham modern, aman, dan transparan yang didesain untuk semua level investor di Indonesia.",
  },

  // ── Halaman Beranda (Home) ──
  home: {
    hero: {
      badge: "Platform Trading Saham #1",
      titlePart1: "Baca Peluang.",
      titlePart2: "Kelola Risiko.",
      titleHighlight: "Tumbuh Lebih Yakin.",
      subtitle: "BibitInvestama adalah platform trading modern, transparan, dan kaya fitur yang dirancang khusus untuk membawa pengalaman investasi saham Anda ke level berikutnya.",
      ctaPrimary: "Hubungi kami sekarang",
      ctaSecondary: "Pelajari Fitur",
      trustIndicators: ["Terdaftar & Diawasi oleh OJK", "Enkripsi Bank-Grade 256-bit", "99.9% Uptime Sistem"]
    },
    demoDashboard: {
      headerTitle: "BibitInvestama Trading (Demo)",
      demoTag: "Demo Mode"
    },
    about: {
      badge: "Tentang Kami",
      title: "Mengenal Lebih Dekat",
      titleHighlight: "BibitInvestama.",
      description: "Kami percaya bahwa akses menuju kebebasan finansial harus terbuka untuk semua. BibitInvestama hadir sebagai jembatan antara ambisi investasi Anda dan realitas pasar modal.\n\nDengan teknologi mutakhir, keamanan tingkat tinggi, dan edukasi yang mudah dipahami, kami berkomitmen untuk mendampingi setiap langkah Anda—mulai dari investor pemula hingga trader berpengalaman.",
      stats: [
        { value: 2, suffix: "M+", label: "Investor Aktif" },
        { value: 99.9, suffix: "%", label: "Uptime Sistem" }
      ],
      cta: "Selengkapnya Tentang Kami"
    },
    edukasi: {
      badge: "Edukasi",
      title: "Mulai Perjalanan",
      titleHighlight: "Investasi Anda",
      subtitle: "Pelajari dasar-dasar investasi saham dengan materi yang mudah dipahami. Dari pemula hingga mahir, kami siap mendampingi Anda.",
      cta: "Pelajari Selengkapnya",
      cards: [
        {
          title: "Apa Itu Saham?",
          desc: "Pahami dasar-dasar pasar modal, cara kerja bursa efek, dan bagaimana saham bisa menjadi instrumen untuk membangun kekayaan jangka panjang.",
          badgeColor: "#E11D2E",
          imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600",
          gradient: "red",
          ctaText: "Mulai Belajar",
          ctaHref: "/edukasi"
        },
        {
          title: "Cara Mulai Investasi",
          desc: "Langkah praktis dari membuka akun sekuritas, memilih saham pertama, hingga membangun portofolio yang sehat dan terdiversifikasi.",
          badgeColor: "#4B5563",
          imageUrl: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=600",
          gradient: "gray",
          ctaText: "Baca Panduan",
          ctaHref: "/edukasi"
        },
        {
          title: "Manajemen Risiko",
          desc: "Pelajari teknik stop-loss, diversifikasi, dan position sizing agar investasi Anda terlindungi dari volatilitas pasar.",
          badgeColor: "#FF2E43",
          imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600",
          gradient: "darkred",
          ctaText: "Lindungi Aset",
          ctaHref: "/edukasi"
        }
      ]
    },
    insight: {
      badge: "Berita & Analisis",
      title: "Market",
      titleHighlight: "Insight",
      subtitle: "Tetap terdepan dengan berita pasar terkini, analisis mendalam, dan tren investasi yang dikurasi oleh para ahli kami.",
      cta: "Lihat Semua Insight"
    },
    kontak: {
      badge: "Kontak",
      title: "Punya",
      titleHighlight: "Pertanyaan?",
      subtitle: "Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau butuh bantuan lebih lanjut.",
      ctaPrimary: "Chat via WhatsApp",
      ctaSecondary: "Ke Halaman Kontak"
    }
  },

  // ── Halaman Insight ──
  insight: {
    hero: {
      badge: "Market Insight",
      title: "Berita & Analisis",
      titleHighlight: "Pasar",
      subtitle: "Pandangan mendalam mengenai pergerakan pasar, analisis tren, dan berita ekonomi terkini untuk membantu keputusan investasi Anda.",
      back: "Kembali ke Beranda"
    },
    articles: [
      {
        id: 1,
        category: "Analisis Pasar",
        date: "14 Sep 2026",
        title: "IHSG Diprediksi Tembus 8.000, Sektor Perbankan Memimpin",
        excerpt: "Bursa Efek Indonesia menunjukkan tren positif didorong oleh laporan keuangan kuartal ketiga yang solid dari bank-bank besar.",
        imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
        author: "Budi Santoso",
        readTime: "5 min read"
      },
      {
        id: 2,
        category: "Ekonomi Makro",
        date: "13 Sep 2026",
        title: "Kebijakan Suku Bunga BI Bertahan, Dampaknya Bagi Emiten Properti",
        excerpt: "Bank Indonesia memutuskan untuk menahan suku bunga acuan. Bagaimana hal ini mempengaruhi sektor properti di kuartal akhir?",
        imageUrl: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=800",
        author: "Siti Rahma",
        readTime: "4 min read"
      },
      {
        id: 3,
        category: "Tips Investasi",
        date: "12 Sep 2026",
        title: "Strategi Rotasi Sektor di Tengah Volatilitas Global",
        excerpt: "Menghadapi ketidakpastian geopolitik, investor disarankan untuk mulai mengalihkan portofolio ke sektor defensif seperti barang konsumsi.",
        imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
        author: "Andi Wijaya",
        readTime: "6 min read"
      },
      {
        id: 4,
        category: "Berita Emiten",
        date: "11 Sep 2026",
        title: "GOTO Umumkan Kemitraan Strategis Baru, Saham Melonjak 15%",
        excerpt: "Kolaborasi dengan perusahaan teknologi global membawa sentimen positif yang signifikan pada perdagangan saham hari ini.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        author: "Reza Pratama",
        readTime: "3 min read"
      },
      {
        id: 5,
        category: "Tren Global",
        date: "10 Sep 2026",
        title: "Dampak Pemilu AS Terhadap Pasar Modal Berkembang",
        excerpt: "Analisis historis menunjukkan volatilitas pasar sering meningkat menjelang pemilihan umum di negara dengan ekonomi terbesar.",
        imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
        author: "Diana Fitri",
        readTime: "7 min read"
      },
      {
        id: 6,
        category: "Edukasi",
        date: "09 Sep 2026",
        title: "Memahami Pola Head and Shoulders dalam Analisis Teknikal",
        excerpt: "Pola pembalikan tren ini adalah salah satu indikator paling andal bagi trader untuk memprediksi penurunan harga.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        author: "Budi Santoso",
        readTime: "5 min read"
      }
    ]
  },

  // ── Halaman Tentang Kami ──
  tentangKami: {
    hero: {
      badge: "Tentang Kami",
      title: "Mengenal Lebih Dekat",
      titleHighlight: "BibitInvestama",
      subtitle: "Membangun jembatan antara ambisi finansial Anda dan peluang pasar modal Indonesia. Kami hadir untuk memberdayakan setiap investor."
    },
    perusahaan: {
      badge: "Profil",
      title: "Tentang",
      titleHighlight: "Perusahaan",
      paragraphs: [
        "{COMPANY_NAME} adalah perusahaan teknologi finansial yang berdedikasi untuk mendemokratisasi akses pasar modal Indonesia. Didirikan dengan visi bahwa setiap orang berhak memiliki kesempatan yang sama untuk membangun kekayaan melalui investasi.",
        "Kami menggabungkan teknologi terdepan dengan pendekatan yang berpusat pada pengguna untuk menciptakan platform trading dan investasi yang aman, transparan, dan mudah digunakan — baik untuk investor pemula maupun profesional berpengalaman.",
        "Terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK), {COMPANY_NAME} berkomitmen penuh pada keamanan dana nasabah, kepatuhan regulasi, dan transparansi dalam setiap layanan yang kami berikan."
      ],
      stats: [
        { value: "2M+", label: "Investor Aktif" },
        { value: "99.9%", label: "Uptime Sistem" },
        { value: "24/7", label: "Dukungan Nasabah" },
        { value: "150+", label: "Produk Investasi" }
      ]
    },
    visiMisi: {
      badge: "Tujuan",
      title: "Visi &",
      titleHighlight: "Misi",
      visi: "Menjadi platform investasi digital terdepan di Indonesia yang memberdayakan setiap individu untuk mencapai kebebasan finansial melalui akses pasar modal yang inklusif, transparan, dan terpercaya.",
      misi: [
        "Menyediakan platform investasi yang mudah digunakan dengan biaya terjangkau untuk semua kalangan.",
        "Memberikan edukasi finansial berkualitas untuk meningkatkan literasi investasi masyarakat Indonesia.",
        "Menghadirkan teknologi inovatif yang membantu investor mengambil keputusan yang lebih cerdas.",
        "Menjaga standar keamanan dan kepatuhan tertinggi demi melindungi kepentingan nasabah."
      ]
    },
    nilai: {
      badge: "Prinsip",
      title: "Nilai-Nilai",
      titleHighlight: "Kami",
      subtitle: "Prinsip-prinsip yang menjadi fondasi setiap keputusan dan layanan yang kami berikan.",
      items: [
        { title: "Keamanan", desc: "Keamanan dana dan data nasabah adalah prioritas utama. Sistem kami dilindungi enkripsi end-to-end dan pemantauan 24/7." },
        { title: "Inovasi", desc: "Kami terus berinovasi menghadirkan fitur dan teknologi baru yang memudahkan perjalanan investasi Anda." },
        { title: "Transparansi", desc: "Tidak ada biaya tersembunyi. Setiap transaksi dan informasi disajikan secara jelas dan mudah dipahami." },
        { title: "Inklusivitas", desc: "Platform kami dirancang untuk semua — dari investor pemula hingga profesional, dari Sabang sampai Merauke." }
      ]
    },
    timeline: {
      badge: "Sejarah",
      title: "Perjalanan",
      titleHighlight: "Kami",
      subtitle: "Dari startup kecil hingga platform investasi terdepan di Indonesia.",
      items: [
        { year: "2019", title: "Pendirian {COMPANY_NAME}", desc: "Bermula dari keinginan untuk membuat investasi saham lebih mudah diakses oleh seluruh masyarakat Indonesia." },
        { year: "2020", title: "Peluncuran Platform Beta", desc: "Peluncuran versi beta dengan fitur trading saham dasar. Mendapatkan 10.000 pengguna pertama dalam 3 bulan." },
        { year: "2021", title: "Lisensi OJK & Ekspansi Produk", desc: "Resmi terdaftar dan diawasi OJK. Menambahkan fitur reksadana, obligasi, dan analisis pasar real-time." },
        { year: "2022", title: "1 Juta Pengguna", desc: "Meraih milestone 1 juta investor aktif. Meluncurkan fitur edukasi interaktif dan portofolio otomatis." },
        { year: "2023", title: "Inovasi AI & Mobile", desc: "Memperkenalkan analisis berbasis AI dan rekomendasi saham personal. Aplikasi mobile mendapat rating 4.8/5." },
        { year: "2024", title: "2 Juta+ Investor", desc: "Melampaui 2 juta investor aktif. Memperluas layanan ke saham global dan kripto regulasi." }
      ]
    },
    tim: {
      badge: "Tim",
      title: "Tim",
      titleHighlight: "Kami",
      subtitle: "Dipimpin oleh para profesional berpengalaman di bidang keuangan dan teknologi.",
      items: [
        { name: "Adi Pratama", role: "CEO & Founder", initial: "AP" },
        { name: "Sari Dewi", role: "CTO", initial: "SD" },
        { name: "Budi Santoso", role: "CFO", initial: "BS" },
        { name: "Lina Wijaya", role: "Head of Product", initial: "LW" },
        { name: "Reza Firmansyah", role: "Head of Engineering", initial: "RF" },
        { name: "Maya Putri", role: "Head of Compliance", initial: "MP" },
        { name: "Dika Hermawan", role: "Head of Marketing", initial: "DH" },
        { name: "Nadia Kusuma", role: "Head of Education", initial: "NK" }
      ]
    },
    cta: {
      title: "Bergabung Bersama",
      titleHighlight: "Kami",
      subtitle: "Jadilah bagian dari 2 juta+ investor yang telah mempercayakan perjalanan finansialnya bersama {COMPANY_NAME}.",
      primary: "Mulai Investasi",
      secondary: "Kembali ke Beranda"
    }
  },

  // ── Halaman Edukasi ──
  edukasi: {
    hero: {
      badge: "Pusat Edukasi",
      title: "Edukasi",
      titleHighlight: "Pasar Saham",
      subtitle: "Panduan lengkap untuk memahami dunia investasi saham — dari konsep dasar hingga strategi lanjutan. Tingkatkan literasi finansial Anda bersama {COMPANY_NAME}.",
      back: "Kembali ke Beranda"
    },
    sections: [
      {
        badge: "Dasar",
        title: "Apa Itu",
        titleHighlight: "Saham?",
        subtitle: "Saham adalah bukti kepemilikan atas suatu perusahaan. Ketika Anda membeli saham, Anda menjadi salah satu pemilik perusahaan tersebut dan berhak atas sebagian keuntungannya.",
        cards: [
          {
            title: "Saham Biasa (Common Stock)",
            desc: "Memberikan hak suara dalam RUPS dan hak atas dividen. Pemilik menanggung risiko paling tinggi tetapi juga berpotensi mendapat keuntungan paling besar.",
            badgeColor: "#E11D2E",
            imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600",
            gradient: "red",
            ctaText: "Pelajari Lebih Lanjut",
            ctaHref: "#"
          },
          {
            title: "Saham Preferen (Preferred Stock)",
            desc: "Mendapat prioritas pembagian dividen sebelum pemegang saham biasa. Cocok untuk investor yang menginginkan pendapatan tetap dari dividen.",
            badgeColor: "#4B5563",
            imageUrl: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=600",
            gradient: "gray",
            ctaText: "Pelajari Lebih Lanjut",
            ctaHref: "#"
          },
          {
            title: "Cara Kerja Bursa Efek",
            desc: "Bursa Efek Indonesia (BEI) adalah tempat jual-beli saham secara resmi. Transaksi dilakukan melalui perusahaan sekuritas yang terdaftar dan diawasi OJK.",
            badgeColor: "#FF2E43",
            imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600",
            gradient: "darkred",
            ctaText: "Pelajari Lebih Lanjut",
            ctaHref: "#"
          }
        ]
      },
      {
        badge: "Analisis",
        title: "Fundamental vs",
        titleHighlight: "Teknikal",
        subtitle: "Dua pendekatan utama dalam menganalisis saham. Keduanya memiliki kelebihan dan bisa dikombinasikan.",
        cards: [
          {
            title: "Analisis Fundamental",
            desc1: "Fokus:", desc1Val: "Nilai intrinsik perusahaan",
            desc2: "Mempelajari laporan keuangan, pendapatan, laba bersih, rasio P/E, ROE, dan prospek bisnis perusahaan untuk menentukan apakah harga saham undervalued atau overvalued.",
            desc3: "Cocok untuk:", desc3Val: "Investor jangka panjang yang mencari saham dengan nilai baik.",
            badgeColor: "#E11D2E",
            imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
            gradient: "red",
            ctaText: "Pelajari Analisis Fundamental",
            ctaHref: "#"
          },
          {
            title: "Analisis Teknikal",
            desc1: "Fokus:", desc1Val: "Pola pergerakan harga & volume",
            desc2: "Menggunakan grafik (chart), indikator seperti Moving Average, RSI, MACD, dan pola candlestick untuk memprediksi arah pergerakan harga saham.",
            desc3: "Cocok untuk:", desc3Val: "Trader aktif yang mencari peluang jangka pendek hingga menengah.",
            badgeColor: "#4B5563",
            imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600",
            gradient: "gray",
            ctaText: "Pelajari Analisis Teknikal",
            ctaHref: "#"
          }
        ]
      },
      {
        badge: "Proteksi",
        title: "Manajemen",
        titleHighlight: "Risiko",
        subtitle: "Kunci sukses investasi bukan hanya soal memilih saham yang benar, tapi juga mengelola risiko dengan bijak.",
        cards: [
          {
            title: "Stop-Loss",
            desc: "Tentukan batas kerugian maksimal sebelum membeli. Misalnya, jual otomatis jika harga turun 5-10% dari harga beli. Ini melindungi modal Anda dari kerugian besar.",
            badgeColor: "#E11D2E",
            imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600",
            gradient: "red",
            ctaText: "Strategi Proteksi",
            ctaHref: "#"
          },
          {
            title: "Diversifikasi",
            desc: "Sebarkan investasi ke berbagai sektor dan instrumen. Jangan menaruh lebih dari 20% portofolio di satu saham. Kombinasikan saham dengan obligasi atau reksadana.",
            badgeColor: "#4B5563",
            imageUrl: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=600",
            gradient: "gray",
            ctaText: "Strategi Proteksi",
            ctaHref: "#"
          },
          {
            title: "Position Sizing",
            desc: "Atur ukuran posisi berdasarkan tingkat risiko. Pemula disarankan mengalokasikan maksimal 2-5% dari total portofolio per transaksi untuk membatasi risiko.",
            badgeColor: "#FF2E43",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
            gradient: "darkred",
            ctaText: "Strategi Proteksi",
            ctaHref: "#"
          }
        ]
      }
    ],
    panduan: {
      badge: "Panduan",
      title: "Cara Mulai",
      titleHighlight: "Investasi",
      subtitle: "Memulai investasi saham lebih mudah dari yang Anda bayangkan. Ikuti langkah-langkah berikut untuk memulai perjalanan Anda.",
      steps: [
        { title: "Buka Rekening Efek", desc: "Pilih perusahaan sekuritas terpercaya seperti {COMPANY_NAME}. Siapkan KTP, NPWP, dan buku tabungan. Proses pembukaan akun bisa dilakukan sepenuhnya secara online." },
        { title: "Deposit Dana", desc: "Transfer dana ke Rekening Dana Nasabah (RDN) Anda. Mulai dengan jumlah yang nyaman — tidak harus besar. Minimum pembelian saham adalah 1 lot (100 lembar)." },
        { title: "Pelajari & Analisis", desc: "Gunakan fitur riset dan analisis di platform {COMPANY_NAME} untuk mempelajari saham yang ingin Anda beli. Perhatikan fundamental perusahaan dan tren harga." },
        { title: "Beli Saham Pertama", desc: "Masukkan order beli melalui aplikasi trading. Pilih saham blue chip untuk awal yang lebih aman. Pantau investasi Anda secara berkala, bukan setiap menit." },
        { title: "Evaluasi & Berkembang", desc: "Review portofolio secara berkala. Pelajari dari setiap transaksi dan terus tingkatkan pengetahuan Anda tentang pasar modal." }
      ],
      tipsTitle: "Tips untuk Pemula",
      tips: [
        "Mulai dengan dana yang siap Anda \"relakan\" — jangan gunakan dana darurat.",
        "Investasi rutin (dollar-cost averaging) lebih baik daripada mencoba menebak waktu pasar.",
        "Diversifikasi — jangan taruh semua telur di satu keranjang.",
        "Saham blue chip (LQ45) cocok untuk pemula karena lebih stabil.",
        "Selalu lakukan riset sendiri sebelum membeli (DYOR)."
      ]
    },
    glosarium: {
      badge: "Referensi",
      title: "Glosarium",
      titleHighlight: "Pasar Saham",
      subtitle: "Istilah-istilah penting yang perlu Anda ketahui saat berinvestasi di pasar modal.",
      items: [
        { term: "IHSG", def: "Indeks Harga Saham Gabungan — indikator pergerakan seluruh saham yang tercatat di BEI." },
        { term: "Lot", def: "Satuan perdagangan saham. 1 lot = 100 lembar saham." },
        { term: "Bid/Ask", def: "Bid adalah harga beli tertinggi, Ask adalah harga jual terendah yang ditawarkan di pasar." },
        { term: "Dividen", def: "Bagian laba perusahaan yang dibagikan kepada pemegang saham." },
        { term: "Capital Gain", def: "Keuntungan dari selisih harga beli dan harga jual saham." },
        { term: "Blue Chip", def: "Saham perusahaan besar dengan fundamental kuat dan likuiditas tinggi." },
        { term: "P/E Ratio", def: "Price to Earnings Ratio — perbandingan harga saham dengan laba per lembar saham." },
        { term: "ROE", def: "Return on Equity — rasio laba bersih terhadap ekuitas pemegang saham." },
        { term: "Market Cap", def: "Kapitalisasi pasar — total nilai seluruh saham perusahaan yang beredar." }
      ]
    },
    cta: {
      title: "Siap Mulai",
      titleHighlight: "Investasi?",
      subtitle: "Buka akun di {COMPANY_NAME} dan mulai perjalanan investasi Anda hari ini. Proses cepat, aman, dan didampingi sepanjang perjalanan.",
      primary: "Buka Akun Sekarang",
      secondary: "Kembali ke Beranda"
    }
  },

  // ── Halaman Kontak ──
  kontak: {
    hero: {
      badge: "Hubungi Kami",
      title: "Mari",
      titleHighlight: "Terhubung",
      subtitle: "Punya pertanyaan atau butuh bantuan? Tim kami siap membantu Anda kapan saja.",
      back: "Kembali ke Beranda"
    },
    info: {
      whatsappNumber: "6281234567890", // Ganti dengan nomor yang sesuai
      email: "support@bibitinvestama.com",
      address: "Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan, 12190"
    },
    form: {
      title: "Kirimkan Pesan",
      nameLabel: "Nama Lengkap",
      namePlaceholder: "Masukkan nama Anda",
      emailLabel: "Alamat Email",
      emailPlaceholder: "nama@email.com",
      messageLabel: "Pesan",
      messagePlaceholder: "Tulis pesan Anda di sini...",
      submitBtn: "Kirim Pesan"
    },
    whatsappBtn: {
      text: "Chat via WhatsApp",
      message: "Halo, saya ingin bertanya mengenai layanan BibitInvestama."
    }
  },

  // ── Footer ──
  footer: {
    description: "Platform trading saham modern, aman, dan transparan yang didesain untuk semua level investor di Indonesia.",
    links: [
      {
        title: "Perusahaan",
        items: [
          { label: "Tentang Kami", href: "/tentang" },
          { label: "Karir", href: "#" },
          { label: "Hubungi Kami", href: "/kontak" }
        ]
      },
      {
        title: "Layanan",
        items: [
          { label: "Trading Saham", href: "#" },
          { label: "Reksadana", href: "#" },
          { label: "Edukasi", href: "/edukasi" },
          { label: "Market Insight", href: "/insight" }
        ]
      },
      {
        title: "Bantuan & Legal",
        items: [
          { label: "Pusat Bantuan", href: "#" },
          { label: "Syarat & Ketentuan", href: "#" },
          { label: "Kebijakan Privasi", href: "#" },
          { label: "Peringatan Risiko", href: "#" }
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
