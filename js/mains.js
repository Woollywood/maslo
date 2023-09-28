$(document).ready(function () {
	
	$("#phone").inputmask({"mask": "+7 (999) 999-99-99"});

	$('.item .acoord-pl').click(function () {
		$(this).find('.hidden-box').fadeOut(100),
			$(this).find('.acord-text').fadeOut(100),
			this.classList.toggle('actives');
			$(this).find('.hidden-box').slideDown(600);
		var text = this.nextElementSibling;
		if (text.style.display === 'block') {
			text.style.display = 'none';
			$(this).parent().find('.acord-text').slideDown(600);
		} else {
			$(this).parent().find('.hidden-box').slideDown(600);
		}
	});

	let formRadiosDesk = document.querySelectorAll('.prise-form--desktop .forms__wraps');
	let formRadiosMob = document.querySelectorAll('.prise-form--mobile .form-radio');

	if (formRadiosDesk) {
		formRadiosDesk.forEach((radio) => {
			radio.addEventListener('click', (e) => {
				if (e.pointerId !== -1) {
					const targetElement = e.target;
					formRadiosDesk.forEach((r) => {
						r.classList.remove('_active');
						$('.radio-text').slideUp();
						$('.form-radio').removeClass('_active')
					});

					radio.classList.add('_active');
					$('.forms__wraps._active').find('.radio-text').slideDown();
					$('.forms__wraps._active').find('.form-radio').toggleClass('_active')
				}
			});
		});
	}

	if (formRadiosMob) {
		formRadiosMob.forEach((radio) => {
			radio.addEventListener('click', (e) => {
				if (e.pointerId !== -1) {
					const targetElement = e.target;
					formRadiosMob.forEach((r) => {
						r.classList.remove('_active');
						$(this).find('.radio-text').slideUp()
					});

					radio.classList.add('_active');
					$(this).find('.radio-text').slideDown()
				}
			});
		});
	}

	var acc = document.getElementsByClassName('accordions');
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener('click', function () {
			this.classList.toggle('active');
			var panel = this.nextElementSibling;
			if (panel.style.display === 'block') {
				panel.style.display = 'none';
			} else {
				panel.style.display = 'block';
			}

			document.querySelectorAll('.modul-2 .accordions').forEach((accordion) => {
				if (this !== accordion && accordion.classList.contains('active')) {
					accordion.classList.remove('active');
					let panel = accordion.nextElementSibling;
					if (panel.style.display === 'block') {
						panel.style.display = 'none';
					} else {
						panel.style.display = 'block';
					}
				}
			});

			document.querySelectorAll('.dev-text-bl .accordions').forEach((accordion) => {
				if (this !== accordion && accordion.classList.contains('active')) {
					accordion.classList.remove('active');
					let panel = accordion.nextElementSibling;
					if (panel.style.display === 'block') {
						panel.style.display = 'none';
					} else {
						panel.style.display = 'block';
					}
				}
			});
		});
	}

	const ta = document.querySelector('.counte-input');
	const counter = document.querySelector('.counter-text__current');

	ta.addEventListener('input', onInput);

	function onInput(evt) {
		const length = evt.target.value.length;
		counter.innerText = length;
	}

	$('#modul-1').on('click', function (e) {
		$('.modul-1').css('display', 'block');
	});

	$('#modul-11').on('click', function (e) {
		$('.modul-1').css('display', 'block');
	});

	$('#modul-2').on('click', function (e) {
		$('.modul-2').css('display', 'block');
	});

	$('#modul-3').on('click', function (e) {
		$('.modul-3').css('display', 'block');
	});

	$('#modul-4').on('click', function (e) {
		$('.modul-4').css('display', 'block');
	});

	$('.close').on('click', function (e) {
		$('.modul-1').css('display', 'none');
		$('.modul-2').css('display', 'none');
		$('.modul-3').css('display', 'none');
		$('.modul-4').css('display', 'none');
		$('body').css('overflow', 'auto');
	});

	$('span#modul-22').on('click', function (e) {
		$('.modul-2').css('display', 'none');
		$('.modul-3').css('display', 'none');
	});

	$('span#modul-34').on('click', function (e) {
		$('.modul-3').css('display', 'none');
	});

	$('span#modul-44').on('click', function (e) {
		$('.modul-4').css('display', 'none');
	});

	$('span#modul-245').on('click', function (e) {
		$('.modul-1').css('display', 'none');
	});

	$('#tr').on('click', function (e) {
		$('.list-bl-wrap').css('display', 'block');
		$('.map-bls').css('display', 'none');
		$('#tr').toggleClass('actives');
		$('.ren-addres-wpap.ist').css('display', 'none');
		$('#ts').removeClass('actives');
	});

	$('#ts').on('click', function (e) {
		$('.list-bl-wrap').css('display', 'none');
		$('.map-bls').css('display', 'block');
		$('#ts').toggleClass('actives');
		$('.ren-addres-wpap.ist').css('display', 'block');
		$('#tr').removeClass('actives');
	});

	$('#tr1').on('click', function (e) {
		$('.list-bl-wrap').css('display', 'block');
		$('.map-bls').css('display', 'none');
		$(this).find('#tr1').toggleClass('actives');
	});

	$('#ts1').on('click', function (e) {
		$('.list-bl-wrap').css('display', 'none');
		$('.map-bls').css('display', 'block');
	});

	$('button.panel-is').on('click', function (e) {
		$(this).find('button.panel-is').toggleClass('actives');
	});
});

