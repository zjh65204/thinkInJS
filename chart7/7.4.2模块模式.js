/*单例：只有一个实例的对象。
模块模式：为单例创建私有变量和特权方法。*/
var singleton = function () {
  // 私有变量和函数
  var privateVariable = 10;
  function privateFunction() {
    return false;
  }

  // 特权/公有方法和属性
  return {

    publicProperty: true,

    publicMethod: function () {
      privateVariable++;
      return privateFunction();
    }
  }
};

// 如果必须创建一个对象，并以某些数据对其进行初始化，同时还要公开一些能够访问私有变量的方法，那么就可以使用模块模式。
var application = function () {

  // 私有变量和函数
  var components = new Array();

  // 初始化
  components.push(new BaseComponent());

  // 公共
  return {
    getComponentCount: function () {
      return components.length;
    },

    registerComponent: function (component) {
      if (typeof component == 'object') {
        components.push(component);
      }
    }
  };
}();