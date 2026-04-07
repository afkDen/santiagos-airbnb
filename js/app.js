/* ================================================================
   SANTIAGOS RESORT — app.js (clean single-file)
   No duplicates. No stray fragments. Tested syntax.
================================================================ */

/* ── SITE CONFIG ── */
const AIRBNB = 'https://www.airbnb.com/rooms/1643466979772957530';
const WA_MSG = 'https://wa.me/639178005320?text=Hi!+Im+interested+in+booking+Santiagos+Resort+Tagaytay.';

/* ── VERIFIED PHOTO MAP ── */
const PH = 'https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/';
const P = {
  ext1:'aedee59c-00c6-48fc-8edc-e684ae38a6d3',  ext2:'6043831d-e9d1-4e7d-a501-1876e1e88edf',
  ext3:'ffd5ba89-7c68-48ed-bca7-529add0f6b8e',  ext4:'9e59c702-0746-4b07-94a1-9e713fe5863b',
  ext5:'12ceda05-0b84-4e63-ae50-b7a1ded55a8a',  ext6:'19b6d0b8-7a69-4408-9ee1-1a844516a8a4',
  ext7:'22fe05b4-1397-4cc6-9704-cc98e7085cd3',  ext8:'37fb90b8-9556-4c2a-a22f-6c3936a6aebc',
  ext9:'72b11e48-9433-4fdb-b3da-5fff4c67f5f5',  ext10:'98b5142f-e72f-4cdf-8d7a-c91d1a0e356d',
  ext11:'855fa635-4bc7-4efb-9ea7-de367495c537', ext12:'a5949505-2121-482c-8525-c9fad7abb6d6',
  pool1:'51364ca8-54b3-4f0b-9840-3f92171707eb', pool2:'e9fae679-5f90-4c28-9675-71c03be31de0',
  pool3:'3af6b26c-4a6b-427f-a28a-c767df166b86', pool4:'0017c9e7-9077-4899-86df-49f2dfecd075',
  pool5:'58ac6fe6-7176-4304-bcee-34cd1d2e6118', pool6:'b800534f-c860-4d16-a179-fb2c4a90a4b8',
  kara1:'0602e46f-d78c-4a27-87fb-4a7247813d55', kara2:'066847df-060c-4ae6-ba4c-fbe732b4c9a5',
  kara3:'cfbd6cbd-76b3-42d1-bb7b-6ba352d41450',
  bill1:'0ce25d04-888c-42a6-ad43-4433d8d60294', bill2:'d689919f-f256-4d90-9753-af61e7965c31',
  bill3:'efa63c44-7255-4a55-a1b6-cebe5482b50f',
  arc1:'0b3fcbdd-4ad1-459b-8dd3-786a774c8521',  arc2:'8d5c0226-0717-4fe1-9a76-88c002944ec1',
  arc3:'c7618b1a-3fd3-4220-91e9-fdd87d3f4b14',
  din1:'7ab52115-9626-4fee-94c1-31776317887f',  din2:'97ca24a6-4a16-4fdf-8e34-18f5f6d50574',
  din3:'422ade24-d533-4620-94ef-2f2311c99066',
  kit1:'07c88337-25d4-4164-977b-ade6a77d9f7f',  kit2:'7a14c4ef-4630-4707-b982-b92a72a4cbc3',
  kit3:'34cbfa30-4591-469a-8bb0-e9e1ea6e3d38',  kit4:'679d0422-ca4d-483a-9930-9b9171905841',
  lou1:'34ce9446-3458-48de-8f19-4f6dee8d8ae1',  lou2:'27041d27-0bfc-4148-9167-4f0e51843487',
  lou3:'53089b73-cb81-40b3-b94e-011048c96502',  lou4:'cd39776f-1169-40fd-9f97-acc3c480ec90',
  liv1:'5f3c7ae0-83d1-4d7e-80ee-8882caeafb41',
  bed1:'1dfafeed-b7d8-4ee2-9685-f4b21ee2ac0c',  bed2:'1eea7c15-e6bc-480f-9049-7a7ca831306a',
  bed3:'7fdad08c-cd56-4bd8-9913-df31206d2a71',  bed4:'231f8e62-c8af-4ab9-ab7b-749426418278',
  bed5:'412ac041-c128-4dcb-be95-9613525155ac',  bed6:'a7a5da0a-0cca-4155-a690-85d8a35d5073',
  bed7:'a416db78-e791-485f-99cd-681dfc37c943',  bed8:'c7314967-2138-4874-bf9c-036713e1e84f',
  bat1:'6a64f515-0249-440e-937b-73fe1cc63898',  bat2:'7bd29da9-1398-456e-81ab-7f3f06a8b10f',
  bat3:'73e7dd06-2f9b-479e-8925-0a24bf769a9c',  bat4:'380a4b0e-bc04-4540-8ab5-3446055037b4',
  bat5:'01672d22-f62b-4081-9372-e090179020ca',  bat6:'5444278e-4394-474a-aa9f-e233672be193',
  bat7:'edf6c0b7-2c0d-416a-895b-ae85e5455368',
  gym1:'7b8c51d9-24b2-4846-b173-6d2459c53981',  gym2:'23fa05de-4f88-4694-9357-74ae76635ab2',
  gym3:'d6337543-a580-4b38-aa27-35657a04ec03',
  fir1:'15fd6a0c-36f4-4c79-a187-279fc9e1d45c',  fir2:'cbbf4bee-4ba1-41ec-8d0c-922684e7a936',
  bbl1:'7932f6a1-879d-4276-ab69-433d47ad8ca0',  bbl2:'ff9e2cfe-96b7-4992-8cd8-81499c84335f',
  out1:'58004ff1-df45-4949-ad63-6316ab7abe96',  out2:'77973507-5528-471c-b8ac-e6d0c1968e2b',
  out3:'aacade7c-b80f-4262-bf7a-465fd693b8a1',  out4:'c71e1998-1707-4dac-96aa-ecdef112ada0',
  out5:'e5bd4dfa-98c5-4931-baf0-cebb6ed2d048',  out6:'e7b07cde-5fc2-4104-bc75-d55b0feeefbd',
  out7:'ee1d6f90-bc3c-486b-a8ad-cbdfa2484e5a',  out8:'f267480b-660d-406e-b3ba-da1a4ab75272',
};

