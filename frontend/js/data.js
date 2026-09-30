/* =========================================================
   PancaLearn — Static content data
   All learning content lives here so pages stay simple.
   ========================================================= */

const SILA_DATA = [
  {
    number: 1,
    title: 'Ketuhanan Yang Maha Esa',
    icon: '🙏',
    detail:
      'Mengandung nilai ketakwaan kepada Tuhan sesuai agama dan kepercayaan masing-masing, serta menjunjung tinggi toleransi antar umat beragama di kehidupan kampus dan masyarakat.',
  },
  {
    number: 2,
    title: 'Kemanusiaan yang Adil dan Beradab',
    icon: '🤝',
    detail:
      'Menempatkan manusia sesuai harkat dan martabatnya, menghargai perbedaan, menolak diskriminasi, dan mengedepankan sikap saling menghormati.',
  },
  {
    number: 3,
    title: 'Persatuan Indonesia',
    icon: '🇮🇩',
    detail:
      'Mengutamakan persatuan dan kesatuan bangsa di atas kepentingan pribadi atau golongan, termasuk dalam keberagaman suku, budaya, dan pendapat.',
  },
  {
    number: 4,
    title: 'Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan',
    icon: '🗳️',
    detail:
      'Mengedepankan musyawarah mufakat dalam pengambilan keputusan, menghargai pendapat orang lain, dan menjunjung tinggi demokrasi.',
  },
  {
    number: 5,
    title: 'Keadilan Sosial bagi Seluruh Rakyat Indonesia',
    icon: '⚖️',
    detail:
      'Mendorong pemerataan kesejahteraan, gotong royong, dan keadilan dalam berbagai aspek kehidupan berbangsa dan bernegara.',
  },
];