// Валидация форм
let formValidate = {
	getErrors(form) {
		let error = 0;
		let formRequiredItems = form.querySelectorAll('*[data-required]');
		if (formRequiredItems.length) {
			formRequiredItems.forEach((formRequiredItem) => {
				if (!formRequiredItem.disabled) {
					error += this.validateInput(formRequiredItem);
				}
			});
		}
		return error;
	},

	validateInput(formRequiredItem) {
		let error = 0;
		if (formRequiredItem.dataset.required === 'email') {
			formRequiredItem.value = formRequiredItem.value.replace(' ', '');
			if (this.emailTest(formRequiredItem)) {
				this.addError(formRequiredItem);
				error++;
			} else {
				this.removeError(formRequiredItem);
			}
		} else if (formRequiredItem.type === 'checkbox' && !formRequiredItem.checked) {
			this.addError(formRequiredItem);
			error++;
		} else if(formRequiredItem.hasAttribute('data-telephone-validate')) {
			if (formRequiredItem.value.includes('_')) {
				this.addError(formRequiredItem);
				error++;
			}
		} else {
			if (!formRequiredItem.value.trim()) {
				this.addError(formRequiredItem);
				error++;
			} else if (formRequiredItem.dataset.required === 'phone' && formRequiredItem.value.length !== 18) {
				this.addError(formRequiredItem);
				error++;
			} else {
				this.removeError(formRequiredItem);
			}
		}
		return error;
	},

	addError(formRequiredItem) {
		formRequiredItem.classList.add('_form-error');
		formRequiredItem.parentElement.classList.add('_form-error');
		let inputError = formRequiredItem.parentElement.querySelector('.form__error');
		if (inputError) formRequiredItem.parentElement.removeChild(inputError);
		if (formRequiredItem.dataset.error) {
			formRequiredItem.parentElement.insertAdjacentHTML(
				'beforeend',
				`<div class="form__error">${formRequiredItem.dataset.error}</div>`
			);
		}
	},

	removeError(formRequiredItem) {
		formRequiredItem.classList.remove('_form-error');
		formRequiredItem.parentElement.classList.remove('_form-error');
		if (formRequiredItem.parentElement.querySelector('.form__error')) {
			formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector('.form__error'));
		}
	},

	formClean(form) {
		form.reset();
		setTimeout(() => {
			let inputs = form.querySelectorAll('input,textarea');
			for (let index = 0; index < inputs.length; index++) {
				const el = inputs[index];
				el.parentElement.classList.remove('_form-focus');
				el.classList.remove('_form-focus');
				formValidate.removeError(el);
			}
			let checkboxes = form.querySelectorAll('.checkbox__input');
			if (checkboxes.length > 0) {
				for (let index = 0; index < checkboxes.length; index++) {
					const checkbox = checkboxes[index];
					checkbox.checked = false;
				}
			}
		}, 0);
	},

	emailTest(formRequiredItem) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
	},
};

