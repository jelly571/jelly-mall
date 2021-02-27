import Toast from "./Toast";

const obj = {}

obj.install = function(Vue) {

  //1. 创建组件构造器
  const toastContrustor = Vue.extend(Toast);

  //2.new的方式，根据组件构造器，创建组件对象
  const toast = new toastContrustor();

  //3.将组建对象手动挂载到创建的dom div上
  toast.$mount(document.createElement('div'));

  //4.toast.$el对应的就是div,加到body
 
  document.body.appendChild(toast.$el);
  
  //给vue原型添加toast方法
  Vue.prototype.$toast = toast
}

export default obj