"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Category = _interopRequireDefault(require("./Category"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Pet model module.
 * @module model/Pet
 * @version 1.0.0
 */
var Pet = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Pet</code>.
   * A pet for sale in the pet store
   * @alias module:model/Pet
   * @param name {String} 
   * @param photoUrls {Array.<String>} 
   */
  function Pet(name, photoUrls) {
    _classCallCheck(this, Pet);

    Pet.initialize(this, name, photoUrls);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Pet, null, [{
    key: "initialize",
    value: function initialize(obj, name, photoUrls) {
      obj['name'] = name;
      obj['photoUrls'] = photoUrls;
    }
    /**
     * Constructs a <code>Pet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pet} obj Optional instance to populate.
     * @return {module:model/Pet} The populated <code>Pet</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Pet();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient.default.convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('category')) {
          obj['category'] = _Category.default.constructFromObject(data['category']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient.default.convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('photoUrls')) {
          obj['photoUrls'] = _ApiClient.default.convertToType(data['photoUrls'], ['String']);
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient.default.convertToType(data['tags'], [_Tag.default]);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient.default.convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Pet;
}();
/**
 * @member {Number} id
 */


Pet.prototype['id'] = undefined;
/**
 * @member {module:model/Category} category
 */

Pet.prototype['category'] = undefined;
/**
 * @member {String} name
 */

Pet.prototype['name'] = undefined;
/**
 * @member {Array.<String>} photoUrls
 */

Pet.prototype['photoUrls'] = undefined;
/**
 * @member {Array.<module:model/Tag>} tags
 */

Pet.prototype['tags'] = undefined;
/**
 * pet status in the store
 * @member {module:model/Pet.StatusEnum} status
 */

Pet.prototype['status'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

Pet['StatusEnum'] = {
  /**
   * value: "available"
   * @const
   */
  "available": "available",

  /**
   * value: "pending"
   * @const
   */
  "pending": "pending",

  /**
   * value: "sold"
   * @const
   */
  "sold": "sold"
};
var _default = Pet;
exports.default = _default;