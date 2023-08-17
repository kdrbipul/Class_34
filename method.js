const student = {
    name:"Showria Sir",
    isRich:true,
    money:1000,
    subject: [
        'English',
        'Bangla',
        'DSA',
    ],
    bestFriend:{
        name:"Shodeb Das",
        major:"Science",
    },
    takeExam: function(){
        console.log(this);
        console.log(this.name, "Taking Exam");
    },
    giveTreat:function(expense, tips){
        this.money=this.money - expense;
        return this.money;
    }
}

student.takeExam();