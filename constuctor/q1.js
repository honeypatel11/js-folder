// Question:
// Create a class Person with the following properties: firstName, lastName, and age. Add a method greet() that returns a greeting message using the person's full name. Then, create a subclass Employee that inherits from Person and adds an additional property jobTitle. Override the greet() method in the Employee class to include the job title in the greeting message.

class Person{
    constructor(firstName, LastName, Age){
        this.firstName = firstName;
        this.LastName = LastName;
        this.Age = Age;
    }
    greet(){
        console.log("greetingggg.....")
    }
    
}
class Employee extends Person {
    constructor(firstName, LastName, Age,jobTitle){
        super(firstName, LastName, Age);
        this.jobTitle = jobTitle;
    }
    greet(){
        console.log(`firstName : ${this.firstName}, lastname: ${this.LastName}, Age: ${this.Age}, Jobtitle: ${this.jobTitle}`)
    }

} 
let p1 = new Employee("Shreya", "Anjan",88, "teacher");
p1.greet();