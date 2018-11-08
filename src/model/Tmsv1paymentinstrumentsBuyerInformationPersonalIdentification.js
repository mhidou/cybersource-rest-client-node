/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Tmsv1paymentinstrumentsBuyerInformationIssuedBy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Tmsv1paymentinstrumentsBuyerInformationIssuedBy'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Tmsv1paymentinstrumentsBuyerInformationPersonalIdentification = factory(root.CyberSource.ApiClient, root.CyberSource.Tmsv1paymentinstrumentsBuyerInformationIssuedBy);
  }
}(this, function(ApiClient, Tmsv1paymentinstrumentsBuyerInformationIssuedBy) {
  'use strict';




  /**
   * The Tmsv1paymentinstrumentsBuyerInformationPersonalIdentification model module.
   * @module model/Tmsv1paymentinstrumentsBuyerInformationPersonalIdentification
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Tmsv1paymentinstrumentsBuyerInformationPersonalIdentification</code>.
   * @alias module:model/Tmsv1paymentinstrumentsBuyerInformationPersonalIdentification
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Tmsv1paymentinstrumentsBuyerInformationPersonalIdentification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tmsv1paymentinstrumentsBuyerInformationPersonalIdentification} obj Optional instance to populate.
   * @return {module:model/Tmsv1paymentinstrumentsBuyerInformationPersonalIdentification} The populated <code>Tmsv1paymentinstrumentsBuyerInformationPersonalIdentification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('issuedBy')) {
        obj['issuedBy'] = Tmsv1paymentinstrumentsBuyerInformationIssuedBy.constructFromObject(data['issuedBy']);
      }
    }
    return obj;
  }

  /**
   * Identification Number.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Type of personal identification.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/Tmsv1paymentinstrumentsBuyerInformationIssuedBy} issuedBy
   */
  exports.prototype['issuedBy'] = undefined;



  return exports;
}));

