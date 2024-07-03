function calculateGrade() {
    const mark = parseFloat(document.getElementById('mark').value);
    let grade = '';

    if (mark > 90) {
        grade = 'A+';
    } else if (mark <= 90 && mark >= 80) {
        grade = 'A';
    } else if (mark < 80 && mark >= 70) {
        grade = 'B+';
    } else if (mark < 70 && mark >= 60) {
        grade = 'C+';
    } else if (mark < 60 && mark >= 50) {
        grade = 'C';
    } else {
        grade = 'F';
    }

    document.getElementById('result').innerText = `The grade is: ${grade}`;
}