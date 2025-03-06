class Student {
    #secret = "🥰"
    constructor (name,grid,marks){
        
        this.name = name;
        this.grid = grid;
        this.marks = marks;

    }
    getinfo(){
        console.log(`Name : ${this.name},grid : ${this.grid} , marks : ${this.marks} `);

    }
}
let s1 = new Student("honey" , 8174, [90,88,89]);

console.log(s1.marks);

