document.getElementById("sandwichMenu").addEventListener("mouseover", open);

function open() {
    document.getElementById("dropdownMenu").style.display = 'block';
}

document.getElementById("sandwichMenu").addEventListener("mouseout", close);

function close() {
    document.getElementById("dropdownMenu").style.display = 'none';
}