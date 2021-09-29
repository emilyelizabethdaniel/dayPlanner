//local storage

var saveBtn = $("[class=saveBtn]");

saveBtn.on('click', function() {
    console.log($(this));
    var allNotes = [];

    $(".textBox").each(function() {
        console.log($(this).val());
        allNotes.push($(this).val());
        console.log(allNotes);
        localStorage.setItem("user notes", JSON.stringify(allNotes));
    })
});

function getStorageNotes() {
    var getNotes = JSON.parse(localStorage.getItem("user notes"));
    var iterateEachBox = 0;
    console.log(getNotes);
    $(".textBox").each(function() {

        $(this).val(getNotes[iterateEachBox]);

        iterateEachBox++;

    });
};

getStorageNotes();

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