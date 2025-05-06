function Operazione(segno, a, b){
    a = 5;
    b = 10;
    if(segno == "+")
    {
        alert("La somma è: " + (a + b));
        return function(a, b)
        {
            return a + b;
        }
    }
    else if(segno == "-")
    {
        alert("La differenza è: " + (a - b));
        return function(a, b)
        {
            return a - b;   
        }
 }
    else if(segno == "*")
    {
        alert("Il prodotto è: " + (a * b));
        return function(a, b)
        {
            return a * b;    
        }
    }
    else if(segno == "/")
    {
        alert("Il quoziente è: " + (a / b)); 
        return function(a, b)
        {
            return a / b;
             
        }
    }
    else
    {
        alert("Operazione non valida");
    }
}

const bottone = document.getElementById("bottone");
const input = document.getElementById("input");

bottone.addEventListener("click", () => {
    const segno = input.value;
    Operazione(segno, 5, 10);
}
)