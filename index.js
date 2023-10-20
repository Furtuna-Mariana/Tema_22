// const obj = {
//     name: 'Mia'
// }

// Object.defineProperty(obj, 'age', {
//     value: '50',
//     writable: false,
//     enumerable: true,
//     configurable: true,
// })

// obj.age = 100;

// console.log(obj)






// const obj = {
//     name: 'Mia',
// }

// Object.defineProperty(obj, 'gender', {
//     value: 'female',
//     writable: true,
//     enumerable: true,
//     configurable: false,
// })

// Object.preventExtensions(obj)

// obj.city = 'Balti'

// console.log(obj)






// const obj = {
//     name: 'Mia',
// }

// Object.defineProperty(obj, 'gender', {
//     value: 'female',
//     writable: true,
//     enumerable: true,
//     configurable: false,
// })

// Object.seal(obj)

// obj.city = 'Balti'

// obj.name = "Irina"

// console.log(obj)






// const obj = {
//     name: 'Mia',
// }

// Object.defineProperty(obj, 'gender', {
//     value: 'female',
//     writable: true,
//     enumerable: true,
//     configurable: true,
// })

// Object.freeze(obj)

// obj.city = 'Balti'

// obj.name = "Irina"

// console.log(obj)




// const arr = [2, 7, 5, 3, 1, 9, 4, 8];

// console.log(arr.sort((a, b) => a - b))
// console.log(arr.sort((a, b) => b - a))





// const nume = ['Ion', 'Maria', 'Ana', 'Svetlana', 'Irina'];

// const numeSortateAZ = nume.slice().sort();

// const numeSortateZA = nume.slice().sort((a, b) => b.localeCompare(a));

// console.log('sortarea de la A la Z', numeSortateAZ);
// console.log('sortarea de la Z la A', numeSortateZA);




// const arr = [
//     {
//         nume: 'Ion',
//         age: '30'
//     },
//     {
//         nume: 'Ilie',
//         age: '68'
//     },
//     {
//         nume: 'Leo',
//         age: '5'
//     },
//    ]

// console.log(arr.sort((a, b) => {
//     return a.age - b.age
// }))

// console.log(arr.sort((a, b) => {
//     if(a.nume > b.nume) {
//         return 1
//     } else if (a.nume < b.nume) {
//         return -1
//     }
//     return 0
// }))






// const obj = {
//     name: 'Ion',
//     age: 30,
//     job: 'Programator',
//   };
  
//   for (const cheie in obj) {
//     if (obj.hasOwnProperty(cheie)) {
//       const valoare = obj[cheie];
//       console.log(valoare);
//     }
// }





// const array = [5, 10, 15, 20];

// for (const value of array) {
//     console.log(value);
// }





// const arr = [1, 2, 3, 4]

// for (let item of arr) {
//     console.log(item)
// }





// const obj = {
//     a: 'a',
//     b: 'b',
//     c: {
//         d: {
//             y: 'y'
//         }
//     }
// }

// const obj1 = {...obj}

// obj1.c.d.y = 'c'

// console.log('obj', JSON.stringify(obj))
// console.log('obj1', obj1)





// const obj = {
//     a: 'a',
//     b: 'b',
//     c: {
//         d: {
//             greet: () => console.log('hi'),
//             y: 'y'
//         }
//     }
// }

// const deepClone = (obj) => {
//     let clone = {...obj}
//     Object.keys(clone).forEach((key) => {
//         clone[key] = typeof clone[key] === 'object' ? deepClone(obj[key]) : obj[key]
//     })

//     return clone;
// }

// const obj1 = deepClone(obj)


// obj1.c.d.y = 'x'

// console.log('obj', obj)
// console.log('obj1', obj1)
// obj.c.d.greet()
// obj1.c.d.greet()


.