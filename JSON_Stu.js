//Define 10 student JSON
//store it in an Array
//find the female students
//find the students who are following IT course
//find the max and average GPA among them
let students=[
{id:1,name:"Amala",gender:"Female",course:"IT",gpa:3.8},
{id:2,name:"Bobby",gender:"Male",course:"Engineering",gpa:3.5},
{id:3,name:"Ciara",gender:"Female",course:"Business",gpa:3.2},
{id:4,name:"Dane",gender:"Male",course:"IT",gpa:3.9},
{id:5,name:"Eva",gender:"Female",course:"IT",gpa:3.6},
{id:6,name:"Fred",gender:"Male",course:"Medicine",gpa:3.7},
{id:7,name:"Grace",gender:"Female",course:"IT",gpa:3.9},
{id:8,name:"Henry",gender:"Male",course:"Law",gpa:3.1},
{id:9,name:"Iida",gender:"Female",course:"Engineering",gpa:3.4},
{id:10,name:"Jackie",gender:"Male",course:"IT",gpa:3.2}
]

console.log("Find female students:")
let femaleStudents = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].gender === "Female") {
    femaleStudents.push(students[i]);
  }
}
console.log("Female Students:", femaleStudents);

console.log("Find students following IT course:")
let itStudents = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].course === "IT") {
    itStudents.push(students[i]);
  }
}
console.log("IT Students:", itStudents);

console.log("Find students Total Gpa and Average")
let maxGPA = 0;
let totalGPA = 0;
for (let i = 0; i < itStudents.length; i++) {
  if (itStudents[i].gpa > maxGPA) {
    maxGPA = itStudents[i].gpa;
  }
  totalGPA += itStudents[i].gpa;
}
let averageGPA = totalGPA / itStudents.length;


console.log("Max GPA among IT Students:", maxGPA);
console.log("Average GPA among IT Students:", averageGPA);