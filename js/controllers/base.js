/**
 * Created by liz on 16/3/15.
 */
BaseController.controller('BaseCtrl', function ($rootScope, $scope, $state, $ionicHistory,
                                                ApiService, StorageService, WechatService, UtilsService, PopupService) {
  try {
    $rootScope.onLoginReady = null;

    var key = Conf.USER_COOKIE;
    initialize();
    function initialize() {
      var href = window.location.href;
      if (href.indexOf("%0a") > 0 || href.indexOf("%0A") > 0) {
        window.location.href = href.replace(/%0[aA]/, "");
      }
      var urlRoute = UtilsService.getRoute();
      var paramRoute = UtilsService.getUrlParam("ng");
      if (paramRoute && !urlRoute) {
        window.location.href =
          window.location.href.split("#")[0]
          + "#" + decodeURIComponent(paramRoute);
      }
      checkLoginUser();
    }

    function checkLoginUser() {
      //用户登录
      var user = StorageService.getGlobalObject(key);
      //微信登录授权 code
      var code = WechatService.getAuthCode();

      if ((user && !user.expired)
        || (user && user.expired && user.expired < new Date().getTime())) {
        user = null;
        StorageService.setGlobalObject(key, null);
      }

      //微信登陆
      if (user) {
        $rootScope.user = user;
        onLoginReady();
      } else if (!code) {
        redirectToAuth();
      } else {
        wechatLogin(code);
      }
    }

    function redirectToAuth() {
      var url = UtilsService.getClearUrl();
      var route = UtilsService.getRoute();
      if (route) {
        url = UtilsService.addUrlParam(url, "ng", route);
      }
      WechatService.redirectToWechatLogin(Conf.APP_ID, url);
    }

    function onLoginReady() {
      // signJSSDK();
      // configShare();
      if (typeof $rootScope.onLoginReady == "function") {
        $rootScope.onLoginReady();
        // $rootScope.onWXConfigReady();
      }
    }

    function wechatLogin(code) {
      var body = {
        tmp: "customer",
        plugins: "login",
        code: code
      };

      ApiService.post(body, function (res) {
        var user = res;

        if (Conf.DEBUG) {
          user.expired = new Date().getTime() + 5 * 60 * 1000;
        } else {
          user.expired = new Date().getTime() + 24 * 60 * 60 * 1000;
        }

        StorageService.setGlobalObject(key, user);
        $rootScope.user = user;
        onLoginReady();
      }, function (res) {
        if (res.err_msg == "您还没有成为我们的推广客户") {
          window.location.href = window.location.href.split("#?")[0].split("?")[0] + "/join_us.html";
          window.close();
        } else {
          PopupService.alert(res.err_msg, null, null, function () {
            WechatService.closeWindow();
          });
        }
      });
    }

    function getUserInfo(userId) {
      ApiService.getUserInfo(userId, function (res) {
        $rootScope.user = res.data[0];
      });
    }

    function signJSSDK() {
      ApiService.signJSSDK(function (res) {
        var sign = res.data[0];
        WechatService.configJSSDK(Conf.APP_ID, sign.noncestr, sign.sign, sign.timestamp, sign, $rootScope);
      }, function () {

      });
    }

    function configShare() {
      //todo 配置分享
    }

    (function () {

      $rootScope.p = function p(p) {
        return "http://admin.churgo.com/app/uploads/" + p;
      };

      $rootScope.pHalf = function pHalf(p) {
        if (p) {
          var suffix = p.substr(p.lastIndexOf("."));
          var r = "http://admin.churgo.com/app/uploads/";

          r += p.substring(0, p.lastIndexOf("."));
          r += "_half";
          r += suffix;
          return r;
        } else {
          return null;
        }
      };

      $scope.wechatHeadImg = function (src, size) {
        return src.substring(0, src.length - 1) + size;
      }
    }());

  } catch (err) {
    PopupService.showError('BaseCtrl', err);
  }

});
