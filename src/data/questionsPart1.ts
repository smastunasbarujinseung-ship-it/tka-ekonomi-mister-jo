import { Question } from '../types';

export const questionsPart1: Question[] = [
  // SOAL 1 (PG - Konsep Dasar)
  {
    id: 1,
    category: 'Konsep Dasar Ilmu Ekonomi',
    categoryIndex: 1,
    type: 'PG',
    cognitiveLevel: 'HOTS - Penalaran',
    abilityIndicator: 'Menganalisis dan menghitung biaya peluang (opportunity cost) dalam pengambilan keputusan rasional.',
    ttsIntroduction: 'Halo! Selamat datang di soal pertama. Kita akan membedah salah satu fondasi utama ilmu ekonomi, yaitu konsep biaya peluang. Ingat, setiap pilihan rasional pasti menuntut adanya pengorbanan.',
    stimulus: {
      text: 'Arya adalah lulusan Sarjana Ekonomi yang baru diwisuda. Ia menerima tiga tawaran kesempatan ekonomi sekaligus: \n1. Bekerja sebagai staf analis junior di Bank Swasta Nasional dengan gaji Rp7.500.000 per bulan.\n2. Bekerja sebagai perencana keuangan di Konsultan Bisnis dengan penghasilan Rp8.200.000 per bulan.\n3. Mengelola kedai kopi waralaba keluarga dengan estimasi keuntungan bersih Rp6.800.000 per bulan.\n\nSetelah melakukan pertimbangan minat dan jenjang karier jangka panjang, Arya akhirnya memutuskan untuk menerima tawaran bekerja sebagai staf analis junior di Bank Swasta Nasional.',
      tables: [
        {
          title: 'Tabel Pilihan Kesempatan Kerja Arya',
          headers: ['Pilihan Aktivitas', 'Estimasi Penghasilan / Bln', 'Keterangan'],
          rows: [
            ['Analis Junior Bank Swasta', 'Rp7.500.000', 'Pilihan yang diambil'],
            ['Perencana Keuangan Konsultan', 'Rp8.200.000', 'Dilepaskan'],
            ['Kedai Kopi Waralaba', 'Rp6.800.000', 'Dilepaskan']
          ]
        }
      ]
    },
    questionPrompt: 'Berdasarkan prinsip ekonomi rasional, berapakah besarnya biaya peluang (opportunity cost) yang dikorbankan Arya per bulan atas keputusan yang diambilnya?',
    options: [
      { key: 'A', text: 'Rp6.800.000 per bulan karena merupakan nilai terendah yang ditinggalkan.' },
      { key: 'B', text: 'Rp7.500.000 per bulan sesuai gaji yang diterimanya dari Bank Swasta.' },
      { key: 'C', text: 'Rp8.200.000 per bulan yang merupakan kesempatan terbaik bernilai tertinggi yang dikorbankan.' },
      { key: 'D', text: 'Rp15.000.000 per bulan yang merupakan akumulasi dari seluruh alternatif yang dilepaskan.' },
      { key: 'E', text: 'Rp700.000 per bulan yang merupakan selisih antara tawaran konsultan dengan tawaran bank.' }
    ],
    correctAnswer: 'C',
    explanation: {
      problemUnderstanding: 'Arya dihadapkan pada 3 pilihan mutually exclusive (hanya dapat memilih 1). Pilihan yang diambil adalah Analis Bank (Rp7.500.000). Kesempatan yang dilepaskan adalah Konsultan (Rp8.200.000) dan Kedai Kopi (Rp6.800.000).',
      economicConcept: 'Biaya peluang (opportunity cost) adalah nilai dari alternatif terbaik yang harus dikorbankan ketika seseorang memutuskan untuk memilih satu tindakan ekonomi tertentu. Biaya peluang tidak diakumulasikan dan bukan selisih, melainkan nilai tertinggi dari pilihan yang tidak dipilih (the next best alternative).',
      steps: [
        'Identifikasi pilihan yang diambil: Bekerja di Bank (Rp7.500.000).',
        'Identifikasi pilihan yang dikorbankan: Konsultan Bisnis (Rp8.200.000) dan Kedai Kopi (Rp6.800.000).',
        'Pilih alternatif terbaik dengan nilai tertinggi di antara pilihan yang dikorbankan: Rp8.200.000.',
        'Kesimpulan: Biaya peluang Arya adalah Rp8.200.000 per bulan.'
      ],
      optionAnalysis: [
        { key: 'A', text: 'Rp6.800.000 per bulan', isCorrect: false, reason: 'Salah, biaya peluang bukan alternatif terendah, melainkan alternatif terbaik bernilai tertinggi yang dikorbankan.' },
        { key: 'B', text: 'Rp7.500.000 per bulan', isCorrect: false, reason: 'Salah, ini adalah manfaat langsung (benefit) yang diterima dari pilihan yang dipilih, bukan biaya peluang.' },
        { key: 'C', text: 'Rp8.200.000 per bulan', isCorrect: true, reason: 'Tepat, ini adalah opportunity cost yaitu nilai terbaik tertinggi dari alternatif yang ditinggalkan.' },
        { key: 'D', text: 'Rp15.000.000 per bulan', isCorrect: false, reason: 'Salah, biaya peluang tidak pernah dijumlahkan karena seseorang tidak dapat menjalani kedua alternatif secara bersamaan.' },
        { key: 'E', text: 'Rp700.000 per bulan', isCorrect: false, reason: 'Salah, biaya peluang bukan selisih marjinal antara pilihan yang dipilih dan yang ditinggalkan.' }
      ],
      conclusion: 'Biaya peluang selalu mengacu pada the next best alternative yang dilepaskan, bukan penjumlahan seluruh pilihan yang tidak diambil.',
      ttsScript: 'Mari kita bedah. Ingat prinsip emas Mister Jo: biaya peluang adalah nilai kesempatan terbaik yang harus kamu korbankan. Arya melepaskan tawaran konsultan bernilai delapan koma dua juta dan kedai kopi enam koma delapan juta. Nilai terbaik yang dikorbankan adalah delapan juta dua ratus ribu rupiah. Jadi jangan pernah menjumlahkannya ya!'
    },
    quickStrategy: {
      title: 'Strategi Kilat Biaya Peluang',
      shortcut: 'Eliminasi opsi yang dipilih, lalu cari angka TERTINGGI di antara opsi yang ditinggalkan. Jangan pernah dijumlahkan!',
      ruleOfThumb: 'Opportunity Cost = Nilai Alternatif Terbaik yang Dikorbankan (The Next Best Alternative).',
      ttsScript: 'Cara cepatnya: coret pilihan yang diambil. Dari sisa alternatif yang ada, langsung ambil angka terbesar. Jangan pernah dijumlahkan!'
    }
  },

  // SOAL 2 (PGK - Konsep Dasar)
  {
    id: 2,
    category: 'Konsep Dasar Ilmu Ekonomi',
    categoryIndex: 1,
    type: 'PGK',
    cognitiveLevel: 'HOTS - Analisis Data',
    abilityIndicator: 'Menganalisis interaksi antar pelaku ekonomi dalam Circular Flow Diagram 4 sektor (perekonomian terbuka).',
    ttsIntroduction: 'Sekarang perhatikan interaksi empat pelaku ekonomi dalam Circular Flow Diagram. Di sini ada Rumah Tangga Konsumen, Produsen, Pemerintah, dan Masyarakat Luar Negeri. Identifikasi semua arus yang valid!',
    stimulus: {
      text: 'Dalam perekonomian terbuka modern yang melibatkan Rumah Tangga Konsumen (RTK), Rumah Tangga Produsen (RTP), Pemerintah (RTN), dan Masyarakat Luar Negeri (MLN), terjadi arus barang, jasa, faktor produksi, dan uang yang saling terhubung secara simultan.',
      chart: {
        type: 'circular_flow',
        title: 'Diagram Arus Lingkar Kegiatan Ekonomi (Circular Flow 4 Sektor)',
        caption: 'Aliran interaksi antara RTK, RTP, Pemerintah, Pasar Faktor Produksi, Pasar Barang/Jasa, dan Sektor Eksternal.'
      }
    },
    questionPrompt: 'Berdasarkan model circular flow diagram perekonomian terbuka, manakah pernyataan berikut yang BENAR mengenai hubungan timbal balik antar pelaku ekonomi? (Pilih semua pernyataan yang benar!)',
    options: [
      { key: 'A', text: 'RTK menerima imbalan berupa upah, sewa, bunga, dan laba dari RTP atas penyediaan faktor produksi di pasar input.' },
      { key: 'B', text: 'Pemerintah menerima penerimaan pajak dari RTK dan RTP, kemudian menyalurkan subsidi serta fasilitas publik (transfer payment).' },
      { key: 'C', text: 'Masyarakat Luar Negeri membeli barang/jasa dari RTP domestik yang dicatat sebagai kegiatan impor bagi negara kita.' },
      { key: 'D', text: 'RTP mengeluarkan biaya produksi (uang) ke pasar input dan memperoleh penerimaan uang dari penjualan output di pasar barang.' },
      { key: 'E', text: 'Arus uang selalu mengalir searah dengan arus barang dan jasa fisik dalam setiap transaksi ekonomi.' }
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: {
      problemUnderstanding: 'Menganalisis interaksi 4 pelaku ekonomi. Cermati arah aliran: pasar input (faktor produksi), pasar output (barang/jasa), peran pemerintah (pajak dan subsidi/belanja publik), dan perdagangan internasional.',
      economicConcept: 'Dalam circular flow diagram, arus barang/jasa/faktor produksi fisik selalu berlawanan arah dengan arus uang. RTK menyediakan faktor produksi di pasar faktor dan menerima pendapatan (income). RTP menjual barang di pasar output dan menerima revenue. Pemerintah memungut pajak dan memberi barang publik/transfer. MLN membeli ekspor kita dan menjual impor.',
      steps: [
        'Evaluasi Opsi A: RTK pemilik faktor produksi (tanah, tenaga kerja, modal, kewirausahaan) menerima sewa, upah, bunga, laba dari RTP. (BENAR)',
        'Evaluasi Opsi B: Pemerintah memungut pajak (tax) dari RTK & RTP dan mengembalikan dalam bentuk public goods, subsidi, transfer payment. (BENAR)',
        'Evaluasi Opsi C: Jika MLN membeli barang dari RTP domestik, itu adalah kegiatan EKSPOR, bukan impor. (SALAH)',
        'Evaluasi Opsi D: RTP membayar faktor produksi di pasar input (biaya) dan menerima uang hasil penjualan di pasar barang (omzet). (BENAR)',
        'Evaluasi Opsi E: Arus uang berlawanan arah dengan arus riil fisik barang. (SALAH)'
      ],
      optionAnalysis: [
        { key: 'A', text: 'RTK menerima imbalan atas penyediaan faktor produksi', isCorrect: true, reason: 'Benar, ini adalah arus balas jasa faktor produksi dari RTP ke RTK.' },
        { key: 'B', text: 'Pemerintah menerima pajak dan menyalurkan subsidi serta fasilitas publik', isCorrect: true, reason: 'Benar, fungsi distribusi dan alokasi anggaran pemerintah melalui pajak dan belanja publik.' },
        { key: 'C', text: 'Masyarakat Luar Negeri membeli barang domestik dicatat impor', isCorrect: false, reason: 'Salah, pembelian barang domestik oleh pihak luar negeri adalah EKSPOR.' },
        { key: 'D', text: 'RTP mengeluarkan biaya ke pasar input dan menerima uang dari pasar output', isCorrect: true, reason: 'Benar, biaya mengalir ke pasar faktor dan revenue mengalir dari pasar barang.' },
        { key: 'E', text: 'Arus uang mengalir searah dengan arus barang', isCorrect: false, reason: 'Salah, arus uang dan arus barang selalu berlawanan arah (kontra-siklik).' }
      ],
      conclusion: 'Pernyataan A, B, dan D tepat menggambarkan aliran sirkular ekonomi 4 sektor.',
      ttsScript: 'Mari kita analisis bersama. Kunci memahami diagram alir ekonomi adalah arah arus. Ingat baik-baik, arus uang selalu berlawanan arah dengan arus barang. Jika orang luar negeri membeli barang kita, itu ekspor, bukan impor. Sehingga pernyataan yang tepat adalah A, B, dan D.'
    },
    quickStrategy: {
      title: 'Strategi Cepat Arus Lingkar',
      shortcut: 'Ingat dua hukum besi: 1) Arus uang selalu BERLAWANAN dengan arus barang/faktor. 2) Orang luar negeri beli barang kita = EKSPOR (devisa masuk).',
      ruleOfThumb: 'Pasar Input = RTK jual faktor ke RTP; Pasar Output = RTP jual produk ke RTK.',
      ttsScript: 'Cepat saja: periksa apakah arus uang berlawanan dengan arus barang. Coret pilihan C karena luar negeri membeli barang kita berarti ekspor, dan coret E karena arus uang tidak pernah searah dengan arus barang.'
    }
  },

  // SOAL 3 (BS - Permintaan & Penawaran)
  {
    id: 3,
    category: 'Permintaan, Penawaran & Keseimbangan Pasar',
    categoryIndex: 2,
    type: 'BS',
    cognitiveLevel: 'HOTS - Evaluasi Kebijakan',
    abilityIndicator: 'Mengevaluasi dinamika pergeseran kurva permintaan dan penawaran serta dampaknya terhadap harga keseimbangan.',
    ttsIntroduction: 'Perhatikan fenomena gejolak harga pangan cabai rawit berikut. Pada soal Benar-Salah ini, kamu diminta menilai kebenaran dari tiga pernyataan independen.',
    stimulus: {
      text: 'Menjelang Hari Raya Keagamaan, terjadi fenomena cuaca ekstrem El Nino yang berkepanjangan di sentra produksi pertanian, menyebabkan gagal panen cabai rawit sebesar 40%. Pada saat bersamaan, tradisi memasak hidangan perayaan mendorong preferensi dan belanja masyarakat meningkat tajam terhadap cabai rawit.',
      chart: {
        type: 'demand_supply_shift',
        title: 'Dinamika Keseimbangan Pasar Cabai Rawit',
        caption: 'Pergeseran simultan: Kurva Penawaran bergeser ke kiri (gagal panen) dan Kurva Permintaan bergeser ke kanan (lonjakan musiman).',
        data: {
          shiftSupply: 'left',
          shiftDemand: 'right'
        }
      }
    },
    questionPrompt: 'Tentukan BENAR atau SALAH untuk setiap pernyataan berikut berdasarkan analisis kurva permintaan dan penawaran!',
    statements: [
      {
        id: 's3_1',
        text: 'Gagal panen akibat cuaca ekstrem menyebabkan kurva penawaran cabai rawit bergeser ke arah kiri atas (penurunan pasokan).',
        correctAnswer: true,
        explanation: 'Faktor non-harga (bencana alam cuaca) mengurangi pasokan pada setiap tingkat harga, sehingga kurva penawaran S bergeser ke kiri.'
      },
      {
        id: 's3_2',
        text: 'Peningkatan kebutuhan memasak menjelang perayaan menyebabkan pergerakan di sepanjang kurva permintaan (movement along the curve), bukan pergeseran kurva.',
        correctAnswer: false,
        explanation: 'Perubahan selera dan tradisi musiman adalah faktor non-harga yang menggeser seluruh kurva permintaan (shift of demand curve) ke kanan, bukan sekadar movement along.'
      },
      {
        id: 's3_3',
        text: 'Kombinasi pergeseran kurva penawaran ke kiri dan kurva permintaan ke kanan secara pasti menyebabkan harga keseimbangan pasar (Pe) melonjak naik.',
        correctAnswer: true,
        explanation: 'Kedua pergeseran tersebut sama-sama memberikan tekanan kenaikan harga, sehingga harga keseimbangan pasti meningkat tajam.'
      }
    ],
    explanation: {
      problemUnderstanding: 'Dua guncangan terjadi bersamaan: 1) Sisi penawaran: gagal panen (penawaran berkurang, S geser kiri). 2) Sisi permintaan: perayaan musiman (permintaan bertambah, D geser kanan).',
      economicConcept: 'Pergeseran kurva (shifting) terjadi akibat faktor di luar harga barang itu sendiri. Penurunan penawaran (S kiri) menaikkan harga. Peningkatan permintaan (D kanan) juga menaikkan harga. Efek keduanya terhadap harga saling memperkuat sehingga Pe pasti naik.',
      steps: [
        'Pernyataan 1: Cuaca buruk adalah faktor non-harga yang mengurangi kuantitas penawaran di setiap harga -> S bergeser ke kiri. (BENAR)',
        'Pernyataan 2: Pergerakan sepanjang kurva (movement along) HANYA disebabkan oleh perubahan harga barang itu sendiri. Faktor tradisi/selera menggeser kurva permintaan ke kanan. (SALAH)',
        'Pernyataan 3: S geser kiri mendorong P naik; D geser kanan mendorong P naik. Maka harga keseimbangan pasti naik. (BENAR)'
      ],
      statementAnalysis: [
        { id: 's3_1', statement: 'Gagal panen menggeser kurva penawaran ke kiri atas', isCorrect: true, reason: 'Benar, faktor cuaca menurunkan penawaran pada semua level harga.' },
        { id: 's3_2', statement: 'Kenaikan kebutuhan memasak musiman hanya pergerakan sepanjang kurva', isCorrect: false, reason: 'Salah, perubahan selera dan tradisi musiman menggeser kurva ke kanan (shift), bukan sekadar movement along.' },
        { id: 's3_3', statement: 'Kombinasi pergeseran pasti menaikkan harga keseimbangan', isCorrect: true, reason: 'Benar, kedua gaya mendesak harga ke atas sehingga harga pasti naik.' }
      ],
      conclusion: 'Status pernyataan berturut-turut: Pernyataan 1 = BENAR, Pernyataan 2 = SALAH, Pernyataan 3 = BENAR.',
      ttsScript: 'Perhatikan baik-baik perbedaan pergeseran kurva dan pergerakan di sepanjang kurva. Ingat, pergerakan di sepanjang kurva hanya terjadi jika harga barang itu sendiri yang berubah. Karena tradisi musiman adalah faktor selera, maka kurva bergeser ke kanan. Jadi pernyataan kedua adalah salah, sementara pernyataan satu dan tiga adalah benar.'
    },
    quickStrategy: {
      title: 'Strategi Bedakan Shift vs Movement',
      shortcut: 'Harga barang itu sendiri berubah = Movement along curve. Faktor lain (cuaca, selera, pendapatan, musim) = Shift the curve!',
      ruleOfThumb: 'S ke kiri (P naik) + D ke kanan (P naik) = Harga PASTI NAIK!',
      ttsScript: 'Trik cepat Mister Jo: kalau yang berubah harga barangnya sendiri, itu pergerakan di sepanjang kurva. Kalau karena cuaca atau selera, kurvanya bergeser.'
    }
  },

  // SOAL 4 (PG - Keseimbangan Pasar Matematis)
  {
    id: 4,
    category: 'Permintaan, Penawaran & Keseimbangan Pasar',
    categoryIndex: 2,
    type: 'PG',
    cognitiveLevel: 'HOTS - Pemecahan Masalah',
    abilityIndicator: 'Menghitung harga dan kuantitas keseimbangan pasar dari fungsi permintaan dan penawaran linear.',
    ttsIntroduction: 'Saatnya penalaran matematis. Kita memiliki fungsi permintaan dan penawaran suatu komoditas. Coba samakan kedua fungsi untuk menemukan titik ekuilibrium pasar.',
    stimulus: {
      text: 'Berdasarkan riset pasar pada komoditas tepung terigu di suatu daerah perkotaan, diketahui fungsi permintaan masyarakat dan fungsi penawaran pedagang adalah sebagai berikut:\nFungsi Permintaan: Qd = 100 - 4P\nFungsi Penawaran: Qs = -20 + 2P\n(Keterangan: P dinyatakan dalam ribuan rupiah per kg, dan Q dalam ratusan kg).',
      tables: [
        {
          title: 'Fungsi Pasar Komoditas Tepung Terigu',
          headers: ['Persamaan', 'Notasi Fungsi', 'Keterangan'],
          rows: [
            ['Permintaan Konsumen', 'Qd = 100 - 4P', 'Kemiringan negatif (slope -4)'],
            ['Penawaran Produsen', 'Qs = -20 + 2P', 'Kemiringan positif (slope +2)']
          ]
        }
      ]
    },
    questionPrompt: 'Berdasarkan data fungsi pasar tersebut, berapakah harga keseimbangan (Pe) dan jumlah kuantitas keseimbangan (Qe) di pasar tepung terigu?',
    options: [
      { key: 'A', text: 'Pe = Rp15 (ribu) dan Qe = 40 (ratus kg)' },
      { key: 'B', text: 'Pe = Rp20 (ribu) dan Qe = 20 (ratus kg)' },
      { key: 'C', text: 'Pe = Rp20 (ribu) dan Qe = 40 (ratus kg)' },
      { key: 'D', text: 'Pe = Rp25 (ribu) dan Qe = 30 (ratus kg)' },
      { key: 'E', text: 'Pe = Rp30 (ribu) dan Qe = 10 (ratus kg)' }
    ],
    correctAnswer: 'B',
    explanation: {
      problemUnderstanding: 'Diberikan fungsi permintaan Qd = 100 - 4P dan fungsi penawaran Qs = -20 + 2P. Syarat keseimbangan pasar terjadi ketika jumlah yang diminta sama dengan jumlah yang ditawarkan (Qd = Qs).',
      economicConcept: 'Keseimbangan pasar (market equilibrium) dicapai pada perpotongan kurva permintaan dan penawaran di mana tidak terjadi kelebihan permintaan (shortage) maupun kelebihan penawaran (surplus).',
      steps: [
        'Samakan Qd = Qs',
        '100 - 4P = -20 + 2P',
        '100 + 20 = 2P + 4P',
        '120 = 6P  =>  P = 120 / 6 = 20 (ribu rupiah)',
        'Substitusikan P = 20 ke salah satu fungsi untuk mencari Q:',
        'Qd = 100 - 4(20) = 100 - 80 = 20 (ratus kg)',
        'Verifikasi dengan Qs: Qs = -20 + 2(20) = -20 + 40 = 20 (ratus kg) -> Terbukti seimbang!',
        'Maka titik keseimbangan pasar adalah Pe = 20 dan Qe = 20.'
      ],
      optionAnalysis: [
        { key: 'A', text: 'Pe = Rp15 dan Qe = 40', isCorrect: false, reason: 'Jika P=15, Qd = 100-60=40, tapi Qs = -20+30=10 (terjadi shortage 30).' },
        { key: 'B', text: 'Pe = Rp20 dan Qe = 20', isCorrect: true, reason: 'Tepat, pada P=20 nilai Qd dan Qs tepat sama yaitu 20.' },
        { key: 'C', text: 'Pe = Rp20 dan Qe = 40', isCorrect: false, reason: 'Perhitungan kuantitas salah, 100 - 4(20) menghasilkan 20 bukan 40.' },
        { key: 'D', text: 'Pe = Rp25 dan Qe = 30', isCorrect: false, reason: 'Jika P=25, Qd=0 dan Qs=30 (terjadi surplus).' },
        { key: 'E', text: 'Pe = Rp30 dan Qe = 10', isCorrect: false, reason: 'Pada P=30, Qd bernilai negatif (-20), tidak masuk akal secara ekonomi.' }
      ],
      conclusion: 'Harga keseimbangan Pe = Rp20 (ribu) dan Kuantitas keseimbangan Qe = 20 (ratus kg).',
      ttsScript: 'Mari kita hitung secara runut. Samakan Qd dengan Qs: 100 dikurang 4P sama dengan minus 20 ditambah 2P. Pindahkan suku yang sejenis: 6P sama dengan 120, sehingga harga keseimbangan P diperoleh 20. Masukkan nilai 20 ke fungsi permintaan, 100 dikurang 80 menghasilkan kuantitas 20. Jawabannya adalah pilihan B.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Keseimbangan Pasar',
      shortcut: 'Kumpulkan variabel P di satu sisi dan konstanta di sisi lain: (100 - (-20)) / (2 - (-4)) = 120 / 6 = 20. Langsung substitusi: 100 - 4(20) = 20.',
      ruleOfThumb: 'Keseimbangan: Qd = Qs. Rumus instan: P = (Konstanta D - Konstanta S) / (Koefisien S - Koefisien D).',
      ttsScript: 'Gunakan trik kilat: selisih konstanta dibagi jumlah koefisien P. Seratus dikurang minus dua puluh adalah seratus dua puluh, dibagi dua ditambah empat yaitu enam. Seratus dua puluh bagi enam langsung ketemu dua puluh!'
    }
  },

  // SOAL 5 (PGK - Kebijakan Harga & Pajak)
  {
    id: 5,
    category: 'Permintaan, Penawaran & Keseimbangan Pasar',
    categoryIndex: 2,
    type: 'PGK',
    cognitiveLevel: 'HOTS - Evaluasi Kebijakan',
    abilityIndicator: 'Mengevaluasi dampak intervensi harga maksimum (ceiling price) dan pajak spesifik terhadap pasar.',
    ttsIntroduction: 'Pemerintah sering melakukan intervensi pasar untuk melindungi konsumen atau menambah kas negara. Cermati dampak kebijakan harga batas atas dan pajak spesifik berikut.',
    stimulus: {
      text: 'Dalam rangka menjaga daya beli masyarakat berpenghasilan rendah terhadap komoditas minyak goreng curah yang harga pasarnya mencapai Rp18.000 per liter dengan jumlah keseimbangan 10.000 liter, Kementerian Perdagangan menetapkan Harga Eceran Tertinggi (HET/Ceiling Price) sebesar Rp14.000 per liter. Pada saat yang sama, komoditas minuman berpemanis dikenakan pajak spesifik sebesar Rp2.000 per botol.',
      chart: {
        type: 'ceiling_floor_price',
        title: 'Analisis Intervensi Harga Maksimum (Ceiling Price)',
        caption: 'Penetapan harga di bawah harga ekuilibrium (P < Pe) menimbulkan kelebihan permintaan (excess demand / shortage).'
      }
    },
    questionPrompt: 'Berdasarkan teori intervensi pasar ekonomi mikro, manakah konsekuensi ekonomi berikut yang BENAR? (Pilih semua pernyataan yang benar!)',
    options: [
      { key: 'A', text: 'Penetapan HET di bawah harga keseimbangan akan memicu terjadinya kelangkaan barang (shortage / excess demand).' },
      { key: 'B', text: 'Penetapan HET di bawah harga pasar mendorong timbulnya potensi pasar gelap (black market) dengan harga jual di atas batas resmi.' },
      { key: 'C', text: 'Produsen minyak goreng akan meningkatkan jumlah barang yang ditawarkan karena harga ditetapkan lebih murah oleh pemerintah.' },
      { key: 'D', text: 'Pengenaan pajak spesifik Rp2.000 per botol pada minuman berpemanis akan menggeser kurva penawaran produsen ke arah kiri atas.' },
      { key: 'E', text: 'Pengenaan pajak spesifik pada minuman berpemanis akan menyebabkan harga keseimbangan baru turun dan kuantitas pasar bertambah.' }
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: {
      problemUnderstanding: 'Dua kasus intervensi dianalisis: 1) Ceiling price (HET) minyak goreng di bawah Pe (Rp14.000 < Rp18.000). 2) Pajak spesifik minuman berpemanis Rp2.000/botol.',
      economicConcept: 'Harga maksimum (ceiling price) efektif bila ditetapkan di bawah harga keseimbangan, mengakibatkan kuantitas yang diminta (Qd) > kuantitas yang ditawarkan (Qs), sehingga terjadi shortage dan potensi pasar gelap. Pajak spesifik menambah biaya marjinal produsen, menggeser kurva penawaran ke kiri atas, menaikkan harga keseimbangan, dan menurunkan kuantitas transaksi.',
      steps: [
        'Evaluasi Opsi A: Pada P = Rp14.000 < Pe, Qd naik tapi Qs turun -> Terjadi excess demand (shortage). (BENAR)',
        'Evaluasi Opsi B: Karena barang langka dan ada konsumen yang rela membayar mahal, muncul insentif transaksi di pasar gelap. (BENAR)',
        'Evaluasi Opsi C: Hukum penawaran menyatakan jika harga turun, produsen menurunkan jumlah barang yang ditawarkan, bukan menaikkan. (SALAH)',
        'Evaluasi Opsi D: Pajak spesifik menaikkan biaya produksi produsen sehingga kurva penawaran bergeser ke kiri atas sebesar nilai pajak. (BENAR)',
        'Evaluasi Opsi E: Akibat kurva penawaran geser ke kiri, harga keseimbangan baru justru NAIK dan kuantitas TURUN. (SALAH)'
      ],
      optionAnalysis: [
        { key: 'A', text: 'Memicu kelangkaan barang (shortage)', isCorrect: true, reason: 'Benar, harga di bawah ekuilibrium membuat Qd > Qs.' },
        { key: 'B', text: 'Mendorong timbulnya pasar gelap (black market)', isCorrect: true, reason: 'Benar, kelangkaan memicu pedagang menjual dengan harga tersembunyi.' },
        { key: 'C', text: 'Produsen meningkatkan jumlah yang ditawarkan', isCorrect: false, reason: 'Salah, harga lebih rendah menurunkan insentif produsen (Qs turun).' },
        { key: 'D', text: 'Pajak menggeser kurva penawaran ke kiri atas', isCorrect: true, reason: 'Benar, pajak meningkatkan biaya marjinal produsen sehingga S geser kiri.' },
        { key: 'E', text: 'Pajak menyebabkan harga turun dan kuantitas bertambah', isCorrect: false, reason: 'Salah, pajak membuat harga ekuilibrium naik dan kuantitas berkurang.' }
      ],
      conclusion: 'Opsi yang benar adalah A, B, dan D.',
      ttsScript: 'Mari kita evaluasi bersama. Ingat prinsip batas atas harga atau ceiling price: jika ditetapkan di bawah harga pasar, permintaan melonjak sementara produsen enggan memproduksi, terjadilah kelangkaan atau shortage dan memicu pasar gelap. Dan untuk pajak, pajak adalah beban biaya bagi produsen yang menggeser kurva penawaran ke kiri. Jadi pernyataan yang benar adalah A, B, dan D.'
    },
    quickStrategy: {
      title: 'Strategi Intervensi Pasar & Pajak',
      shortcut: 'Ceiling price di bawah Pe -> Q_demand > Q_supply = SHORTAGE + BLACK MARKET. Pajak = Kurva S geser KIRI (Harga NAIK, Q TURUN).',
      ruleOfThumb: 'Ceiling Price melindungi konsumen (shortage); Floor Price melindungi produsen (surplus).',
      ttsScript: 'Strategi kilat: ceiling price di bawah pasar selalu menimbulkan kelangkaan barang dan pasar gelap. Pajak selalu menaikkan harga dan menurunkan jumlah transaksi.'
    }
  },

  // SOAL 6 (BS - Elastisitas & Penerimaan Total)
  {
    id: 6,
    category: 'Permintaan, Penawaran & Keseimbangan Pasar',
    categoryIndex: 2,
    type: 'BS',
    cognitiveLevel: 'HOTS - Penalaran',
    abilityIndicator: 'Menganalisis hubungan elastisitas harga permintaan dengan penerimaan total (Total Revenue / TR).',
    ttsIntroduction: 'Hubungan antara elastisitas permintaan dan penerimaan total adalah materi klasik yang sangat sering diuji di TKA. Uji logikamu pada 3 pernyataan berikut.',
    stimulus: {
      text: 'Manajer pemasaran Perusahaan "Kopi Nusantara" sedang mengevaluasi strategi penetapan harga. Produk kopi sachet premium mereka memiliki koefisien elastisitas harga permintaan sebesar |Ed| = 1,6. Sementara itu, komoditas garam dapur yang dijual divisi kebutuhan pokok memiliki koefisien elastisitas |Ed| = 0,3.',
      tables: [
        {
          title: 'Data Koefisien Elastisitas Produk',
          headers: ['Nama Komoditas', 'Koefisien Elastisitas (|Ed|)', 'Sifat Elastisitas'],
          rows: [
            ['Kopi Sachet Premium', '1,6', 'Elastis (|Ed| > 1)'],
            ['Garam Dapur', '0,3', 'Inelastis (|Ed| < 1)']
          ]
        }
      ]
    },
    questionPrompt: 'Tentukan BENAR atau SALAH untuk setiap pernyataan manajerial berikut!',
    statements: [
      {
        id: 's6_1',
        text: 'Untuk produk kopi sachet premium yang bersifat elastis, kebijakan menaikkan harga jual per unit akan meningkatkan penerimaan total (Total Revenue) perusahaan.',
        correctAnswer: false,
        explanation: 'Pada barang elastis (|Ed| > 1), persentase penurunan kuantitas yang diminta lebih besar daripada persentase kenaikan harga, sehingga TR justru akan turun jika harga dinaikkan.'
      },
      {
        id: 's6_2',
        text: 'Untuk komoditas garam dapur yang bersifat inelastis, jika perusahaan menaikkan harga jual, maka penerimaan total (Total Revenue) perusahaan akan meningkat.',
        correctAnswer: true,
        explanation: 'Pada barang inelastis (|Ed| < 1), persentase penurunan kuantitas lebih kecil daripada kenaikan harga, sehingga TR akan naik saat harga dinaikkan.'
      },
      {
        id: 's6_3',
        text: 'Penerimaan total (TR) produsen mencapai titik maksimum ketika koefisien elastisitas harga permintaan bernilai elastis uniter (|Ed| = 1).',
        correctAnswer: true,
        explanation: 'Sesuai teori mikroekonomi, penerimaan marjinal (MR) = 0 dan TR mencapai titik puncak ketika elastisitas permintaan tepat bernilai uniter (|Ed| = 1).'
      }
    ],
    explanation: {
      problemUnderstanding: 'Memeriksa hubungan antara elastisitas permintaan (|Ed|), arah perubahan harga (P), dan dampak terhadap Penerimaan Total (TR = P x Q).',
      economicConcept: '1) Jika |Ed| > 1 (Elastis): P dan TR bergerak berlawanan arah (P naik -> TR turun; P turun -> TR naik). 2) Jika |Ed| < 1 (Inelastis): P dan TR bergerak searah (P naik -> TR naik; P turun -> TR turun). 3) Jika |Ed| = 1 (Uniter): TR berada pada titik maksimum (MR = 0).',
      steps: [
        'Pernyataan 1: Kopi elastis (|Ed| = 1,6). Jika P dinaikkan, konsumen berpindah ke pengganti lain secara drastis sehingga Q turun tajam, menyebabkan TR TURUN. Pernyataan menyebut TR meningkat. (SALAH)',
        'Pernyataan 2: Garam inelastis (|Ed| = 0,3). Garam kebutuhan pokok tanpa pengganti dekat. Jika P naik, Q hanya turun sedikit sehingga TR NAIK. (BENAR)',
        'Pernyataan 3: Turunan TR terhadap Q adalah MR. Hubungan MR = P(1 - 1/|Ed|). Ketika |Ed| = 1, MR = 0, yang merupakan syarat TR maksimum. (BENAR)'
      ],
      statementAnalysis: [
        { id: 's6_1', statement: 'Menaikkan harga kopi premium (elastis) meningkatkan TR', isCorrect: false, reason: 'Salah, pada barang elastis kenaikan harga justru menurunkan TR.' },
        { id: 's6_2', statement: 'Menaikkan harga garam (inelastis) meningkatkan TR', isCorrect: true, reason: 'Benar, pada barang inelastis perubahan harga searah dengan perubahan TR.' },
        { id: 's6_3', statement: 'TR mencapai maksimum saat elastis uniter (|Ed| = 1)', isCorrect: true, reason: 'Benar, titik balik TR maksimum terjadi saat MR = 0 atau |Ed| = 1.' }
      ],
      conclusion: 'Status pernyataan: Pernyataan 1 = SALAH, Pernyataan 2 = BENAR, Pernyataan 3 = BENAR.',
      ttsScript: 'Mari kita ingat kaidah penting penerimaan total. Bila barang bersifat elastis, menaikkan harga adalah bumerang karena pembeli akan kabur dan penerimaanmu anjlok. Sebaliknya, pada barang inelastis seperti garam, menaikkan harga akan menambah penerimaan. Dan puncak penerimaan total selalu terjadi saat elastisitas uniter sama dengan satu. Pernyataan pertama salah, kedua dan ketiga benar.'
    },
    quickStrategy: {
      title: 'Strategi Matriks Elastisitas vs TR',
      shortcut: 'Elastis = Arah P dan TR BERLAWANAN (P naik -> TR turun). Inelastis = Arah P dan TR SEARAH (P naik -> TR naik). Uniter = TR MAKSIMUM!',
      ruleOfThumb: 'Ingat rumus: MR = P (1 - 1/|Ed|). Jika |Ed|=1 maka MR=0 (TR puncak).',
      ttsScript: 'Hafalkan trik ini: Elastis itu berlawanan arah. Inelastis itu searah. Uniter itu puncak penerimaan. Sangat mudah dan tidak pernah gagal!'
    }
  },

  // SOAL 7 (PG - Surplus Konsumen & Produsen)
  {
    id: 7,
    category: 'Permintaan, Penawaran & Keseimbangan Pasar',
    categoryIndex: 2,
    type: 'PG',
    cognitiveLevel: 'HOTS - Pemecahan Masalah',
    abilityIndicator: 'Menghitung surplus konsumen dan surplus produsen pada titik keseimbangan pasar bebas.',
    ttsIntroduction: 'Konsep surplus konsumen dan surplus produsen mencerminkan efisiensi alokasi sumber daya. Mari kita hitung luas area surplus pada kurva linear!',
    stimulus: {
      text: 'Suatu pasar komoditas beras organik memiliki fungsi permintaan Pd = 50 - Q dan fungsi penawaran Ps = 10 + Q (P dalam ribuan rupiah per kg dan Q dalam kuintal).\nPada kondisi keseimbangan pasar bebas, tercapai kesepakatan harga dan kuantitas antara pembeli dan penjual.',
      tables: [
        {
          title: 'Parameter Pasar Beras Organik',
          headers: ['Kurva', 'Persamaan', 'Titik Potong Sumbu P (Q=0)'],
          rows: [
            ['Permintaan', 'Pd = 50 - Q', 'P = 50 (Willingness to Pay Maksimum)'],
            ['Penawaran', 'Ps = 10 + Q', 'P = 10 (Harga Dasar Penawaran Produsen)']
          ]
        }
      ]
    },
    questionPrompt: 'Berdasarkan data tersebut, berapakah besarnya Surplus Konsumen (Consumer Surplus) pada titik keseimbangan pasar?',
    options: [
      { key: 'A', text: 'Rp200 (ribu)' },
      { key: 'B', text: 'Rp300 (ribu)' },
      { key: 'C', text: 'Rp400 (ribu)' },
      { key: 'D', text: 'Rp600 (ribu)' },
      { key: 'E', text: 'Rp800 (ribu)' }
    ],
    correctAnswer: 'A',
    explanation: {
      problemUnderstanding: 'Menghitung surplus konsumen (CS) dari fungsi Pd = 50 - Q dan Ps = 10 + Q. CS adalah luas segitiga di bawah kurva permintaan dan di atas garis harga keseimbangan (Pe).',
      economicConcept: 'Surplus Konsumen (CS) = 0.5 x Alas x Tinggi = 0.5 x Qe x (P_maks - Pe), di mana P_maks adalah harga saat Q=0 pada kurva permintaan.',
      steps: [
        'Cari titik keseimbangan: Pd = Ps',
        '50 - Q = 10 + Q  =>  2Q = 40  =>  Qe = 20',
        'Hitung harga keseimbangan: Pe = 50 - 20 = 30 (ribu rupiah)',
        'Cari titik potong kurva permintaan pada sumbu harga (Q = 0): P_maks = 50 - 0 = 50',
        'Hitung Surplus Konsumen: CS = 0.5 x Qe x (P_maks - Pe)',
        'CS = 0.5 x 20 x (50 - 30)',
        'CS = 10 x 20 = 200 (ribu rupiah)'
      ],
      optionAnalysis: [
        { key: 'A', text: 'Rp200 (ribu)', isCorrect: true, reason: 'Tepat, luas segitiga CS = 0.5 x 20 x 20 = 200.' },
        { key: 'B', text: 'Rp300 (ribu)', isCorrect: false, reason: 'Salah perhitungan nilai selisih harga.' },
        { key: 'C', text: 'Rp400 (ribu)', isCorrect: false, reason: 'Ini adalah luas persegi panjang tanpa dikali setengah (Qe x delta P).' },
        { key: 'D', text: 'Rp600 (ribu)', isCorrect: false, reason: 'Salah, ini adalah nilai pengeluaran total konsumen (Pe x Qe = 30 x 20 = 600).' },
        { key: 'E', text: 'Rp800 (ribu)', isCorrect: false, reason: 'Bukan hasil perhitungan surplus konsumen.' }
      ],
      conclusion: 'Surplus konsumen yang dinikmati pembeli adalah sebesar Rp200 (ribu).',
      ttsScript: 'Mari kita selesaikan dengan geometri kurva. Pertama cari titik ekuilibrium: 50 dikurang Q sama dengan 10 ditambah Q, didapat kuantitas 20 dan harga keseimbangan 30. Nilai kesediaan membayar tertinggi pada sumbu tegak adalah 50. Tinggi segitiga surplus adalah 50 dikurang 30 yaitu 20, dan alasnya 20. Luas segitiga adalah setengah kali 20 kali 20, hasilnya tepat 200 ribu rupiah. Jawabannya A.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Surplus Konsumen',
      shortcut: 'Cari Qe, lalu hitung CS = 0.5 x Qe x (P_potong - Pe). Alas selalu Qe, tinggi selalu selisih harga potong atas dengan harga pasar.',
      ruleOfThumb: 'Surplus selalu berbentuk segitiga linear: Rumus = 1/2 x Alas x Tinggi.',
      ttsScript: 'Ingat bentuknya adalah segitiga: setengah kali kuantitas keseimbangan kali selisih harga tertinggi dengan harga keseimbangan.'
    }
  },

  // SOAL 8 (PGK - Pendapatan Nasional PDB Riil vs Nominal)
  {
    id: 8,
    category: 'Pendapatan Nasional & Pembangunan Ekonomi',
    categoryIndex: 3,
    type: 'PGK',
    cognitiveLevel: 'HOTS - Analisis Data',
    abilityIndicator: 'Menganalisis penghitungan PDB pendekatan pengeluaran dan membedakan PDB riil dari PDB nominal.',
    ttsIntroduction: 'Pendapatan nasional sering disalahartikan karena pengaruh inflasi. Pelajari data komponen PDB dan deflator harga pada soal pilihan ganda kompleks ini.',
    stimulus: {
      text: 'Badan Pusat Statistik (BPS) merilis data agregat makroekonomi suatu negara untuk tahun 2024 dan 2025 sebagai berikut (dalam triliun rupiah):\nTahun 2024 (Tahun Dasar): Pengeluaran Konsumsi Rumah Tangga (C) = 6.000; Investasi Domestik Bruto (I) = 2.500; Pengeluaran Konsumsi Pemerintah (G) = 1.800; Ekspor (X) = 2.200; Impor (M) = 1.900.\nTahun 2025: PDB Nominal tercatat Rp12.000 triliun dengan Indeks Deflator PDB sebesar 120.',
      tables: [
        {
          title: 'Komponen Pengeluaran Makroekonomi (Triliun Rupiah)',
          headers: ['Komponen PDB', 'Tahun 2024', 'Tahun 2025 (Estimasi)'],
          rows: [
            ['Konsumsi Rumah Tangga (C)', '6.000', '-'],
            ['Investasi Bruto (I)', '2.500', '-'],
            ['Belanja Pemerintah (G)', '1.800', '-'],
            ['Ekspor Neto (X - M)', '300 (2.200 - 1.900)', '-'],
            ['PDB Nominal', '10.600', '12.000'],
            ['Deflator PDB', '100 (Tahun Dasar)', '120']
          ]
        }
      ]
    },
    questionPrompt: 'Berdasarkan data ekonomi tersebut, manakah kesimpulan analisis berikut yang BENAR? (Pilih semua pernyataan yang benar!)',
    options: [
      { key: 'A', text: 'PDB tahun 2024 dengan pendekatan pengeluaran bernilai Rp10.600 triliun.' },
      { key: 'B', text: 'PDB Riil tahun 2025 dengan mengeliminasi pengaruh inflasi adalah sebesar Rp10.000 triliun.' },
      { key: 'C', text: 'PDB Riil tahun 2025 bernilai sama persis dengan PDB Nominal tahun 2025 yaitu Rp12.000 triliun.' },
      { key: 'D', text: 'Pertumbuhan ekonomi riil dari tahun 2024 ke 2025 mengalami penurunan (pertumbuhan negatif) sekitar -5,66%.' },
      { key: 'E', text: 'Kenaikan PDB Nominal pada tahun 2025 sepenuhnya mencerminkan peningkatan jumlah produksi fisik barang dan jasa riil.' }
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: {
      problemUnderstanding: 'Data PDB pengeluaran 2024 dihitung dari C + I + G + (X - M). PDB 2025 dianalisis riil vs nominal dengan deflator 120.',
      economicConcept: 'PDB Pengeluaran = C + I + G + (X - M). PDB Riil = (PDB Nominal / Deflator) x 100. Pertumbuhan ekonomi dihitung dari persentase perubahan PDB Riil, bukan PDB Nominal.',
      steps: [
        'Langkah 1: Hitung PDB 2024 = 6.000 + 2.500 + 1.800 + (2.200 - 1.900) = 10.300 + 300 = 10.600 triliun. (Opsi A BENAR)',
        'Langkah 2: Hitung PDB Riil 2025 = (12.000 / 120) x 100 = 10.000 triliun. (Opsi B BENAR)',
        'Langkah 3: Opsi C menyebut PDB Riil 2025 sama dengan nominal (12.000), ini SALAH karena ada kenaikan indeks harga (deflator 120).',
        'Langkah 4: Hitung Pertumbuhan Ekonomi Riil = ((PDB Riil 2025 - PDB Riil 2024) / PDB Riil 2024) x 100%',
        'Tahun 2024 adalah tahun dasar sehingga PDB Riil 2024 = PDB Nominal 2024 = 10.600 triliun.',
        'Pertumbuhan Riil = ((10.000 - 10.600) / 10.600) x 100% = (-600 / 10.600) x 100% ≈ -5,66% (Pertumbuhan negatif / kontraksi). (Opsi D BENAR)',
        'Langkah 5: Opsi E SALAH karena kenaikan nominal didorong inflasi (deflator naik ke 120), sedangkan produksi fisik justru terkontraksi.'
      ],
      optionAnalysis: [
        { key: 'A', text: 'PDB 2024 bernilai Rp10.600 triliun', isCorrect: true, reason: 'Benar, 6000 + 2500 + 1800 + 300 = 10.600 triliun.' },
        { key: 'B', text: 'PDB Riil 2025 adalah Rp10.000 triliun', isCorrect: true, reason: 'Benar, (12.000 / 120) x 100 = 10.000 triliun.' },
        { key: 'C', text: 'PDB Riil 2025 sama persis dengan Nominal', isCorrect: false, reason: 'Salah, nominal terdistorsi inflasi 20%.' },
        { key: 'D', text: 'Pertumbuhan ekonomi riil mengalami kontraksi sekitar -5,66%', isCorrect: true, reason: 'Benar, PDB riil turun dari 10.600 menjadi 10.000 (turun 5,66%).' },
        { key: 'E', text: 'Kenaikan nominal sepenuhnya peningkatan fisik', isCorrect: false, reason: 'Salah, sebagian besar kenaikan hanyalah ilusi moneter akibat inflasi.' }
      ],
      conclusion: 'Pernyataan yang tepat adalah A, B, dan D.',
      ttsScript: 'Perhatikan jebakan ini! Jangan terkecoh melihat angka PDB nominal yang naik dari 10.600 menjadi 12.000 triliun. Ketika kita bagi dengan deflator 120, PDB riil tahun 2025 ternyata hanya 10.000 triliun. Artinya produksi fisik sebenarnya turun dari 10.600 menjadi 10.000 triliun, atau terkontraksi minus 5,66 persen. Jawaban yang benar adalah A, B, dan D.'
    },
    quickStrategy: {
      title: 'Strategi Kilat PDB Riil vs Nominal',
      shortcut: 'PDB Riil = (PDB Nominal / Deflator) x 100. Pertumbuhan ekonomi SELALU menggunakan PDB Riil, bukan Nominal!',
      ruleOfThumb: 'Kenaikan PDB Nominal bisa berupa ilusi inflasi. Hanya PDB Riil yang mengukur output fisik sebenarnya.',
      ttsScript: 'Trik cepat: untuk mencari PDB riil, bagi PDB nominal dengan angka deflator lalu kali seratus. Jangan pernah gunakan PDB nominal untuk menghitung pertumbuhan ekonomi!'
    }
  },

  // SOAL 9 (BS - Distribusi Pendapatan Kurva Lorenz & Gini)
  {
    id: 9,
    category: 'Pendapatan Nasional & Pembangunan Ekonomi',
    categoryIndex: 3,
    type: 'BS',
    cognitiveLevel: 'HOTS - Penalaran',
    abilityIndicator: 'Mengevaluasi ketimpangan distribusi pendapatan berdasarkan Kurva Lorenz dan Koefisien Gini.',
    ttsIntroduction: 'Pembangunan ekonomi bukan hanya soal pertumbuhan PDB, tetapi juga keadilan distribusi pendapatan. Cermati analisis Kurva Lorenz dan Rasio Gini.',
    stimulus: {
      text: 'Dua negara berkembang, Negara "Nusantara" dan Negara "Swastika", mencatatkan PDB per kapita yang hampir sama yaitu US$4.800. Namun, data distribusi pendapatan menunjukkan Rasio Gini Negara Nusantara sebesar 0,28, sedangkan Negara Swastika memiliki Rasio Gini sebesar 0,52. Kurva Lorenz Negara Nusantara terletak jauh lebih dekat ke garis diagonal kesetaraan sempurna (line of perfect equality).',
      chart: {
        type: 'lorenz_curve',
        title: 'Perbandingan Kurva Lorenz Negara Nusantara vs Swastika',
        caption: 'Garis diagonal 45 derajat mencerminkan kesetaraan sempurna. Semakin cembung kurva menjauhi diagonal, semakin tinggi ketimpangan.'
      }
    },
    questionPrompt: 'Tentukan BENAR atau SALAH untuk setiap pernyataan evaluasi ketimpangan ekonomi berikut!',
    statements: [
      {
        id: 's9_1',
        text: 'Negara Nusantara memiliki tingkat ketimpangan distribusi pendapatan yang rendah dan jauh lebih merata dibandingkan Negara Swastika.',
        correctAnswer: true,
        explanation: 'Sesuai standar internasional, Rasio Gini 0,28 berada pada kategori ketimpangan rendah (< 0,4), sedangkan 0,52 berada pada ketimpangan tinggi (> 0,5).'
      },
      {
        id: 's9_2',
        text: 'Semakin mendekati garis diagonal 45 derajat lengkungan Kurva Lorenz suatu negara, maka nilai Koefisien Gini akan semakin mendekati angka 1.',
        correctAnswer: false,
        explanation: 'Garis diagonal adalah garis kesetaraan sempurna dengan Gini = 0. Jika Kurva Lorenz mendekati diagonal, nilai Koefisien Gini mendekati 0, bukan 1.'
      },
      {
        id: 's9_3',
        text: 'Menurut kriteria Bank Dunia, suatu negara mengalami ketimpangan tinggi apabila 40% penduduk berpendapatan terendah menerima kurang dari 12% dari total pendapatan nasional.',
        correctAnswer: true,
        explanation: 'Kriteria Bank Dunia: < 12% = ketimpangan tinggi; 12% - 17% = ketimpangan sedang; > 17% = ketimpangan rendah.'
      }
    ],
    explanation: {
      problemUnderstanding: 'Membandingkan Rasio Gini (0,28 vs 0,52) dan karakteristik Kurva Lorenz serta kriteria Bank Dunia.',
      economicConcept: 'Koefisien Gini berkisar antara 0 (kesetaraan mutlak) dan 1 (ketimpangan sempurna). Kurva Lorenz yang semakin melengkung menjauhi garis diagonal menunjukkan ketimpangan yang semakin buruk. Standar Bank Dunia mengukur porsi pendapatan kelompok 40% termiskin.',
      steps: [
        'Pernyataan 1: Gini Nusantara 0,28 (< 0,4) = distribusi merata / ketimpangan rendah. Gini Swastika 0,52 (> 0,5) = ketimpangan tinggi. (BENAR)',
        'Pernyataan 2: Garis 45 derajat melambangkan Gini = 0. Semakin dekat kurva ke garis diagonal, Gini makin kecil mendekati 0, bukan 1. (SALAH)',
        'Pernyataan 3: Standar distribusi Bank Dunia: Kelompok 40% termiskin menikmati < 12% pendapatan nasional menandakan ketimpangan parah/tinggi. (BENAR)'
      ],
      statementAnalysis: [
        { id: 's9_1', statement: 'Nusantara memiliki ketimpangan rendah dan lebih merata', isCorrect: true, reason: 'Benar, Gini 0,28 menandakan distribusi merata.' },
        { id: 's9_2', statement: 'Mendekati diagonal membuat Gini mendekati angka 1', isCorrect: false, reason: 'Salah, diagonal adalah kesetaraan sempurna bernilai 0.' },
        { id: 's9_3', statement: 'Bank Dunia: 40% termiskin terima < 12% adalah ketimpangan tinggi', isCorrect: true, reason: 'Benar, ini batas baku kriteria Bank Dunia.' }
      ],
      conclusion: 'Status pernyataan berturut-turut: Pernyataan 1 = BENAR, Pernyataan 2 = SALAH, Pernyataan 3 = BENAR.',
      ttsScript: 'Ingat baik-baik skala koefisien Gini. Angka nol melambangkan kemerataan sempurna, dan angka satu adalah ketimpangan mutlak. Jadi jika kurva Lorenz mendekati garis diagonal, nilainya mendekati nol, bukan satu. Pernyataan pertama benar, kedua salah, dan ketiga benar.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Gini & Lorenz',
      shortcut: 'Garis diagonal = Gini 0 (Rata sempurna). Lengkung menjauh = Gini mendekati 1 (Makin timpang). Bank Dunia: 40% termiskin dapat <12% = Timpang Berat.',
      ruleOfThumb: 'Gini: < 0,4 (Rendah), 0,4 - 0,5 (Sedang), > 0,5 (Tinggi).',
      ttsScript: 'Trik cepat: nol itu sempurna merata, satu itu paling timpang. Kurva mendekati garis lurus artinya mendekati nol.'
    }
  },

  // SOAL 10 (PG - Pertumbuhan Ekonomi & Pendapatan Per Kapita)
  {
    id: 10,
    category: 'Pendapatan Nasional & Pembangunan Ekonomi',
    categoryIndex: 3,
    type: 'PG',
    cognitiveLevel: 'HOTS - Pemecahan Masalah',
    abilityIndicator: 'Menghitung laju pertumbuhan ekonomi dan perubahan pendapatan per kapita.',
    ttsIntroduction: 'Mari kita uji kemampuan menghitung pendapatan per kapita dan laju pertumbuhan ekonomi riil dari data tabel berikut.',
    stimulus: {
      text: 'Tabel berikut menunjukkan perkembangan PDB Riil (atas dasar harga konstan) dan jumlah penduduk suatu negara berkembang pada tahun 2024 dan 2025:',
      tables: [
        {
          title: 'Data PDB Riil dan Kependudukan',
          headers: ['Tahun', 'PDB Riil (Miliar Rupiah)', 'Jumlah Penduduk (Juta Jiwa)'],
          rows: [
            ['2024', '1.600.000', '80'],
            ['2025', '1.760.000', '88']
          ]
        }
      ]
    },
    questionPrompt: 'Berdasarkan data di atas, pernyataan manakah yang paling akurat mengenai laju pertumbuhan ekonomi dan perubahan pendapatan per kapita negara tersebut pada tahun 2025?',
    options: [
      { key: 'A', text: 'Ekonomi tumbuh sebesar 10% dan pendapatan per kapita meningkat sebesar 10%.' },
      { key: 'B', text: 'Ekonomi tumbuh sebesar 10% tetapi pendapatan per kapita tidak mengalami perubahan (tetap).' },
      { key: 'C', text: 'Ekonomi tumbuh sebesar 16% dan pendapatan per kapita naik sebesar 8%.' },
      { key: 'D', text: 'Ekonomi tumbuh sebesar 10% dan pendapatan per kapita mengalami penurunan sebesar 5%.' },
      { key: 'E', text: 'Ekonomi tidak mengalami pertumbuhan karena jumlah penduduk bertambah 10%.' }
    ],
    correctAnswer: 'B',
    explanation: {
      problemUnderstanding: 'Menghitung laju pertumbuhan ekonomi dari perubahan PDB Riil 2024 ke 2025, serta menghitung pendapatan per kapita masing-masing tahun (PDB Riil / Penduduk).',
      economicConcept: 'Laju Pertumbuhan Ekonomi = ((PDB Riil 2025 - PDB Riil 2024) / PDB Riil 2024) x 100%. Pendapatan per Kapita = PDB Riil / Jumlah Penduduk.',
      steps: [
        '1. Laju Pertumbuhan Ekonomi: ((1.760.000 - 1.600.000) / 1.600.000) x 100% = (160.000 / 1.600.000) x 100% = 10%.',
        '2. Pendapatan per kapita 2024: Rp1.600.000 miliar / 80 juta jiwa = Rp20.000.000 per kapita.',
        '3. Pendapatan per kapita 2025: Rp1.760.000 miliar / 88 juta jiwa = Rp20.000.000 per kapita.',
        '4. Perubahan pendapatan per kapita: Rp20.000.000 - Rp20.000.000 = 0 (Tetap / tidak berubah).',
        'Alasan: Karena laju pertumbuhan PDB riil (10%) tepat sama dengan laju pertumbuhan penduduk (88 - 80)/80 x 100% = 10%!'
      ],
      optionAnalysis: [
        { key: 'A', text: 'Ekonomi tumbuh 10% dan pendapatan per kapita naik 10%', isCorrect: false, reason: 'Salah, kenaikan PDB habis terserap oleh penambahan jumlah penduduk yang juga tumbuh 10%.' },
        { key: 'B', text: 'Ekonomi tumbuh 10% tetapi pendapatan per kapita tetap', isCorrect: true, reason: 'Tepat, PDB riil tumbuh 10% dan penduduk tumbuh 10%, sehingga per kapita konstan di Rp20 juta.' },
        { key: 'C', text: 'Ekonomi tumbuh 16%', isCorrect: false, reason: 'Salah perhitungan rasio (160.000 / 1.600.000 adalah 10%, bukan 16%).' },
        { key: 'D', text: 'Pendapatan per kapita turun 5%', isCorrect: false, reason: 'Salah, nilainya tetap sama persis.' },
        { key: 'E', text: 'Ekonomi tidak mengalami pertumbuhan', isCorrect: false, reason: 'Salah, output ekonomi riil tetap tumbuh 10%.' }
      ],
      conclusion: 'Pertumbuhan ekonomi tercatat 10%, namun pendapatan per kapita tetap di Rp20.000.000 karena pertumbuhan output diimbangi penambahan jumlah penduduk.',
      ttsScript: 'Mari kita cermati angkanya. PDB riil tumbuh dari 1.600.000 menjadi 1.760.000, yaitu naik sepuluh persen. Namun perhatikan jumlah penduduknya, bertambah dari 80 juta menjadi 88 juta, yang juga naik persis sepuluh persen. Jika dibagi, pendapatan per kapita tahun 2024 adalah 20 juta, dan tahun 2025 tetap 20 juta rupiah. Jadi ekonomi tumbuh 10 persen tetapi pendapatan per kapita tidak berubah. Jawabannya B.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Pendapatan Per Kapita',
      shortcut: 'Pertumbuhan Per Kapita ≈ Pertumbuhan PDB - Pertumbuhan Penduduk. Karena PDB tumbuh 10% dan penduduk tumbuh 10%, maka 10% - 10% = 0% (Tetap)!',
      ruleOfThumb: 'Kesejahteraan per kapita hanya naik jika laju pertumbuhan ekonomi lebih tinggi daripada laju pertumbuhan penduduk.',
      ttsScript: 'Gunakan trik aproksimasi cepat: kurangkan pertumbuhan PDB dengan pertumbuhan penduduk. Sepuluh persen dikurang sepuluh persen hasilnya nol persen, alias pendapatannya tetap!'
    }
  },

  // SOAL 11 (PGK - Ketenagakerjaan TPAK & TPT)
  {
    id: 11,
    category: 'Ketenagakerjaan',
    categoryIndex: 4,
    type: 'PGK',
    cognitiveLevel: 'HOTS - Analisis Data',
    abilityIndicator: 'Menganalisis indikator Tingkat Partisipasi Angkatan Kerja (TPAK) dan Tingkat Pengangguran Terbuka (TPT).',
    ttsIntroduction: 'Data ketenagakerjaan membutuhkan ketelitian dalam memisahkan angkatan kerja dan bukan angkatan kerja. Cermati tabel statistik ketenagakerjaan berikut.',
    stimulus: {
      text: 'Berdasarkan Survei Angkatan Kerja Nasional (Sakernas) pada suatu provinsi berpenduduk usia kerja 10.000.000 orang, diperoleh rincian data sebagai berikut:\n- Jumlah orang yang sedang bekerja = 6.650.000 orang\n- Jumlah orang yang menganggur dan sedang mencari kerja = 350.000 orang\n- Jumlah penduduk usia kerja yang bersekolah/kuliah = 1.600.000 orang\n- Jumlah penduduk usia kerja yang mengurus rumah tangga = 1.200.000 orang\n- Penerima pendapatan pensiun dan lainnya = 200.000 orang.',
      tables: [
        {
          title: 'Komposisi Penduduk Usia Kerja (15 Tahun ke Atas)',
          headers: ['Klasifikasi', 'Jumlah (Orang)', 'Status Ketenagakerjaan'],
          rows: [
            ['Bekerja', '6.650.000', 'Angkatan Kerja'],
            ['Pengangguran Terbuka', '350.000', 'Angkatan Kerja'],
            ['Sekolah / Kuliah', '1.600.000', 'Bukan Angkatan Kerja'],
            ['Mengurus Rumah Tangga', '1.200.000', 'Bukan Angkatan Kerja'],
            ['Penerima Pendapatan Lain', '200.000', 'Bukan Angkatan Kerja']
          ]
        }
      ]
    },
    questionPrompt: 'Berdasarkan data statistik ketenagakerjaan tersebut, manakah pernyataan berikut yang BENAR? (Pilih semua pernyataan yang benar!)',
    options: [
      { key: 'A', text: 'Total Angkatan Kerja provinsi tersebut berjumlah 7.000.000 orang.' },
      { key: 'B', text: 'Tingkat Partisipasi Angkatan Kerja (TPAK) provinsi tersebut sebesar 70%.' },
      { key: 'C', text: 'Tingkat Pengangguran Terbuka (TPT) provinsi tersebut dihitung sebesar 3,5% terhadap total penduduk usia kerja.' },
      { key: 'D', text: 'Tingkat Pengangguran Terbuka (TPT) provinsi tersebut tercatat sebesar 5,0% terhadap total angkatan kerja.' },
      { key: 'E', text: 'Jumlah penduduk yang tergolong Bukan Angkatan Kerja adalah 3.000.000 orang.' }
    ],
    correctAnswer: ['A', 'B', 'D', 'E'],
    explanation: {
      problemUnderstanding: 'Membedakan Angkatan Kerja (Bekerja + Penganggur) dan Bukan Angkatan Kerja (Sekolah + Ibu RT + Pensiun) dari total Penduduk Usia Kerja (10.000.000).',
      economicConcept: '1) Angkatan Kerja = Bekerja + Menganggur. 2) Bukan Angkatan Kerja = Total Usia Kerja - Angkatan Kerja. 3) TPAK = (Angkatan Kerja / Total Usia Kerja) x 100%. 4) TPT = (Penganggur / Angkatan Kerja) x 100% (PENTING: penyebut TPT adalah Angkatan Kerja, BUKAN total penduduk usia kerja!).',
      steps: [
        '1. Angkatan Kerja = 6.650.000 + 350.000 = 7.000.000 orang. (Opsi A BENAR)',
        '2. Bukan Angkatan Kerja = 1.600.000 + 1.200.000 + 200.000 = 3.000.000 orang. (Opsi E BENAR)',
        '3. TPAK = (7.000.000 / 10.000.000) x 100% = 70%. (Opsi B BENAR)',
        '4. TPT = (Penganggur / Angkatan Kerja) x 100% = (350.000 / 7.000.000) x 100% = 5,0%. (Opsi D BENAR)',
        '5. Opsi C SALAH karena penyebut TPT adalah Angkatan Kerja, bukan total penduduk usia kerja (350.000 / 10.000.000 = 3,5% adalah kesalahan metodologis rumus).'
      ],
      optionAnalysis: [
        { key: 'A', text: 'Total Angkatan Kerja berjumlah 7.000.000 orang', isCorrect: true, reason: 'Benar, 6.650.000 bekerja + 350.000 menganggur.' },
        { key: 'B', text: 'TPAK sebesar 70%', isCorrect: true, reason: 'Benar, (7 juta / 10 juta) x 100% = 70%.' },
        { key: 'C', text: 'TPT 3,5% terhadap penduduk usia kerja', isCorrect: false, reason: 'Salah, rumus TPT tidak menggunakan penduduk usia kerja sebagai penyebut.' },
        { key: 'D', text: 'TPT tercatat 5,0% terhadap angkatan kerja', isCorrect: true, reason: 'Benar, (350.000 / 7.000.000) x 100% = 5%.' },
        { key: 'E', text: 'Bukan Angkatan Kerja berjumlah 3.000.000 orang', isCorrect: true, reason: 'Benar, 10 juta - 7 juta = 3 juta orang.' }
      ],
      conclusion: 'Opsi yang benar adalah A, B, D, dan E. Hati-hati jangan memilih C yang menggunakan rumus salah.',
      ttsScript: 'Hati-hati pada jebakan rumus TPT! Banyak siswa salah karena membagi pengangguran dengan total usia kerja. Rumus TPT yang benar adalah penganggur dibagi angkatan kerja, yaitu 350 ribu dibagi 7 juta, menghasilkan 5 persen. Sehingga pernyataan yang tepat adalah A, B, D, dan E.'
    },
    quickStrategy: {
      title: 'Strategi Kilat TPAK vs TPT',
      shortcut: 'TPAK = Angkatan Kerja / Usia Kerja. TPT = Penganggur / ANGKATAN KERJA (Bukan Usia Kerja!). Angkatan Kerja = Bekerja + Menganggur.',
      ruleOfThumb: 'Ingat akronim: TPT penyebutnya Angkatan Kerja (AK).',
      ttsScript: 'Ingat rumus kuncinya: TPAK penyebutnya penduduk usia kerja, sedangkan TPT penyebutnya adalah angkatan kerja.'
    }
  },

  // SOAL 12 (BS - Jenis Pengangguran & Solusi)
  {
    id: 12,
    category: 'Ketenagakerjaan',
    categoryIndex: 4,
    type: 'BS',
    cognitiveLevel: 'HOTS - Penalaran',
    abilityIndicator: 'Mengidentifikasi jenis-jenis pengangguran dan mengevaluasi solusi kebijakan yang tepat.',
    ttsIntroduction: 'Pengangguran memiliki penyebab yang berbeda-beda, mulai dari peralihan pekerjaan, siklus resesi, hingga otomatisasi teknologi. Uji analisismu pada kasus berikut.',
    stimulus: {
      text: 'Seiring transformasi digital di industri perbankan dan manufaktur tekstil, terjadi beberapa fenomena ketenagakerjaan di kota metropolitan:\nKasus 1: Hendra, seorang teller bank, kehilangan pekerjaannya karena perbankan beralih ke mesin setor-tarik tunai otomatis (CRM) dan aplikasi perbankan digital. Keterampilannya tidak lagi sesuai dengan kebutuhan programmer dan data analyst yang dicari bank.\nKasus 2: Rina, sarjana akuntansi berprestasi, sengaja berhenti bekerja di kantor lamanya 2 minggu lalu karena sedang mencari pekerjaan baru yang menawarkan kompensasi dan jenjang karier lebih prospektif.\nKasus 3: Ratusan buruh pabrik dirumahkan akibat penurunan daya beli global yang memicu resesi ekonomi.',
      tables: [
        {
          title: 'Kasus Ketenagakerjaan dan Karakteristiknya',
          headers: ['Nama / Kasus', 'Pemicu Terjadinya', 'Sifat Pengangguran'],
          rows: [
            ['Hendra (Kasus 1)', 'Otomatisasi sistem perbankan', 'Perubahan struktur teknologi'],
            ['Rina (Kasus 2)', 'Pencarian pekerjaan yang lebih baik', 'Masa jeda transisi pekerjaan'],
            ['Buruh Pabrik (Kasus 3)', 'Resesi siklus ekonomi global', 'Penurunan permintaan agregat']
          ]
        }
      ]
    },
    questionPrompt: 'Tentukan BENAR atau SALAH untuk setiap pernyataan analisis pengangguran berikut!',
    statements: [
      {
        id: 's12_1',
        text: 'Hendra mengalami pengangguran struktural, dan solusi yang paling tepat adalah pelatihan vokasi serta pelatihan keterampilan ulang (reskilling).',
        correctAnswer: true,
        explanation: 'Pengangguran struktural terjadi karena ketidakcocokan (mismatch) antara keahlian tenaga kerja dengan kebutuhan struktur ekonomi baru; solusinya adalah re-education dan reskilling.'
      },
      {
        id: 's12_2',
        text: 'Rina tergolong mengalami pengangguran konjungtural (siklis) karena kondisi pasar kerja sedang mengalami kegagalan sistemik.',
        correctAnswer: false,
        explanation: 'Rina mengalami pengangguran friksional (sukarela dan sementara karena proses pencarian kecocokan pekerjaan), bukan pengangguran konjungtural.'
      },
      {
        id: 's12_3',
        text: 'Pengangguran pada kasus buruh pabrik yang diakibatkan oleh resesi ekonomi dapat diatasi secara efektif melalui kebijakan fiskal ekspansif oleh pemerintah.',
        correctAnswer: true,
        explanation: 'Pengangguran siklis/konjungtural diakibatkan oleh defisit permintaan agregat saat resesi; kebijakan fiskal ekspansif (kenaikan belanja pemerintah dan insentif) dapat memulihkan permintaan dan produksi.'
      }
    ],
    explanation: {
      problemUnderstanding: 'Mengklasifikasikan kasus: Hendra (struktural), Rina (friksional), Buruh (siklis/konjungtural) dan mencocokkan kebijakan solusinya.',
      economicConcept: '1) Pengangguran Struktural: mismatch skill vs zaman -> solusi: pelatihan/kursus keahlian baru. 2) Pengangguran Friksional: jeda waktu antar pekerjaan -> solusi: bursa kerja & informasi lowongan. 3) Pengangguran Siklis/Konjungtural: akibat resesi ekonomi -> solusi: stimulus moneter dan fiskal ekspansif.',
      steps: [
        'Pernyataan 1: Hendra digantikan mesin/teknologi dan keterampilannya tertinggal = Pengangguran Struktural. Solusi reskilling tepat. (BENAR)',
        'Pernyataan 2: Rina sarjana yang sedang mencari pekerjaan lebih baik secara sukarela = Pengangguran Friksional, bukan konjungtural. (SALAH)',
        'Pernyataan 3: Resesi ekonomi memicu pengangguran siklis/konjungtural. Kebijakan fiskal ekspansif (stimulus belanja) memicu permintaan agregat kembali pulih. (BENAR)'
      ],
      statementAnalysis: [
        { id: 's12_1', statement: 'Hendra struktural, solusinya reskilling', isCorrect: true, reason: 'Benar, teknologi baru membutuhkan keahlian baru.' },
        { id: 's12_2', statement: 'Rina pengangguran konjungtural', isCorrect: false, reason: 'Salah, Rina adalah pengangguran friksional (transisi sukarela).' },
        { id: 's12_3', statement: 'Buruh resesi diatasi fiskal ekspansif', isCorrect: true, reason: 'Benar, stimulus fiskal meningkatkan permintaan agregat dan membuka lapangan kerja.' }
      ],
      conclusion: 'Status pernyataan: Pernyataan 1 = BENAR, Pernyataan 2 = SALAH, Pernyataan 3 = BENAR.',
      ttsScript: 'Pahami kata kuncinya: jika seseorang kehilangan kerja karena kemajuan teknologi dan keahliannya tertinggal, itu adalah pengangguran struktural. Jika seseorang berhenti sementara untuk mencari pekerjaan yang lebih bagus, itu pengangguran friksional. Sedangkan akibat resesi adalah pengangguran siklis. Maka pernyataan satu benar, dua salah, dan tiga benar.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Klasifikasi Pengangguran',
      shortcut: 'Keahlian ketinggalan zaman = STRUKTURAL (Solusi: Latihan). Transisi cari kerja lebih baik = FRIKSIONAL (Solusi: Info Loker). Akibat resesi/krisis = SIKLIS/KONJUNGTURAL (Solusi: Stimulus Fiskal).',
      ruleOfThumb: 'Kunci identifikasi terletak pada akar pemicu: teknologi, waktu jeda, atau kelesuan ekonomi makro.',
      ttsScript: 'Trik cepat: ingat 3 kata kunci. Ketinggalan zaman itu struktural, pindah kerja itu friksional, kena krisis moneter itu siklis.'
    }
  },

  // SOAL 13 (PG - Indeks Harga & Laju Inflasi)
  {
    id: 13,
    category: 'Indeks Harga & Inflasi',
    categoryIndex: 5,
    type: 'PG',
    cognitiveLevel: 'HOTS - Pemecahan Masalah',
    abilityIndicator: 'Menghitung laju inflasi dari Indeks Harga Konsumen (IHK) dan menganalisis dampaknya terhadap upah riil.',
    ttsIntroduction: 'Mari berhitung inflasi. Ingat, rumus laju inflasi menggunakan IHK periode sebelumnya sebagai pembagi, bukan IHK tahun berjalan.',
    stimulus: {
      text: 'Data Badan Pusat Statistik menunjukkan perkembangan Indeks Harga Konsumen (IHK) Kota Metropolitan pada akhir tahun 2024 dan akhir tahun 2025 sebagai berikut:\n- IHK Desember 2024 = 110,00\n- IHK Desember 2025 = 118,80\nPada periode yang sama, upah nominal Pak Budi sebagai buruh pabrik dinaikkan oleh perusahaannya dari Rp4.000.000 menjadi Rp4.240.000 per bulan.',
      tables: [
        {
          title: 'Perkembangan IHK dan Upah Nominal Pak Budi',
          headers: ['Variabel Ekonomi', 'Tahun 2024', 'Tahun 2025'],
          rows: [
            ['Indeks Harga Konsumen (IHK)', '110,00', '118,80'],
            ['Upah Nominal Pak Budi', 'Rp4.000.000', 'Rp4.240.000']
          ]
        }
      ]
    },
    questionPrompt: 'Berdasarkan data tersebut, berapakah laju inflasi tahun 2025 dan bagaimana pengaruhnya terhadap daya beli (upah riil) Pak Budi?',
    options: [
      { key: 'A', text: 'Laju inflasi 8,0% dan upah riil Pak Budi mengalami penurunan karena kenaikan upah nominal hanya 6,0%.' },
      { key: 'B', text: 'Laju inflasi 8,8% dan upah riil Pak Budi mengalami kenaikan karena upah nominalnya bertambah Rp240.000.' },
      { key: 'C', text: 'Laju inflasi 8,0% dan upah riil Pak Budi mengalami peningkatan daya beli sebesar 2,0%.' },
      { key: 'D', text: 'Laju inflasi 7,4% dan upah riil Pak Budi tetap konstan.' },
      { key: 'E', text: 'Laju inflasi 18,8% dan upah riil Pak Budi tergerus parah.' }
    ],
    correctAnswer: 'A',
    explanation: {
      problemUnderstanding: 'Menghitung laju inflasi tahun 2025 dari IHK 2024 (110) dan IHK 2025 (118,80). Membandingkan dengan persentase kenaikan upah nominal Pak Budi untuk menilai upah riil.',
      economicConcept: '1) Laju Inflasi = ((IHK_t - IHK_(t-1)) / IHK_(t-1)) x 100%. 2) Daya beli / upah riil naik jika % kenaikan upah nominal > laju inflasi. Upah riil turun jika % kenaikan upah nominal < laju inflasi.',
      steps: [
        'Langkah 1: Laju Inflasi 2025 = ((118,80 - 110,00) / 110,00) x 100%',
        'Laju Inflasi = (8,80 / 110,00) x 100% = 0,08 x 100% = 8,0%.',
        'Langkah 2: Hitung kenaikan upah nominal Pak Budi = ((4.240.000 - 4.000.000) / 4.000.000) x 100%',
        'Kenaikan Upah = (240.000 / 4.000.000) x 100% = 6,0%.',
        'Langkah 3: Bandingkan: Upah nominal hanya naik 6%, sedangkan harga barang naik (inflasi) 8%.',
        'Maka daya beli / upah riil Pak Budi menurun (6% - 8% = -2% penurunan daya beli riil).'
      ],
      optionAnalysis: [
        { key: 'A', text: 'Laju inflasi 8,0% dan upah riil turun', isCorrect: true, reason: 'Tepat, inflasi 8,0% lebih tinggi dari kenaikan upah 6,0%, sehingga daya beli riil tergerus.' },
        { key: 'B', text: 'Laju inflasi 8,8% dan upah riil naik', isCorrect: false, reason: 'Salah, 8,8 adalah selisih poin IHK, bukan persentase inflasi terhadap IHK awal (8,8/110 = 8%).' },
        { key: 'C', text: 'Laju inflasi 8,0% dan daya beli naik 2%', isCorrect: false, reason: 'Salah, daya beli turun 2%, bukan naik.' },
        { key: 'D', text: 'Laju inflasi 7,4%', isCorrect: false, reason: 'Salah pembagi (membagi dengan 118,80 bukan 110).' },
        { key: 'E', text: 'Laju inflasi 18,8%', isCorrect: false, reason: 'Salah mengabaikan angka dasar 100.' }
      ],
      conclusion: 'Laju inflasi tercatat 8,0% dan upah riil Pak Budi menurun karena kenaikan penghasilannya (6%) lebih lambat daripada laju kenaikan harga-harga (8%).',
      ttsScript: 'Awas jangan sampai salah menentukan angka pembagi! Selisih IHK adalah 8,8. Bagi 8,8 dengan IHK awal yaitu 110, diperoleh inflasi delapan persen. Sedangkan kenaikan upah Pak Budi dari empat juta ke empat juta dua ratus empat puluh ribu hanya naik enam persen. Karena harga naik 8 persen tapi gaji cuma naik 6 persen, maka daya beli riil Pak Budi turun. Jawabannya adalah A.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Laju Inflasi & Upah Riil',
      shortcut: 'Inflasi = (Selisih IHK / IHK Lama) x 100%. Daya Beli Riil = % Kenaikan Gaji - Inflasi. Jika hasilnya negatif, daya beli riil TURUN!',
      ruleOfThumb: 'Jangan tertukar: pembagi SELALU IHK periode awal / lama!',
      ttsScript: 'Trik cepat: hitung selisih IHK dibagi IHK tahun lalu. Delapan koma delapan dibagi seratus sepuluh adalah delapan persen. Gaji naik enam persen, maka daya beli riil minus dua persen alias turun.'
    }
  },

  // SOAL 14 (PGK - Demand-pull vs Cost-push Inflation)
  {
    id: 14,
    category: 'Indeks Harga & Inflasi',
    categoryIndex: 5,
    type: 'PGK',
    cognitiveLevel: 'HOTS - Evaluasi Kebijakan',
    abilityIndicator: 'Menganalisis jenis inflasi (demand-pull vs cost-push) dan merumuskan kebijakan penanggulangannya.',
    ttsIntroduction: 'Inflasi dapat dipicu oleh lonjakan permintaan maupun kenaikan biaya produksi. Amati dua skenario ekonomi berikut dan pilih seluruh pernyataan yang benar.',
    stimulus: {
      text: 'Perekonomian nasional menghadapi dua guncangan simultan:\nPeristiwa X: Terjadi lonjakan harga minyak mentah dunia sebesar 35% akibat konflik geopolitik, yang memicu kenaikan tarif logistik pengiriman barang dan bahan baku industri manufaktur dalam negeri.\nPeristiwa Y: Pembagian bantuan likuiditas tunai secara masif disertai ekspansi kredit konsumtif perbankan yang sangat longgar menyebabkan jumlah uang beredar melesat, memicu lonjakan belanja masyarakat melampaui kapasitas produksi nasional.',
      chart: {
        type: 'inflation_bar',
        title: 'Komposisi Penyebab Tekanan Inflasi',
        caption: 'Tekanan inflasi sisi penawaran (cost-push) vs tekanan inflasi sisi permintaan agregat (demand-pull).'
      }
    },
    questionPrompt: 'Berdasarkan teori inflasi, manakah pernyataan berikut yang BENAR mengenai analisis kedua peristiwa tersebut? (Pilih semua pernyataan yang benar!)',
    options: [
      { key: 'A', text: 'Peristiwa X mencerminkan cost-push inflation karena dipicu oleh kenaikan biaya faktor produksi dan rantai pasok.' },
      { key: 'B', text: 'Peristiwa Y mencerminkan demand-pull inflation karena aggregate demand melampaui aggregate supply (kapasitas produksi penuh).' },
      { key: 'C', text: 'Pada Peristiwa X, kurva penawaran agregat (AS) bergeser ke arah kanan bawah sehingga output bertambah.' },
      { key: 'D', text: 'Untuk meredam Peristiwa Y, Bank Indonesia dapat menerapkan kebijakan moneter kontraktif dengan menaikkan suku bunga acuan.' },
      { key: 'E', text: 'Kedua peristiwa tersebut dapat diatasi secara instan hanya dengan mencetak lebih banyak uang kartal oleh otoritas moneter.' }
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: {
      problemUnderstanding: 'Peristiwa X = Kenaikan harga minyak & logistik -> Biaya produksi naik -> Cost-push inflation. Peristiwa Y = Uang beredar melimpah & belanja konsumsi melonjak -> Permintaan melebihi kapasitas -> Demand-pull inflation.',
      economicConcept: 'Cost-push inflation menggeser kurva AS ke kiri (stagflasi: P naik, output turun). Demand-pull inflation menggeser kurva AD ke kanan. Untuk demand-pull, kebijakan moneter kontraktif (suku bunga naik, kurangi uang beredar) adalah terapi yang tepat.',
      steps: [
        'Evaluasi Opsi A: Kenaikan BBM dan bahan baku adalah komponen biaya produksi -> Cost-push inflation. (BENAR)',
        'Evaluasi Opsi B: Peningkatan likuiditas dan belanja konsumsi melebihi kapasitas produksi -> Demand-pull inflation. (BENAR)',
        'Evaluasi Opsi C: Kenaikan biaya produksi menggeser kurva AS ke KIRI ATAS (bukan kanan bawah) dan menurunkan output. (SALAH)',
        'Evaluasi Opsi D: Demand-pull diredam dengan menaikkan BI-Rate agar masyarakat menabung dan belanja berkurang. (BENAR)',
        'Evaluasi Opsi E: Mencetak uang justru akan memperparah inflasi menjadi hiperinflasi. (SALAH)'
      ],
      optionAnalysis: [
        { key: 'A', text: 'Peristiwa X mencerminkan cost-push inflation', isCorrect: true, reason: 'Benar, didorong oleh dorongan biaya input.' },
        { key: 'B', text: 'Peristiwa Y mencerminkan demand-pull inflation', isCorrect: true, reason: 'Benar, tarikan permintaan agregat melebihi kapasitas penawaran.' },
        { key: 'C', text: 'Kurva AS bergeser ke kanan bawah', isCorrect: false, reason: 'Salah, kurva AS bergeser ke kiri atas.' },
        { key: 'D', text: 'BI dapat menerapkan moneter kontraktif menaikkan suku bunga', isCorrect: true, reason: 'Benar, suku bunga tinggi mengerem ekspansi permintaan agregat.' },
        { key: 'E', text: 'Mencetak uang dapat mengatasi inflasi instan', isCorrect: false, reason: 'Salah fatal, mencetak uang menambah inflasi.' }
      ],
      conclusion: 'Pernyataan yang tepat adalah A, B, dan D.',
      ttsScript: 'Mari kita pilah sumber inflasinya. Peristiwa X bersumber dari kenaikan biaya energi dan logistik, itu adalah cost-push inflation. Peristiwa Y bersumber dari uang beredar yang meluap dan konsumsi berlebih, itu adalah demand-pull inflation. Cara meredam demand-pull adalah menaikkan suku bunga acuan. Jadi jawaban yang benar adalah A, B, dan D.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Pembeda Jenis Inflasi',
      shortcut: 'BBM/Bahan Baku naik = COST-PUSH (AS geser kiri). Uang beredar/Belanja masyarakat melonjak = DEMAND-PULL (AD geser kanan). Obat demand-pull = Naikkan Suku Bunga!',
      ruleOfThumb: 'Jangan pernah mencetak uang untuk mengatasi inflasi karena akan memicu hiperinflasi.',
      ttsScript: 'Trik cepat: kalau pemicunya biaya dan bahan baku, itu cost-push. Kalau pemicunya uang beredar dan belanja boros, itu demand-pull.'
    }
  },

  // SOAL 15 (BS - Indeks Laspeyres vs Paasche)
  {
    id: 15,
    category: 'Indeks Harga & Inflasi',
    categoryIndex: 5,
    type: 'BS',
    cognitiveLevel: 'HOTS - Penalaran',
    abilityIndicator: 'Mengevaluasi kelebihan dan kelemahan metode indeks harga Laspeyres dan Paasche.',
    ttsIntroduction: 'Menghitung indeks harga dapat menggunakan pembobot kuantitas tahun dasar atau tahun berjalan. Pahami perbedaan metode Laspeyres dan Paasche!',
    stimulus: {
      text: 'Dalam penyusunan Indeks Harga oleh lembaga statistik, terdapat dua metode pembobotan kuantitas yang paling banyak digunakan:\n1. Metode Laspeyres (IL): Menggunakan kuantitas tahun dasar (Q0) sebagai faktor penimbang / pembobot tetap.\n2. Metode Paasche (IP): Menggunakan kuantitas tahun berjalan (Qn) sebagai faktor penimbang / pembobot dinamis.',
      tables: [
        {
          title: 'Perbandingan Rumus Indeks Harga',
          headers: ['Metode', 'Rumus Matematis', 'Bobot Penimbang'],
          rows: [
            ['Laspeyres (IL)', 'IL = [ Σ(Pn x Q0) / Σ(P0 x Q0) ] x 100', 'Kuantitas Tahun Dasar (Q0)'],
            ['Paasche (IP)', 'IP = [ Σ(Pn x Qn) / Σ(P0 x Qn) ] x 100', 'Kuantitas Tahun Berjalan (Qn)']
          ]
        }
      ]
    },
    questionPrompt: 'Tentukan BENAR atau SALAH untuk setiap pernyataan metodologi indeks harga berikut!',
    statements: [
      {
        id: 's15_1',
        text: 'Metode Laspeyres memiliki kecenderungan memberikan hasil perhitungan indeks harga yang lebih tinggi (overestimate) karena mengabaikan substitusi barang oleh konsumen saat harga naik.',
        correctAnswer: true,
        explanation: 'Metode Laspeyres menggunakan keranjang belanja tahun dasar (Q0). Saat harga naik, konsumen sebenarnya mengurangi barang mahal dan beralih ke barang substitusi, sehingga IL cenderung overestimate (overstated).'
      },
      {
        id: 's15_2',
        text: 'Metode Paasche lebih mudah diperbarui setiap bulan daripada Laspeyres karena tidak memerlukan survei kuantitas konsumsi baru.',
        correctAnswer: false,
        explanation: 'Metode Paasche justru lebih sulit dan mahal karena setiap periode berjalan (Qn) petugas harus menyurvei ulang jumlah konsumsi terbaru masyarakat.'
      },
      {
        id: 's15_3',
        text: 'Indeks Drobisch and Bowley merupakan nilai rata-rata aritmatika dari Indeks Laspeyres dan Indeks Paasche untuk memperkecil bias perhitungan.',
        correctAnswer: true,
        explanation: 'Indeks Drobisch = (IL + IP) / 2, dirancang sebagai kompromi titik tengah untuk mereduksi bias overestimate Laspeyres dan underestimate Paasche.'
      }
    ],
    explanation: {
      problemUnderstanding: 'Memeriksa karakteristik pembobotan IL (Q0) vs IP (Qn) dan indeks kompromi Drobisch.',
      economicConcept: 'Laspeyres menggunakan Q0 (fixed basket) -> praktis tapi overestimate karena efek substitusi diabaikan. Paasche menggunakan Qn -> akurat merefleksikan pola konsumsi baru tapi repot survei dan cenderung underestimate. Drobisch merata-ratakan keduanya: (IL + IP)/2.',
      steps: [
        'Pernyataan 1: Karena Q0 tidak berubah, kenaikan harga komoditas tertentu dihitung seolah-olah masyarakat tetap membeli dalam jumlah yang sama padahal sudah mensubstitusi -> Hasil IL cenderung lebih tinggi (overestimate). (BENAR)',
        'Pernyataan 2: Paasche mewajibkan data Qn pada setiap periode pengukuran, yang sangat sulit dikumpulkan secara bulanan. Laspeyres justru yang lebih praktis karena Q0 tetap. (SALAH)',
        'Pernyataan 3: Rumus Indeks Drobisch & Bowley = (IL + IP) / 2 untuk menyeimbangkan deviasi. (BENAR)'
      ],
      statementAnalysis: [
        { id: 's15_1', statement: 'Laspeyres cenderung overestimate karena abaikan efek substitusi', isCorrect: true, reason: 'Benar, keranjang belanja tetap mengabaikan perilaku substitusi.' },
        { id: 's15_2', statement: 'Paasche lebih mudah diperbarui tanpa survei baru', isCorrect: false, reason: 'Salah, Paasche justru membutuhkan survei kuantitas baru setiap periode.' },
        { id: 's15_3', statement: 'Indeks Drobisch adalah rata-rata aritmatika IL dan IP', isCorrect: true, reason: 'Benar, formulanya tepat (IL + IP) / 2.' }
      ],
      conclusion: 'Status pernyataan: Pernyataan 1 = BENAR, Pernyataan 2 = SALAH, Pernyataan 3 = BENAR.',
      ttsScript: 'Ingat perbedaan mendasar Laspeyres dan Paasche. Laspeyres memakai kuantitas tahun lalu, sehingga praktis namun cenderung melebih-lebihkan kenaikan harga karena mengabaikan substitusi konsumen. Paasche memakai kuantitas tahun berjalan, sehingga repot karena harus survei ulang setiap saat. Jadi pernyataan satu benar, dua salah, dan tiga benar.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Laspeyres vs Paasche',
      shortcut: 'Laspeyres = Q0 (Tahun Dasar / Old), praktis, hasil overestimate. Paasche = Qn (Tahun Berjalan / Now), repot survei tiap periode. Drobisch = (IL + IP) / 2.',
      ruleOfThumb: 'Ingat huruf: L = Lalu (Q0), P = Present/Sekarang (Qn).',
      ttsScript: 'Jembatan keledai: L itu Lalu alias tahun dasar. P itu Present alias tahun berjalan sekarang.'
    }
  }
];
