Component({
  properties: {
    multiline: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: ''
    },
    maxlength: {
      type: Number,
      value: 10
    },
    value:{
      type: String,
      value:''
    }
  },

  data: {
    modalBottom: '',
    modalHeight: '',
    text: '',
    shadowAnimation: 'shadowDisplay',
    modalAnimation: 'modalDisplay',
    shadowOpacity: '0.65',
    modalOpacity: '1',
    showModal:true,
    initValue:''
  },

  attached: function () {
    var res = wx.getSystemInfoSync()
    this.setData({
      modalBottom: this.data.multiline ? (res.screenHeight - 234).toString() : (res.screenHeight - 178).toString(),
      modalHeight: this.data.multiline ? '468' : '355'
    })
  },

  methods: {
    // 监听用户输入
    onInput: function (e) {
      this.setData({
        text: e.detail.value
      })
    },

    // 隐藏输入框
    hideInputBox: function () {
      this.setData({
        shadowAnimation: 'shadowHide',
        modalAnimation: 'modalHide',
        showModal:false
        // shadowOpacity: '0',
        // modalOpacity: '0'
      })
    },

    // 单击取消事件
    onCancelTap: function () {
      var that = this
      this.hideInputBox()

      setTimeout(function () {
        that.triggerEvent('inputCancel')
      }, 350)
    },

    // 单击确定事件
    onConfirmTap: function () {
      var that = this
      this.hideInputBox()

      setTimeout(function () {
        that.triggerEvent('inputConfirm', that.data.text)
      }, 350)
    },

    // 捕获背景的点击事件以防止冒泡
    tapCatcher: function () { }
  }
})