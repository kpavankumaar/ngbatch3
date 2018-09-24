var _this = this;
function run() {
    console.log('test');
}
run();
var run_1 = function (data) {
    var info = data * 2;
    console.log(_this);
    var obj = {
        runobjfn: function () { console.log(this); }
    };
    obj.runobjfn();
    return info;
};
console.log(run_1(10));
