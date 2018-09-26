// number , string, arrays, objects, functions
function sum(num1:number,num2:number){
    console.log(num1 + num2 );
}
sum(10,8);

let num:number;
num = function(){}
let name_1 : string;
name_1 = []

let arr: Array<number>;
arr = [10,290,30,4]
let arr_1: Array<string>;
arr_1 = ['10','ravi']
let arr_2 : Array<number | string >
arr_2 = [10,'srikanth']
let arr_3 : Array<Array<number>>
arr_3 = [[10,20],[10,'']];
let arr_4 : Array<{}>
arr_4 = [{},{},[],2];

let arr_5 : Array<Function>;
arr_5 = [function(){},()=>{}]

interface defineObj{
    color:string;
    backgroundColor?:string;
    [index:string]:any
}
let obj1 : defineObj;
obj1 = {
    color:'red',
   
}
obj1.backgroundColor = 'green';
obj1.shades = ''

interface sampleFn{
    (num1:number,num2:string):any;
}

let testFn : sampleFn;
testFn = function(a,b){
    
}
testFn(10,'test');










