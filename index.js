const discountRate = e => {
  if (e < 1000) {
    return 0
  }
  
  if (e >= 1000 && e < 5000) {
    return 0.03
  }
  
  if (e >= 5000 && e < 7000) {
    return 0.05
  }
  
  if (e >= 7000 && e < 10000) {
    return 0.07
  }
  
  return 0.1
}

const taxRate = {
  AB: 0.05,
  ON: 0.13,
  QC: 0.14975,
  MI: 0.06,
  DE: 0
}

/**
 * Calculates total price of a product
 * @param {items} number
 * @param {price} number
 * @param {state} string
 * @return {number}
 */
exports.pricer = (items, price, state) => {
  let cost = items * price
  let discounted = cost * (1 - discountRate(cost))
  let taxed = discounted * (1 + taxRate[state])
  let rounded = Math.round((taxed + Number.EPSILON) * 100) / 100

  return rounded
}
