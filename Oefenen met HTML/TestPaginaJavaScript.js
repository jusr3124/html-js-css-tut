function testing(z) {
    var a, b, c, d;
    if (z == 0) {
        a = "JA!";
        b = "yellow";
        c = "red";
        d = "10";
    } else if (z == 1) {
        a = "NEE!";
        b = "blue";
        c = "green";
        d = "100";
    } else {
        a = "MISSCHIEN!";
        b = "grey";
        c = "black";
        d = "50";
    }
    document.getElementById("proberen").innerHTML = a;
    document.getElementById("proberen").style.color = c;
    document.getElementById("proberen").style.backgroundColor = b;
    document.getElementById("proberen").style.fontSize = d + "px";

}