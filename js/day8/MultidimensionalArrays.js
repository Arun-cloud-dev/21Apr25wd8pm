// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// console.log(matrix[1][2]);



// let cube = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];

// 0,1,1

// 1,0, 0 //5


// let students = [
//     ["Alice", 85, 90],
//     ["Bob", 78, 82],
//     ["Charlie", 92, 88]
//   ];
  
// //   // Access Bob's second subject mark
// //   console.log(students[1][2]); // 82
  



//   for (let i = 0; i < students.length; i++) {
//     for (let j = 0; j < students[i].length; j++) {
//       console.log(students[i][j]);
//     }
//   }


let company = [
  [
    // Dept 1
    ["John", "Developer"],
    ["Jane", "Designer"],
  ],
  [
    // Dept 2
    ["Mark", "Manager"],
    ["Mary", "HR"],
  ],
];


// for (let i = 0; i < company.length; i++) {
//   for (let j = 0; j < company[i].length; j++) {
//     for (let k = 0; k < company[i][j].length; k++) {
//       console.log(company[i][j][k]);
//     }
//   }
// }



company.forEach(function (department) {
    department.forEach(function (employee) {
        employee.forEach(function (detail) {
            console.log(detail);
        })
    })
});