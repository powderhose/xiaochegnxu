// button.js
var type = ['default', 'primary', 'warn'];
var pageObject = {
  data: {
    defaultSize:'default',
    primarySize: 'default',
    warnSize:'default',
    disabled: false,
    plain: false,
    loading: false
  },
  setDisabled: function (e){
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function (e){
    this.setData({
      plain: !this.data.plain
    });
  },
  setLoading: function(e){
    this.setData({
      loading: !this.data.loading
    })
  }
}

for(var i = 0; i < type.lenght; ++i){
  (function(type){
    pageObject[type] = function(e){
      var key = type + 'size'
      var changeData = {};
      changeData[key] === 'default' ? 'mini' : 'default'
    }
  })(types[i])
}

Page(pageObject);