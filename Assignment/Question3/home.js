function compareNumbers() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Please enter valid numbers.";
        return;
    }

    if (num1 > num2) {
        result.textContent = `${num1} is greater than ${num2}`;
    } else if (num1 < num2) {
        result.textContent = `${num1} is less than ${num2}`;
    } else {
        result.textContent = `${num1} is equal to ${num2}`;
    }
}