const MATERI_DATA = [
  {
    id: 'sejarah-lahirnya-pancasila',
    icon: '📜',
    title: 'Sejarah Lahirnya Pancasila',
    description: 'Perjalanan sejarah perumusan Pancasila sebagai dasar negara Indonesia.',
    readingTime: 6,
    summary:
      'Pancasila dirumuskan melalui proses panjang sidang BPUPKI dan Panitia Sembilan sebelum akhirnya disahkan sebagai dasar negara pada 18 Agustus 1945.',
    keyPoints: [
      'BPUPKI dibentuk untuk mempersiapkan kemerdekaan Indonesia.',
      'Pidato Ir. Soekarno pada 1 Juni 1945 menjadi cikal bakal istilah "Pancasila".',
      'Panitia Sembilan merumuskan Piagam Jakarta sebagai rancangan awal.',
      'Pancasila disahkan secara resmi dalam sidang PPKI 18 Agustus 1945.',
    ],
    content:
      'Pancasila lahir dari proses musyawarah panjang para pendiri bangsa. Diawali dengan sidang BPUPKI pada Mei-Juni 1945 yang membahas dasar negara Indonesia merdeka. Pada 1 Juni 1945, Ir. Soekarno menyampaikan pidato yang untuk pertama kalinya memperkenalkan istilah "Pancasila" sebagai lima dasar. Setelah melalui perdebatan dan penyempurnaan rumusan oleh Panitia Sembilan, Pancasila akhirnya disahkan menjadi dasar negara dalam sidang PPKI pada 18 Agustus 1945, sehari setelah proklamasi kemerdekaan.',
    realLifeExample:
      'Setiap upacara bendera di kampus dan sekolah selalu diawali dengan pembacaan Pancasila, mengingatkan generasi muda pada sejarah perjuangan para pendiri bangsa.',
    miniQuiz: {
      question: 'Pada tanggal berapa Pancasila disahkan sebagai dasar negara?',
      options: ['1 Juni 1945', '17 Agustus 1945', '18 Agustus 1945', '22 Juni 1945'],
      correctIndex: 2,
      explanation: 'Pancasila disahkan dalam sidang PPKI pada 18 Agustus 1945, sehari setelah proklamasi kemerdekaan.',
    },
    relatedCaseId: 'kasus-gotong-royong-kampus',
  },
  {
    id: 'makna-5-sila',
    icon: '⭐',
    title: 'Makna 5 Sila Pancasila',
    description: 'Memahami makna mendalam dari setiap sila dalam Pancasila.',
    readingTime: 7,
    summary:
      'Setiap sila dalam Pancasila memiliki makna filosofis yang saling melengkapi dan membentuk satu kesatuan nilai bangsa Indonesia.',
    keyPoints: [
      'Sila 1 menekankan hubungan manusia dengan Tuhan.',
      'Sila 2 menekankan hubungan antar sesama manusia.',
      'Sila 3 menekankan persatuan bangsa yang beragam.',
      'Sila 4 menekankan demokrasi melalui musyawarah.',
      'Sila 5 menekankan keadilan sosial bagi seluruh rakyat.',
    ],
    content:
      'Kelima sila Pancasila tidak berdiri sendiri-sendiri, melainkan merupakan satu kesatuan yang utuh dan saling berkaitan. Sila pertama menjadi landasan spiritual, sila kedua dan ketiga menjadi landasan sosial-kebangsaan, sila keempat menjadi landasan politik-demokrasi, dan sila kelima menjadi tujuan akhir berupa keadilan sosial. Memahami makna tiap sila secara utuh membantu kita menerapkannya secara seimbang dalam kehidupan sehari-hari.',
    realLifeExample:
      'Ketika mengambil keputusan organisasi kampus melalui rapat, mahasiswa sedang mempraktikkan sila keempat sekaligus menjaga persatuan (sila ketiga).',
    miniQuiz: {
      question: 'Sila keberapa yang berkaitan langsung dengan musyawarah mufakat?',
      options: ['Sila 1', 'Sila 2', 'Sila 4', 'Sila 5'],
      correctIndex: 2,
      explanation: 'Sila keempat menekankan kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan.',
    },
    relatedCaseId: 'kasus-organisasi-kampus',
  },
  {
    id: 'nilai-nilai-pancasila',
    icon: '💎',
    title: 'Nilai-Nilai Pancasila',
    description: 'Nilai dasar, instrumental, dan praksis dalam Pancasila.',
    readingTime: 5,
    summary:
      'Nilai-nilai Pancasila terbagi menjadi nilai dasar, nilai instrumental, dan nilai praksis yang diterapkan dalam kehidupan nyata.',
    keyPoints: [
      'Nilai dasar bersifat abstrak dan tetap.',
      'Nilai instrumental dijabarkan dalam peraturan dan kebijakan.',
      'Nilai praksis adalah penerapan nyata dalam kehidupan sehari-hari.',
      'Ketiga nilai ini saling mendukung agar Pancasila tetap relevan.',
    ],
    content:
      'Nilai dasar Pancasila bersifat universal dan tidak berubah, seperti ketuhanan, kemanusiaan, persatuan, kerakyatan, dan keadilan. Nilai ini kemudian dijabarkan menjadi nilai instrumental berupa undang-undang, peraturan, dan kebijakan. Pada akhirnya, nilai instrumental diwujudkan dalam nilai praksis, yaitu sikap dan perilaku nyata masyarakat dalam kehidupan sehari-hari, termasuk di lingkungan kampus.',
    realLifeExample:
      'Peraturan kampus tentang anti-perundungan adalah bentuk nilai instrumental dari sila kedua, sementara sikap saling menghormati antar mahasiswa adalah nilai praksisnya.',
    miniQuiz: {
      question: 'Peraturan dan undang-undang termasuk dalam kategori nilai apa?',
      options: ['Nilai dasar', 'Nilai instrumental', 'Nilai praksis', 'Nilai budaya'],
      correctIndex: 1,
      explanation: 'Nilai instrumental adalah penjabaran nilai dasar ke dalam bentuk peraturan dan kebijakan konkret.',
    },
    relatedCaseId: 'kasus-hoaks-media-sosial',
  },
  {
    id: 'pancasila-kehidupan-sehari-hari',
    icon: '🏠',
    title: 'Pancasila dalam Kehidupan Sehari-hari',
    description: 'Penerapan nilai Pancasila dalam aktivitas sehari-hari.',
    readingTime: 6,
    summary:
      'Pancasila bukan hanya teori, tetapi pedoman perilaku yang dapat diterapkan dalam interaksi sosial sehari-hari, termasuk di lingkungan kampus.',
    keyPoints: [
      'Toleransi antar teman berbeda agama adalah wujud sila pertama.',
      'Saling membantu dalam tugas kelompok adalah wujud gotong royong.',
      'Menghargai pendapat dalam diskusi adalah wujud sila keempat.',
      'Tidak membeda-bedakan teman adalah wujud sila kedua dan kelima.',
    ],
    content:
      'Penerapan Pancasila dalam kehidupan sehari-hari dapat dimulai dari hal-hal sederhana: menghormati teman yang berbeda keyakinan, bersikap adil dalam pembagian tugas kelompok, ikut serta dalam kegiatan gotong royong di lingkungan tempat tinggal, serta berani menyuarakan pendapat secara santun dalam forum diskusi. Kebiasaan-kebiasaan kecil ini jika dilakukan konsisten akan membentuk karakter bangsa yang berlandaskan Pancasila.',
    realLifeExample:
      'Mahasiswa yang bergantian memimpin doa sesuai agama masing-masing saat acara kampus mencerminkan penerapan sila pertama secara nyata.',
    miniQuiz: {
      question: 'Manakah contoh penerapan sila kelima dalam kehidupan kampus?',
      options: [
        'Membeda-bedakan teman berdasarkan status ekonomi',
        'Membagi tugas kelompok secara adil dan merata',
        'Memaksakan pendapat pribadi dalam rapat',
        'Mengabaikan teman yang kesulitan',
      ],
      correctIndex: 1,
      explanation: 'Pembagian tugas yang adil dan merata mencerminkan nilai keadilan sosial dalam sila kelima.',
    },
    relatedCaseId: 'kasus-kerja-kelompok',
  },
  {
    id: 'pancasila-era-digital',
    icon: '💻',
    title: 'Pancasila di Era Digital',
    description: 'Tantangan dan penerapan nilai Pancasila di dunia digital.',
    readingTime: 7,
    summary:
      'Era digital membawa tantangan baru dalam menerapkan nilai Pancasila, mulai dari hoaks, cyberbullying, hingga polarisasi opini di media sosial.',
    keyPoints: [
      'Menyaring informasi sebelum membagikannya adalah wujud sikap bijak digital.',
      'Menghindari ujaran kebencian adalah wujud sila kedua.',
      'Menghargai perbedaan pendapat di media sosial adalah wujud sila keempat.',
      'Literasi digital penting untuk menjaga persatuan bangsa.',
    ],
    content:
      'Media sosial dan teknologi digital membuka ruang interaksi yang luas, namun juga membawa tantangan seperti penyebaran hoaks, ujaran kebencian, dan cyberbullying. Nilai-nilai Pancasila tetap relevan untuk menjadi pedoman berperilaku di dunia digital: memeriksa kebenaran informasi sebelum membagikannya, bersikap sopan dalam berkomentar, menghargai perbedaan pendapat, dan tidak menyebarkan konten yang memecah belah persatuan bangsa.',
    realLifeExample:
      'Sebelum membagikan berita di grup WhatsApp kelas, mahasiswa yang bijak akan memeriksa terlebih dahulu kebenarannya melalui sumber terpercaya.',
    miniQuiz: {
      question: 'Sikap paling tepat ketika menerima informasi yang belum jelas kebenarannya adalah...',
      options: [
        'Langsung membagikannya ke semua grup',
        'Memeriksa kebenaran informasi terlebih dahulu',
        'Mengabaikannya tanpa klarifikasi',
        'Menambahkan opini pribadi lalu menyebarkannya',
      ],
      correctIndex: 1,
      explanation: 'Memeriksa kebenaran informasi (cek fakta) mencerminkan sikap bijak dan bertanggung jawab di era digital.',
    },
    relatedCaseId: 'kasus-cyberbullying',
  },
  {
    id: 'pancasila-dasar-negara',
    icon: '🏛️',
    title: 'Pancasila sebagai Dasar Negara',
    description: 'Pancasila sebagai landasan fundamental dalam penyelenggaraan negara Indonesia.',
    readingTime: 6,
    summary:
      'Pancasila berkedudukan sebagai dasar negara yang menjadi sumber dari segala sumber hukum dan pedoman dalam penyelenggaraan kehidupan berbangsa dan bernegara.',
    keyPoints: [
      'Pancasila adalah dasar negara yang tercantum dalam Pembukaan UUD 1945.',
      'Semua peraturan perundang-undangan di Indonesia harus bersumber dan tidak boleh bertentangan dengan Pancasila.',
      'Sebagai dasar negara, Pancasila menjadi pedoman dalam menyusun kebijakan dan sistem pemerintahan.',
      'Kedudukan Pancasila sebagai dasar negara bersifat tetap dan tidak dapat diubah.',
    ],
    content:
      'Sebagai dasar negara, Pancasila berfungsi sebagai fondasi utama dalam penyelenggaraan kehidupan berbangsa dan bernegara di Indonesia. Kedudukan ini tercantum secara eksplisit dalam alinea keempat Pembukaan UUD 1945, sehingga menjadikan Pancasila sebagai sumber dari segala sumber hukum atau grundnorm bagi negara Indonesia. Artinya, seluruh peraturan perundang-undangan, mulai dari undang-undang hingga peraturan daerah, harus disusun berlandaskan dan tidak boleh bertentangan dengan nilai-nilai Pancasila. Kedudukan Pancasila sebagai dasar negara juga bersifat tetap dan tidak dapat diubah oleh siapa pun, termasuk lembaga negara, karena mengubahnya sama dengan membubarkan negara Indonesia itu sendiri.',
    realLifeExample:
      'Ketika DPR menyusun sebuah undang-undang baru, rancangan tersebut harus diuji agar tidak bertentangan dengan nilai-nilai Pancasila, misalnya tidak boleh mendiskriminasi kelompok masyarakat tertentu.',
    miniQuiz: {
      question: 'Pancasila sebagai dasar negara tercantum dalam bagian UUD 1945 yang mana?',
      options: ['Batang tubuh', 'Pembukaan alinea keempat', 'Penjelasan umum', 'Amandemen keempat'],
      correctIndex: 1,
      explanation: 'Pancasila sebagai dasar negara tercantum dalam Pembukaan UUD 1945 alinea keempat.',
    },
    relatedCaseId: 'kasus-dasar-negara',
  },
  {
    id: 'pancasila-ideologi-negara',
    icon: '🌏',
    title: 'Pancasila sebagai Ideologi Negara',
    description: 'Pancasila sebagai ideologi terbuka yang menjadi cita-cita dan pedoman bangsa Indonesia.',
    readingTime: 6,
    summary:
      'Sebagai ideologi negara, Pancasila memuat nilai-nilai dasar yang menjadi cita-cita bersama sekaligus bersifat terbuka terhadap perkembangan zaman.',
    keyPoints: [
      'Ideologi berarti kumpulan gagasan dan nilai yang menjadi cita-cita suatu bangsa.',
      'Pancasila bersifat sebagai ideologi terbuka, artinya dapat menyesuaikan diri dengan perkembangan zaman tanpa mengubah nilai dasarnya.',
      'Pancasila berbeda dengan ideologi liberalisme maupun komunisme karena mengutamakan keseimbangan individu dan masyarakat.',
      'Ideologi Pancasila menjadi pemersatu bangsa Indonesia yang majemuk.',
    ],
    content:
      'Sebagai ideologi negara, Pancasila merupakan kumpulan nilai dan gagasan dasar yang menjadi cita-cita bersama seluruh rakyat Indonesia dalam bernegara. Pancasila dikategorikan sebagai ideologi terbuka karena nilai-nilai dasarnya bersifat tetap, namun penjabarannya dapat menyesuaikan dengan perkembangan zaman, ilmu pengetahuan, dan kebutuhan masyarakat. Hal ini membedakan Pancasila dengan ideologi tertutup seperti komunisme yang kaku, maupun liberalisme yang terlalu menonjolkan kebebasan individu. Sebagai ideologi, Pancasila juga berfungsi sebagai pemersatu bangsa Indonesia yang beragam suku, agama, ras, dan golongan agar tetap satu dalam bingkai Negara Kesatuan Republik Indonesia.',
    realLifeExample:
      'Perkembangan teknologi digital di Indonesia tetap diarahkan agar sejalan dengan nilai Pancasila, misalnya melalui aturan perlindungan data pribadi yang menjunjung tinggi hak asasi manusia.',
    miniQuiz: {
      question: 'Mengapa Pancasila disebut sebagai ideologi terbuka?',
      options: [
        'Karena boleh diubah sesuai keinginan penguasa',
        'Karena nilai dasarnya tetap namun penjabarannya dapat menyesuaikan zaman',
        'Karena berasal dari ideologi negara lain',
        'Karena tidak memiliki nilai dasar yang jelas',
      ],
      correctIndex: 1,
      explanation: 'Ideologi terbuka berarti nilai dasarnya tetap, tetapi penerapannya dapat berkembang mengikuti perubahan zaman.',
    },
    relatedCaseId: 'kasus-ideologi-negara',
  },
  {
    id: 'pancasila-pandangan-hidup',
    icon: '🧭',
    title: 'Pancasila sebagai Pandangan Hidup',
    description: 'Pancasila sebagai pedoman sikap dan perilaku bangsa Indonesia dalam kehidupan sehari-hari.',
    readingTime: 5,
    summary:
      'Sebagai pandangan hidup, Pancasila menjadi pedoman bagi bangsa Indonesia dalam bersikap, berperilaku, dan mengambil keputusan di tengah kehidupan bermasyarakat.',
    keyPoints: [
      'Pandangan hidup adalah nilai yang dijadikan pedoman dalam menjalani kehidupan sehari-hari.',
      'Pancasila membantu bangsa Indonesia menghadapi berbagai persoalan dengan cara yang sesuai jati diri bangsa.',
      'Pandangan hidup Pancasila lahir dari nilai-nilai luhur budaya dan tradisi bangsa Indonesia sendiri.',
      'Penerapan pandangan hidup Pancasila terlihat dari sikap gotong royong, musyawarah, dan toleransi.',
    ],
    content:
      'Sebagai pandangan hidup, Pancasila berperan sebagai pedoman bagi bangsa Indonesia dalam bersikap, berpikir, dan bertindak menghadapi berbagai persoalan kehidupan sehari-hari maupun dalam mengambil keputusan penting. Berbeda dengan pandangan hidup yang diimpor dari luar, nilai-nilai Pancasila digali dari budaya, adat istiadat, dan tradisi luhur bangsa Indonesia sendiri, seperti gotong royong, musyawarah, dan sikap religius. Dengan menjadikan Pancasila sebagai pandangan hidup, bangsa Indonesia memiliki pegangan yang kukuh dalam menghadapi pengaruh budaya asing maupun tantangan zaman tanpa kehilangan jati diri.',
    realLifeExample:
      'Saat menghadapi masalah dalam keluarga atau organisasi, seseorang yang menjadikan Pancasila sebagai pandangan hidup akan cenderung menyelesaikannya melalui musyawarah dan kekeluargaan, bukan dengan kekerasan.',
    miniQuiz: {
      question: 'Dari mana nilai-nilai pandangan hidup Pancasila digali?',
      options: [
        'Diadopsi sepenuhnya dari ideologi negara lain',
        'Digali dari budaya, adat istiadat, dan tradisi luhur bangsa Indonesia',
        'Dibuat baru tanpa berakar pada budaya bangsa',
        'Hanya berasal dari satu daerah tertentu',
      ],
      correctIndex: 1,
      explanation: 'Pandangan hidup Pancasila digali dari nilai-nilai budaya, adat istiadat, dan tradisi luhur bangsa Indonesia sendiri.',
    },
    relatedCaseId: 'kasus-kepedulian-sosial',
  },
  {
    id: 'kedudukan-pancasila-uud-1945',
    icon: '📘',
    title: 'Kedudukan Pancasila dalam UUD 1945',
    description: 'Posisi dan fungsi Pancasila sebagai norma dasar dalam sistem hukum UUD 1945.',
    readingTime: 6,
    summary:
      'Pancasila memiliki kedudukan sebagai norma dasar (grundnorm) yang menjiwai seluruh pasal dalam UUD 1945.',
    keyPoints: [
      'Pancasila tercantum dalam Pembukaan UUD 1945 alinea keempat.',
      'Pancasila berkedudukan sebagai norma dasar yang menjiwai seluruh batang tubuh UUD 1945.',
      'Pembukaan UUD 1945 tidak dapat diubah karena memuat dasar negara.',
      'Pasal-pasal dalam UUD 1945 merupakan penjabaran dari nilai-nilai Pancasila.',
    ],
    content:
      'Kedudukan Pancasila dalam UUD 1945 sangat fundamental karena Pancasila dicantumkan dalam Pembukaan UUD 1945, khususnya pada alinea keempat. Sebagai norma dasar atau grundnorm, Pancasila menjiwai seluruh pasal yang terdapat dalam batang tubuh UUD 1945. Artinya, setiap pasal, mulai dari hak asasi manusia, sistem pemerintahan, hingga perekonomian negara, harus selaras dan tidak boleh bertentangan dengan nilai-nilai Pancasila. Oleh karena kedudukannya yang sangat mendasar itu, Pembukaan UUD 1945 disepakati sebagai bagian yang tidak dapat diubah, sekalipun UUD 1945 telah mengalami beberapa kali amandemen pada bagian batang tubuhnya.',
    realLifeExample:
      'Pasal 29 UUD 1945 tentang kebebasan beragama merupakan wujud nyata penjabaran sila pertama Pancasila ke dalam konstitusi negara.',
    miniQuiz: {
      question: 'Mengapa Pembukaan UUD 1945 tidak dapat diubah meskipun batang tubuhnya pernah diamandemen?',
      options: [
        'Karena tidak penting bagi negara',
        'Karena memuat Pancasila sebagai dasar negara yang bersifat tetap',
        'Karena sudah tidak relevan',
        'Karena hanya berlaku sementara',
      ],
      correctIndex: 1,
      explanation: 'Pembukaan UUD 1945 memuat Pancasila sebagai dasar negara yang kedudukannya tetap dan tidak dapat diubah.',
    },
    relatedCaseId: 'kasus-hak-dan-kewajiban',
  },
  {
    id: 'hubungan-pancasila-uud-1945',
    icon: '🔗',
    title: 'Hubungan Pancasila dan UUD 1945',
    description: 'Keterkaitan erat antara Pancasila sebagai dasar negara dan UUD 1945 sebagai konstitusi.',
    readingTime: 6,
    summary:
      'Pancasila dan UUD 1945 memiliki hubungan yang tidak dapat dipisahkan, di mana Pancasila menjadi jiwa dan UUD 1945 menjadi wujud hukum tertulisnya.',
    keyPoints: [
      'Pancasila adalah jiwa, sedangkan UUD 1945 adalah wujud hukum tertulis dari nilai-nilai itu.',
      'UUD 1945 merupakan penjabaran operasional dari nilai-nilai Pancasila.',
      'Keduanya sama-sama disahkan pada 18 Agustus 1945 oleh PPKI.',
      'Tanpa Pancasila, UUD 1945 akan kehilangan arah dan landasan filosofisnya.',
    ],
    content:
      'Pancasila dan UUD 1945 memiliki hubungan yang saling melengkapi dan tidak dapat dipisahkan satu sama lain. Pancasila berkedudukan sebagai dasar filosofis dan jiwa bangsa, sementara UUD 1945 merupakan wujud hukum tertulis yang menjabarkan nilai-nilai Pancasila ke dalam aturan-aturan operasional bernegara. Keduanya disahkan pada waktu yang berdekatan, yakni dalam sidang PPKI tanggal 18 Agustus 1945. Tanpa Pancasila, UUD 1945 hanya akan menjadi kumpulan pasal tanpa arah dan landasan filosofis yang jelas, sementara tanpa UUD 1945, nilai-nilai Pancasila akan sulit diwujudkan secara konkret dalam kehidupan bernegara.',
    realLifeExample:
      'Ketentuan tentang pemilihan umum yang diatur dalam UUD 1945 merupakan wujud nyata dari sila keempat Pancasila tentang kerakyatan yang dipimpin oleh hikmat kebijaksanaan.',
    miniQuiz: {
      question: 'Bagaimana hubungan yang tepat antara Pancasila dan UUD 1945?',
      options: [
        'UUD 1945 lebih tinggi kedudukannya daripada Pancasila',
        'Pancasila adalah jiwa, UUD 1945 adalah wujud hukum tertulisnya',
        'Keduanya tidak memiliki keterkaitan sama sekali',
        'Pancasila hanya berlaku jika disebutkan dalam UUD 1945',
      ],
      correctIndex: 1,
      explanation: 'Pancasila menjadi jiwa dan dasar filosofis, sedangkan UUD 1945 adalah wujud hukum tertulis dari nilai-nilai tersebut.',
    },
    relatedCaseId: 'kasus-keadilan-sosial',
  },
  {
    id: 'pancasila-bhinneka-tunggal-ika',
    icon: '🌈',
    title: 'Pancasila dan Bhinneka Tunggal Ika',
    description: 'Keterkaitan nilai Pancasila dengan semboyan persatuan dalam keberagaman bangsa Indonesia.',
    readingTime: 6,
    summary:
      'Bhinneka Tunggal Ika dan Pancasila saling menguatkan sebagai landasan persatuan bangsa Indonesia yang majemuk.',
    keyPoints: [
      'Bhinneka Tunggal Ika berarti berbeda-beda tetapi tetap satu jua.',
      'Semboyan ini menjadi pelengkap sila ketiga Pancasila tentang Persatuan Indonesia.',
      'Keberagaman suku, agama, ras, dan budaya adalah kekayaan bangsa yang harus dijaga.',
      'Pancasila menjadi pemersatu di tengah keberagaman yang dimiliki Indonesia.',
    ],
    content:
      'Semboyan Bhinneka Tunggal Ika yang berarti berbeda-beda tetapi tetap satu jua memiliki keterkaitan erat dengan nilai-nilai Pancasila, khususnya sila ketiga tentang Persatuan Indonesia. Sebagai negara dengan ribuan pulau, ratusan suku bangsa, berbagai agama, dan beragam bahasa daerah, Indonesia memerlukan nilai pemersatu yang mampu merangkul seluruh perbedaan tersebut. Pancasila hadir sebagai nilai bersama yang mengakui dan menghormati keberagaman, sekaligus menegaskan bahwa perbedaan bukan alasan untuk berpecah belah, melainkan kekayaan yang memperkuat persatuan bangsa Indonesia.',
    realLifeExample:
      'Perayaan hari besar keagamaan yang berbeda-beda di lingkungan kampus tetap dirayakan bersama dengan semangat saling menghormati, sebagai wujud nyata Bhinneka Tunggal Ika.',
    miniQuiz: {
      question: 'Sila Pancasila manakah yang paling berkaitan langsung dengan semboyan Bhinneka Tunggal Ika?',
      options: ['Sila pertama', 'Sila kedua', 'Sila ketiga', 'Sila kelima'],
      correctIndex: 2,
      explanation: 'Sila ketiga, Persatuan Indonesia, berkaitan langsung dengan semangat Bhinneka Tunggal Ika dalam menyatukan keberagaman bangsa.',
    },
    relatedCaseId: 'kasus-keberagaman-suku',
  },
  {
    id: 'pancasila-dan-nkri',
    icon: '🇮🇩',
    title: 'Pancasila dan NKRI',
    description: 'Peran Pancasila dalam menjaga keutuhan Negara Kesatuan Republik Indonesia.',
    readingTime: 6,
    summary:
      'Pancasila menjadi perekat utama yang menjaga keutuhan wilayah dan persatuan Negara Kesatuan Republik Indonesia.',
    keyPoints: [
      'NKRI adalah bentuk negara yang disepakati para pendiri bangsa sejak awal kemerdekaan.',
      'Pancasila menjadi perekat yang menyatukan wilayah Indonesia yang luas dan beragam.',
      'Ancaman terhadap persatuan seperti separatisme bertentangan dengan nilai Pancasila.',
      'Menjaga NKRI adalah tanggung jawab seluruh warga negara, bukan hanya aparat negara.',
    ],
    content:
      'Negara Kesatuan Republik Indonesia (NKRI) merupakan bentuk negara final yang telah disepakati oleh para pendiri bangsa dan tidak dapat diganggu gugat. Pancasila, khususnya sila ketiga, berperan sebagai perekat yang menyatukan wilayah Indonesia yang terbentang dari Sabang sampai Merauke dengan berbagai suku, agama, dan budaya di dalamnya. Segala bentuk ancaman terhadap keutuhan NKRI, seperti gerakan separatisme atau radikalisme yang ingin memecah belah bangsa, jelas bertentangan dengan nilai-nilai Pancasila. Oleh karena itu, menjaga keutuhan NKRI bukan hanya tugas aparat keamanan, tetapi tanggung jawab bersama seluruh warga negara Indonesia.',
    realLifeExample:
      'Mahasiswa dari berbagai daerah yang kuliah di kota yang sama dan tetap menjaga kerukunan meski berbeda asal daerah adalah wujud nyata menjaga persatuan NKRI.',
    miniQuiz: {
      question: 'Sikap apa yang bertentangan dengan nilai Pancasila dalam menjaga NKRI?',
      options: [
        'Mendukung program pembangunan daerah tertinggal',
        'Mendukung gerakan yang ingin memisahkan diri dari NKRI',
        'Menghormati budaya daerah lain',
        'Ikut serta dalam kegiatan lintas budaya',
      ],
      correctIndex: 1,
      explanation: 'Mendukung gerakan separatisme bertentangan dengan nilai persatuan Pancasila dan mengancam keutuhan NKRI.',
    },
    relatedCaseId: 'kasus-persatuan-generasi-muda',
  },
  {
    id: 'pancasila-dan-demokrasi',
    icon: '🗳️',
    title: 'Pancasila dan Demokrasi',
    description: 'Konsep demokrasi Pancasila yang mengedepankan musyawarah dan mufakat.',
    readingTime: 7,
    summary:
      'Demokrasi Pancasila menekankan musyawarah untuk mufakat sebagai ciri khas yang membedakannya dari demokrasi liberal maupun demokrasi terpimpin.',
    keyPoints: [
      'Demokrasi Pancasila bersumber dari sila keempat Pancasila.',
      'Mengutamakan musyawarah untuk mufakat, bukan sekadar suara terbanyak.',
      'Demokrasi Pancasila menghargai hak setiap warga negara untuk berpendapat.',
      'Pemilu di Indonesia merupakan wujud nyata pelaksanaan demokrasi Pancasila.',
    ],
    content:
      'Demokrasi Pancasila adalah sistem demokrasi khas Indonesia yang bersumber dari sila keempat, yaitu Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan. Berbeda dengan demokrasi liberal yang menitikberatkan kebebasan individu secara mutlak atau demokrasi terpimpin yang memusatkan kekuasaan pada satu pemimpin, demokrasi Pancasila mengedepankan musyawarah untuk mencapai mufakat sebagai cara utama pengambilan keputusan. Ketika mufakat tidak tercapai, pengambilan suara terbanyak dapat dilakukan sebagai jalan terakhir dengan tetap menghormati hak setiap warga negara untuk menyampaikan pendapat. Pemilihan umum yang dilaksanakan secara langsung, umum, bebas, rahasia, jujur, dan adil merupakan wujud nyata pelaksanaan demokrasi Pancasila di Indonesia.',
    realLifeExample:
      'Dalam pemilihan ketua kelas, jika musyawarah tidak menghasilkan kesepakatan, pemungutan suara dilakukan dengan tetap menghormati hasil akhirnya bersama-sama.',
    miniQuiz: {
      question: 'Apa ciri khas utama demokrasi Pancasila dibanding demokrasi liberal?',
      options: [
        'Mengutamakan kekuasaan mutlak pemimpin',
        'Mengutamakan musyawarah untuk mufakat',
        'Tidak melibatkan rakyat dalam pengambilan keputusan',
        'Hanya berlaku pada tingkat pemerintah pusat',
      ],
      correctIndex: 1,
      explanation: 'Demokrasi Pancasila menitikberatkan musyawarah untuk mufakat sebagai cara utama pengambilan keputusan bersama.',
    },
    relatedCaseId: 'kasus-musyawarah-desa',
  },
  {
    id: 'pancasila-dan-ham',
    icon: '⚖️',
    title: 'Pancasila dan Hak Asasi Manusia',
    description: 'Nilai-nilai Pancasila sebagai landasan perlindungan dan penghormatan hak asasi manusia.',
    readingTime: 7,
    summary:
      'Pancasila menjadi landasan filosofis dalam menjamin dan melindungi hak asasi manusia di Indonesia, khususnya melalui sila kedua.',
    keyPoints: [
      'Sila kedua Pancasila menegaskan penghormatan terhadap harkat dan martabat manusia.',
      'HAM di Indonesia diatur dalam UUD 1945 dan Undang-Undang HAM sebagai penjabaran nilai Pancasila.',
      'Pancasila menyeimbangkan hak individu dengan kewajiban terhadap masyarakat.',
      'Diskriminasi dan pelanggaran HAM bertentangan dengan nilai-nilai Pancasila.',
    ],
    content:
      'Nilai-nilai Pancasila, khususnya sila kedua tentang Kemanusiaan yang Adil dan Beradab, menjadi landasan filosofis bagi perlindungan hak asasi manusia (HAM) di Indonesia. Penghormatan terhadap HAM di Indonesia tidak bersifat mutlak seperti dalam paham liberalisme, namun tetap menyeimbangkan hak individu dengan kewajiban terhadap sesama dan masyarakat, sesuai dengan semangat kekeluargaan bangsa Indonesia. Ketentuan mengenai HAM secara konkret dijabarkan dalam UUD 1945 Pasal 28A hingga 28J serta Undang-Undang Nomor 39 Tahun 1999 tentang Hak Asasi Manusia. Segala bentuk diskriminasi, kekerasan, maupun pelanggaran terhadap hak dasar manusia jelas bertentangan dengan nilai-nilai luhur Pancasila.',
    realLifeExample:
      'Kampus yang menyediakan fasilitas ramah difabel dan menjamin kesetaraan kesempatan belajar bagi seluruh mahasiswa adalah wujud nyata penghormatan HAM sesuai Pancasila.',
    miniQuiz: {
      question: 'Sila Pancasila manakah yang menjadi landasan utama penghormatan HAM di Indonesia?',
      options: ['Sila pertama', 'Sila kedua', 'Sila ketiga', 'Sila keempat'],
      correctIndex: 1,
      explanation: 'Sila kedua, Kemanusiaan yang Adil dan Beradab, menjadi landasan utama penghormatan terhadap hak asasi manusia.',
    },
    relatedCaseId: 'kasus-diskriminasi',
  },
  {
    id: 'pancasila-gotong-royong',
    icon: '🤲',
    title: 'Pancasila dan Gotong Royong',
    description: 'Gotong royong sebagai nilai luhur bangsa yang tercermin dalam Pancasila.',
    readingTime: 5,
    summary:
      'Gotong royong merupakan cerminan nilai kebersamaan yang menjadi inti dari seluruh sila Pancasila, khususnya sila ketiga dan kelima.',
    keyPoints: [
      'Gotong royong adalah nilai asli budaya Indonesia yang telah ada sejak lama.',
      'Bung Karno pernah menyebut gotong royong sebagai inti dari seluruh sila Pancasila.',
      'Gotong royong mencerminkan kebersamaan, tolong-menolong, dan kepedulian sosial.',
      'Nilai gotong royong tetap relevan diterapkan dalam kehidupan modern, termasuk di dunia digital.',
    ],
    content:
      'Gotong royong merupakan salah satu nilai luhur budaya Indonesia yang telah lama mengakar dalam kehidupan masyarakat, jauh sebelum Indonesia merdeka. Ir. Soekarno bahkan pernah menyebut gotong royong sebagai inti atau pemerasan dari seluruh sila Pancasila, karena di dalamnya terkandung semangat kebersamaan, tolong-menolong, dan kepedulian terhadap sesama yang menjadi benang merah kelima sila. Gotong royong tidak hanya relevan dalam kegiatan fisik seperti kerja bakti, tetapi juga dapat diterapkan dalam bentuk lain seperti saling berbagi ilmu, membantu teman yang kesulitan secara daring, maupun bahu-membahu menghadapi bencana melalui gerakan sosial digital.',
    realLifeExample:
      'Gerakan penggalangan dana daring untuk korban bencana alam yang dilakukan mahasiswa melalui media sosial adalah bentuk gotong royong di era modern.',
    miniQuiz: {
      question: 'Siapa yang pernah menyebut gotong royong sebagai inti dari seluruh sila Pancasila?',
      options: ['Mohammad Hatta', 'Ir. Soekarno', 'Soepomo', 'Mohammad Yamin'],
      correctIndex: 1,
      explanation: 'Ir. Soekarno menyebut gotong royong sebagai pemerasan atau inti dari seluruh sila Pancasila.',
    },
    relatedCaseId: 'kasus-gotong-royong-lingkungan',
  },
  {
    id: 'pancasila-lingkungan-kampus',
    icon: '🏫',
    title: 'Pancasila dalam Lingkungan Sekolah dan Kampus',
    description: 'Penerapan nilai-nilai Pancasila dalam kehidupan sehari-hari di sekolah dan kampus.',
    readingTime: 6,
    summary:
      'Lingkungan sekolah dan kampus menjadi tempat penting untuk membiasakan penerapan nilai-nilai Pancasila sejak dini.',
    keyPoints: [
      'Sekolah dan kampus adalah miniatur masyarakat yang beragam.',
      'Kegiatan organisasi siswa/mahasiswa dapat menjadi wadah penerapan demokrasi Pancasila.',
      'Sikap saling menghormati antar teman berbeda latar belakang mencerminkan sila kedua dan ketiga.',
      'Aturan tata tertib sekolah/kampus merupakan penjabaran nilai keadilan dan tanggung jawab.',
    ],
    content:
      'Lingkungan sekolah dan kampus merupakan miniatur masyarakat Indonesia yang mempertemukan siswa maupun mahasiswa dari berbagai latar belakang suku, agama, dan daerah. Di lingkungan inilah nilai-nilai Pancasila dapat dilatih dan dibiasakan sejak dini, misalnya melalui kegiatan organisasi kesiswaan atau kemahasiswaan yang melatih demokrasi dan musyawarah, sikap saling menghormati antar teman yang berbeda keyakinan, hingga kepatuhan terhadap tata tertib sebagai wujud tanggung jawab dan keadilan bersama. Pembiasaan nilai Pancasila di lingkungan pendidikan akan membentuk karakter generasi muda yang siap menerapkannya secara lebih luas dalam kehidupan bermasyarakat.',
    realLifeExample:
      'Pemilihan ketua OSIS atau BEM yang dilakukan secara demokratis melalui pemungutan suara adalah latihan nyata penerapan sila keempat di lingkungan pendidikan.',
    miniQuiz: {
      question: 'Mengapa sekolah dan kampus disebut sebagai miniatur masyarakat Indonesia?',
      options: [
        'Karena hanya diikuti oleh satu suku tertentu',
        'Karena mempertemukan siswa/mahasiswa dari berbagai latar belakang yang beragam',
        'Karena tidak memiliki aturan sama sekali',
        'Karena tidak terkait dengan nilai Pancasila',
      ],
      correctIndex: 1,
      explanation: 'Sekolah dan kampus mempertemukan siswa/mahasiswa dari berbagai suku, agama, dan daerah, sehingga menjadi tempat ideal melatih nilai Pancasila.',
    },
    relatedCaseId: 'kasus-pemilihan-ketua-organisasi',
  },
  {
    id: 'pancasila-kehidupan-bermasyarakat',
    icon: '🏘️',
    title: 'Pancasila dalam Kehidupan Bermasyarakat',
    description: 'Peran Pancasila sebagai pedoman interaksi sosial dalam kehidupan bermasyarakat.',
    readingTime: 6,
    summary:
      'Nilai-nilai Pancasila menjadi pedoman penting dalam menjaga keharmonisan dan keadilan di tengah kehidupan bermasyarakat yang beragam.',
    keyPoints: [
      'Masyarakat Indonesia terdiri dari berbagai lapisan sosial dan budaya yang berbeda.',
      'Pancasila menjadi pedoman dalam menjaga kerukunan antarwarga.',
      'Nilai gotong royong dan musyawarah sangat terasa dalam kehidupan bertetangga.',
      'Keadilan sosial harus diwujudkan dalam distribusi kesejahteraan di masyarakat.',
    ],
    content:
      'Dalam kehidupan bermasyarakat yang majemuk, nilai-nilai Pancasila berperan penting sebagai pedoman menjaga keharmonisan antarwarga. Sila-sila Pancasila tercermin dalam berbagai tradisi sosial masyarakat Indonesia, seperti kegiatan kerja bakti lingkungan yang mencerminkan gotong royong, musyawarah warga dalam rapat RT/RW untuk mengambil keputusan bersama, hingga semangat saling membantu tetangga yang mengalami kesulitan. Selain itu, keadilan sosial dalam sila kelima menuntut agar kesejahteraan tidak hanya dinikmati sebagian kelompok, melainkan terdistribusi secara merata bagi seluruh anggota masyarakat, termasuk kelompok rentan dan kurang mampu.',
    realLifeExample:
      'Warga yang bergotong royong membangun posyandu untuk balita di lingkungannya adalah wujud nyata sila kelima tentang keadilan sosial bagi seluruh rakyat.',
    miniQuiz: {
      question: 'Manakah contoh penerapan Pancasila dalam kehidupan bertetangga?',
      options: [
        'Mengabaikan tetangga yang kesulitan ekonomi',
        'Ikut serta dalam musyawarah RT/RW dan kerja bakti lingkungan',
        'Hanya bergaul dengan tetangga yang seagama',
        'Menolak membantu kegiatan sosial lingkungan',
      ],
      correctIndex: 1,
      explanation: 'Ikut serta dalam musyawarah dan kerja bakti lingkungan mencerminkan nilai gotong royong dan demokrasi Pancasila.',
    },
    relatedCaseId: 'kasus-keberagaman-budaya',
  },
  {
    id: 'pancasila-keberagaman-indonesia',
    icon: '🎭',
    title: 'Pancasila dan Keberagaman Indonesia',
    description: 'Pancasila sebagai nilai pemersatu di tengah keberagaman suku, agama, ras, dan budaya Indonesia.',
    readingTime: 6,
    summary:
      'Keberagaman Indonesia yang meliputi ribuan suku, bahasa, dan budaya dipersatukan oleh nilai-nilai Pancasila sebagai identitas bersama bangsa.',
    keyPoints: [
      'Indonesia memiliki lebih dari 1.300 suku bangsa dan ratusan bahasa daerah.',
      'Keberagaman merupakan kekayaan bangsa, bukan sumber perpecahan.',
      'Pancasila mengakui dan menghormati perbedaan sebagai bagian dari identitas nasional.',
      'Sikap saling menghargai antarsuku dan antaragama adalah kunci menjaga keberagaman.',
    ],
    content:
      'Indonesia dikenal sebagai negara dengan keberagaman yang sangat tinggi, terdiri dari lebih seribu suku bangsa, ratusan bahasa daerah, serta berbagai agama dan kepercayaan yang dianut masyarakatnya. Alih-alih menjadi sumber perpecahan, keberagaman ini justru dipandang sebagai kekayaan dan kekuatan bangsa apabila dikelola dengan baik menggunakan nilai-nilai Pancasila. Pancasila mengajarkan bahwa setiap suku, agama, dan budaya memiliki kedudukan yang setara dan harus saling menghormati satu sama lain. Sikap inilah yang menjadikan Indonesia mampu mempertahankan persatuan di tengah keberagaman yang dimilikinya selama puluhan tahun sejak kemerdekaan.',
    realLifeExample:
      'Festival budaya kampus yang menampilkan tarian dan makanan khas dari berbagai daerah adalah cara mahasiswa merayakan keberagaman sekaligus mempererat persatuan.',
    miniQuiz: {
      question: 'Bagaimana Pancasila memandang keberagaman suku dan budaya di Indonesia?',
      options: [
        'Sebagai ancaman yang harus dihilangkan',
        'Sebagai kekayaan bangsa yang harus dijaga dan dihormati',
        'Sebagai hal yang tidak penting untuk dibahas',
        'Sebagai alasan untuk membentuk kelompok eksklusif',
      ],
      correctIndex: 1,
      explanation: 'Pancasila memandang keberagaman suku, agama, dan budaya sebagai kekayaan bangsa yang harus dijaga dan dihormati bersama.',
    },
    relatedCaseId: 'kasus-perbedaan-bahasa',
  },
  {
    id: 'pancasila-menghadapi-konflik',
    icon: '🕊️',
    title: 'Pancasila dalam Menghadapi Konflik',
    description: 'Pendekatan penyelesaian konflik yang berlandaskan nilai-nilai Pancasila.',
    readingTime: 6,
    summary:
      'Pancasila menawarkan pendekatan penyelesaian konflik yang mengutamakan musyawarah, dialog, dan kepala dingin dibandingkan kekerasan.',
    keyPoints: [
      'Konflik adalah hal wajar dalam masyarakat yang beragam, namun cara penyelesaiannya harus tepat.',
      'Pancasila mengutamakan dialog dan musyawarah dalam menyelesaikan perbedaan.',
      'Kekerasan dan main hakim sendiri bertentangan dengan nilai kemanusiaan Pancasila.',
      'Mediasi dan kepala dingin lebih efektif dibanding tindakan emosional saat berkonflik.',
    ],
    content:
      'Konflik dan perbedaan pendapat merupakan hal yang wajar terjadi dalam masyarakat yang beragam seperti Indonesia. Namun, cara menyelesaikan konflik tersebut sangat menentukan apakah persatuan bangsa dapat tetap terjaga atau justru semakin terpecah. Pancasila mengajarkan bahwa setiap konflik, baik antarindividu, antarkelompok, maupun antarsuku, sebaiknya diselesaikan melalui dialog, musyawarah, dan kepala dingin, bukan dengan kekerasan atau tindakan main hakim sendiri. Sikap saling mendengarkan, mencari akar masalah, dan mengutamakan kepentingan bersama di atas ego pribadi maupun kelompok adalah kunci penyelesaian konflik yang selaras dengan nilai-nilai Pancasila.',
    realLifeExample:
      'Ketika terjadi kesalahpahaman antara dua kelompok mahasiswa dalam sebuah acara kampus, pihak kampus memfasilitasi mediasi agar kedua belah pihak dapat berdialog dan menemukan solusi bersama.',
    miniQuiz: {
      question: 'Bagaimana cara penyelesaian konflik yang sesuai dengan nilai Pancasila?',
      options: [
        'Menyelesaikan dengan kekerasan agar cepat selesai',
        'Melalui dialog dan musyawarah dengan kepala dingin',
        'Membiarkan konflik berlarut-larut tanpa penyelesaian',
        'Melibatkan pihak luar untuk memperkeruh suasana',
      ],
      correctIndex: 1,
      explanation: 'Pancasila mengajarkan penyelesaian konflik melalui dialog dan musyawarah dengan kepala dingin, bukan kekerasan.',
    },
    relatedCaseId: 'kasus-konflik-antar-teman',
  },
  {
    id: 'pancasila-pedoman-generasi-muda',
    icon: '🚀',
    title: 'Pancasila sebagai Pedoman Generasi Muda',
    description: 'Peran penting generasi muda dalam menjaga dan mengamalkan nilai-nilai Pancasila di masa kini.',
    readingTime: 6,
    summary:
      'Generasi muda memiliki peran strategis sebagai penerus bangsa yang harus mengamalkan dan menjaga relevansi nilai-nilai Pancasila di tengah perubahan zaman.',
    keyPoints: [
      'Generasi muda adalah penerus dan penentu masa depan bangsa Indonesia.',
      'Pancasila harus terus relevan di tengah perkembangan teknologi dan globalisasi.',
      'Generasi muda dapat mengamalkan Pancasila melalui aktivitas nyata, termasuk di dunia digital.',
      'Penguatan karakter Pancasila sejak dini penting untuk membentengi dari pengaruh negatif globalisasi.',
    ],
    content:
      'Sebagai penerus bangsa, generasi muda memiliki peran strategis dalam menjaga kelangsungan nilai-nilai Pancasila di tengah arus globalisasi dan perkembangan teknologi yang begitu cepat. Tantangan yang dihadapi generasi muda saat ini berbeda dengan generasi sebelumnya, mulai dari derasnya informasi di media sosial, pengaruh budaya asing, hingga polarisasi opini di ruang digital. Oleh karena itu, pengamalan nilai-nilai Pancasila oleh generasi muda perlu diwujudkan secara kreatif dan relevan dengan konteks zaman, misalnya melalui konten edukasi positif, kegiatan sosial, maupun sikap bijak dalam bermedia sosial, tanpa meninggalkan esensi dari nilai-nilai luhur Pancasila itu sendiri.',
    realLifeExample:
      'Mahasiswa yang membuat konten edukasi tentang toleransi dan anti-hoaks di media sosial turut berperan menjaga nilai Pancasila di kalangan generasi muda.',
    miniQuiz: {
      question: 'Mengapa generasi muda memiliki peran penting dalam menjaga Pancasila?',
      options: [
        'Karena generasi muda tidak terpengaruh oleh perkembangan zaman',
        'Karena generasi muda adalah penerus dan penentu masa depan bangsa',
        'Karena Pancasila hanya berlaku bagi generasi muda',
        'Karena generasi tua tidak lagi membutuhkan Pancasila',
      ],
      correctIndex: 1,
      explanation: 'Generasi muda adalah penerus bangsa yang menentukan keberlangsungan nilai-nilai Pancasila di masa depan.',
    },
    relatedCaseId: 'kasus-etika-digital',
  },
];

