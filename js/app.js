/* ================================================
   SANTIAGOS RESORT — app.js v5
   All photos verified & tagged by owner
================================================ */

const B = 'https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/';
const Q = '?im_w=1920';
const QM = '?im_w=960'; // medium
const QT = '?im_w=480'; // thumb

// VERIFIED PHOTO MAP — tagged by property owner
const P = {
  // EXTERIOR (16)
  ext1:  B+'aedee59c-00c6-48fc-8edc-e684ae38a6d3.jpeg'+Q,
  ext2:  B+'6043831d-e9d1-4e7d-a501-1876e1e88edf.jpeg'+Q,
  ext3:  B+'ffd5ba89-7c68-48ed-bca7-529add0f6b8e.jpeg'+Q,
  ext4:  B+'9e59c702-0746-4b07-94a1-9e713fe5863b.jpeg'+Q,
  ext5:  B+'12ceda05-0b84-4e63-ae50-b7a1ded55a8a.jpeg'+Q,
  ext6:  B+'19b6d0b8-7a69-4408-9ee1-1a844516a8a4.jpeg'+Q,
  ext7:  B+'22fe05b4-1397-4cc6-9704-cc98e7085cd3.jpeg'+Q,
  ext8:  B+'37fb90b8-9556-4c2a-a22f-6c3936a6aebc.jpeg'+Q,
  ext9:  B+'72b11e48-9433-4fdb-b3da-5fff4c67f5f5.jpeg'+Q,
  ext10: B+'98b5142f-e72f-4cdf-8d7a-c91d1a0e356d.jpeg'+Q,
  ext11: B+'269a1081-43b6-4179-b104-e446e4878e29.jpeg'+Q, // exterior dining area
  ext12: B+'855fa635-4bc7-4efb-9ea7-de367495c537.jpeg'+Q,
  ext13: B+'7904e985-91d2-47e1-8d6d-f3ee94cd4baf.jpeg'+Q,
  ext14: B+'a5949505-2121-482c-8525-c9fad7abb6d6.jpeg'+Q,
  ext15: B+'c4960ea6-26fa-491b-91f2-7d184dc7cd12.jpeg'+Q,
  ext16: B+'f1e5dfce-68ba-4a14-8b10-92c43d231940.jpeg'+Q,
  // POOL (6)
  pool1: B+'51364ca8-54b3-4f0b-9840-3f92171707eb.jpeg'+Q,
  pool2: B+'e9fae679-5f90-4c28-9675-71c03be31de0.jpeg'+Q,
  pool3: B+'3af6b26c-4a6b-427f-a28a-c767df166b86.jpeg'+Q,
  pool4: B+'0017c9e7-9077-4899-86df-49f2dfecd075.jpeg'+Q,
  pool5: B+'58ac6fe6-7176-4304-bcee-34cd1d2e6118.jpeg'+Q,
  pool6: B+'b800534f-c860-4d16-a179-fb2c4a90a4b8.jpeg'+Q,
  // KARAOKE (3)
  kara1: B+'0602e46f-d78c-4a27-87fb-4a7247813d55.jpeg'+Q,
  kara2: B+'066847df-060c-4ae6-ba4c-fbe732b4c9a5.jpeg'+Q,
  kara3: B+'cfbd6cbd-76b3-42d1-bb7b-6ba352d41450.jpeg'+Q,
  // BILLIARDS (3)
  bill1: B+'0ce25d04-888c-42a6-ad43-4433d8d60294.jpeg'+Q,
  bill2: B+'d689919f-f256-4d90-9753-af61e7965c31.jpeg'+Q,
  bill3: B+'efa63c44-7255-4a55-a1b6-cebe5482b50f.jpeg'+Q,
  // ARCADE (3)
  arc1:  B+'0b3fcbdd-4ad1-459b-8dd3-786a774c8521.jpeg'+Q,
  arc2:  B+'8d5c0226-0717-4fe1-9a76-88c002944ec1.jpeg'+Q,
  arc3:  B+'c7618b1a-3fd3-4220-91e9-fdd87d3f4b14.jpeg'+Q,
  // DINING (3)
  din1:  B+'7ab52115-9626-4fee-94c1-31776317887f.jpeg'+Q,
  din2:  B+'97ca24a6-4a16-4fdf-8e34-18f5f6d50574.jpeg'+Q,
  din3:  B+'422ade24-d533-4620-94ef-2f2311c99066.jpeg'+Q,
  // KITCHEN (4)
  kit1:  B+'07c88337-25d4-4164-977b-ade6a77d9f7f.jpeg'+Q,
  kit2:  B+'7a14c4ef-4630-4707-b982-b92a72a4cbc3.jpeg'+Q,
  kit3:  B+'34cbfa30-4591-469a-8bb0-e9e1ea6e3d38.jpeg'+Q,
  kit4:  B+'679d0422-ca4d-483a-9930-9b9171905841.jpeg'+Q,
  // LOUNGE (4)
  lou1:  B+'34ce9446-3458-48de-8f19-4f6dee8d8ae1.jpeg'+Q,
  lou2:  B+'27041d27-0bfc-4148-9167-4f0e51843487.jpeg'+Q,
  lou3:  B+'53089b73-cb81-40b3-b94e-011048c96502.jpeg'+Q,
  lou4:  B+'cd39776f-1169-40fd-9f97-acc3c480ec90.jpeg'+Q,
  // LIVING (1)
  liv1:  B+'5f3c7ae0-83d1-4d7e-80ee-8882caeafb41.jpeg'+Q,
  // BEDROOM (8)
  bed1:  B+'1dfafeed-b7d8-4ee2-9685-f4b21ee2ac0c.jpeg'+Q,
  bed2:  B+'1eea7c15-e6bc-480f-9049-7a7ca831306a.jpeg'+Q,
  bed3:  B+'7fdad08c-cd56-4bd8-9913-df31206d2a71.jpeg'+Q,
  bed4:  B+'231f8e62-c8af-4ab9-ab7b-749426418278.jpeg'+Q,
  bed5:  B+'412ac041-c128-4dcb-be95-9613525155ac.jpeg'+Q,
  bed6:  B+'a7a5da0a-0cca-4155-a690-85d8a35d5073.jpeg'+Q,
  bed7:  B+'a416db78-e791-485f-99cd-681dfc37c943.jpeg'+Q,
  bed8:  B+'c7314967-2138-4874-bf9c-036713e1e84f.jpeg'+Q,
  // BATHROOM (7)
  bath1: B+'6a64f515-0249-440e-937b-73fe1cc63898.jpeg'+Q,
  bath2: B+'7bd29da9-1398-456e-81ab-7f3f06a8b10f.jpeg'+Q,
  bath3: B+'73e7dd06-2f9b-479e-8925-0a24bf769a9c.jpeg'+Q,
  bath4: B+'380a4b0e-bc04-4540-8ab5-3446055037b4.jpeg'+Q,
  bath5: B+'01672d22-f62b-4081-9372-e090179020ca.jpeg'+Q,
  bath6: B+'5444278e-4394-474a-aa9f-e233672be193.jpeg'+Q,
  bath7: B+'edf6c0b7-2c0d-416a-895b-ae85e5455368.jpeg'+Q, // outdoor bathroom
  // GYM (3)
  gym1:  B+'7b8c51d9-24b2-4846-b173-6d2459c53981.jpeg'+Q,
  gym2:  B+'23fa05de-4f88-4694-9357-74ae76635ab2.jpeg'+Q,
  gym3:  B+'d6337543-a580-4b38-aa27-35657a04ec03.jpeg'+Q,
  // BONFIRE (2)
  fire1: B+'15fd6a0c-36f4-4c79-a187-279fc9e1d45c.jpeg'+Q,
  fire2: B+'cbbf4bee-4ba1-41ec-8d0c-922684e7a936.jpeg'+Q,
  // BASKETBALL (2)
  bball1:B+'7932f6a1-879d-4276-ab69-433d47ad8ca0.jpeg'+Q,
  bball2:B+'ff9e2cfe-96b7-4992-8cd8-81499c84335f.jpeg'+Q,
  // OUTDOOR (8)
  out1:  B+'58004ff1-df45-4949-ad63-6316ab7abe96.jpeg'+Q, // outdoor dining
  out2:  B+'77973507-5528-471c-b8ac-e6d0c1968e2b.jpeg'+Q,
  out3:  B+'aacade7c-b80f-4262-bf7a-465fd693b8a1.jpeg'+Q, // outdoor dining
  out4:  B+'c71e1998-1707-4dac-96aa-ecdef112ada0.jpeg'+Q,
  out5:  B+'e5bd4dfa-98c5-4931-baf0-cebb6ed2d048.jpeg'+Q,
  out6:  B+'e7b07cde-5fc2-4104-bc75-d55b0feeefbd.jpeg'+Q,
  out7:  B+'ee1d6f90-bc3c-486b-a8ad-cbdfa2484e5a.jpeg'+Q,
  out8:  B+'f267480b-660d-406e-b3ba-da1a4ab75272.jpeg'+Q,
};

