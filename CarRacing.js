$(document).ready(function() {
    quantity = 4;
    checkTime = false;
    checkCarChoose = false;
    money = 1000;
    redCarTime = 0;
    yellowCarTime = 0;
    humanCarTime = 0;
    blueCarTime = 0;
    checkReset = false;
    
    checkCarClick()
    $("#money").append(money);

    $("#chooseBet").click(function() {
        $("#resultBetChoose").text("");
        if (money <= 0) {
            checkChoose = false;
            $("#resultBetChoose").append("You don't have enough money");
        }
        else {
            betMoney = $("#betMoney").val();
            if (betMoney < 0 || betMoney > money) {
                $("#resultBetChoose").append("Your bet is invalid");
                checkChoose = false;
            }
            else {
                $("#resultBetChoose").append(`Your bet is ${betMoney}`);
                checkChoose = true;
            }
        }
    })

    $("#chooseCar").click(function() {
        if (checkTime) reset();
        quantity = $("#quantity").val();
        if (quantity == 2) {
            $("#humanCar").hide();
            $("#blueCar").hide();
        }
        else if (quantity == 3) {
            $("#humanCar").show();
            $("#blueCar").hide();
        }
        else {
            $("#humanCar").show();
            $("#blueCar").show();
        }
    }) 
    
    $("#play").click(function() {
        if (checkChoose && checkCarChoose)
        {
            if (quantity == 2)
                time = setInterval(play2, 100);
            else if (quantity == 3)
                time = setInterval(play3, 100);
            else
                time = setInterval(play4, 100);
            checkTime = true;
        }
    })

    $("#stop").click(function() {
        clearInterval(time);
    })

    $("#reset").click(function() {
        if (checkReset)
            reset();
    });
})

function play2() {
    var finishLine = parseInt($("#finishLine").css("left"));
    var redCarOffset = Math.floor(Math.random() * 31);
    var yellowCarOffset = Math.floor(Math.random() * 31);
    var leftRedCar = parseInt($("#redCar").css("left"));
    var leftYellowCar = parseInt($("#yellowCar").css("left"));
    newRedCar = leftRedCar + redCarOffset;
    newYellowCar = leftYellowCar + yellowCarOffset;


    if ((newRedCar + 120) <= finishLine) {
        redCarTime += 1;
        $("#redCar").css("left", newRedCar + "px");
    }
    else 
        finish2();
    if ((newYellowCar + 120) <= finishLine) {
        yellowCarTime += 1;
        $("#yellowCar").css("left", newYellowCar + "px");
    }
    else 
        finish2();
}

function play3() {
    var finishLine = parseInt($("#finishLine").css("left"));
    var redCarOffset = Math.floor(Math.random() * 31);
    var yellowCarOffset = Math.floor(Math.random() * 31);
    var humanCarOffset = Math.floor(Math.random() * 31);
    var leftRedCar = parseInt($("#redCar").css("left"));
    var leftYellowCar = parseInt($("#yellowCar").css("left"));
    var leftHumanCar = parseInt($("#humanCar").css("left"));
    newRedCar = leftRedCar + redCarOffset;
    newYellowCar = leftYellowCar + yellowCarOffset;
    newHumanCar = leftHumanCar + humanCarOffset;

    if ((newRedCar + 120) <= finishLine) {
        redCarTime += 1;
        $("#redCar").css("left", newRedCar + "px");
    }
    else 
        finish3();
    if ((newYellowCar + 120) <= finishLine) {
        yellowCarTime += 1;
        $("#yellowCar").css("left", newYellowCar + "px");
    }
    else 
        finish3();
    if ((newHumanCar + 110) <= finishLine) {
        humanCarTime += 1;
        $("#humanCar").css("left", newHumanCar + "px");
    }
    else 
        finish3();
}

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

    if ((newRedCar + 130) <= finishLine) {
        redCarTime += 1;
        $("#redCar").css("left", newRedCar + "px");
    }
    else
        finish4();
    if ((newYellowCar + 130) <= finishLine) {
        yellowCarTime += 1; 
        $("#yellowCar").css("left", newYellowCar + "px");
    }
    else 
        finish4();
    if ((newHumanCar + 125) <= finishLine) {
        humanCarTime += 1;
        $("#humanCar").css("left", newHumanCar + "px");
    }
    else 
        finish4();
    if ((newBlueCar + 125) <= finishLine) {
        blueCarTime += 1;
        $("#blueCar").css("left", newBlueCar + "px");
    }
    else 
        finish4();
}

