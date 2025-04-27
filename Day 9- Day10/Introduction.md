## 🍃 MongoDB Hands-On

 DB Creation | Collections |  CRUD |  Queries

## Key Terms.

Database → Holds collections

Collection → Like a table (stores documents)

Document → BSON-style object

🄚 _id →  Auto-generated, unique identifier

## 🏗️ Create a Database & Collection Using Compass

Create Database -> Database Name -> Collection Name -> Create Database

!['1.createDB.png'](./Images/1.createDB.png)

## ✍️ Insert Documents Using Compass

Insert Document -> insert keys and values. 

!['2.insert.png'](./Images/2.insert.png)

Use format button to make the document permitted.

!['4.format.png'](./Images/4.format.png)

Inserted Document

!['5.png'](./Images/5.png)

## ✍️ Edit Documents Using Compass

Edit -> Make changes -> Update

!['5.update.png'](./Images/5.update.png)

## ✍️ Insert Documents Using MongoDB Shell

Change database and display available databases and collections.

!['6.shellCommands.png'](./Images/6.shellCommands.png)

Enter one document - insertOne()

~~~
  db.students.insertOne({
  "regno": "2021IT006",
  "name": "Nova",
  "age": 24,
  "gender": "Male",
  "degree": "IT",
  "skills": [
    "JS",
    "MongoDb",
    "Nodejs"
  ]
})
~~~

!['7.insertOne.png'](./Images/7.insertOne.png)

Inserted Documents.

!['8.png'](./Images/9.png)

Enter multiple documents - insertMany()

~~~
  db.students.insertMany(
[
{
  "regno": "2021IT007",
  "name": "Kevin",
  "age": 25,
  "gender": "Male",
  "degree": "IT",
  "skills": [
    "JS",
    "MongoDb",
    "MySQL"
  ]
},
{
  "regno": "2021IT008",
  "name": "Kate",
  "age": 24,
  "gender": "Female",
  "degree": "IT",
  "skills": [
    "JS",
    "MongoDb",
    "Nodejs"
  ]
}
]
)

~~~

Shell response.
~~~
  {
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('680a513770bc7e6dddbd41d4'),
    '1': ObjectId('680a513770bc7e6dddbd41d5')
  }
}
~~~

Inserted Documents.

!['9.png'](./Images/9.png)

## 🛠️ Update Documents Using MongoDB Shell

Update one document - updateOne()

!['10.updateOne.png'](./Images/10.updateOne.png)

Updated Documents.

!['10.png'](./Images/10.png)

Update document - updateMany()

!['11.updateMany.png'](./Images/11.updateMany.png)

Updated Documents.

!['11.png'](./Images/11.png)


## 🧹 Delete Documents Using MongoDB Shell
~~~
 db.students.deleteOne({ regno: "2021IT006" })

 db.students.deleteMany({ degree: "IT" })
~~~
## 🧠 Query Operators
 * find() 
 * project
 * sort
 * $gt -> greater than
 * $lt -> less than
 * $eq -> equal
 * $ne -> not equal
 * $in -> matches any in array
 * $nin -> doesn't matches any in array

## 🔍 Find Data Using Compass

!['12.find.png'](./Images/12.find.png)

## 🔍 Find Data Using MongoDB Shell
```
db.students.find({"gender":"Female"})
```

