
var topex = ""; topey = "";
function Aleatorios(tope)
    {
        var i = 1;
       i = Math.floor((Math.random() * tope) + 1);
    return i;
}

function PosicionAleatoriaX(topex) {
    var x = 0;
    i = Math.floor((Math.random() * topex) + 1);
    return x.toString();

}
function PosicionAleatoriaY(topey) {
    var y = 0;
    y = Math.floor((Math.random() * topey) + 1);
    return y.toString();
}