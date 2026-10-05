//Currying & Uncurrying
//1
function add(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        };
    };
}
add(10)(20)(30); 
//2
function employee(name) {
   return function(department) {
        return function(salary) {
            console.log(name, department, salary);
        };
    };
}
employee("Siva Prasad Reddy")("IT")(40000);
//3
function multiply(a) {
    return function(b) { 
        return function(c) {
            console.log(a * b * c);
        };
    };
}
multiply(2)(5)(4);
//4
function addnumbers(a,b,c) {
    console.log(a + b + c);
}
addnumbers(10,25,50);
//5
// Curried version
function addFour(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                console.log(a + b + c + d);
            };
        };
    };
}

addFour(10)(15)(20)(25);

// Uncurried version
function addFourNumbers(a, b, c, d) {
    console.log(a + b + c + d);
}

addFourNumbers(5,15,30,40);


//Spread Operator
//6
let a = [1,2,3,4,5];
let b = [6,7,8,9,10];

let result = [...a, ...b];
console.log(result);
//7
let students1 = ["Siva", "Ravi", "Kiran"];
let students2 = ["Arun", "Rahul", "Vijay"];

let students = [...students1, ...students2];
console.log(students);
//8
let numbers1 = [10,20,30];
console.log(...numbers1,40,50,60);
//9
let employee1 = {
    name: "Siva",
    department: "IT"
};

let employee2 = {
    designation: "Developer",
    city: "Kadapa"
};
let employeeDetails = {...employee1, ...employee2};
console.log(employeeDetails);
//10
let emp = {
    name: "Siva",
    department: "IT"
};

let newEmp = {
    ...emp,
    salary: 40000
};

console.log(newEmp);
//11
let obj1 = {
    name: "Siva",
    age: 22
};

let obj2 = {
    city: "Kadapa",
    qualification: "B.Tech"
};

let combined = {...obj1, ...obj2};
console.log(combined);
//12
let first = [1, 2, 3];
let second = [4, 5, 6];

let reverseArray = [...second.reverse(), ...first.reverse()];
console.log(reverseArray);


//Rest Operator in Functions
//13
function numbers(a, b, ...remaining) {
    console.log(a);
    console.log(b);
    console.log(remaining);
}
numbers(10, 20, 30, 40, 50);
// 14
function student(name, department, ...marks) {
    console.log(name);
    console.log(department);
    console.log(marks);
}

student("Siva", "CSE", 80, 85, 90);
// 15
function add1(a, b, ...numbers) {
    let sum = a + b;

    for (let num of numbers) {
        sum += num;
    }

    console.log(sum);
}

add1(10, 20, 30, 40, 50);
// 16
function values(a, b, ...rest) {
    console.log(rest[4]);
}

values(10, 20, 30, 40, 50, 60, 70);
// 17
function product(product, price, ...remaining) {
    console.log(product);
    console.log(price);
    console.log(remaining);
}

product("Laptop", 70000, "HP", "16GB RAM", "512GB SSD");
// 18
function tenNumbers(a, b, ...rest) {
    console.log("First:", a);
    console.log("Second:", b);
    console.log("Remaining:", rest);
}

tenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);



//Array Destructuring
// 19
let arr = [10, 20, 30, 40];

let [a1, b1, c1, d1] = arr;

console.log(a1,b1,c1,d1);

// 20
let studentDetails = ["Siva", "CSE", 85];

let [name, department, marks] = studentDetails;

console.log(name,department,marks);
// 21
let nums = [10, 20, 30, 40, 50];

let [firstValue,secondValue,ThirdValue , fourthValue,fifthValue] = nums;

console.log(firstValue,fourthValue);
// 22
let nested = [10, [20, 30], 40];

let [x, [y, z], w] = nested;

console.log(x,y,z,w);

// 23
let data = [10, [20, [30, 40]]];

let [a2, [b2, [c2, d2]]] = data;

console.log(a2,b2,c2,d2);


//Object Destructuring
// 24
let employeeData = {
    empname: "Siva",
    designation: "Developer",
    salary: 40000
};

let {empname, designation, salary} = employeeData;

