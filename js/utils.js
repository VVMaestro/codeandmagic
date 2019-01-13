(function () {
    window.utils = {
        getRandomNumber : function (min, max) {
            var randomValue = Math.floor(Math.random() * (max - min) + min);
            return randomValue;
        },

        getRandomBulean : function () {
            return Math.round(Math.random());
        },

        getRandomName   : function (arrOfFirstN, arrOfSecondN) {
            var randomFirstName = arrOfFirstN[window.utils.getRandomNumber(0, arrOfFirstN.length)];
            var randomSecondName = arrOfSecondN[window.utils.getRandomNumber(0, arrOfSecondN.length)];

            if (window.utils.getRandomBulean()) {
                return randomFirstName + "\u00A0" + randomSecondName;
            } else return randomSecondName + "\u00A0" + randomFirstName;
        }
    }
})();