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

    let downtitle = $('.download-nav-sect');
    downtitle.waypoint({
        handler: function(direction){
            if (direction == "down"){
                titledownloadeffect();
            }
        },
        offset: '85%',
    })
})

let IsLightStryEffect = false;
let IsConflictStryEffect = false;
let IsTitleDownloadEffect = false;

function lightstorytextanimate(){
    if (IsLightStryEffect) return;
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

    IsLightStryEffect = true;
}

function conflictstorytextanimate(){
    if (IsConflictStryEffect) return;
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

    IsConflictStryEffect = true;
}


function inpage(pagenav){
   if (pagenav.className == "inpage") return;
   
   let otherpagenav = document.getElementById("header-nav").children;
   for (let i = 0; i < 3; i++){
        let otherpagenav_a = otherpagenav[i].children;
        if (otherpagenav_a[0].className == "inpage"){
            otherpagenav_a[0].className = "notinpage";
        }
   }
   pagenav.className = "inpage";
}


function screenshotchange(){
    let element = document.getElementsByClassName('gamescreenshots-container');
    let width = -element[0].offsetWidth;
    let tl = anime.timeline({
        easing: 'easeInOutExpo',
        duration: 1000,
        loop: true
    })

    tl.add({
        targets: '.gamescreenshots',
        translateX: [0, width],
    }, '+=2000')

    width += -element[0].offsetWidth;

    tl.add({
        targets: '.gamescreenshots',
        translateX: width,
    }, '+=2000')

    width += -element[0].offsetWidth;

    tl.add({
        targets: '.gamescreenshots',
        translateX: width,
    }, '+=2000')

    tl.add({
        targets: '.gamescreenshots',
        translateX: [width, 0],
    }, '+=2000')
}


function titledownloadeffect(){
    if (IsTitleDownloadEffect) return;

    let downtitle = document.getElementsByClassName("download-title");
    downtitle[0].className = "download-title-effect";

    IsTitleDownloadEffecty = true;
}