Shell response.
```
{
  _id: ObjectId('680a45ccbbeaa62de141d812'),
  regno: '2021IT002',
  name: 'Jane',
  age: 23,
  gender: 'Female',
  degree: 'CS',
  skills: [
    'Mysql',
    'JS',
    'Nodejs'
  ]
}
{
  _id: ObjectId('680a4605bbeaa62de141d813'),
  regno: '2021IT003',
  name: 'Ken',
  age: 21,
  gender: 'Female',
  degree: 'CS',
  skills: [
    'Mysql',
    'JS',
    'Nodejs',
    'Java'
  ]
}
{
  _id: ObjectId('680a463abbeaa62de141d814'),
  regno: '2021IT004',
  name: 'Anne',
  age: 24,
  gender: 'Female',
  degree: 'IT',
  skills: [
    'MongoDb',
    'JS',
    'Nodejs'
  ]
}
{
  _id: ObjectId('680a4679bbeaa62de141d815'),
  regno: '2021IT005',
  name: 'Heily',
  age: 23,
  gender: 'Female',
  degree: 'IT',
  skills: [
    'MongoDb',
    'JS',
    'Java',
    'Nodejs'
  ]
}
{
  _id: ObjectId('680a513770bc7e6dddbd41d5'),
  regno: '2021IT008',
  name: 'Kate',
  age: 24,
  gender: 'Female',
  degree: 'IT',
  skills: [
    'JS',
    'MongoDb',
    'Nodejs'
  ]
}
```

Find the first result.
```
db.students.findOne({"gender":"Female"})
```

Shell response
```
{
  _id: ObjectId('680a45ccbbeaa62de141d812'),
  regno: '2021IT002',
  name: 'Jane',
  age: 23,
  gender: 'Female',
  degree: 'CS',
  skills: [
    'Mysql',
    'JS',
    'Nodejs'
  ]
}
```

## 💡 Projecting Data Using Compass

!['12.selectedField.png'](./Images/12.selectedField.png)

## 🔃 Sorting Data Using Compass

!['13.sort.png'](./Images/13.sort.png)

## 🔃 Sorting Data Using MongoDB Shell

```
db.students.find({"degree":"IT","gender":"Male"}).sort({"age":1})

```

Shell response.

```
{
  _id: ObjectId('680a4f7a70bc7e6dddbd41d3'),
  regno: '2021IT006',
  name: 'Nova',
  age: 24,
  gender: 'Male',
  degree: 'IT',
  skills: [
    'JS',
    'MongoDb',
    'Nodejs'
  ]
}
{
  _id: ObjectId('680a15b32064950d6983323b'),
  regno: '2021IT001',
  name: 'Kolins',
  age: 25,
  degree: 'IT',
  skills: [
    'MongoDb',
    'JS',
    'Nodejs'
  ],
  gender: 'Male'
}
{
  _id: ObjectId('680a15b32064950d6983323b'),
  regno: '2021IT001',
  name: 'Kolins',
  age: 25,
  degree: 'IT',
  skills: [
    'MongoDb',
    'JS',
    'Nodejs'
  ],
  gender: 'Male'
}
```

## 🔼 Greater Than -> $gt

Compass.

!['14.gt.png'](./Images/14.gt.png)

MongoDB Shell.
```
db.students.find({ "age": { "$gt": 24 } })
```

Shell response.
```
{
  _id: ObjectId('680a15b32064950d6983323b'),
  regno: '2021IT001',
  name: 'Kolins',
  age: 25,
  degree: 'IT',
  skills: [
    'MongoDb',
    'JS',
    'Nodejs'
  ],
  gender: 'Male'
}
{
  _id: ObjectId('680a513770bc7e6dddbd41d4'),
  regno: '2021IT007',
  name: 'Kevin',
  age: 25,
  gender: 'Male',
  degree: 'IT',
  skills: [
    'JS',
    'MongoDb',
    'MySQL'
  ]
}
```

## 🔽 Less Than -> $lt

Compass.

!['15.lt.png'](./Images/15.lt.png)

MongoDB Shell.
```
db.students.find({ "age": { "$lt": 22 } })
```

Shell response.
```
{
  _id: ObjectId('680a4605bbeaa62de141d813'),
  regno: '2021IT003',
  name: 'Ken',
  age: 21,
  gender: 'Female',
  degree: 'CS',
  skills: [
    'Mysql',
    'JS',
    'Nodejs',
    'Java'
  ]
}
```


