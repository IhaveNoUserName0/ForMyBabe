let con = document.getElementById("container");
con.addEventListener("touchstart",()=>{
  txt.style.transform = "translateY(-150px)";
});
con.addEventListener("touchend",()=>{
    txt.style.transform = "translateY(0px)";
})