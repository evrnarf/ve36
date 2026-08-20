# Yükleme talimatı

## Önemli: dosyaların tamamını değiştirin

Bu sürümde **HTML, CSS ve JavaScript birlikte** değişti. Yalnızca bir kısmını
yüklemek sorun çıkarır; çünkü mobil menüdeki ok düğmesi HTML içinde, davranışı
JavaScript içinde, görünümü ise CSS içinde tanımlıdır. Üçü aynı sürümde olmalıdır.

Deponuzdaki şu dosya ve klasörlerin tamamını bu paketteki karşılıklarıyla
değiştiriniz:

```
index.html
fikrim-var.html
projelerimiz.html   (YENİ)
basinda-biz.html    (YENİ)
404.html
ilceler/          (15 dosya: dizin + 14 ilçe)
css/style.css
js/main.js
js/ilceler-data.js
data/ilceler.json
assets/           (logolar ve yazı tipleri)
.nojekyll
```

En pratik yöntem: depodaki eski dosyaları silip bu paketin içeriğini olduğu gibi
yüklemektir.

## Tarayıcı önbelleği

Bu sürümde stil ve betik bağlantılarına sürüm etiketi eklenmiştir:

```html
<link rel="stylesheet" href="css/style.css?v=4">
<script src="js/main.js?v=4"></script>
```

Tarayıcı bu adresi yeni bir dosya olarak gördüğü için eski sürümü göstermez.
Daha önce yaşanan "değişiklik görünmüyor" sorunu böylece ortadan kalkar.

**Bundan sonra CSS veya JavaScript her değiştiğinde** bu numarayı bir artırınız
(`?v=4`, `?v=5` ...). Numara değişmezse tarayıcılar eski dosyayı göstermeye
devam edebilir.

Yükleme sonrası ilk kontrolde telefonunuzun eski sürümü göstermediğinden emin
olmak için sayfayı gizli sekmede açınız.

## Yükleme sonrası kontrol listesi

- [ ] Ana sayfada mobil menü açılıyor
- [ ] **Bir ilçe sayfasında** mobil menü açılıyor
- [ ] İlçelerimiz başlığındaki ok, listeyi açıp kapatıyor
- [ ] Liste tek sütun, alt alta; yanlarda nüfus rakamı yok
- [ ] Menü açılırken sayfa yana kaymıyor
- [ ] Sıkça Sorulan Sorular kutuları açılıyor


## Bu sürümde eklenenler

**Projelerimiz** (`projelerimiz.html`) ve **Basında Biz** (`basinda-biz.html`)
sayfaları eklenmiş, her ikisi de üst menüye ve altbilgiye işlenmiştir.

İçerik henüz gelmediği için sayfalar, Bir Fikrim Var sayfasındaki gibi
"içerik hazırlanıyor" durumundadır. Her sayfada, yayına alındığında neyin
görüneceğini açıklayan bir bilgi kutusu bulunur.

İçerik hazır olduğunda değiştirilecek bölümler:

- `projelerimiz.html` → "İçerik hazırlanıyor" kutusu, yerini proje listesine bırakacak
- `basinda-biz.html` → aynı kutu, yerini haber ve bülten listesine bırakacak

Her iki sayfada da alttaki üç kutu (Projelerimiz'de tematik başlıklar,
Basında Biz'de iletişim kanalları) şimdiden doldurulmuş durumdadır.
