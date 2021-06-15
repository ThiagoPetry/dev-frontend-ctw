var statusOne = 0;

document.getElementById("eye-one").addEventListener("click", function() {
    if(statusOne == 0) {
        document.getElementById("hidden-one").style.display = "none";
        document.getElementById("hidden-ocult-one").style.display = "block";
    

        statusOne++;
    } else {
        document.getElementById("hidden-one").style.display = "block";
        document.getElementById("hidden-ocult-one").style.display = "none";

        statusOne--; 
    }
});

var statusTwo = 0;

document.getElementById("eye-two").addEventListener("click", function() {
    if(statusTwo == 0) {
        document.getElementById("hidden-two").style.display = "none";
        document.getElementById("hidden-ocult-two").style.display = "block";

        statusTwo++;
    } else {
        document.getElementById("hidden-two").style.display = "block";
        document.getElementById("hidden-ocult-two").style.display = "none";

        statusTwo--; 
    }
});

var statusThree = 0;

document.getElementById("eye-three").addEventListener("click", function() {
    if(statusThree == 0) {
        document.getElementById("hidden-three").style.display = "none";
        document.getElementById("hidden-ocult-three").style.display = "block";

        statusThree++;
    } else {
        document.getElementById("hidden-three").style.display = "block";
        document.getElementById("hidden-ocult-three").style.display = "none";

        statusThree--; 
    }
});