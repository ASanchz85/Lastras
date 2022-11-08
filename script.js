const numeroA=document.getElementById('number-exp');

let cantidadA=0;
let tiempoA=setInterval(() => {
    cantidadA+=1;
    numeroA.textContent=cantidadA;
    if(cantidadA===34){
        clearInterval(tiempoA);
    }
}, 150);

const numeroB=document.getElementById('number-hybrid');

let cantidadB=0;
let tiempoB=setInterval(() => {
    cantidadB+=1;
    numeroB.textContent=cantidadB;
    if(cantidadB===493){
        clearInterval(tiempoB);
    }
}, 10);

const numeroC=document.getElementById('number-cars');

let cantidadC=0;
let tiempoC=setInterval(() => {
    cantidadC+=5;
    numeroC.textContent=cantidadC;
    if(cantidadC===6495){
        clearInterval(tiempoC);
    }
}, 1);

let caja=document.getElementById("go-up-button");
caja.addEventListener("click",function(){
    document.documentElement.scrollTop=0;
});

window.addEventListener("scroll",function(){
    if (document.documentElement.scrollTop > 1000) {
        caja.style.display="flex";
    } else {
        caja.style.display="none";
    }
});

let video = document.getElementsByTagName("video-header")[0];
window.addEventListener("scroll", function(){
    if (this.scrollY >= (video.offsetTop - document.documentElement.clientHeight))
        video.play();
    else
        video.pause();
}, false);
