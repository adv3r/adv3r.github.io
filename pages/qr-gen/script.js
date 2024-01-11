document.addEventListener('DOMContentLoaded', () => {
    let submitButton = document.querySelector('.js-generate');
    let clearButtton = document.querySelector('.js-clear');
    let userInput = document.querySelector('.js-input');
    let customColorCheckbox = document.querySelector(".js-custom-color");
    let sizesSelect = document.querySelector('.js-sizes');
    let qrBgColorPicker = document.querySelector('.js-background-color');
    let qrFgColorPicker = document.querySelector('.js-foreground-color');
    let qrCodeImgHld = document.querySelector('.qr-code--hld');
    let colorsInputHld = document.querySelector(".custom-color--pickers");

    userInput.addEventListener('input', autoResize, false);

    function autoResize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }

    customColorCheckbox.addEventListener('change', () => {
        colorsInputHld.classList.toggle("is-active");
    });

    clearButtton.addEventListener('click', () => {
        userInput.value = '';
        sizesSelect.value = '150x150';
        customColorCheckbox.checked = false;
        qrCodeImgHld.innerHTML = '';
        if (colorsInputHld.classList.contains('is-active')) {
            colorsInputHld.classList.toggle("is-active");
        }
    });

    submitButton.addEventListener('click', () => generate(), false);

    const generate = async () => {
        if (userInput.value) {
            qrCodeImgHld.innerHTML = '';

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
            let qrCodeImg = document.createElement('img');
            qrCodeImg.src = response.url;

            qrCodeImgHld.appendChild(qrCodeImg);


        } else {
            qrCodeImgHld.innerHTML = '<span style="color: red; font-weight: 800;">Input some text for your QR code!</span>'
        }
    };
});
