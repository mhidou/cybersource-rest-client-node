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
    instance = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication();
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

  describe('Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication', function() {
    it('should create an instance of Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication', function() {
      // uncomment below and update the code to test Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication();
      //expect(instance).to.be.a(CyberSource.Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication);
    });

    it('should have the property lowValueExemptionIndicator (base name: "lowValueExemptionIndicator")', function() {
      // uncomment below and update the code to test the property lowValueExemptionIndicator
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication();
      //expect(instance).to.be();
    });

    it('should have the property riskAnalysisExemptionIndicator (base name: "riskAnalysisExemptionIndicator")', function() {
      // uncomment below and update the code to test the property riskAnalysisExemptionIndicator
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication();
      //expect(instance).to.be();
    });

    it('should have the property trustedMerchantExemptionIndicator (base name: "trustedMerchantExemptionIndicator")', function() {
      // uncomment below and update the code to test the property trustedMerchantExemptionIndicator
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication();
      //expect(instance).to.be();
    });

    it('should have the property secureCorporatePaymentIndicator (base name: "secureCorporatePaymentIndicator")', function() {
      // uncomment below and update the code to test the property secureCorporatePaymentIndicator
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication();
      //expect(instance).to.be();
    });

    it('should have the property delegatedAuthenticationExemptionIndicator (base name: "delegatedAuthenticationExemptionIndicator")', function() {
      // uncomment below and update the code to test the property delegatedAuthenticationExemptionIndicator
      //var instane = new CyberSource.Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication();
      //expect(instance).to.be();
    });

  });

}));