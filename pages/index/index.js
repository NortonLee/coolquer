Page({
  data: {
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },
  onLoad() {
    setTimeout(function () {
      wx.redirectTo({
        url: '/pages/dashboard/index',
      })
    }, 1000)
  }
})
