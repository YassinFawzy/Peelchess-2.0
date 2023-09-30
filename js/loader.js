const loader = document.querySelector(".loader-container");
window.addEventListener("load", function(){
    loader.style.display= "none";
})

const sidebar= document.querySelector(".sidebar");
function showSidebar(){
    if (sidebar.style.display == "none"){
        sidebar.style.display= "flex";
    }
    else{
        sidebar.style.display = "none";
    }
}