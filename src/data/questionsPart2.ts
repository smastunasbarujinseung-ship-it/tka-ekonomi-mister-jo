import { Question } from '../types';

export const questionsPart2: Question[] = [
  // SOAL 16 (PG - Bank Sentral & Transmisi Moneter)
  {
    id: 16,
    category: 'Bank Sentral & Kebijakan Moneter',
    categoryIndex: 6,
    type: 'PG',
    cognitiveLevel: 'HOTS - Penalaran',
    abilityIndicator: 'Menganalisis mekanisme transmisi kebijakan moneter melalui suku bunga acuan (BI-Rate).',
    ttsIntroduction: 'Mari kita telusuri transmisi kebijakan moneter. Ketika Bank Indonesia menaikkan suku bunga acuan BI-Rate, bagaimana efek berantainya hingga menekan inflasi? Cermati alur logikanya.',
    stimulus: {
      text: 'Rapat Dewan Gubernur (RDG) Bank Indonesia memutuskan untuk menaikkan suku bunga acuan (BI-Rate) sebesar 50 basis poin (0,50%) menjadi 6,25%. Langkah ini diambil sebagai respons antisipatif (pre-emptive) untuk memitigasi risiko kenaikan ekspektasi inflasi dan menjaga stabilitas nilai tukar Rupiah dari tekanan penguatan Dolar AS.',
      tables: [
        {
          title: 'Keputusan Kebijakan Moneter Bank Indonesia',
          headers: ['Indikator Moneter', 'Kondisi Awal', 'Keputusan Terbaru'],
          rows: [
            ['Suku Bunga Acuan (BI-Rate)', '5,75%', '6,25% (+50 bps)'],
            ['Suku Bunga Deposit Facility', '5,00%', '5,50%'],
            ['Suku Bunga Lending Facility', '6,50%', '7,00%']
          ]
        }
      ]
    },
    questionPrompt: 'Manakah urutan alur transmisi moneter yang paling logis dan benar terkait dampak kenaikan BI-Rate tersebut terhadap perekonomian riil?',
    options: [
      { key: 'A', text: 'BI-Rate naik -> Suku bunga simpanan dan kredit perbankan naik -> Minat meminjam kredit usaha turun -> Pengeluaran investasi dan konsumsi agregat melambat -> Tekanan inflasi mereda.' },
      { key: 'B', text: 'BI-Rate naik -> Jumlah uang beredar di masyarakat bertambah cepat -> Permintaan agregat meningkat -> Inflasi melonjak tinggi.' },
      { key: 'C', text: 'BI-Rate naik -> Suku bunga kredit perbankan turun drastis -> Pengusaha berlomba mengambil pinjaman modal -> Produksi meningkat pesat.' },
      { key: 'D', text: 'BI-Rate naik -> Penjualan Surat Berharga Negara (SBN) dihentikan oleh BI -> Likuiditas perbankan melimpah ruah.' },
      { key: 'E', text: 'BI-Rate naik -> Nilai tukar Rupiah langsung terdepresiasi melemah karena investor menarik dananya keluar negeri.' }
    ],
    correctAnswer: 'A',
    explanation: {
      problemUnderstanding: 'Kenaikan BI-Rate adalah wujud kebijakan moneter kontraktif (tight money policy). Memeriksa alur transmisi dari pasar uang ke perbankan, sektor riil, hingga inflasi.',
      economicConcept: 'Kenaikan suku bunga acuan mentransmisikan kenaikan suku bunga deposito dan kredit komersial. Biaya modal (cost of capital) menjadi lebih mahal, menahan konsumsi kredit dan investasi. Permintaan agregat (AD) melambat, sehingga laju inflasi mereda dan rupiah stabil karena aliran modal masuk (capital inflow).',
      steps: [
        'Langkah 1: BI menaikkan BI-Rate sebesar 50 bps.',
        'Langkah 2: Bank komersial menaikkan suku bunga simpanan (menarik masyarakat menabung) dan menaikkan suku bunga kredit (membuat pinjaman lebih mahal).',
        'Langkah 3: Dunia usaha menunda ekspansi investasi dan masyarakat menahan belanja konsumsi barang mewah.',
        'Langkah 4: Permintaan agregat barang melambat, sehingga penjual tidak menaikkan harga sewenang-wenang -> Inflasi mereda.'
      ],
      optionAnalysis: [
        { key: 'A', text: 'Alur logis transmisi moneter kontraktif', isCorrect: true, reason: 'Tepat dan runut sesuai mekanisme transmisi kebijakan moneter jalur suku bunga.' },
        { key: 'B', text: 'Uang beredar bertambah cepat dan inflasi melonjak', isCorrect: false, reason: 'Salah, kenaikan suku bunga justru mengerem pertumbuhan jumlah uang beredar.' },
        { key: 'C', text: 'Suku bunga kredit turun drastis', isCorrect: false, reason: 'Salah, kenaikan suku bunga acuan menaikkan suku bunga kredit, bukan menurunkan.' },
        { key: 'D', text: 'Likuiditas perbankan melimpah ruah', isCorrect: false, reason: 'Salah, likuiditas perbankan mengetat.' },
        { key: 'E', text: 'Rupiah langsung terdepresiasi', isCorrect: false, reason: 'Salah, yield yang lebih tinggi menarik modal masuk (inflow) sehingga Rupiah terapresiasi.' }
      ],
      conclusion: 'Alur transmisi kebijakan moneter kontraktif: BI-Rate naik -> Bunga pinjaman naik -> Kredit tertahan -> Permintaan agregat melambat -> Inflasi terkendali.',
      ttsScript: 'Mari kita ikuti rantai peristiwanya. Saat BI menaikkan suku bunga acuan, perbankan akan ikut menaikkan suku bunga pinjaman. Karena pinjaman bank jadi lebih mahal, pengusaha dan konsumen akan menahan diri berutang. Hasilnya, belanja melambat dan tekanan harga atau inflasi mereda. Urutan yang paling tepat adalah opsi A.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Transmisi Moneter',
      shortcut: 'Suku Bunga NAIK -> Biaya Kredit MAHAL -> Pinjaman TURUN -> Belanja TURUN -> Inflasi TURUN. Ini rumus paten kebijakan kontraktif!',
      ruleOfThumb: 'Suku bunga acuan adalah "rem" perekonomian saat inflasi memanas.',
      ttsScript: 'Trik cepat: anggap suku bunga sebagai rem. Saat rem diinjak atau suku bunga naik, laju ekonomi melambat dan inflasi turun.'
    }
  },

  // SOAL 17 (PGK - Instrumen Moneter Kontraktif)
  {
    id: 17,
    category: 'Bank Sentral & Kebijakan Moneter',
    categoryIndex: 6,
    type: 'PGK',
    cognitiveLevel: 'HOTS - Evaluasi Kebijakan',
    abilityIndicator: 'Menganalisis instrumen-instrumen kebijakan moneter kontraktif untuk meredam inflasi.',
    ttsIntroduction: 'Bank sentral memiliki senjata moneter kuantitatif dan kualitatif. Manakah langkah yang termasuk kebijakan moneter kontraktif? Pilih semua yang tepat.',
    stimulus: {
      text: 'Perekonomian nasional mengalami gejala over-heating (pemanasan ekonomi) dengan laju inflasi melonjak mencapai 7,8% di atas target sasaran tahunan. Gubernur Bank Sentral bersama Dewan Komisioner merancang bauran kebijakan moneter ketat (tight money policy) untuk menyerap kelebihan likuiditas uang kartal dan giral yang beredar di masyarakat.',
      tables: [
        {
          title: 'Instrumen Pengendalian Likuiditas Otoritas Moneter',
          headers: ['No', 'Instrumen Moneter', 'Tindakan yang Dapat Diambil'],
          rows: [
            ['1', 'Operasi Pasar Terbuka (OPT)', 'Membeli atau menjual surat berharga berharga BI/SBN'],
            ['2', 'Politik Diskonto (Discount Policy)', 'Menaikkan atau menurunkan tingkat diskonto pinjaman bank'],
            ['3', 'Giro Wajib Minimum (Reserve Requirement)', 'Menaikkan atau menurunkan rasio cadangan wajib bank di BI'],
            ['4', 'Pengawasan Kredit Selektif', 'Memperketat atau mempermudah syarat pinjaman 5C'],
            ['5', 'Himbauan Moral (Moral Suasion)', 'Memberikan arahan langsung kepada pimpinan perbankan']
          ]
        }
      ]
    },
    questionPrompt: 'Manakah tindakan berikut yang tergolong sebagai instrumen kebijakan moneter KONTRAKTIF (menyerap likuiditas dan meredam inflasi)? (Pilih semua pernyataan yang benar!)',
    options: [
      { key: 'A', text: 'Menjual Sekuritas Rupiah Bank Indonesia (SRBI) dan Surat Berharga Negara (SBN) ke pasar uang.' },
      { key: 'B', text: 'Menaikkan tingkat suku bunga diskonto pinjaman darurat bagi perbankan komersial.' },
      { key: 'C', text: 'Menaikkan persentase rasio Giro Wajib Minimum (GWM) perbankan di Bank Indonesia.' },
      { key: 'D', text: 'Membeli kembali obligasi negara dari masyarakat dan lembaga keuangan untuk menyuntikkan uang kas.' },
      { key: 'E', text: 'Memperketat ketentuan dan persyaratan pemberian kredit perbankan (kredit selektif).' }
    ],
    correctAnswer: ['A', 'B', 'C', 'E'],
    explanation: {
      problemUnderstanding: 'Mengidentifikasi tindakan yang mengurangi jumlah uang beredar (kontraktif/tight money): 1) Jual surat berharga (uang diserap BI), 2) Naikkan diskonto, 3) Naikkan GWM (cadangan kas yang ditahan lebih besar), 4) Perketat kredit selektif.',
      economicConcept: 'Kebijakan moneter kontraktif bertujuan menyedot uang dari peredaran. Menjual surat berharga menukar uang masyarakat dengan kertas obligasi (uang masuk ke kas BI). Menaikkan GWM memaksa bank menahan dana di BI sehingga kapasitas menyalurkan kredit berkurang. Sebaliknya, MEMBELI surat berharga adalah kebijakan ekspansif (uang disuntikkan ke pasar).',
      steps: [
        'Opsi A: Menjual surat berharga menyerap uang masyarakat/bank masuk ke BI -> Kontraktif. (BENAR)',
        'Opsi B: Menaikkan diskonto membatasi bank komersial meminjam ke BI -> Kontraktif. (BENAR)',
        'Opsi C: Menaikkan rasio GWM membatasi kemampuan ekspansi kredit bank -> Kontraktif. (BENAR)',
        'Opsi D: Membeli obligasi adalah ekspansif (easy money policy), menyuntikkan likuiditas ke pasar. (SALAH)',
        'Opsi E: Memperketat persyaratan kredit menyaring peminjam sehingga uang beredar tidak membludak -> Kontraktif. (BENAR)'
      ],
      optionAnalysis: [
        { key: 'A', text: 'Menjual SRBI dan SBN', isCorrect: true, reason: 'Benar, BI menjual kertas dan menarik uang kas dari peredaran.' },
        { key: 'B', text: 'Menaikkan suku bunga diskonto', isCorrect: true, reason: 'Benar, membatasi likuiditas pinjaman antar-bank.' },
        { key: 'C', text: 'Menaikkan rasio GWM', isCorrect: true, reason: 'Benar, dana mengendap di BI bertambah, dana yang boleh dipinjamkan berkurang.' },
        { key: 'D', text: 'Membeli kembali obligasi negara', isCorrect: false, reason: 'Salah, ini adalah instrumen moneter ekspansif untuk menambah likuiditas.' },
        { key: 'E', text: 'Memperketat kredit selektif', isCorrect: true, reason: 'Benar, instrumen kualitatif untuk mengerem penyaluran uang.' }
      ],
      conclusion: 'Tindakan yang termasuk moneter kontraktif adalah A, B, C, dan E.',
      ttsScript: 'Mari kita bedakan instrumen pengetatan likuiditas. Ingat prinsipnya: agar uang beredar berkurang, bank sentral harus MENJUAL surat berharga, MENAIKKAN diskonto, MENAIKKAN cadangan wajib minimum, dan MEMPERKETAT syarat kredit. Membeli obligasi adalah kebalikannya, yaitu kebijakan ekspansif. Maka opsi yang tepat adalah A, B, C, dan E.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Moneter Kontraktif',
      shortcut: 'Semua serba DINAIKKAN atau DIJUAL: Jual SBN (uang ditarik), Naikkan Diskonto, Naikkan GWM, Perketat Kredit. Kalau MEMBELI = EKSPANSIF!',
      ruleOfThumb: 'Jual = Uang masuk ke BI (Kontraktif). Beli = Uang keluar dari BI ke pasar (Ekspansif).',
      ttsScript: 'Trik kilat Mister Jo: kalau kontraktif, bank sentral MENJUAL surat berharga dan MENAIKKAN semua suku bunga serta cadangan wajib.'
    }
  },

  // SOAL 18 (BS - Otoritas KSSK: BI, OJK, LPS)
  {
    id: 18,
    category: 'Bank Sentral & Kebijakan Moneter',
    categoryIndex: 6,
    type: 'BS',
    cognitiveLevel: 'HOTS - Penalaran',
    abilityIndicator: 'Membedakan fungsi dan kewenangan Bank Indonesia, OJK, dan LPS dalam Komite Stabilitas Sistem Keuangan (KSSK).',
    ttsIntroduction: 'Sistem keuangan Indonesia ditopang oleh pilar lembaga pengawas dalam KSSK. Pahami batasan wewenang BI, OJK, dan LPS pada soal berikut.',
    stimulus: {
      text: 'Dalam arsitektur sistem keuangan Indonesia pasca berlakunya Undang-Undang Pengembangan dan Penguatan Sektor Keuangan (UU P2SK), terdapat koordinasi antar-lembaga dalam wadah Komite Stabilitas Sistem Keuangan (KSSK) yang beranggotakan Menteri Keuangan, Gubernur Bank Indonesia, Ketua Dewan Komisioner OJK, dan Ketua Dewan Komisioner LPS.',
      tables: [
        {
          title: 'Mandat Utama Lembaga Stabilitas Sistem Keuangan',
          headers: ['Lembaga', 'Domain Kewenangan Utama', 'Instrumen Pengawasan'],
          rows: [
            ['Bank Indonesia (BI)', 'Kebijakan Moneter, Makroprudensial, Sistem Pembayaran', 'Suku Bunga, GWM, Rasio LTV, Sistem Kliring'],
            ['Otoritas Jasa Keuangan (OJK)', 'Pengaturan & Pengawasan Mikroprudensial Lembaga Keuangan', 'Kesehatan Individual Bank, Pasar Modal, Asuransi, Pinjol'],
            ['Lembaga Penjamin Simpanan (LPS)', 'Penjaminan Simpanan Nasabah & Resolusi Bank', 'Premi Penjaminan, Likuidasi Bank Gagal, Tingkat Bunga Penjaminan']
          ]
        }
      ]
    },
    questionPrompt: 'Tentukan BENAR atau SALAH untuk setiap pernyataan terkait kewenangan lembaga keuangan berikut!',
    statements: [
      {
        id: 's18_1',
        text: 'Otoritas Jasa Keuangan (OJK) bertugas mengawasi kesehatan individual perbankan, kepatuhan pasar modal, dan industri keuangan non-bank secara mikroprudensial.',
        correctAnswer: true,
        explanation: 'Sesuai UU OJK dan UU P2SK, OJK bertugas melakukan pengaturan dan pengawasan mikroprudensial terhadap kesehatan individual lembaga jasa keuangan.'
      },
      {
        id: 's18_2',
        text: 'Penetapan tingkat suku bunga acuan moneter nasional dan pengelolaan sistem pembayaran merupakan kewenangan eksklusif dari Lembaga Penjamin Simpanan (LPS).',
        correctAnswer: false,
        explanation: 'Penetapan suku bunga acuan dan sistem pembayaran adalah kewenangan Bank Indonesia (BI), sedangkan LPS bertugas menetapkan Tingkat Bunga Penjaminan (TBP) dan menjamin simpanan nasabah.'
      },
      {
        id: 's18_3',
        text: 'LPS menjamin simpanan nasabah perbankan dengan syarat memenuhi kriteria 3T: Tercatat dalam pembukuan bank, Tingkat bunga tidak melebihi suku bunga penjaminan LPS, dan Tidak terindikasi melakukan tindakan yang merugikan bank.',
        correctAnswer: true,
        explanation: 'Kriteria 3T adalah syarat mutlak penjaminan simpanan oleh LPS bagi nasabah di bank umum maupun BPR.'
      }
    ],
    explanation: {
      problemUnderstanding: 'Menganalisis pembagian tugas: BI (Moneter, Makroprudensial, Sistem Pembayaran), OJK (Mikroprudensial), LPS (Penjamin Simpanan & Resolusi Bank).',
      economicConcept: 'KSSK membagi peran secara terkoordinasi. BI menjaga stabilitas nilai rupiah dan sistem pembayaran makro. OJK mengawasi institusi secara individual (mikro). LPS menjamin simpanan nasabah hingga batas Rp2 Miliar per nasabah per bank dengan syarat 3T.',
      steps: [
        'Pernyataan 1: OJK fokus pada mikroprudensial (kesehatan masing-masing bank, pasar modal, asuransi, IKNB). (BENAR)',
        'Pernyataan 2: Kebijakan moneter dan sistem pembayaran adalah wewenang BI, bukan LPS. (SALAH)',
        'Pernyataan 3: Syarat klaim penjaminan simpanan LPS adalah 3T (Tercatat, Tidak melebihi suku bunga penjaminan, Tidak merugikan bank). (BENAR)'
      ],
      statementAnalysis: [
        { id: 's18_1', statement: 'OJK mengawasi kesehatan perbankan secara mikroprudensial', isCorrect: true, reason: 'Benar, ini tugas inti OJK.' },
        { id: 's18_2', statement: 'Moneter dan sistem pembayaran kewenangan eksklusif LPS', isCorrect: false, reason: 'Salah, itu adalah kewenangan Bank Indonesia.' },
        { id: 's18_3', statement: 'LPS menjamin simpanan dengan syarat 3T', isCorrect: true, reason: 'Benar, 3T adalah syarat baku penjaminan simpanan LPS.' }
      ],
      conclusion: 'Status pernyataan: Pernyataan 1 = BENAR, Pernyataan 2 = SALAH, Pernyataan 3 = BENAR.',
      ttsScript: 'Pahami pembagian peran ketiga lembaga ini: OJK mengurusi mikro kesehatan bank per bank, BI mengurusi moneter dan sistem pembayaran secara makro, sedangkan LPS menjamin uang tabungan nasabah dengan syarat tiga T. Oleh karena itu, pernyataan satu benar, dua salah, dan tiga benar.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Pembagian Tugas BI - OJK - LPS',
      shortcut: 'BI = Moneter & Makroprudensial & Uang Rupiah. OJK = Mikroprudensial Bank & Pasar Modal. LPS = Penjamin Tabungan (Maks 2 Miliar & Syarat 3T).',
      ruleOfThumb: 'Jangan tertukar: BI mengawasi makro sistemik, OJK mengawasi institusi individual.',
      ttsScript: 'Hafalkan: BI untuk makro dan moneter, OJK untuk mikro institusi keuangan, dan LPS untuk menjamin simpanan tabungan.'
    }
  },

  // SOAL 19 (PG - Analisis Postur APBN & Defisit)
  {
    id: 19,
    category: 'Kebijakan Fiskal & Perpajakan',
    categoryIndex: 7,
    type: 'PG',
    cognitiveLevel: 'HOTS - Analisis Data',
    abilityIndicator: 'Menganalisis postur APBN, menghitung defisit anggaran, dan mengevaluasi batasan rasio utang fiskal.',
    ttsIntroduction: 'Mari kita bedah postur Anggaran Pendapatan dan Belanja Negara (APBN). Perhatikan perbandingan total penerimaan dan belanja negara untuk menghitung defisit anggaran.',
    stimulus: {
      text: 'Berikut adalah ringkasan postur APBN suatu tahun anggaran yang disahkan oleh DPR dan Pemerintah (dalam triliun rupiah):\n- Penerimaan Pajak = Rp2.180\n- Penerimaan Negara Bukan Pajak (PNBP) = Rp490\n- Hibah = Rp10\n- Belanja Pemerintah Pusat = Rp2.250\n- Transfer ke Daerah (TKD) = Rp850\nDiketahui nilai Produk Domestik Bruto (PDB) nominal negara pada tahun tersebut diestimasikan sebesar Rp21.000 triliun.',
      tables: [
        {
          title: 'Ringkasan Postur Anggaran Pendapatan dan Belanja Negara (APBN)',
          headers: ['Pos Anggaran', 'Realisasi / Target (Triliun Rupiah)'],
          rows: [
            ['I. Pendapatan Negara', 'Pajak (2.180) + PNBP (490) + Hibah (10)'],
            ['II. Belanja Negara', 'Belanja Pusat (2.250) + Transfer Daerah (850)'],
            ['PDB Nominal', 'Rp21.000']
          ]
        }
      ]
    },
    questionPrompt: 'Berdasarkan data tersebut, berapakah besarnya defisit anggaran APBN dan berapa persentase rasionya terhadap PDB nominal?',
    options: [
      { key: 'A', text: 'Defisit Rp420 triliun dengan rasio 2,00% terhadap PDB.' },
      { key: 'B', text: 'Defisit Rp560 triliun dengan rasio 2,67% terhadap PDB.' },
      { key: 'C', text: 'Defisit Rp420 triliun dengan rasio 2,50% terhadap PDB.' },
      { key: 'D', text: 'Surplus Rp120 triliun dengan rasio 0,57% terhadap PDB.' },
      { key: 'E', text: 'Defisit Rp700 triliun dengan rasio 3,33% terhadap PDB.' }
    ],
    correctAnswer: 'A',
    explanation: {
      problemUnderstanding: 'Menghitung total pendapatan negara, total belanja negara, selisih anggaran (defisit), dan rasionya terhadap PDB nominal.',
      economicConcept: 'Pendapatan Negara = Pajak + PNBP + Hibah. Belanja Negara = Belanja Pemerintah Pusat + Transfer ke Daerah. Defisit = Belanja Negara - Pendapatan Negara. Rasio Defisit = (Defisit / PDB) x 100%. Batas aman defisit UU Keuangan Negara adalah maksimal 3% dari PDB.',
      steps: [
        '1. Total Pendapatan Negara = 2.180 + 490 + 10 = Rp2.680 triliun.',
        '2. Total Belanja Negara = 2.250 + 850 = Rp3.100 triliun.',
        '3. Keseimbangan Anggaran = Pendapatan - Belanja = 2.680 - 3.100 = -Rp420 triliun (Defisit Rp420 triliun).',
        '4. Rasio Defisit terhadap PDB = (420 / 21.000) x 100% = 0,02 x 100% = 2,00%.',
        '5. Nilai 2,00% berada di bawah batas maksimum konstitusional 3% PDB, sehingga fiskal tetap kredibel dan terkendali.'
      ],
      optionAnalysis: [
        { key: 'A', text: 'Defisit Rp420 triliun dengan rasio 2,00% terhadap PDB', isCorrect: true, reason: 'Tepat, 3.100 - 2.680 = 420 triliun, dan 420/21.000 = 2%.' },
        { key: 'B', text: 'Defisit Rp560 triliun', isCorrect: false, reason: 'Salah, salah menjumlahkan komponen PNBP atau hibah.' },
        { key: 'C', text: 'Defisit Rp420 triliun dengan rasio 2,50%', isCorrect: false, reason: 'Salah pembagian rasio terhadap PDB.' },
        { key: 'D', text: 'Surplus Rp120 triliun', isCorrect: false, reason: 'Salah, belanja lebih besar dari pendapatan sehingga posisi anggaran adalah defisit.' },
        { key: 'E', text: 'Defisit Rp700 triliun dengan rasio 3,33%', isCorrect: false, reason: 'Salah perhitungan komponen belanja.' }
      ],
      conclusion: 'APBN mengalami defisit sebesar Rp420 triliun dengan rasio 2,00% terhadap PDB.',
      ttsScript: 'Mari kita hitung postur APBN secara teliti. Total pendapatan negara adalah penerimaan pajak ditambah PNBP ditambah hibah, berjumlah 2.680 triliun. Total belanja negara adalah belanja pusat ditambah transfer ke daerah, berjumlah 3.100 triliun. Belanja lebih besar dari pendapatan dengan selisih 420 triliun, artinya anggaran mengalami defisit. Bagi 420 dengan PDB 21.000 triliun, didapat rasio tepat 2,00 persen. Jawabannya adalah A.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Postur APBN',
      shortcut: 'Pendapatan = 2.180 + 490 + 10 = 2.680. Belanja = 2.250 + 850 = 3.100. Defisit = 3.100 - 2.680 = 420. Rasio = 420 / 21.000 = 2%.',
      ruleOfThumb: 'Defisit = Belanja Total - Pendapatan Total. Rasio terhadap PDB selalu Defisit dibagi PDB.',
      ttsScript: 'Trik cepat: jumlahkan seluruh pendapatan, jumlahkan seluruh belanja, lalu cari selisihnya. Bagi selisih tersebut dengan nilai PDB.'
    }
  },

  // SOAL 20 (PGK - Kebijakan Fiskal Ekspansif)
  {
    id: 20,
    category: 'Kebijakan Fiskal & Perpajakan',
    categoryIndex: 7,
    type: 'PGK',
    cognitiveLevel: 'HOTS - Evaluasi Kebijakan',
    abilityIndicator: 'Mengevaluasi efektivitas bauran kebijakan fiskal ekspansif dalam mengatasi ancaman resesi ekonomi.',
    ttsIntroduction: 'Ketika ekonomi lesu atau terancam resesi, kementerian keuangan harus mengerahkan kebijakan fiskal ekspansif. Tentukan instrumen mana saja yang tepat untuk mendorong pertumbuhan!',
    stimulus: {
      text: 'Indikator makroekonomi menunjukkan perlambatan tajam: pertumbuhan ekonomi anjlok ke level 1,8%, indeks keyakinan konsumen turun, dan pemutusan hubungan kerja (PHK) meningkat di sektor manufaktur padat karya. Untuk mencegah resesi berlarut-larut, pemerintah menyiapkan paket stimulus fiskal darurat.',
      tables: [
        {
          title: 'Pilihan Kebijakan Fiskal Pemerintah',
          headers: ['Instrumen', 'Opsi Kebijakan A', 'Opsi Kebijakan B'],
          rows: [
            ['Pajak Penghasilan (PPh)', 'Dipotong / Diberi Insentif DTP', 'Dinaikkan tarifnya'],
            ['Belanja Infrastruktur Padat Karya', 'Diakselerasi dan diperluas', 'Dipangkas / Ditunda'],
            ['Bantuan Sosial Tunai (Bansos)', 'Ditingkatkan bagi kelompok rentan', 'Dihapuskan']
          ]
        }
      ]
    },
    questionPrompt: 'Manakah kebijakan berikut yang tergolong sebagai kebijakan fiskal EKSPANSIF yang efektif menggerakkan kembali perekonomian? (Pilih semua pernyataan yang benar!)',
    options: [
      { key: 'A', text: 'Memberikan insentif Pajak Penghasilan Ditanggung Pemerintah (PPh DTP) bagi pekerja industri padat karya.' },
      { key: 'B', text: 'Meningkatkan alokasi belanja proyek infrastruktur padat karya untuk menyerap tenaga kerja lokal.' },
      { key: 'C', text: 'Menaikkan tarif Pajak Pertambahan Nilai (PPN) dari 11% menjadi 15% untuk membatasi konsumsi masyarakat.' },
      { key: 'D', text: 'Memperluas jangkauan transfer bantuan sosial tunai kepada rumah tangga miskin untuk menopang daya beli dasar.' },
      { key: 'E', text: 'Memotong seluruh anggaran transfer ke daerah dan membekukan rekrutmen tenaga kerja di sektor publik.' }
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: {
      problemUnderstanding: 'Resesi ekonomi = defisit permintaan agregat (AD). Kebijakan fiskal ekspansif dilakukan dengan menambah belanja pemerintah (G naik, transfer naik) dan/atau memotong pajak (T turun).',
      economicConcept: 'Fiskal Ekspansif: 1) Belanja infrastruktur padat karya menciptakan lapangan kerja dan efek pengganda (multiplier effect). 2) Insentif pajak meningkatkan disposable income masyarakat. 3) Bantuan sosial menopang konsumsi marginal kelompok berpenghasilan rendah (MPC tinggi). Sebaliknya, menaikkan tarif PPN atau memangkas belanja publik adalah kebijakan kontraktif.',
      steps: [
        'Opsi A: Insentif pajak (pajak ditanggung pemerintah) menambah pendapatan siap belanja rumah tangga -> Fiskal Ekspansif. (BENAR)',
        'Opsi B: Belanja infrastruktur padat karya menyerap buruh dan menyuntikkan uang langsung ke sektor riil -> Fiskal Ekspansif. (BENAR)',
        'Opsi C: Menaikkan PPN membuat harga barang makin mahal dan menurunkan daya beli konsumen -> Fiskal Kontraktif. (SALAH)',
        'Opsi D: Bantuan sosial langsung meningkatkan pengeluaran konsumsi pangan dan kebutuhan primer -> Fiskal Ekspansif. (BENAR)',
        'Opsi E: Memotong transfer ke daerah dan membekukan anggaran justru memperparah kelesuan ekonomi -> Fiskal Kontraktif. (SALAH)'
      ],
      optionAnalysis: [
        { key: 'A', text: 'Memberikan insentif PPh DTP', isCorrect: true, reason: 'Benar, menurunkan beban pajak masyarakat.' },
        { key: 'B', text: 'Meningkatkan belanja infrastruktur padat karya', isCorrect: true, reason: 'Benar, meningkatkan belanja pemerintah (G) dan menyerap pengangguran.' },
        { key: 'C', text: 'Menaikkan tarif PPN', isCorrect: false, reason: 'Salah, menaikkan pajak adalah kebijakan kontraktif yang menekan belanja.' },
        { key: 'D', text: 'Memperluas bantuan sosial tunai', isCorrect: true, reason: 'Benar, menjaga daya beli dasar masyarakat rentan.' },
        { key: 'E', text: 'Memotong anggaran transfer ke daerah', isCorrect: false, reason: 'Salah, memotong belanja pemerintah memperparah krisis.' }
      ],
      conclusion: 'Kebijakan fiskal ekspansif yang tepat adalah A, B, dan D.',
      ttsScript: 'Kunci kebijakan fiskal saat resesi sangat jelas: pemerintah harus berani belanja lebih banyak dan melonggarkan pajak. Jangan malah menaikkan pajak PPN atau memangkas anggaran daerah di tengah krisis. Jadi langkah ekspansif yang benar adalah A, B, dan D.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Fiskal Ekspansif vs Kontraktif',
      shortcut: 'Ekspansif (Lawan Resesi): Belanja (G) NAIK, Pajak (T) TURUN, Bansos NAIK. Kontraktif (Lawan Inflasi Panas): Belanja TURUN, Pajak NAIK.',
      ruleOfThumb: 'Ingat rumus PDB: Y = C + I + G + (X - M). Kenaikan G dan penurunan T langsung mengerek Y.',
      ttsScript: 'Trik cepat: kalau lawan resesi, pemerintah harus menggelontorkan uang, yaitu memperbesar belanja dan memberi keringanan pajak.'
    }
  },

  // SOAL 21 (BS - PPh Orang Pribadi Berdasarkan UU HPP)
  {
    id: 21,
    category: 'Kebijakan Fiskal & Perpajakan',
    categoryIndex: 7,
    type: 'BS',
    cognitiveLevel: 'HOTS - Pemecahan Masalah',
    abilityIndicator: 'Menerapkan tarif progresif Pajak Penghasilan (PPh) Orang Pribadi Pasal 21 berdasarkan UU Harmonisasi Peraturan Perpajakan (UU HPP).',
    ttsIntroduction: 'Pajak penghasilan di Indonesia menerapkan sistem tarif progresif berlapis. Cermati simulasi perhitungan PPh Pasal 21 bagi wajib pajak orang pribadi.',
    stimulus: {
      text: 'Berdasarkan Undang-Undang Nomor 7 Tahun 2021 tentang Harmonisasi Peraturan Perpajakan (UU HPP), lapisan tarif Penghasilan Kena Pajak (PKP) Orang Pribadi diatur sebagai berikut:\n- Lapisan 1: Rentang PKP Rp0 s.d. Rp60.000.000 dikenakan tarif 5%\n- Lapisan 2: Di atas Rp60.000.000 s.d. Rp250.000.000 dikenakan tarif 15%\n- Lapisan 3: Di atas Rp250.000.000 s.d. Rp500.000.000 dikenakan tarif 25%\n- Lapisan 4: Di atas Rp500.000.000 s.d. Rp5.000.000.000 dikenakan tarif 30%\n- Lapisan 5: Di atas Rp5.000.000.000 dikenakan tarif 35%.\n\nSeorang pegawai swasta bernama Ilham memiliki Penghasilan Kena Pajak (PKP) setahun sebesar Rp80.000.000 (setelah dikurangi Penghasilan Tidak Kena Pajak / PTKP).',
      tables: [
        {
          title: 'Tarif PPh Orang Pribadi UU HPP',
          headers: ['Lapisan PKP', 'Rentang Penghasilan Kena Pajak', 'Tarif Pajak'],
          rows: [
            ['I', 'Rp0 - Rp60 Juta', '5%'],
            ['II', '> Rp60 Juta - Rp250 Juta', '15%'],
            ['III', '> Rp250 Juta - Rp500 Juta', '25%'],
            ['IV', '> Rp500 Juta - Rp5 Miliar', '30%'],
            ['V', '> Rp5 Miliar', '35%']
          ]
        }
      ]
    },
    questionPrompt: 'Tentukan BENAR atau SALAH untuk setiap pernyataan terkait penghitungan pajak Ilham berikut!',
    statements: [
      {
        id: 's21_1',
        text: 'Pajak terutang Ilham pada lapisan pertama (PKP hingga Rp60.000.000) adalah sebesar Rp3.000.000.',
        correctAnswer: true,
        explanation: 'Lapisan pertama: 5% x Rp60.000.000 = Rp3.000.000.'
      },
      {
        id: 's21_2',
        text: 'Total PPh Pasal 21 terutang Ilham dalam satu tahun dihitung dengan mengalikan seluruh PKP Rp80.000.000 langsung dengan tarif 15%, yaitu sebesar Rp12.000.000.',
        correctAnswer: false,
        explanation: 'Tarif progresif tidak boleh dikalikan langsung secara flat. Perhitungan harus berlapis: Lapisan 1 (5% x 60 jt = 3 jt) + Lapisan 2 (15% x 20 jt = 3 jt) = Total Rp6.000.000, bukan Rp12.000.000.'
      },
      {
        id: 's21_3',
        text: 'Sisa PKP Ilham yang dikenakan tarif lapisan kedua (15%) adalah sebesar Rp20.000.000 dengan pajak terutang sebesar Rp3.000.000.',
        correctAnswer: true,
        explanation: 'Sisa PKP masuk lapisan kedua: Rp80.000.000 - Rp60.000.000 = Rp20.000.000. Pajaknya: 15% x Rp20.000.000 = Rp3.000.000.'
      }
    ],
    explanation: {
      problemUnderstanding: 'Menghitung PPh terutang berlapis untuk PKP Rp80.000.000 berdasarkan UU HPP.',
      economicConcept: 'Prinsip tarif progresif mengenakan tarif marjinal yang meningkat hanya pada bagian penghasilan yang melampaui batas ambang tertentu, bukan pada seluruh penghasilan.',
      steps: [
        'Lapisan 1: 5% x Rp60.000.000 = Rp3.000.000. (Pernyataan 1 BENAR)',
        'Sisa PKP masuk Lapisan 2: Rp80.000.000 - Rp60.000.000 = Rp20.000.000. Pajak Lapisan 2 = 15% x Rp20.000.000 = Rp3.000.000. (Pernyataan 3 BENAR)',
        'Total Pajak Terutang = Rp3.000.000 + Rp3.000.000 = Rp6.000.000.',
        'Pernyataan 2 menyatakan mengalikan 15% langsung ke Rp80 juta (Rp12.000.000), ini adalah kekeliruan fatal yang mengabaikan sifat berlapis tarif progresif. (Pernyataan 2 SALAH)'
      ],
      statementAnalysis: [
        { id: 's21_1', statement: 'Pajak lapisan pertama adalah Rp3.000.000', isCorrect: true, reason: 'Benar, 5% x 60 juta = 3 juta rupiah.' },
        { id: 's21_2', statement: 'Total PPh dihitung langsung 15% x 80 juta = 12 juta', isCorrect: false, reason: 'Salah, tarif progresif dihitung bertingkat, total pajak yang benar adalah 6 juta rupiah.' },
        { id: 's21_3', statement: 'Sisa PKP lapisan kedua 20 juta pajaknya 3 juta', isCorrect: true, reason: 'Benar, 15% x 20 juta = 3 juta rupiah.' }
      ],
      conclusion: 'Status pernyataan: Pernyataan 1 = BENAR, Pernyataan 2 = SALAH, Pernyataan 3 = BENAR.',
      ttsScript: 'Jangan pernah menghitung pajak progresif dengan mengalikan langsung ke tarif tertinggi! PKP 80 juta harus dipecah: 60 juta pertama dikali 5 persen sama dengan 3 juta rupiah. Sisanya 20 juta dikali 15 persen sama dengan 3 juta rupiah. Total pajaknya adalah 6 juta rupiah, bukan 12 juta. Jadi pernyataan satu benar, dua salah, dan tiga benar.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Tarif PPh Progresif',
      shortcut: 'Pecah PKP bertingkat: Lapisan 1 maks 60 jt x 5% = 3 jt. Sisanya (80 jt - 60 jt = 20 jt) x 15% = 3 jt. Total PPh = 3 jt + 3 jt = 6 jt.',
      ruleOfThumb: 'Tarif progresif = sistem kue lapis, jangan pernah dikali langsung secara flat!',
      ttsScript: 'Trik cepat: potong dulu 60 juta pertama kena 5 persen, sisanya baru masuk lapisan berikutnya. Jumlahkan pajaknya di akhir.'
    }
  },

  // SOAL 22 (PG - Perhitungan SHU Koperasi)
  {
    id: 22,
    category: 'Badan Usaha & Koperasi',
    categoryIndex: 8,
    type: 'PG',
    cognitiveLevel: 'HOTS - Pemecahan Masalah',
    abilityIndicator: 'Menghitung pembagian Sisa Hasil Usaha (SHU) Koperasi berdasarkan jasa modal dan jasa anggota.',
    ttsIntroduction: 'Mari menghitung Sisa Hasil Usaha atau SHU Koperasi. Perhatikan pemisahan persentase antara Jasa Simpanan Modal dan Jasa Anggota Penjualan/Usaha.',
    stimulus: {
      text: 'Koperasi Simpan Pinjam "Makmur Bersama" pada akhir tahun buku 2025 memperoleh Sisa Hasil Usaha (SHU) bersih sebesar Rp60.000.000. Berdasarkan Anggaran Dasar/Anggaran Rumah Tangga (AD/ART), SHU dialokasikan antara lain untuk:\n- Jasa Modal / Simpanan = 20%\n- Jasa Usaha / Penjualan Anggota = 25%\nData keuangan koperasi:\n- Total Simpanan Pokok dan Simpanan Wajib seluruh anggota = Rp100.000.000\n- Total Omzet Penjualan/Pinjaman seluruh anggota = Rp150.000.000\n\nPak Santoso adalah seorang anggota koperasi yang memiliki:\n- Simpanan Pokok Rp1.000.000 dan Simpanan Wajib Rp4.000.000\n- Total transaksi belanja/jasa di koperasi selama setahun sebesar Rp6.000.000.',
      tables: [
        {
          title: 'Alokasi dan Data Keuangan Koperasi Makmur Bersama',
          headers: ['Pos Keuangan', 'Nilai Total Koperasi', 'Nilai Milik Pak Santoso'],
          rows: [
            ['Total SHU Bersih', 'Rp60.000.000', '-'],
            ['Alokasi Jasa Modal (20%)', 'Rp12.000.000', 'Simpanan: Rp5.000.000'],
            ['Alokasi Jasa Usaha (25%)', 'Rp15.000.000', 'Transaksi Belanja: Rp6.000.000'],
            ['Total Simpanan Koperasi', 'Rp100.000.000', '-'],
            ['Total Transaksi Koperasi', 'Rp150.000.000', '-']
          ]
        }
      ]
    },
    questionPrompt: 'Berdasarkan data di atas, berapakah total bagian SHU yang diterima Pak Santoso pada tahun buku tersebut?',
    options: [
      { key: 'A', text: 'Rp600.000' },
      { key: 'B', text: 'Rp1.200.000' },
      { key: 'C', text: 'Rp1.800.000' },
      { key: 'D', text: 'Rp2.400.000' },
      { key: 'E', text: 'Rp3.000.000' }
    ],
    correctAnswer: 'B',
    explanation: {
      problemUnderstanding: 'Menghitung SHU Pak Santoso yang terdiri dari Jasa Modal (JM) dan Jasa Usaha (JU).',
      economicConcept: '1) JM Pak Santoso = (Simpanan Pak Santoso / Total Simpanan Koperasi) x Alokasi Jasa Modal. 2) JU Pak Santoso = (Transaksi Pak Santoso / Total Transaksi Koperasi) x Alokasi Jasa Usaha. 3) Total SHU = JM + JU.',
      steps: [
        'Langkah 1: Hitung Alokasi Dana SHU Koperasi:',
        'Alokasi Jasa Modal = 20% x Rp60.000.000 = Rp12.000.000.',
        'Alokasi Jasa Usaha = 25% x Rp60.000.000 = Rp15.000.000.',
        'Langkah 2: Hitung Simpanan Pak Santoso = Simpanan Pokok + Simpanan Wajib = 1.000.000 + 4.000.000 = Rp5.000.000.',
        'Langkah 3: Hitung Jasa Modal (JM) Pak Santoso = (5.000.000 / 100.000.000) x 12.000.000 = 0,05 x 12.000.000 = Rp600.000.',
        'Langkah 4: Hitung Jasa Usaha (JU) Pak Santoso = (6.000.000 / 150.000.000) x 15.000.000 = 0,04 x 15.000.000 = Rp600.000.',
        'Langkah 5: Total SHU Pak Santoso = JM + JU = Rp600.000 + Rp600.000 = Rp1.200.000.'
      ],
      optionAnalysis: [
        { key: 'A', text: 'Rp600.000', isCorrect: false, reason: 'Salah, ini hanya nilai jasa modal atau jasa usahanya saja tanpa dijumlahkan.' },
        { key: 'B', text: 'Rp1.200.000', isCorrect: true, reason: 'Tepat, Jasa Modal (Rp600.000) + Jasa Usaha (Rp600.000) = Rp1.200.000.' },
        { key: 'C', text: 'Rp1.800.000', isCorrect: false, reason: 'Salah perhitungan persentase alokasi.' },
        { key: 'D', text: 'Rp2.400.000', isCorrect: false, reason: 'Salah menggunakan dasar pembagi total SHU langsung.' },
        { key: 'E', text: 'Rp3.000.000', isCorrect: false, reason: 'Salah menjumlahkan seluruh alokasi persentase.' }
      ],
      conclusion: 'Total SHU yang diterima Pak Santoso adalah Rp1.200.000 (Rp600.000 dari jasa modal dan Rp600.000 dari jasa usaha).',
      ttsScript: 'Mari kita hitung bagian SHU Pak Santoso. Pertama, bagian jasa modal adalah 5 juta dibagi 100 juta dikalikan alokasi jasa modal 12 juta, hasilnya 600 ribu rupiah. Kedua, bagian jasa usaha adalah 6 juta dibagi 150 juta dikalikan alokasi jasa usaha 15 juta, hasilnya juga 600 ribu rupiah. Jumlahkan keduanya, 600 ribu ditambah 600 ribu menjadi 1 juta 200 ribu rupiah. Jawabannya B.'
    },
    quickStrategy: {
      title: 'Strategi Kilat SHU Koperasi',
      shortcut: 'JM = (5 jt / 100 jt) x (20% x 60 jt) = 5% x 12 jt = 600 rb. JU = (6 jt / 150 jt) x (25% x 60 jt) = 4% x 15 jt = 600 rb. Total = 600 rb + 600 rb = 1,2 jt.',
      ruleOfThumb: 'SHU Anggota = Jasa Modal + Jasa Usaha/Anggota.',
      ttsScript: 'Trik cepat: cari porsi simpanan Pak Santoso lalu kalikan alokasi modal. Cari porsi transaksi lalu kalikan alokasi usaha. Tambahkan keduanya!'
    }
  },

  // SOAL 23 (PGK - Peran Badan Usaha BUMN, BUMS, Koperasi)
  {
    id: 23,
    category: 'Badan Usaha & Koperasi',
    categoryIndex: 8,
    type: 'PGK',
    cognitiveLevel: 'HOTS - Penalaran',
    abilityIndicator: 'Menganalisis peran dan karakteristik BUMN, BUMS, dan Koperasi dalam sistem perekonomian Indonesia berdasarkan UUD 1945.',
    ttsIntroduction: 'Perekonomian Indonesia dibangun di atas tiga pilar badan usaha: BUMN, BUMS, dan Koperasi. Telaah prinsip dasar dan fungsi masing-masing badan usaha.',
    stimulus: {
      text: 'Pasal 33 Undang-Undang Dasar 1945 menegaskan bahwa perekonomian disusun sebagai usaha bersama berdasar atas asas kekeluargaan, dan cabang-cabang produksi yang penting bagi negara serta menguasai hajat hidup orang banyak dikuasai oleh negara. Dalam praktiknya, perekonomian Indonesia dijalankan secara berdampingan oleh Badan Usaha Milik Negara (BUMN), Badan Usaha Milik Swasta (BUMS), dan Koperasi.',
      tables: [
        {
          title: 'Karakteristik Tiga Pilar Pelaku Ekonomi Nasional',
          headers: ['Badan Usaha', 'Landasan Operasional', 'Tujuan Pokok'],
          rows: [
            ['BUMN (Persero & Perum)', 'Kepemilikan modal mayoritas negara', 'Melayani hajat publik & kontribusi dividen kas negara'],
            ['BUMS (PT, CV, Firma)', 'Kepemilikan modal privat/swasta', 'Memaksimalkan profit, inovasi, dan efisiensi bisnis'],
            ['Koperasi', 'Asas kekeluargaan & gotong royong', 'Mensejahterakan seluruh anggota pada khususnya']
          ]
        }
      ]
    },
    questionPrompt: 'Berdasarkan regulasi dan karakteristik badan usaha di Indonesia, manakah pernyataan berikut yang BENAR? (Pilih semua pernyataan yang benar!)',
    options: [
      { key: 'A', text: 'BUMN berbentuk Perusahaan Umum (Perum) berfokus pada penyediaan kemanfaatan umum bagi masyarakat tanpa mengutamakan pencarian keuntungan semata.' },
      { key: 'B', text: 'BUMS berperan penting dalam membuka lapangan kerja, mendorong inovasi teknologi, serta menyumbang penerimaan pajak bagi negara.' },
      { key: 'C', text: 'Koperasi menganut prinsip one share one vote, di mana keputusan rapat anggota ditentukan oleh besarnya kepemilikan modal masing-masing anggota.' },
      { key: 'D', text: 'Koperasi berasaskan kekeluargaan di mana hak suara dalam Rapat Anggota Tahunan bersifat setara (one man one vote) tanpa memandang jumlah modal yang disetor.' },
      { key: 'E', text: 'BUMN Perseroan Terbatas (Persero) tidak diperbolehkan mencari keuntungan dan seluruh jasanya wajib digratiskan kepada publik.' }
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: {
      problemUnderstanding: 'Menganalisis karakteristik BUMN (Perum vs Persero), peran BUMS, dan prinsip hak suara Koperasi.',
      economicConcept: 'BUMN Perum fokus pada layanan publik (public service). BUMS memaksimalkan laba, inovasi, dan pajak. Koperasi berorientasi pada kesejahteraan anggota dengan prinsip demokratis: 1 orang 1 suara (one man one vote), BUKAN one share one vote seperti pada Perseroan Terbatas (PT). BUMN Persero berorientasi ganda: melayani publik sekaligus mencari laba untuk dividen negara.',
      steps: [
        'Evaluasi Opsi A: Perum dibentuk untuk menyelenggarakan kemanfaatan umum berupa penyediaan barang/jasa berkualitas dengan harga terjangkau. (BENAR)',
        'Evaluasi Opsi B: BUMS motor penggerak investasi swasta, membuka lapangan kerja, dan pembayar pajak terbesar. (BENAR)',
        'Evaluasi Opsi C: "One share one vote" adalah prinsip kepemilikan saham pada PT komersial, bukan koperasi. (SALAH)',
        'Evaluasi Opsi D: Prinsip demokrasi koperasi adalah "one man one vote" (satu anggota satu suara), regardless of modal yang disetor. (BENAR)',
        'Evaluasi Opsi E: BUMN Persero justru diwajibkan mencari laba untuk menyetor dividen ke APBN. (SALAH)'
      ],
      optionAnalysis: [
        { key: 'A', text: 'BUMN Perum fokus pada kemanfaatan umum', isCorrect: true, reason: 'Benar, tujuan Perum adalah kemanfaatan umum.' },
        { key: 'B', text: 'BUMS berperan membuka lapangan kerja dan pajak', isCorrect: true, reason: 'Benar, peran vital sektor swasta nasional.' },
        { key: 'C', text: 'Koperasi menganut one share one vote', isCorrect: false, reason: 'Salah, itu prinsip PT swasta, bukan koperasi.' },
        { key: 'D', text: 'Koperasi menganut prinsip one man one vote yang setara', isCorrect: true, reason: 'Benar, ciri utama demokrasi ekonomi koperasi.' },
        { key: 'E', text: 'BUMN Persero dilarang mencari keuntungan', isCorrect: false, reason: 'Salah, BUMN Persero bertujuan mengejar keuntungan.' }
      ],
      conclusion: 'Pernyataan yang tepat adalah A, B, dan D.',
      ttsScript: 'Perhatikan ciri khas koperasi yang paling membedakannya dari PT swasta. Di dalam koperasi, satu anggota memiliki satu hak suara, tanpa memandang berapa pun banyaknya simpanan modalnya. Sedangkan sistem kepemilikan modal menentukan suara itu hanya ada di PT swasta. Jadi pernyataan C salah, dan pernyataan yang tepat adalah A, B, dan D.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Badan Usaha & Koperasi',
      shortcut: 'Koperasi = Asas kekeluargaan, Hak suara ONE MAN ONE VOTE (Bukan modal!). BUMN Perum = Layanan umum. BUMN Persero = Cari laba (dividen). PT Swasta = One share one vote.',
      ruleOfThumb: 'Koperasi menjunjung demokrasi kesetaraan individu, bukan kekuatan modal.',
      ttsScript: 'Ingat kuncinya: koperasi itu satu orang satu suara, bukan satu saham satu suara. BUMN Persero tetap mencari untung untuk kas negara.'
    }
  },

  // SOAL 24 (BS - Keunggulan Komparatif David Ricardo)
  {
    id: 24,
    category: 'Perdagangan Internasional',
    categoryIndex: 9,
    type: 'BS',
    cognitiveLevel: 'HOTS - Penalaran',
    abilityIndicator: 'Mengevaluasi teori keunggulan mutlak dan komparatif serta keuntungan perdagangan internasional.',
    ttsIntroduction: 'Mengapa negara yang kalah produktif dalam memproduksi semua barang tetap dapat berdagang secara menguntungkan? David Ricardo menjelaskannya lewat Keunggulan Komparatif.',
    stimulus: {
      text: 'Tabel berikut menunjukkan hasil produksi per orang pekerja dalam satu hari kerja di Indonesia dan Vietnam untuk komoditas Beras dan Kain Tenun (tanpa perdagangan internasional):',
      tables: [
        {
          title: 'Produktivitas Tenaga Kerja per Hari',
          headers: ['Negara', 'Beras (Kg / Pekerja / Hari)', 'Kain Tenun (Meter / Pekerja / Hari)'],
          rows: [
            ['Indonesia', '60 kg', '30 meter'],
            ['Vietnam', '40 kg', '10 meter']
          ]
        }
      ]
    },
    questionPrompt: 'Tentukan BENAR atau SALAH untuk setiap pernyataan analisis keunggulan perdagangan berikut!',
    statements: [
      {
        id: 's24_1',
        text: 'Indonesia memiliki keunggulan mutlak (absolute advantage) atas Vietnam baik dalam produksi beras maupun kain tenun.',
        correctAnswer: true,
        explanation: 'Produktivitas Indonesia lebih unggul di kedua komoditas (60 kg beras > 40 kg, dan 30 m kain > 10 m), sehingga Indonesia memegang keunggulan mutlak di kedua barang.'
      },
      {
        id: 's24_2',
        text: 'Menurut Teori Keunggulan Komparatif David Ricardo, Indonesia memiliki keunggulan komparatif pada produksi kain tenun karena memiliki biaya peluang (opportunity cost) yang lebih rendah dibandingkan Vietnam.',
        correctAnswer: true,
        explanation: 'Di Indonesia: 1 meter kain mengorbankan 60/30 = 2 kg beras. Di Vietnam: 1 meter kain mengorbankan 40/10 = 4 kg beras. Karena biaya peluang Indonesia membuat kain (2 kg beras) lebih kecil dari Vietnam (4 kg beras), Indonesia unggul komparatif pada kain.'
      },
      {
        id: 's24_3',
        text: 'Kedua negara tidak akan memperoleh keuntungan apapun dari perdagangan internasional karena Vietnam kalah di kedua jenis komoditas.',
        correctAnswer: false,
        explanation: 'Menurut David Ricardo, meskipun Vietnam kalah mutlak di kedua komoditas, perdagangan tetap saling menguntungkan jika masing-masing negara berspesialisasi pada komoditas yang memiliki keunggulan komparatif (Indonesia spesialisasi kain, Vietnam spesialisasi beras).'
      }
    ],
    explanation: {
      problemUnderstanding: 'Menghitung dasar tukar dalam negeri (DTDN) dan opportunity cost masing-masing negara untuk Beras dan Kain.',
      economicConcept: 'Keunggulan Mutlak (Adam Smith): Siapa yang menghasilkan output lebih banyak per pekerja. Keunggulan Komparatif (David Ricardo): Siapa yang memiliki biaya peluang (pengorbanan barang lain) lebih rendah.',
      steps: [
        'Pernyataan 1: Indonesia menghasilkan 60 kg > 40 kg beras dan 30 m > 10 m kain. Jelas Indonesia unggul mutlak pada kedua produk. (BENAR)',
        'Pernyataan 2: Hitung Opportunity Cost 1 meter kain:',
        'Indonesia: 1 meter kain = 60/30 = 2 kg beras.',
        'Vietnam: 1 meter kain = 40/10 = 4 kg beras.',
        'Karena 2 kg < 4 kg, Indonesia membuat kain dengan pengorbanan beras lebih sedikit -> Indonesia unggul komparatif pada kain. (BENAR)',
        'Pernyataan 3: Opportunity cost 1 kg beras di Vietnam = 10/40 = 0,25 meter kain, sedangkan di Indonesia 1 kg beras = 30/60 = 0,5 meter kain. Vietnam unggul komparatif pada beras (0,25 < 0,5). Jika berspesialisasi dan bertukar, KEDUA NEGARA UNTUNG. (SALAH)'
      ],
      statementAnalysis: [
        { id: 's24_1', statement: 'Indonesia memiliki keunggulan mutlak pada kedua barang', isCorrect: true, reason: 'Benar, produktivitas fisik Indonesia lebih tinggi di beras maupun kain.' },
        { id: 's24_2', statement: 'Indonesia memiliki keunggulan komparatif pada kain tenun', isCorrect: true, reason: 'Benar, biaya peluang kain di Indonesia (2 kg beras) lebih murah dari Vietnam (4 kg beras).' },
        { id: 's24_3', statement: 'Kedua negara tidak memperoleh keuntungan berdagang', isCorrect: false, reason: 'Salah, hukum komparatif membuktikan kedua negara tetap untung melalui spesialisasi.' }
      ],
      conclusion: 'Status pernyataan: Pernyataan 1 = BENAR, Pernyataan 2 = BENAR, Pernyataan 3 = SALAH.',
      ttsScript: 'Ini adalah keindahan teori David Ricardo. Walaupun Vietnam kalah mutlak di kedua produk, Vietnam tetap memiliki keunggulan komparatif pada beras karena biaya peluang beras di Vietnam lebih murah. Sedangkan Indonesia unggul komparatif pada kain. Jika kedua negara berspesialisasi dan berdagang, keduanya akan menikmati keuntungan. Jadi pernyataan satu benar, dua benar, dan tiga salah.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Keunggulan Komparatif',
      shortcut: 'Cari biaya peluang tiap barang (bagi output barang lain dengan barang tersebut). Negara dengan angka pengorbanan LEBIH KECIL yang memegang keunggulan komparatif!',
      ruleOfThumb: 'Kalah mutlak bukan berarti tidak bisa berdagang. Perdagangan selalu menguntungkan selama rasio biaya peluangnya berbeda.',
      ttsScript: 'Trik cepat: cari siapa yang mengorbankan barang lain paling sedikit. Negara itulah yang memegang keunggulan komparatif.'
    }
  },

  // SOAL 25 (PG - Kurs Jual dan Kurs Beli Valas)
  {
    id: 25,
    category: 'Perdagangan Internasional',
    categoryIndex: 9,
    type: 'PG',
    cognitiveLevel: 'HOTS - Pemecahan Masalah',
    abilityIndicator: 'Menghitung konversi mata uang asing menggunakan kurs jual dan kurs beli dari sudut pandang bank/money changer.',
    ttsIntroduction: 'Banyak siswa sering tertukar antara kurs jual dan kurs beli. Ingat selalu aturan emasnya: posisikan dirimu sebagai pihak bank atau pedagang valas!',
    stimulus: {
      text: 'PT Surya Cemerlang di Jakarta mengimpor komponen elektronik canggih dari Tokyo senilai 5.000.000 Japanese Yen (JPY). Untuk melunasi tagihan tersebut, direktur keuangan perusahaan mendatangi Bank Mandiri Devisa untuk menukarkan uang Rupiah miliknya ke dalam mata uang Yen.\nPada papan pengumuman bank tertera kuotasi kurs mata uang sebagai berikut:\n- Kurs Jual JPY = Rp105,00 per 1 JPY\n- Kurs Beli JPY = Rp100,00 per 1 JPY\n- Kurs Tengah JPY = Rp102,50 per 1 JPY.',
      tables: [
        {
          title: 'Daftar Kurs Valuta Asing Bank Devisa',
          headers: ['Mata Uang Asing', 'Kurs Beli (Bank Beli Valas)', 'Kurs Jual (Bank Jual Valas)'],
          rows: [
            ['Japanese Yen (1 JPY)', 'Rp100,00', 'Rp105,00'],
            ['US Dollar (1 USD)', 'Rp15.600,00', 'Rp15.800,00']
          ]
        }
      ]
    },
    questionPrompt: 'Berapakah jumlah uang Rupiah yang harus diserahkan oleh PT Surya Cemerlang kepada pihak bank untuk melunasi tagihan impor 5.000.000 Yen tersebut?',
    options: [
      { key: 'A', text: 'Rp500.000.000' },
      { key: 'B', text: 'Rp512.500.000' },
      { key: 'C', text: 'Rp525.000.000' },
      { key: 'D', text: 'Rp550.000.000' },
      { key: 'E', text: 'Rp476.190.476' }
    ],
    correctAnswer: 'C',
    explanation: {
      problemUnderstanding: 'Perusahaan memiliki Rupiah dan butuh Yen untuk membayar impor. Bank menjual Yen kepada perusahaan. Menentukan kurs mana yang dipakai bank: Kurs Jual atau Kurs Beli.',
      economicConcept: 'Kurs Jual adalah harga saat BANK MENJUAL valas kepada nasabah. Kurs Beli adalah harga saat BANK MEMBELI valas dari nasabah. Karena perusahaan membutuhkan Yen (membeli Yen dari bank), maka bank menjual Yen menggunakan KURS JUAL.',
      steps: [
        'Identifikasi kebutuhan transaksi: Perusahaan menyerahkan Rupiah untuk membeli 5.000.000 Yen.',
        'Dari sudut pandang bank: Bank MENJUAL Yen kepada nasabah -> Gunakan Kurs Jual.',
        'Kurs Jual JPY = Rp105,00 per 1 JPY.',
        'Hitung Rupiah yang diserahkan = 5.000.000 JPY x Rp105,00 = Rp525.000.000.'
      ],
      optionAnalysis: [
        { key: 'A', text: 'Rp500.000.000', isCorrect: false, reason: 'Salah, ini jika menggunakan Kurs Beli (5.000.000 x 100).' },
        { key: 'B', text: 'Rp512.500.000', isCorrect: false, reason: 'Salah, ini jika menggunakan Kurs Tengah (5.000.000 x 102,50).' },
        { key: 'C', text: 'Rp525.000.000', isCorrect: true, reason: 'Tepat, bank menjual valas Yen dengan kurs jual Rp105 x 5.000.000 = Rp525.000.000.' },
        { key: 'D', text: 'Rp550.000.000', isCorrect: false, reason: 'Salah perhitungan nilai kurs.' },
        { key: 'E', text: 'Rp476.190.476', isCorrect: false, reason: 'Salah pembagian terbalik.' }
      ],
      conclusion: 'PT Surya Cemerlang harus menyerahkan uang Rupiah sebesar Rp525.000.000 kepada bank.',
      ttsScript: 'Jangan sampai tertukar kurs jual dan kurs beli! Ingat prinsip dasar Mister Jo: istilah jual dan beli selalu dilihat dari kacamata bank, bukan nasabah. Nasabah butuh mata uang Yen, berarti bank menjual Yen kepada nasabah. Karena bank menjual, maka gunakan Kurs Jual, yaitu seratus lima rupiah. Kalikan lima juta Yen dengan seratus lima, hasilnya adalah lima ratus dua puluh lima juta rupiah. Jawabannya C.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Kurs Bank',
      shortcut: 'Pegang Rupiah mau ke Valas (Impor/Wisata) = BANK JUAL VALAS -> Pakai Kurs JUAL (kurs yang lebih tinggi). Pegang Valas mau ke Rupiah (Ekspor/TKI) = BANK BELI VALAS -> Pakai Kurs BELI (kurs yang lebih rendah).',
      ruleOfThumb: 'Bank tidak mau rugi: Kurs Jual selalu lebih tinggi daripada Kurs Beli!',
      ttsScript: 'Trik cepat: kalau kamu bawa Rupiah ingin dapat mata uang asing, bank yang menjual kepadamu, jadi pakai Kurs Jual yang harganya lebih mahal.'
    }
  },

  // SOAL 26 (PGK - Proteksi Tarif & Kuota Impor)
  {
    id: 26,
    category: 'Perdagangan Internasional',
    categoryIndex: 9,
    type: 'PGK',
    cognitiveLevel: 'HOTS - Evaluasi Kebijakan',
    abilityIndicator: 'Mengevaluasi dampak ekonomi dari kebijakan proteksionisme (tarif bea masuk dan kuota impor).',
    ttsIntroduction: 'Pemerintah sering menerapkan instrumen proteksi perdagangan seperti tarif bea masuk dan kuota. Identifikasi dampak ekonominya terhadap konsumen, produsen lokal, dan kas negara.',
    stimulus: {
      text: 'Untuk melindungi industri baja domestik yang terancam gulung tikar akibat banjir impor baja murah dari luar negeri, pemerintah menerbitkan kebijakan pengenaan tarif bea masuk impor sebesar 25% serta pemberlakuan kuota impor maksimum 500.000 ton per tahun.',
      tables: [
        {
          title: 'Instrumen Kebijakan Perdagangan Luar Negeri',
          headers: ['Instrumen Proteksi', 'Mekanisme Kebijakan', 'Tujuan Kebijakan'],
          rows: [
            ['Tarif Bea Masuk (25%)', 'Pajak impor per unit barang masuk', 'Menaikkan harga produk impor di pasar dalam negeri'],
            ['Kuota Impor (500.000 Ton)', 'Pembatasan kuantitas fisik impor', 'Membatasi volume pasokan barang impor']
          ]
        }
      ]
    },
    questionPrompt: 'Berdasarkan teori perdagangan internasional, manakah konsekuensi ekonomi berikut yang BENAR terkait penerapan kebijakan proteksi tersebut? (Pilih semua pernyataan yang benar!)',
    options: [
      { key: 'A', text: 'Harga baja di pasar dalam negeri akan meningkat sehingga surplus konsumen mengalami penurunan.' },
      { key: 'B', text: 'Produsen baja domestik terlindungi dan menikmati kenaikan surplus produsen serta volume penjualan.' },
      { key: 'C', text: 'Penerimaan kas negara akan bertambah melalui penerimaan bea masuk dari baja impor yang tetap masuk.' },
      { key: 'D', text: 'Masyarakat konsumen dan industri pengguna baja dapat membeli bahan baku dengan harga yang jauh lebih murah daripada sebelumnya.' },
      { key: 'E', text: 'Secara makroekonomi, kebijakan tarif impor menimbulkan kerugian bobot mati (deadweight loss) akibat inefisiensi alokasi sumber daya.' }
    ],
    correctAnswer: ['A', 'B', 'C', 'E'],
    explanation: {
      problemUnderstanding: 'Menganalisis efek parsial tarif impor terhadap kesejahteraan: Surplus Konsumen turun, Surplus Produsen naik, Penerimaan Pemerintah naik, timbul Deadweight Loss (DWL).',
      economicConcept: 'Pengenaan tarif bea masuk menaikkan harga pasar domestik dari P_dunia ke P_dunia + Tarif. Akibatnya: 1) Konsumen membayar lebih mahal (surplus konsumen berkurang), 2) Produsen lokal menjual pada harga lebih tinggi (surplus produsen bertambah), 3) Pemerintah menerima pendapatan tarif (pajak x kuantitas impor), 4) Terjadi inefisiensi produksi dan konsumsi yang disebut Deadweight Loss (DWL).',
      steps: [
        'Opsi A: Harga baja domestik naik karena beban tarif -> Surplus konsumen berkurang. (BENAR)',
        'Opsi B: Produsen lokal terlindungi dari persaingan impor murah -> Surplus produsen meningkat. (BENAR)',
        'Opsi C: Tarif 25% masuk ke kas negara sebagai pos Penerimaan Bea Masuk APBN. (BENAR)',
        'Opsi D: Konsumen justru membayar lebih mahal, bukan lebih murah. (SALAH)',
        'Opsi E: Segitiga DWL muncul karena distorsi pasar (kehilangan efisiensi alokasi). (BENAR)'
      ],
      optionAnalysis: [
        { key: 'A', text: 'Harga naik dan surplus konsumen turun', isCorrect: true, reason: 'Benar, konsumen harus membayar lebih mahal.' },
        { key: 'B', text: 'Produsen baja domestik menikmati kenaikan surplus', isCorrect: true, reason: 'Benar, produsen lokal terlindungi.' },
        { key: 'C', text: 'Penerimaan kas negara bertambah dari bea masuk', isCorrect: true, reason: 'Benar, tarif menjadi pendapatan negara.' },
        { key: 'D', text: 'Konsumen membeli dengan harga jauh lebih murah', isCorrect: false, reason: 'Salah, tarif justru menaikkan harga bagi konsumen.' },
        { key: 'E', text: 'Menimbulkan deadweight loss / inefisiensi alokasi', isCorrect: true, reason: 'Benar, konsep baku efisiensi perdagangan internasional.' }
      ],
      conclusion: 'Pernyataan yang tepat adalah A, B, C, dan E.',
      ttsScript: 'Mari kita teliti dampak proteksionisme. Saat tarif impor diberlakukan, harga di dalam negeri naik. Produsen lokal senang karena terlindungi dan pemerintah mendapat penerimaan bea masuk, namun konsumen dirugikan karena harus membayar lebih mahal. Selain itu, muncul kerugian bobot mati atau deadweight loss. Jadi pernyataan A, B, C, dan E adalah benar.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Dampak Tarif Impor',
      shortcut: 'Tarif Impor: Harga NAIK -> Surplus Konsumen TURUN, Surplus Produsen NAIK, Kas Negara NAIK, Muncul DEADWEIGHT LOSS (DWL). Konsumen TIDAK PERNAH diuntungkan oleh tarif!',
      ruleOfThumb: 'Tarif melindungi produsen lokal, tetapi mengorbankan kesejahteraan konsumen.',
      ttsScript: 'Trik cepat: tarif impor itu menguntungkan produsen lokal dan kas negara, tetapi selalu merugikan konsumen dalam negeri.'
    }
  },

  // SOAL 27 (BS - Persamaan Dasar Akuntansi)
  {
    id: 27,
    category: 'Akuntansi Dasar',
    categoryIndex: 10,
    type: 'BS',
    cognitiveLevel: 'HOTS - Penalaran',
    abilityIndicator: 'Menganalisis pengaruh berbagai transaksi keuangan terhadap Persamaan Dasar Akuntansi (Aset = Liabilitas + Ekuitas).',
    ttsIntroduction: 'Fondasi utama akuntansi adalah Persamaan Dasar Akuntansi: Aset sama dengan Liabilitas ditambah Ekuitas. Evaluasi keseimbangan neraca pada 3 transaksi berikut.',
    stimulus: {
      text: 'Bengkel Motor "Jaya Abadi" memulai kegiatan usahanya dengan modal awal uang tunai Rp50.000.000. Selama bulan pertama operasional, terjadi beberapa transaksi keuangan berikut:\n1. Membeli perlengkapan bengkel seharga Rp6.000.000 secara kredit dari Toko Sparepart Sentosa.\n2. Menerima pendapatan jasa perbaikan motor secara tunai sebesar Rp4.500.000.\n3. Pemilik bengkel mengambil uang kas sebesar Rp1.000.000 untuk keperluan pribadi (prive).',
      tables: [
        {
          title: 'Format Persamaan Dasar Akuntansi',
          headers: ['Transaksi', 'Aset (Kas, Perlengkapan)', 'Liabilitas (Utang)', 'Ekuitas (Modal Pemilik)'],
          rows: [
            ['Modal Awal', 'Kas (+50 Juta)', '-', 'Modal (+50 Juta)'],
            ['1. Beli Perlengkapan Kredit', 'Perlengkapan (+6 Juta)', 'Utang Usaha (+6 Juta)', '-'],
            ['2. Pendapatan Jasa Tunai', 'Kas (+4,5 Juta)', '-', 'Modal (+4,5 Juta)'],
            ['3. Prive Pemilik', 'Kas (-1 Juta)', '-', 'Modal (-1 Juta)']
          ]
        }
      ]
    },
    questionPrompt: 'Tentukan BENAR atau SALAH untuk setiap pernyataan analisis transaksi akuntansi berikut!',
    statements: [
      {
        id: 's27_1',
        text: 'Transaksi pembelian perlengkapan secara kredit sebesar Rp6.000.000 mengakibatkan Aset (Perlengkapan) bertambah dan Liabilitas (Utang Usaha) bertambah masing-masing Rp6.000.000 tanpa memengaruhi Ekuitas modal.',
        correctAnswer: true,
        explanation: 'Pembelian kredit menambah aset perlengkapan di sisi kiri dan menambah utang usaha di sisi kanan; ekuitas modal tidak berubah.'
      },
      {
        id: 's27_2',
        text: 'Penerimaan pendapatan jasa tunai sebesar Rp4.500.000 menambah Aset Kas di sisi debit dan sekaligus mengurangi Liabilitas di sisi kredit.',
        correctAnswer: false,
        explanation: 'Penerimaan pendapatan jasa menambah Kas (Aset) dan menambah Ekuitas Modal, bukan mengurangi liabilitas.'
      },
      {
        id: 's27_3',
        text: 'Pengambilan uang untuk keperluan pribadi (prive) sebesar Rp1.000.000 mengakibatkan Aset Kas berkurang dan Ekuitas Modal pemilik berkurang masing-masing sebesar Rp1.000.000.',
        correctAnswer: true,
        explanation: 'Prive mengurangi kas perusahaan dan mengurangi saldo ekuitas pemilik bengkel.'
      }
    ],
    explanation: {
      problemUnderstanding: 'Menganalisis efek 3 transaksi pada rumus Aset = Liabilitas + Ekuitas.',
      economicConcept: '1) Beli perlengkapan kredit: Perlengkapan (+) Rp6 Jt = Utang (+) Rp6 Jt. 2) Terima pendapatan jasa: Kas (+) Rp4,5 Jt = Modal (+) Rp4,5 Jt. 3) Prive: Kas (-) Rp1 Jt = Modal (-) Rp1 Jt.',
      steps: [
        'Pernyataan 1: Sisi Aset naik 6 juta (perlengkapan), sisi Liabilitas naik 6 juta (utang). Keseimbangan terjaga, modal tidak berubah. (BENAR)',
        'Pernyataan 2: Pendapatan menambah kas dan MENAMBAH EKUITAS modal, bukan mengurangi liabilitas. Pernyataan menyebut mengurangi liabilitas. (SALAH)',
        'Pernyataan 3: Prive adalah penarikan dana pemilik yang mengurangi kas aset dan mengurangi ekuitas modal. (BENAR)'
      ],
      statementAnalysis: [
        { id: 's27_1', statement: 'Beli perlengkapan kredit: Perlengkapan (+) dan Utang (+)', isCorrect: true, reason: 'Benar, aset naik 6 juta diimbangi utang naik 6 juta.' },
        { id: 's27_2', statement: 'Pendapatan jasa menambah kas dan mengurangi liabilitas', isCorrect: false, reason: 'Salah, pendapatan menambah ekuitas modal, bukan liabilitas.' },
        { id: 's27_3', statement: 'Prive mengurangi kas dan mengurangi modal', isCorrect: true, reason: 'Benar, prive mendebit modal dan mengkredit kas.' }
      ],
      conclusion: 'Status pernyataan: Pernyataan 1 = BENAR, Pernyataan 2 = SALAH, Pernyataan 3 = BENAR.',
      ttsScript: 'Perhatikan hubungan dalam persamaan dasar akuntansi. Ketika kamu menerima uang pendapatan tunai, kas kamu bertambah dan modal usahamu juga bertambah, tidak ada kaitannya dengan utang atau liabilitas. Sedangkan prive selalu mengurangi kas dan mengurangi modal. Jadi pernyataan satu benar, dua salah, dan tiga benar.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Persamaan Akuntansi',
      shortcut: 'Ingat rumus emas: ASET = LIABILITAS + EKUITAS. Pendapatan = Menambah Modal (+). Beban & Prive = Mengurangi Modal (-). Beli Kredit = Aset (+) dan Utang (+).',
      ruleOfThumb: 'Kedua sisi harus selalu seimbang dalam setiap transaksi tanpa kecuali.',
      ttsScript: 'Trik cepat: pendapatan selalu menambah modal, beban dan prive selalu mengurangi modal. Beli kredit menambah perlengkapan dan menambah utang.'
    }
  },

  // SOAL 28 (PG - Jurnal Umum Pelunasan Piutang dengan Potongan)
  {
    id: 28,
    category: 'Akuntansi Dasar',
    categoryIndex: 10,
    type: 'PG',
    cognitiveLevel: 'HOTS - Pemecahan Masalah',
    abilityIndicator: 'Menganalisis pencatatan transaksi pelunasan piutang dengan syarat potongan penjualan (termin kas) ke dalam jurnal umum.',
    ttsIntroduction: 'Pencatatan jurnal umum menuntut ketelitian posisi Debet dan Kredit. Cermati transaksi pelunasan piutang yang memperoleh potongan tunai termin 2/10, n/30.',
    stimulus: {
      text: 'Pada tanggal 5 Mei 2025, Percetakan "Grafika Nusantara" menyelesaikan jasa cetak buku senilai Rp10.000.000 untuk CV Mandiri dengan syarat pembayaran 2/10, n/30 (faktur no. 104).\nPada tanggal 13 Mei 2025 (8 hari setelah tanggal transaksi), CV Mandiri melunasi seluruh kewajibannya secara tunai kepada Percetakan Grafika Nusantara.',
      tables: [
        {
          title: 'Ketentuan Termin Pembayaran (2/10, n/30)',
          headers: ['Simbol Syarat', 'Arti / Makna Ketentuan'],
          rows: [
            ['2/10', 'Mendapat potongan tunai 2% jika dilunasi dalam jangka waktu 10 hari'],
            ['n/30', 'Jangka waktu pelunasan neto paling lambat adalah 30 hari'],
            ['Pelunasan', 'Dilunasi hari ke-8 (masuk dalam periode diskon)']
          ]
        }
      ]
    },
    questionPrompt: 'Bagaimanakah pencatatan jurnal umum yang benar pada buku Percetakan Grafika Nusantara saat menerima pelunasan pada tanggal 13 Mei 2025?',
    options: [
      { key: 'A', text: '(D) Kas Rp9.800.000; (D) Potongan Penjualan Rp200.000; (K) Piutang Usaha Rp10.000.000' },
      { key: 'B', text: '(D) Kas Rp10.000.000; (K) Pendapatan Jasa Rp9.800.000; (K) Potongan Penjualan Rp200.000' },
      { key: 'C', text: '(D) Piutang Usaha Rp10.000.000; (K) Kas Rp9.800.000; (K) Potongan Penjualan Rp200.000' },
      { key: 'D', text: '(D) Kas Rp9.800.000; (K) Piutang Usaha Rp9.800.000' },
      { key: 'E', text: '(D) Kas Rp10.200.000; (K) Piutang Usaha Rp10.000.000; (K) Pendapatan Bunga Rp200.000' }
    ],
    correctAnswer: 'A',
    explanation: {
      problemUnderstanding: 'CV Mandiri melunasi piutang tanggal 13 Mei (8 hari setelah 5 Mei, masih dalam interval 10 hari). Berhak atas diskon 2%. Menjurnal di sisi penjual (Grafika Nusantara).',
      economicConcept: 'Potongan Penjualan (Sales Discount) adalah akun kontra pendapatan bersaldo normal DEBET. Kas yang diterima berkurang sebesar diskon. Piutang Usaha dieliminasi penuh di sisi KREDIT.',
      steps: [
        '1. Cek periode diskon: 13 Mei - 5 Mei = 8 hari (<= 10 hari) -> Berhak diskon 2%.',
        '2. Hitung Potongan Penjualan = 2% x Rp10.000.000 = Rp200.000.',
        '3. Hitung Kas yang diterima bersih = Rp10.000.000 - Rp200.000 = Rp9.800.000.',
        '4. Piutang Usaha yang lunas sebesar nilai nominal penuh = Rp10.000.000.',
        '5. Susun Jurnal Umum:',
        '   (Debet) Kas = Rp9.800.000',
        '   (Debet) Potongan Penjualan = Rp200.000',
        '   (Kredit) Piutang Usaha = Rp10.000.000',
        'Total Debet = 9,8 jt + 0,2 jt = 10 jt. Total Kredit = 10 jt (Seimbang / Balance!).'
      ],
      optionAnalysis: [
        { key: 'A', text: '(D) Kas Rp9,8 Jt; (D) Potongan Penjualan Rp200 Rb; (K) Piutang Usaha Rp10 Jt', isCorrect: true, reason: 'Tepat dan sesuai standar akuntansi berterima umum.' },
        { key: 'B', text: '(D) Kas Rp10 Jt', isCorrect: false, reason: 'Salah, kas yang diterima bukan 10 juta karena ada diskon tunai.' },
        { key: 'C', text: '(D) Piutang Usaha', isCorrect: false, reason: 'Salah, piutang usaha yang dilunasi harus berada di sisi kredit.' },
        { key: 'D', text: 'Tanpa mencatat potongan penjualan', isCorrect: false, reason: 'Salah, mengabaikan akun potongan penjualan sehingga piutang tidak impas.' },
        { key: 'E', text: 'Mencatat pendapatan bunga', isCorrect: false, reason: 'Salah, diskon pembayaran bukan bunga tambahan.' }
      ],
      conclusion: 'Jurnal yang benar: (D) Kas Rp9.800.000; (D) Potongan Penjualan Rp200.000; (K) Piutang Usaha Rp10.000.000.',
      ttsScript: 'Mari kita analisis jurnal pelunasannya. Karena dibayar pada hari ke-8, pelanggan mendapat diskon 2 persen dari 10 juta yaitu 200 ribu rupiah. Uang kas yang masuk ke dompet kita adalah 9 juta 800 ribu di posisi Debet. Potongan penjualan 200 ribu juga di Debet sebagai pengurang omzet. Dan piutang usaha berkurang tuntas 10 juta di posisi Kredit. Jawaban yang tepat adalah opsi A.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Jurnal Potongan Penjualan',
      shortcut: 'Potongan Penjualan SELALU di sisi DEBET menemani Kas! Piutang Usaha di KREDIT sebesar nilai total penuh.',
      ruleOfThumb: 'Kunci: Kas (D) + Potongan Penjualan (D) = Piutang Usaha (K).',
      ttsScript: 'Trik cepat: ingat kalau potongan penjualan selalu duduk berdampingan di sisi Debet bersama Kas, dan piutang di Kredit sebesar nilai penuhnya.'
    }
  },

  // SOAL 29 (PGK - Laporan Laba Rugi & Neraca)
  {
    id: 29,
    category: 'Akuntansi Dasar',
    categoryIndex: 10,
    type: 'PGK',
    cognitiveLevel: 'HOTS - Analisis Data',
    abilityIndicator: 'Menganalisis komponen laporan laba rugi dan laporan perubahan ekuitas untuk menentukan laba bersih dan modal akhir.',
    ttsIntroduction: 'Laporan keuangan saling mengait satu sama lain. Laba bersih dari laporan laba rugi akan mengalir menambah modal di neraca. Uji analisismu pada data berikut.',
    stimulus: {
      text: 'Berikut adalah data keuangan Kantor Konsultan Hukum "Advokat Keadilan" per 31 Desember 2025:\n- Pendapatan Jasa Konsultasi = Rp120.000.000\n- Beban Gaji Karyawan = Rp45.000.000\n- Beban Sewa Kantor = Rp15.000.000\n- Beban Listrik, Air, dan Internet = Rp5.000.000\n- Beban Penyusutan Peralatan = Rp4.000.000\n- Modal Awal 1 Januari 2025 = Rp80.000.000\n- Pengambilan Prive oleh Pemilik = Rp10.000.000.',
      tables: [
        {
          title: 'Neraca Saldo Disesuaikan Kantor Advokat Keadilan',
          headers: ['Akun Keuangan', 'Nominal (Rupiah)', 'Klasifikasi Akun'],
          rows: [
            ['Pendapatan Jasa', 'Rp120.000.000', 'Pendapatan Nominal'],
            ['Beban Gaji', 'Rp45.000.000', 'Beban Usaha'],
            ['Beban Sewa Kantor', 'Rp15.000.000', 'Beban Usaha'],
            ['Beban Listrik, Air & Internet', 'Rp5.000.000', 'Beban Usaha'],
            ['Beban Penyusutan Peralatan', 'Rp4.000.000', 'Beban Usaha'],
            ['Modal Awal (1 Jan 2025)', 'Rp80.000.000', 'Ekuitas Awal'],
            ['Prive Pemilik', 'Rp10.000.000', 'Pengurang Ekuitas']
          ]
        }
      ]
    },
    questionPrompt: 'Berdasarkan data keuangan tersebut, manakah simpulan akuntansi berikut yang BENAR? (Pilih semua pernyataan yang benar!)',
    options: [
      { key: 'A', text: 'Total Beban Usaha operasional selama tahun 2025 adalah sebesar Rp69.000.000.' },
      { key: 'B', text: 'Laba Bersih usaha (Net Income) yang diperoleh konsultan hukum adalah Rp51.000.000.' },
      { key: 'C', text: 'Penambahan bersih modal (kenaikan ekuitas) setelah dikurangi prive adalah sebesar Rp41.000.000.' },
      { key: 'D', text: 'Modal Akhir per 31 Desember 2025 yang dilaporkan pada Laporan Posisi Keuangan adalah Rp121.000.000.' },
      { key: 'E', text: 'Pengambilan prive sebesar Rp10.000.000 dicatat sebagai beban operasional dalam Laporan Laba Rugi.' }
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: {
      problemUnderstanding: 'Menghitung Total Beban, Laba Bersih (Pendapatan - Beban), Kenaikan Modal (Laba - Prive), dan Modal Akhir (Modal Awal + Kenaikan Modal).',
      economicConcept: 'Laba Bersih = Pendapatan - Beban Usaha. Modal Akhir = Modal Awal + Laba Bersih - Prive. Prive BUKAN beban usaha dan TIDAK MASUK ke Laporan Laba Rugi, melainkan pengurang ekuitas di Laporan Perubahan Modal.',
      steps: [
        '1. Total Beban Usaha = 45 jt + 15 jt + 5 jt + 4 jt = Rp69.000.000. (Opsi A BENAR)',
        '2. Laba Bersih = Pendapatan (120 jt) - Total Beban (69 jt) = Rp51.000.000. (Opsi B BENAR)',
        '3. Kenaikan Ekuitas Bersih = Laba Bersih (51 jt) - Prive (10 jt) = Rp41.000.000. (Opsi C BENAR)',
        '4. Modal Akhir = Modal Awal (80 jt) + Kenaikan Bersih (41 jt) = Rp121.000.000. (Opsi D BENAR)',
        '5. Opsi E SALAH karena Prive adalah penarikan pribadi pemilik dan bukan merupakan beban operasional usaha.'
      ],
      optionAnalysis: [
        { key: 'A', text: 'Total beban usaha sebesar Rp69.000.000', isCorrect: true, reason: 'Benar, 45 + 15 + 5 + 4 = 69 juta.' },
        { key: 'B', text: 'Laba bersih usaha Rp51.000.000', isCorrect: true, reason: 'Benar, 120 juta - 69 juta = 51 juta.' },
        { key: 'C', text: 'Penambahan bersih modal Rp41.000.000', isCorrect: true, reason: 'Benar, laba 51 juta - prive 10 juta = 41 juta.' },
        { key: 'D', text: 'Modal akhir sebesar Rp121.000.000', isCorrect: true, reason: 'Benar, modal awal 80 juta + 41 juta = 121 juta.' },
        { key: 'E', text: 'Prive dicatat sebagai beban operasional laba rugi', isCorrect: false, reason: 'Salah, prive tidak pernah masuk laporan laba rugi.' }
      ],
      conclusion: 'Pernyataan yang tepat adalah A, B, C, dan D. Prive tidak boleh diakui sebagai beban usaha.',
      ttsScript: 'Mari kita runtutkan alurnya: jumlahkan semua beban usaha didapat 69 juta rupiah. Kurangkan pendapatan 120 juta dengan 69 juta, laba bersihnya adalah 51 juta rupiah. Lalu kurangkan dengan prive 10 juta, penambahan modalnya 41 juta. Tambahkan ke modal awal 80 juta, modal akhirnya menjadi 121 juta rupiah. Ingat, prive bukan beban usaha! Jadi jawabannya A, B, C, dan D.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Laba Rugi & Modal Akhir',
      shortcut: 'Beban = 45 + 15 + 5 + 4 = 69 jt. Laba = 120 - 69 = 51 jt. Modal Akhir = 80 jt + (51 jt - 10 jt) = 121 jt. Prive BUKAN beban!',
      ruleOfThumb: 'Modal Akhir = Modal Awal + Laba - Prive.',
      ttsScript: 'Trik cepat: hitung laba bersih dulu, kurangi prive, lalu tambahkan ke modal awal. Jangan pernah masukkan prive ke daftar beban.'
    }
  },

  // SOAL 30 (BS - Analisis Likuiditas & Solvabilitas Laporan Keuangan)
  {
    id: 30,
    category: 'Akuntansi Dasar',
    categoryIndex: 10,
    type: 'BS',
    cognitiveLevel: 'HOTS - Evaluasi Kebijakan',
    abilityIndicator: 'Mengevaluasi kondisi likuiditas dan solvabilitas keuangan usaha berdasarkan rasio keuangan neraca.',
    ttsIntroduction: 'Selamat telah tiba di soal ke-30! Kita akan menguji kemampuan analisismu dalam membaca kesehatan finansial usaha melalui rasio likuiditas dan solvabilitas.',
    stimulus: {
      text: 'Neraca ringkas UMKM "Karya Mandiri" per 31 Desember 2025 menunjukkan data posisi keuangan sebagai berikut (dalam jutaan rupiah):\n- Aset Lancar (Kas, Piutang, Persediaan) = Rp180\n- Aset Tetap Neto (Mesin, Peralatan, Kendaraan) = Rp220\n- Total Aset = Rp400\n- Liabilitas Jangka Pendek (Utang Usaha, Beban Akrual) = Rp90\n- Liabilitas Jangka Panjang (Utang Bank 5 Tahun) = Rp110\n- Total Liabilitas = Rp200\n- Ekuitas Modal Pemilik = Rp200.',
      tables: [
        {
          title: 'Neraca Ringkas UMKM Karya Mandiri (Juta Rupiah)',
          headers: ['Aset', 'Jumlah', 'Liabilitas & Ekuitas', 'Jumlah'],
          rows: [
            ['Aset Lancar', 'Rp180', 'Liabilitas Jangka Pendek', 'Rp90'],
            ['Aset Tetap Neto', 'Rp220', 'Liabilitas Jangka Panjang', 'Rp110'],
            ['Total Aset', 'Rp400', 'Ekuitas Pemilik', 'Rp200'],
            ['-', '-', 'Total Liabilitas & Ekuitas', 'Rp400']
          ]
        }
      ]
    },
    questionPrompt: 'Tentukan BENAR atau SALAH untuk setiap pernyataan evaluasi kesehatan keuangan UMKM berikut!',
    statements: [
      {
        id: 's30_1',
        text: 'Rasio Lancar (Current Ratio) UMKM Karya Mandiri adalah 200% (2 : 1), yang menandakan kondisi likuiditas jangka pendek perusahaan sangat sehat dan aman.',
        correctAnswer: true,
        explanation: 'Current Ratio = Aset Lancar / Liabilitas Jangka Pendek = 180 / 90 = 2,0 atau 200%, memenuhi standar likuiditas sehat (>= 200%).'
      },
      {
        id: 's30_2',
        text: 'Rasio Utang terhadap Ekuitas (Debt to Equity Ratio / DER) bernilai 100% (1 : 1), yang menunjukkan bahwa seluruh modal sendiri didanai oleh pinjaman dengan proporsi yang seimbang.',
        correctAnswer: true,
        explanation: 'DER = Total Liabilitas / Total Ekuitas = 200 / 200 = 1,0 atau 100%, proporsi utang dan modal sendiri berbanding 1 banding 1.'
      },
      {
        id: 's30_3',
        text: 'Perusahaan tersebut mengalami insolvensi (gagal bayar) karena total liabilitasnya sama besar dengan ekuitas pemilik.',
        correctAnswer: false,
        explanation: 'Insolvensi terjadi bila Total Aset < Total Liabilitas (ekuitas negatif). Pada kasus ini Total Aset (Rp400 juta) jauh lebih besar dari Liabilitas (Rp200 juta), sehingga perusahaan sangat solvent dan jauh dari ancaman bangkrut.'
      }
    ],
    explanation: {
      problemUnderstanding: 'Menganalisis rasio likuiditas: Current Ratio (Aset Lancar / Utang Lancar) dan rasio solvabilitas: DER (Total Utang / Modal) serta status solvabilitas.',
      economicConcept: '1) Likuiditas mengukur kemampuan membayar kewajiban jangka pendek (Current Ratio = CA / CL). 2) Solvabilitas mengukur kemampuan melunasi seluruh utang dengan total aset (Solvent jika Total Aset > Total Utang). DER = Total Utang / Total Ekuitas.',
      steps: [
        'Pernyataan 1: Current Ratio = Aset Lancar (180) / Utang Jangka Pendek (90) = 2,0 atau 200%. Likuiditas sangat baik. (BENAR)',
        'Pernyataan 2: Debt to Equity Ratio (DER) = Total Utang (200) / Ekuitas (200) = 1,0 atau 100%. (BENAR)',
        'Pernyataan 3: Insolvensi hanya terjadi jika aset tidak cukup membayar utang (ekuitas defisit / minus). Di sini Total Aset Rp400 juta sedangkan utang hanya Rp200 juta, perusahaan solvabel 200%. (SALAH)'
      ],
      statementAnalysis: [
        { id: 's30_1', statement: 'Current ratio 200% likuiditas sangat sehat', isCorrect: true, reason: 'Benar, 180 / 90 = 200% adalah rasio likuiditas prima.' },
        { id: 's30_2', statement: 'DER bernilai 100% menunjukkan proporsi seimbang 1 banding 1', isCorrect: true, reason: 'Benar, 200 / 200 = 100%.' },
        { id: 's30_3', statement: 'Perusahaan mengalami insolvensi', isCorrect: false, reason: 'Salah, perusahaan sangat mampu melunasi seluruh kewajibannya (aset 400 juta > utang 200 juta).' }
      ],
      conclusion: 'Status pernyataan: Pernyataan 1 = BENAR, Pernyataan 2 = BENAR, Pernyataan 3 = SALAH. Perusahaan dalam kondisi likuid dan solven.',
      ttsScript: 'Mari kita evaluasi kesehatan finansialnya. Rasio lancar dihitung dari aset lancar 180 juta dibagi utang lancar 90 juta, hasilnya 2 atau 200 persen, artinya likuiditasnya sangat prima. Rasio utang terhadap modal adalah 200 juta dibagi 200 juta, yaitu 100 persen. Dan perusahaan ini sangat solven karena asetnya 400 juta, dua kali lipat dari total utangnya. Jadi pernyataan satu benar, dua benar, dan tiga salah.'
    },
    quickStrategy: {
      title: 'Strategi Kilat Likuiditas & Solvabilitas',
      shortcut: 'Current Ratio = Aset Lancar / Utang Lancar = 180 / 90 = 200% (Likuid). DER = Total Utang / Ekuitas = 200 / 200 = 100%. Solven = Aset > Utang (400 > 200 = Sangat Solven).',
      ruleOfThumb: 'Insolven itu jika aset lebih kecil dari utang (ekuitas negatif). Selama aset > utang, perusahaan aman!',
      ttsScript: 'Trik cepat: bagi aset lancar dengan utang jangka pendek untuk mencari likuiditas. Selama total aset lebih besar dari total utang, perusahaan tidak akan bangkrut.'
    }
  }
];
