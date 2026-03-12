document.addEventListener("DOMContentLoaded", function(){

let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i){

slides.forEach(function(slide){
slide.classList.remove("active");
});

dots.forEach(function(dot){
dot.classList.remove("active");
});

slides[i].classList.add("active");
dots[i].classList.add("active");

}

dots.forEach(function(dot,i){

dot.addEventListener("click", function(){

index = i;
showSlide(index);

});

});


setInterval(function(){

index++;

if(index >= slides.length){
index = 0;
}

showSlide(index);

},5000);

});