const STUDI_KASUS_DATA = [
  {
    id: 'kasus-hoaks-media-sosial',
    topic: 'Hoaks',
    silaTerkait: 3,
    question:
      'Seorang teman membagikan berita yang belum terbukti kebenarannya ke grup kelas. Apa tindakan yang paling sesuai dengan nilai Pancasila?',
    options: [
      'Langsung menyebarkannya',
      'Membiarkannya',
      'Memeriksa kebenaran informasi terlebih dahulu',
      'Memarahi teman tersebut',
    ],
    correctIndex: 2,
    explanation:
      'Memeriksa kebenaran informasi sebelum menyebarkannya mencegah perpecahan akibat hoaks dan mencerminkan sikap bertanggung jawab.',
    nilaiPancasila: 'Kehati-hatian dan tanggung jawab dalam bermedia sosial demi menjaga persatuan.',
  },
  {
    id: 'kasus-media-sosial-2',
    topic: 'Media Sosial',
    silaTerkait: 2,
    question:
      'Kamu melihat komentar kasar di media sosial yang menyerang pribadi seseorang. Apa sikap terbaik?',
    options: [
      'Ikut berkomentar kasar juga',
      'Melaporkan dan tidak ikut menyebarkan',
      'Membagikan tangkapan layarnya agar viral',
      'Diam saja tanpa peduli',
    ],
    correctIndex: 1,
    explanation: 'Melaporkan konten negatif tanpa ikut menyebarkannya adalah sikap bijak yang menjaga martabat manusia.',
    nilaiPancasila: 'Menghargai harkat dan martabat manusia dalam interaksi digital.',
  },
  {
    id: 'kasus-perbedaan-pendapat',
    topic: 'Perbedaan Pendapat',
    silaTerkait: 4,
    question:
      'Dalam rapat organisasi, pendapatmu berbeda dengan mayoritas anggota. Sikap yang paling sesuai Pancasila adalah...',
    options: [
      'Memaksakan pendapat pribadi',
      'Menyampaikan pendapat lalu menghormati keputusan musyawarah',
      'Keluar dari organisasi',
      'Diam dan tidak peduli hasil rapat',
    ],
    correctIndex: 1,
    explanation: 'Menyampaikan pendapat secara santun lalu menerima hasil musyawarah adalah wujud demokrasi Pancasila.',
    nilaiPancasila: 'Musyawarah untuk mufakat dan menghargai keputusan bersama.',
  },
  {
    id: 'kasus-toleransi-beragama',
    topic: 'Toleransi',
    silaTerkait: 1,
    question:
      'Temanmu sedang beribadah sesuai agamanya saat kegiatan kampus berlangsung. Sikap yang tepat adalah...',
    options: [
      'Mengganggu karena tidak sepaham',
      'Memberi waktu dan ruang untuk beribadah',
      'Mengejeknya di depan teman lain',
      'Melarangnya beribadah saat itu',
    ],
    correctIndex: 1,
    explanation: 'Memberi ruang dan waktu ibadah adalah bentuk toleransi antar umat beragama sesuai sila pertama.',
    nilaiPancasila: 'Toleransi dan penghormatan terhadap kebebasan beribadah.',
  },
  {
    id: 'kasus-kerja-kelompok',
    topic: 'Kerja Kelompok',
    silaTerkait: 5,
    question:
      'Dalam tugas kelompok, satu anggota tidak berkontribusi sama sekali. Tindakan yang paling adil adalah...',
    options: [
      'Membiarkannya tetap dapat nilai sama tanpa bicara',
      'Mengeluarkan dari kelompok tanpa diskusi',
      'Mengajak bicara baik-baik dan mencari solusi bersama',
      'Melaporkan langsung ke dosen tanpa konfirmasi',
    ],
    correctIndex: 2,
    explanation: 'Mengajak berdiskusi terlebih dahulu adalah cara yang adil dan manusiawi sebelum mengambil tindakan lain.',
    nilaiPancasila: 'Keadilan sosial dan musyawarah dalam menyelesaikan masalah kelompok.',
  },
  {
    id: 'kasus-organisasi-kampus',
    topic: 'Organisasi Kampus',
    silaTerkait: 4,
    question:
      'Pemilihan ketua organisasi kampus dilakukan secara voting terbuka. Ini mencerminkan penerapan sila ke...',
    options: ['Sila 1', 'Sila 2', 'Sila 4', 'Sila 5'],
    correctIndex: 2,
    explanation: 'Voting terbuka dan demokratis adalah wujud nyata dari sila keempat tentang kerakyatan dan perwakilan.',
    nilaiPancasila: 'Demokrasi dan kedaulatan mahasiswa dalam menentukan pemimpin.',
  },
  {
    id: 'kasus-demokrasi-kampus',
    topic: 'Demokrasi',
    silaTerkait: 4,
    question:
      'Setelah hasil pemilihan ketua BEM diumumkan, kandidat yang kalah menerima hasil dengan lapang dada. Sikap ini mencerminkan...',
    options: [
      'Sikap apatis',
      'Sportivitas dan penghormatan pada hasil musyawarah/demokrasi',
      'Kekalahan yang memalukan',
      'Ketidakpedulian terhadap organisasi',
    ],
    correctIndex: 1,
    explanation: 'Menerima hasil demokrasi dengan lapang dada adalah wujud kedewasaan berdemokrasi sesuai Pancasila.',
    nilaiPancasila: 'Menghormati hasil keputusan bersama secara demokratis.',
  },
  {
    id: 'kasus-cyberbullying',
    topic: 'Cyberbullying',
    silaTerkait: 2,
    question:
      'Seorang mahasiswa menjadi korban perundungan di media sosial kampus. Sebagai teman, tindakan terbaikmu adalah...',
    options: [
      'Ikut mem-bully agar tidak dijauhi',
      'Mendukung korban dan melaporkan pelaku pada pihak berwenang',
      'Menonton saja tanpa bertindak',
      'Menyebarkan lebih lanjut agar semua tahu',
    ],
    correctIndex: 1,
    explanation: 'Mendukung korban dan melaporkan pelaku adalah wujud kemanusiaan yang adil dan beradab.',
    nilaiPancasila: 'Melindungi harkat dan martabat sesama manusia.',
  },
  {
    id: 'kasus-gotong-royong-kampus',
    topic: 'Gotong Royong',
    silaTerkait: 3,
    question:
      'Kampus mengadakan kegiatan kerja bakti membersihkan lingkungan. Sikap yang mencerminkan nilai Pancasila adalah...',
    options: [
      'Tidak ikut karena bukan kewajiban pribadi',
      'Ikut berpartisipasi aktif bersama mahasiswa lain',
      'Ikut hanya untuk difoto lalu pulang',
      'Menyuruh orang lain mengerjakan bagian kita',
    ],
    correctIndex: 1,
    explanation: 'Berpartisipasi aktif dalam gotong royong mencerminkan persatuan dan kebersamaan sesuai sila ketiga.',
    nilaiPancasila: 'Gotong royong sebagai wujud nyata persatuan Indonesia.',
  },
  {
    id: 'kasus-lingkungan-kampus',
    topic: 'Lingkungan Kampus',
    silaTerkait: 5,
    question:
      'Fasilitas kampus seperti mushola, ruang diskusi, dan perpustakaan digunakan bersama oleh seluruh mahasiswa. Sikap yang tepat adalah...',
    options: [
      'Menggunakan sesuka hati tanpa memikirkan orang lain',
      'Merawat dan menggunakan fasilitas secara bijak dan bergantian',
      'Merusak fasilitas karena bukan milik pribadi',
      'Menguasai fasilitas untuk kelompok tertentu saja',
    ],
    correctIndex: 1,
    explanation: 'Menggunakan fasilitas bersama secara bijak dan adil mencerminkan pemerataan kesejahteraan bagi semua.',
    nilaiPancasila: 'Keadilan sosial dalam pemanfaatan fasilitas bersama.',
  },
  {
    id: 'kasus-dasar-negara',
    topic: 'Dasar Negara',
    silaTerkait: 3,
    question:
      'Seorang mahasiswa baru bertanya mengapa Indonesia menggunakan Pancasila, bukan ideologi lain seperti komunisme atau liberalisme, sebagai dasar negara. Jawaban paling tepat untuk menjelaskan hal ini adalah...',
    options: [
      'Karena Pancasila dipaksakan oleh pemerintah kolonial',
      'Karena Pancasila digali dari nilai-nilai asli budaya dan kepribadian bangsa Indonesia',
      'Karena Pancasila meniru sepenuhnya ideologi negara lain',
      'Karena tidak ada pilihan ideologi lain saat itu',
    ],
    correctIndex: 1,
    explanation: 'Pancasila dipilih sebagai dasar negara karena digali dari nilai-nilai asli budaya, adat, dan kepribadian bangsa Indonesia sendiri, bukan diadopsi dari ideologi asing.',
    nilaiPancasila: 'Pancasila sebagai dasar negara yang mencerminkan jati diri bangsa Indonesia.',
  },
  {
    id: 'kasus-ideologi-negara',
    topic: 'Ideologi Negara',
    silaTerkait: 3,
    question:
      'Sebuah organisasi mahasiswa mengusulkan mengganti asas kegiatan kampus dengan ideologi yang bertentangan dengan Pancasila. Sikap yang tepat sebagai mahasiswa adalah...',
    options: [
      'Mendukung penuh tanpa mempertanyakan',
      'Menolak secara tegas namun tetap membuka ruang dialog dan edukasi',
      'Diam saja karena bukan urusan pribadi',
      'Ikut menyebarkan gagasan tersebut ke teman-teman lain',
    ],
    correctIndex: 1,
    explanation: 'Menolak ideologi yang bertentangan dengan Pancasila secara tegas namun tetap melalui dialog dan edukasi adalah sikap yang bijak dan konstitusional.',
    nilaiPancasila: 'Mempertahankan Pancasila sebagai ideologi negara dari paham yang bertentangan.',
  },
  {
    id: 'kasus-keberagaman-suku',
    topic: 'Keberagaman Suku',
    silaTerkait: 3,
    question:
      'Dalam satu kelas terdapat mahasiswa dari Sumatra, Jawa, Kalimantan, Papua, dan Sulawesi. Sikap yang mencerminkan nilai Pancasila adalah...',
    options: [
      'Membentuk kelompok belajar hanya dengan mahasiswa dari suku yang sama',
      'Berteman dan bekerja sama dengan semua teman tanpa memandang asal suku',
      'Mengejek logat bahasa daerah teman yang berbeda',
      'Menghindari mahasiswa dari daerah tertentu',
    ],
    correctIndex: 1,
    explanation: 'Berteman dan bekerja sama tanpa memandang asal suku mencerminkan persatuan dalam keberagaman sesuai sila ketiga.',
    nilaiPancasila: 'Persatuan Indonesia di tengah keberagaman suku bangsa.',
  },
  {
    id: 'kasus-keberagaman-budaya',
    topic: 'Keberagaman Budaya',
    silaTerkait: 3,
    question:
      'Sebuah acara kampus menampilkan pertunjukan budaya dari berbagai daerah di Indonesia. Salah satu peserta merasa budayanya kurang mendapat tempat. Sikap panitia yang tepat adalah...',
    options: [
      'Mengabaikan keluhan tersebut',
      'Mengevaluasi dan memastikan seluruh budaya mendapat kesempatan tampil secara adil',
      'Membatalkan seluruh acara',
      'Hanya menampilkan budaya mayoritas',
    ],
    correctIndex: 1,
    explanation: 'Memastikan seluruh budaya mendapat kesempatan yang adil mencerminkan penghormatan terhadap keberagaman budaya sesuai Pancasila.',
    nilaiPancasila: 'Menghargai dan memberi ruang setara bagi setiap budaya daerah.',
  },
  {
    id: 'kasus-perbedaan-bahasa',
    topic: 'Perbedaan Bahasa',
    silaTerkait: 3,
    question:
      'Seorang mahasiswa dari daerah terpencil masih kesulitan berbahasa Indonesia dengan lancar dan sering diejek oleh teman sekelas. Sikap yang tepat adalah...',
    options: [
      'Ikut mengejek agar diterima kelompok',
      'Membantu dan membimbingnya agar lebih percaya diri berbahasa Indonesia',
      'Menjauhinya karena dianggap merepotkan',
      'Melaporkannya ke dosen agar dikeluarkan dari kelas',
    ],
    correctIndex: 1,
    explanation: 'Membantu teman yang kesulitan berbahasa Indonesia mencerminkan sikap kemanusiaan dan persatuan sesuai nilai Pancasila.',
    nilaiPancasila: 'Kepedulian terhadap sesama di tengah perbedaan latar belakang bahasa daerah.',
  },
  {
    id: 'kasus-gotong-royong-lingkungan',
    topic: 'Gotong Royong',
    silaTerkait: 3,
    question:
      'Lingkungan tempat tinggal mengadakan kerja bakti membersihkan selokan menjelang musim hujan. Sikap yang mencerminkan nilai Pancasila adalah...',
    options: [
      'Tidak ikut karena merasa itu tugas petugas kebersihan',
      'Ikut berpartisipasi bersama warga lainnya',
      'Ikut hanya jika ada imbalan',
      'Menyuruh pembantu rumah tangga menggantikan tanpa ikut serta',
    ],
    correctIndex: 1,
    explanation: 'Berpartisipasi aktif dalam kerja bakti mencerminkan semangat gotong royong sebagai wujud persatuan dan kepedulian sosial.',
    nilaiPancasila: 'Gotong royong sebagai wujud nyata kebersamaan warga.',
  },
  {
    id: 'kasus-keadilan-sosial',
    topic: 'Keadilan Sosial',
    silaTerkait: 5,
    question:
      'Dalam pembagian bantuan sosial di suatu desa, terdapat dugaan bahwa bantuan lebih banyak diberikan kepada kerabat kepala desa. Sikap yang sesuai nilai Pancasila adalah...',
    options: [
      'Membiarkan karena bukan urusan pribadi',
      'Melaporkan dan mendorong transparansi agar bantuan tepat sasaran',
      'Ikut memanfaatkan kedekatan untuk mendapat bantuan lebih',
      'Menyebarkan tuduhan tanpa bukti yang jelas',
    ],
    correctIndex: 1,
    explanation: 'Mendorong transparansi dan melaporkan dugaan ketidakadilan mencerminkan perjuangan menegakkan keadilan sosial sesuai sila kelima.',
    nilaiPancasila: 'Keadilan sosial dalam distribusi bantuan bagi seluruh rakyat.',
  },
  {
    id: 'kasus-hak-dan-kewajiban',
    topic: 'Hak dan Kewajiban',
    silaTerkait: 2,
    question:
      'Seorang karyawan menuntut haknya untuk cuti, namun belum menyelesaikan kewajiban pekerjaannya yang mendesak. Sikap paling bijak adalah...',
    options: [
      'Tetap mengambil cuti tanpa peduli pekerjaan yang belum selesai',
      'Menyelesaikan komunikasi dan tanggung jawab pekerjaan terlebih dahulu sebelum mengambil hak cuti',
      'Mengabaikan haknya sepenuhnya',
      'Mengambil cuti secara diam-diam tanpa izin',
    ],
    correctIndex: 1,
    explanation: 'Menyeimbangkan antara hak dan kewajiban dengan berkomunikasi terlebih dahulu mencerminkan sikap tanggung jawab sesuai nilai Pancasila.',
    nilaiPancasila: 'Keseimbangan antara hak dan kewajiban sebagai warga negara maupun anggota masyarakat.',
  },
  {
    id: 'kasus-kebebasan-berpendapat',
    topic: 'Kebebasan Berpendapat',
    silaTerkait: 4,
    question:
      'Seorang mahasiswa mengkritik kebijakan kampus melalui unjuk rasa damai. Sikap pihak kampus yang sesuai nilai Pancasila adalah...',
    options: [
      'Membungkam dan menghukum mahasiswa tersebut',
      'Mendengarkan aspirasi dan membuka ruang dialog',
      'Mengabaikan sepenuhnya tanpa tanggapan',
      'Melarang seluruh kegiatan mahasiswa selamanya',
    ],
    correctIndex: 1,
    explanation: 'Mendengarkan aspirasi dan membuka dialog mencerminkan penghormatan terhadap kebebasan berpendapat sesuai demokrasi Pancasila.',
    nilaiPancasila: 'Menghormati kebebasan berpendapat yang disampaikan secara damai dan bertanggung jawab.',
  },
  {
    id: 'kasus-musyawarah-desa',
    topic: 'Musyawarah',
    silaTerkait: 4,
    question:
      'Warga desa berbeda pendapat mengenai lokasi pembangunan balai desa yang baru. Cara penyelesaian yang sesuai Pancasila adalah...',
    options: [
      'Kepala desa memutuskan sendiri tanpa melibatkan warga',
      'Mengadakan musyawarah desa untuk mencapai mufakat bersama',
      'Warga yang tidak setuju dipaksa mengikuti keputusan sepihak',
      'Pembangunan dibatalkan tanpa penjelasan',
    ],
    correctIndex: 1,
    explanation: 'Mengadakan musyawarah desa untuk mufakat adalah cara pengambilan keputusan yang sesuai dengan sila keempat Pancasila.',
    nilaiPancasila: 'Musyawarah untuk mufakat dalam pengambilan keputusan bersama masyarakat.',
  },
  {
    id: 'kasus-pemilihan-ketua-organisasi',
    topic: 'Pemilihan Ketua Organisasi',
    silaTerkait: 4,
    question:
      'Dalam pemilihan ketua himpunan mahasiswa, salah satu kandidat mencoba melakukan politik uang agar terpilih. Sikap yang tepat sebagai mahasiswa adalah...',
    options: [
      'Menerima uang tersebut dan memilihnya',
      'Menolak politik uang dan memilih berdasarkan visi misi yang baik',
      'Diam saja tanpa melapor',
      'Ikut menyebarkan praktik tersebut ke mahasiswa lain',
    ],
    correctIndex: 1,
    explanation: 'Menolak politik uang dan memilih berdasarkan visi misi mencerminkan pemilihan yang jujur dan adil sesuai nilai demokrasi Pancasila.',
    nilaiPancasila: 'Demokrasi yang jujur dan adil tanpa politik uang dalam pemilihan pemimpin.',
  },
  {
    id: 'kasus-konflik-antar-teman',
    topic: 'Konflik Antar Teman',
    silaTerkait: 2,
    question:
      'Dua orang sahabat berselisih paham hingga tidak saling menyapa selama berminggu-minggu. Langkah yang sesuai nilai Pancasila untuk menyelesaikannya adalah...',
    options: [
      'Membiarkan hubungan tetap renggang selamanya',
      'Mengajak bicara baik-baik untuk mencari solusi dan saling memaafkan',
      'Melibatkan lebih banyak orang agar konflik membesar',
      'Menyebarkan keburukan masing-masing pihak',
    ],
    correctIndex: 1,
    explanation: 'Mengajak bicara baik-baik dan saling memaafkan mencerminkan nilai kemanusiaan dan persatuan dalam menyelesaikan konflik pertemanan.',
    nilaiPancasila: 'Kemanusiaan yang adil dan beradab dalam menyelesaikan konflik antarindividu.',
  },
  {
    id: 'kasus-diskriminasi',
    topic: 'Diskriminasi',
    silaTerkait: 2,
    question:
      'Seorang pelamar kerja ditolak hanya karena berasal dari suku dan agama tertentu, bukan karena kualifikasinya. Tindakan tersebut adalah bentuk...',
    options: [
      'Penerapan nilai Pancasila yang baik',
      'Diskriminasi yang bertentangan dengan nilai kemanusiaan Pancasila',
      'Kebijakan perusahaan yang wajar',
      'Bentuk kehati-hatian perusahaan',
    ],
    correctIndex: 1,
    explanation: 'Menolak seseorang hanya berdasarkan suku atau agama merupakan diskriminasi yang jelas bertentangan dengan sila kedua Pancasila.',
    nilaiPancasila: 'Menolak segala bentuk diskriminasi berdasarkan suku, agama, ras, dan golongan.',
  },
  {
    id: 'kasus-toleransi-budaya',
    topic: 'Toleransi',
    silaTerkait: 1,
    question:
      'Sebuah acara kampus dijadwalkan bertepatan dengan waktu ibadah salah satu kelompok agama. Sikap panitia yang sesuai Pancasila adalah...',
    options: [
      'Tetap melanjutkan acara tanpa memberi waktu ibadah',
      'Menjadwalkan ulang atau memberi jeda waktu untuk ibadah',
      'Meminta kelompok tersebut mengabaikan ibadahnya',
      'Mengeluarkan kelompok tersebut dari kepanitiaan',
    ],
    correctIndex: 1,
    explanation: 'Memberi jeda waktu untuk ibadah menunjukkan toleransi dan penghormatan terhadap kebebasan beragama sesuai sila pertama.',
    nilaiPancasila: 'Toleransi dan penghormatan terhadap pelaksanaan ibadah semua umat beragama.',
  },
  {
    id: 'kasus-kepedulian-sosial',
    topic: 'Kepedulian Sosial',
    silaTerkait: 5,
    question:
      'Seorang mahasiswa melihat temannya kesulitan membayar biaya kuliah namun malu untuk meminta bantuan. Sikap yang mencerminkan Pancasila adalah...',
    options: [
      'Mengabaikan karena bukan tanggung jawab pribadi',
      'Menginisiasi penggalangan dana bersama teman-teman lain secara diam-diam agar tidak mempermalukan',
      'Menyebarkan kondisi temannya ke banyak orang tanpa izin',
      'Menjauhi teman tersebut',
    ],
    correctIndex: 1,
    explanation: 'Menginisiasi bantuan secara bijak dan menjaga martabat teman mencerminkan kepedulian sosial sesuai sila kelima dan kedua Pancasila.',
    nilaiPancasila: 'Kepedulian sosial dan kepekaan terhadap kesulitan sesama.',
  },
  {
    id: 'kasus-lingkungan-hidup',
    topic: 'Lingkungan',
    silaTerkait: 5,
    question:
      'Sebuah pabrik membuang limbah ke sungai yang digunakan warga sekitar untuk kebutuhan sehari-hari. Sikap yang sesuai nilai Pancasila adalah...',
    options: [
      'Membiarkan karena pabrik memberi lapangan kerja',
      'Melaporkan kepada pihak berwenang agar lingkungan dan kesejahteraan warga terlindungi',
      'Ikut membuang sampah ke sungai karena sudah tercemar',
      'Diam saja karena bukan urusan pribadi',
    ],
    correctIndex: 1,
    explanation: 'Melaporkan pencemaran lingkungan demi melindungi kesejahteraan warga mencerminkan keadilan sosial dan tanggung jawab bersama.',
    nilaiPancasila: 'Keadilan sosial melalui perlindungan lingkungan hidup bagi kesejahteraan bersama.',
  },
  {
    id: 'kasus-etika-digital',
    topic: 'Etika Digital',
    silaTerkait: 2,
    question:
      'Seorang pengguna media sosial terbiasa berkomentar kasar dan menghina akun lain yang berbeda pendapat. Sikap yang sesuai nilai Pancasila adalah...',
    options: [
      'Melanjutkan kebiasaan tersebut karena hanya di dunia maya',
      'Mengubah cara berkomunikasi menjadi lebih santun meski berbeda pendapat',
      'Membuat akun palsu untuk terus menghina',
      'Mengajak orang lain untuk ikut menghina',
    ],
    correctIndex: 1,
    explanation: 'Berkomunikasi secara santun meski berbeda pendapat di media sosial mencerminkan nilai kemanusiaan yang adil dan beradab dalam etika digital.',
    nilaiPancasila: 'Etika digital yang menjunjung tinggi kemanusiaan dalam berinteraksi di dunia maya.',
  },
  {
    id: 'kasus-hoaks-pemilu',
    topic: 'Hoaks',
    silaTerkait: 4,
    question:
      'Menjelang pemilihan umum, beredar berita bohong yang menjatuhkan salah satu kandidat di media sosial. Sikap yang tepat sebagai warga negara adalah...',
    options: [
      'Ikut menyebarkan agar kandidat favorit menang',
      'Memeriksa kebenaran berita dan tidak ikut menyebarkan hoaks',
      'Membiarkan saja karena bukan tanggung jawabnya',
      'Membuat berita bohong tandingan',
    ],
    correctIndex: 1,
    explanation: 'Memeriksa kebenaran berita sebelum menyebarkannya menjaga kualitas demokrasi dan mencegah kerusakan persatuan akibat hoaks pemilu.',
    nilaiPancasila: 'Menjaga demokrasi yang jujur dan bersih dari informasi bohong.',
  },
  {
    id: 'kasus-cyberbullying-game-online',
    topic: 'Cyberbullying',
    silaTerkait: 2,
    question:
      'Dalam sebuah permainan daring (game online), seorang pemain terus-menerus dihina karena kemampuan bermainnya dianggap buruk. Sikap yang tepat sebagai sesama pemain adalah...',
    options: [
      'Ikut menghina agar tidak dianggap lemah',
      'Menegur pelaku dan mendukung pemain yang menjadi korban',
      'Merekam untuk ditertawakan bersama',
      'Keluar dari permainan tanpa melakukan apa pun',
    ],
    correctIndex: 1,
    explanation: 'Menegur pelaku dan mendukung korban perundungan daring mencerminkan penghormatan terhadap harkat dan martabat manusia sesuai sila kedua.',
    nilaiPancasila: 'Melindungi harkat dan martabat manusia dari perundungan di ruang digital.',
  },
  {
    id: 'kasus-persatuan-generasi-muda',
    topic: 'Persatuan Generasi Muda',
    silaTerkait: 3,
    question:
      'Sekelompok pemuda dari berbagai organisasi kepemudaan berencana mengadakan kegiatan bersama untuk memperingati Hari Sumpah Pemuda. Sikap yang mencerminkan Pancasila adalah...',
    options: [
      'Setiap organisasi bekerja sendiri-sendiri tanpa koordinasi',
      'Berkolaborasi lintas organisasi demi kesuksesan acara bersama',
      'Saling bersaing untuk menjatuhkan organisasi lain',
      'Membatalkan kegiatan karena berbeda latar belakang organisasi',
    ],
    correctIndex: 1,
    explanation: 'Berkolaborasi lintas organisasi mencerminkan semangat persatuan generasi muda sesuai sila ketiga Pancasila dan nilai Sumpah Pemuda.',
    nilaiPancasila: 'Persatuan dan kolaborasi generasi muda lintas organisasi demi kemajuan bangsa.',
  },
];

