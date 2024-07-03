
let names = [];

function submitName() {
    let name = document.getElementById("nameInput").value;
    if (name) {
        names.push(name);
        document.getElementById("nameInput").value = "";
        addRollNumberOption(names.length);
    }
}

function addRollNumberOption(rollNumber) {
    let rollNumberSelect = document.getElementById("numberSelect");
    let option = document.createElement("option");
    option.value = rollNumber;
    option.text = rollNumber;
    rollNumberSelect.appendChild(option);
    rollNumberSelect.onchange = displayStudentName; 
}

function displayStudentName() {
    let rollNumber = document.getElementById("numberSelect").value;
    if (rollNumber) {
        let studentName = names[rollNumber - 1];
        document.getElementById("studentNameDisplay").innerText = studentName;
    } else {
        document.getElementById("studentNameDisplay").innerText = "";
    }
}