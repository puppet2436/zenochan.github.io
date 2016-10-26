/**
 * Created by Zeno on 16/7/8.
 */
BaseService.factory("EncryptService", function ()
{
  return {
    base64Encode: function (str)
    {
      return window.btoa(str);
    },
    base64Decode: function (str)
    {
      return window.atob(str);
    },
    urlEncode: function (url)
    {
      return encodeURIComponent(url);
    },
    urlDecode: function (url)
    {
      return decodeURIComponent(url);
    },
    encodeID: function (id)
    {
      return this.urlEncode(this.base64Encode(id));
    },
    decodeID: function (id)
    {
      return this.base64Decode(this.urlDecode(id));
    }
  };
});
