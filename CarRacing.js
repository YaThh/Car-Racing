function play() {
    var redCarOffset = Math.floor(Math.random() * 31);
    var yellowCarOffset = Math.floor(Math.random() * 31);
    var humanCarOffset = Math.floor(Math.random() * 31);
    var leftRedCar = parseInt($("#redCar").css("left"));
    var leftYellowCar = parseInt($("#yellowCar").css("left"));
    var leftHumanCar = parseInt($("#humanCar").css("left"));
    var newRedCar = leftRedCar + redCarOffset;
    var newYellowCar = leftYellowCar + yellowCarOffset;
    var newHumanCar = leftHumanCar + humanCarOffset;
    $("#redCar").css("left", newRedCar + "px");
    $("#yellowCar").css("left", newYellowCar + "px");
    $("#humanCar").css("left", newHumanCar + "px");
}

$(document).ready(function() {
    $("#play").click(function() {
        time = setInterval(play, 100);
    })
    $("#stop").click(function() {
        clearInterval(time);
    })
})