function finish2() {
    clearInterval(time);
    var max = Math.max(newRedCar, newYellowCar);
    if (max == newRedCar) {
        $("#result").text(`Car 1 Wins - Running Time: ${parseFloat(redCarTime / 10)}s`);
        bet(1);
    }
    else 
    {
        $("#result").text(`Car 2 Wins - Running Time: ${parseFloat(yellowCarTime / 10)}s`);
        bet(2);
    }
    checkReset = true;
}

function finish3() {
    clearInterval(time);
    var max = Math.max(newRedCar, newYellowCar, newHumanCar);
    if (max == newRedCar) {
        $("#result").text(`Car 1 Wins - Running Time: ${parseFloat(redCarTime / 10)}s`);
        bet(1);
    }
    else if (max == newYellowCar) {
        $("#result").text(`Car 2 Wins - Running Time: ${parseFloat(yellowCarTime / 10)}s`);
        bet(2);
    }
    else {
        $("#result").text(`Car 3 Wins - Running Time: ${parseFloat(humanCarTime / 10)}s`);
        bet(3);
    }
    checkReset = true;
}

function finish4() {
    clearInterval(time);
    var max = Math.max(newRedCar, newYellowCar, newHumanCar, newBlueCar);
    if (max == newRedCar) {
        $("#result").text(`Car 1 Wins - Running Time: ${parseFloat(redCarTime / 10)}s`);
        bet(1);
    }
    else if (max == newYellowCar) {
        $("#result").text(`Car 2 Wins - Running Time: ${parseFloat(yellowCarTime / 10)}s`);
        bet(2);
    }
    else if (max == newHumanCar) {
        $("#result").text(`Car 3 Wins - Running Time: ${parseFloat(humanCarTime / 10)}s`);
        bet(3);
    }
    else {
        $("#result").text(`Car 4 Wins - Running Time: ${parseFloat(blueCarTime / 10)}s`);
        bet(4);
    }
    checkReset = true;
}

function reset() {
    clearInterval(time);
    $("#redCar").css("left", 0 + "px");
    $("#yellowCar").css("left", 0 + "px");
    $("#humanCar").css("left", 0 + "px");
    $("#blueCar").css("left", 0 + "px");
    $("#result").text("");
    $("#resultCarChoose").text("");
    $("#resultBetChoose").text("");
    checkCarChoose = false;
    redCarTime = 0;
    yellowCarTime = 0;
    humanCarTime = 0;
    blueCarTime = 0;
}

function bet(winningCar) {
    if (checkChoose)
    {
        if (carClick == winningCar)
            money = money + (betMoney * (quantity - 1));
        else
            money -= betMoney;
        $("#money").text(`Your money: ${money}`);
    }
}

function checkCarClick() {
    $("#redCar").click(function() {
        carClick = 1;
        checkCarChoose = true;
        $("#resultCarChoose").text(`You choose Car ${carClick}`);
    })
    $("#yellowCar").click(function() {
        carClick = 2;
        checkCarChoose = true;
        $("#resultCarChoose").text(`You choose Car ${carClick}`);
    })
    $("#humanCar").click(function() {
        carClick = 3;
        checkCarChoose = true;
        $("#resultCarChoose").text(`You choose Car ${carClick}`);
    })
    $("#blueCar").click(function() {
        carClick = 4;
        checkCarChoose = true;
        $("#resultCarChoose").text(`You choose Car ${carClick}`);
    })
}
