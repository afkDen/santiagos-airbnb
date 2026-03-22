/* ================================================
   SANTIAGOS RESORT — app.js v4
================================================ */
const BASE = 'https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/';
const W = '?im_w=1920';

// All confirmed + discovered photos from CDN listing
const PHOTOS = {
  // Original 5 (confirmed working)
  ext1:    BASE+'aedee59c-00c6-48fc-8edc-e684ae38a6d3.jpeg'+W,
  main:    BASE+'6043831d-e9d1-4e7d-a501-1876e1e88edf.jpeg'+W,
  pool:    BASE+'51364ca8-54b3-4f0b-9840-3f92171707eb.jpeg'+W,
  indoor:  BASE+'ffd5ba89-7c68-48ed-bca7-529add0f6b8e.jpeg'+W,
  grounds: BASE+'e9fae679-5f90-4c28-9675-71c03be31de0.jpeg'+W,
  // From CDN listing — shown in uploaded photos
  billiards:  BASE+'efa63c44-7255-4a55-a1b6-cebe5482b50f.jpeg'+W,
  arcade:     BASE+'422ade24-d533-4620-94ef-2f2311c99066.jpeg'+W,
  karaoke:    BASE+'34cbfa30-4591-469a-8bb0-e9e1ea6e3d38.jpeg'+W,
  karaoke2:   BASE+'53089b73-cb81-40b3-b94e-011048c96502.jpeg'+W,
  dining:     BASE+'679d0422-ca4d-483a-9930-9b9171905841.jpeg'+W,
  dining2:    BASE+'5444278e-4394-474a-aa9f-e233672be193.jpeg'+W,
  lounge:     BASE+'cd39776f-1169-40fd-9f97-acc3c480ec90.jpeg'+W,
  lounge2:    BASE+'bc6eb323-5315-4fcb-ad44-af0321f7f956.jpeg'+W,
  bedroom:    BASE+'cfbd6cbd-76b3-42d1-bb7b-6ba352d41450.jpeg'+W,
  bedroom2:   BASE+'c7618b1a-3fd3-4220-91e9-fdd87d3f4b14.jpeg'+W,
  bath:       BASE+'07c88337-25d4-4164-977b-ade6a77d9f7f.jpeg'+W,
  ext2:       BASE+'5f3c7ae0-83d1-4d7e-80ee-8882caeafb41.jpeg'+W,
  ext3:       BASE+'8d5c0226-0717-4fe1-9a76-88c002944ec1.jpeg'+W,
  pool2:      BASE+'269a1081-43b6-4179-b104-e446e4878e29.jpeg'+W,
  sign:       BASE+'d689919f-f256-4d90-9753-af61e7965c31.jpeg'+W,
  kitchen:    BASE+'0b3fcbdd-4ad1-459b-8dd3-786a774c8521.jpeg'+W,
  outdoor:    BASE+'0ce25d04-888c-42a6-ad43-4433d8d60294.jpeg'+W,
};

// Gallery images for lightbox
const GALLERY_IMGS = [
  {src:PHOTOS.ext1,    label:'Resort Exterior'},
  {src:PHOTOS.main,    label:'Main Living Area'},
  {src:PHOTOS.pool,    label:'Swimming Pool'},
  {src:PHOTOS.indoor,  label:'Indoor Spaces'},
  {src:PHOTOS.grounds, label:'Outdoor Grounds'},
  {src:PHOTOS.billiards,label:'Billiards Room'},
  {src:PHOTOS.arcade,  label:'Arcade & Games'},
  {src:PHOTOS.karaoke, label:'Karaoke Lounge'},
  {src:PHOTOS.dining,  label:'Dining Area'},
  {src:PHOTOS.lounge,  label:'Lounge Area'},
  {src:PHOTOS.bedroom, label:'Bedrooms'},
  {src:PHOTOS.ext2,    label:'Resort Views'},
  {src:PHOTOS.pool2,   label:'Pool Area'},
  {src:PHOTOS.kitchen, label:'Kitchen'},
];

const CURR = (() => {
  const s = window.location.pathname.split('/').pop();
  return s || 'index.html';
})();

const AIRBNB = 'https://www.airbnb.com/rooms/1643466979772957530';
const WA = 'https://wa.me/639XXXXXXXXX?text=Hi!+Im+interested+in+booking+Santiagos+Resort.';

