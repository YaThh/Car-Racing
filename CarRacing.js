$(document).ready(function() {
    quantity = 4;
    checkTime = false;
    money = 1000;
    
    $("#money").append(money);
    console.log(car);

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
        if (checkChoose)
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

    if ((newRedCar + 120) <= finishLine)
        $("#redCar").css("left", newRedCar + "px");
    else 
        finish2();
    if ((newYellowCar + 120) <= finishLine)
        $("#yellowCar").css("left", newYellowCar + "px");
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

    if ((newRedCar + 120) <= finishLine)
        $("#redCar").css("left", newRedCar + "px");
    else 
        finish3();
    if ((newYellowCar + 120) <= finishLine)
        $("#yellowCar").css("left", newYellowCar + "px");
    else 
        finish3();
    if ((newHumanCar + 110) <= finishLine)
        $("#humanCar").css("left", newHumanCar + "px");
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

    if ((newRedCar + 120) <= finishLine)
        $("#redCar").css("left", newRedCar + "px");
    else
        finish4();
    if ((newYellowCar + 120) <= finishLine)
        $("#yellowCar").css("left", newYellowCar + "px");
    else 
        finish4();
    
    if ((newHumanCar + 110) <= finishLine)
        $("#humanCar").css("left", newHumanCar + "px");
    else 
        finish4();
    if ((newBlueCar + 85) <= finishLine)
        $("#blueCar").css("left", newBlueCar + "px");
    else 
        finish4();
}

function finish2() {
    clearInterval(time);
    var max = Math.max(newRedCar, newYellowCar);
    if (max == newRedCar) {
        $("#result").append("Car 1 wins");
        bet(1);
    }
    else 
    {
        $("#result").append("Car 2 wins");
        bet(2);
    }
}

function finish3() {
    clearInterval(time);
    var max = Math.max(newRedCar, newYellowCar, newHumanCar);
    if (max == newRedCar) {
        $("#result").append("Car 1 wins");
        bet(1);
    }
    else if (max == newYellowCar) {
        $("#result").append("Car 2 wins");
        bet(2);
    }
    else {
        $("#result").append("Car 3 wins");
        bet(3);
    }
}

function finish4() {
    clearInterval(time);
    var max = Math.max(newRedCar, newYellowCar, newHumanCar, newBlueCar);
    if (max == newRedCar) {
        $("#result").append("Car 1 wins");
        bet(1);
    }
    else if (max == newYellowCar) {
        $("#result").append("Car 2 wins");
        bet(2);
    }
    else if (max == newHumanCar) {
        $("#result").append("Car 3 wins");
        bet(3);
    }
    else {
        $("#result").append("Car 4 wins");
        bet(4);
    }
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
}

function bet(winningCar) {
    if (checkChoose)
    {
        carClick = checkCarClick();
        console.log(carClick);
        console.log(winningCar);
        if (carClick == winningCar)
            money = money + (betMoney * quantity);
        else
            money -= betMoney;
        $("#money").text(`Your money: ${money}`);
    }
}

function checkCarClick() {
    $("#redCar").click(function(val) {
        car = val;
        $("#resultCarChoose").text(`You choose Car ${car}`);
    })
    $("#yellowCar").click(function(val) {
        car = val;
        $("#resultCarChoose").text(`You choose Car ${car}`);
    })
    $("#humanCar").click(function(val) {
        car = val;
        $("#resultCarChoose").text(`You choose Car ${car}`);
    })
    $("#blueCar").click(function(val) {
        car = val;
        $("#resultCarChoose").text(`You choose Car ${car}`);
    })
}
