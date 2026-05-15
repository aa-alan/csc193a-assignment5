function biggerButton() {
    document.getElementById("Text").style.fontSize = "24pt";
}
function mooButton() {
    document.getElementById("Text").style.textTransform = "uppercase";
    var parts = document.getElementById("Text").value.split(".");
    document.getElementById("Text").value = parts.join("-Moo.");
}
function fancyShmancy() {
    document.getElementById("Text").style.fontWeight = "bold";
    document.getElementById("Text").style.color = "blue";
    document.getElementById("Text").style.textDecoration = "underline";
}
function boringBetty() {
    document.getElementById("Text").style.fontSize = "";
    document.getElementById("Text").style.fontWeight = "normal";
    document.getElementById("Text").style.color = "black";
    document.getElementById("Text").style.textDecoration = "none";
    document.getElementById("Text").style.textTransform = "none";
}