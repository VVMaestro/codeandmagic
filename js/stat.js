var renderStatistics = function(ctx, names, times) {
    var SHADOW_COLOR = "rgba(0, 0, 0, 0.7)";
    var CLOUD_COLOR = "rgb(255, 255, 255)";
    var CLOUD_X = 100;
    var CLOUD_Y = 10;
    var GAP = 40;
    var SHADOW_GAP = 10;
    var SHADOW_X = CLOUD_X + SHADOW_GAP;
    var SHADOW_Y = CLOUD_Y + SHADOW_GAP;
    var FONT_GAP = 15;
    var TITLE_X = CLOUD_X + 20;
    var TITLE_Y = CLOUD_Y + 35;
    var TITLE_HEIGHT = TITLE_Y + (2 * FONT_GAP);
    var TEXT_WIDTH = 20;
    var BAR_HEIGHT = 150;
    var BAR_WIDTH = 40;
    var BAR_GAP = 50;
    var TIMES_GAP = 5;

    var renderCloudForm = function(ctx, x, y, color) {
        ctx.fillStyle = color;
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(x + 100, y + 40, x + 310, y + 20, x + 420, y);
        ctx.bezierCurveTo(x + 440, y + 90, x + 460, y + 190, x + 400, y + 270);
        ctx.bezierCurveTo(x + 300, y + 280, x + 210, y + 300, x, y + 270);
        ctx.bezierCurveTo(x - 20, y + 190, x + 10, y + 90, x, y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    var getMaxElement = function(arr) {
        var maxElement = arr[0];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > maxElement) {
                maxElement = arr[i];
            }
        }
        return maxElement;
    }

    var getBarValue = function (maxSize, values, maxValue) {
        return (maxSize * values[i]) / maxValue;
    }

    var maxTime = getMaxElement(times);

    renderCloudForm(ctx, SHADOW_X, SHADOW_Y, SHADOW_COLOR);
    renderCloudForm(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

    ctx.fillStyle = "black";
    ctx.font = "16px PT Mono";
    ctx.fillText("Вы победили!", TITLE_X, TITLE_Y);
    ctx.fillText("Список результатов:", TITLE_X, TITLE_Y + FONT_GAP);    

    if (names.length > times.lenght) {
        var delCount = names.lenght - times.lenght;
        names.splice(times.lenght, delCount);
    } else if (names.lenght < times.lenght) {
        var delCount = times.lenght - names.lenght;
        times.splice(names.lenght, delCount);
    }

    for (i = 0; i < names.length; i++) {
        var barY = BAR_HEIGHT - Math.floor(getBarValue(BAR_HEIGHT, times, maxTime));
        if (names[i] === "Вы") {
            ctx.fillStyle = "rgba(255, 0, 0, 1)";
        } else ctx.fillStyle = "hsla(250, 100%, " + Math.floor(Math.random() * (70 - 20) + 20) + "%, 1)";

        ctx.fillText(names[i], CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + TITLE_HEIGHT + BAR_HEIGHT + TEXT_WIDTH);
        ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + TITLE_HEIGHT + barY - TIMES_GAP);
        ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + TITLE_HEIGHT + barY, 
            BAR_WIDTH, Math.round(getBarValue(BAR_HEIGHT, times, maxTime)) );
    }    
}