// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();

const destino = document.querySelector(this.getAttribute('href'));

if(destino){
destino.scrollIntoView({
behavior: 'smooth'
});
}
});
});

// Animação ao aparecer na tela

const elementos = document.querySelectorAll('.card, .preco, .faq');

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});

elementos.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(40px)";
item.style.transition=".6s ease";

observer.observe(item);

});

// Destaque ao passar o mouse nas ofertas

document.querySelectorAll(".preco").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px)";

});

card.addEventListener("mouseleave",()=>{

if(card.classList.contains("destaque")){
card.style.transform="scale(1.03)";
}else{
card.style.transform="translateY(0)";
}

});

});

// Botões de compra

document.querySelectorAll(".btn-comprar").forEach(botao=>{

botao.addEventListener("click",()=>{

// Troque pelo seu checkout
window.location.href="https://SEU-LINK-DE-CHECKOUT";

});

});
