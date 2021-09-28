//local storage

var saveBtn = $("[class=saveBtn");
var allNotes = [];

saveBtn.on('click', function() {
    console.log($(this));

    $(".textBox").each(function() {
        console.log($(this).val());
        allNotes.push($(this).val());
        console.log(allNotes);

        //json stringify, json parse

        var arrayToStringNotes = JSON.stringify(allNotes);
        localStorage.setItem("user notes", arrayToStringNotes);
        console.log(arrayToStringNotes);


        // var plannerText = localStorage.getItem("all user notes");
        // var plannerDisplayText = JSON.parse(plannerText);
        // $

        // var savedText = localStorage.getItem(allNotes);
        //$(.textBox).append(savedText);
    })

    console.log("clicked");
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//time functions


var now = moment();
console.log(now.format("MMMM DD, YYYY"));
$("span").text(now.format("MMMM DD, YYYY, h:mm:ss"));

//iterate over all the divs that have a time block(row) 
//for each hour
var fakeTime = "day time year 09:00:00";
var timeObj = moment(fakeTime);
//compare this moment object to now moment
//data attribute that equals hour number 

//figure out if this row is past, present or future
//apply correct class
//iterate over all of the rows
//j query update time class styling