# Vizyon Eskişehir 2036 — Stratejik Kalkınma Planı

T.C. Eskişehir Valiliği için hazırlanan tanıtım web sitesi.
Tasarım PDF'i (`Vizyon_Eskisehir_2036_-_Web_Sitesi_UI-UX.pdf`) referans alınarak
saf HTML + CSS + JavaScript ile kodlanmıştır. Herhangi bir framework veya build
adımı gerektirmez.

## Dosya yapısı

```
index.html            Tüm sayfa içeriği
css/style.css         Tüm stiller (tek dosya, değişken tabanlı)
js/main.js            Arayüz davranışları
assets/
  logo-vizyon.png     Vizyon Eskişehir 2036 logosu (şeffaf)
  logo-valilik.png    T.C. Eskişehir Valiliği logosu (şeffaf)
  logo-watermark.png  Beyaz filigran (hero ve video alanı)
  fonts/              Lato ve Lora (woff2, Türkçe karakter setiyle)
```

## Yayına alma

Dosyaları olduğu gibi sunucuya (veya herhangi bir statik hosting'e) yükleyin.
Kurulum, derleme, veritabanı gerekmez. Yerelde denemek için klasörü açıp
`index.html` dosyasını tarayıcıya sürükleyin.

## Tasarım sistemi

Tüm renkler `css/style.css` içindeki `:root` bloğunda tanımlıdır:

| Değişken | Değer | Kullanım |
|---|---|---|
| `--navy` | `#0A1E33` | Hero, tanıtım bölümü, footer zemini |
| `--navy-2` | `#102D48` | Başlıklar, vurgu kutusu, organizasyon şeması |
| `--blue` | `#1B4A6B` | İkincil şema/rozet rengi |
| `--blue-light` | `#2E6D95` | PUKÖ "Kontrol Et" |
| `--red` | `#B01B22` | Kurumsal kırmızı — butonlar, etiketler, ayraçlar |
| `--gold` | `#F0C24A` | "2036" vurgusu ve koyu zeminde etiketler |
| `--cream` | `#F7F3EA` | Valilik bölümü ve PUKÖ kartı zemini |
| `--gray-bg` | `#F6F8FA` | S.S.S. bölümü zemini |
| `--line` | `#E3E9EF` | Kart kenarlıkları |

Yazı tipleri **kendi sunucunuzdan** servis edilir (`assets/fonts/`): **Lora**
(başlıklar) ve **Lato** (gövde ve arayüz). Harici bir servise bağlantı yoktur;
bu hem KVKK açısından güvenlidir hem de Türkçe karakterlerin (ğ ş ı İ ç ö ü)
her koşulda doğru görünmesini garanti eder. Toplam font ağırlığı ~440 KB'dir.

İçerik kolonu genişliği `--container` (1200px) değişkeniyle kontrol edilir.

## JavaScript ile gelen davranışlar

- Sayfa kaydırıldığında zemini koyulaşan sabit üst menü
- 900px altında hamburger menü (Esc ile kapanır)
- Kaydırmaya göre aktif menü bağlantısının işaretlenmesi
- S.S.S. akordiyonu (aynı anda tek soru açık kalır)
- Bölümlerin görünüme girerken yumuşak açılışı
- Tanıtım filmi alanı için oynatma tetikleyicisi


## İlçelerimiz bölümü

Üst menüdeki **İlçelerimiz** başlığı, 14 ilçenin tamamını gösteren bir açılır
panel açar. Her ilçe kendi sayfasına gider (`ilceler/<ilce>.html`). Ayrıca
`ilceler/index.html` tüm ilçeleri listeleyen bir dizin sayfasıdır.

Her ilçe sayfasında künye alanı (nüfus / yüzölçümü / birincil geçim kaynağı),
genel bakış metni ve ilgili Kaymakamlığın resmî sitesine giden bağlantı bulunur.

### İçerik nasıl güncellenir

Tüm ilçe verisi **tek bir dosyada** toplanmıştır: `data/ilceler.json`.
Bu dosyadaki bir alanı değiştirmek yeterlidir; kod bilgisi gerekmez.

```json
{
  "slug": "sivrihisar",
  "ad": "Sivrihisar",
  "nufus": 20189,
  "yuzolcumu": null,          <- resmî rakam buraya yazılacak
  "gecim": "Tarım ve hayvancılık",
  "kaymakamlik": "https://www.sivrihisar.gov.tr/"
}
```

> `data/ilceler.json` güncellendikten sonra sayfaların yeniden üretilmesi
> gerekir. Bu işlemi yapan tarafa dosyayı iletmeniz yeterlidir.

### Veri durumu

**Nüfus — doğrulanmış.** 14 ilçenin nüfusu TÜİK Adrese Dayalı Nüfus Kayıt
Sistemi 2025 sonuçlarıdır. İlçe nüfuslarının toplamı 927.956 olup TÜİK'in
açıkladığı Eskişehir il nüfusuyla birebir örtüşmektedir.

**Yüzölçümü — işlendi.** 14 ilçenin yüzölçümü ilçe sınır alanlarından
hesaplanmış bir veri setinden alınmıştır. Doğrulama olarak setin iç tutarlılığı
sınanmıştır: 14 ilçenin toplamı 13.979 km² olup resmî il yüzölçümü olan
13.960 km² ile %0,13 sapmayla örtüşmektedir.

Bu set tercih edilmiştir; çünkü basın kaynaklarında dolaşan alternatif rakamlar
(Sivrihisar 2.987 / Mihalıççık 1.670 / Seyitgazi 1.558 km²) kendi içinde
tutarsızdır — bu rakamlar kullanıldığında Odunpazarı'ya 1.795 km² kalmaktadır
ki bir merkez ilçe için gerçekçi değildir.

> Rakamlar yayına hazır durumdadır. Yine de İl Özel İdaresi kayıtlarıyla
> karşılaştırılması, kurumsal kesinlik açısından tavsiye edilir.

Künye alanına ayrıca **nüfus yoğunluğu** (kişi/km²) eklenmiştir; bu değer
nüfusun yüzölçümüne bölünmesiyle otomatik hesaplanmaktadır.

**Geçim kaynağı ve ilçe metinleri — TASLAK.** Bilinen ilçe özellikleri esas
alınarak yazılmıştır; ilgili Kaymakamlıkların onayından geçmelidir.

**Kaymakamlık bağlantıları.** `https://www.<ilce>.gov.tr/` biçiminde
kurulmuştur. Yayına almadan önce her birinin açıldığı teyit edilmelidir.

## Bir Fikrim Var

Üst menünün sağındaki kırmızı buton `fikrim-var.html` sayfasına gider.
Sayfa şu an bilgilendirme durumundadır; form ve arka uç henüz bağlanmamıştır.
Her ilçe sayfasında da aynı butona giden bir çağrı alanı bulunur.

Sonraki aşamada yapılacaklar: form alanlarının tanımlanması, KVKK açık rıza
metni, sunucu tarafı kayıt, yönetim paneli ve Excel dışa aktarımı.

## Tamamlanması gerekenler

**1. Tanıtım filmi.** `js/main.js` içindeki `VIDEO_URL` değişkeni şu an boştur.
Film yayına alındığında bağlantıyı buraya yazın; oynat düğmesine basıldığında
video alanı otomatik olarak oynatıcıyla değişir.

```js
var VIDEO_URL = 'https://www.youtube.com/embed/XXXXXXXXXXX?autoplay=1';
```

**2. Kitapçık dosyası.** Üst menüdeki "Kitapçığı İndir" bağlantısının `href`
değeri `#` olarak bırakılmıştır. PDF kitapçığın yolunu yazın.

**3. S.S.S. cevapları.** Tasarım dosyasında yalnızca ilk sorunun cevabı yer
alıyordu. Diğer altı cevap, plan içeriğine uygun biçimde taslak olarak yazıldı;
kurum onaylı metinlerle değiştirilmelidir.

**4. İletişim bilgileri.** Footer'daki telefon numarası (`+90 222 000 00 00`)
tasarımdaki örnek değerdir; gerçek numarayla güncellenmelidir.

**5. Alt bilgi bağlantıları.** KVKK Aydınlatma Metni, Çerez Politikası,
Erişilebilirlik ve Site Haritası bağlantıları henüz hedefsizdir.

## Erişilebilirlik ve uyumluluk

- Klavye ile tam gezinme, görünür odak halkası
- `prefers-reduced-motion` desteği (animasyonlar kapanır)
- Anlamsal HTML (`header`, `nav`, `section`, `article`, `footer`)
- Açılır/kapanır ögelerde `aria-expanded`, menüde `aria-controls`
- "İçeriğe atla" bağlantısı
- 1440 / 1280 / 1080 / 900 / 640 px kırılma noktalarıyla mobil uyum
- Yazdırma stili dahil
