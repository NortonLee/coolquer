Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchData: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onShow() {
    this.setData({
      searchData: ''
    })
  },

  searchInput(e) {
    this.setData({
      searchData: e.detail.value
    })
  },

  search() {
    wx.navigateTo({
      url: `/pages/search/index?searchData=${this.data.searchData}`,
    })
  },

  goWC() {
    wx.navigateTo({
      url: '/pages/wc/index',
    })
  },
  goHotel() {
    wx.navigateTo({
      url: '/pages/hotel/index',
    })
  },
  goOil() {
    wx.navigateTo({
      url: '/pages/oil/index',
    })
  },
  onShareAppMessage() {
    return {
      title: '找找看 - 酷趣儿',
      desc: '找你的周边',
      path: '/pages/index/index'
    }
  },
})