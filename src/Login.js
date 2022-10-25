import Vue from 'vue'
// lib模式下，vue的主入口文件
import Lib from './Lib.vue'

Vue.config.productionTip = false

class Login {
  constructor(option, cb) {
    if (!Login.instance) {
      Login.renderDom(option, cb)
      Login.instance = this
    }
    return Login.instance
  }
  // 渲染vue
  static renderDom(option, cb) {
    // 先判断参数
    if (!option) {
      console.log('缺少参数')
      return
    }
    // 1.创建挂载节点
    const outer = document.createElement('div')
    outer.setAttribute('id', 'Login')
    console.log(outer)
    document.body.appendChild(outer)
    // 2.vue挂载
    new Vue({
      render: h => h(Lib)
    }).$mount('#Login')
    // 3.传入的参数绑定到全局，方便统一调用
    Vue.prototype.$keyA = option.keyA
    Vue.prototype.$keyB = option.keyB
    // 4.绑定成功的回调，完成弹框功能后，通知用户
    Vue.prototype.$successCb = cb
  }
  // 初始化
  static init(option, cb) {
    if (!this.instance) {
      this.instance = new Login(option, cb)
    }
    return this.instance
  }
  static test() {
    console.log(666666)
  }
}

export default Login