# Exercises for Functions in JavaScript

## Thank Customers
#### Create a function that…
- is named thankCustomers
- return the string “Thanks for dining with us. Your order will be ready soon.” 

#### Create a function that…
- is named thankCustomersByName
- return the string “[customerName], thanks for dining with us. Your order will be ready soon.” 

#### Create a function that…
- is named thankCustomersByArgument
- reuse body of thankCustomersByName; however, replace customerName in the return string with arguments[0]

## Sentence Completion
#### Create a function that…
- is named completeStaticSentence
- return the string “I love eating toasted bagels withh Philly cream cheese.” 
- In the body of completeStaticSentence, make each word be a function that returns that word—when combined, will return the sentence.

#### Create a function that…
- is named completeDynamicSentence
return the same string in completeStaticSentence
- This time, use parameters and arguments.

#### Create a function that…
- This time, use the keyword arguments


## e-Gift Card
#### Create a function that…
- is named orderGiftCard
accepts three parameters: brand, credit card number, and email address
- if the brand isn’t a string, credit card number isn’t 8 digits, and the email address isn’t a string, return a message saying “This order cannot be processed. Required information is missing.”
- pretend that a function named estimatedDelivery has been provided; moreover, it returns a date in this format: “[[integer]] days”.
- use estimatedDelivery in orderGiftCard
- return the following message in orderGiftCard: “Your order for a [[brand]] with card [[credit card number]] will be available in [[estimatedDelivery()]].”