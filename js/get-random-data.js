(function () {
    var CHARACTERS_NUMBER = 4;
    var firstNames = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
    var secondNames = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
    var coatColors = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
    var eyesColors = ["black", "red", "blue", "yellow", "green"];
    var characters = new Array();

    class Character {
        constructor(name, coatColor, eyesColor) {
            this.name = name;
            this.coatColor = coatColor;
            this.eyesColor = eyesColor;
        }
    }
    
    for (i = 0; i < CHARACTERS_NUMBER; i++) {
        characters[i] = new Character(
            window.utils.getRandomName(firstNames, secondNames),
            coatColors[window.utils.getRandomNumber(0, coatColors.length)],
            eyesColors[window.utils.getRandomNumber(0, eyesColors.length)]
        );
    }

    window.getRandomData = {
        CHARACTERS_NUMBER : CHARACTERS_NUMBER,
        characters        : characters,
        firstNames        : firstNames,
        secondNames       : secondNames,
        coatColors        : coatColors,
        eyesColors        : eyesColors
    };
})();