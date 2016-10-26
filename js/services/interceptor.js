/**
 * Usage:
 * <code>
 * $httpProvider.interceptors.push("DataSerializeHttpInterceptor");
 * </code>
 */
BaseService.factory("DataSerializeHttpInterceptor", function ($q)
{
  function serializeData(data)
  {
    // If this is not an object, defer to native stringification.
    if (!angular.isObject(data)) {
      return ((data == null) ? "" : data.toString());
    }
    var buffer = [];
    // Serialize each key in the object.
    for (var name in data) {
      if (!data.hasOwnProperty(name)) {
        continue;
      }
      var value = data[name];
      buffer.push(
        encodeURIComponent(name) +
        "=" +
        encodeURIComponent((value == null) ? "" : value)
      );
    }
    // Serialize the buffer and clean it up for transportation.
    var source = buffer
      .join("&")
      .replace(/%20/g, "+");
    return (source);
  }

  return {
    request: function (config)
    {
      if (config.method === 'POST') {
        if (config.data) {
          config.headers                 = config.headers || {};
          config.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";
          config.data                    = serializeData(config.data);
        }
      }
      return config;
    },

    requestError: function (rejection)
    {
      console.error("requestError", rejection.status, rejection);
      return $q.reject(rejection);
    },

    response: function (response)
    {
      return response;
    },

    responseError: function (rejection)
    {
      console.error("responseError", rejection.status, rejection);
      // if (!rejection.data) {
      //   rejection.data      = new ApiResponse();
      //   rejection.data.code = 0;
      //   rejection.data.msg  = "系统繁忙,请稍候再试!";
      // }
      return $q.reject(rejection);
    }
  };
});
