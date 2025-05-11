let botao = document.querySelector("#btn");
botao.style.background="blue";

let estaquebrado = false
let contaClicks=0;
botao.addEventListener("mouseover",e => {
    if(estaquebrado===false){
        botao.style.backgroundColor = "green";
        botao.style.color = "white";
    }    
});

botao.addEventListener("mouseout",e => {
    if(!estaquebrado)
        botao.style.backgroundColor = "blue";
});

botao.addEventListener("click",e => {
   
    contaClicks++;

    if(contaClicks>=10){
        botao.style.backgroundColor = "red";
        botao.innerHTML = "quebrei";
        estaquebrado = true;
    }    
});