function img(key, w) {
  return PH + P[key] + '.jpeg?im_w=' + (w || 1920);
}

/* ── GALLERY IMAGES for lightbox ── */
const GALLERY_IMGS = [
  {src:img('ext1'),  label:'Resort Exterior'},
  {src:img('ext2'),  label:'Resort Exterior'},
  {src:img('pool1'), label:'Swimming Pool'},
  {src:img('pool5'), label:'Pool Area'},
  {src:img('kara1'), label:'Karaoke Lounge'},
  {src:img('kara2'), label:'Karaoke Lounge'},
  {src:img('kara3'), label:'Karaoke Lounge'},
  {src:img('bill3'), label:'Billiards Room'},
  {src:img('bill1'), label:'Billiards Table'},
  {src:img('arc1'),  label:'Arcade Games'},
  {src:img('din3'),  label:'Dining Area'},
  {src:img('din1'),  label:'Dining Room'},
  {src:img('kit4'),  label:'Kitchen'},
  {src:img('kit1'),  label:'Kitchen'},
  {src:img('lou4'),  label:'Lounge Area'},
  {src:img('lou1'),  label:'Lounge'},
  {src:img('liv1'),  label:'Living Area'},
  {src:img('bed1'),  label:'Bedroom'},
  {src:img('bed3'),  label:'Bedroom'},
  {src:img('bed5'),  label:'Bedroom'},
  {src:img('bat1'),  label:'Bathroom'},
  {src:img('gym1'),  label:'Gym & Fitness'},
  {src:img('fir1'),  label:'Bonfire Area'},
  {src:img('bbl1'),  label:'Basketball Court'},
  {src:img('out1'),  label:'Outdoor Dining'},
  {src:img('out5'),  label:'Outdoor Spaces'},
  {src:img('ext5'),  label:'Resort Views'},
  {src:img('ext7'),  label:'Resort Architecture'},
  {src:img('pool3'), label:'Pool'},
  {src:img('pool6'), label:'Pool'},
];

/* ── CURRENT PAGE ── */
const CURR_PAGE = (function() {
  var s = window.location.pathname.split('/').pop();
  return s || 'index.html';
}());

