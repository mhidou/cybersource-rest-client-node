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
    root.CyberSource.Riskv1decisionsOrderInformationPassenger = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Riskv1decisionsOrderInformationPassenger model module.
   * @module model/Riskv1decisionsOrderInformationPassenger
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1decisionsOrderInformationPassenger</code>.
   * Contains travel-related passenger details.
   * @alias module:model/Riskv1decisionsOrderInformationPassenger
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Riskv1decisionsOrderInformationPassenger</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1decisionsOrderInformationPassenger} obj Optional instance to populate.
   * @return {module:model/Riskv1decisionsOrderInformationPassenger} The populated <code>Riskv1decisionsOrderInformationPassenger</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('nationality')) {
        obj['nationality'] = ApiClient.convertToType(data['nationality'], 'String');
      }
    }
    return obj;
  }

  /**
   * Passenger classification associated with the price of the ticket. You can use one of the following values: - `ADT`: Adult - `CNN`: Child - `INF`: Infant - `YTH`: Youth - `STU`: Student - `SCR`: Senior Citizen - `MIL`: Military 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Your company's passenger classification, such as with a frequent flyer program. In this case, you might use values such as `standard`, `gold`, or `platinum`. 
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Passenger's phone number. If the order is from outside the U.S., CyberSource recommends that you include the [ISO Standard Country Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf) 
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * Passenger's first name.
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Passenger's last name.
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * ID of the passenger to whom the ticket was issued. For example, you can use this field for the frequent flyer number. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Passenger's email address, including the full domain name, such as jdoe@example.com.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Passenger's nationality country. Use the two character ISO Standard Country Codes.
   * @member {String} nationality
   */
  exports.prototype['nationality'] = undefined;



  return exports;
}));


