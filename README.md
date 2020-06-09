# Product pricer

A JavaScript library to calculate the total price of a product, given:

* Number of items;
* Individual price;
* Code of the state.

The total price is calculated by:
 
* calculate the total cost for the items
* deduct discount based on the quantity
* add sales tax based on the province/state code
 
The following tables give the discount rate and tax rates:
 
| Order Value | Discount Rate |
| ------------- |-------------:|
| $1,000        | 3% |
| $5,000        | 5% |
| $7,000        | 7% |
| $10,000       | 10% |
 
| Province | Tax Rate |
| ------------- |-------------:|
| AB | 5% |
| ON | 13% |
| QC | 14.975% |
| MI | 6% |
| DE | 0% |
 
## Example 1:
 
```
Input: 500 items, $1 per item, Ontario
Output: $565.00
```

## Example 2:
 
```
Input: 3600 items, $2.25 per item, Michigan
Output: $7984.98
```

## Runtime versions

Mocha requires Node.js v8.0.0 or newer.

## Install dependencies

To use this library it is necessary to have NodeJS and NPM installed.

1. Install dependencies

```
npm install
```

## Run tests

```
npm test
```