/* ── NAV HTML ── */
var NAV_HTML = [
  '<div id="progress-bar"></div>',
  '<div id="splash">',
  '  <div class="sp-logo">Santiagos Resort</div>',
  '  <div class="sp-tagline">Alfonso \u00b7 Tagaytay \u00b7 Philippines</div>',
  '  <div class="sp-track"><div class="sp-fill"></div></div>',
  '</div>',
  '<div id="mob-nav">',
  '  <a href="index.html" onclick="closeMob()">Home</a>',
  '  <a href="gallery.html" onclick="closeMob()">Gallery</a>',
  '  <a href="amenities.html" onclick="closeMob()">Amenities</a>',
  '  <a href="packages.html" onclick="closeMob()">Packages</a>',
  '  <a href="location.html" onclick="closeMob()">Location</a>',
  '  <a href="events.html" onclick="closeMob()">Events</a>',
  '  <a href="contact.html" class="mob-book" onclick="closeMob()">Book Now</a>',
  '</div>',
  '<nav id="nav">',
  '  <a class="nav-brand" href="index.html">Santiagos Resort</a>',
  '  <ul class="nav-links">',
  '    <li><a href="index.html" data-p="index.html">Home</a></li>',
  '    <li><a href="gallery.html" data-p="gallery.html">Gallery</a></li>',
  '    <li><a href="amenities.html" data-p="amenities.html">Amenities</a></li>',
  '    <li><a href="packages.html" data-p="packages.html">Packages</a></li>',
  '    <li><a href="location.html" data-p="location.html">Location</a></li>',
  '    <li><a href="events.html" data-p="events.html">Events</a></li>',
  '    <li><a href="contact.html" class="nav-book">Book Now</a></li>',
  '  </ul>',
  '  <button class="hamburger" id="hamburger" onclick="toggleMob()">',
  '    <span></span><span></span><span></span>',
  '  </button>',
  '</nav>',
].join('\n');

/* ── FOOTER HTML ── */
var FOOTER_HTML = [
  '<div id="float-pill">',
  '  <div class="fp-info"><div class="fp-label">Alfonso, Tagaytay</div><div class="fp-val">Up to 40 Guests</div></div>',
  '  <div class="fp-info" style="border:none"><div class="fp-label">8 Baths \u00b7 2 VIP Rooms</div><div class="fp-val">Direct Bookings</div></div>',
  '  <button class="fp-btn" onclick="location.href=\'contact.html\'">Book Now</button>',
  '  <button class="fp-x" onclick="document.getElementById(\'float-pill\').style.display=\'none\'">&#10005;</button>',
  '</div>',
  '<div id="wa-btn" onclick="window.open(\'' + WA_MSG + '\',\'_blank\')" title="WhatsApp">',
  '  <div class="wa-ring"></div>',
  '  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
  '</div>',
  '<footer id="footer">',
  '  <div class="ft-top">',
  '    <div class="ft-brand">',
  '      <div class="ft-logo">Santiagos Resort</div>',
  '      <div class="ft-loc">Alfonso, Calabarzon \u00b7 Philippines</div>',
  '      <p>Group resort in Alfonso, Tagaytay \u2014 pool, videoke, game room, gym, basketball, bonfire &amp; more. Up to 40 guests.<br/>Direct: 0917 800 5320 / 0922 830 5320 &nbsp;&middot;&nbsp; Prices may vary for Airbnb vs direct bookings.</p>',
  '      <div class="ft-socials">',
  '        <a href="https://www.facebook.com/people/Santiagos-Private-Resort/61576644491245/" target="_blank" class="ft-soc">f</a>',
  '        <a href="https://www.instagram.com/santiagos.to" target="_blank" class="ft-soc">ig</a>',
  '        <a href="' + WA_MSG + '" target="_blank" class="ft-soc">wa</a>',
  '        <a href="' + AIRBNB + '" target="_blank" class="ft-soc">\u2708</a>',
  '      </div>',
  '    </div>',
  '    <div class="ft-col">',
  '      <h5>Navigate</h5>',
  '      <ul>',
  '        <li><a href="index.html">Home</a></li>',
  '        <li><a href="gallery.html">Photo Gallery</a></li>',
  '        <li><a href="amenities.html">Amenities</a></li>',
  '        <li><a href="packages.html">Packages &amp; Rates</a></li>',
  '        <li><a href="location.html">Location &amp; Nearby</a></li>',
  '        <li><a href="events.html">Events &amp; Occasions</a></li>',
  '        <li><a href="contact.html">Book Now</a></li>',
  '      </ul>',
  '    </div>',
  '    <div class="ft-col">',
  '      <h5>Quick Info</h5>',
  '      <ul>',
  '        <li>2 VIP Rooms \u00b7 9 Double Deck Beds</li>',
  '        <li>8 Bathrooms</li>',
  '        <li>Up to 40 Guests (max)</li>',
  '        <li>Check-in: 3:00 PM</li>',
  '        <li>Checkout: 12:00 PM</li>',
  '        <li><a href="' + AIRBNB + '" target="_blank">View on Airbnb \u2197</a></li>',
  '      </ul>',
  '    </div>',
  '    <div class="ft-nl">',
  '      <h5>Stay Updated</h5>',
  '      <p>Get notified about availability, promos &amp; special rates.</p>',
  '      <div class="ft-nl-form">',
  '        <input type="email" placeholder="your@email.com"/>',
  '        <button onclick="window.open(WA_MSG+\'%20I+want+to+receive+updates+and+promos+for+Santiagos+Resort!\',\'_blank\');this.textContent=\'Sent \u2713\';this.style.background=\'#3d5229\'">Go</button>',
  '      </div>',
  '    </div>',
  '  </div>',
  '  <div class="ft-bottom">',
  '    <span class="ft-copy">\u00a9 2026 Santiagos Resort \u00b7 All rights reserved \u00b7 Made with \u2764\ufe0f in the Philippines</span>',
  '    <div class="ft-legal"><a href="#">Privacy</a><a href="#">Terms</a><a href="' + AIRBNB + '" target="_blank">Airbnb \u2197</a></div>',
  '  </div>',
  '</footer>',
].join('\n');

