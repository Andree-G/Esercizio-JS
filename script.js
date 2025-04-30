function ControllaNumero(num){
    if(num % 2 == 0){
        console.log("Il numero è pari");
    }
    else{
        console.log("Il numero è dispari");
    }

    if(num > 100){
        alert("Grande!");
    }
}

const bottone = document.getElementById("bottone");
const input = document.getElementById("input");

bottone.addEventListener("click", () => {
    ControllaNumero(parseInt(input.value));
}
);