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
    define(['ApiClient', 'model/Ptsv2paymentsidrefundsProcessingInformationRecurringOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsidrefundsProcessingInformationRecurringOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsidrefundsProcessingInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsidrefundsProcessingInformationRecurringOptions);
  }
}(this, function(ApiClient, Ptsv2paymentsidrefundsProcessingInformationRecurringOptions) {
  'use strict';




  /**
   * The Ptsv2paymentsidrefundsProcessingInformation model module.
   * @module model/Ptsv2paymentsidrefundsProcessingInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidrefundsProcessingInformation</code>.
   * @alias module:model/Ptsv2paymentsidrefundsProcessingInformation
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Ptsv2paymentsidrefundsProcessingInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidrefundsProcessingInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidrefundsProcessingInformation} The populated <code>Ptsv2paymentsidrefundsProcessingInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('paymentSolution')) {
        obj['paymentSolution'] = ApiClient.convertToType(data['paymentSolution'], 'String');
      }
      if (data.hasOwnProperty('reconciliationId')) {
        obj['reconciliationId'] = ApiClient.convertToType(data['reconciliationId'], 'String');
      }
      if (data.hasOwnProperty('linkId')) {
        obj['linkId'] = ApiClient.convertToType(data['linkId'], 'String');
      }
      if (data.hasOwnProperty('reportGroup')) {
        obj['reportGroup'] = ApiClient.convertToType(data['reportGroup'], 'String');
      }
      if (data.hasOwnProperty('visaCheckoutId')) {
        obj['visaCheckoutId'] = ApiClient.convertToType(data['visaCheckoutId'], 'String');
      }
      if (data.hasOwnProperty('purchaseLevel')) {
        obj['purchaseLevel'] = ApiClient.convertToType(data['purchaseLevel'], 'String');
      }
      if (data.hasOwnProperty('recurringOptions')) {
        obj['recurringOptions'] = Ptsv2paymentsidrefundsProcessingInformationRecurringOptions.constructFromObject(data['recurringOptions']);
      }
      if (data.hasOwnProperty('industryDataType')) {
        obj['industryDataType'] = ApiClient.convertToType(data['industryDataType'], 'String');
      }
    }
    return obj;
  }

  /**
   * Type of digital payment solution for the transaction. Possible Values:   - `visacheckout`: Visa Checkout. This value is required for Visa Checkout transactions. For details, see `payment_solution` field description in [Visa Checkout Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/VCO_SCMP_API/html/)  - `001`: Apple Pay.  - `004`: Cybersource In-App Solution.  - `005`: Masterpass. This value is required for Masterpass transactions on OmniPay Direct. For details, see \"Masterpass\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  - `006`: Android Pay.  - `007`: Chase Pay.  - `008`: Samsung Pay.  - `012`: Google Pay.  - `013`: Cybersource P2PE Decryption  - `014`: Mastercard credential on file (COF) payment network token. Returned in authorizations that use a payment network token associated with a TMS token.  - `015`: Visa credential on file (COF) payment network token. Returned in authorizations that use a payment network token associated with a TMS token.  - `027`: Click to Pay. 
   * @member {String} paymentSolution
   */
  exports.prototype['paymentSolution'] = undefined;
  /**
   * Please check with Cybersource customer support to see if your merchant account is configured correctly so you can include this field in your request. * For Payouts: max length for FDCCompass is String (22). 
   * @member {String} reconciliationId
   */
  exports.prototype['reconciliationId'] = undefined;
  /**
   * Value that links the current authorization request to the original authorization request. Set this value to the ID that was returned in the reply message from the original authorization request.  This value is used for:  - Partial authorizations - Split shipments  For details, see `link_to_request` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} linkId
   */
  exports.prototype['linkId'] = undefined;
  /**
   * Attribute that lets you define custom grouping for your processor reports. This field is supported only for **Worldpay VAP**.  For details, see `report_group` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} reportGroup
   */
  exports.prototype['reportGroup'] = undefined;
  /**
   * Identifier for the **Visa Checkout** order. Visa Checkout provides a unique order ID for every transaction in the Visa Checkout **callID** field. 
   * @member {String} visaCheckoutId
   */
  exports.prototype['visaCheckoutId'] = undefined;
  /**
   * Set this field to 3 to indicate that the request includes Level III data.
   * @member {String} purchaseLevel
   */
  exports.prototype['purchaseLevel'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidrefundsProcessingInformationRecurringOptions} recurringOptions
   */
  exports.prototype['recurringOptions'] = undefined;
  /**
   * Indicates that the transaction includes industry-specific data.  Possible Values: - `airline` - `restaurant` - `lodging` - `auto_rental` - `transit` - `healthcare_medical` - `healthcare_transit` - `transit`  #### Card Present, Airlines and Auto Rental You must set this field to `airline` in order for airline data to be sent to the processor. For example, if this field is not set to `airline` or is not included in the request, no airline data is sent to the processor.  You must set this field to `restaurant` in order for restaurant data to be sent to the processor. When this field is not set to `restaurant` or is not included in the request, no restaurant data is sent to the processor.  You must set this field to `auto_rental` in order for auto rental data to be sent to the processor. For example, if this field is not set to `auto_rental` or is not included in the request, no auto rental data is sent to the processor.  Restaurant data is supported only on CyberSource through VisaNet. 
   * @member {String} industryDataType
   */
  exports.prototype['industryDataType'] = undefined;



  return exports;
}));