## 🟰 Equal -> $eq

Compass.

!['16.eq.png'](./Images/16.eq.png)

MongoDB Shell.
```
db.students.find({ "age": { "$eq": 21 } })
```

Shell response.
```
{
  _id: ObjectId('680a4605bbeaa62de141d813'),
  regno: '2021IT003',
  name: 'Ken',
  age: 21,
  gender: 'Female',
  degree: 'CS',
  skills: [
    'Mysql',
    'JS',
    'Nodejs',
    'Java'
  ]
}
```

## ❌ Not Equal -> $ne

Compass.

!['17.ne.png'](./Images/17.ne.png)

MongoDB Shell.
```
db.students.find({ "age": { "$ne": 24 } })
```

Shell response.
```
{
  _id: ObjectId('680a15b32064950d6983323b'),
  regno: '2021IT001',
  name: 'Kolins',
  age: 25,
  degree: 'IT',
  skills: [
    'MongoDb',
    'JS',
    'Nodejs'
  ],
  gender: 'Male'
}
{
  _id: ObjectId('680a45ccbbeaa62de141d812'),
  regno: '2021IT002',
  name: 'Jane',
  age: 23,
  gender: 'Female',
  degree: 'CS',
  skills: [
    'Mysql',
    'JS',
    'Nodejs'
  ]
}
{
  _id: ObjectId('680a4605bbeaa62de141d813'),
  regno: '2021IT003',
  name: 'Ken',
  age: 21,
  gender: 'Female',
  degree: 'CS',
  skills: [
    'Mysql',
    'JS',
    'Nodejs',
    'Java'
  ]
}
{
  _id: ObjectId('680a4679bbeaa62de141d815'),
  regno: '2021IT005',
  name: 'Heily',
  age: 23,
  gender: 'Female',
  degree: 'IT',
  skills: [
    'MongoDb',
    'JS',
    'Java',
    'Nodejs'
  ]
}
{
  _id: ObjectId('680a513770bc7e6dddbd41d4'),
  regno: '2021IT007',
  name: 'Kevin',
  age: 25,
  gender: 'Male',
  degree: 'IT',
  skills: [
    'JS',
    'MongoDb',
    'MySQL'
  ]
}
```

## 📥 Matches any in array -> $in

Compass.

!['18.in.png'](./Images/18.in.png)

MongoDB Shell.
```
db.students.find({ "skills": { "$in": ["Java"] } })
```

Shell response
```
{
  _id: ObjectId('680a4605bbeaa62de141d813'),
  regno: '2021IT003',
  name: 'Ken',
  age: 21,
  gender: 'Female',
  degree: 'CS',
  skills: [
    'Mysql',
    'JS',
    'Nodejs',
    'Java'
  ]
}
{
  _id: ObjectId('680a4679bbeaa62de141d815'),
  regno: '2021IT005',
  name: 'Heily',
  age: 23,
  gender: 'Female',
  degree: 'IT',
  skills: [
    'MongoDb',
    'JS',
    'Java',
    'Nodejs'
  ]
}
```

## 🚫📥 Doesn't matches any in array -> $nin

Compass.

!['19.nin.png'](./Images/19.nin.png)

MongoDB Shell.
```
db.students.find({ "skills": { "$nin": ["MongoDb"] } })
```

Shell response
```
{
  _id: ObjectId('680a45ccbbeaa62de141d812'),
  regno: '2021IT002',
  name: 'Jane',
  age: 23,
  gender: 'Female',
  degree: 'CS',
  skills: [
    'Mysql',
    'JS',
    'Nodejs'
  ]
}
{
  _id: ObjectId('680a45ccbbeaa62de141d812'),
  regno: '2021IT002',
  name: 'Jane',
  age: 23,
  gender: 'Female',
  degree: 'CS',
  skills: [
    'Mysql',
    'JS',
    'Nodejs'
  ]
}
```











