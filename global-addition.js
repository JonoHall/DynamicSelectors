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
					if(this.validCombo(input.value,index,selectedOptions) == false ? label.style.display = "none" : label.style.display = "");
				});
				const masterSelectInput = fieldsets[index - 1].querySelector('input:checked');
				const masterSelectLabel = fieldsets[index - 1].querySelector(`label[for="${masterSelectInput.id}"]`);
				if(masterSelectLabel.style.display == 'none' ? legend.classList.add('hidden') : legend.classList.remove('hidden'));
			}
		});
	}
	/* *** Dynamic Selectors End *** */

  onVariantChange() {
	/* *** Dynamic Selectors Start *** */
	this.rebuildOptions();
	/* *** Dynamic Selectors End *** */
