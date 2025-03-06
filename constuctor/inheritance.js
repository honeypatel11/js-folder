class Animal {
    constructor (name, color){
        this.name = name;
        this.color = color;
    }
    eat(){
        console.log("eating(●'◡'●)")
    }
}
class Dog extends Animal{
    constructor(name,color){
        super(name,color);
    }
    getdetails(){
        console.log(`Name : ${this.name} , color : ${this.color}}`);
    }
    eat(){
        super.eat();
        console.log("eating....");
    }
}
let d1 = new Dog("kalu", "black");
d1.getdetails();
d1.eat();

