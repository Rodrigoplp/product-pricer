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
 * Verifies if input value for number of items is valid
 * @param {e} number
 * @return {sucess: bool, error: string}
 */
const validItems = e => {
  if (isNaN(e)) {
    return {
      success: false,
      error: 'Invalid format for number of items. Please provide a number.'
    }
  }

  return {
    success: true,
    error: null
  }
}

/**
 * Verifies if input value for individual price is valid
 * @param {e} number
 * @return {sucess: bool, error: string}
 */
const validPrice = e => {
  if (isNaN(e)) {
    return {
      success: false,
      error: 'Invalid format for individual price. Please provide a number.'
    }
  }

  return {
    success: true,
    error: null
  }
}

/**
 * Verifies if input value for state code is valid
 * @param {e} string
 * @return {sucess: bool, error: string}
 */
const validState = e => {
  if (taxRate[e] !== undefined) {
    return {
      success: true,
      error: null
    }
  }

  return {
    success: false,
    error: 'Invalid state or no tax rate registered for this state.'
  }
}

/**
 * Calls validators for each input variable and summarises responses
 * @param {items} number
 * @param {price} number
 * @param {state} string
 * @return {success: bool, error: string}
 */
const validInput = (items, price, state) => {
  let checks = [validItems(items), validPrice(price), validState(state)]
  let success = true
  let error = null

  let result = checks.filter(e => e.success === false)

  if (result.length > 0) {
    return {
      success: false,
      error: result[0].error
    }
  }

  return {
    success: true,
    error: null
  }
}

/**
 * Calculates total price of a product
 * @param {items} number
 * @param {price} number
 * @param {state} string
 * @return {number}
 */
exports.pricer = (items, price, state) => {
  let validation = validInput(items, price, state)

  if (validation.success === true) {
    let cost = items * price
    let discounted = cost * (1 - discountRate(cost))
    let taxed = discounted * (1 + taxRate[state])
    let rounded = Math.round((taxed + Number.EPSILON) * 100) / 100

    return rounded
  }

  return validation.error
}
