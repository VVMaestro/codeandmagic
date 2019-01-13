var CHARACTERS_NUMBER = 4;
var setup = document.querySelector(".setup");
var wizardsList = document.querySelector(".setup-similar-list");
var firstNames = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
var secondNames = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
var coatColors = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
var eyesColors = ["black", "red", "blue", "yellow", "green"];
var fireballColors = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];
var characters = new Array();

class Character {
    constructor(name, coatColor, eyesColor) {
        this.name = name;
        this.coatColor = coatColor;
        this.eyesColor = eyesColor;
    }
}
//Создание рандомных данных
var getRandomData = function () {
    for (i = 0; i < CHARACTERS_NUMBER; i++) {
        characters[i] = new Character(
            window.utils.getRandomName(firstNames, secondNames),
            coatColors[window.utils.getRandomNumber(0, coatColors.length)],
            eyesColors[window.utils.getRandomNumber(0, eyesColors.length)]
        );
    }
}
//Отрисовка рандомных персонажей
var createSimilars = function () {
    var wizardTemplate = document.querySelector("#similar-wizard-template");
    var fragment = document.createDocumentFragment();

    for (j = 0; j < CHARACTERS_NUMBER; j++) {
        var wizardElement = wizardTemplate.content.querySelector(".setup-similar-item").cloneNode(true);
        wizardElement.querySelector(".setup-similar-label").textContent = characters[j].name;
        wizardElement.querySelector(".wizard-coat").style.fill = characters[j].coatColor;
        wizardElement.querySelector(".wizard-eyes").style.fill = characters[j].eyesColor;
        fragment.appendChild(wizardElement);
    }
    wizardsList.appendChild(fragment);
}

document.querySelector(".setup-similar").classList.remove("hidden");

getRandomData();

createSimilars();

//Логика открытия и закрытия окна настройки
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;
var setupOpen = document.querySelector(".setup-open");
var setupClose = document.querySelector(".setup-close");

var openPopup = function () {
    setup.classList.remove("hidden");
    document.addEventListener("keydown", onPopupEscPress);
}

var closePopup = function () {
    setup.classList.add("hidden");
    document.removeEventListener("keydown", onPopupEscPress);
}

var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
        closePopup();
    }
}

setupOpen.addEventListener("click", function () {
    openPopup();
});

setupClose.addEventListener("click", function () {
    closePopup();
});

setupOpen.addEventListener("keydown", function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        openPopup();
    }
});

setupClose.addEventListener("keydown", function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        closePopup();
    }
});

//Валидация формы

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

//Кастомизация персонажа 
var wizardCoat = document.querySelector(".setup-wizard .wizard-coat");
var wizardEyes = document.querySelector(".setup-wizard .wizard-eyes");
var wizardFireball = document.querySelector(".setup-fireball-wrap");
var coatColorInput = document.querySelector(".coat-color-input");
var eyesColorInput = document.querySelector(".eyes-color-input");
var fireballColorInput = document.querySelector(".faireball-color");
var coatColorCounter = 0;
var eyesColorCounter = 0;
var fireballColorCounter = 0;

wizardCoat.addEventListener("click", function () {
    wizardCoat.style.fill = coatColors[coatColorCounter++ % coatColors.length];
    coatColorInput.value = wizardCoat.style.fill;
});

wizardEyes.addEventListener("click", function () {
    wizardEyes.style.fill = eyesColors[eyesColorCounter++ % eyesColors.length];
    eyesColorInput.value = wizardEyes.style.fill;
});

wizardFireball.addEventListener("click", function () {
    wizardFireball.style.backgroundColor = fireballColors[fireballColorCounter++ % fireballColors.length];
    fireballColorInput.value = wizardFireball.style.backgroundColor;
});