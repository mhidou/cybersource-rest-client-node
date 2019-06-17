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
    root.CyberSource.PtsV2PaymentsReversalsPost201ResponseProcessorInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsReversalsPost201ResponseProcessorInformation model module.
   * @module model/PtsV2PaymentsReversalsPost201ResponseProcessorInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsReversalsPost201ResponseProcessorInformation</code>.
   * @alias module:model/PtsV2PaymentsReversalsPost201ResponseProcessorInformation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>PtsV2PaymentsReversalsPost201ResponseProcessorInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsReversalsPost201ResponseProcessorInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsReversalsPost201ResponseProcessorInformation} The populated <code>PtsV2PaymentsReversalsPost201ResponseProcessorInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('transactionId')) {
        obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
      }
      if (data.hasOwnProperty('responseCode')) {
        obj['responseCode'] = ApiClient.convertToType(data['responseCode'], 'String');
      }
      if (data.hasOwnProperty('responseCategoryCode')) {
        obj['responseCategoryCode'] = ApiClient.convertToType(data['responseCategoryCode'], 'String');
      }
      if (data.hasOwnProperty('forwardedAcquirerCode')) {
        obj['forwardedAcquirerCode'] = ApiClient.convertToType(data['forwardedAcquirerCode'], 'String');
      }
      if (data.hasOwnProperty('masterCardServiceCode')) {
        obj['masterCardServiceCode'] = ApiClient.convertToType(data['masterCardServiceCode'], 'String');
      }
      if (data.hasOwnProperty('masterCardServiceReplyCode')) {
        obj['masterCardServiceReplyCode'] = ApiClient.convertToType(data['masterCardServiceReplyCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Processor transaction ID.  This value identifies the transaction on a host system. This value is supported only for Moneris. It contains this information:   - Terminal used to process the transaction  - Shift during which the transaction took place  - Batch number  - Transaction number within the batch  You must store this value. If you give the customer a receipt, display this value on the receipt.  Example For the value 66012345001069003:   - Terminal ID = 66012345  - Shift number = 001  - Batch number = 069  - Transaction number = 003 
   * @member {String} transactionId
   */
  exports.prototype['transactionId'] = undefined;
  /**
   * For most processors, this is the error message sent directly from the bank. Returned only when the processor returns this value.  **Important** Do not use this field to evaluate the result of the authorization.  #### AIBMS If this value is `08`, you can accept the transaction if the customer provides you with identification.  #### Atos This value is the response code sent from Atos and it might also include the response code from the bank. Format: `aa,bb` with the two values separated by a comma and where: - `aa` is the two-digit error message from Atos. - `bb` is the optional two-digit error message from the bank.  #### Comercio Latino This value is the status code and the error or response code received from the processor separated by a colon. Format: [status code]:E[error code] or [status code]:R[response code] Example `2:R06`  #### JCN Gateway Processor-defined detail error code. The associated response category code is in the `responseCategoryCode` field. 
   * @member {String} responseCode
   */
  exports.prototype['responseCode'] = undefined;
  /**
   * Processor-defined response category code. The associated detail error code is in the `responseCode` field of the service you requested.  This field is supported only for:   - Japanese issuers  - Domestic transactions in Japan  - Comercio Latino—processor transaction ID required for troubleshooting  **Maximum length for processors**:   - Comercio Latino: 32  - All other processors: 3 
   * @member {String} responseCategoryCode
   */
  exports.prototype['responseCategoryCode'] = undefined;
  /**
   * Name of the Japanese acquirer that processed the transaction. Returned only for CCS (CAFIS) and JCN Gateway. Please contact the CyberSource Japan Support Group for more information. 
   * @member {String} forwardedAcquirerCode
   */
  exports.prototype['forwardedAcquirerCode'] = undefined;
  /**
   * Mastercard service that was used for the transaction. Mastercard provides this value to CyberSource.  Possible value:  - 53: Mastercard card-on-file token service  #### CyberSource through VisaNet The value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCR6 - Position: 133-134 - Field: Mastercard Merchant on-behalf service. **Note** This field is returned only for CyberSource through VisaNet. 
   * @member {String} masterCardServiceCode
   */
  exports.prototype['masterCardServiceCode'] = undefined;
  /**
   * Result of the Mastercard card-on-file token service. Mastercard provides this value to CyberSource.  Possible values:   - `C`: Service completed successfully.  - `F`: One of the following:    - Incorrect Mastercard POS entry mode. The Mastercard POS entry mode should be 81 for an authorization or      authorization reversal.    - Incorrect Mastercard POS entry mode. The Mastercard POS entry mode should be 01 for a tokenized request.    - Token requestor ID is missing or formatted incorrectly.  - `I`: One of the following:    - Invalid token requestor ID.    - Suspended or deactivated token.    - Invalid token (not in mapping table).  - `T`: Invalid combination of token requestor ID and token.  - `U`: Expired token.  - `W`: Primary account number (PAN) listed in electronic warning bulletin.  **Note** This field is returned only for **CyberSource through VisaNet**. 
   * @member {String} masterCardServiceReplyCode
   */
  exports.prototype['masterCardServiceReplyCode'] = undefined;



  return exports;
}));


