/* let tabs = document.querySelectorAll(" .tabs li ");
let tabsArray=  Array.from(tabs);
let div = document.querySelectorAll(" .content > div ");
let divArray=  Array.from(div);
//console.log(tabs);
tabsArray.forEach((ele) =>{
ele.addEventListener("click", function (e){
    tabsArray.forEach((ele) =>{
ele.classList.remove("active");
    });
    this.classList.add("active");

    divArray.forEach((div) =>{
        div.style.display="none"
            });
            document.querySelector(this.dataset.cont).style.display="block";

});
});
*/

let tabs = document.querySelectorAll(".tabs li");
let div = document.querySelectorAll(".content > div");



tabs.forEach((ele)=>{
ele.addEventListener("click",function(e){
tabs.forEach((ele)=>{
ele.classList.remove("active");
});
this.classList.add("active");
div.forEach((e)=>{
e.style.display="none";
});
document.querySelector(this.dataset.cont).style.display="block";
});
});