$(document).ready(function(){
    let lighttxt = $('.lightstory');
    lighttxt.waypoint({
        handler: function(direction){
            if (direction == "down"){
                lightstorytextanimate();
            }
        },
        offset: '90%',
    })

    let conflicttxt = $('.conflictstory');
    conflicttxt.waypoint({
        handler: function(direction){
            if (direction == "down"){
                conflictstorytextanimate();
            }
        },
        offset: '90%',
    })
})

let countlightstry = false;
let countconflictstry = false;

function lightstorytextanimate(){
    if (countlightstry) return;
    let textwrap = document.querySelector('.lightstory');
    textwrap.innerHTML = textwrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    $(".lightstory").css("opacity", 1);

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

function conflictstorytextanimate(){
    if (countconflictstry) return;
    let textwrap = document.querySelector('.conflictstory');
    textwrap.innerHTML = textwrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    $(".conflictstory").css("opacity", 1);

    let animate = anime.timeline({loop: false}).add({
        targets: '.conflictstory .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 10*i,
    })

    countconflictstry = true;
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