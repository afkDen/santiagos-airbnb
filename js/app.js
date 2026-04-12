/* ================================================================
   SANTIAGOS RESORT — app.js
   SVG sprite injected here (single source — removed from HTML pages)
================================================================ */

/* ── SITE CONFIG ── */
const AIRBNB = 'https://www.airbnb.com/rooms/1643466979772957530';
const WA_MSG = 'https://wa.me/639228305320?text=Hi!+Im+interested+in+booking+Santiagos+Resort+Tagaytay.';

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
function img(key, w) { return PH + P[key] + '.jpeg?im_w=' + (w || 1920); }

/* ── GALLERY IMAGES ── */
const GALLERY_IMGS = [
  {src:img('ext1'),  label:'Resort Exterior'},
  {src:img('ext3'),  label:'Resort Exterior'},
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

/* ── SVG SPRITE — single source of truth ── */
var SVG_SPRITE = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none" id="svg-sprite" aria-hidden="true">'
  +'<symbol id="i-pool" viewBox="0 0 24 24"><path d="M2 12c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1v2c-1.5 0-2.5-1-4-1s-2.5 1-4 1-2.5-1-4-1-2.5 1-4 1v-2zm0 4c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1v2c-1.5 0-2.5-1-4-1s-2.5 1-4 1-2.5-1-4-1-2.5 1-4 1v-2zM16 4c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-6 0c0-1.1-.9-2-2-2S6 2.9 6 4s.9 2 2 2 2-.9 2-2zm8 4H6V6h12v2z"/></symbol>'
  +'<symbol id="i-mic" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></symbol>'
  +'<symbol id="i-billiards" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13a5 5 0 100 10A5 5 0 0012 7zm0 8a3 3 0 110-6 3 3 0 010 6z"/></symbol>'
  +'<symbol id="i-arcade" viewBox="0 0 24 24"><path d="M15 7.5V2H9v5.5l3 3 3-3zm-5 6.5H8v-2H6v2H4v2h2v2h2v-2h2v-2zm10.5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-3 3c-.83 0-1.5.67-1.5 1.5S16.67 20 17.5 20s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM21 9H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z"/></symbol>'
  +'<symbol id="i-gym" viewBox="0 0 24 24"><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/></symbol>'
  +'<symbol id="i-basketball" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4.07 13H6.1c.15 1.65.76 3.16 1.72 4.38C5.65 16.24 4.43 14.77 4.07 13zm2.03-2H4.07c.36-1.77 1.58-3.24 3.75-4.38C6.86 7.84 6.25 9.35 6.1 11zm5.9-6.93c1.2.7 2.18 1.76 2.77 3.05-.88.08-1.82.13-2.77.13V4.07zm0 5.18c1.05 0 2.07-.06 3.04-.17.11.6.18 1.23.19 1.92H11V9.25zm0 3.75h3.23c-.01.69-.08 1.32-.19 1.92-.97-.11-1.99-.17-3.04-.17v-1.75zm0 3.75c.95 0 1.89.05 2.77.13-.59 1.29-1.57 2.35-2.77 3.05v-3.18zM13 19.93v-3.18c1.2-.7 2.18-1.76 2.77-3.05.88-.08 1.82-.13 2.77-.13C17.82 16.24 15.67 19.07 13 19.93zM19.93 13h-2.03c-.15-1.65-.76-3.16-1.72-4.38 2.12 1.14 3.34 2.61 3.75 4.38zm-5.75-4.62C13.18 7.09 12.24 6.03 11 5.33v3.18c.95 0 1.89-.05 2.77-.13z"/></symbol>'
  +'<symbol id="i-bonfire" viewBox="0 0 24 24"><path d="M12.01 3C8.34 7.27 9 12 9 12c-1.49-.96-1.99-3.5-1.99-3.5C5.5 10.5 6 14 6 14c-1.49-.96-2-3.5-2-3.5C2.5 14 3 17.33 3 18c0 4.97 4.03 6 9 6s9-1.03 9-6c0-4-5-11-4.99-15-.3.45-3 4-3 4-.01 0 .5-2.5-1-4z"/></symbol>'
  +'<symbol id="i-dining" viewBox="0 0 24 24"><path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8.17-15.03-8.17-15.03 0h15.03zM1.02 17h15v2h-15z"/></symbol>'
  +'<symbol id="i-kitchen" viewBox="0 0 24 24"><path d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99zM18 20H6V12h12v8zm0-10H6V4h12v6zm-3-4h-2v1h2v1h-1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm0 4h-2v-1h2v1zm-7-3H7v1h1v3H7v1h3v-1H9V7h-1z"/></symbol>'
  +'<symbol id="i-wifi" viewBox="0 0 24 24"><path d="M1 9l2 2c5.09-5.09 13.43-5.09 18.53.01L23.54 9C17.38 2.85 6.61 2.85 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.27-2.76 10.03 0L19 13C15.14 9.14 8.87 9.14 5 13z"/></symbol>'
  +'<symbol id="i-parking" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></symbol>'
  +'<symbol id="i-tv" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/></symbol>'
  +'<symbol id="i-bed" viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></symbol>'
  +'<symbol id="i-shower" viewBox="0 0 24 24"><path d="M9.07 7.07L9 7c-.37-.37-.88-.6-1.44-.6-1.12 0-2.04.9-2.04 2.02 0 .56.23 1.07.6 1.44l.07.07L9 12.27 6.07 10l-1.22 1.22L9 15.37l1.5-1.5L12 12l-1.5-1.5zm5.41 11.42L11.92 21l-2.56-2.51.71-.71 1.85 1.82 2.07-2.07.71.71zM7.42 13.42L5 15.84l.71.71 2.42-2.42-.71-.71zm2-2L7 13.84l.71.71 2.42-2.42-.71-.71zM21 6h-8c-.55 0-1 .45-1 1v.5c-1.07-.24-2.22-.12-3.2.44l-.03-.04c-.78-.79-2.07-.82-2.87-.04s-.83 2.07-.05 2.87l.05.04c-.53.97-.64 2.11-.4 3.17H5c-.55 0-1 .45-1 1s.45 1 1 1h.92L7 18l1.42-1.42H21c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z"/></symbol>'
  +'<symbol id="i-ac" viewBox="0 0 24 24"><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z"/></symbol>'
  +'<symbol id="i-outdoor" viewBox="0 0 24 24"><path d="M17 12h-2L12 7l-3 5H7l5 8 5-8zm2.17-5.17A9.978 9.978 0 0012 4a9.978 9.978 0 00-7.07 2.93C3.9 7.96 3 9.88 3 12H1c0-2.76 1.12-5.26 2.93-7.07A9.978 9.978 0 0112 2a9.978 9.978 0 017.07 2.93C20.88 6.74 22 9.24 22 12h-2c0-2.12-.83-4.04-2.17-5.44z"/></symbol>'
  +'<symbol id="i-star" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></symbol>'
  +'<symbol id="i-star-o" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></symbol>'
  +'<symbol id="i-check" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></symbol>'
  +'<symbol id="i-arrow-r" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></symbol>'
  +'<symbol id="i-clock" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></symbol>'
  +'<symbol id="i-people" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></symbol>'
  +'<symbol id="i-info" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></symbol>'
  +'<symbol id="i-phone" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></symbol>'
  +'<symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></symbol>'
  +'<symbol id="i-fb" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></symbol>'
  +'<symbol id="i-ig" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></symbol>'
  +'<symbol id="i-wa" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 2A10 10 0 002 12c0 1.77.46 3.44 1.28 4.9L2 22l5.25-1.38A10 10 0 1012.05 2z"/></symbol>'
  +'<symbol id="i-airbnb" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c1.381 0 2.5 1.119 2.5 2.5S13.381 9.5 12 9.5 9.5 8.381 9.5 7s1.119-2.5 2.5-2.5zM8.5 17c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5H8.5z"/></symbol>'
  +'<symbol id="i-house" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></symbol>'
  +'<symbol id="i-cal" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></symbol>'
  +'<symbol id="i-mountain" viewBox="0 0 24 24"><path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z"/></symbol>'
  +'<symbol id="i-price" viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/></symbol>'
  +'<symbol id="i-driver" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c4.41 0 8 3.59 8 8H4c0-4.41 3.59-8 8-8zM4 13h16c-.49 3.95-3.85 7-7.98 7C7.85 20 4.49 16.95 4 13zm8-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/></symbol>'
  +'<symbol id="i-music" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></symbol><symbol id="i-sofa" viewBox="0 0 24 24"><path d="M21 9V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v2c-1.1 0-2 .9-2 2v5h1.33L3 18h1l.67-2h14.67l.66 2h1l-.33-2H23v-5c0-1.1-.9-2-2-2zm-8 1H5V7h8v3zm7 0h-5V7h3c1.1 0 2 .9 2 2v1z"/></symbol><symbol id="i-camera" viewBox="0 0 24 24"><path d="M12 15.2c-1.77 0-3.2-1.43-3.2-3.2s1.43-3.2 3.2-3.2 3.2 1.43 3.2 3.2-1.43 3.2-3.2 3.2zM9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></symbol><symbol id="i-lamp" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></symbol><symbol id="i-table" viewBox="0 0 24 24"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-8h12v8h2V3h-2zm0 8H6V7h12v4z"/></symbol><symbol id="i-pen" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></symbol>'
  +'</svg>';

/* ── NAV HTML ── */
var NAV_HTML = [
  '<div id="progress-bar"></div>',
  '<div id="splash">',
  '  <div class="sp-badge">Alfonso &middot; Tagaytay &middot; Philippines</div>',
  '  <div class="sp-logo">Santiagos Resort</div>',
  '  <div class="sp-divider"></div>',
  '  <div class="sp-tagline">Private Resort &middot; Up to 40 Guests</div>',
  '  <div class="sp-track"><div class="sp-fill"></div></div>',
  '  <div class="sp-dots"><div class="sp-dot"></div><div class="sp-dot"></div><div class="sp-dot"></div></div>',
  '</div>',
  '<div id="mob-nav" style="--mob-ff:var(--ff-serif)">',
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
  '  <button class="hamburger" id="hamburger" onclick="toggleMob()" aria-label="Open menu" aria-expanded="false">',
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
  '  <button class="fp-x" onclick="dismissPill()" aria-label="Close">&#10005;</button>',
  '</div>',
  '<div id="wa-btn" onclick="window.open(\'' + WA_MSG + '\',\'_blank\')" title="Chat on WhatsApp" role="button" aria-label="Chat on WhatsApp">',
  '  <div class="wa-ring"></div>',
  '  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
  '</div>',
  '<footer id="footer">',
  '  <div class="ft-top">',
  '    <div class="ft-brand">',
  '      <div class="ft-logo" style="font-family:var(--ff-brand)">Santiagos Resort</div>',
  '      <div class="ft-loc">Alfonso, Tagaytay, Cavite \u00b7 Philippines</div>',
  '      <p>Group resort in Alfonso, Tagaytay \u2014 pool, videoke, game room, gym, basketball, bonfire &amp; more. Up to 40 guests.<br/>Direct: 0917 800 5320 / 0922 830 5320 \u00b7 Prices may vary for Airbnb vs direct bookings.</p>',
  '      <div class="ft-socials">',
  '        <a href="https://www.facebook.com/people/Santiagos-Private-Resort/61576644491245/" target="_blank" class="ft-soc" title="Facebook" rel="noopener"><svg class="icon" aria-hidden="true"><use href="#i-fb"/></svg></a>',
  '        <a href="https://www.instagram.com/santiagos.to" target="_blank" class="ft-soc" title="Instagram" rel="noopener"><svg class="icon" aria-hidden="true"><use href="#i-ig"/></svg></a>',
  '        <a href="' + WA_MSG + '" target="_blank" class="ft-soc" title="WhatsApp" rel="noopener"><svg class="icon" aria-hidden="true"><use href="#i-wa"/></svg></a>',
  '        <a href="' + AIRBNB + '" target="_blank" class="ft-soc" title="Airbnb" rel="noopener"><svg class="icon" aria-hidden="true"><use href="#i-airbnb"/></svg></a>',
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
  '        <li><a>2 VIP Rooms \u00b7 9 Double Deck Beds</a></li>',
  '        <li><a>Driver\'s Room</a></li>',
  '        <li><a>8 Bathrooms</a></li>',
  '        <li><a>Up to 40 Guests (max)</a></li>',
  '        <li><a>Check-in: 3:00 PM</a></li>',
  '        <li><a>Checkout: 12:00 PM</a></li>',
  '        <li><a href="' + AIRBNB + '" target="_blank" rel="noopener">View on Airbnb \u2197</a></li>',
  '      </ul>',
  '    </div>',
  '    <div class="ft-nl">',
  '      <h5>Stay Updated</h5>',
  '      <p>Get notified about availability, promos &amp; special rates.</p>',
  '      <div class="ft-nl-form">',
  '        <input type="email" placeholder="your@email.com" aria-label="Email address"/>',
  '        <button onclick="this.textContent=\'Done \u2713\';this.style.background=\'#3d5229\'">Go</button>',
  '      </div>',
  '    </div>',
  '  </div>',
  '  <div class="ft-bottom">',
  '    <span class="ft-copy">\u00a9 2026 Santiagos Resort \u00b7 All rights reserved \u00b7 Made with \u2764\ufe0f in the Philippines</span>',
  '    <div class="ft-legal"><a href="#">Privacy</a><a href="#">Terms</a><a href="' + AIRBNB + '" target="_blank" rel="noopener">Airbnb \u2197</a></div>',
  '  </div>',
  '</footer>',
  '<div id="back-top" role="button" aria-label="Back to top">\u2191</div>',
].join('\n');

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', function() {

  /* inject SVG sprite first — icons resolve before nav/footer render */
  document.body.insertAdjacentHTML('afterbegin', SVG_SPRITE);
  /* inject nav + footer */
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  /* active nav link */
  document.querySelectorAll('.nav-links a[data-p]').forEach(function(a) {
    if (a.dataset.p === CURR_PAGE) a.classList.add('cur');
  });
  document.querySelectorAll('#mob-nav a[href]').forEach(function(a) {
    if (a.getAttribute('href') === CURR_PAGE) a.classList.add('cur');
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

  /* scroll */
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* reveal on scroll */
  document.body.classList.add('rv-ready');
  var ro = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.rv, .rv-l, .rv-r').forEach(function(el, i) {
    el.style.transitionDelay = ((i % 5) * 0.08) + 's';
    ro.observe(el);
  });

  /* counter animation */
  var co = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { countUp(e.target); co.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.count').forEach(function(el) { co.observe(el); });

  /* lightbox bg click */
  var lb = document.getElementById('lb');
  if (lb) {
    lb.addEventListener('click', function(e) { if (e.target === lb) lbClose(); });
    /* Swipe to close/navigate on mobile */
    var _lbTouchX = 0;
    lb.addEventListener('touchstart', function(e) {
      _lbTouchX = e.changedTouches[0].clientX;
    }, { passive: true });
    lb.addEventListener('touchend', function(e) {
      var dx = e.changedTouches[0].clientX - _lbTouchX;
      if (Math.abs(dx) > 50) { if (dx < 0) lbShift(1); else lbShift(-1); }
      else if (Math.abs(dx) < 10) lbClose();
    }, { passive: true });
  }

  /* keyboard nav */
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
  if (bt) bt.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  /* sticky CTA */
  window.addEventListener('scroll', function() {
    var sc = document.getElementById('sticky-cta');
    if (sc && !sc.dataset.dismissed) {
      var showing = window.scrollY > 700;
      sc.classList.toggle('show', showing);
      document.body.classList.toggle('has-sticky', showing);
    }
  }, { passive: true });

  /* pre-fill occasion from URL */
  var params = new URLSearchParams(window.location.search);
  var occ = params.get('occasion');
  if (occ) {
    var sel = document.getElementById('foccasion');
    if (sel) {
      var map = { birthday:'Birthday Party', barkada:'Barkada Trip', family:'Family Reunion', teambuilding:'Team Building', corporate:'Company Outing' };
      var val = map[occ];
      if (val) Array.from(sel.options).forEach(function(o) { if (o.text === val) o.selected = true; });
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
  if (nav && !nav.classList.contains('solid')) nav.classList.toggle('up', y > 80);
  var fp = document.getElementById('float-pill');
  if (fp && !fp.dataset.dismissed) fp.classList.toggle('show', y > 600);
  var bt = document.getElementById('back-top');
  if (bt) bt.classList.toggle('show', y > 400);
}

/* ── MOBILE MENU ── */
function toggleMob() {
  var m = document.getElementById('mob-nav');
  var h = document.getElementById('hamburger');
  if (!m || !h) return;
  var isOpen = m.classList.toggle('open');
  h.classList.toggle('open', isOpen);
  h.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  document.body.style.overflow = isOpen ? 'hidden' : '';
}
function dismissPill() {
  var fp = document.getElementById('float-pill');
  if (fp) { fp.dataset.dismissed = '1'; fp.classList.remove('show'); }
}
function closeMob() {
  var m = document.getElementById('mob-nav');
  var h = document.getElementById('hamburger');
  if (m) m.classList.remove('open');
  if (h) { h.classList.remove('open'); h.setAttribute('aria-expanded', 'false'); }
  document.body.style.overflow = '';
}
/* Close mobile menu on outside tap */
document.addEventListener('click', function(e) {
  var m = document.getElementById('mob-nav');
  var h = document.getElementById('hamburger');
  if (m && m.classList.contains('open') && !m.contains(e.target) && e.target !== h && !h.contains(e.target)) {
    closeMob();
  }
});

/* ── COUNTER ANIMATION ── */
function countUp(el) {
  var target = parseInt(el.dataset.target, 10);
  var dur = 1500, t0 = performance.now();
  function tick(now) {
    var p = Math.min((now - t0) / dur, 1);
    var e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(e * target);
    if (p < 1) requestAnimationFrame(tick); else el.textContent = target;
  }
  requestAnimationFrame(tick);
}

/* ── LIGHTBOX ── */
var _lbImgs = GALLERY_IMGS, _lbIdx = 0;
function lbOpen(idx, imgs) {
  if (imgs) _lbImgs = imgs;
  _lbIdx = idx; _lbRender();
  var lb = document.getElementById('lb');
  if (lb) lb.classList.add('on');
  document.body.style.overflow = 'hidden';
}
function lbClose() {
  var lb = document.getElementById('lb');
  if (lb) lb.classList.remove('on');
  document.body.style.overflow = '';
}
function lbShift(d) { _lbIdx = (_lbIdx + d + _lbImgs.length) % _lbImgs.length; _lbRender(); }
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
    var valid = f.type === 'email' ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value) : f.value.trim().length > 0;
    if (!valid) { if (g) g.classList.add('has-err'); f.classList.add('err'); ok = false; }
    else { if (g) g.classList.remove('has-err'); f.classList.remove('err'); }
  });
  if (!ok) return;
  var s = document.getElementById(successId);
  form.style.display = 'none';
  if (s) s.style.display = 'block';
}

/* ── SHARE ── */
function toggleShareMenu() { var d = document.getElementById('share-dropdown'); if (d) d.classList.toggle('open'); }
function doShare(platform) {
  var url = encodeURIComponent(window.location.href);
  var text = encodeURIComponent('Check out Santiagos Resort in Alfonso, Tagaytay! \uD83C\uDFCA\uD83C\uDFA4');
  var d = document.getElementById('share-dropdown');
  if (d) d.classList.remove('open');
  if (platform === 'copy') {
    if (navigator.clipboard) navigator.clipboard.writeText(window.location.href).then(function() {
      var btn = document.getElementById('share-copy-btn');
      if (btn) { btn.textContent = '\u2713 Copied!'; setTimeout(function() { btn.textContent = '\uD83D\uDD17 Copy Link'; }, 2000); }
    });
  } else if (platform === 'whatsapp') {
    window.open('https://wa.me/?text=' + text + '%20' + url, '_blank');
  } else if (platform === 'viber') {
    window.open('viber://forward?text=' + text + '%20' + url);
  }
}

/* ── CHECKLIST ── */
function toggleBring(el) { el.classList.toggle('checked'); }
