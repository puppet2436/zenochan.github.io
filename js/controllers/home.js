BaseController.controller('HomeCtrl', function ($rootScope, $scope, $state, ApiService, StorageService, UtilsService, PopupService, $ionicNavBarDelegate) {
  var TAG = 'HomeCtrl';
  try {
    var model = $scope.model = {
      user: null,
      homeData: null,
      cusWechat: 10,
      cusBuyer: 20
    };

    (function () {
      $scope.$on("$ionicView.afterEnter", function () {
        $ionicNavBarDelegate.showBar(false);
      });
      console.log(TAG, "----> start");
      var execute = function () {
        model.user = $rootScope.user;
        getHomeData();
      };
      if ($rootScope.user == null) {
        $rootScope.onLoginReady = execute;
      } else {
        execute();
      }
    }());


    $scope.refresh = function () {
      if (model.user) {
        getHomeData();
      } else {
        $scope.$broadcast('scroll.refreshComplete');
      }
    };

    $scope.showQrCode = function () {
      PopupService.alertImg("https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + model.user.channel.ticket, "我的二维码");
    };

    $scope.goCusWechat = function () {
      $state.go(STATE.TAB_CUS_WECHAT);
    };

    $scope.goCusBuyer = function () {
      $state.go(STATE.TAB_CUS_BUYER);
    };

    function getHomeData() {
      var body = {
        tmp: "customer",
        plugins: "homeData",
        adminID: Conf.DEBUG ? 17 : model.user.id
      };

      ApiService.post(body, function (res) {
        model.homeData = res;
      }, function (res) {
        PopupService.alert(res.err_msg);
      }).finally(function () {
        $scope.$broadcast('scroll.refreshComplete');
      });
    }

  } catch (err) {
    PopupService.showError(TAG, err);
  }
});