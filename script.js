const toggle=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");
const topBtn=document.getElementById("topBtn");

toggle.onclick=()=>navLinks.classList.toggle("active");

const reveals=document.querySelectorAll(".reveal");

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";
}
});
},{threshold:0.15});

reveals.forEach(el=>{
observer.observe(el);
});

window.addEventListener("scroll",()=>{

if(window.scrollY>300){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}

let scrollTop=document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
let progress=(scrollTop/height)*100;

document.getElementById("progressBar").style.width=progress+"%";

});

topBtn.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});

document.addEventListener("DOMContentLoaded",()=>{
document.getElementById("loader").style.opacity="0";
setTimeout(()=>{
document.getElementById("loader").style.display="none";
},300);
});

const filterBtns=document.querySelectorAll(".menu-filter button");
const menuCards=document.querySelectorAll(".menu-card");

filterBtns.forEach(btn=>{
btn.onclick=()=>{

document.querySelector(".menu-filter .active").classList.remove("active");
btn.classList.add("active");

let filter=btn.dataset.filter;

menuCards.forEach(card=>{

if(filter==="all"||card.classList.contains(filter)){
card.style.display="flex";
}else{
card.style.display="none";
}

});

};
});

const images=document.querySelectorAll(".gallery-grid img");
const lightbox=document.getElementById("lightbox");
const lightImg=lightbox.querySelector("img");

images.forEach(img=>{
img.onclick=()=>{
lightbox.style.display="flex";
lightImg.src=img.src;
};
});

lightbox.onclick=()=>lightbox.style.display="none";