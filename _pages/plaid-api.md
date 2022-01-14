---
permalink: /plaid-api/
title: "ACH (Plaid) API Updates"
author_profile: false
header:
  overlay_image: /assets/images/block-header.png
---


# Overview
The Web Payments SDK now has updated API requirements for applications that support a new Plaid OAuth-based authentication flow. These new requirements affect how Plaid authenticates a buyer’s bank account to make an ACH payment.

To migrate to the updated Plaid OAuth-based authentication flow, developers must update their application with the following changes in the Web Payments SDK.

For more information, see [Take ACH Bank Transfer Payments](https://developer.squareup.com/docs/web-payments/add-ach). 

# Notes and Limitations

* The ACH payment method must be initialized as early as possible to get the redirect result.
* The ACH ‘ontokenization’ event listener should come before any calls to tokenize.
* The `RedirectURI` must not contain query parameters; if they are present, you will see an error..
* **The `RedirectURI` should be able to repopulate the payment flow, and re-initialize the Web Payments SDK form from either the URI or the transaction ID. The transaction ID will be added to the URI as a query parameter.**


# Update the API
### Step 1: In the ACH payment object, add the `redirectURI` and `transactionId` parameters to the `payments.ach` object property.
~~~~~
const ach = payments.ach({ redirectURI, transactionId });
~~~~~

### Step 2: Add the ACH ‘ontokenization’ event listener before your `.tokenize(...)` call
~~~~~
ach.addEventListener(‘ontokenization’, (event) => { 
  const { tokenResult, error } = event.details;
  return;
});
~~~~~

If you no longer see warnings about missing parameters, your implementation is correct.

You will be able to obtain the tokenResult from either .tokenize() or the ‘ontokenization’ event until February 15th. After the 15th, we will only support the ‘ontokenization’ event. We recommend fully migrating to the ‘ontokenization’ event before this date.

