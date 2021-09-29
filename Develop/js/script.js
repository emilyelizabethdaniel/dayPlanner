//local storage

var saveBtn = $("[class=saveBtn]");
var allNotes = [];
var nine = $("#nine");
var ten = $("#ten");
var eleven = $("#eleven");
var twelve = $("#twelve");
var one = $("#one");
var two = $("#two");
var three = $("#three");
var four = $("#four");
var five = $("#five");


saveBtn.on('click', function() {
    console.log($(this));

    $(".textBox").each(function() {
        console.log($(this).val());
        allNotes.push($(this).val());
        console.log(allNotes);

        //json stringify, json parse

        localStorage.setItem("user notes", JSON.stringify(allNotes));
        var getNotes = JSON.parse(localStorage.getItem("user notes"));

        // add to text boxes

        $(".textBox").append(getNotes);

    })
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//time functions


var now = moment();
var currentHour = moment().startOf('day');
var updateCurrentHour = 9;
$("span").text(now.format("MMMM DD, YYYY, hh:mm "));
currentHour = moment(currentHour).add(updateCurrentHour, 'h');


function updateHour() {
    updateCurrentHour = updateCurrentHour + 1;
    console.log(updateCurrentHour);
};

function compareTimesNine() {
    if (moment(now).isAfter(currentHour)) {
        console.log("after!");
        nine.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before!");
        nine.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        nine.addClass("present")
        console.log("same!");
    }
    updateHour();
};


function compareTimesTen() {
    if (moment(now).isAfter(currentHour)) {
        console.log("after!");
        ten.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before!");
        ten.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        ten.addClass("present")
        console.log("same!");
    }
    updateHour();
};

function compareTimesEleven() {
    if (moment(now).isAfter(currentHour)) {
        console.log("after!");
        eleven.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before!");
        eleven.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        eleven.addClass("present")
        console.log("same!");
    }
    updateHour();
};

function compareTimesTwelve() {
    if (moment(now).isAfter(currentHour)) {
        console.log("after!");
        twelve.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before!");
        twelve.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        twelve.addClass("present")
        console.log("same!");
    }
    updateHour();
};

function compareTimesOne() {
    if (moment(now).isAfter(currentHour)) {
        console.log("after!");
        one.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before!");
        one.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        one.addClass("present")
        console.log("same!");
    }
    updateHour();
};

function compareTimesTwo() {
    if (moment(now).isAfter(currentHour)) {
        console.log("after!");
        two.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before!");
        two.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        two.addClass("present")
        console.log("same!");
    }
    updateHour();
};

function compareTimesThree() {
    if (moment(now).isAfter(currentHour)) {
        console.log("after!");
        three.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before!");
        three.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        three.addClass("present")
        console.log("same!");
    }
    updateHour();
};

function compareTimesFour() {
    if (moment(now).isAfter(currentHour)) {
        console.log("after!");
        four.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before!");
        four.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        four.addClass("present")
        console.log("same!");
    }
    updateHour();
};

function compareTimesFive() {
    if (moment(now).isAfter(currentHour)) {
        console.log("after!");
        five.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before!");
        five.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        five.addClass("present")
        console.log("same!");
    }
};


compareTimesNine();
compareTimesTen();
compareTimesEleven();
compareTimesTwelve();
compareTimesOne();
compareTimesTwo();
compareTimesThree();
compareTimesFour();
compareTimesFive();




// var timeObj = moment(fakeTime);
// console.log(fakeTime);

//compare this moment object to now moment
//data attribute that equals hour number 

//figure out if this row is past, present or future


//apply correct class
//iterate over all of the rows
//j query update time class styling