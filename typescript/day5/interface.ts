interface sampleObj{
    readonly color:string
}
let obj : sampleObj
obj  = {
    color:'red'
}
obj.color = 'blue';
interface sampleFn{
    ():any;
}
interface compInterface{
    cpu:string;
    monitor:{};
    input: {};
    detail;
}
interface audioCompInterface extends compInterface{
    audio:{};
}
interface compConstInterface{
    new (a:number,b:number,c:number):any;
}

class Computer implements compInterface{
    cpu = 1;
    public monitor;
    input;
    audio;
    constructor(cpudetails, monitordetails:number , inputdetails){
        this.input = inputdetails;
        this.cpu = cpudetails;
        this.monitor = monitordetails;
        
    }
    detail:sampleFn;
    test(){
        this.detail = []
    }
}
class Machine implements audioCompInterface{
    cpu;
    monitor;
    input;
    audio
}
function createInstance(cComp:compConstInterface,cpu,monitor,input){
    return new cComp(cpu,monitor,input);
}
let desktop = new Computer('',{},'')
console.log(desktop.input)
let laptop = createInstance(Computer,'',20,30)
console.log(laptop.monitor)
