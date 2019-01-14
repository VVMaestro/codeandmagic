(function () {
    var wizardsList = document.querySelector(".setup-similar-list");

    var wizardTemplate = document.querySelector("#similar-wizard-template");
    var fragment = document.createDocumentFragment();

    for (j = 0; j < window.getRandomData.CHARACTERS_NUMBER; j++) {
        var wizardElement = wizardTemplate.content.querySelector(".setup-similar-item").cloneNode(true);
        wizardElement.querySelector(".setup-similar-label").textContent = window.getRandomData.characters[j].name;
        wizardElement.querySelector(".wizard-coat").style.fill = window.getRandomData.characters[j].coatColor;
        wizardElement.querySelector(".wizard-eyes").style.fill = window.getRandomData.characters[j].eyesColor;
        fragment.appendChild(wizardElement);
    }
    wizardsList.appendChild(fragment);

    document.querySelector(".setup-similar").classList.remove("hidden");
})();