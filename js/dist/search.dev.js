"use strict";

new Vue({
  el: '#app',
  data: {
    title: 'Vue | Page형식으로 맛보기',
    titleSub: '이미지 검색',
    search: '',
    isSearch: false,
    products: [],
    searchProducts: []
  },
  created: function created() {
    var _this = this;

    axios.get('../json/products.json').then(function (r) {
      _this.products = r.data;
      _this.searchProducts = _this.products;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  methods: {
    onSearchRemove: function onSearchRemove(e) {
      this.search = '';
      this.searchProducts = this.products;
    },
    onSearch: function onSearch(e) {
      var _this2 = this;

      this.searchProducts = _.filter(this.products, function (o) {
        return o.title.includes(_this2.search);
      });
    }
  }
});