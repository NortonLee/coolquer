var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: '',
    latitude: '',
    polyline: [],
    controls: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: 'VEXBZ-UFVAK-WQJJB-AWWFZ-H2FV2-JDFCC'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    this.loadLoacation();
    this.search();

    this.setData({
      controls: [{
        id: 1,
        iconPath: '../../assets/images/refersh.png',
        position: {
          left: 10,
          top: 500,
          width: 30,
          height: 30
        },
        clickable: true
      },
      {
        id: 2,
        iconPath: '../../assets/images/location.png',
        position: {
          left: 10,
          top: 460,
          width: 30,
          height: 30
        },
        clickable: true
      }]
    })
  },
  loadLoacation() {
    var that = this;
    wx.getLocation({
      success: function (res) {
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      },
    })
  },
  search() {
    var that = this;
    qqmapsdk.search({
      keyword: '加油站',
      success: function (res) {
        console.log(res);
        var markers = [];
        res.data.forEach(function (item) {
          markers.push({
            id: item.id,
            latitude: item.location.lat,
            longitude: item.location.lng,
            iconPath: '../../assets/images/oil.png',
            width: 20,
            height: 20,
            callout: {
              content: item.title,
              bgColor: '#fff',
              padding: 10,
              fontSize: 14,
              display: 'BYCLICK'
            }
          })
        })
        that.setData({
          markers: markers
        })
      },
    })
  },
  controltap(e) {
    if (e.controlId == 1) {
      this.search();
    }
    if (e.controlId == 2) {
      this.loadLoacation();
    }
  },
  markertap(e) { },
  callouttap(e) {
    console.log(e);
    var markId = e.markerId;
    var that = this;
    that.data.markers.forEach(function (item) {
      if (item.id == markId) {
        wx.openLocation({
          longitude: Number(item.longitude),
          latitude: Number(item.latitude)
        })
      }
    })
  }
})