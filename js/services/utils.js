/**
 * Created by Zeno on 16/3/30.
 */

/**
 * dependencies:
 *
 * - angular-md5.js
 *
 */
BaseService.factory("UtilsService", function (md5)
{
  return {

    /**
     * @param {String} str
     */
    isMobile: function (str)
    {
      return /(^1(3|4|5|7|8)[0-9]\d{8}$)/.test(str);
    },

    getClearUrl: function ()
    {
      return window.location.href.split("#")[0].split("?")[0];
    },

    getRoute: function ()
    {
      if (window.location.href.split("#").length > 1) {
        return window.location.href.split("#")[1];
      }

      return null;
    },

    getUrlParam: function (key)
    {
      var query_string = {};
      var query        = window.location.search.substring(1);
      var vars         = query.split('&');

      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        // If first entry with this name
        if (typeof query_string[pair[0]] === 'undefined') {
          query_string[pair[0]] = pair[1];
          // If second entry with this name
        }
        else if (typeof query_string[pair[0]] === 'string') {
          query_string[pair[0]] = [query_string[pair[0]], pair[1]];
          // If third or later entry with this name
        } else {
          query_string[pair[0]].push(pair[1]);
        }
      }
      return query_string[key] || null;
    },

    addUrlParam: function (url, key, value)
    {
      if (!url || !key || !value) {
        return;
      }

      if (typeof value == 'object') {
        value = JSON.stringify(value);
      }
      value      = encodeURIComponent(value);
      var result = url.split("#")[0];
      result += (result.indexOf('?') > -1 ? '&' : '?')
        + key + "=" + value;

      var urlArr = url.split("#");

      if (urlArr.length >= 2) {
        for (var i = 1; i < urlArr.length; i++) {
          result += "#" + urlArr[i];
        }
      }

      return result;
    },

    /**
     * @see <a href='http://blog.sina.com.cn/s/blog_8ee5914d0101771z.html'>利用JS生成32位的UUID</a>
     * @returns {string}
     */
    uuid: function ()
    {
      function getIntegerBits(val, start, end)
      {
        var base16     = returnBase(val, 16);
        var quadArray  = [];
        var quadString = '';
        var i          = 0;
        for (i = 0; i < base16.length; i++) {
          quadArray.push(base16.substring(i, i + 1));
        }
        for (i = Math.floor(start / 4); i <= Math.floor(end / 4); i++) {
          if (!quadArray[i] || quadArray[i] == '') quadString += '0';
          else quadString += quadArray[i];
        }
        return quadString;
      }

      function returnBase(number, base)
      {
        return (number).toString(base).toUpperCase();
      }


      function rand(max)
      {
        return Math.floor(Math.random() * (max + 1));
      }
      //
      // Loose interpretation of the specification DCE 1.1: Remote Procedure Call
      // since JavaScript doesn't allow access to internal systems, the last 48 bits
      // of the node section is made up using a series of random numbers (6 octets long).
      //
      var dg   = new Date(1582, 10, 15, 0, 0, 0, 0);
      var dc   = new Date();
      var t    = dc.getTime() - dg.getTime();
      var tl   = getIntegerBits(t, 0, 31);
      var tm   = getIntegerBits(t, 32, 47);
      var thv  = getIntegerBits(t, 48, 59) + '1'; // version 1, security version is 2
      var csar = getIntegerBits(rand(4095), 0, 7);
      var csl  = getIntegerBits(rand(4095), 0, 7);
      // since detection of anything about the machine/browser is far to buggy,
      // include some more random numbers here
      // if NIC or an IP can be obtained reliably, that should be put in
      // here instead.
      var n = getIntegerBits(rand(8191), 0, 7) +
        getIntegerBits(rand(8191), 8, 15) +
        getIntegerBits(rand(8191), 0, 7) +
        getIntegerBits(rand(8191), 8, 15) +
        getIntegerBits(rand(8191), 0, 15); // this last number is two octets long
      return tl + tm + thv + csar + csl + n;
    },

    /**
     * @param {String} string
     */
    stringToMD5: function (string)
    {
      return md5.createHash(string);
    },

    closeWindow: function ()
    {
      window.close();
      window.location.replace("http://:_blank");
    }

  };
});


Date.prototype.format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
    "H+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  //年
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  //星期
  if (/(E+)/.test(fmt)) {
    var week = {
      "0": "\u65e5",
      "1": "\u4e00",
      "2": "\u4e8c",
      "3": "\u4e09",
      "4": "\u56db",
      "5": "\u4e94",
      "6": "\u516d"
    };
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[this.getDay() + ""]);
  }
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};
