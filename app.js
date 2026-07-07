/* ============================================================
   LIMON DENTAL SERVICE - app.js
   Pure static JavaScript - no backend required
   ============================================================ */

/* ============================================================
   LIGHTBOX - full screen image/video viewer
   ============================================================ */
function openLightbox(el) {
  var img = el.querySelector('img');
  var vid = el.querySelector('video');
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lightbox-img');
  var lbVid = document.getElementById('lightbox-video');

  if (img && img.style.display !== 'none' && img.src) {
    lbImg.src = img.src;
    lbImg.style.display = 'block';
    lbVid.style.display = 'none';
    lbVid.pause && lbVid.pause();
  } else if (vid && vid.src) {
    lbVid.src = vid.src;
    lbVid.style.display = 'block';
    lbImg.style.display = 'none';
    lbVid.play && lbVid.play();
  } else {
    return; // placeholder - no media to show
  }

  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  var lb = document.getElementById('lightbox');
  var lbVid = document.getElementById('lightbox-video');
  lb.classList.remove('open');
  document.body.style.overflow = '';
  if (lbVid) { lbVid.pause && lbVid.pause(); lbVid.src = ''; }
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});

/* ============================================================
   AYARLAR PANEL
   ============================================================ */
function openAyarlar() {
  document.getElementById('ayarlar-panel').classList.add('open');
  document.getElementById('ayarlar-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAyarlar() {
  document.getElementById('ayarlar-panel').classList.remove('open');
  document.getElementById('ayarlar-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   AYARLAR SUB-PAGE NAVIGATION
   ============================================================ */
function showPage(pageId, btn) {
  // Hide all pages
  var pages = document.querySelectorAll('.ayarlar-page');
  pages.forEach(function(p) { p.style.display = 'none'; });

  // Remove active from all nav items
  var navItems = document.querySelectorAll('.ayarlar-nav-item');
  navItems.forEach(function(n) { n.classList.remove('active'); });

  // Show target page
  var target = document.getElementById('page-' + pageId);
  if (target) { target.style.display = 'block'; }

  // Activate clicked nav item
  if (btn) { btn.classList.add('active'); }
}

/* ============================================================
   TOGGLE BUTTONS (Bəli / Xeyir)
   ============================================================ */
function toggleBtn(btn, fieldName, value) {
  // Find parent toggle group and deactivate siblings
  var group = btn.closest('.toggle-btns');
  if (group) {
    group.querySelectorAll('.toggle-btn').forEach(function(b) {
      b.classList.remove('active');
    });
    var hiddenInput = group.querySelector('input[type="hidden"]');
    if (hiddenInput) { hiddenInput.value = value === 'beli' ? 'Bəli' : 'Xeyir'; }
  }
  btn.classList.add('active');
}

/* ============================================================
   IMAGE PREVIEW for form upload
   ============================================================ */
function showSelectedImages(input) {
  var preview = document.getElementById('selected-images-preview');
  preview.innerHTML = '';
  if (input.files && input.files.length > 0) {
    Array.from(input.files).forEach(function(file) {
      if (file.type.startsWith('image/')) {
        var reader = new FileReader();
        reader.onload = function(e) {
          var img = document.createElement('img');
          img.src = e.target.result;
          preview.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    });
  }
}

/* ============================================================
   FORM SUBMIT - Send via mailto (Gmail)
   ============================================================ */
function sendForm(e) {
  e.preventDefault();
  var form = document.getElementById('service-form');
  var data = new FormData(form);

  var name          = data.get('name') || '';
  var phoneCode     = data.get('phone_code') || '+994';
  var phone         = data.get('phone') || '';
  var email         = data.get('email') || '';
  var equipName     = data.get('equipment_name') || '';
  var brandModel    = data.get('brand_model') || '';
  var serial        = data.get('serial') || '';
  var purchaseDate  = data.get('purchase_date') || '';
  var warranty      = data.get('warranty') || '';
  var problemDesc   = data.get('problem_desc') || '';
  var problemStart  = data.get('problem_start') || '';
  var serviced      = data.get('serviced') || '';

  var subject = encodeURIComponent('Yeni Servis Müraciəti - ' + (equipName || 'Avadanlıq'));

  var body = encodeURIComponent(
    'AVADANLIQ QƏBUL FORMU\n' +
    '================================\n\n' +
    '1. MÜŞTƏRİ MƏLUMATI\n' +
    '----------------------------\n' +
    'Ad, Soyad: ' + name + '\n' +
    'Telefon: ' + phoneCode + ' ' + phone + '\n' +
    'Email: ' + email + '\n\n' +
    '2. AVADANLIQ MƏLUMATI\n' +
    '----------------------------\n' +
    'Avadanlığın adı: ' + equipName + '\n' +
    'Marka / Model: ' + brandModel + '\n' +
    'Seriya nömrəsi: ' + serial + '\n' +
    'Alınma tarixi: ' + purchaseDate + '\n' +
    'Zəmanət: ' + warranty + '\n\n' +
    '3. PROBLEMİN MƏLUMATI\n' +
    '----------------------------\n' +
    'Problem təsviri: ' + problemDesc + '\n' +
    'Problem nə vaxtdan başlayıb: ' + problemStart + '\n' +
    'Əvvəl servis olunub: ' + serviced + '\n\n' +
    '================================\n' +
    'Limon Dental Service - limondental.az'
  );

  var mailtoLink = 'mailto:zaur.mikayilov@limondental.az?subject=' + subject + '&body=' + body;
  window.location.href = mailtoLink;

  // Show success message
  setTimeout(function() {
    alert('Müraciətiniz göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.');
    form.reset();
    // Reset toggle buttons
    document.querySelectorAll('.toggle-btn').forEach(function(b) { b.classList.remove('active'); });
    document.querySelectorAll('.toggle-btn:first-child').forEach(function(b) { b.classList.add('active'); });
    document.getElementById('selected-images-preview').innerHTML = '';
  }, 500);
}

/* ============================================================
   Initialize on page load
   ============================================================ */
document.addEventListener('DOMContentLoaded', function() {
  // Show first page by default in Ayarlar
  var firstPage = document.getElementById('page-satis');
  if (firstPage) firstPage.style.display = 'block';
});
