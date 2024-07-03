function reverseNumber() {
    let number = Number(document.getElementById("number").value);

    let reversedNumber = parseFloat(number.toString().split('').reverse().join(''));

    document.getElementById("result").innerText = `Reversed number: ${reversedNumber}`;
}