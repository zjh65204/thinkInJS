// js中没有块级作用域，在块语句中定义的变量，实际上是在函数的作用域里。
function outputNumbers(count) {
  for (var i = 0; i < count; i++) {
    console.log(i);
  }
  console.log('循环外' + i);
}

// outputNumbers(3);

// js不警告多次声明同一个变量，它只会忽视后续声明
function outputNumbers1(count) {
  for (var i = 0; i < count; i++) {
    console.log(i);
  }

  var i;
  console.log('循环外' + i);
}

// outputNumbers1(3);

/*函数声明：js把function关键字当做函数声明的开始，函数声明后不能接圆括号。
圆括号包裹函数声明，可以将函数声明转化为表达式。*/
(function () {
  // 这里是块级作用域
})()

