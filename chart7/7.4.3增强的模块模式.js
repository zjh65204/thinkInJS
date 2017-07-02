var singleton = function () {

  // 私有变量和私有函数
  var privateVariable = 10;

  function privateFunction() {
    return false;
  }

  // 创建对象
  var obj = new CustomType();

  // 添加特权/公有属性和方法
  obj.publicProperty = true;

  obj.publicMethod = function () {
    privateVariable++;
    return privateFunction();
  };

  // 返回这个对象
  return obj;
}();

var application = function () {
  var components = new Array();
  components.push(new BaseComponent());

  var app = new BaseComponent();

  app.getComponentCount = function () {
    return components.length;
  };

  app.registerComponent = function (component) {
    if (typeof component == 'object') {
      components.push(component);
    }
  };

  return app;
}();
