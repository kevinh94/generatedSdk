"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApiResponse = _interopRequireDefault(require("../model/ApiResponse"));

var _Pet = _interopRequireDefault(require("../model/Pet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Pet service.
* @module api/PetApi
* @version 1.0.0
*/
var PetApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PetApi. 
  * @alias module:api/PetApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PetApi(apiClient) {
    _classCallCheck(this, PetApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * Callback function to receive the result of the addPet operation.
   * @callback module:api/PetApi~addPetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add a new pet to the store
   * @param {module:model/Pet} body Pet object that needs to be added to the store
   * @param {module:api/PetApi~addPetCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(PetApi, [{
    key: "addPet",
    value: function addPet(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addPet");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['petstore_auth'];
      var contentTypes = ['application/json', 'application/xml'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/pet', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deletePet operation.
     * @callback module:api/PetApi~deletePetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a pet
     * @param {Number} petId Pet id to delete
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey 
     * @param {module:api/PetApi~deletePetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deletePet",
    value: function deletePet(petId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'petId' is set

      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling deletePet");
      }

      var pathParams = {
        'petId': petId
      };
      var queryParams = {};
      var headerParams = {
        'api_key': opts['apiKey']
      };
      var formParams = {};
      var authNames = ['petstore_auth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/pet/{petId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the findPetsByStatus operation.
     * @callback module:api/PetApi~findPetsByStatusCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Pet>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Finds Pets by status
     * Multiple status values can be provided with comma separated strings
     * @param {Array.<module:model/String>} status Status values that need to be considered for filter
     * @param {module:api/PetApi~findPetsByStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Pet>}
     */

  }, {
    key: "findPetsByStatus",
    value: function findPetsByStatus(status, callback) {
      var postBody = null; // verify the required parameter 'status' is set

      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling findPetsByStatus");
      }

      var pathParams = {};
      var queryParams = {
        'status': this.apiClient.buildCollectionParam(status, 'csv')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['petstore_auth'];
      var contentTypes = [];
      var accepts = ['application/xml', 'application/json'];
      var returnType = [_Pet.default];
      return this.apiClient.callApi('/pet/findByStatus', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the findPetsByTags operation.
     * @callback module:api/PetApi~findPetsByTagsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Pet>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Finds Pets by tags
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param {Array.<String>} tags Tags to filter by
     * @param {module:api/PetApi~findPetsByTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Pet>}
     */

  }, {
    key: "findPetsByTags",
    value: function findPetsByTags(tags, callback) {
      var postBody = null; // verify the required parameter 'tags' is set

      if (tags === undefined || tags === null) {
        throw new Error("Missing the required parameter 'tags' when calling findPetsByTags");
      }

      var pathParams = {};
      var queryParams = {
        'tags': this.apiClient.buildCollectionParam(tags, 'csv')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['petstore_auth'];
      var contentTypes = [];
      var accepts = ['application/xml', 'application/json'];
      var returnType = [_Pet.default];
      return this.apiClient.callApi('/pet/findByTags', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPetById operation.
     * @callback module:api/PetApi~getPetByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find pet by ID
     * Returns a single pet
     * @param {Number} petId ID of pet to return
     * @param {module:api/PetApi~getPetByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pet}
     */

  }, {
    key: "getPetById",
    value: function getPetById(petId, callback) {
      var postBody = null; // verify the required parameter 'petId' is set

      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling getPetById");
      }

      var pathParams = {
        'petId': petId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/xml', 'application/json'];
      var returnType = _Pet.default;
      return this.apiClient.callApi('/pet/{petId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updatePet operation.
     * @callback module:api/PetApi~updatePetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing pet
     * @param {module:model/Pet} body Pet object that needs to be added to the store
     * @param {module:api/PetApi~updatePetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updatePet",
    value: function updatePet(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatePet");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['petstore_auth'];
      var contentTypes = ['application/json', 'application/xml'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/pet', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updatePetWithForm operation.
     * @callback module:api/PetApi~updatePetWithFormCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a pet in the store with form data
     * @param {Number} petId ID of pet that needs to be updated
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Updated name of the pet
     * @param {String} opts.status Updated status of the pet
     * @param {module:api/PetApi~updatePetWithFormCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updatePetWithForm",
    value: function updatePetWithForm(petId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'petId' is set

      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling updatePetWithForm");
      }

      var pathParams = {
        'petId': petId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'name': opts['name'],
        'status': opts['status']
      };
      var authNames = ['petstore_auth'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/pet/{petId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the uploadFile operation.
     * @callback module:api/PetApi~uploadFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * uploads an image
     * @param {Number} petId ID of pet to update
     * @param {Object} opts Optional parameters
     * @param {String} opts.additionalMetadata Additional data to pass to server
     * @param {File} opts.file file to upload
     * @param {module:api/PetApi~uploadFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */

  }, {
    key: "uploadFile",
    value: function uploadFile(petId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'petId' is set

      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling uploadFile");
      }

      var pathParams = {
        'petId': petId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'additionalMetadata': opts['additionalMetadata'],
        'file': opts['file']
      };
      var authNames = ['petstore_auth'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _ApiResponse.default;
      return this.apiClient.callApi('/pet/{petId}/uploadImage', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PetApi;
}();

exports.default = PetApi;