const express = require ('express')
const app=express();
const port=3001;
const students = require('./DB/studentdb');

//print student details
app.get('/stu',(req,res)=>{
    res.send(students)
});

//print the particular student details by regNo
app.get('/stu/:id',(req,res)=>{
    const id=req.params.id
  //  console.log(id)
    const result = students.find(student=>student.regNo == id);
    res.send(result);
});

//print the particular student details by course
app.get('/stu/course/:cou',(req,res)=>{
    const cou=req.params.cou
  //  console.log(id)
    const result = students.filter(student=>student.course== cou);
    res.send(result);
});


//print the particular student details by name
app.get('/stu/name:nam',(req,res)=>{
    const nam=req.params.nam
  //  console.log(id)
    const result = students.filter(student=>student.name == nam);
    res.send(result);
});


//print the particular student details by age
app.get('/stu/age:ag',(req,res)=>{
    const ag=req.params.ag
  //  console.log(id)
    const result = students.filter(student=>student.age == ag);
    res.send(result);
});

//print
app.get('/',(req,res)=>{
    res.send('Hello Express JS')
});

//print message
app.get('/msg',(req,res)=>{
    res.send('Hello IT students')
});



//check student is available or not,if not return an error message
app.get('/stu/:id',(req,res)=>{
    const id=req.params.id
    const result = students.find(student=>student.regNo == id);

if (result)
{
    res.send(result)
}
else
{
    res.status(404).send("Student not found");
}
});

app.get('/stu/name/:namePart', (req, res) => {
    const namePart = req.params.namePart.toLowerCase();
    const results = students.filter(student => 
        student.name.toLowerCase().includes(namePart)
    );

    if (results.length > 0) {
        res.send(results);
    } else {
        res.status(404).send("No students found with the given name characters.");
    }
});

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});