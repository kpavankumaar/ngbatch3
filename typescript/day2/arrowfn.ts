function run(){
    console.log('test');
}
run();
var run_1 = (data) => {
   var info =  data*2;
   console.log(this);
   var obj = {
       runobjfn : ()=>{console.log(this)}
   }
   obj.runobjfn();
   return info
};

console.log(run_1(10));