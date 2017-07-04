//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../view/view'
    })
  },
  scrollView: function (){
    wx.navigateTo({
      url: '../sv/sv',
    })
  },
  swiper: function (){
    wx.navigateTo({
      url: '../swiper/swiper',
    })
  },
  movable: function (){
    wx.navigateTo({
      url: '../movable/movable',
    })
  },
  icon: function (){
    wx.navigateTo({
      url: '../icon/icon',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  text: function (){
    wx.navigateTo({
      url: '../text/text',
    })
  },
  progress: function (){
    wx.navigateTo({
      url: '../progress/progress',
    })
  },
  button: function (){
    wx.navigateTo({
      url: '../button/button',
    })
  },
  checkbox: function () {
    wx.navigateTo({
      url: '../checkbox/checkbox',
    })
  },
  form: function () {
    wx.navigateTo({
      url: '../form/form',
    })
  },
  input: function (){
    wx.navigateTo({
      url: '../input/input',
    })
  },
  label: function (){
    wx.navigateTo({
      url: '../label/label',
    })
  },
  picker: function () {
    wx.navigateTo({
      url: '../picker/picker',
    })
  },
  pickerView: function(){
    wx,wx.navigateTo({
      url: '../picker-view/picker-view',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  radio: function (){
    wx.navigateTo({
      url: '../radio/radio',
    })
  },
  slider: function(){
    wx.navigateTo({
      url: '../slider/slider',
    })
  },
  Switch: function(){
    wx.navigateTo({
      url: '../switch/switch',
    })
  },
  textarea: function(){
    wx.navigateTo({
      url: '../textarea/textarea',
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
