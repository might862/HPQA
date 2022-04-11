var app = new Vue({
  el: "#app",
  data: {
    keyword: "",
    list: []
  },
  computed: {
    re_list: function () {
      var _this = this;
      return this.list.filter(function (item) {
        return !_this.keyword ||
          item.q.indexOf(_this.keyword) > -1 ||
          item.a.indexOf(_this.keyword) > -1
      })
    }
  },
  created: function () {
    this.list = questions;
  }
})