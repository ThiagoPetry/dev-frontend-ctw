document.getElementById("sandwichMenu").addEventListener("mouseover", openDrop);

function openDrop() {
    document.getElementById("dropdownMenu").style.display = 'block';
}

document.getElementById("sandwichMenu").addEventListener("mouseout", closeDrop);

function closeDrop() {
    document.getElementById("dropdownMenu").style.display = 'none';
}