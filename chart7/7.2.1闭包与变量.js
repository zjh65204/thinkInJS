function createFunctions() {
  var result = new Array();

  for (var i = 0; i < 10; i++) {
    result[i] = function () {
      return i;
    };
  }

  return result;
}

// 闭包只能取得父函数中所有变量在父函数结束时候的值，所以下面的所有函数都会返回10
var funs = createFunctions();
console.log(funs[0]());
console.log(funs[8]());

function createFunctions2() {
  var result = new Array();

  for (var i = 0; i < 10; i++) {
    result[i] = function (num) {
      return function () {
        return num;
      }
    }(i);
  }

  return result;
}

var funs2 = createFunctions2();
console.log(funs2[0]());
console.log(funs2[8]());