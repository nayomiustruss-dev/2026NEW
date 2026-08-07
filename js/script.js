/* =====================================
   ARCHITECTURAL PORTFOLIO JAVASCRIPT
===================================== */


/* ==========================
   MOBILE MENU
========================== */

const menuButton = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");


if(menuButton){

    menuButton.addEventListener("click",()=>{

        navMenu.classList.toggle("active");

    });

}



/* ==========================
   SMOOTH SCROLL
========================== */


document.querySelectorAll("a[href^='#']")
.forEach(link=>{


    link.addEventListener("click",function(e){

        e.preventDefault();


        const target =
        document.querySelector(this.getAttribute("href"));


        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});





/* ==========================
   NAVBAR SCROLL EFFECT
========================== */


window.addEventListener("scroll",()=>{


const header =
document.querySelector("header");


if(window.scrollY > 50){

    header.classList.add("scrolled");

}

else{

    header.classList.remove("scrolled");

}


});






/* ==========================
   PROJECT CARD ANIMATION
========================== */


const cards =
document.querySelectorAll(".project-card");


const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},
{

threshold:0.2

});



cards.forEach(card=>{


observer.observe(card);


});






/* ==========================
   SKILL BAR ANIMATION
========================== */


const skillBars =
document.querySelectorAll(".skill-progress");



skillBars.forEach(bar=>{


const value =
bar.getAttribute("data-progress");


bar.style.width="0%";



setTimeout(()=>{


bar.style.width=value+"%";


},500);



});






/* ==========================
   TYPING EFFECT
========================== */


const text = [

"Architectural Draftsman",

"BIM Specialist",

"Revit Professional",

"AutoCAD Expert"

];


let index=0;

let charIndex=0;


const typing =
document.querySelector(".typing");



function typeEffect(){


if(!typing)
return;



if(charIndex < text[index].length){


typing.innerHTML +=
text[index].charAt(charIndex);


charIndex++;


setTimeout(typeEffect,100);


}


else{


setTimeout(()=>{


typing.innerHTML="";

charIndex=0;


index++;


if(index>=text.length){

index=0;

}


typeEffect();


},1500);


}


}



typeEffect();







/* ==========================
   CONTACT FORM
========================== */


const form =
document.querySelector(".contact-form");



if(form){


form.addEventListener("submit",(e)=>{


e.preventDefault();



alert(
"Thank you! Your message has been received."
);



form.reset();



});


}






/* ==========================
   CURRENT YEAR FOOTER
========================== */


const year =
document.querySelector("#year");


if(year){

year.innerHTML =
new Date().getFullYear();

}
