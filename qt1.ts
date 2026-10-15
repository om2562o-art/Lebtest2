class Student{
    name: string;
    age: number;
    constructor(name: string,age: number){
        this.name = name;
        this.age = age;

    }
    displayInfo(): void {
        console.log(`ชื่อ: ${this.name}`);
        console.log(`อายุ: ${this.age}`);
    }
}
let student1 = new Student("สมชาย",20);
student1.displayInfo();