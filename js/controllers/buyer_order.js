BaseController.controller('BuyerOrderCtrl', function ($rootScope, $scope, $state, $stateParams, ApiService, StorageService, UtilsService, PopupService, $ionicTabsDelegate
    , $timeout) {
    var TAG = 'BuyerOrderCtrl';
    try {
      var model = $scope.model = {
        buyer: null,
        orders: [],
        total: 0,
        pageNo: 0,
        pageSize: 20,
        initialized: false,
        lastResult: 0,
        statusLabels: ["待支付", "待收货", "待结算", "已完成", "已取消"],
        statusBg: ["state-waite", "state-accent", "state-accent", "state-normal", "state-normal"]
      };

      (function () {
        console.log(TAG, "----> start");
        $scope.$on("$ionicView.beforeEnter", function () {
          $ionicTabsDelegate.showBar(false);
        });
        $scope.$on("$ionicView.beforeLeave", function () {
          $ionicTabsDelegate.showBar(true);
        });

        console.log($stateParams);
        if (!$stateParams || !$stateParams.buyer) {
          PopupService.alert("缺少客户信息", null, null, function () {
            window.location.href = window.location.href.split("#?")[0].split("?")[0];
          });
        } else {
          model.buyer = $stateParams.buyer;
          getOrder();
        }
      }());

      $scope.refresh = refresh;
      $scope.getOrder = getOrder;
      $scope.encriptPhone = encriptPhone;
      $scope.getResolvedState = getResolvedState;

      function refresh() {
        model.pageNo = 0;
        getOrder();
      }

      function getOrder() {
        model.pageNo++;
        var body = {
          tmp: "customer",
          plugins: "orders",
          buyerID: model.buyer.id,
          page: model.pageNo,
          pageNum: model.pageSize
        };

        ApiService.post(body, function (res) {
          if (model.pageNo == 1) {
            model.orders = [];
          }
          model.orders = model.orders.concat(res);
          model.lastResult = res.length;
        }, function (res) {
          PopupService.alert(res.err_code);
          model.pageNo--;
        }).finally(function () {
          $scope.$broadcast('scroll.refreshComplete');
          $scope.$broadcast('scroll.infiniteScrollComplete');
          model.initialized = true;
        });
      }


      /**
       * @return 0:待支付,1:待收货，2:待结算，3:已完成,4:已取消
       */
      function getResolvedState(order) {
        if (order == null) return 0;

        var orderStatus = parseInt(order.status);
        var state = 0;
        if (orderStatus == 0 && order.isPay == 0) {
          state = 0;
        } else {
          switch (orderStatus) {
            case 0:
            case 1:
            case 2:
              state = 1;
              break;
            case 3:
              state = 2;
              break;
            case 4:
              state = 3;
              break;
            case 5:
              state = 4;
          }
        }
        return state;

      }

      function encriptPhone(phone) {
        return phone.substring(0, 3) + "****" + phone.substring(phone.length - 4, phone.length);
      }

    } catch
      (err) {
      PopupService.showError(TAG, err);
    }
  }
);