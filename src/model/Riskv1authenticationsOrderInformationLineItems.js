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
    define(['ApiClient', 'model/Riskv1decisionsOrderInformationPassenger'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Riskv1decisionsOrderInformationPassenger'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Riskv1authenticationsOrderInformationLineItems = factory(root.CyberSource.ApiClient, root.CyberSource.Riskv1decisionsOrderInformationPassenger);
  }
}(this, function(ApiClient, Riskv1decisionsOrderInformationPassenger) {
  'use strict';




  /**
   * The Riskv1authenticationsOrderInformationLineItems model module.
   * @module model/Riskv1authenticationsOrderInformationLineItems
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1authenticationsOrderInformationLineItems</code>.
   * @alias module:model/Riskv1authenticationsOrderInformationLineItems
   * @class
   * @param unitPrice {String} Per-item price of the product. This value cannot be negative. You can include a decimal point (.), but you cannot include any other special characters. CyberSource truncates the amount to the correct number of decimal places.  For processor-specific information, see the `amount` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  **Important** Some processors have specific requirements and limitations, such as maximum amounts and maximum field lengths. See these guides for details: - [Merchant Descriptors Using the SCMP API Guide] (https://apps.cybersource.com/library/documentation/dev_guides/Merchant_Descriptors_SCMP_API/html/) - \"Capture Information for Specific Processors\" section in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### DCC with a Third-Party Provider Set this field to the converted amount that was returned by the DCC provider. You must include either the 1st line item in the order and this field, or the request-level field `orderInformation.amountDetails.totalAmount` in your request. For details, see \"Dynamic Currency Conversion with a Third Party Provider\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### FDMS South If you accept IDR or CLP currencies, see the entry for FDMS South in the [Merchant Descriptors Using the SCMP API Guide.] (https://apps.cybersource.com/library/documentation/dev_guides/Merchant_Descriptors_SCMP_API/html/)  #### Zero Amount Authorizations If your processor supports zero amount authorizations, you can set this field to 0 for the authorization to check if the card is lost or stolen. See \"Zero Amount Authorizations\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   */
  var exports = function(unitPrice) {
    var _this = this;


    _this['unitPrice'] = unitPrice;








  };

  /**
   * Constructs a <code>Riskv1authenticationsOrderInformationLineItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1authenticationsOrderInformationLineItems} obj Optional instance to populate.
   * @return {module:model/Riskv1authenticationsOrderInformationLineItems} The populated <code>Riskv1authenticationsOrderInformationLineItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('totalAmount')) {
        obj['totalAmount'] = ApiClient.convertToType(data['totalAmount'], 'String');
      }
      if (data.hasOwnProperty('unitPrice')) {
        obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('giftCardCurrency')) {
        obj['giftCardCurrency'] = ApiClient.convertToType(data['giftCardCurrency'], 'Number');
      }
      if (data.hasOwnProperty('productSKU')) {
        obj['productSKU'] = ApiClient.convertToType(data['productSKU'], 'String');
      }
      if (data.hasOwnProperty('productDescription')) {
        obj['productDescription'] = ApiClient.convertToType(data['productDescription'], 'String');
      }
      if (data.hasOwnProperty('productName')) {
        obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
      }
      if (data.hasOwnProperty('passenger')) {
        obj['passenger'] = Riskv1decisionsOrderInformationPassenger.constructFromObject(data['passenger']);
      }
      if (data.hasOwnProperty('shippingDestinationTypes')) {
        obj['shippingDestinationTypes'] = ApiClient.convertToType(data['shippingDestinationTypes'], 'String');
      }
      if (data.hasOwnProperty('taxAmount')) {
        obj['taxAmount'] = ApiClient.convertToType(data['taxAmount'], 'String');
      }
    }
    return obj;
  }

  /**
   * Total amount for the item. Normally calculated as the unit price times quantity.  When `orderInformation.lineItems[].productCode` is \"gift_card\", this is the purchase amount total for prepaid gift cards in major units.  Example: 123.45 USD = 123 
   * @member {String} totalAmount
   */
  exports.prototype['totalAmount'] = undefined;
  /**
   * Per-item price of the product. This value cannot be negative. You can include a decimal point (.), but you cannot include any other special characters. CyberSource truncates the amount to the correct number of decimal places.  For processor-specific information, see the `amount` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  **Important** Some processors have specific requirements and limitations, such as maximum amounts and maximum field lengths. See these guides for details: - [Merchant Descriptors Using the SCMP API Guide] (https://apps.cybersource.com/library/documentation/dev_guides/Merchant_Descriptors_SCMP_API/html/) - \"Capture Information for Specific Processors\" section in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### DCC with a Third-Party Provider Set this field to the converted amount that was returned by the DCC provider. You must include either the 1st line item in the order and this field, or the request-level field `orderInformation.amountDetails.totalAmount` in your request. For details, see \"Dynamic Currency Conversion with a Third Party Provider\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### FDMS South If you accept IDR or CLP currencies, see the entry for FDMS South in the [Merchant Descriptors Using the SCMP API Guide.] (https://apps.cybersource.com/library/documentation/dev_guides/Merchant_Descriptors_SCMP_API/html/)  #### Zero Amount Authorizations If your processor supports zero amount authorizations, you can set this field to 0 for the authorization to check if the card is lost or stolen. See \"Zero Amount Authorizations\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} unitPrice
   */
  exports.prototype['unitPrice'] = undefined;
  /**
   * Number of units for this order.  The default is `1`. For an authorization or capture transaction (`processingOptions.capture` is set to `true` or `false`), this field is required when _orderInformation.lineItems[].productCode_ is not set to **default** or one of the other values that are related to shipping and/or handling.  When orderInformation.lineItems[].productCode is \"gift_card\", this is the total count of individual prepaid gift cards purchased. 
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * When `orderInformation.lineItems[].productCode` is \"gift_card\", this is the currency used for the gift card purchase.  For details, see `pa_gift_card_currency` field description in [CyberSource Payer Authentication Using the SCMP API.] (https://apps.cybersource.com/library/documentation/dev_guides/Payer_Authentication_SCMP_API/Payer_Authentication_SCMP_API.pdf)  For the possible values, see the [ISO Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf) 
   * @member {Number} giftCardCurrency
   */
  exports.prototype['giftCardCurrency'] = undefined;
  /**
   * Stock Keeping Unit (SKU) code for the product.  For an authorization or capture transaction (`processingOptions.capture` is set to `true` or `false`), this field is required when _orderInformation.lineItems[].productCode_ is not set to **default** or one of the other values that are related to shipping and/or handling. 
   * @member {String} productSKU
   */
  exports.prototype['productSKU'] = undefined;
  /**
   * Brief description of item.
   * @member {String} productDescription
   */
  exports.prototype['productDescription'] = undefined;
  /**
   * For an authorization or capture transaction (`processingOptions.capture` is set to `true` or `false`), this field is required when `orderInformation.lineItems[].productCode` is not set to `default` or one of the other values that are related to shipping and/or handling. 
   * @member {String} productName
   */
  exports.prototype['productName'] = undefined;
  /**
   * @member {module:model/Riskv1decisionsOrderInformationPassenger} passenger
   */
  exports.prototype['passenger'] = undefined;
  /**
   * Destination to where the item will be shipped. Example: Commercial, Residential, Store 
   * @member {String} shippingDestinationTypes
   */
  exports.prototype['shippingDestinationTypes'] = undefined;
  /**
   * Total tax to apply to the product. This value cannot be negative. The tax amount and the offer amount must be in the same currency. The tax amount field is additive.  The following example uses a two-exponent currency such as USD:   1. You include each line item in your request.  ..- 1st line item has amount=10.00, quantity=1, and taxAmount=0.80  ..- 2nd line item has amount=20.00, quantity=1, and taxAmount=1.60  2. The total amount authorized will be 32.40, not 30.00 with 2.40 of tax included.  If you want to include the tax amount and also request the ics_tax service, see Tax Calculation Service Using the SCMP API.  This field is frequently used for Level II and Level III transactions. For details, see `tax_amount` field description in [Level II and Level III Processing Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html/) 
   * @member {String} taxAmount
   */
  exports.prototype['taxAmount'] = undefined;



  return exports;
}));