/* Отправка форм*/
function formSubmit() {
	const forms = document.forms;
	if (forms.length) {
		for (const form of forms) {
			form.addEventListener('submit', function (e) {
				const form = e.target;
				formSubmitAction(form, e);
			});
			form.addEventListener('reset', function (e) {
				const form = e.target;
				formValidate.formClean(form);
			});
		}
	}
	async function formSubmitAction(form, e) {
		let forms = [];
		let error = 0;

		if (e.submitter.classList.contains('radio-but')) {
			let formRecipient = document.querySelector('#form-recipient-data--desktop');
			let formContacts = document.querySelector('#form-contacts--desktop');

			let accordions = document.querySelectorAll('#accordions--desktop .accordions');
			let accordionsPanel = document.querySelectorAll('#accordions--desktop .panel');
			let accordionFormData = null;

			if (accordions) {
				for (let i = 0; i < accordions.length; i++) {
					if (accordions[i].classList.contains('active')) {
						accordionFormData = accordions[i].nextElementSibling.querySelector('form');
						break;
					}
				}
			}

			forms.push(formRecipient);
			forms.push(formContacts);
			forms.push(accordionFormData);

			for (let i = 0; i < forms.length; i++) {
				error += !forms[i].hasAttribute('data-no-validate') ? formValidate.getErrors(forms[i]) : 0;
			}
		} else {
			error += !form.hasAttribute('data-no-validate') ? formValidate.getErrors(form) : 0;
		}

		if (error === 0) {
			const ajax = form.hasAttribute('data-ajax');
			if (ajax) {
				// Если режим ajax
				e.preventDefault();
				const formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
				const formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
				const formData = new FormData(form);

				form.classList.add('_sending');
				const response = await fetch(formAction, {
					method: formMethod,
					body: formData,
				});
				if (response.ok) {
					let responseResult = await response.json();
					form.classList.remove('_sending');
					formSent(form, responseResult);
				} else {
					alert('Ошибка');
					form.classList.remove('_sending');
				}
			} else if (form.hasAttribute('data-dev')) {
				// Если режим разработки
				e.preventDefault();
				formSent(form);
			}
		} else {
			e.preventDefault();
			if (form.querySelector('._form-error') && form.hasAttribute('data-goto-error')) {
				const formGoToErrorClass = form.dataset.gotoError ? form.dataset.gotoError : '._form-error';
				gotoBlock(formGoToErrorClass, true, 1000);
			}
		}
	}
	// Действия после отправки формы
	function formSent(form, responseResult = ``) {
		// Создаем событие отправки формы
		document.dispatchEvent(
			new CustomEvent('formSent', {
				detail: {
					form: form,
				},
			})
		);
		// Очищаем форму
		formValidate.formClean(form);
		// Сообщаем в консоль
		console.log('Форма отправлена!');
	}
}

