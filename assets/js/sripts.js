//Setting up the date and appending to the HTML page
let currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

//Setting current hour as a 2 digit number
let currentHour = parseInt(moment().format('HH'));

//check for that current hour is correct and displays as a 2 format number
//console.log(currentHour)

//Setting the id of each textarea as a variable
let text9AM = $("#text9AM");
let text10AM = $("#text10AM");
let text11AM = $("#text11AM");
let text12AM = $("#text12AM");
let text1PM = $("#text1PM");
let text2PM = $("#text2PM");
let text3PM = $("#text3PM");
let text4PM = $("#text4PM");
let text5PM = $("#text5PM");

//function for setting color of textarea for current day
$("textarea").each(function () {
    let textHour = parseInt($(this).attr("name"));

    if (textHour < currentHour) {
        $(this).addClass("past");
    }


    if (textHour > currentHour) {
        $(this).addClass("future")
    }

    if (textHour === currentHour) {
        $(this).addClass("present")
    }

})

//function for save button. On click data from each text area, from the referance of the id, is save to the local storage 
$("button").on("click", function () {

    //setting items in the local storage
    localStorage.setItem("9AM", (text9AM.val()));
    localStorage.setItem("10AM", (text10AM.val()));
    localStorage.setItem("11AM", (text11AM.val()));
    localStorage.setItem("12AM", (text12AM.val()));
    localStorage.setItem("13PM", (text1PM.val()));
    localStorage.setItem("14PM", (text2PM.val()));
    localStorage.setItem("15PM", (text3PM.val()));
    localStorage.setItem("16PM", (text4PM.val()));
    localStorage.setItem("17PM", (text5PM.val()));

})

//getting the content stored and sending to the screen. When page is refreshed content will stay
$("#text9AM").append(localStorage.getItem("9AM"));
$("#text10AM").append(localStorage.getItem("10AM"));
$("#text11AM").append(localStorage.getItem("11AM"));
$("#text12AM").append(localStorage.getItem("12AM"));
$("#text1PM").append(localStorage.getItem("13PM"));
$("#text2PM").append(localStorage.getItem("14PM"));
$("#text3PM").append(localStorage.getItem("15PM"));
$("#text4PM").append(localStorage.getItem("16PM"));
$("#text5PM").append(localStorage.getItem("17PM"));


