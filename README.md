# Product pricer

A JavaScript library to calculate the total price of an order, given:

- Number of items;

- Individual price;

- Code of the state.

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
