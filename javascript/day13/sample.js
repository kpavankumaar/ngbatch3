(function(win){
	console.log('test');
	console.log(win);

	var obj = {}
	function multiply(a,b){
		console.log(this);
		this.num1 = a;
		this.num2 = b;
		console.log(a*b)
	}
	multiply.value = 10;
	console.log(multiply.value);
	var multipleOf10 = multiply.bind(obj,10);
	multipleOf10(8)
	win.a = obj;
})(window)
