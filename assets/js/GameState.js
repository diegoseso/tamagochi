var gameOver = false;
var minimumHappiness = 0;
var maximumHappiness = 100;
var initialHappiness = 50;
var actualHappiness;
var petingHappiness = 2;
var naggingHappiness = -2;
var feedingHappiness = 5;
var forgetToFeedHappiness = -5;
var generalHappiness = 0.1;

function pet(){
    if (actualHappiness + petingHappiness > 100) {
        actualHappiness = 100
    }
    else {
        actualHappiness = actualHappiness + petingHappiness
    }

    $("#actualHappiness").text(actualHappiness);
}

function nag(){
    if (actualHappiness + naggingHappiness < 0){
        actualHappiness = 0
    }
    else {
        actualHappiness = actualHappiness + naggingHappiness
    }


    $("#actualHappiness").text(actualHappiness);
}

function feed(){
    if (actualHappiness + feedingHappiness > 100) {
        actualHappiness = 100
    }
    else {
        actualHappiness = actualHappiness + feedingHappiness
    }

    $("#actualHappiness").text(actualHappiness);
}

function InitializeActualHappiness(){
    return actualHappiness = initialHappiness;
}

var GameState = {
    preload: function(){
    },
    create: function () {
        InitializeActualHappiness();
        console.log(actualHappiness);
    },
    update: function () {
    }
};