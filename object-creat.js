const student={
    name: "Abdul Kader",
    job: "web developer"
}

// console.log(student);


const person = new Object();
person.name = "Abdul Kader";
// console.log(person);


// const human = Object.create(null);
// human.name ="Abdul Kader";
// console.log("Abdul Kader");



const human = Object.create(student);
console.log(human.name);