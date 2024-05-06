let count = 0;

function changeCount(num){
    count += num ;
    document.getElementById("count").innerHTML = count;
}

// dentro da função changeCount () podemos colocar undefinedm nome qualquer que não altera a função