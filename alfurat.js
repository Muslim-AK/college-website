let section = document.querySelector(".firstsection");
let spans = document.querySelectorAll(".the-progress span");

window.onscroll = function() {
    if(window.scrollY >= section.offsetTop){
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};