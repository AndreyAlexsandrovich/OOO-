const formModal = document.querySelector('#formModal');
const formPage = document.querySelector('#formPage');
const textWarningModal = document.querySelector('.text-error-modal');
const textWarningPage = document.querySelector('.text-error-page');

export const validationForm = () => {
    formPage.addEventListener('submit', (e) => {
        e.preventDefault()
        const emailPage = formPage.querySelector('#inputEmailPage').value.trim();
        const emailPageInput = formPage.querySelector('#inputEmailPage');
        const addressPage = formPage.querySelector('#inputAddressPage').value.trim();
        const addressPageInput = formPage.querySelector('#inputAddressPage');
        const phonePage = formPage.querySelector('#inputPhonePage').value.trim();
        const phonePageInput = formPage.querySelector('#inputPhonePage');
        const cityPage = formPage.querySelector('#inputCityPage').value.trim();
        const cityPageInput = formPage.querySelector('#inputCityPage');
        validation(formPage, emailPage, addressPage, phonePage, cityPage, emailPageInput, addressPageInput, phonePageInput, cityPageInput)
    })

    formModal.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailModal = formModal.querySelector('#inputEmailModal').value.trim();
        const emailModalInput = formModal.querySelector('#inputEmailModal')
        const addressModal = formModal.querySelector('#inputAddressModal').value.trim();
        const addressModalInput = formModal.querySelector('#inputAddressModal')
        const phoneModal = formModal.querySelector('#inputPhoneModal').value.trim();
        const phoneModalInput = formModal.querySelector('#inputPhoneModal')
        const cityModal = formModal.querySelector('#inputCityModal').value.trim();
        const cityModalInput = formModal.querySelector('#inputCityModal')
        validation(formModal, emailModal, addressModal, phoneModal, cityModal, emailModalInput, addressModalInput, phoneModalInput, cityModalInput)
    });

    // валидация 2-ух форм
    function validation(formType, email, address, phone, city, emailInput, addressInput, phoneInput, cityInput) {
        const container = formType.id === 'formModal' ? textWarningModal : textWarningPage;
        container.innerHTML = '';
        if (!email) {
            showError('Эл.почта', container);
            emailInput.style.border = 'red solid 2px'
        };

        if (!address) {
            showError('Адрес', container);
            addressInput.style.border = 'red solid 2px'
        };

        if (!phone) {
            showError('Номер телефона', container)
            phoneInput.style.border = 'red solid 2px'

        };

        if (!city) {
            showError('Город', container);
            cityInput.style.border = 'red solid 2px'
        };

        const inputs = [emailInput, addressInput, phoneInput, cityInput]
        setTimeout(() => {
            inputs.forEach((input) => {
                input.style.border = ''
            })
        }, 3000)
    }

    function showError(fieldName, container) {
        const createElement = document.createElement('p');
        createElement.textContent = `Вы не написали информацию в поле: ${fieldName}`;
        createElement.style.color = 'red';
        createElement.style.padding = '5px 0';
        container.appendChild(createElement);
        setTimeout(() => {
            container.innerHTML = ``;
        }, 3000);
    }
}