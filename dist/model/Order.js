"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Order model module.
 * @module model/Order
 * @version 1.0.0
 */
var Order = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Order</code>.
   * An order for a pets from the pet store
   * @alias module:model/Order
   */
  function Order() {
    _classCallCheck(this, Order);

    Order.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Order, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Order} obj Optional instance to populate.
     * @return {module:model/Order} The populated <code>Order</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Order();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient.default.convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('petId')) {
          obj['petId'] = _ApiClient.default.convertToType(data['petId'], 'Number');
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient.default.convertToType(data['quantity'], 'Number');
        }

        if (data.hasOwnProperty('shipDate')) {
          obj['shipDate'] = _ApiClient.default.convertToType(data['shipDate'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient.default.convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('complete')) {
          obj['complete'] = _ApiClient.default.convertToType(data['complete'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Order;
}();
/**
 * @member {Number} id
 */


Order.prototype['id'] = undefined;
/**
 * @member {Number} petId
 */

Order.prototype['petId'] = undefined;
/**
 * @member {Number} quantity
 */

Order.prototype['quantity'] = undefined;
/**
 * @member {Date} shipDate
 */

Order.prototype['shipDate'] = undefined;
/**
 * Order Status
 * @member {module:model/Order.StatusEnum} status
 */

Order.prototype['status'] = undefined;
/**
 * @member {Boolean} complete
 * @default false
 */

Order.prototype['complete'] = false;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

Order['StatusEnum'] = {
  /**
   * value: "placed"
   * @const
   */
  "placed": "placed",

  /**
   * value: "approved"
   * @const
   */
  "approved": "approved",

  /**
   * value: "delivered"
   * @const
   */
  "delivered": "delivered"
};
var _default = Order;
exports.default = _default;