let array = [];

function addElement() {
    const element = document.getElementById("elementInput").value;
    if (element !== "") {
        array.push(element);
        document.getElementById("elementInput").value = "";
        displayArray();
        displaySortedArray();
        displayReversedArray();
    }
}

function displayArray() {
    document.getElementById("arrayDisplay").innerHTML = array.join(", ");
    IndexSelect();
}

function IndexSelect() {
    const select = document.getElementById("indexSelect");
    select.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        select.appendChild(option);
    }
}

function getSortedArray() {
    return array.slice().sort();
}

function displaySortedArray() {
    const sortedArray = getSortedArray();
    document.getElementById("sortedArrayDisplay").innerHTML = sortedArray.join(", ");
}

function getReversedArray() {
    return array.slice().reverse();
}

function displayReversedArray() {
    const reversedArray = getReversedArray();
    document.getElementById("reversedArrayDisplay").innerHTML = reversedArray.join(", ");
}

function searchElement() {
    const searchElement = document.getElementById("searchInput").value;
    const index = array.indexOf(searchElement);
    if (index !== -1) {
        document.getElementById('search').innerHTML=`Element found at index ${index}`;
    } else {
        document.getElementById('search').innerHTML="Element not found";
    }
}

function displayElementByIndex() {
    const index = document.getElementById("indexSelect").value;
    const element = array[index];
    if (element !== undefined) {
        document.getElementById("indexDisplay").innerText = element;}
    // } else {
    //     document.getElementById("indexDisplay").innerText = "Invalid index";
    // }
}