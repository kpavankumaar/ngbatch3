function run (){
    console.log('test');
}
for(let i = 0; i<10 ; i++ ){
    setTimeout(function(){
        console.log(i)
    },2000);
    
}

var name1 = 'srikanth';
name1 = 'pavan';
const name2 = 'lakshmi';
let name3:string = 'ramesh';
name3 = 10;
function multiply(num1:number,num2:number){
    console.log(num1 * num2);
}
multiply(10,'run');
const obj = {
    name: 'ravi'
}

obj.name = 'pavan';
obj.phoneNumber = 10;

let arr = ['ravi','srikanth'];