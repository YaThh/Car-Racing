function play4() {
    var finishLine = parseInt($("#finishLine").css("left"));
    var redCarOffset = Math.floor(Math.random() * 31);
    var yellowCarOffset = Math.floor(Math.random() * 31);
    var humanCarOffset = Math.floor(Math.random() * 31);
    var blueCarOffset = Math.floor(Math.random() * 31);
    var leftRedCar = parseInt($("#redCar").css("left"));
    var leftYellowCar = parseInt($("#yellowCar").css("left"));
    var leftHumanCar = parseInt($("#humanCar").css("left"));
    var leftBlueCar = parseInt($("#blueCar").css("left"));
    newRedCar = leftRedCar + redCarOffset;
    newYellowCar = leftYellowCar + yellowCarOffset;
    newHumanCar = leftHumanCar + humanCarOffset;
    newBlueCar = leftBlueCar + blueCarOffset;
    if ((newRedCar + 120) <= finishLine)
        $("#redCar").css("left", newRedCar + "px");
    else {
        $("#redCar").css("left", finishLine - 125+ "px");
        finish();
    }
    if ((newYellowCar + 120) <= finishLine)
        $("#yellowCar").css("left", newYellowCar + "px");
    else {
        $("#yellowCar").css("left", finishLine - 125 + "px");
        finish();
    }
    if ((newHumanCar + 120) <= finishLine)
        $("#humanCar").css("left", newHumanCar + "px");
    else {
        $("#humanCar").css("left", finishLine - 125 + "px");
        finish();
    }
    if ((newBlueCar + 120) <= finishLine)
        $("#blueCar").css("left", newBlueCar + "px");
    else {
        $("#blueCar").css("left", finishLine - 125 + "px");
        finish();
    }
}

function finish() {
    clearInterval(time);
    var max = Math.max(newRedCar, newYellowCar, newHumanCar, newBlueCar);
    if (max == newRedCar)
        $("#result").append(" - Car 1 wins");
    else if (max == newYellowCar)
        $("#result").append(" - Car 2 wins");
    else if (max == newBlueCar)
        $("#result").append(" - Car 3 wins");
    else
        $("#result").append(" - Car 4 wins");
}

$(document).ready(function() {
    $("#play").click(function() {
        time = setInterval(play4, 100);
    })
    $("#stop").click(function() {
        clearInterval(time);
    })
    $("#reset").click(function() {
        clearInterval(time);
        $("#redCar").css("left", 0 + "px");
        $("#yellowCar").css("left", 0 + "px");
        $("#humanCar").css("left", 0 + "px");
        $("#blueCar").css("left", 0 + "px");
        $("#result").text("Car 1 - Car 2 - Car 3");
    })
})