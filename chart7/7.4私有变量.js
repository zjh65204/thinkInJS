// 私有变量包括函数的参数、局部变量和函数内部定义的其他函数。
function add(num1, num2) {
	var sum = num1 + num2;
	return sum;
}

/*利用闭包，可以创建用于访问私有变量的公有方法。
特权方法：有权访问私有变量、私有函数的公有方法。*/

// 1.在构造函数中定义特权方法
function MyObject() {
  var privateVariable = 10;
  function privateFunction() {
    return false;
  }

  // 特权方法
  this.publicMethod = function () {
    privateVariable++;
    return privateFunction();
  }
}

// 利用私有和特权成员，可以隐藏不该被直接修改的数据。
function Person(name) {
  this.getName = function () {
    return name;
  };
  this.setName = function (value) {
    name = value;
  }
}