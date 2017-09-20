var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

var users = {
 'Students': [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

function studentsNames(students) {
    var fullName;
    for (var i = 0; i < students.length; i++) {
        fullName = students[i].first_name + " " + students[i].last_name;
        console.log(fullName);
    }
}
studentsNames(students);

console.log("==============================================================");

function numberOfCharacters(users) {
    var studentsFullName;
    var instructorsFullName;
    var characters;
    console.log("Students");
    for (var i = 0; i < users.Students.length; i++) {
        studentsFullName = users.Students[i].first_name + " " + users.Students[i].last_name;
        characters = studentsFullName.length - 1;
        console.log(i + 1 + " - " + studentsFullName.toUpperCase() + " - " + characters);

    }
    console.log("Instructors");
    for (var i = 0; i < users.Instructors.length; i++) {
        instructorsFullName = users.Instructors[i].first_name + " " + users.Instructors[i].last_name;
        characters = instructorsFullName.length - 1;
        console.log(i + 1 + " - " + instructorsFullName.toUpperCase() + " - " + characters);

    }
}
numberOfCharacters(users);
