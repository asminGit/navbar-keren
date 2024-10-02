var listbar = document.getElementById("listbar");
var ul = document.getElementById("ul-listbar");
var li = document.getElementById("li");

ul.style.maxWidth = "0";
listbar.style.backgroundColor = "rgba(173, 173, 173, 0)";

listbar.addEventListener("click", function(){
    if(ul.style.maxWidth == "0px"){
        ul.style.maxWidth = "900px"
        ul.style.maxWidth = "900px"
        ul.style.transition = "0.8s"
    }else{
        ul.style.maxWidth = "0"
        ul.style.maxWidth = "0.2s"
    }
})

listbar.addEventListener("click", function(){
    if(listbar.style.backgroundColor == "rgba(173, 173, 173, 0)"){
        listbar.style.backgroundColor = "rgb(173, 173, 173)";

    }else{
        listbar.style.backgroundColor = "rgba(173, 173, 173, 0)";
        listbar.style.transition = "0.5s";

    }
})