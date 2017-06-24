/*在私有作用域中定义私有变量、函数，也可以创建特权方法。
在声明构造函数时，既没有用函数表达式，也没有用var来声明。因为这样做会创建一个局部函数。这种方式在严格模式下会报错。*/
(function () {
  var privateVariable = 10;
  function privateFunction() {
    return false;
  }

  // 构造函数
  MyObject = function () {
  };

  // 公有/特权方法
  MyObject.prototype.publicMethod = function () {
    privateVariable++;
    return privateFunction();
  }
})();

// 这种声明方式的私有变量，是所有的实例共享的。当新建一个实例、修改一个实例的name时，所有的name值都会置为相同的值。
(function () {
  var name = '';
  Person = function (value) {
    name = value;
  };

  Person.prototype.getName = function () {
    return name;
  };

  Person.prototype.setName = function (value) {
    name = value;
  };
})();

var person1 = new Person('Mike');
console.log(person1.getName());
person1.setName('Grey');
console.log(person1.getName());

var person2 = new Person('Michael');
console.log(person1.getName());
console.log(person2.getName());
