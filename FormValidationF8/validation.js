//* Doi tuong Validator
function Validator(options) {
	var formElement = document.querySelector(options.form);
	if (formElement) {
		options.rules.forEach(function (rule) {
			var inputElement = formElement.querySelector(rule.selector);
			var errorElement =
				inputElement.parentElement.querySelector(".form-message");

			if (inputElement) {
				inputElement.onblur = function () {
					var errorMessage = rule.test(inputElement.value);
					if (errorMessage) {
						errorElement.innerText = errorMessage;
					}
				};
			}
		});
	}
}

// dinh nghia rules
// ? nguyen tac cua rules:
// 1. khi coo loi -> tra ra message loi
// 2. khi hop le -> khong tra ra cai gi
Validator.isRequired = function (selector) {
	return {
		selector: selector,
		test: function (value) {
			return value.trim() ? undefined : "Vui lòng nhập lại.";
		},
	};
};

Validator.isEmail = function (selector) {
	return {
		selector: selector,
		test: function () {},
	};
};
