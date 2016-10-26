BaseController.controller('CusBuyerCtrl', function ($rootScope, $scope, $state, ApiService, StorageService, UtilsService, PopupService) {
  var TAG = 'CusBuyerCtrl';
  try {
    var model = $scope.model = {
      cusBuyer: [],
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
        getCusBuyer();
      };
      if ($rootScope.user) {
        execute();
      } else {
        $rootScope.onLoginReady = execute;
      }

    }());

    $scope.refresh = function () {
      model.pageNo = 0;
      getCusBuyer();
    };
    $scope.onClickBuyer = function (buyer) {
      $state.go(STATE.TAB_ORDER, {buyer: buyer});

    };

    $scope.getCusBuyer = getCusBuyer;


    function getCusBuyer() {
      model.pageNo++;
      var body = {
        "tmp": "customer",
        "plugins": "buyers",
        "adminID": Conf.DEBUG ? 17 : model.user.id,
        "page": model.pageNo,
        "pageNum": model.pageSize
      };
      ApiService.post(body, function (res) {
        if (model.pageNo == 1) {
          model.cusBuyer = [];
        }
        model.cusBuyer = model.cusBuyer.concat(res.array);
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