function nextButtonSubmit() {
	let buttons = document.querySelectorAll('[data-next-submit]');
	if (buttons) {
		buttons.forEach((button) => {
			button.addEventListener('click', (e) => {
				if (e.target.id === 'modul-44') {
					let accordionActive = e.target.parentNode
						.querySelector('.dev-wrpa-accordions')
						.querySelector('.active');
					if (accordionActive) {
						let form = accordionActive.nextElementSibling.querySelector('form');
						if (!formValidate.getErrors(form)) {
							console.log('Переклютяется');

							$('.modul-3').css('display', 'block');
							$('.modul-2').css('display', 'none');
						} else {
							console.log('не переклютяется');
						}
					}
				} else if (e.target.id === 'modul-55') {
					let form = e.target.parentNode.querySelector('.forms-order--mobile form');
					if (!formValidate.getErrors(form)) {
						$('.modul-4').css('display', 'block');
						$('.modul-3').css('display', 'none');
					}
				} else if (e.target.id === 'next-submit') {
					let firstForm = document
						.querySelector('.dev-wrpa-accordions .active')
						.nextElementSibling.querySelector('form');
					let secondForm = document.querySelector('.forms-order--mobile form');

					let errors = 0;
					errors += formValidate.getErrors(firstForm);
					errors += formValidate.getErrors(secondForm);

					if (!errors) {
						console.log('Форма отправлена!');
					}
				}
			});
		});
	}

		let phoneInputs = document.querySelectorAll('[data-telephone-validate]');
	
		if (phoneInputs.length) {
			let maskOptions = {
				mask: '+7 (000) 000-00-00',
				lazy: false,
			};
	
			phoneInputs.forEach((input) => {
				let mask = new IMask(input, maskOptions);
				let formInput = input.closest('form').addEventListener('reset', (e) => {
					mask.destroy();
				});
			});
		}
}

formSubmit();
nextButtonSubmit();
formFieldsInit({
	viewPass: false,
	autoHeight: false
});

function formFieldsInit(options = { viewPass: false, autoHeight: false }) {
	document.body.addEventListener('focusin', function (e) {
		const targetElement = e.target;
		if (targetElement.tagName === 'INPUT' || targetElement.tagName === 'TEXTAREA') {
			if (!targetElement.hasAttribute('data-no-focus-classes')) {
				targetElement.classList.add('_form-focus');
				targetElement.parentElement.classList.add('_form-focus');
			}
			formValidate.removeError(targetElement);
			targetElement.hasAttribute('data-validate') ? formValidate.removeError(targetElement) : null;
		}
	});
	document.body.addEventListener('focusout', function (e) {
		const targetElement = e.target;
		if (targetElement.tagName === 'INPUT' || targetElement.tagName === 'TEXTAREA') {
			if (!targetElement.hasAttribute('data-no-focus-classes')) {
				targetElement.classList.remove('_form-focus');
				targetElement.parentElement.classList.remove('_form-focus');
			}
			// Мгновенная валидация
			targetElement.hasAttribute('data-validate') ? formValidate.validateInput(targetElement) : null;
		}
	});
	// Если включено, добавляем функционал "Показать пароль"
	if (options.viewPass) {
		document.addEventListener('click', function (e) {
			let targetElement = e.target;
			if (targetElement.closest('[class*="__viewpass"]')) {
				let inputType = targetElement.classList.contains('_viewpass-active') ? 'password' : 'text';
				targetElement.parentElement.querySelector('input').setAttribute('type', inputType);
				targetElement.classList.toggle('_viewpass-active');
			}
		});
	}
	// Если включено, добавляем функционал "Автовысота"
	if (options.autoHeight) {
		const textareas = document.querySelectorAll('textarea[data-autoheight]');
		if (textareas.length) {
			textareas.forEach((textarea) => {
				const startHeight = textarea.hasAttribute('data-autoheight-min')
					? Number(textarea.dataset.autoheightMin)
					: Number(textarea.offsetHeight);
				const maxHeight = textarea.hasAttribute('data-autoheight-max')
					? Number(textarea.dataset.autoheightMax)
					: Infinity;
				setHeight(textarea, Math.min(startHeight, maxHeight));
				textarea.addEventListener('input', () => {
					if (textarea.scrollHeight > startHeight) {
						textarea.style.height = `auto`;
						setHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight));
					}
				});
			});
			function setHeight(textarea, height) {
				textarea.style.height = `${height}px`;
			}
		}
	}
}


