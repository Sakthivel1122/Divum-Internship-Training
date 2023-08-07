// Dropdown Start
let flag = true;
function dropdown(){
    if(flag == true){
        flag = false;
        document.getElementById("dropdown-id").style.display = "flex";
    }
    else{
        flag = true;
        document.getElementById("dropdown-id").style.display = "none";
    }
}
// Dropdown End
// -------------------------------------------------------
// Slide Show Start
let slideshow = true;
let slideIndex = 1;
showSlide(slideIndex);
function currSlide(n){
    slideshow = false;
    slideIndex = n;
    showSlide(slideIndex);
}
function plusSlide(){
    if(slideshow == true){
        slideIndex++;
    }
    showSlide(slideIndex);
}

function showSlide(n){
    let i;
    let slides = document.getElementsByClassName("slide-img");
    let slide_btn = document.getElementsByClassName("slide-btn");
    for(i = 0;i < slides.length;i++){
        slides[i].style.display = "none";
    }
    if(n > slides.length){
        slideIndex = 1;
        n = 1;
    }
    for(i = 0;i < slide_btn.length;i++){
        slide_btn[i].className = slide_btn[i].className.replace(" active-slide","");
    }
    slides[n - 1].style.display = "block";
    slide_btn[n-1].className += " active-slide";
    if(slideshow == true){
        setTimeout(plusSlide,2000);
    }
}
// Slide Show End
// ------------------------------------------------------