
function dzielenie() {

    var a = prompt("Wprowadź dzielną");

    var b = prompt("Wprowadź dzielnik");
    
    if (b == 0) {
        document.getElementById("dzielenie").innerHTML = "Nie można dzielić przez 0.";

    }else{
    
    document.getElementById("dzielenie").innerHTML =
    
    "Wynik twojego działania to " + a/b + ".";
    
    }
    
    }