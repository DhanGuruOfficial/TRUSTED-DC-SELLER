/* ==========================================
   TRUSTED DC SELLER
   SCRIPT.JS V3 - PART 1
========================================== */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    const loader = document.querySelector(".loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";

            setTimeout(() => {
                loader.remove();
            }, 600);

        }, 800);
    }
});

/* =============================
      Sticky Navbar
============================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});


/* =============================
      Smooth Scroll
============================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* =============================
     Scroll Reveal Animation
============================= */

const revealElements=document.querySelectorAll(

".card,.price-card,.glass-card,.review-box,section h2"

);

const revealObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.20

}

);

revealElements.forEach(el=>{

el.classList.add("hidden");

revealObserver.observe(el);

});


/* =============================
     Active Navigation
============================= */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/* =============================
     Back To Top Button
============================= */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show-top");

}else{

topBtn.classList.remove("show-top");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* =============================
     Button Ripple Effect
============================= */

document.querySelectorAll(

".btn1,.btn2,.discord-btn,.contact-btn,.price-card a"

)

.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

ripple.style.left=e.clientX-rect.left+"px";

ripple.style.top=e.clientY-rect.top+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});


/* =============================
      Random Glow Effect
============================= */

setInterval(()=>{

document.querySelectorAll(".card").forEach(card=>{

card.style.boxShadow="0 0 "+

(Math.random()*25+15)+

"px rgba(124,58,237,.35)";

});

},2500);
