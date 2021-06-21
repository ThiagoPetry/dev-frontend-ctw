var status = 0;

document.getElementById("choose").addEventListener("click", function() {
    if(status == 0) {
        document.getElementById("coin").innerHTML = "$";
        document.getElementById("coin").style.marginLeft = "7vw";
        document.getElementById("choose").style.marginLeft = "1.5vw";
        status++;
    } else {
        document.getElementById("coin").innerHTML = "R$";
        document.getElementById("coin").style.marginLeft = "1.5vw";
        document.getElementById("choose").style.marginLeft = "6.5vw";
        status--;
    }
});