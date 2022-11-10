# Dynamic Selectors
This small JS replacement will modify Shopify's option system to dynamically hide options from the user that don't exist. This current build will only work with pill selectors, not drop down boxes.

## Desired Outcome
By the end of this installation, you too can have user friendly option lists.

![Dynamic Selectors in action](/dynamic-selectors.gif?v=4)

## Prerequisites
1. Shopify 2.0 Dawn Theme (currently tested on 7.x).
2. Product page must be configured with pill selectors (not drop down boxes).

## Warnings
1. *This is an advanced tutorial and should only be done if you have some understanding of coding.* 
2. USE AT YOUR OWN RISK. The author of this file cannot offer guarantees, warranties, compensation for any loss of income, or any support for using this hack.
3. This modification is done directly to one of Shopify's files, if this file is modified by Shopify in an update, it may stop working or conflict with Shopify's functionality. 

If you have any issues with this code, simply remove any code blocks marked "Dynamic Selectors Start"/"Dynamic Selectors End"

## Installation
1. In the "assets/global.js" file, find the following line "class VariantSelects", find the closing "}" a few lines blow this and select a block through to the "onVariantChange() {" line. See below reference example:
![Step 1](/dynamic-selects-step-1.png?v=1)
2. Copy and paste the contents of [this file](/global-addition.js) and replace the selected block in Step 1.
3. And that's all, folks! Enjoy!
