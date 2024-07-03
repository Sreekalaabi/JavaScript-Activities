let array = [];


function addElement() {
    let element = document.getElementById("elementInput").value;
    array.push(element);
    document.getElementById("arrayDisplay").innerText = array.join(", ");
    document.getElementById("elementInput").value = "";
}