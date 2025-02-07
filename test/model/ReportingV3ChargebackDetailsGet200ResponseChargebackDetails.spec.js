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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ReportingV3ChargebackDetailsGet200ResponseChargebackDetails', function() {
    it('should create an instance of ReportingV3ChargebackDetailsGet200ResponseChargebackDetails', function() {
      // uncomment below and update the code to test ReportingV3ChargebackDetailsGet200ResponseChargebackDetails
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be.a(CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails);
    });

    it('should have the property processorMerchantId (base name: "processorMerchantId")', function() {
      // uncomment below and update the code to test the property processorMerchantId
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property merchantName (base name: "merchantName")', function() {
      // uncomment below and update the code to test the property merchantName
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property transactionReferenceNumber (base name: "transactionReferenceNumber")', function() {
      // uncomment below and update the code to test the property transactionReferenceNumber
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property merchantReferenceNumber (base name: "merchantReferenceNumber")', function() {
      // uncomment below and update the code to test the property merchantReferenceNumber
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property natureOfDispute (base name: "natureOfDispute")', function() {
      // uncomment below and update the code to test the property natureOfDispute
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property alertType (base name: "alertType")', function() {
      // uncomment below and update the code to test the property alertType
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property sign (base name: "sign")', function() {
      // uncomment below and update the code to test the property sign
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property cardType (base name: "cardType")', function() {
      // uncomment below and update the code to test the property cardType
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property originalSettlementTime (base name: "originalSettlementTime")', function() {
      // uncomment below and update the code to test the property originalSettlementTime
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property trackingNumber (base name: "trackingNumber")', function() {
      // uncomment below and update the code to test the property trackingNumber
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property requestId (base name: "requestId")', function() {
      // uncomment below and update the code to test the property requestId
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property responseDueTime (base name: "responseDueTime")', function() {
      // uncomment below and update the code to test the property responseDueTime
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property actionDescription (base name: "actionDescription")', function() {
      // uncomment below and update the code to test the property actionDescription
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property customerId (base name: "customerId")', function() {
      // uncomment below and update the code to test the property customerId
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property reasonCode (base name: "reasonCode")', function() {
      // uncomment below and update the code to test the property reasonCode
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property representmentCPTime (base name: "representmentCPTime")', function() {
      // uncomment below and update the code to test the property representmentCPTime
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property applications (base name: "applications")', function() {
      // uncomment below and update the code to test the property applications
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

    it('should have the property eventRequestedTime (base name: "eventRequestedTime")', function() {
      // uncomment below and update the code to test the property eventRequestedTime
      //var instane = new CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails();
      //expect(instance).to.be();
    });

  });

}));
