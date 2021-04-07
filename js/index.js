// load
// focus
// resize
// scroll
// select
// dblclick
// drag / drop
const colors = ["#ffe268","#ddffbc","#a4ebf3","#1a508b"];

let radius = 0;
document.addEventListener("wheel",e=>{
    if (e.deltaY < 0){
        if(radius>0){
            radius-=3;
            document.querySelectorAll("img").forEach(img=>{
                img.style.borderRadius = `${radius}px`;
            })
        }
    }
    else if (e.deltaY > 0){
        if(radius<=50){
            radius+=8;
            document.querySelectorAll("img").forEach(img=>{
                img.style.borderRadius = `${radius}px`;
            })
        }
    }
})
document.querySelectorAll(".nav-link").forEach(nav=>{
    nav.addEventListener("mouseover",e=>nav.style.fontWeight = "bold")
    nav.addEventListener("mouseleave",e=>nav.style.fontWeight = "normal")
})
document.addEventListener("keydown",e=>{
    
    document.querySelectorAll("img").forEach(img=>{
        let color = colors[Math.floor(Math.random()*4)];
        img.style.borderColor = color;
    });  
})
document.querySelector(".logo-heading").addEventListener("click",e=>{
    alert("This is our logo");

})

let shrink = false;
document.querySelector("img").addEventListener("dblclick",e=>{
    if(!shrink){
        e.target.style.width = "90%";
        shrink = true;
    }else{
        e.target.style.width = "100%";
        shrink = false;
    }
})


