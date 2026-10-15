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
}