// const smallShirts = runners.reduce( function(accumulator, currentValue) {
//     if (currentValue.shirt_size == 'S') {
//         return accumulator + currentValue.shirt_size;
//     } else {
//         return accumulator;
//     }
//   }, 0);

// console.log(smallShirts.length);

// const myArray = [1,2,3,4];

// const myArrayTimesTwo = myArray.map((value, index, array) => {
// 	return value * 2;
// });

// console.log(myArray);
// console.log(myArrayTimesTwo);

// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
//   cb(item, list);
// }

// contains('Gum', items, function(a, b) {
//   const lookUp = b.filter( function(currentValue){
//     console.log( currentValue == a);
//   });
// });

const pets = [
  {
    'name': 'Tinkerbell',
    'species': 'cat',
    'age': 2
  },
  {
    'name': 'Lucy',
    'species': 'dog',
    'age': 12
  },
  {
    'name': 'Chloe',
    'species': 'cat',
    'age': 18
  },
  {
    'name': 'Mojo',
    'species': 'dog',
    'age': 6
  },
  {
    'name': 'Olivia',
    'species': 'parakeet',
    'age': 4
  },
  {
    'name': 'Shadow',
    'species': 'cat',
    'age': 8
  },
  {
    'name': 'Oreo',
    'species': 'cat',
    'age': 5
  },
  {
    'name': 'Molly',
    'species': 'dog',
    'age': 4
  },
  {
    'name': 'Freddie Prinze Jr.',
    'species': 'parakeet',
    'age': 9
  }
];

var names = pets.map(x => x.name + ` is ${x.age} years old`)
console.log(names)

// function sumPetYears(arr, kind, multiply) {
//   // Your code goes here
//   const freshArray = pets.map((value, index, fx) => {
//     return value;
//     });
//   const newArray = freshArray.filter((value, index, fx1) => {
//     return value.species == kind;
//     });
//     console.log(newArray);
//   const mappedArray = newArray.map((value, index, fx2) => {
//     return value.age * multiply;
//     });
//     console.log(mappedArray);
//   const summedAges = mappedArray.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// });
//   console.log(summedAges);
// }

// // console.log(pets);
// console.log(sumPetYears(pets, 'dog', 7));
// console.log(sumPetYears(pets, 'cat', 4));
// console.log(sumPetYears(pets, 'parakeet', 5));
