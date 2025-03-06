// 2. Constructor Overriding
// Question:
// Create a class Vehicle that accepts brand, model, and year in the constructor. Create a subclass Car that inherits from Vehicle and adds an additional property fuelType. Override the describe() method in Car to include the fuel type in the description.
class Vehicle {
    constructor(Brand, model, year){
        this.Brand = Brand;
        this.model = model;
        this.year = year;
    }
}
class Car extends Vehicle{
    constructor(Brand, model, year, fuletype){
        super(Brand, model, year, fuletype);
        this.fuletype = fuletype;
    }
    describe(){
        console.log(`Brand: ${this.Brand}, model:${this.model}, year:${this.year}, fuletype:${this.fuletype}`)
    }
}
let v1 = new Car("BMW", "doe" ,8796 , "disel");
v1.describe();