/* ── INIT — single DOMContentLoaded ── */
document.addEventListener('DOMContentLoaded', function() {

  /* inject nav + footer */
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  /* active nav link */
  document.querySelectorAll('.nav-links a[data-p]').forEach(function(a) {
    if (a.dataset.p === CURR_PAGE) a.classList.add('cur');
  });

  /* splash screen — once per session */
  var seen = sessionStorage.getItem('sr_splash');
  if (seen) {
    var sp = document.getElementById('splash');
    if (sp) sp.classList.add('gone');
  } else {
    sessionStorage.setItem('sr_splash', '1');
    setTimeout(function() {
      var sp = document.getElementById('splash');
      if (sp) sp.classList.add('gone');
    }, 2000);
  }

  /* solid nav for inner pages */
  if (CURR_PAGE !== 'index.html') {
    var nav = document.getElementById('nav');
    if (nav) nav.classList.add('solid');
  }

  /* announce bar close */
  var ac = document.getElementById('announce-close');
  if (ac) {
    ac.addEventListener('click', function() {
      var ab = document.getElementById('announce');
      if (ab) ab.style.display = 'none';
    });
  }

  /* scroll handler */
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* reveal on scroll — add rv-ready so CSS can safely hide elements */
  document.body.classList.add('rv-ready');
  var ro = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        ro.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.rv, .rv-l, .rv-r').forEach(function(el, i) {
    el.style.transitionDelay = ((i % 6) * 0.065) + 's';
    ro.observe(el);
  });

  /* counter animation */
  var co = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        countUp(e.target);
        co.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.count').forEach(function(el) { co.observe(el); });

  /* lightbox bg click */
  var lb = document.getElementById('lb');
  if (lb) {
    lb.addEventListener('click', function(e) {
      if (e.target === lb) lbClose();
    });
  }

  /* keyboard navigation */
  document.addEventListener('keydown', function(e) {
    var lb = document.getElementById('lb');
    if (lb && lb.classList.contains('on')) {
      if (e.key === 'Escape') lbClose();
      if (e.key === 'ArrowLeft') lbShift(-1);
      if (e.key === 'ArrowRight') lbShift(1);
    }
    var mn = document.getElementById('mob-nav');
    if (mn && mn.classList.contains('open') && e.key === 'Escape') closeMob();
  });

  /* back to top */
  var bt = document.getElementById('back-top');
  if (bt) {
    bt.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* sticky CTA (amenities page) */
  window.addEventListener('scroll', function() {
    var sc = document.getElementById('sticky-cta');
    if (sc) sc.classList.toggle('show', window.scrollY > 700);
  }, { passive: true });

  /* pre-fill occasion from URL */
  var params = new URLSearchParams(window.location.search);
  var occ = params.get('occasion');
  if (occ) {
    var sel = document.getElementById('foccasion');
    if (sel) {
      var map = { birthday: 'Birthday Party', barkada: 'Barkada Trip', family: 'Family Reunion', teambuilding: 'Team Building', corporate: 'Company Outing' };
      var val = map[occ];
      if (val) {
        Array.from(sel.options).forEach(function(o) { if (o.text === val) o.selected = true; });
      }
    }
  }
});

