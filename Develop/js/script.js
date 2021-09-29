//local storage

var saveBtn = $("[class=saveBtn]");
var allNotes = [];
var input = $("input");

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
var updateCurrentHour = 13;
console.log(currentHour);
$("span").text(now.format("MMMM DD, YYYY, hh:mm "));
currentHour = moment(currentHour).add(updateCurrentHour, 'h');
console.log(currentHour);


function compareTimes() {
    if (moment(now).isAfter(currentHour)) {
        console.log("after!");
        input.addClass("future");

    } else if (moment(now).isBefore(currentHour)) {
        console.log("before!");
        input.addClass("past");
    } else if (moment(now).isSame(currentHour)) {
        input.addClass("present")
        console.log("same!");
    }
    // updateHour();
    // console.log(updateCurrentHour)
};

function updateHour() {
    updateCurrentHour = updateCurrentHour + 1;
    console.log(updateCurrentHour);
};

compareTimes();
updateHour();


// var timeObj = moment(fakeTime);
// console.log(fakeTime);

//compare this moment object to now moment
//data attribute that equals hour number 

//figure out if this row is past, present or future


//apply correct class
//iterate over all of the rows
//j query update time class styling