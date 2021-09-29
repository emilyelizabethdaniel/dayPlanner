//local storage

var saveBtn = $("[class=saveBtn]");
var allNotes = ["", "", "", "", "", "", "", "", "", ];
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
var hourNow = moment().format("H");



for (var i = 9; i <= 17; i++) {
    var classname = "hour-" + i;
    if (hourNow > i) {
        console.log("after!");
        $("." + classname).addClass("past");
    } else if (hourNow < i) {
        console.log("before!");
        $("." + classname).addClass("future");
    } else if (hourNow == i) {
        $("." + classname).addClass("present")
        console.log("same!");
    }
}