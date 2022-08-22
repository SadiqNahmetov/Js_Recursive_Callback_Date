

// function sum(n) {
//     let result = 0;
//     for (let i = 0; i <= n; i++) {
//             result += i;        
//     }

//     return result;
// }

// console.log(sum(4));


// function getSum(n) {
//     if (n == 1) {
//         return n;
//     } else {
//         return n + getSum(n - 1) 
//     }
// }

// console.log(getSum(3));


// function getFactorial(n) {
//     if (n == 1) {
//         return n;
//     } else {
//         return n * getSum(n - 1) 
//     }
// }

// console.log(getFactorial (3));


// let students = ["Hesen", "Aga", "Kamil", "Rauf"];


// students.forEach((element, index)=> {
//     console.log(element + "-" + index);
// });


// let students = ["Hesen", "Aga", "Kamil", "Rauf"];

// for (let item of students) {
//     console.log(item);
// }


// let students = ["Hesen", "Aga", "Kamil", "Rauf"];



// let users = [{
//     email: "cavid@code.edu.az",
//     password: "12345"
// }, {
//     email: "esqin@code.edu.az",
//     password: "12345"
// },{

//     email: "haqverdi@code.edu.az",
//     password: "12345"

// }];


// for (const key in users) {
//         console.log(users[key].email + "-" + users[key].password );

// }


//   for (const item of users) {
//     for (const key in item) {
//         console.log(key);

//         }
//     }



// let book ={
//     name: "Xosrov",
//     author: "Nizami",
//     pageCount: 20000
// }

//    for (const key in book) {

//         console.log(book(key));
//     }


// let students = ["Hesen", "Aga", "Kamil", "Rauf"];

// function getStudents(t,m,...arr) {
//     for (const item of arr) {
//         console.log(item);
//     }

//     console.log(t + "-t");
//     console.log(t + "-m");
// }
// getStudents("Hesen", "Aga", "Kamil", "Rauf");



// function evenNum (n) {
//     return n % 2 == 0;
// }


// function oddNum(n) {
//     return n % 2 != 0;
// }

// function threeNum(n) {
//     return n >= 3;
// }

// let evenNum = n => n % 2 == 0;
// let oddNum = n => n % 2 != 0;
// let threeNum = n => n >= 3;

// function numsByContidions(arr, callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }
//     return sum;
// }
// console.log(numsByContidions([1, 2, 3, 4, 5, 7], n => n % 2 == 0));
// console.log(numsByContidions([1, 2, 3, 4, 5, 7], n => n % 2 != 0));

// console.log(numsByContidions([1, 2, 3, 4, 5, 7],  n => n >= 5));


// function sumEvenNums(arr, callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// function sumOddNums(arr,callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// function sumThanThree(arr, callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// console.log(sumThanThree([1, 2, 3, 4, 5, 7],threeNum));
// console.log(sumOddNums([1, 2, 3, 4, 5, 7], oddNum));

// console.log(sumEvenNums([1, 2, 3, 4, 5, 7], evenNum));


//let numbers = [1, 2, 4, 5, 6, 7, 55, 9, 10, 15, 18, 22, 35, 65, 43]

// let filterNumbers = numbers.filter(m => m >= 9);

// let filterNumbers = numbers.filter(m => m % 2 == 1);
// let sum = 0;



// function sumNumbers(arr) {
//     for (const item of arr) {
//         sum += item;
//     }
//     return sum;
// }
// console.log(sumNumbers(numbers));

// console.log(filterNumbers);

// console.log(numbers);


// let numbers = [1, 2, 4, 5, 6, 7];
//   console.log(numbers);
// numbers.forEach((el, index) => {
//     numbers[index] = item*2;
// });

// console.log(numbers);



// let numbers = [1, 2, 4, 5, 6, 7];
//   console.log(numbers);
// numbers.forEach((el, index) => {
//     numbers[index] = item*item;
// });

// console.log(numbers);


// let numbers = [1, 2, 4, 5, 6, 7];
// let result = numbers.map(m=>m*m);
//   console.log(result);

//   console.log(numbers);

// let numbers = [1, 2, 4, 5, 6, 7];
// let result = numbers.map(m=>m*100);
//   console.log(result);

//   console.log(numbers);


 let users = [
    {
        name: "Ayxan",
        surname: "Nabatov",
        age: 23
    },
    {
        name: "Orxan",
        surname: "Akbarov",
        age: 26
    },
    {
        name: "Fidan",
        surname: "Merdanli",
        age: 17
    }
 ];

   let date = new Date();

   //  console.log(date);

  let result = users.map(m=>{
    return{
        fulName: `$[m.name] $[m.surname]`,
        yearOfBirth: date.getFullYear() - m.age
    }
 })

 console.log(result);