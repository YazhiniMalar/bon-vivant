//nav bar
window.addEventListener("scroll", ()=>{
	let value=window.scrollY;
    document.getElementById("travel1").style.left = value * 1.5 + "px";
    document.getElementById("travel2").style.left = value * -1.5 + "px";
  if(value >50)
    document.querySelector(".navi").style.display = "flex";
    else
    document.querySelector(".navi").style.display = "none";
});