const QUIZ_DATA = [
  {
    question: 'Pancasila terdiri dari berapa sila?',
    options: ['3', '4', '5', '6'],
    correctIndex: 2,
    explanation: 'Pancasila terdiri dari 5 sila yang menjadi dasar negara Indonesia.',
  },
  {
    question: 'Siapa yang pertama kali memperkenalkan istilah "Pancasila" dalam pidatonya?',
    options: ['Mohammad Hatta', 'Ir. Soekarno', 'Soepomo', 'Mohammad Yamin'],
    correctIndex: 1,
    explanation: 'Ir. Soekarno memperkenalkan istilah Pancasila dalam pidato 1 Juni 1945.',
  },
  {
    question: 'Lambang sila ke-3 Pancasila adalah...',
    options: ['Bintang', 'Pohon Beringin', 'Kepala Banteng', 'Padi dan Kapas'],
    correctIndex: 1,
    explanation: 'Pohon beringin melambangkan sila ketiga, Persatuan Indonesia.',
  },
  {
    question: 'Musyawarah untuk mufakat merupakan pengamalan dari sila ke...',
    options: ['1', '2', '4', '5'],
    correctIndex: 2,
    explanation: 'Sila keempat menekankan musyawarah dalam pengambilan keputusan bersama.',
  },
  {
    question: 'Sikap toleransi antar umat beragama mencerminkan pengamalan sila ke...',
    options: ['1', '2', '3', '4'],
    correctIndex: 0,
    explanation: 'Sila pertama, Ketuhanan Yang Maha Esa, menekankan toleransi antar umat beragama.',
  },
  {
    question: 'Pancasila disahkan sebagai dasar negara pada tanggal...',
    options: ['1 Juni 1945', '17 Agustus 1945', '18 Agustus 1945', '28 Oktober 1945'],
    correctIndex: 2,
    explanation: 'Pancasila disahkan dalam sidang PPKI pada 18 Agustus 1945.',
  },
  {
    question: 'Nilai yang dijabarkan dalam bentuk undang-undang dan peraturan disebut nilai...',
    options: ['Dasar', 'Instrumental', 'Praksis', 'Universal'],
    correctIndex: 1,
    explanation: 'Nilai instrumental adalah penjabaran nilai dasar ke dalam peraturan konkret.',
  },
  {
    question: 'Sikap paling bijak menghadapi berita yang belum jelas kebenarannya adalah...',
    options: [
      'Langsung menyebarkannya',
      'Memeriksa kebenaran informasi terlebih dahulu',
      'Mengabaikan sepenuhnya',
      'Menambahkan opini pribadi',
    ],
    correctIndex: 1,
    explanation: 'Cek fakta sebelum menyebarkan informasi mencerminkan tanggung jawab digital yang selaras dengan Pancasila.',
  },
  {
    question: 'Lambang sila ke-5 Pancasila adalah...',
    options: ['Bintang', 'Rantai', 'Kepala Banteng', 'Padi dan Kapas'],
    correctIndex: 3,
    explanation: 'Padi dan kapas melambangkan sila kelima, Keadilan Sosial bagi Seluruh Rakyat Indonesia.',
  },
  {
    question: 'Gotong royong dalam kegiatan kampus mencerminkan nilai sila ke...',
    options: ['1', '2', '3', '5'],
    correctIndex: 2,
    explanation: 'Gotong royong mencerminkan nilai persatuan pada sila ketiga.',
  },
];

