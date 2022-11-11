# Dynamic Selectors
This small JS hack will modify Shopify's option system to dynamically hide options from the user that don't exist. This current build will only work with pill selectors, not drop down boxes.

## Desired Outcome
By the end of this installation, you too can have user friendly option lists.

![Dynamic Selectors in action](/dynamic-selectors.gif?v=5)

## Prerequisites
1. Shopify 2.0 Dawn Theme (currently tested on 7.x).
2. Product page must be configured with pill selectors (not drop down boxes).

## Warnings
1. *This is an advanced tutorial and should only be done if you have some understanding of coding.* 
2. USE AT YOUR OWN RISK. The author of this file cannot offer guarantees, warranties, compensation for any loss of income, or any support for using this hack.
3. This modification is done directly to one of Shopify's files, if this file is modified by Shopify in an update, it may stop working or conflict with Shopify's functionality.
4. Keep an eye out for changes on this repository, there may be bug fixes.

If you have any issues with this code, simply remove any code blocks marked "Dynamic Selectors Start"/"Dynamic Selectors End"

## Installation
1. Find and edit the "assets/global.js" file in your Dawn theme.
2. Find the line containing "class VariantSelects", we will be making modifications to this class.
3. Copy the following code and paste it just **BEFORE** the closing "}" of the "constructor" function:

```
    /* *** Dynamic Selectors - Part 1 - Start *** */
    this.rebuildOptions();
    /* *** Dynamic Selectors - Part 1 - End *** */
```

4. Copy the contents of [this file](/global-modify-step-2.js) and paste it just **AFTER** the closing "}" of the "constructor" function.
5. Your "constructor" function should now look like this:

![Step 1 & 2](/dynamic-selectors-step-1-2.png)

5. Find the "onVariantChange()" function, we will be modifying the end of this function.
6. Copy the following code and paste it just **BEFORE** the closing "}" of the "onVariantChange" function:

```
    /* *** Dynamic Selectors - Part 3 - Start *** */
    this.rebuildOptions();
    /* *** Dynamic Selectors - Part 3 - End *** */
```

7. Your "onVariantChange" function should now look like this:

![Step 3](/dynamic-selectors-step-3.png)

8. And that's all, folks! Enjoy!
