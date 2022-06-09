// Array of object
let arr = [20, 'dila', 'javascript']
let students = [{
        name: 'jessica',
        age: 17,
        isVerivied: true
    },
    {
        name: 'William',
        age: 18,
        isVerivied: true
    },
    {
        name: 'Chika',
        age: 17,
        isVerivied: false
    },
]
for (const i in students) {
    let studentData = students[i]
    let isVerivied = studentData.isVerivied

    if (isVerivied === true) {
        console.log(studentData);
    }
}

// Latihan
let dataAge = [20, 17, 18]
let dataStudent = [{
        name: 'jessica',
        isVerivied: true,
        age: 20
    },
    {
        name: 'William',
        isVerivied: true
    },
    {
        name: 'Chika',
        isVerivied: false
    },
]

let result = []
for (const key in dataStudent) {
    let allStudent = dataStudent[key]
    allStudent.age = dataAge[key] //0 dataAge[2]
    result.push(allStudent)
}
console.log(result);

/* Output
[{
    name: 'jessica',
    isVerivied: true,
    age: 20
},
{
    name: 'William',
    isVerivied: true,
    age: 17
},
{
    name: 'Chika',
    isVerivied: false,
    age: 18
},
]

*/