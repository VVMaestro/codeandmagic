var setup = document.querySelector(".setup");
var firstNames = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
var secondNames = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];

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


var characters = [
    {
        name: "name"
    },
    {
        name: "name"
    },
    {
        name: "name"
    },
    {
        name: "name"
    }
];

setup.classList.remove("hidden");
