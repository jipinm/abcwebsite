(function(){
var pages=[['index.html','Home'],['activities.html','Activities'],['events.html','Events'],['gallery.html','Gallery'],['contact.html','Contact Us']];
var cur=location.pathname.split('/').pop()||'index.html';
var links=pages.map(function(p){return '<a href="'+p[0]+'"'+(p[0]===cur?' class="on" aria-current="page"':'')+'>'+p[1]+'</a>'}).join('');
var P={mail:'<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',globe:'<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',instagram:'<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',youtube:'<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>'};
function ic(n){return '<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+P[n]+'</svg>'}
var LOGO='<img src="assets/images/logo.png" alt="Ambady Business Corporation logo" onerror="this.onerror=null;this.src=\'https://www.ambadybusinesscorporation.com/logo.png\'">';
var soc='<div class="soc"><a href="#" aria-label="LinkedIn"><span data-i="linkedin"></span></a><a href="#" aria-label="Facebook"><span data-i="facebook"></span></a><a href="#" aria-label="Instagram"><span data-i="instagram"></span></a><a href="#" aria-label="YouTube"><span data-i="youtube"></span></a></div>';
var h=document.getElementById('site-header');
if(h){h.outerHTML='<header><div class="wrap"><a class="logo" href="index.html" aria-label="Ambady Business Corporation home">'+LOGO+'<span class="brand-name"><span>Ambady</span><span>Business Corporation</span></span></a><button class="burger" aria-label="Menu" aria-expanded="false">&#9776;</button><nav id="nav">'+links+'</nav></div></header>';
var b=document.querySelector('.burger'),n=document.getElementById('nav');
b.onclick=function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''};
n.onclick=function(e){if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded',false);document.body.style.overflow=''}}}
var f=document.getElementById('site-footer');
if(f){f.outerHTML='<footer><div class="wrap fgrid"><div class="fbrand"><a class="flogo" href="index.html" aria-label="Ambady Business Corporation home">'+LOGO+'</a><p>Engineering, marine trading, tourism and events. Rooted in Kerala since 1946.</p>'+soc+'</div><div><h3>Quick links</h3><ul class="flinks">'+pages.map(function(p){return '<li><a href="'+p[0]+'">'+p[1]+'</a></li>'}).join('')+'</ul></div><div><h3>Contact</h3><ul class="finfo"><li><span data-i="pin"></span><span>Captain House Building, ATRA - B29 (2), Pattanamkara, Ambalathara, Poonthura PO, Trivandrum 26, Kerala</span></li><li><span data-i="mail"></span><a href="mailto:info@ambadybusinesscorporation.com">info@ambadybusinesscorporation.com</a></li><li><span data-i="phone"></span><a href="tel:+918988825000">+91 89888 25000</a></li><li><span data-i="globe"></span><a href="https://www.ambadybusinesscorporation.com">www.ambadybusinesscorporation.com</a></li></ul></div></div><div class="wrap copy"><span>&copy; '+new Date().getFullYear()+' Ambady Business Corporation. All rights reserved.</span><span>A Kerala heritage business, since 1946</span></div></footer>'}
document.querySelectorAll('[data-i]').forEach(function(el){el.innerHTML=ic(el.dataset.i)});
// images fall back to gradient if blocked
document.addEventListener('error',function(e){if(e.target.tagName==='IMG')e.target.style.display='none'},true);
// gallery
var tabs=document.querySelectorAll('.tabs button');
tabs.forEach(function(t){t.onclick=function(){tabs.forEach(function(x){x.classList.remove('on')});t.classList.add('on');
document.querySelectorAll('.gal .pic').forEach(function(p){p.classList.toggle('hide',t.dataset.f!=='all'&&p.dataset.c!==t.dataset.f)})}});
var lb=document.getElementById('lb');
if(lb){document.querySelectorAll('.gal .pic').forEach(function(p){p.onclick=function(){lb.querySelector('img').src=p.querySelector('img').src.replace('w=600','w=1400');lb.classList.add('open')}});
lb.onclick=function(){lb.classList.remove('open')};document.onkeydown=function(e){if(e.key==='Escape')lb.classList.remove('open')}}
// contact form
var fm=document.getElementById('enquiry');
if(fm){fm.onsubmit=function(e){e.preventDefault();var ok=true;
function chk(id,test,msg){var el=document.getElementById(id);el.nextElementSibling.textContent=test(el.value.trim())?'':msg;if(!test(el.value.trim()))ok=false}
chk('name',function(v){return v.length>1},'Enter your name.');
chk('email',function(v){return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)},'Enter a valid email address.');
chk('phone',function(v){return /^[+\d][\d\s-]{7,}$/.test(v)},'Enter a valid phone number.');
chk('service',function(v){return v!==''},'Choose a service.');
chk('msg',function(v){return v.length>9},'Write at least 10 characters.');
if(ok){fm.reset();document.getElementById('done').hidden=false}}}
})();
