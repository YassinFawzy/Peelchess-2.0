const changing_word= document.querySelector(".ct");

const textLoad= () =>{
    setTimeout (() => {
        changing_word.textContent= "Passion";
    }, 0);
    setTimeout (() => {
        changing_word.textContent= "Purpose";
    }, 5000);
    setTimeout (() => {
        changing_word.textContent= "Strategy";  
    }, 10000);
}

textLoad();
setInterval(textLoad, 15000)


