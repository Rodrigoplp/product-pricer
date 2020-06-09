var expect = require('chai').expect
var { pricer } = require('../index')

describe('Product pricer', function() {
  describe('Validator', function() {
    it('should return a warning in case the input for number of items is not valid', function () {
      var result  = pricer('Nine hundred', 1, 'ON')

      expect(result).to.equal('Invalid format for number of items. Please provide a number.')
    })

    it('should return a warning in case the input for individual price is not valid', function () {
      var result  = pricer(999, 'One dollar', 'ON')

      expect(result).to.equal('Invalid format for individual price. Please provide a number.')
    })

    it('should return a warning in case required state is not in tax rate array', function () {
      var result  = pricer(999, 1, 'NL')

      expect(result).to.equal('Invalid state or no tax rate registered for this state.')
    })
  })

  describe('In Alberta', function() {
    it('should apply 5% taxes and 0% discount for products below $1000', function() {
      var result = pricer(999, 1, 'AB')

      expect(result).to.equal(1048.95)
    })

    it('should apply 5% taxes and 3% discount for products between $1000 and $5000', function() {
      var result = pricer(4999, 1, 'AB')

      expect(result).to.equal(5091.48)
    })

    it('should apply 5% taxes and 5% discount for products between $5000 and $7000', function() {
      var result = pricer(6999, 1, 'AB')

      expect(result).to.equal(6981.50)
    })

    it('should apply 5% taxes and 7% discount for products between $7000 and $10000', function() {
      var result = pricer(9999, 1, 'AB')

      expect(result).to.equal(9764.02)
    })

    it('should apply 5% taxes and 10% discount for products above $10000', function() {
      var result = pricer(11000, 1, 'AB')

      expect(result).to.equal(10395.00)
    })
  })

  describe('In Ontario', function() {
    it('should apply 13% taxes and 0% discount for products below $1000', function() {
      var result = pricer(999, 1, 'ON')

      expect(result).to.equal(1128.87)
    })

    it('should apply 13% taxes and 3% discount for products between $1000 and $5000', function() {
      var result = pricer(4999, 1, 'ON')

      expect(result).to.equal(5479.40)
    })

    it('should apply 13% taxes and 5% discount for products between $5000 and $7000', function() {
      var result = pricer(6999, 1, 'ON')

      expect(result).to.equal(7513.43)
    })

    it('should apply 13% taxes and 7% discount for products between $7000 and $10000', function() {
      var result = pricer(9999, 1, 'ON')

      expect(result).to.equal(10507.95)
    })

    it('should apply 13% taxes and 10% discount for products above $10000', function() {
      var result = pricer(11000, 1, 'ON')

      expect(result).to.equal(11187.00)
    })
  })

  describe('In Quebec', function() {
    it('should apply 14.975% taxes and 0% discount for products below $1000', function() {
      var result = pricer(999, 1, 'QC')

      expect(result).to.equal(1148.60)
    })

    it('should apply 14.975% taxes and 3% discount for products between $1000 and $5000', function() {
      var result = pricer(4999, 1, 'QC')

      expect(result).to.equal(5575.17)
    })

    it('should apply 14.975% taxes and 5% discount for products between $5000 and $7000', function() {
      var result = pricer(6999, 1, 'QC')

      expect(result).to.equal(7644.75)
    })

    it('should apply 14.975% taxes and 7% discount for products between $7000 and $10000', function() {
      var result = pricer(9999, 1, 'QC')

      expect(result).to.equal(10691.61)
    })

    it('should apply 14.975% taxes and 10% discount for products above $10000', function() {
      var result = pricer(11000, 1, 'QC')

      expect(result).to.equal(11382.53)
    })
  })

  describe('In Michigan', function() {
    it('should apply 6% taxes and 0% discount for products below $1000', function() {
      var result = pricer(999, 1, 'MI')

      expect(result).to.equal(1058.94)
    })

    it('should apply 6% taxes and 3% discount for products between $1000 and $5000', function() {
      var result = pricer(4999, 1, 'MI')

      expect(result).to.equal(5139.97)
    })

    it('should apply 6% taxes and 5% discount for products between $5000 and $7000', function() {
      var result = pricer(6999, 1, 'MI')

      expect(result).to.equal(7047.99)
    })

    it('should apply 6% taxes and 7% discount for products between $7000 and $10000', function() {
      var result = pricer(9999, 1, 'MI')

      expect(result).to.equal(9857.01)
    })

    it('should apply 6% taxes and 10% discount for products above $10000', function() {
      var result = pricer(11000, 1, 'MI')

      expect(result).to.equal(10494.00)
    })
  })

  describe('In Delaware', function() {
    it('should apply 0% taxes and 0% discount for products below $1000', function() {
      var result = pricer(999, 1, 'DE')

      expect(result).to.equal(999.00)
    })

    it('should apply 0% taxes and 3% discount for products between $1000 and $5000', function() {
      var result = pricer(4999, 1, 'DE')

      expect(result).to.equal(4849.03)
    })

    it('should apply 0% taxes and 5% discount for products between $5000 and $7000', function() {
      var result = pricer(6999, 1, 'DE')

      expect(result).to.equal(6649.05)
    })

    it('should apply 0% taxes and 7% discount for products between $7000 and $10000', function() {
      var result = pricer(9999, 1, 'DE')

      expect(result).to.equal(9299.07)
    })

    it('should apply 0% taxes and 10% discount for products above $10000', function() {
      var result = pricer(11000, 1, 'DE')

      expect(result).to.equal(9900.00)
    })
  })
})
