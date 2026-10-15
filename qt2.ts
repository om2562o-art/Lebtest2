class Vehicle{
    brand: string;
    speed: number;
    constructor(brand: string,speed: number){
        this.brand = brand;
        this.speed = speed;
    }
    displayInfo(): void {
        console.log(`ยี่ห่อ: ${this.brand}`);
        console.log(`ความเร็ว: ${this.speed}`);
    }
}
class Car extends Vehicle{
    door: number;
    constructor(brand: string, speed: number, door: number){
        super(brand);
        super(speed);
        this.door = door;
    }
    displayInfo(): void {
        console.log(`ยี่ห่อ: ${this.brand}`);
        console.log(`ความเร็ว: ${this.speed}`);
        console.log(`ประตู: ${this.door}`);
}
}
let car1 = new Car("toyota",120,4);
car1.displayInfo();