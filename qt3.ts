class Fitnessmember{
    public membername: string;
    private point: number;
    constructor(membername: string,point: number){
        this.membername = membername;
        this.point = point;
    }
    getpoint(): number{
        return this.point;
    }
    setpoint(point:number): void {
        this.point = point;
    }
    addpoint(amount: number): void {
        this.point += amount;
    }
    usepoint(amount: number): void {

    }
    displayInfo(): void {
        console.log(`สมาชิก: ${this.membername}`);
        console.log(`คะแนนสะสม: ${this.point}`);
        console.log(`เพิ่มคะแนน: ${this.addpoint}`);
        console.log(`ใช้คะแนน: ${this.usepoint}`);
    }
}
let member1 = new Fitnessmember("อนันต์",500);
