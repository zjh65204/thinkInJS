function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(3));

// 在这里，指向上方定义的function的变量只有一个，anotherFactorial仍然是一个函数，而factorial被置为空，导致函数报错
var anotherFactorial = factorial;
factorial = null;
// console.log(anotherFactorial(5));

function factorial1(num) {
  if (num <= 1) {
    return 1;
  } else {
    // arguments.callee指向了正在执行函数的指针，在严格模式下不能访问它
    return num * arguments.callee(num - 1);
  }
}

// 稳妥写法。这样写即使把factorial2置为null，内部函数f依然有效
var factorial2 = (function f(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * f(num - 1);
  }
});
