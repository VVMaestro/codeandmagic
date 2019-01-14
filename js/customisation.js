(function () {
    var fireballColors = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];
    var wizardCoat = document.querySelector(".setup-wizard .wizard-coat");
    var wizardEyes = document.querySelector(".setup-wizard .wizard-eyes");
    var wizardFireball = document.querySelector(".setup-fireball-wrap");
    var coatColorInput = document.querySelector(".coat-color-input");
    var eyesColorInput = document.querySelector(".eyes-color-input");
    var fireballColorInput = document.querySelector(".faireball-color");

    wizardCoat.addEventListener("click", function () {
        wizardCoat.style.fill = window.getRandomData.coatColors[window.customisation.coatColorCounter++ % window.getRandomData.coatColors.length];
        coatColorInput.value = wizardCoat.style.fill;
    });

    wizardEyes.addEventListener("click", function () {
        wizardEyes.style.fill = window.getRandomData.eyesColors[window.customisation.eyesColorCounter++ % window.getRandomData.eyesColors.length];
        eyesColorInput.value = wizardEyes.style.fill;
    });

    wizardFireball.addEventListener("click", function () {
        wizardFireball.style.backgroundColor = fireballColors[window.customisation.fireballColorCounter++ % fireballColors.length];
        fireballColorInput.value = wizardFireball.style.backgroundColor;
    });

    window.customisation = {
        coatColorCounter     : 0,
        eyesColorCounter     : 0,
        fireballColorCounter : 0
    }
})();