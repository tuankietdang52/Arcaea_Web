$(document).ready(function(){
    let lighttxt = $('.lightstory');
    lighttxt.waypoint({
        handler: function(direction){
            if (direction == "down"){
                storytextanimate();
            }
        },
        offset: '70%',
    })
})

let countlightstry = false;

function storytextanimate(){
    if (countlightstry) return;
    let textwrap = document.querySelector('.lightstory');
    textwrap.innerHTML = textwrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    let sectopacity = $(".lightstory").css("opacity");

    $(".lightstory").css("opacity", 1);

    sectopacity = $(".lightstory").css("opacity");

    let animate = anime.timeline({loop: false}).add({
        targets: '.lightstory .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 10*i,
    })

    countlightstry = true;
    return animate;
}

function inpage(pagenav){
   if (pagenav.className == "inpage") return;
   
   let otherpagenav = document.getElementById("header-nav").children;
   for (let i = 0; i < 4; i++){
        let otherpagenav_a = otherpagenav[i].children;
        if (otherpagenav_a[0].className == "inpage"){
            otherpagenav_a[0].className = "notinpage";
        }
   }
   pagenav.className = "inpage";
}