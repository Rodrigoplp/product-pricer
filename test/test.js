var expect = require('chai').expect
var { pricer } = require('../index')

describe('Product pricer', function() {
  describe('In Alberta', function() {
    it('should apply 5% taxes and 0% discount for products below $1000', function() {
      var result = pricer(500, 1, 'AB')

      expect(result).to.equal(565.00)
    })

    it('should apply 5% taxes and 3% discount for products between $1000 and $5000', function() {
      var result = pricer(1500, 1, 'AB')

      expect(result).to.equal(565.00)
    })

    it('should apply 5% taxes and 5% discount for products between $5000 and $7000', function() {
      var result = pricer(1500, 1, 'AB')

      expect(result).to.equal(565.00)
    })

    it('should apply 5% taxes and 7% discount for products between $7000 and $10000', function() {
      var result = pricer(1500, 1, 'AB')

      expect(result).to.equal(565.00)
    })

    it('should apply 5% taxes and 10% discount for products above $10000', function() {
      var result = pricer(1500, 1, 'AB')

      expect(result).to.equal(565.00)
    })
  })

  describe('In Ontario', function() {
    it('should apply 13% taxes and 0% discount for products below $1000', function() {
      var result = pricer(500, 1, 'ON')

      expect(result).to.equal(565.00)
    })

    it('should apply 13% taxes and 3% discount for products between $1000 and $5000', function() {
      var result = pricer(1500, 1, 'ON')

      expect(result).to.equal(565.00)
    })

    it('should apply 13% taxes and 5% discount for products between $5000 and $7000', function() {
      var result = pricer(1500, 1, 'ON')

      expect(result).to.equal(565.00)
    })

    it('should apply 13% taxes and 7% discount for products between $7000 and $10000', function() {
      var result = pricer(1500, 1, 'ON')

      expect(result).to.equal(565.00)
    })

    it('should apply 13% taxes and 10% discount for products above $10000', function() {
      var result = pricer(1500, 1, 'ON')

      expect(result).to.equal(565.00)
    })
  })

  describe('In Quebec', function() {
    it('should apply 14.975% taxes and 0% discount for products below $1000', function() {
      var result = pricer(500, 1, 'QC')

      expect(result).to.equal(565.00)
    })

    it('should apply 14.975% taxes and 3% discount for products between $1000 and $5000', function() {
      var result = pricer(1500, 1, 'QC')

      expect(result).to.equal(565.00)
    })

    it('should apply 14.975% taxes and 5% discount for products between $5000 and $7000', function() {
      var result = pricer(1500, 1, 'QC')

      expect(result).to.equal(565.00)
    })

    it('should apply 14.975% taxes and 7% discount for products between $7000 and $10000', function() {
      var result = pricer(1500, 1, 'QC')

      expect(result).to.equal(565.00)
    })

    it('should apply 14.975% taxes and 10% discount for products above $10000', function() {
      var result = pricer(1500, 1, 'QC')

      expect(result).to.equal(565.00)
    })
  })

  describe('In Michigan', function() {
    it('should apply 6% taxes and 0% discount for products below $1000', function() {
      var result = pricer(500, 1, 'MI')

      expect(result).to.equal(565.00)
    })

    it('should apply 6% taxes and 3% discount for products between $1000 and $5000', function() {
      var result = pricer(1500, 1, 'MI')

      expect(result).to.equal(565.00)
    })

    it('should apply 6% taxes and 5% discount for products between $5000 and $7000', function() {
      var result = pricer(1500, 1, 'MI')

      expect(result).to.equal(565.00)
    })

    it('should apply 6% taxes and 7% discount for products between $7000 and $10000', function() {
      var result = pricer(1500, 1, 'MI')

      expect(result).to.equal(565.00)
    })

    it('should apply 6% taxes and 10% discount for products above $10000', function() {
      var result = pricer(1500, 1, 'MI')

      expect(result).to.equal(565.00)
    })
  })

  describe('In Delaware', function() {
    it('should apply 0% taxes and 0% discount for products below $1000', function() {
      var result = pricer(500, 1, 'DE')

      expect(result).to.equal(565.00)
    })

    it('should apply 0% taxes and 3% discount for products between $1000 and $5000', function() {
      var result = pricer(1500, 1, 'DE')

      expect(result).to.equal(565.00)
    })

    it('should apply 0% taxes and 5% discount for products between $5000 and $7000', function() {
      var result = pricer(1500, 1, 'DE')

      expect(result).to.equal(565.00)
    })

    it('should apply 0% taxes and 7% discount for products between $7000 and $10000', function() {
      var result = pricer(1500, 1, 'DE')

      expect(result).to.equal(565.00)
    })

    it('should apply 0% taxes and 10% discount for products above $10000', function() {
      var result = pricer(1500, 1, 'DE')

      expect(result).to.equal(565.00)
    })
  })
})
