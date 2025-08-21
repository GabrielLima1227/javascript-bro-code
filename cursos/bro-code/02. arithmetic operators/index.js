/*
    Arithmetic Operators = Operands (Values, Variables, etc..)
    Operators (+ - * /)
    Ex. 11 = x + 5;
*/
let students = 30

// Arithmetic Operators
students = students + 1;
console.log(students)

students = students - 1;
console.log(students)

students = students * 2;
console.log(students)

students = students / 2;
console.log(students)

students = students ** 2;
console.log(students)

let extraStudents = students % 3;
console.log(extraStudents)

//Argumented Assignment Operator
students += 1;
console.log(students)

students -= 1;
console.log(students)

students *= 2;
console.log(students)

students /= 2;
console.log(students)

students **= 2;
console.log(students)

extraStudents %= 2;
console.log(extraStudents)

//Increment and Decrement Operator
students++;
console.log(students)
students--;
console.log(students)

/*
    Operator Precedence
    1. Parenthesis ()
    2. Exponents
    3. multiplication, Division & Modulo
    4. Addition & Subtraction
*/

let result = 6 / 2 ** (2 + 5);
console.log(result)