// Gallery images for lightbox (best picks, all rooms)
const GALLERY_IMGS = [
  {src:P.ext1,   label:'Resort Exterior'},
  {src:P.ext2,   label:'Resort Exterior'},
  {src:P.pool1,  label:'Swimming Pool'},
  {src:P.pool5,  label:'Pool Area'},
  {src:P.kara1,  label:'Karaoke Lounge'},
  {src:P.kara2,  label:'Karaoke Lounge'},
  {src:P.kara3,  label:'Karaoke Lounge'},
  {src:P.bill3,  label:'Billiards Room'},
  {src:P.bill1,  label:'Billiards Table'},
  {src:P.arc1,   label:'Arcade Games'},
  {src:P.din3,   label:'Dining Area'},
  {src:P.din1,   label:'Dining Room'},
  {src:P.kit4,   label:'Kitchen'},
  {src:P.kit1,   label:'Kitchen'},
  {src:P.lou4,   label:'Lounge Area'},
  {src:P.lou1,   label:'Lounge'},
  {src:P.liv1,   label:'Living Area'},
  {src:P.bed1,   label:'Bedroom'},
  {src:P.bed3,   label:'Bedroom'},
  {src:P.bed5,   label:'Bedroom'},
  {src:P.bath1,  label:'Bathroom'},
  {src:P.gym1,   label:'Gym & Fitness'},
  {src:P.fire1,  label:'Bonfire Area'},
  {src:P.bball1, label:'Basketball Court'},
  {src:P.out1,   label:'Outdoor Dining'},
  {src:P.out5,   label:'Outdoor Spaces'},
  {src:P.ext5,   label:'Resort Views'},
  {src:P.ext7,   label:'Resort Architecture'},
  {src:P.pool3,  label:'Pool Views'},
  {src:P.pool6,  label:'Pool'},
];

