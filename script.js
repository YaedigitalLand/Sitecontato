const services=[
 {t:"Serviço 1",d:"Descreva em uma frase o que você entrega neste serviço.",x:"Aqui vai a descrição completa do serviço 1: o que está incluso, como funciona, prazo e valores.",k1:"#e50914",k2:"#7a0510"},
 {t:"Serviço 2",d:"Descreva em uma frase o que você entrega neste serviço.",x:"Aqui vai a descrição completa do serviço 2: o que está incluso, como funciona, prazo e valores.",k1:"#6d28d9",k2:"#2a0f5e"},
 {t:"Serviço 3",d:"Descreva em uma frase o que você entrega neste serviço.",x:"Aqui vai a descrição completa do serviço 3: o que está incluso, como funciona, prazo e valores.",k1:"#0891b2",k2:"#0b3a52"}
];
const base="Este é um texto de exemplo para a sua postagem. Substitua por aquilo que você quer contar: um bastidor de projeto, uma dica, um resultado de cliente ou uma novidade. O card foi feito para comportar cerca de quinhentos caracteres, o que dá espaço para explicar a ideia com calma, trazer contexto e terminar com um convite à ação. Ao clicar, o texto completo abre em uma janela para leitura sem pressa. Edite o título e o conteúdo no código, na lista chamada posts, e o carrossel se atualiza sozinho.";
const pal=[["#e50914","#7a0510"],["#6d28d9","#2a0f5e"],["#0891b2","#0b3a52"],["#d97706","#6b3203"],["#db2777","#5e0f35"],["#059669","#073d2b"],["#4f46e5","#1c1a5e"],["#dc2626","#4a0d0d"]];
const posts=pal.map((c,i)=>({t:"Postagem "+(i+1),x:base,k1:c[0],k2:c[1]}));

const modal=document.getElementById("modal"),box=document.getElementById("box");
function openModal(o){document.getElementById("mTitle").textContent=o.t;document.getElementById("mText").textContent=o.x;
 box.querySelector(".cover").style.background="linear-gradient(135deg,"+o.k1+","+o.k2+")";modal.classList.add("on");document.getElementById("mClose").focus()}
const closeModal=()=>modal.classList.remove("on");
document.getElementById("mClose").onclick=closeModal;
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

const sv=document.getElementById("services");
services.forEach(s=>{const b=document.createElement("button");b.className="svc";b.style.setProperty("--k1",s.k1);b.style.setProperty("--k2",s.k2);
 b.innerHTML="<h3></h3><p></p>";b.querySelector("h3").textContent=s.t;b.querySelector("p").textContent=s.d;b.onclick=()=>openModal(s);sv.appendChild(b)});

const tr=document.getElementById("track");
posts.forEach(p=>{const b=document.createElement("button");b.className="post";
 b.innerHTML='<div class="cover"><h3></h3></div><p></p><span>Ler completo</span>';
 b.querySelector(".cover").style.background="linear-gradient(135deg,"+p.k1+","+p.k2+")";
 b.querySelector("h3").textContent=p.t;b.querySelector("p").textContent=p.x;b.onclick=()=>openModal(p);tr.appendChild(b)});
const step=()=>tr.querySelector(".post").offsetWidth+16;
document.getElementById("next").onclick=()=>tr.scrollBy({left:step(),behavior:"smooth"});
document.getElementById("prev").onclick=()=>tr.scrollBy({left:-step(),behavior:"smooth"});

document.getElementById("btnSobre").addEventListener("click",()=>{const s=document.getElementById("sobre");s.classList.remove("pulse");void s.offsetWidth;s.classList.add("pulse")});
