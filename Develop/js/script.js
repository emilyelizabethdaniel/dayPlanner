var saveBtn = $("[class=saveBtn");
var plannerText = $("text");
saveBtn.on('click', function() {
    localStorage.setItem("plannerText", plannerText.value);
    console.log("clicked");
});

//local storage

console.log(plannerText);