/* ── SCROLL HANDLER ── */
function onScroll() {
  var y = window.scrollY;
  var h = document.documentElement.scrollHeight - window.innerHeight;
  var pb = document.getElementById('progress-bar');
  if (pb) pb.style.width = (h > 0 ? (y / h * 100) : 0) + '%';

  var nav = document.getElementById('nav');
  if (nav && !nav.classList.contains('solid')) {
    nav.classList.toggle('up', y > 80);
  }

  var fp = document.getElementById('float-pill');
  if (fp) fp.classList.toggle('show', y > 600);

  var bt = document.getElementById('back-top');
  if (bt) bt.classList.toggle('show', y > 400);
}

/* ── MOBILE MENU ── */
function toggleMob() {
  var m = document.getElementById('mob-nav');
  var h = document.getElementById('hamburger');
  if (!m || !h) return;
  m.classList.toggle('open');
  h.classList.toggle('open');
  document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
}
function closeMob() {
  var m = document.getElementById('mob-nav');
  var h = document.getElementById('hamburger');
  if (m) m.classList.remove('open');
  if (h) h.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── COUNTER ANIMATION ── */
function countUp(el) {
  var target = parseInt(el.dataset.target, 10);
  var dur = 1500;
  var t0 = performance.now();
  function tick(now) {
    var p = Math.min((now - t0) / dur, 1);
    var e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(e * target);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  }
  requestAnimationFrame(tick);
}

/* ── LIGHTBOX ── */
var _lbImgs = GALLERY_IMGS;
var _lbIdx = 0;

function lbOpen(idx, imgs) {
  if (imgs) _lbImgs = imgs;
  _lbIdx = idx;
  _lbRender();
  var lb = document.getElementById('lb');
  if (lb) lb.classList.add('on');
  document.body.style.overflow = 'hidden';
}
function lbClose() {
  var lb = document.getElementById('lb');
  if (lb) lb.classList.remove('on');
  document.body.style.overflow = '';
}
function lbShift(d) {
  _lbIdx = (_lbIdx + d + _lbImgs.length) % _lbImgs.length;
  _lbRender();
}
function _lbRender() {
  var imgEl = document.getElementById('lb-img');
  var infoEl = document.getElementById('lb-info');
  if (imgEl) imgEl.src = _lbImgs[_lbIdx].src;
  if (infoEl) infoEl.textContent = _lbImgs[_lbIdx].label + ' \u00b7 ' + (_lbIdx + 1) + ' / ' + _lbImgs.length;
}

/* ── FAQ TOGGLE ── */
function faqToggle(el) {
  var item = el.closest('.faq-item');
  if (!item) return;
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(function(i) { i.classList.remove('open'); });
  if (!isOpen) item.classList.add('open');
}

/* ── FORM VALIDATE ── */
function validateForm(formId, successId) {
  var form = document.getElementById(formId);
  if (!form) return;
  var ok = true;
  form.querySelectorAll('[data-req]').forEach(function(f) {
    var g = f.closest('.fg');
    var valid = f.type === 'email'
      ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value)
      : f.value.trim().length > 0;
    if (!valid) {
      if (g) g.classList.add('has-err');
      f.classList.add('err');
      ok = false;
    } else {
      if (g) g.classList.remove('has-err');
      f.classList.remove('err');
    }
  });
  if (!ok) return;
  var s = document.getElementById(successId);
  form.style.display = 'none';
  if (s) s.style.display = 'block';
}

/* ── SHARE ── */
function toggleShareMenu() {
  var d = document.getElementById('share-dropdown');
  if (d) d.classList.toggle('open');
}
function doShare(platform) {
  var url = encodeURIComponent(window.location.href);
  var text = encodeURIComponent('Check out Santiagos Resort in Alfonso, Tagaytay! \uD83C\uDFCA\uD83C\uDFA4');
  var d = document.getElementById('share-dropdown');
  if (d) d.classList.remove('open');
  if (platform === 'copy') {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).then(function() {
        var btn = document.getElementById('share-copy-btn');
        if (btn) { btn.textContent = '\u2713 Copied!'; setTimeout(function() { btn.textContent = '\uD83D\uDD17 Copy Link'; }, 2000); }
      });
    }
  } else if (platform === 'whatsapp') {
    window.open('https://wa.me/?text=' + text + '%20' + url, '_blank');
  } else if (platform === 'viber') {
    window.open('viber://forward?text=' + text + '%20' + url);
  }
}

/* ── CHECKLIST (contact page) ── */
function toggleBring(el) {
  el.classList.toggle('checked');
}
