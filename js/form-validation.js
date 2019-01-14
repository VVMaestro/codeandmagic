(function () {
    var characterNameInput = document.querySelector(".setup-user-name");

    characterNameInput.addEventListener("invalid", function () {
        if (characterNameInput.validity.tooShort) {
            characterNameInput.setCustomValidity("Имя персонажа должно состоять минимум из 2-ч символов.");
        } else if (characterNameInput.validity.tooLong) {
            characterNameInput.setCustomValidity("Имя персонажа может состоять максимум из 25 символов.");
        } else if (characterNameInput.validity.valueMissing) {
            characterNameInput.setCustomValidity("Обязательное поле!");
        } else {
            characterNameInput.setCustomValidity(" ");
        }
    });
})();