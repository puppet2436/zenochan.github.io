BaseController.controller('CusWechatCtrl', function ($rootScope, $scope, $state, ApiService, StorageService, UtilsService, PopupService) {
  var TAG = 'CusWechatCtrl';
  try {
    var model = $scope.model = {
      cusWechat: [],
      user: null,
      pageNo: 0,
      pageSize: 20,
      total: 0,
      initialized: false
    };

    (function () {
      console.log(TAG, "----> start");

      var execute = function () {
        model.user = $rootScope.user;
        getCusWechat();
      };
      if ($rootScope.user) {
        execute();
      } else {
        $rootScope.onLoginReady = execute;
      }

    }());

    $scope.refresh = refresh;
    $scope.getCusWechat = getCusWechat;

    function refresh() {
      model.pageNo = 0;
      getCusWechat();
    }

    function getCusWechat() {
      model.pageNo++;
      var body = {
        "tmp": "customer",
        "plugins": "wechat_user",
        "adminID": Conf.DEBUG ? 17 : model.user.id,
        "page": model.pageNo,
        "pageNum": model.pageSize
      };
      ApiService.post(body, function (res) {
        if (model.pageNo == 1) {
          model.cusWechat = [];
        }
        model.cusWechat = model.cusWechat.concat(res.array);
        model.total = res.total;
      }, function (res) {
        PopupService.alert(res.err_msg);
        model.pageNo--;
      }).finally(function () {
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$broadcast('scroll.infiniteScrollComplete');
        model.initialized = true;
      });
    }

  } catch (err) {
    PopupService.showError(TAG, err);
  }
});