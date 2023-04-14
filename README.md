# OpenX Task
Program implements 4 functionalities:

 - Retrieves user, product and shopping cart data from external API.
 - Creates a data structure containing all available product categories and the total value of
	products of a given category.
 - Finds a cart with the highest value, determines its value and full name of its owner.
 - Finds the two users living furthest away from each other.

Implementation of retreving data is placed in **fetchData.ts** file while other functionality are in **functions.ts**. Every function contains set of tests to verify edge cases and common data. For run-time type-safety I used Zod library which automatically verify response from **fakestoreapi**.



## Running Locally

1. Install dependencies using
> npm install

 - To run tests:
  > npm test
 - To run program

> npm start
