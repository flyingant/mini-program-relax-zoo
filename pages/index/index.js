//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    toggleTimes: 0,
    showPiggy: true,
    showChicken: false
  },
  onShowPiggy: function () {
    const toggleTimes = this.data.toggleTimes;
    let appendingWord = '';
    if (toggleTimes >= 1) {
      appendingWord = '还';
      for (let i = 0; i < toggleTimes - 1; i++) {
        appendingWord += '还';
      }
    }
    this.setData({
      showPiggy: true,
      showChicken: false,
      toggleTimes: ++this.data.toggleTimes,
      appendingWord: appendingWord
    })
  },

  onShowChicken: function () {
    this.setData({
      showPiggy: false,
      showChicken: true
    })
  }
})