/* NAV */
const NAV_HTML = `
<div id="progress-bar"></div>
<div id="splash">
  <div class="sp-logo">Santiagos <em>Resort</em></div>
  <div class="sp-tagline">Alfonso · Tagaytay · Philippines</div>
  <div class="sp-track"><div class="sp-fill"></div></div>
</div>
<div id="mob-nav">
  <a href="index.html" onclick="closeMob()">Home</a>
  <a href="gallery.html" onclick="closeMob()">Gallery</a>
  <a href="amenities.html" onclick="closeMob()">Amenities</a>
  <a href="packages.html" onclick="closeMob()">Packages</a>
  <a href="location.html" onclick="closeMob()">Location</a>
  <a href="contact.html" class="mob-book" onclick="closeMob()">Book Now</a>
</div>
<nav id="nav">
  <a class="nav-brand" href="index.html">Santiagos <em>Resort</em></a>
  <ul class="nav-links">
    <li><a href="index.html" data-p="index.html">Home</a></li>
    <li><a href="gallery.html" data-p="gallery.html">Gallery</a></li>
    <li><a href="amenities.html" data-p="amenities.html">Amenities</a></li>
    <li><a href="packages.html" data-p="packages.html">Packages</a></li>
    <li><a href="location.html" data-p="location.html">Location</a></li>
    <li><a href="contact.html" class="nav-book">Book Now</a></li>
  </ul>
  <button class="hamburger" id="hamburger" onclick="toggleMob()">
    <span></span><span></span><span></span>
  </button>
</nav>`;