const ACHIEVEMENT_DATA = [
  { id: 'first-step', icon: '🥇', title: 'First Step', description: 'Menyelesaikan pembelajaran pertama.' },
  { id: 'streak-5', icon: '🔥', title: '5 Day Streak', description: 'Belajar selama 5 hari berturut-turut.' },
  { id: 'quiz-master', icon: '🧠', title: 'Quiz Master', description: 'Mendapatkan nilai tinggi pada quiz.' },
  { id: 'case-solver', icon: '🧩', title: 'Case Solver', description: 'Menyelesaikan beberapa studi kasus.' },
  { id: 'pancasila-master', icon: '🏆', title: 'Pancasila Master', description: 'Menyelesaikan seluruh materi.' },
];

const LEVEL_DATA = [
  { level: 1, title: 'Pancasila Beginner', minXp: 0 },
  { level: 2, title: 'Pancasila Explorer', minXp: 300 },
  { level: 3, title: 'Pancasila Learner', minXp: 800 },
  { level: 4, title: 'Pancasila Master', minXp: 1500 },
  { level: 5, title: 'Pancasila Champion', minXp: 2500 },
];

const XP_REWARDS = {
  materi: 50,
  studiKasus: 30,
  quiz: 150,
  challenge: 100,
};

const TEAM_DATA = [
  { name: 'Agil Dwi Pratama', role: 'Frontend Developer', desc: 'Mengembangkan struktur website, interface, interaksi, dan responsive design PancaLearn.', initials: 'AP' },
  { name: 'Dominico Jose Wibowo', role: 'UI/UX Designer', desc: 'Merancang user interface, user experience, layout, dan visual design PancaLearn.', initials: 'DW' },
  { name: 'Muhammad Syaeppuddin', role: 'Content & Research', desc: 'Mengembangkan materi pembelajaran, studi kasus, serta melakukan riset konten Pancasila.', initials: 'MS' },
  { name: 'Muhammad Mukhtasor Jidan', role: 'AI / Backend Developer', desc: 'Mengembangkan backend, integrasi PancaAI, API, dan fitur AI pada PancaLearn.', initials: 'MJ' },
  { name: 'Soutan Maulana Alfarizi', role: 'QA / Tester', desc: 'Melakukan pengujian fitur, menemukan bug, dan memastikan website berjalan dengan baik.', initials: 'SA' },
];

function getTodayChallenges() {
  return [
    { id: 'daily-3-kasus', type: 'daily', title: 'Selesaikan 3 studi kasus hari ini', target: 3, metric: 'casesToday', reward: 150 },
    { id: 'daily-1-quiz', type: 'daily', title: 'Selesaikan 1 quiz hari ini', target: 1, metric: 'quizzesToday', reward: 100 },
    { id: 'weekly-5-materi', type: 'weekly', title: 'Pelajari 5 materi minggu ini', target: 5, metric: 'materiThisWeek', reward: 200 },
  ];
}
