const opensign = document.getElementById("open");
const closesign = document.getElementById("close");
const container = document.querySelector(".container");
const li = document.querySelectorAll(".li")

opensign.addEventListener("click", ()=>{
    container.classList.toggle("active");
    closesigncoming();
})

function closesigncoming(){
    closesign.style.display = "block";
    opensign.style.display = "none";
    li.forEach((item)=>{
        item.style.transform = "translateX(300%)";
        item.style.transition = "transform 1.5s ease-in";
    });    
}

closesign.addEventListener("click", ()=>{
    container.classList.remove("active");
    opensigncoming();
})

function opensigncoming(){
    closesign.style.display = "none";
    opensign.style.display = "block";
    li.forEach((item)=>{
        item.style.transform = "";
        item.style.transition = "";
    });   
}