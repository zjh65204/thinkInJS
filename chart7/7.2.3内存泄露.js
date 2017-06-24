/*在IE9之前的版本中，闭包会导致一些问题。
如果闭包作用域链中保存这一个HTML元素，那么意味着该元素将无法被销毁。*/
function assignHandler() {
  var ele = document.getElementById('someElement');
  ele.onclick = function () {
    alert(ele.id);
  };
}

// 闭包引用的是函数的整个活动对象，活动对象中包含着元素变量，必须将其置为空，来释放内存。
function assignHandler1() {
  var ele = document.getElementById('someElement');
  var id = ele.id;

  ele.onclick = function () {
    alert(id);
  };

  ele = null;
}