BaseController.factory("ApiService", function ($http, $ionicLoading, md5) {


  return {
    HOST: "http://admin.churgo.com/",
    PATH: "api/",
    post: function (body, success, fail) {
      if (Conf.DEBUG) {
        console.info(JSON.stringify(body, null, 2));
      }

      var url = this.HOST + this.PATH;

      //weui loading
      $ionicLoading.show({
        duration: 10000, //设置最长显示时间
        template: '<div id="loadingToast" class="weui_loading_toast">'
        + '<div class="weui_mask_transparent"></div>'
        + '<div class="weui_toast">'
        + '<div class="weui_loading">'
        + '<!-- :) -->'
        + '<div class="weui_loading_leaf weui_loading_leaf_0"></div>'
        + '<div class="weui_loading_leaf weui_loading_leaf_1"></div>'
        + '<div class="weui_loading_leaf weui_loading_leaf_2"></div>'
        + '<div class="weui_loading_leaf weui_loading_leaf_3"></div>'
        + '<div class="weui_loading_leaf weui_loading_leaf_4"></div>'
        + '<div class="weui_loading_leaf weui_loading_leaf_5"></div>'
        + '<div class="weui_loading_leaf weui_loading_leaf_6"></div>'
        + '<div class="weui_loading_leaf weui_loading_leaf_7"></div>'
        + '<div class="weui_loading_leaf weui_loading_leaf_8"></div>'
        + '<div class="weui_loading_leaf weui_loading_leaf_9"></div>'
        + '<div class="weui_loading_leaf weui_loading_leaf_10"></div>'
        + '<div class="weui_loading_leaf weui_loading_leaf_11"></div>'
        + '</div>'
        + '<p class="weui_toast_content">数据加载中</p>'
        + '</div>'
        + '</div>'
      });

      return $http.post(url, {param: this.buildParam(body)}).then(
        function (response) {
          if (Conf.DEBUG) {
            console.info(response.data);
          }

          var res = response.data;
          $ionicLoading.hide();

          //校验返回数据是否正确
          if (res && !res.err && res.response) {
            if (typeof success == 'function') {
              success(res.response);
            }
          } else {
            if (typeof fail == 'function') {
              fail(res);
            }
          }
        },
        function (response) {
          if (Conf.DEBUG) {
            console.warn(url);
            console.error(response);
          }

          $ionicLoading.hide();

          if (typeof fail == 'function') {
            fail(response.data);
          }
        });
    },
    //构造请求参数
    buildParam: function (body) {
      var param = {
        head: {
          client: 3,
          appVersion: "1.0.0",
          channelCode: "",
          callTime: new Date().getTime()
        },
        body: body,
        sign: "e0fff08c3b1f07c4bf673e28762a7105"
      };

      param.sign = md5.createHash(JSON.stringify(param));

      return JSON.stringify(param);
    }
  }
});
