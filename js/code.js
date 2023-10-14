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