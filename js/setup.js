(function () {
    var ENTER_KEYCODE = 13;
    var ESC_KEYCODE = 27;
    var setup = document.querySelector(".setup");
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
})();