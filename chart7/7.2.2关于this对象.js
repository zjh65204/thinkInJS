var name = 'the window';

var obj = {
  name: 'my obj',
  getNameFunc: function () {
    return function () {
      return this.name;
    }
  }
};

// 由于内部函数的活动对象中也有this，所以不可能直接访问到外部函数中的this和arguments
console.log(obj.getNameFunc()());

var obj2 = {
  name: 'my obj',
  getNameFunc: function () {
    var that = this;
    return function () {
      return that.name;
    }
  }
};

console.log(obj2.getNameFunc()());
