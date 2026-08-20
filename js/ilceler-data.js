/* ==========================================================================
   VİZYON ESKİŞEHİR 2036 — İLÇE VERİ TABANI
   --------------------------------------------------------------------------
   Sitedeki TÜM ilçe bilgileri yalnızca bu dosyadan beslenir.
   Bir ilçe bilgisini güncellemek için sadece bu dosyayı düzenlemek yeterlidir;
   menü, ilçeler sayfası ve ilçe detay sayfaları otomatik olarak güncellenir.

   VERİ KAYNAKLARI VE DOĞRULAMA DURUMU
   --------------------------------------------------------------------------
   nufus        : TÜİK Adrese Dayalı Nüfus Kayıt Sistemi (ADNKS), 2025 yılı
                  sonuçları. DOĞRULANMIŞTIR — 14 ilçenin toplamı TÜİK'in
                  açıkladığı il nüfusu olan 927.956 kişiye tam olarak eşittir.

   yuzolcumu    : ! TEYİT BEKLİYOR ! Aşağıdaki alanlar bilinçli olarak boş
                  bırakılmıştır. Basın ve açık kaynaklarda aynı ilçe için
                  birbiriyle çelişen değerler yer almaktadır (örnek: Sivrihisar
                  için 2.748 km², 2.987 km² ve 4.103 km² olmak üzere üç ayrı
                  rakam tespit edilmiştir). Resmî bir kurum sitesinde teyit
                  edilmemiş rakam yayımlanmaması esas alınmıştır.
                  Doldurulacak kaynak: Valilik İl Envanteri / Tapu ve Kadastro
                  Genel Müdürlüğü / ilgili Kaymakamlık kayıtları.
                  Alan boş kaldığı sürece sayfada "" görünür.

   gecimKaynagi : Genel kabul görmüş ekonomik yapı bilgisidir. Yayın öncesinde
                  ilgili Kaymakamlıklardan yazılı teyit alınması önerilir.

   kaymakamlik  : T.C. İçişleri Bakanlığı standart alan adı yapısı
                  (www.<ilce>.gov.tr). Sivrihisar üzerinde doğrulanmıştır.
                  Yayın öncesinde 14 adresin tamamının açıldığı kontrol
                  edilmelidir (bkz. README — Yayın Öncesi Kontrol Listesi).
   ========================================================================== */

