/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsGet200ResponseApplicationInformationApplications = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponseApplicationInformationApplications model module.
   * @module model/TssV2TransactionsGet200ResponseApplicationInformationApplications
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponseApplicationInformationApplications</code>.
   * @alias module:model/TssV2TransactionsGet200ResponseApplicationInformationApplications
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponseApplicationInformationApplications</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponseApplicationInformationApplications} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponseApplicationInformationApplications} The populated <code>TssV2TransactionsGet200ResponseApplicationInformationApplications</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('reasonCode')) {
        obj['reasonCode'] = ApiClient.convertToType(data['reasonCode'], 'String');
      }
      if (data.hasOwnProperty('rCode')) {
        obj['rCode'] = ApiClient.convertToType(data['rCode'], 'String');
      }
      if (data.hasOwnProperty('rFlag')) {
        obj['rFlag'] = ApiClient.convertToType(data['rFlag'], 'String');
      }
      if (data.hasOwnProperty('reconciliationId')) {
        obj['reconciliationId'] = ApiClient.convertToType(data['reconciliationId'], 'String');
      }
      if (data.hasOwnProperty('rMessage')) {
        obj['rMessage'] = ApiClient.convertToType(data['rMessage'], 'String');
      }
      if (data.hasOwnProperty('returnCode')) {
        obj['returnCode'] = ApiClient.convertToType(data['returnCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * The CyberSource payment application processed for the transaction. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The description for this field is not available.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * 3-digit reason code that indicates why the customer profile payment succeeded or failed.
   * @member {String} reasonCode
   */
  exports.prototype['reasonCode'] = undefined;
  /**
   * Indicates whether the service request was successful. Possible values:  - `-1`: An error occurred. - `0`: The request was declined. - `1`: The request was successful. 
   * @member {String} rCode
   */
  exports.prototype['rCode'] = undefined;
  /**
   * One-word description of the result of the application. 
   * @member {String} rFlag
   */
  exports.prototype['rFlag'] = undefined;
  /**
   * Reference number that you use to reconcile your CyberSource reports with your processor reports. 
   * @member {String} reconciliationId
   */
  exports.prototype['reconciliationId'] = undefined;
  /**
   * Message that explains the reply flag for the application. 
   * @member {String} rMessage
   */
  exports.prototype['rMessage'] = undefined;
  /**
   * The description for this field is not available.
   * @member {String} returnCode
   */
  exports.prototype['returnCode'] = undefined;



  return exports;
}));


