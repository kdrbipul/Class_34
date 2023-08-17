// const student={
//     name: "Abdul Kader",
//     job: "web developer"
// }

// // console.log(student);


// const person = new Object();
// person.name = "Abdul Kader";
// // console.log(person);


// // const human = Object.create(null);
// // human.name ="Abdul Kader";
// // console.log("Abdul Kader");



// // const human = Object.create(student);
// // console.log(human.name);


class People {
    constructor(name, age){
        this.name=name;
        this.age =age;
    }
}

const people1 = new People("Abdul kader", 23);
const people2 = new People("Mst Mithila", 18);
console.log(people1 );
console.log(people2 );