    /* *** Dynamic Selectors Start *** */
    this.rebuildOptions();
    /* *** Dynamic Selectors End *** */
  }

    /* *** Dynamic Selectors Start *** */
    rebuildOptions() {
        //get the option sets (option1, option2 etc)
        const fieldsets = document.querySelectorAll('fieldset.product-form__input');

        //build an array of currently selected options
        const selectedOptions = [];
        fieldsets.forEach((fieldset, index) => {
            selectedOptions[index] = fieldsets[index].querySelector('input:checked').value;
        });

        //loop through the option sets
        fieldsets.forEach((fieldset, index) => {
            //only run if there is more than one option set
            if(index > 0) {
                const inputs = fieldset.querySelectorAll('input');
                inputs.forEach(input => {
                    //get the label for the current input and hide it if it is not a valid combo option
                    const label = fieldset.querySelector(`label[for="${input.id}"]`);
                    if(this.validCombo(input.value,index,selectedOptions) == false ? label.style.display = "none" : label.style.display = "");
                });

                //if the option set before the current one has an invalid option selected, then there will be no valid options on the current set, so hide the option's legend (title)
                const legend = fieldset.querySelector('legend');
                const masterSelectInput = fieldsets[index - 1].querySelector('input:checked');
                const masterSelectLabel = fieldsets[index - 1].querySelector(`label[for="${masterSelectInput.id}"]`);
                if(masterSelectLabel.style.display == 'none' ? legend.classList.add('hidden') : legend.classList.remove('hidden'));
            }
        });
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
    /* *** Dynamic Selectors End *** */

  onVariantChange() {
    /* *** Dynamic Selectors Start *** */
    this.rebuildOptions();
    /* *** Dynamic Selectors End *** */
