const students = {
    'David': 80,
    'Vinoth': 77,
    'Divya': 88,
    'Ishitha': 95,
    'Thomas': 68
};

function getGrade(mark) {
    if (mark > 90) {
        return 'A+';
    } else if (mark <= 90 && mark >= 80) {
        return 'A';
    } else if (mark < 80 && mark >= 70) {
        return 'B+';
    } else if (mark < 70 && mark >= 60) {
        return 'C+';
    } else if (mark < 60 && mark >= 50) {
        return 'C';
    } else {
        return 'F';
    }
}

function searchGrade() {
    const name = document.getElementById('name').value;
    const mark = students[name];

    if (mark !== undefined) {
        const grade = getGrade(mark);
        document.getElementById('result').innerText = `${name}'s grade is: ${grade}`;
    } else {
        document.getElementById('result').innerText = `Student not found.`;
    }
}