let elementsArray = [];

function addElement() {
    let input = document.getElementById("arrayInput").value;
    let num = Number(input);
    if (!isNaN(num)) {
        elementsArray.push(num);
        document.getElementById("arrayInput").value = '';
    } else {
        alert("Please enter a valid number");
    }
}

function findMax() {
    if (elementsArray.length === 0) {
        alert("No elements in the array");
        return;
    }
    let maxElement = elementsArray[0];
    for (let i = 1; i < elementsArray.length; i++) {
        if (elementsArray[i] > maxElement) {
            maxElement = elementsArray[i];
        }
    }
    document.getElementById('result').textContent="The maximum element is: " + maxElement;
}