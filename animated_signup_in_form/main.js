let sign_back = document.getElementById("back-sign");
let log_back = document.getElementById("back-log");
let sign_form = document.querySelector(".form_sign");
let log_form = document.querySelector(".form_log");

sign_back.addEventListener("click", function(){
    sign_form.style.visibility = "visible";
    log_form.style.visibility = "hidden";
});

log_back.addEventListener("click", function(){
    sign_form.style.visibility = "hidden";
    log_form.style.visibility = "visible";    
});

sign_back.addEventListener("mouseover", function(){
    sign_back.style.background = "white";
    sign_back.style.color = "black";
    sign_back.style.transition = "0.7s ease-in-out all";
    sign_back.style.transform = "scale(1.3)";
});

sign_back.addEventListener("mouseleave", function(){
    sign_back.style.background = "black";
    sign_back.style.color = "white";
    sign_back.style.transition = "0.7s ease-in-out all";
    sign_back.style.transform = "scale(1)";
});


log_back.addEventListener("mouseover", function(){
    log_back.style.background = "white";
    log_back.style.color = "black";
    log_back.style.transition = "0.5s ease-in-out all";
    log_back.style.transform = "scale(1.3)";
});

log_back.addEventListener("mouseleave", function(){
    log_back.style.background = "black";
    log_back.style.color = "white";
    log_back.style.transition = "1s ease-in-out";
    log_back.style.transform = "scale(1)";
});