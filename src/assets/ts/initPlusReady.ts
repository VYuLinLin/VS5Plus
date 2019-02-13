/* eslint-disable */
import Vue from 'vue'

var onPlusReady = (callback, context = this) => {
  let plus : any
  plus = window
  if (plus.plus) {
    callback.call(context)
  } else {
    document.addEventListener('plusready', callback.bind(context))
  }
}
Vue.mixin({
  beforeCreate () {
    onPlusReady(() => {
      let _this : any
      _this = this
      _this.plusReady = true
    }, this)
  },
  methods: {
    onPlusReady: onPlusReady
  }
})