const CURR = (() => {
  const s = window.location.pathname.split('/').pop();
  return s || 'index.html';
})();

const AIRBNB = 'https://www.airbnb.com/rooms/1643466979772957530';
const WA_URL = 'https://wa.me/639XXXXXXXXX?text=Hi!+Im+interested+in+booking+Santiagos+Resort+in+Alfonso,+Tagaytay.';

/* ── NAV HTML ── */
const NAV_HTML = `
<div id="progress-bar"></div>
<div id="back-top" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑</div>
<div class="share-dropdown" id="shareDropdown"><button class="sd-item" onclick="doShare('copy')">🔗 Copy Link</button><button class="sd-item" onclick="doShare('whatsapp')">💬 WhatsApp</button><button class="sd-item" onclick="doShare('viber')">📲 Viber</button></div>
<button class="share-fab" id="shareFab" onclick="toggleShareMenu()">⤴</button>
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
  <a href="events.html" onclick="closeMob()">Events</a>
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
    <li><a href="events.html" data-p="events.html">Events</a></li>
    <li><a href="contact.html" class="nav-book">Book Now</a></li>
  </ul>
  <button class="hamburger" id="hamburger" onclick="toggleMob()">
    <span></span><span></span><span></span>
  </button>
</nav>`;

/* ── FOOTER HTML ── */
const FOOTER_HTML = `
<div id="float-pill">
  <div class="fp-info"><div class="fp-label">Alfonso, Tagaytay</div><div class="fp-val">Up to 40 Guests</div></div>
  <div class="fp-info" style="border:none"><div class="fp-label">4 Bedrooms · 8 Baths</div><div class="fp-val">New on Airbnb</div></div>
  <button class="fp-btn" onclick="location.href='contact.html'">Book Now</button>
  <button class="fp-x" onclick="document.getElementById('float-pill').style.display='none'">✕</button>
</div>
<div id="wa" onclick="window.open('${WA_URL}','_blank')" title="WhatsApp">
  <div class="wa-ring"></div>
  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</div>
<footer id="footer">
  <div class="ft-top">
    <div class="ft-brand">
      <div class="ft-logo">Santiagos <em>Resort</em></div>
      <div class="ft-loc">Alfonso, Calabarzon · Philippines</div>
      <p>Industrial chic group resort near Tagaytay — pool, karaoke, arcade, gym, basketball, bonfire &amp; more. Sleeps up to 40 guests. Listed on Airbnb.</p>
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
        <li><a href="events.html">Events &amp; Occasions</a></li>
        <li><a href="contact.html">Book Now</a></li>
      </ul>
    </div>
    <div class="ft-col">
      <h5>Quick Info</h5>
      <ul>
        <li><a>4 Bedrooms · 20 Beds</a></li>
        <li><a>8 Bathrooms</a></li>
        <li><a>Up to 40 Guests</a></li>
        <li><a>Check-in 3:00 PM</a></li>
        <li><a>Checkout 12:00 PM</a></li>
        <li><a href="${AIRBNB}" target="_blank">View on Airbnb ↗</a></li>
      </ul>
    </div>
    <div>
      <div style="font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.25);font-weight:700;margin-bottom:1.1rem">Stay Updated</div>
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

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  document.querySelectorAll('.nav-links a[data-p]').forEach(a => {
    if (a.dataset.p === CURR) a.classList.add('cur');
  });

  const seen = sessionStorage.getItem('sr_splash');
  if (seen) document.getElementById('splash').classList.add('gone');
  else { sessionStorage.setItem('sr_splash','1'); setTimeout(()=>document.getElementById('splash').classList.add('gone'),2100); }

  if (CURR !== 'index.html') document.getElementById('nav').classList.add('solid');

  document.getElementById('announce-close')?.addEventListener('click',()=>document.getElementById('announce').style.display='none');

  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  const ro = new IntersectionObserver(es=>{
    es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target);}});
  },{threshold:.08,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.rv,.rv-l,.rv-r').forEach((el,i)=>{
    el.style.transitionDelay = (i % 6) * .06 + 's';
    ro.observe(el);
  });

  const co = new IntersectionObserver(es=>{
    es.forEach(e=>{if(e.isIntersecting){countUp(e.target);co.unobserve(e.target);}});
  },{threshold:.5});
  document.querySelectorAll('.count').forEach(el=>co.observe(el));

  document.getElementById('lb')?.addEventListener('click',function(e){if(e.target===this)lbClose();});
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
function faqToggle(el){
  const item=el.closest('.faq-item'),open=item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i=>i.classList.remove('open'));
  if(!open)item.classList.add('open');
}
function validateForm(fId,sId){
  const form=document.getElementById(fId); if(!form)return;
  let ok=true;
  form.querySelectorAll('[data-req]').forEach(f=>{
    const g=f.closest('.fg');
    const valid=f.type==='email'?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value):f.value.trim().length>0;
    if(!valid){g?.classList.add('has-err');f.classList.add('err');ok=false;}
    else{g?.classList.remove('has-err');f.classList.remove('err');}
  });
  if(!ok)return;
  document.getElementById(fId).style.display='none';
  const s=document.getElementById(sId);
  if(s)s.style.display='block';
}

/* ── BACK TO TOP ── */
function initBackTop() {
  const bt = document.getElementById('back-top');
  if (!bt) return;
  window.addEventListener('scroll', () => bt.classList.toggle('show', window.scrollY > 400), {passive:true});
}

/* ── SHARE FAB ── */
function toggleShareMenu() {
  const d = document.getElementById('shareDropdown');
  if (d) d.classList.toggle('open');
}
document.addEventListener('click', e => {
  const d = document.getElementById('shareDropdown');
  const f = document.getElementById('shareFab');
  if (d && !d.contains(e.target) && !f?.contains(e.target)) d.classList.remove('open');
});
function doShare(platform) {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent('Check out Santiagos Resort in Alfonso, Tagaytay! 🏊🎤');
  const d = document.getElementById('shareDropdown');
  if (d) d.classList.remove('open');
  if (platform === 'copy') {
    navigator.clipboard?.writeText(window.location.href).then(() => {
      const f = document.getElementById('shareFab');
      if(f){const old=f.textContent;f.textContent='✓';setTimeout(()=>f.textContent=old,2000);}
    });
  } else if (platform === 'whatsapp') window.open('https://wa.me/?text='+text+'%20'+url,'_blank');
  else if (platform === 'messenger') window.open('https://www.facebook.com/dialog/send?link='+url+'&app_id=123456','_blank');
  else if (platform === 'viber') window.open('viber://forward?text='+text+'%20'+url);
}

/* ── IMAGE SKELETON LOADERS ── */
function initSkeletons() {
  document.querySelectorAll('img[src]').forEach(img => {
    const wrap = img.closest('.img-wrap');
    if (!wrap) return;
    wrap.classList.add('loading');
    img.addEventListener('load', () => { wrap.classList.remove('loading'); wrap.classList.add('loaded'); });
    img.addEventListener('error', () => { wrap.classList.remove('loading'); });
  });
}

/* ── STICKY CTA (amenities page) ── */
function initStickyCTA() {
  const sc = document.getElementById('sticky-cta');
  if (!sc) return;
  const trigger = document.querySelector('[data-sticky-trigger]');
  if (!trigger) return;
  const obs = new IntersectionObserver(es => {
    es.forEach(e => sc.classList.toggle('show', !e.isIntersecting));
  }, { threshold: 0 });
  obs.observe(trigger);
}

/* ── OCCASION PARAM PRE-FILL ── */
function initOccasionParam() {
  const params = new URLSearchParams(window.location.search);
  const occ = params.get('occasion');
  if (!occ) return;
  const sel = document.getElementById('foccasion') || document.querySelector('select[name="occasion"]');
  if (!sel) return;
  const map = {birthday:'Birthday Party',barkada:'Barkada Trip',family:'Family Reunion',teambuilding:'Team Building',corporate:'Company Outing'};
  const val = map[occ];
  if (!val) return;
  Array.from(sel.options).forEach(o => { if (o.text === val) o.selected = true; });
}

/* ── PAGE TRANSITION LINKS ── */
function initPageTransitions() {
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;
    a.addEventListener('click', e => {
      e.preventDefault();
      document.body.classList.add('page-out');
      setTimeout(() => window.location.href = href, 220);
    });
  });
}

// Add to DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initBackTop();
  initSkeletons();
  initStickyCTA();
  initOccasionParam();
  // Page transitions — slight delay to not block normal loads
  setTimeout(initPageTransitions, 100);
}, {once: false}); // runs alongside existing listener
