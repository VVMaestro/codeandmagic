(function () {
    var dragedElem = document.querySelector(".js-setup-drag");
    var setupOverlay = document.querySelector(".setup");

    var onDragStart = function (evt) {
        var dragged = false;
        var onDragMove = function (moveEvt) {
            dragged = true;
            var shift = {
                x: startCoords.x - moveEvt.clientX,
                y: startCoords.y - moveEvt.clientY
            }

            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            }

            setupOverlay.style.left = (setupOverlay.offsetLeft - shift.x) + "px";
            setupOverlay.style.top = (setupOverlay.offsetTop - shift.y) + "px";
        }

        var onDragEnd = function () {
            document.removeEventListener("mousemove", onDragMove);
            document.removeEventListener("mouseup", onDragEnd);
            
            if (dragged) {
                var onClickPreventDef = function (evt) {
                    evt.preventDefault();
                    dragedElem.removeEventListener("click", onClickPreventDef);
                }

                dragedElem.addEventListener("click", onClickPreventDef);
            }
        }

        var startCoords = {
            x: evt.clientX,
            y: evt.clientY
        }

        document.addEventListener("mousemove", onDragMove);
        document.addEventListener("mouseup", onDragEnd);
    }

    

    dragedElem.addEventListener("mousedown", onDragStart);

})();