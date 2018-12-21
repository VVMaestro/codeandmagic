var CHARACTERS_NUMBER = 4;
var setup = document.querySelector(".setup");
var firstNames = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
var secondNames = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
var coatColors = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
var eyesColors = ["black", "red", "blue", "yellow", "green"];
var characters = new Array();

var getRandomNumber = function(min, max) {
    var randomValue = Math.floor(Math.random() * (max - min) + min);
    return randomValue;
}

var getRandomBulean = function() {
    return Math.round(Math.random());
}

var getRandomName = function(arrOfFirstN, arrOfSecondN) {
    var randomFirstName = arrOfFirstN[getRandomNumber(0, arrOfFirstN.length)];
    var randomSecondName = arrOfSecondN[getRandomNumber(0, arrOfSecondN.length)];

    if(getRandomBulean()) {
        return randomFirstName + "\u00A0" + randomSecondName;
    } else return randomSecondName + "\u00A0" + randomFirstName;
}

class Character {
    constructor(name, coatColor, eyesColor) {
        this.name = name;
        this.coatColor = coatColor;
        this.eyesColor = eyesColor;
    }
}

for (i = 0; i < CHARACTERS_NUMBER; i++) {
    characters[i] = new Character(
        getRandomName(firstNames, secondNames),
        coatColors[getRandomNumber(0, coatColors.length)],
        eyesColors[getRandomNumber(0, eyesColors.length)]
    );
}

setup.classList.remove("hidden");
