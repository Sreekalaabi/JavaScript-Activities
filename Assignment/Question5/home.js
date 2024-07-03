function calculateSquareArea() {
    const side = document.getElementById('squareSide').value;
    let result = '';
    if (isNaN(side)||side<= 0) {
        result = "Please enter a valid number for the side of the square.";
    }  else {
        const area = side * side;
        result = "The area of the square is: " + area;
    }
    document.getElementById('squareResult').innerHTML = result;
}

function calculateRectangleArea() {
    const length = document.getElementById('rectangleLength').value;
    const breadth = document.getElementById('rectangleBreadth').value;
    let result = '';
    if (isNaN(length) || isNaN(breadth)) {
        result = "Please enter numbers for both the length and breadth.";
    } else if (length <= 0 || breadth <= 0) {
        result = "Please enter positive numbers for both the length and breadth.";
    } else {
        const area = length * breadth;
        result = "The area of the rectangle is: " + area;
    }
    document.getElementById('rectangleResult').innerHTML = result;
}

function calculateCircleArea() {
    const radius = document.getElementById('radius').value;
    const pi = 3.14; 
    let result = '';
    if (isNaN(radius)) {
        result = "Please enter a number for the radius.";
    } else if (radius <= 0) {
        result = "Please enter a positive number for the radius.";
    } else {
        const area = pi * radius * radius;
        result = "The area of the circle is: " + area;
    }
    document.getElementById('circleResult').innerHTML = result;
}