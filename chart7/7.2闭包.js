/*闭包：有权访问另一个函数作用域中的变量的函数
闭包会在自己的作用域链中，包含父函数的变量对象。父函数执行完毕后，虽然作用域链被清空，但是变量对象仍然保存在内存中。
可以通过将父函数置为null以释放内存。*/
function createComparisonFunction(propertyName) {
  return function (obj1, obj2) {
    var v1 = obj1[propertyName];
    var v2 = obj2[propertyName];

    if (v1 < v2) {
      return -1;
    } else if (v1 > v2) {
      return 1;
    } else {
      return 0;
    }
  }
}