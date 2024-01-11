document.addEventListener('DOMContentLoaded', () => {
    let submitButton = document.querySelector('.js-generate');
    let userInput = document.querySelector('.js-input');
    let customColorCheckbox = document.querySelector(".js-custom-color");
    let sizesSelect = document.querySelector('.js-sizes');
    let qrBgColorPicker = document.querySelector('.js-background-color');
    let qrFgColorPicker = document.querySelector('.js-foreground-color');
    let qrCodeImgHld = document.querySelector('.qr-code--img');

    userInput.addEventListener('input', autoResize, false);

    function autoResize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }

    customColorCheckbox.addEventListener('change', () => {
        const disclaimerElement = document.querySelector(".custom-color--pickers");
        disclaimerElement.classList.toggle("is-active");
    });

    submitButton.addEventListener('click', () => generate(), false);

    const generate = async () => {
        if (userInput.value) {
            let selectedSize = sizesSelect.options[sizesSelect.selectedIndex].text;
            let qrBgColorValue = '';
            let qrFgColorValue = '';

            if (qrBgColorPicker) {
                qrBgColorValue = qrBgColorPicker.value.replace(/^#/, '');
            }

            if (qrFgColorPicker) {
                qrFgColorValue = qrFgColorPicker.value.replace(/^#/, '');
            }

            let apiUrl = `https://image-charts.com/chart?chs=${selectedSize}&cht=qr&chl=${userInput.value}&choe=UTF-8`;

            if (qrBgColorValue) {
                apiUrl += `&icqrb=${qrBgColorValue}`;
            }

            if (qrFgColorValue) {
                apiUrl += `&icqrf=${qrFgColorValue}`;
            }

            const response = await fetch(apiUrl);
            qrCodeImgHld.src = response.url;


        } else {
            alert('Input some text!');
        }
    };
});
