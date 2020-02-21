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
    define(['ApiClient', 'model/Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation', 'model/Ptsv2paymentsTravelInformationTransitAirlineLegs', 'model/Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation'), require('./Ptsv2paymentsTravelInformationTransitAirlineLegs'), require('./Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsTravelInformationTransitAirline = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation, root.CyberSource.Ptsv2paymentsTravelInformationTransitAirlineLegs, root.CyberSource.Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer);
  }
}(this, function(ApiClient, Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation, Ptsv2paymentsTravelInformationTransitAirlineLegs, Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer) {
  'use strict';




  /**
   * The Ptsv2paymentsTravelInformationTransitAirline model module.
   * @module model/Ptsv2paymentsTravelInformationTransitAirline
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsTravelInformationTransitAirline</code>.
   * @alias module:model/Ptsv2paymentsTravelInformationTransitAirline
   * @class
   */
  var exports = function() {
    var _this = this;







































  };

  /**
   * Constructs a <code>Ptsv2paymentsTravelInformationTransitAirline</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsTravelInformationTransitAirline} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsTravelInformationTransitAirline} The populated <code>Ptsv2paymentsTravelInformationTransitAirline</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bookingReferenceNumber')) {
        obj['bookingReferenceNumber'] = ApiClient.convertToType(data['bookingReferenceNumber'], 'String');
      }
      if (data.hasOwnProperty('carrierName')) {
        obj['carrierName'] = ApiClient.convertToType(data['carrierName'], 'String');
      }
      if (data.hasOwnProperty('ticketIssuer')) {
        obj['ticketIssuer'] = Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer.constructFromObject(data['ticketIssuer']);
      }
      if (data.hasOwnProperty('ticketNumber')) {
        obj['ticketNumber'] = ApiClient.convertToType(data['ticketNumber'], 'String');
      }
      if (data.hasOwnProperty('checkDigit')) {
        obj['checkDigit'] = ApiClient.convertToType(data['checkDigit'], 'String');
      }
      if (data.hasOwnProperty('restrictedTicketIndicator')) {
        obj['restrictedTicketIndicator'] = ApiClient.convertToType(data['restrictedTicketIndicator'], 'Number');
      }
      if (data.hasOwnProperty('transactionType')) {
        obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'Number');
      }
      if (data.hasOwnProperty('extendedPaymentCode')) {
        obj['extendedPaymentCode'] = ApiClient.convertToType(data['extendedPaymentCode'], 'String');
      }
      if (data.hasOwnProperty('passengerName')) {
        obj['passengerName'] = ApiClient.convertToType(data['passengerName'], 'String');
      }
      if (data.hasOwnProperty('customerCode')) {
        obj['customerCode'] = ApiClient.convertToType(data['customerCode'], 'String');
      }
      if (data.hasOwnProperty('documentType')) {
        obj['documentType'] = ApiClient.convertToType(data['documentType'], 'String');
      }
      if (data.hasOwnProperty('documentNumber')) {
        obj['documentNumber'] = ApiClient.convertToType(data['documentNumber'], 'String');
      }
      if (data.hasOwnProperty('documentNumberOfParts')) {
        obj['documentNumberOfParts'] = ApiClient.convertToType(data['documentNumberOfParts'], 'Number');
      }
      if (data.hasOwnProperty('invoiceNumber')) {
        obj['invoiceNumber'] = ApiClient.convertToType(data['invoiceNumber'], 'String');
      }
      if (data.hasOwnProperty('invoiceDate')) {
        obj['invoiceDate'] = ApiClient.convertToType(data['invoiceDate'], 'Number');
      }
      if (data.hasOwnProperty('additionalCharges')) {
        obj['additionalCharges'] = ApiClient.convertToType(data['additionalCharges'], 'String');
      }
      if (data.hasOwnProperty('totalFeeAmount')) {
        obj['totalFeeAmount'] = ApiClient.convertToType(data['totalFeeAmount'], 'String');
      }
      if (data.hasOwnProperty('clearingSequence')) {
        obj['clearingSequence'] = ApiClient.convertToType(data['clearingSequence'], 'String');
      }
      if (data.hasOwnProperty('clearingCount')) {
        obj['clearingCount'] = ApiClient.convertToType(data['clearingCount'], 'String');
      }
      if (data.hasOwnProperty('totalClearingAmount')) {
        obj['totalClearingAmount'] = ApiClient.convertToType(data['totalClearingAmount'], 'String');
      }
      if (data.hasOwnProperty('numberOfPassengers')) {
        obj['numberOfPassengers'] = ApiClient.convertToType(data['numberOfPassengers'], 'Number');
      }
      if (data.hasOwnProperty('reservationSystemCode')) {
        obj['reservationSystemCode'] = ApiClient.convertToType(data['reservationSystemCode'], 'String');
      }
      if (data.hasOwnProperty('processIdentifier')) {
        obj['processIdentifier'] = ApiClient.convertToType(data['processIdentifier'], 'String');
      }
      if (data.hasOwnProperty('ticketIssueDate')) {
        obj['ticketIssueDate'] = ApiClient.convertToType(data['ticketIssueDate'], 'String');
      }
      if (data.hasOwnProperty('electronicTicketIndicator')) {
        obj['electronicTicketIndicator'] = ApiClient.convertToType(data['electronicTicketIndicator'], 'Boolean');
      }
      if (data.hasOwnProperty('originalTicketNumber')) {
        obj['originalTicketNumber'] = ApiClient.convertToType(data['originalTicketNumber'], 'String');
      }
      if (data.hasOwnProperty('purchaseType')) {
        obj['purchaseType'] = ApiClient.convertToType(data['purchaseType'], 'String');
      }
      if (data.hasOwnProperty('creditReasonIndicator')) {
        obj['creditReasonIndicator'] = ApiClient.convertToType(data['creditReasonIndicator'], 'String');
      }
      if (data.hasOwnProperty('ticketChangeIndicator')) {
        obj['ticketChangeIndicator'] = ApiClient.convertToType(data['ticketChangeIndicator'], 'String');
      }
      if (data.hasOwnProperty('planNumber')) {
        obj['planNumber'] = ApiClient.convertToType(data['planNumber'], 'String');
      }
      if (data.hasOwnProperty('arrivalDate')) {
        obj['arrivalDate'] = ApiClient.convertToType(data['arrivalDate'], 'String');
      }
      if (data.hasOwnProperty('restrictedTicketDesciption')) {
        obj['restrictedTicketDesciption'] = ApiClient.convertToType(data['restrictedTicketDesciption'], 'String');
      }
      if (data.hasOwnProperty('exchangeTicketAmount')) {
        obj['exchangeTicketAmount'] = ApiClient.convertToType(data['exchangeTicketAmount'], 'String');
      }
      if (data.hasOwnProperty('exchangeTicketFeeAmount')) {
        obj['exchangeTicketFeeAmount'] = ApiClient.convertToType(data['exchangeTicketFeeAmount'], 'String');
      }
      if (data.hasOwnProperty('reservationType')) {
        obj['reservationType'] = ApiClient.convertToType(data['reservationType'], 'String');
      }
      if (data.hasOwnProperty('boardingFeeAmount')) {
        obj['boardingFeeAmount'] = ApiClient.convertToType(data['boardingFeeAmount'], 'String');
      }
      if (data.hasOwnProperty('legs')) {
        obj['legs'] = ApiClient.convertToType(data['legs'], [Ptsv2paymentsTravelInformationTransitAirlineLegs]);
      }
      if (data.hasOwnProperty('ancillaryInformation')) {
        obj['ancillaryInformation'] = Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation.constructFromObject(data['ancillaryInformation']);
      }
    }
    return obj;
  }

  /**
   * Reference number for the airline booking. Required if ticket numbers are not issued. 
   * @member {String} bookingReferenceNumber
   */
  exports.prototype['bookingReferenceNumber'] = undefined;
  /**
   * Name of the airline. If you do not include this field, CyberSource uses the value for your merchant name that is in the CyberSource merchant configuration database. 
   * @member {String} carrierName
   */
  exports.prototype['carrierName'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer} ticketIssuer
   */
  exports.prototype['ticketIssuer'] = undefined;
  /**
   * Ticket number. Format: English characters only 
   * @member {String} ticketNumber
   */
  exports.prototype['ticketNumber'] = undefined;
  /**
   * Check digit for the ticket number. CyberSource recommends that you validate the check digit. With Discover and Diners Club, a valid ticket number has these characteristics: - The value is numeric. - The first three digits are a valid IATA2 license plate carrier code. - The last digit is a check digit or zero (0). - All remaining digits are nonzero. 
   * @member {String} checkDigit
   */
  exports.prototype['checkDigit'] = undefined;
  /**
   * Flag that indicates whether or not the ticket is restricted (nonrefundable). Possible values: - 0: No restriction (refundable) - 1: Restricted (nonrefundable) 
   * @member {Number} restrictedTicketIndicator
   */
  exports.prototype['restrictedTicketIndicator'] = undefined;
  /**
   * Type of charge. Possible values: - 01: Charge is for an airline ticket - 02: Charge is for an item that is not an airline ticket 
   * @member {Number} transactionType
   */
  exports.prototype['transactionType'] = undefined;
  /**
   * Airline process identifier. This value is the airline’s three-digit IATA1 code which is used to process extended payment airline tickets.. 
   * @member {String} extendedPaymentCode
   */
  exports.prototype['extendedPaymentCode'] = undefined;
  /**
   * Name of the passenger to whom the ticket was issued. This will always be a single passenger's name. If there are more than one passengers, provide only the primary passenger's name. Do not include special characters such as commas, hyphens, or apostrophes. Only ASCII characters are supported. 
   * @member {String} passengerName
   */
  exports.prototype['passengerName'] = undefined;
  /**
   * 1.Reference number or code that identifies the cardholder. 2. Code provided by the cardholder. 3. Address of the ticket issuer. The first 13 characters will appear onthe cardholder’s statement. 4. Customer reference. 
   * @member {String} customerCode
   */
  exports.prototype['customerCode'] = undefined;
  /**
   * Airline document type code that specifies the purpose of the transaction. For the possible values, see Appendix A, \"Airline Document Type Codes\". 
   * @member {String} documentType
   */
  exports.prototype['documentType'] = undefined;
  /**
   * Ticket number or a value that might be a booking reference number. 
   * @member {String} documentNumber
   */
  exports.prototype['documentNumber'] = undefined;
  /**
   * Number of travel legs. Numbering for the travel legs: 0 to 3. 
   * @member {Number} documentNumberOfParts
   */
  exports.prototype['documentNumberOfParts'] = undefined;
  /**
   * Invoice number for the airline transaction. 
   * @member {String} invoiceNumber
   */
  exports.prototype['invoiceNumber'] = undefined;
  /**
   * Invoice date. The format is YYYYMMDD. If this value is included in the request, it is used in the creation of the invoice number. See \"Invoice Number,\" 
   * @member {Number} invoiceDate
   */
  exports.prototype['invoiceDate'] = undefined;
  /**
   * Description of the charge if the charge does not involve an airline ticket. For example: Excess baggage. 
   * @member {String} additionalCharges
   */
  exports.prototype['additionalCharges'] = undefined;
  /**
   * Total fee for the ticket. This value cannot exceed 99999999999999999999 (twenty 9s). 
   * @member {String} totalFeeAmount
   */
  exports.prototype['totalFeeAmount'] = undefined;
  /**
   * Total number of captures when requesting multiple partial captures for one authorization. Used along with airlineData_clearingCount to keep track of which capture is beingprocessed. For example, the second of five captures would be passed to CyberSource as airlineData_clearingSequence = 2 and airlineData_clearingCount = 5. 
   * @member {String} clearingSequence
   */
  exports.prototype['clearingSequence'] = undefined;
  /**
   * Total number of clearing messages associated with the authorization request. Format: English characters only. 
   * @member {String} clearingCount
   */
  exports.prototype['clearingCount'] = undefined;
  /**
   * Total clearing amount for all transactions in the clearing count set. If this field is not set and if the total amount from the original authorization is not NULL, CyberSource sets the total clearing amount to the total amount from the original authorization. 
   * @member {String} totalClearingAmount
   */
  exports.prototype['totalClearingAmount'] = undefined;
  /**
   * Number of passengers for whom the ticket was issued. If you do not include this field in your request, CyberSource uses a default value of 1. 
   * @member {Number} numberOfPassengers
   */
  exports.prototype['numberOfPassengers'] = undefined;
  /**
   * Code that specifies the computerized reservation system used to make the reservation and purchase the ticket. Format: English characters only 
   * @member {String} reservationSystemCode
   */
  exports.prototype['reservationSystemCode'] = undefined;
  /**
   * Airline process identifier. This value is the airline’s three-digit IATA1 code which is used to process extended payment airline tickets. 
   * @member {String} processIdentifier
   */
  exports.prototype['processIdentifier'] = undefined;
  /**
   * Date on which the transactionoccurred. Format: YYYYMMDD 
   * @member {String} ticketIssueDate
   */
  exports.prototype['ticketIssueDate'] = undefined;
  /**
   * Flag that indicates whether an electronic ticket was issued. Possible values: - true - false 
   * @member {Boolean} electronicTicketIndicator
   */
  exports.prototype['electronicTicketIndicator'] = undefined;
  /**
   * Original ticket number when the transaction is for a replacement ticket. 
   * @member {String} originalTicketNumber
   */
  exports.prototype['originalTicketNumber'] = undefined;
  /**
   * Type of purchase. Possible values: - EXC: Exchange ticket - MSC: Miscellaneous (not a ticket purchase and not a transaction related to an exchange ticket) - REF: Refund - TKT: Ticket Format: English characters only. 
   * @member {String} purchaseType
   */
  exports.prototype['purchaseType'] = undefined;
  /**
   * Reason for the credit. Possible values: - A: Cancellation of the ancillary passenger transport purchase. - B: Cancellation of the airline ticket and the passenger transport ancillary purchase. - C: Cancellation of the airline ticket. - O: Other. - P: Partial refund of the airline ticket. 
   * @member {String} creditReasonIndicator
   */
  exports.prototype['creditReasonIndicator'] = undefined;
  /**
   * Type of update. Possible values: - C: Change to the existing ticket. - N: New ticket. Format: English characters only 
   * @member {String} ticketChangeIndicator
   */
  exports.prototype['ticketChangeIndicator'] = undefined;
  /**
   * Plan number based on the fare. This value is provided by the airline. Format: English characters only 
   * @member {String} planNumber
   */
  exports.prototype['planNumber'] = undefined;
  /**
   * Date of arrival for the last leg of the trip. Format: MMDDYYYY English characters only. 
   * @member {String} arrivalDate
   */
  exports.prototype['arrivalDate'] = undefined;
  /**
   * Text that describes the ticket limitations, such as nonrefundable. Format: English characters only. 
   * @member {String} restrictedTicketDesciption
   */
  exports.prototype['restrictedTicketDesciption'] = undefined;
  /**
   * Amount of the exchanged ticket. Format: English characters only. 
   * @member {String} exchangeTicketAmount
   */
  exports.prototype['exchangeTicketAmount'] = undefined;
  /**
   * Fee for exchanging the ticket. Format: English characters only 
   * @member {String} exchangeTicketFeeAmount
   */
  exports.prototype['exchangeTicketFeeAmount'] = undefined;
  /**
   * Type of journey such as one way or round trip. 
   * @member {String} reservationType
   */
  exports.prototype['reservationType'] = undefined;
  /**
   * Boarding fee. 
   * @member {String} boardingFeeAmount
   */
  exports.prototype['boardingFeeAmount'] = undefined;
  /**
   * @member {Array.<module:model/Ptsv2paymentsTravelInformationTransitAirlineLegs>} legs
   */
  exports.prototype['legs'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation} ancillaryInformation
   */
  exports.prototype['ancillaryInformation'] = undefined;



  return exports;
}));

