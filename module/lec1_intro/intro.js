console.log("Hello World!!1");
let a;
a=100;
if(true){
    a=200;
    console.log(a);

}
console.log(a);
let movies=["the winter wind","civil war",200,50,100];
console.log(movies[3]);
movies.pop();
movies.push("endgame");
console.log(movies);
movies.unshift("the first avenger");
console.log(movies);
movies.shift();
movies.splice(2,2);
console.log(movies);
console.log(movies[100]="find me");
console.log(movies.length);

let avenger={
    "full name":"Sakshi Chauhan",
    place:"Queens",
    skills:["Martial art","Taekwando",{
        BestFriends:[
            {
                name:"Bucky",skills:[]
            },
            {
            name: "natasha",skills:["fighting"]
            },
        ],
    },],
    movies: ["the first avengers"],
    age: 200,

};
console.log(avenger.skills[2]["BestFriends"][1].skills[0]);
