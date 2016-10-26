var STATE = {
  TAB: 'tab',
  TAB_HOME: 'tab.home',
  TAB_CUS_WECHAT: 'tab.cus_wechat',
  TAB_CUS_BUYER: 'tab.cus_buyer',
  TAB_ORDER: 'tab.order'
};
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in home.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var BaseController = angular.module('baimol.controllers', ['ionic']);
var BaseService = angular.module('baimol.services', ['angular-md5', 'ngCookies', 'ngSanitize']);
var app = angular.module('BaiMol', ['baimol.services', 'baimol.controllers', 'ngIOS9UIWebViewPatch']);

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

app.config(function ($stateProvider, $urlRouterProvider, $provide, $locationProvider, $httpProvider, $ionicConfigProvider) {
  //<editor-fold desc="android tabs 放在下面">
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('bottom');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');
  //</editor-fold>

  //replace ($10.00) with -$10.00
  $provide.decorator('$locale', ['$delegate', function ($delegate) {
    if ($delegate.id == 'en-us') {
      $delegate.NUMBER_FORMATS.PATTERNS[1].negPre = '-\u00A4';
      $delegate.NUMBER_FORMATS.PATTERNS[1].negSuf = '';
    }
    return $delegate;
  }]);

  $stateProvider
    .state(STATE.TAB, {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state(STATE.TAB_HOME, {
      cache: false,
      url: "/home",
      views: {
        'tab-home': {
          templateUrl: "templates/home.html",
          controller: "HomeCtrl"
        }
      }
    })
    .state(STATE.TAB_CUS_WECHAT, {
      url: "/cus-wechat",
      views: {
        'tab-cus-wechat': {
          templateUrl: "templates/cus_wechat.html",
          controller: "CusWechatCtrl"
        }
      }
    })
    .state(STATE.TAB_CUS_BUYER, {
      url: "/cus-buyer",
      views: {
        'tab-cus-buyer': {
          templateUrl: "templates/cus_buyer.html",
          controller: "CusBuyerCtrl"
        }
      }
    })
    .state(STATE.TAB_ORDER, {
      url: "/buyer-order",
      params: {buyer: null},
      views: {
        'tab-cus-buyer': {
          templateUrl: "templates/buyer_order.html",
          controller: "BuyerOrderCtrl"
        }
      }
    })
  ;

  $urlRouterProvider.otherwise("/tab/home");
  $locationProvider.hashPrefix('?');
  $httpProvider.interceptors.push("DataSerializeHttpInterceptor");

});

