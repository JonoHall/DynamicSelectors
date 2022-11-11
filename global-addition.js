    /* *** Dynamic Selectors - Part 1 - Start *** */
    this.rebuildOptions();
    /* *** Dynamic Selectors - Part 1 - End *** */

    /* *** Dynamic Selectors - Part 2 - Start *** */
    rebuildOptions() {
        //get the option sets (option1, option2 etc)
        const fieldsets = document.querySelectorAll('fieldset.product-form__input');

        //build an array of currently selected options
        const selectedOptions = [];
        fieldsets.forEach((fieldset, index) => {
            selectedOptions[index] = fieldsets[index].querySelector('input:checked').value;
        });

        //loop through the option sets
        for (var i = 0, count = fieldsets.length, change = false; i < count && !change; i++) {
            const fieldset = fieldsets[i];
            //only run if there is more than one option set
            if(i > 0) {
                const inputs = fieldset.querySelectorAll('input');
                inputs.forEach(input => {
                    //get the label for the current input and hide it if it is not a valid combo option
                    const label = fieldset.querySelector(`label[for="${input.id}"]`);
                    if(this.validCombo(input.value,i,selectedOptions) == false) {
                      if(input.checked == true){
                        const firstValidOption = fieldset.querySelector('input:not(.disabled)');
                        firstValidOption.checked = true;
                        change = true;
                        this.onVariantChange();
                      }
                      label.style.display = "none";
                    } else {
                      label.style.display = "";
                    }
                });
            }
        };
    }

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
    /* *** Dynamic Selectors - Part 2 - End *** */

    /* *** Dynamic Selectors - Part 3 - Start *** */
    this.rebuildOptions();
    /* *** Dynamic Selectors - Part 3 - End *** */
