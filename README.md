# Limon Dental Service Website

Tam static HTML/CSS/JS sayt - Render.com Static Site üçün hazırlanmışdır.

## 🚀 Deploy

**Render.com Static Site:**
- Build Command: (boş buraxın)
- Publish Directory: `.` (root)
- No backend required

## 📁 Fayl Strukturu

```
webapp/
├── index.html          ← Əsas səhifə
├── style.css           ← Bütün stillər
├── app.js              ← JavaScript funksionallıq
├── images/             ← Bütün şəkillər buraya əlavə edin
│   ├── logo.png                  ← Limon Dental loqosu
│   ├── product-1.jpg             ← Məhsul şəkilləri (1-6)
│   ├── product-2.jpg
│   ├── ...
│   ├── cert-1.jpg                ← Sertifikat şəkilləri (1-5)
│   ├── cert-2.jpg
│   ├── ...
│   ├── zubler-1.jpg              ← Zubler təlim şəkilləri (1-6)
│   ├── tdss-1.jpg                ← TDSS təlim şəkilləri (1-4)
│   ├── eighteeth-1.jpg           ← Eighteeth şəkilləri (1-5)
│   ├── philden-1.jpg             ← Philden Milling şəkilləri (1-2)
│   ├── satis-1.jpg               ← Satış bölməsi (1-3)
│   ├── servis-1.jpg              ← Servis bölməsi (1-4)
│   ├── xidmet-1.jpg              ← Xidmətlər (1-2)
│   ├── catdirilma-1.jpg          ← Çatdırılma (1-2)
│   ├── partner-cedu.png          ← Partner logoları
│   ├── partner-creality.png
│   ├── partner-philden.png
│   ├── partner-eighteeth.png
│   ├── partner-zetin.png
│   ├── partner-zubler.png
│   └── partner-tdes.png
└── README.md
```

## 🖼️ Şəkil/Video Əlavə Etmək

### Sadə Metod - Birbaşa HTML-də dəyişin:

**index.html** faylını açın və müvafiq `<img src="...">` atributunu öz şəklinizin adı ilə əvəz edin.

**Məsələn məhsul şəkli əlavə etmək üçün:**
```html
<!-- ƏVVƏL -->
<img src="images/product-1.jpg" alt="Məhsul 1"

<!-- SONRA - öz faylınızı images/ qovluğuna kopyalayın -->
<img src="images/cam-cihaz.jpg" alt="CAM Cihazı"
```

### Video Əlavə Etmək:
```html
<!-- Mövcud product-card div-ini tapın və img-ni video ilə əvəz edin -->
<div class="product-card" onclick="openLightbox(this)">
  <video src="images/video-1.mp4" muted autoplay loop playsinline style="width:100%;height:100%;object-fit:cover"></video>
</div>
```

### Yeni Xana (Card) Əlavə Etmək:
```html
<!-- products-grid div-inin içinə yeni card əlavə edin -->
<div class="product-card" onclick="openLightbox(this)">
  <img src="images/yeni-mehsul.jpg" alt="Yeni Məhsul"
       onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
  <div class="media-placeholder" style="display:none">
    <i class="fas fa-image"></i>
    <span>Yeni Məhsul</span>
  </div>
</div>
```

## 📞 Əlaqə Məlumatlarını Dəyişmək

`index.html` faylında axtarın: `010 250 20 15` - müvafiq yerləri dəyişin.
Email: `zaur.mikayilov@limondental.az` - bütün yerlərdə dəyişin.

## 🌐 Form Göndərmək (Gmail)

Forma doldurulub "Göndər" basıldıqda avtomatik Gmail açılır və məlumatlar doldurulmuş şəkildə göndərilir.
Email ünvanını dəyişmək üçün `app.js` faylında axtarın: `zaur.mikayilov@limondental.az`

## ✅ Xüsusiyyətlər

- ✅ Tam static - backend yoxdur
- ✅ Render.com Static Site uyğun
- ✅ Şəkil/video tam ekran açılır (lightbox)
- ✅ Əlaqə nömrələrinə basanda avtomatik yönləndirir
- ✅ WhatsApp linklər
- ✅ Servis müraciət formu (Gmail ilə)
- ✅ Dünya ölkə kodları (+994, +90, +7, +380 və s.)
- ✅ Responsive dizayn
- ✅ Sağ tərəfdə yaşıl bar (original dizayndakı kimi)
