"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Order = _interopRequireDefault(require("../model/Order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Store service.
* @module api/StoreApi
* @version 1.0.0
*/
var StoreApi = /*#__PURE__*/function () {
  /**
  * Constructs a new StoreApi. 
  * @alias module:api/StoreApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function StoreApi(apiClient) {
    _classCallCheck(this, StoreApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * Callback function to receive the result of the deleteOrder operation.
   * @callback module:api/StoreApi~deleteOrderCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete purchase order by ID
   * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
   * @param {String} orderId ID of the order that needs to be deleted
   * @param {module:api/StoreApi~deleteOrderCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(StoreApi, [{
    key: "deleteOrder",
    value: function deleteOrder(orderId, callback) {
      var postBody = null; // verify the required parameter 'orderId' is set

      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling deleteOrder");
      }

      var pathParams = {
        'orderId': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/store/order/{orderId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getInventory operation.
     * @callback module:api/StoreApi~getInventoryCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Number}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns pet inventories by status
     * Returns a map of status codes to quantities
     * @param {module:api/StoreApi~getInventoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Number}>}
     */

  }, {
    key: "getInventory",
    value: function getInventory(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = {
        'String': 'Number'
      };
      return this.apiClient.callApi('/store/inventory', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getOrderById operation.
     * @callback module:api/StoreApi~getOrderByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find purchase order by ID
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
     * @param {Number} orderId ID of pet that needs to be fetched
     * @param {module:api/StoreApi~getOrderByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Order}
     */

  }, {
    key: "getOrderById",
    value: function getOrderById(orderId, callback) {
      var postBody = null; // verify the required parameter 'orderId' is set

      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getOrderById");
      }

      var pathParams = {
        'orderId': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/xml', 'application/json'];
      var returnType = _Order.default;
      return this.apiClient.callApi('/store/order/{orderId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the placeOrder operation.
     * @callback module:api/StoreApi~placeOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Place an order for a pet
     * @param {module:model/Order} body order placed for purchasing the pet
     * @param {module:api/StoreApi~placeOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Order}
     */

  }, {
    key: "placeOrder",
    value: function placeOrder(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling placeOrder");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/xml', 'application/json'];
      var returnType = _Order.default;
      return this.apiClient.callApi('/store/order', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return StoreApi;
}();

exports.default = StoreApi;