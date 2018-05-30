function count(palabra,comparar){
    var salida = 0;
    var i = palabra.length;
    var Array = palabra.split('');
    for(j=0; j<i; j++){
        if(Array[j]==comparar){
        var salida = salida + 1;    
        }
        else{}        
    }
    return salida;
}

function filter(Matriz) {
var l = Matriz.length;
var MatrizSalida = [];
var h = 0;
for(j=0; j<l; j++){
    if(Matriz[j]>10){
    MatrizSalida[h] = Matriz[j];
    h = h + 1;    
    }
    else{}        
}
return MatrizSalida
}
function hypotenuse(a,b) {
    h = Math.sqrt((a*a) + (b*b));
    return h
}
