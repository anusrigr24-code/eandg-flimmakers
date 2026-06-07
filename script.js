const video = document.getElementById("showreel");
const soundBtn = document.getElementById("sound-btn");

soundBtn.addEventListener("click", () => {

    if(video.muted){

        video.muted = false;
        soundBtn.innerText = "MUTE";

    }else{

        video.muted = true;
        soundBtn.innerText = "UNMUTE";

    }

});

window.addEventListener("scroll", function(){

    const cards = document.querySelectorAll(".service-card");

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        const screenPosition = window.innerHeight / 1.2;

        if(position < screenPosition){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});