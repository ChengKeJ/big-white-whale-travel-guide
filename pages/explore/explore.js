const api = require('../../utils/api.js');

const App = getApp();
Page({
  data: {
    elements: [],
    windowWidth: App.systemInfo.windowWidth,
  },
  onReady() {
  },
  onLoad() {
    const self = this;
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 10000,
    });
    api.getExplorePlaceList({
      success: (res) => {
        const dest = res.data;
        self.setData({
          elements: dest.elements,
        });
        wx.hideToast();
      },
    });
  },
  viewPOI(e) {
    const data = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../destination/destination?type=${data.type}&id=${data.id}&name=${data.name}`,
    });
  },
  onShareAppMessage: function () {
    return {
      title: '大白鲸旅游攻略',
      desc: '最全的旅游攻略!',
      path: 'pages/explore/explore?id=124'
    }
  }
});