window.ILCELER = [
  {
    slug: "alpu",
    ad: "Alpu",
    tur: "İlçe",
    nufus: 9725,
    yuzolcumu: null,
    gecimKaynagi: "Tarım (şeker pancarı, tahıl) ve hayvancılık",
    kaymakamlik: "https://www.alpu.gov.tr/",
    ozet: "Porsuk Ovası'nın verimli topraklarında yer alan Alpu, şeker pancarı ve tahıl üretimiyle il tarımının önemli merkezlerinden biridir.",
    tema: "Tarımsal Üretim ve Kırsal Kalkınma"
  },
  {
    slug: "beylikova",
    ad: "Beylikova",
    tur: "İlçe",
    nufus: 5611,
    yuzolcumu: null,
    gecimKaynagi: "Tarım ve hayvancılık",
    kaymakamlik: "https://www.beylikova.gov.tr/",
    ozet: "Tarım ve hayvancılık temelli ekonomik yapısının yanı sıra madencilik alanındaki gelişmelerle gündeme gelen bir ilçedir.",
    tema: "Tarım, Hayvancılık ve Yeni Kaynaklar"
  },
  {
    slug: "cifteler",
    ad: "Çifteler",
    tur: "İlçe",
    nufus: 14487,
    yuzolcumu: null,
    gecimKaynagi: "Tarım ve hayvancılık",
    kaymakamlik: "https://www.cifteler.gov.tr/",
    ozet: "Sakarya Nehri'nin doğduğu kaynakların bulunduğu Çifteler, su kaynakları ve tarımsal üretim kapasitesiyle öne çıkar.",
    tema: "Su Kaynakları ve Tarım"
  },
  {
    slug: "gunyuzu",
    ad: "Günyüzü",
    tur: "İlçe",
    nufus: 5008,
    yuzolcumu: null,
    gecimKaynagi: "Tarım ve hayvancılık",
    kaymakamlik: "https://www.gunyuzu.gov.tr/",
    ozet: "İlin güneydoğusunda yer alan Günyüzü, geniş tarım arazileri ve küçükbaş hayvancılık geleneğiyle bilinir.",
    tema: "Kırsal Ekonomi"
  },
  {
    slug: "han",
    ad: "Han",
    tur: "İlçe",
    nufus: 2126,
    yuzolcumu: null,
    gecimKaynagi: "Tarım ve hayvancılık",
    kaymakamlik: "https://www.han.gov.tr/",
    ozet: "İlin en az nüfuslu ilçesi olan Han, tarihî ticaret yolları üzerindeki konumu ve kırsal üretim yapısıyla dikkat çeker.",
    tema: "Kırsal Kalkınma ve Tarihî Miras"
  },
  {
    slug: "inonu",
    ad: "İnönü",
    tur: "İlçe",
    nufus: 6114,
    yuzolcumu: null,
    gecimKaynagi: "Sanayi ve tarım",
    kaymakamlik: "https://www.inonu.gov.tr/",
    ozet: "Kurtuluş Savaşı'nın dönüm noktalarına adını veren İnönü, havacılık ve savunma sanayii yatırımlarının etki alanında yer alır.",
    tema: "Sanayi ve Millî Tarih"
  },
  {
    slug: "mahmudiye",
    ad: "Mahmudiye",
    tur: "İlçe",
    nufus: 7407,
    yuzolcumu: null,
    gecimKaynagi: "At yetiştiriciliği, tarım ve hayvancılık",
    kaymakamlik: "https://www.mahmudiye.gov.tr/",
    ozet: "Osmanlı döneminde kurulan Çiftlik-i Hümâyûn geleneğinin sürdüğü Mahmudiye, safkan Arap atı yetiştiriciliğinin ülkemizdeki en önemli merkezlerindendir.",
    tema: "Atçılık ve Tarımsal Miras"
  },
  {
    slug: "mihalgazi",
    ad: "Mihalgazi",
    tur: "İlçe",
    nufus: 2861,
    yuzolcumu: null,
    gecimKaynagi: "Seracılık, meyvecilik ve tarım",
    kaymakamlik: "https://www.mihalgazi.gov.tr/",
    ozet: "Sakarya Vadisi'nin ılıman iklimi sayesinde seracılık ve meyve üretiminde uzmanlaşmış, doğa turizmine açık bir ilçedir.",
    tema: "Seracılık ve Doğa Turizmi"
  },
  {
    slug: "mihaliccik",
    ad: "Mihalıççık",
    tur: "İlçe",
    nufus: 7605,
    yuzolcumu: null,
    gecimKaynagi: "Tarım, ormancılık ve madencilik",
    kaymakamlik: "https://www.mihaliccik.gov.tr/",
    ozet: "Orman varlığı ve yer altı kaynaklarıyla öne çıkan Mihalıççık, tarım ve madencilik faaliyetlerinin birlikte yürütüldüğü bir ilçedir.",
    tema: "Orman, Tarım ve Yer Altı Kaynakları"
  },
  {
    slug: "odunpazari",
    ad: "Odunpazarı",
    tur: "Merkez ilçe",
    nufus: 431652,
    yuzolcumu: null,
    gecimKaynagi: "Sanayi, ticaret, hizmet ve turizm",
    kaymakamlik: "https://www.odunpazari.gov.tr/",
    ozet: "İlin en kalabalık ilçesi olan Odunpazarı, tarihî evleri, müzeleri ve el sanatlarıyla Eskişehir'in kültür turizminin kalbidir.",
    tema: "Kültür Turizmi ve Kent Ekonomisi"
  },
  {
    slug: "saricakaya",
    ad: "Sarıcakaya",
    tur: "İlçe",
    nufus: 4477,
    yuzolcumu: null,
    gecimKaynagi: "Seracılık, meyvecilik ve tarım",
    kaymakamlik: "https://www.saricakaya.gov.tr/",
    ozet: "Mikroklima özelliği sayesinde erken turfanda sebze ve meyve üretiminde öne çıkan Sarıcakaya, doğa sporları için de elverişli bir coğrafyaya sahiptir.",
    tema: "Turfanda Üretim ve Doğa Turizmi"
  },
  {
    slug: "seyitgazi",
    ad: "Seyitgazi",
    tur: "İlçe",
    nufus: 12565,
    yuzolcumu: null,
    gecimKaynagi: "Tarım, hayvancılık ve madencilik",
    kaymakamlik: "https://www.seyitgazi.gov.tr/",
    ozet: "Seyyid Battal Gazi Külliyesi ile inanç turizminin önemli duraklarından olan Seyitgazi, aynı zamanda tarım ve madencilik faaliyetleriyle öne çıkar.",
    tema: "İnanç Turizmi ve Tarım"
  },
  {
    slug: "sivrihisar",
    ad: "Sivrihisar",
    tur: "İlçe",
    nufus: 20189,
    yuzolcumu: null,
    gecimKaynagi: "Tarım ve hayvancılık",
    kaymakamlik: "https://www.sivrihisar.gov.tr/",
    ozet: "Merkez ilçeler dışındaki en kalabalık ilçe olan Sivrihisar, tarihî kent dokusu, Nasreddin Hoca mirası ve kavşak konumuyla stratejik bir öneme sahiptir.",
    tema: "Tarihî Kent ve Tarım"
  },
  {
    slug: "tepebasi",
    ad: "Tepebaşı",
    tur: "Merkez ilçe",
    nufus: 398129,
    yuzolcumu: null,
    gecimKaynagi: "Sanayi, ticaret, hizmet ve eğitim",
    kaymakamlik: "https://www.tepebasi.gov.tr/",
    ozet: "Üniversiteler, sanayi bölgeleri ve hizmet sektörünün yoğunlaştığı Tepebaşı, ilin ekonomik ve akademik dinamizminin merkezindedir.",
    tema: "Eğitim, Sanayi ve Kent Ekonomisi"
  }
];

/* İl geneli künye — ilçe sayfalarında karşılaştırma için kullanılır.
   Kaynak: TÜİK ADNKS 2025. */
window.IL_KUNYE = {
  ad: "Eskişehir",
  nufus: 927956,
  ilceSayisi: 14,
  veriYili: "2025",
  veriKaynagi: "TÜİK Adrese Dayalı Nüfus Kayıt Sistemi (ADNKS), 2025"
};
