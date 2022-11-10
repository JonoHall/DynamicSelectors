# Dynamic Selectors
This small JS replacement will modify Shopify's option system to dynamically hide options from the user that don't exist. This current build will only work with pill selectors, not drop down boxes.

## Desired Outcome
![Dynamic Selectors in action](/dynamic-selectors.gif?v=1)

## Prerequisites
1. Shopify 2.0 Dawn Theme (currently tested on 7.x).
2. Product page must be configured with pill selectors (not drop down boxes).

## Warnings
1. *This is an advanced tutorial and should only be done if you have some understanding of coding.* The author of this file cannot offer gaurantees, warantees, or support for using this.
2. This modification is done directly to one of Shopify's files, if this file is modified by Shopify in an update, it may stop working or conflict with Shopify's functionality. 

If you have any issues with this code, simply remove any code blocks marked "Dynamic Selectors Start"/"Dynamic Selectors End"

## Installation
1. In the "assets/global.js" file, find the following line "class VariantSelects", find the closing "}" a few lines blow this and select a block through to the "onVariantChange() {" line. See below reference example:
![Step 1](/dynamic-selects-step-1.png?v=1)
2. Copy and paste the following to replace the selected block in Step 1.
```js
    /* *** Dynamic Selectors Start *** */
    this.rebuildOptions();
    /* *** Dynamic Selectors End *** */
  }

  /* *** Dynamic Selectors Start *** */
  validCombo(inputValue,optionLevel,selectedOptions) {
    const productJson = JSON.parse(this.querySelector('[type="application/json"]').textContent);
    let validCombo = new Boolean(false);
    
	if(optionLevel == 1) {
		productJson.map(function(v) {
		  if(v.option1 == selectedOptions[0] && v.option2 == inputValue) {
            validCombo = true;
		  }
		});
	} else {
		productJson.map(function(v) {
		  if(v.option1 == selectedOptions[0] && v.option2 == selectedOptions[1] && v.option3 == inputValue) {
            validCombo = true;
		  }
		});
	}
    
    return validCombo;
  }
  
  rebuildOptions() {
    //get the option fieldset elements
    const fieldsets = document.querySelectorAll('fieldset.product-form__input');
    const selectedOptions = [];
    fieldsets.forEach((fieldset, index) => {
		selectedOptions[index] = fieldsets[index].querySelector('input:checked').value;
    });
	
	fieldsets.forEach((fieldset, index) => {
		//no need to run unless there is more than one option, and only needs to run on option2 and option3
		if(fieldsets.length > 1 && index > 0) {
			const inputs = fieldset.querySelectorAll('input');
            const legend = fieldset.querySelectorAll('legend')[0];
			inputs.forEach(input => {
                const label = fieldset.querySelector(`label[for="${input.id}"]`);
				if(this.validCombo(input.value,index,selectedOptions) == false) {
					label.style.display = "none";
				} else {
                    label.style.display = "";
                }
			});
            const masterSelectInput = fieldsets[index - 1].querySelector('input:checked');
            const masterSelectLabel = fieldsets[index - 1].querySelector(`label[for="${masterSelectInput.id}"]`);
            if(masterSelectLabel.style.display == 'none') {
              legend.classList.add('hidden');
            } else {
              legend.classList.remove('hidden');
            }
		}
	});
  }
  /* *** Dynamic Selectors End *** */

  onVariantChange() {
    /* *** Dynamic Selectors Start *** */
    this.rebuildOptions();
    /* *** Dynamic Selectors End *** */
```
3. And that's all folks! Enjoy!
