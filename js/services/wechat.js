/**
 * 微信各种
 * Created by Zeno on 16/2/22.
 */

BaseService.factory("WechatService", function ($rootScope, UtilsService, $cookieStore)
{
  //noinspection JSUnusedGlobalSymbols
  return {
    COOKIE_KEY_AUTH_STATE: "wechat_auth_state",
    API_LIST: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'closeWindow'],

    /**
     * 调起微信支付
     *
     * @param param
     * @param {function} success
     * @param {function({code:*,message:string})} fail
     */
    pay: function (param, success, fail)
    {
      try {
        var onBridgeReady = function ()
        {
          //noinspection JSUnresolvedVariable
          WeixinJSBridge.invoke('getBrandWCPayRequest', param, function (res)
          {
            // get_brand_wcpay_request：ok  支付成功
            // get_brand_wcpay_request：cancel  支付过程中用户取消
            // get_brand_wcpay_request：fail  支付失败

            //noinspection SillyAssignmentJS
            res.err_msg  = res.err_msg;
            //noinspection SillyAssignmentJS
            res.err_code = res.err_code;

            //noinspection JSUnresolvedVariable
            if (res.err_msg == "get_brand_wcpay_request:ok") {
              success();
            } else {
              //noinspection JSUnresolvedVariable
              var err = {
                code: res.err_code,
                message: res.err_msg
              };
              //noinspection JSUnresolvedVariable
              if (res.err_msg == "get_brand_wcpay_request:cancel") {
                err.code    = 1;
                err.message = "取消支付";
              } else if (res.err_msg == "get_brand_wcpay_request:failed") {
                //支付失败
                err.code    = 2;
                err.message = "支付失败";
              } else if (res.err_code == 3) {
                err.code    = 3;
                err.message = res;
              } else {
                err.code    = 9;//unknown error
                err.message = JSON.stringify(res);
              }
              fail(err);
            }
          });
        };

        //noinspection JSUnresolvedVariable
        if (typeof WeixinJSBridge == "undefined") {
          if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
          } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
          }
        } else {
          onBridgeReady();
        }
      } catch (e) {
        alert("[error_z]" + JSON.stringify(e));
      }
    },

    configShare: function (title, desc, link, imgUrl, success, cancel)
    {
      var self = this;

      function execute()
      {
        self.configOnMenuShareTimeLine(title, link, imgUrl, success, cancel);
        self.configOnShareAppMessage(desc, title, link, imgUrl, success, cancel);
      }

      if ($rootScope.wxJsSdkConfiged) {
        execute();
      } else {
        $rootScope.onWXConfigReady = execute;
      }
    },

    /**
     * 配置分享到朋友圈
     * @param title
     * @param link
     * @param imgUrl
     * @param {function(type:number)} success 用户确认分享后执行的回调函数
     * @param {function()} cancel 用户取消分享后执行的回调函数
     */
    configOnMenuShareTimeLine: function (title, link, imgUrl, success, cancel)
    {
      //noinspection JSUnresolvedFunction,JSUnresolvedVariable
      wx.onMenuShareTimeline({
        title: title,
        link: link,
        imgUrl: imgUrl,
        success: function ()
        {
          console.log("1:分享到朋友圈");
          if (typeof success == "function") {
            success(1);
          }
        },
        cancel: cancel
      });
    },

    /**
     * 配置分享给朋友
     *
     * @param title
     * @param desc
     * @param link
     * @param imgUrl
     * @param {function(type:number)} success 用户确认分享后执行的回调函数
     * @param {function()} cancel 用户取消分享后执行的回调函数
     */
    configOnShareAppMessage: function (title, desc, link, imgUrl, success, cancel)
    {
      //noinspection JSUnresolvedFunction,JSUnresolvedVariable
      wx.onMenuShareAppMessage({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        success: function ()
        {
          console.log("2:分享给好友");
          if (typeof success == "function") {
            success(2);
          }
        },
        cancel: cancel
      });
    },

    closeWindow: function ()
    {
      wx.closeWindow();
    },

    /**
     * 微信配置
     */
    configJSSDK: function (appId, noncestr, signature, timestamp)
    {
      var apiList = this.API_LIST;
      //noinspection JSUnresolvedVariable
      wx.config({
        debug: false,
        appId: appId,
        timestamp: timestamp,
        nonceStr: noncestr, // 必填，生成签名的随机串
        signature: signature,// 必填，签名，见附录1
        jsApiList: apiList
      });

      //签名成功回调
      //noinspection JSUnresolvedVariable
      wx.ready(function ()
      {
        $rootScope.wxJsSdkConfiged = true;
        //noinspection JSUnresolvedVariable
        if (typeof $rootScope.onWXConfigReady == "function") {
          //noinspection JSUnresolvedFunction
          $rootScope.onWXConfigReady();
        }
      });
    },

    /**
     * @param {function(boolean)} callback
     */
    checkJsApi: function (callback)
    {
      //noinspection JSUnresolvedVariable
      wx.checkJsApi({
        jsApiList: this.API_LIST,
        success: function (res)
        {
          // 以键值对的形式返回，可用的api值true，不可用为false
          // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
          //noinspection JSUnresolvedVariable
          var checkResult = res.checkResult;
          //noinspection JSUnresolvedVariable
          if (checkResult.onMenuShareTimeline && checkResult.onMenuShareTimeline == true) {
            callback(true);
            console.log("有权限");
          } else {
            callback(false);
            console.log("无权限");
          }
        }
      });
    },

    redirectToWechatLogin: function (appId, redirectUrl)
    {
      var state = "QG_" + new Date().getTime();
      $cookieStore.put(this.COOKIE_KEY_AUTH_STATE, state);

      var url = 'https://open.weixin.qq.com/connect/oauth2/authorize'
        + '?appid=' + appId
        + '&redirect_uri=' + encodeURIComponent(redirectUrl)
        + '&response_type=code'
        + '&scope=snsapi_userinfo'
        + '&state=' + state
        + '#wechat_redirect';

      window.location.replace(url);
    },

    getAuthCode: function ()
    {
      var cookieState = $cookieStore.get(this.COOKIE_KEY_AUTH_STATE);
      $cookieStore.remove(this.COOKIE_KEY_AUTH_STATE);
      var urlState = UtilsService.getUrlParam("state");

      if (urlState && urlState == cookieState) {
        return UtilsService.getUrlParam("code");
      } else {
        return null;
      }
    },

    isWechatAgent: function ()
    {
      var ua = navigator.userAgent.toLowerCase();
      return ua.match(/MicroMessenger/i) == "micromessenger";
    }
  };

});