const FOOTER_HTML = `
<div id="float-pill">
  <div class="fp-info"><div class="fp-label">Alfonso, Tagaytay</div><div class="fp-val">Up to 40 Guests</div></div>
  <div class="fp-info" style="border:none"><div class="fp-label">4 Beds · 8 Baths</div><div class="fp-val">New on Airbnb</div></div>
  <button class="fp-btn" onclick="location.href='contact.html'">Book Now</button>
  <button class="fp-x" onclick="document.getElementById('float-pill').style.display='none'">✕</button>
</div>
<div id="wa" onclick="window.open('${WA}','_blank')" title="WhatsApp">
  <div class="wa-ring"></div>
  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</div>
<footer id="footer">
  <div class="ft-top">
    <div class="ft-brand">
      <div class="ft-logo">Santiagos <em>Resort</em></div>
      <div class="ft-loc">Alfonso, Calabarzon · Philippines</div>
      <p>Industrial chic group resort near Tagaytay — pool, karaoke, arcade, gym, basketball &amp; more. Sleeps up to 40 guests. Listed on Airbnb.</p>
      <div class="ft-socials">
        <a href="#" class="ft-soc">f</a>
        <a href="#" class="ft-soc">ig</a>
        <a href="#" class="ft-soc">tt</a>
        <a href="${AIRBNB}" target="_blank" class="ft-soc">✈</a>
      </div>
    </div>
    <div class="ft-col">
      <h5>Navigate</h5>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="gallery.html">Photo Gallery</a></li>
        <li><a href="amenities.html">Amenities</a></li>
        <li><a href="packages.html">Packages &amp; Rates</a></li>
        <li><a href="location.html">Location &amp; Nearby</a></li>
        <li><a href="contact.html">Book Now</a></li>
      </ul>
    </div>
    <div class="ft-col">
      <h5>Quick Info</h5>
      <ul>
        <li><a>4 Bedrooms · 20 Beds</a></li>
        <li><a>8 Bathrooms</a></li>
        <li><a>Up to 40 Guests</a></li>
        <li><a>Check-in: 3:00 PM</a></li>
        <li><a>Checkout: 12:00 PM</a></li>
        <li><a href="${AIRBNB}" target="_blank">View on Airbnb ↗</a></li>
      </ul>
    </div>
    <div>
      <div class="ft-col"><h5>Stay Updated</h5></div>
      <p class="ft-nl-text">Get notified about availability, promos &amp; special rates.</p>
      <div class="ft-nl-form">
        <input type="email" placeholder="your@email.com"/>
        <button onclick="this.textContent='✓';this.style.background='#3d5229';setTimeout(()=>{this.textContent='Go';this.style.background=''},3000)">Go</button>
      </div>
    </div>
  </div>
  <div class="ft-bottom">
    <span class="ft-copy">© 2026 Santiagos Resort · All rights reserved · Made with ❤️ in the Philippines</span>
    <div class="ft-legal">
      <a href="#">Privacy</a><a href="#">Terms</a>
      <a href="${AIRBNB}" target="_blank">Airbnb Listing ↗</a>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Active nav link
  document.querySelectorAll('.nav-links a[data-p]').forEach(a => {
    if (a.dataset.p === CURR) a.classList.add('cur');
  });

  // Splash — once per session
  const seen = sessionStorage.getItem('sr_splash');
  if (seen) document.getElementById('splash').classList.add('gone');
  else { sessionStorage.setItem('sr_splash','1'); setTimeout(()=>document.getElementById('splash').classList.add('gone'),2100); }

  // Solid nav for inner pages
  if (CURR !== 'index.html') document.getElementById('nav').classList.add('solid');

  // Announce close
  document.getElementById('announce-close')?.addEventListener('click', ()=>document.getElementById('announce').style.display='none');

  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // Reveal
  const ro = new IntersectionObserver(es=>{
    es.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target);} });
  },{threshold:.1,rootMargin:'0px 0px -50px 0px'});
  document.querySelectorAll('.rv,.rv-l,.rv-r').forEach((el,i)=>{
    el.style.transitionDelay=(i%6)*.065+'s';
    ro.observe(el);
  });

  // Counters
  const co = new IntersectionObserver(es=>{
    es.forEach(e=>{ if(e.isIntersecting){countUp(e.target);co.unobserve(e.target);} });
  },{threshold:.5});
  document.querySelectorAll('.count').forEach(el=>co.observe(el));

  // Lightbox bg click
  document.getElementById('lb')?.addEventListener('click',function(e){if(e.target===this)lbClose();});

  // Keyboard
  document.addEventListener('keydown',e=>{
    if(document.getElementById('lb')?.classList.contains('on')){
      if(e.key==='Escape')lbClose();
      if(e.key==='ArrowLeft')lbShift(-1);
      if(e.key==='ArrowRight')lbShift(1);
    }
  });
});

function onScroll(){
  const y=window.scrollY,h=document.documentElement.scrollHeight-window.innerHeight;
  const pb=document.getElementById('progress-bar');
  if(pb)pb.style.width=(y/h*100)+'%';
  const nav=document.getElementById('nav');
  if(nav&&!nav.classList.contains('solid'))nav.classList.toggle('up',y>80);
  const fp=document.getElementById('float-pill');
  if(fp)fp.classList.toggle('show',y>600);
}
function toggleMob(){
  const m=document.getElementById('mob-nav'),h=document.getElementById('hamburger');
  m.classList.toggle('open');h.classList.toggle('open');
  document.body.style.overflow=m.classList.contains('open')?'hidden':'';
}
function closeMob(){
  document.getElementById('mob-nav')?.classList.remove('open');
  document.getElementById('hamburger')?.classList.remove('open');
  document.body.style.overflow='';
}
function countUp(el){
  const target=+el.dataset.target,dur=1500,t0=performance.now();
  const tick=now=>{
    const p=Math.min((now-t0)/dur,1),e=1-Math.pow(1-p,3);
    el.textContent=Math.floor(e*target);
    if(p<1)requestAnimationFrame(tick);else el.textContent=target;
  };
  requestAnimationFrame(tick);
}

/* LIGHTBOX */
let _imgs=GALLERY_IMGS,_idx=0;
function lbOpen(idx,imgs){
  if(imgs)_imgs=imgs; _idx=idx;
  _lbRender();
  document.getElementById('lb').classList.add('on');
  document.body.style.overflow='hidden';
}
function lbClose(){
  document.getElementById('lb')?.classList.remove('on');
  document.body.style.overflow='';
}
function lbShift(d){_idx=(_idx+d+_imgs.length)%_imgs.length;_lbRender();}
function _lbRender(){
  const img=document.getElementById('lb-img'),info=document.getElementById('lb-info');
  if(img)img.src=_imgs[_idx].src;
  if(info)info.textContent=_imgs[_idx].label+' · '+(_idx+1)+' / '+_imgs.length;
}

/* FAQ */
function faqToggle(el){
  const item=el.closest('.faq-item'),open=item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i=>i.classList.remove('open'));
  if(!open)item.classList.add('open');
}

/* FORM */
function validateForm(formId,successId){
  const form=document.getElementById(formId);
  if(!form)return;
  let ok=true;
  form.querySelectorAll('[data-req]').forEach(f=>{
    const g=f.closest('.fg');
    const valid=f.type==='email'?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value):f.value.trim().length>0;
    if(!valid){g?.classList.add('has-err');f.classList.add('err');ok=false;}
    else{g?.classList.remove('has-err');f.classList.remove('err');}
  });
  if(!ok)return;
  document.getElementById(formId).style.display='none';
  const s=document.getElementById(successId);
  if(s)s.style.display='block';
}
