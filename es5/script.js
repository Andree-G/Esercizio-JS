function saluta(nome) {
    alert("Ciao, " + nome); 
}

inputNome.addEventListener("click", () => {
    saluta(input.value);}
);

const inputNome = document.getElementById("inputNome");