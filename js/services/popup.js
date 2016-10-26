/**
 * Created by Zeno on 16/3/9.
 */

BaseService.factory('PopupService', function ($ionicPopup) {
  return {
    alert: function (content, title, ok, onOk) {
      ok = ok ? ok : "好";
      title = title ? title : "提示";

      var alertPopup = $ionicPopup.alert({
        "title": title,
        // cssClass:"weui_dialog",
        // "template": '<p style="text-align: center">' + content + '</p>',
        "template": '<div class="weui_dialog_bd">' + content + '</div>',
        buttons: [
          {
            text: ok,
            type: 'weui_btn_dialog primary',
            onTap: onOk
          }]
      });

      alertPopup.then(function (res) { });
    },

    alertImg: function (src,title) {
      title = title ? title : "提示";

      var alertPopup = $ionicPopup.alert({
        "title": title,
        // cssClass:"weui_dialog",
        // "template": '<p style="text-align: center">' + content + '</p>',
        "template": '<div class="weui_dialog_bd"><img style="width: 100%;height: auto" src="' + src + '"/></div>',
        buttons: [
          {
            text: "好",
            type: 'weui_btn_dialog primary'
          }]
      });

      alertPopup.then(function (res) { });
    },
    alertTwo: function (content, title, btn1, btn2, btn1_func, btn2_func) {
      var alertPopup = $ionicPopup.alert({
        "title": title,
        "template": content,
        buttons: [
          {
            text: btn1,
            type: 'button-assertive',
            onTap: btn1_func
          },
          {
            text: btn2,
            type: 'button-assertive',
            onTap: btn2_func
          }]
      });

      alertPopup.then(function (res) { });
    },

    /**
     * 微信二维码支付
     */
    wechatQRCodePay: function (title, codeUrl, success, cancel) {
      var newURL = 'http://qr.liantu.com/api.php?text=' + encodeURIComponent(codeUrl);
      var qrHtml = '<div class="text-center"><img style="width: 100%" src="' + newURL + '" /></div>';

      var alertPopup = $ionicPopup.alert({
        title: title,
        template: qrHtml,
        buttons: [{
          text: "支付完成",
          type: "button-assertive",
          onTap: success

        }, {
          text: "取消支付",
          type: "button-assertive",
          onTap: cancel
        }]
      });
      alertPopup.then(function (res) {
      });
    },

    showError: function (tag, e, onOk) {
      var ua = navigator.userAgent.toLowerCase();
      var dev = ua.indexOf("wechatdevtools") > -1;
      // if (!dev && ua.match(/MicroMessenger/i) == "micromessenger" || !Conf.DEBUG) {
      //   this.alert(JSON.stringify(e), tag, "好", onOk);
      // } else {
      throw e;
      // }
    }
  };
});