console.log(empname, designation, salary);

// 25
let studentData = {
    name1: "Siva",
    department1: "CSE",
    cgpa: 8.5
};

let {name1, department1, cgpa} = studentData;

console.log(name1, department1, cgpa);

// 26
let person = {
    name2: "Siva",
    age:22,
    city: "Kadapa",
    qualification: "B.Tech",
    college: "DSU"
};

let {name2, city, qualification} = person;

console.log(name2, city, qualification);
// 27
let company = {
    employee: {
        name3: "Siva"
    },
    team: {
        members: ["Ravi", "Kiran", "Arun"]
    }
};

let {
    employee: {name3},
    team: {members}
} = company;

console.log(name3);
console.log(members);
// 28
let companyData = {
    department: {
        employee: {
            name4: "Siva"
        }
    }
};

let {
    department: {
        employee: {name4}
    }
} = companyData;

console.log(name4);


//Array Manipulation
// 29
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

fruits.push("Pineapple", "Papaya", "Guava");

console.log(fruits);
// 30
let number1 = [10, 20, 30, 40, 50];

number1.pop();

console.log(number1);
// 31
let names = ["Siva", "Ravi", "Kiran", "Arun", "Rahul"];

names.shift();

console.log(names);
// 32
let nums2 = [30, 40, 50, 60];

nums2.unshift(10, 20);

console.log(nums2);
// 33
let arr2 = [10, 20, 30, 40, 50];

arr2.splice(2, 1, 100);

console.log(arr2);
// 34
let arr3 = [10, 20, 30, 40, 50, 60];

arr3.splice(2, 2);

console.log(arr3);
// 35
let arr4 = [10, 20, 60, 70];

arr4.splice(2, 0, 30, 40, 50);

console.log(arr4);
// 36
let arr5 = [10, 20, 30, 40, 50];

arr5.splice(2, 2, 100, 200, 300);

console.log(arr5);
// 37
let studentList = ["Siva", "Ravi", "Kiran", "Arun", "Rahul"];

studentList.splice(2, 1);

console.log(studentList);
// 38
let cart = ["Laptop", "Mouse", "Keyboard"];

cart.push("Monitor");
console.log(cart);

cart.pop();
console.log(cart);

cart.shift();
console.log(cart);

cart.unshift("Mobile");
console.log(cart);


//Array Merge & Extraction Methods
// 39
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let merged = array1.concat(array2);

console.log(merged);
// 40
let one = [1, 2];
let two = [3, 4];
let three = [5, 6];

let all = one.concat(two, three);

console.log(all);
// 41
let value1 = [10, 20, 30, 40, 50, 60, 70, 80];

let result1 = value1.slice(2, 6);

console.log(result1);

// 42
let student1 = ["Siva", "Ravi", "Kiran", "Arun", "Rahul"];

let firstThree = student1.slice(0, 3);

console.log(firstThree);
// 43
let nestedArray = [1, [2, [3, 4]]];

let flatArray = nestedArray.flat(3);

console.log(flatArray);
// 44
let nestedArray2 = [1, [2, [3, [4, 5]]]];

let flatArray2 = nestedArray2.flat(4);

console.log(flatArray2);
// 45

let arr6 = [10, 20, 30, 40, 50];
let sliced = arr6.slice(1, 3);
console.log("slice:", sliced);
console.log("Original:", arr6);


let spliced = arr6.splice(1, 2);
console.log("splice:", spliced);
console.log("Original:", arr6);



//Search & Other Array Methods
// 46
let num1 = [10, 20, 30, 40, 50];

console.log(num1.includes(50));
// 47
let duplicate = [10, 20, 30, 20, 40, 20];

console.log(duplicate.indexOf(20));
// 48
let duplicate2 = [10, 20, 30, 20, 40, 20];

console.log(duplicate2.lastIndexOf(20));
// 49
let numbers2 = [50, 10, 40, 20, 30];

numbers2.sort((a, b) => a - b);

console.log(numbers2);
// 50
let numbers3 = [10, 20, 30, 40, 50];

numbers3.reverse();

console.log(numbers3);