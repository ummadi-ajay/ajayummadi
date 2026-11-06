document.getElementById('y').textContent=new Date().getFullYear();
// reliable in-page navigation (works even when hash links are blocked, e.g. embedded previews)
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}}));
// scroll reveal
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
// card spotlight
document.querySelectorAll('.card').forEach(c=>c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--x',e.clientX-r.left+'px');c.style.setProperty('--y',e.clientY-r.top+'px')}));

// robotics-style particle network background
(function(){const bg=document.querySelector('.bg');if(!bg)return;
const c=document.createElement('canvas');bg.appendChild(c);const x=c.getContext('2d');
let W,H,P=[],m={x:-999,y:-999},dpr=Math.min(devicePixelRatio||1,2);
const still=matchMedia('(prefers-reduced-motion:reduce)').matches;
let ca='#38bdf8',cg='#34d399';
const col=()=>{const s=getComputedStyle(document.documentElement);ca=s.getPropertyValue('--b').trim()||'#38bdf8';cg=s.getPropertyValue('--a').trim()||'#34d399'};
let run=true;
function size(){W=innerWidth;H=innerHeight;c.width=W*dpr;c.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0);
const n=Math.min(70,Math.floor(W*H/22000));P=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25}))}
function draw(){x.clearRect(0,0,W,H);const a=ca,g=cg;
for(const p of P){if(!still){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
const dx=p.x-m.x,dy=p.y-m.y,d=Math.hypot(dx,dy);if(d<110){p.x+=dx/d*1.2;p.y+=dy/d*1.2}}}
x.lineWidth=1;
for(let i=0;i<P.length;i++){for(let j=i+1;j<P.length;j++){const d=Math.hypot(P[i].x-P[j].x,P[i].y-P[j].y);
if(d<150){x.globalAlpha=(1-d/150)*.22;x.strokeStyle=a;x.beginPath();x.moveTo(P[i].x,P[i].y);x.lineTo(P[j].x,P[j].y);x.stroke()}}}
x.globalAlpha=.45;x.fillStyle=g;for(const p of P){x.beginPath();x.arc(p.x,p.y,1.8,0,6.283);x.fill()}
x.globalAlpha=1;if(!still&&run)requestAnimationFrame(draw)}
addEventListener('resize',()=>{size();if(still)draw()});addEventListener('mousemove',e=>{m.x=e.clientX;m.y=e.clientY});
matchMedia('(prefers-color-scheme:dark)').addEventListener('change',()=>{col();if(still)draw()});
document.addEventListener('visibilitychange',()=>{run=!document.hidden;if(run&&!still)requestAnimationFrame(draw)});
col();size();if(still)draw();else requestAnimationFrame(draw)})();
