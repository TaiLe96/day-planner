//------------------Current Date--------------------------
var currentTime = document.getElementById("current-time");
currentTime.innerHTML = moment().format("dddd MMM Do YY");           


var currentHour = new Date();

var hours = currentHour.getHours();
//======================Condition of the block==================
var nineAm = document.getElementById("nine")
var tenAm = document.getElementById("ten")
var eleAm = document.getElementById("ele")
var twePm = document.getElementById("twe")
var onePm = document.getElementById("one")
var twoPm = document.getElementById("two")
var threePm = document.getElementById("three")
var fourPm = document.getElementById("four")
var fivePm = document.getElementById("five")

function timeHighlight(){
    if (hours > 9) {nineAm.style.backgroundColor = "#C5C5C5"};
    if (hours < 9) {nineAm.style.backgroundColor = "#007000"};
    if (hours > 10) {tenAm.style.backgroundColor = "#C5C5C5"};
    if (hours < 10) {tenAm.style.backgroundColor = "#007000"};
    if (hours > 11) {eleAm.style.backgroundColor = "#C5C5C5"};
    if (hours < 11) {eleAm.style.backgroundColor = "#007000"};
    if (hours > 12) {twePm.style.backgroundColor = "#C5C5C5"};
    if (hours < 12) {twePm.style.backgroundColor = "#007000"};
    if (hours > 13) {onePm.style.backgroundColor = "#C5C5C5"};
    if (hours < 13) {onePm.style.backgroundColor = "#007000"};
    if (hours > 14) {twoPm.style.backgroundColor = "#C5C5C5"};
    if (hours < 14) {twoPm.style.backgroundColor = "#007000"};
    if (hours > 15) {threePm.style.backgroundColor = "#C5C5C5"};
    if (hours < 15) {threePm.style.backgroundColor = "#007000"};
    if (hours > 16) {fourPm.style.backgroundColor = "#C5C5C5"};
    if (hours < 16) {fourPm.style.backgroundColor = "#007000"};
    if (hours > 17) {fivePm.style.backgroundColor = "#C5C5C5"};
    if (hours < 17) {fivePm.style.backgroundColor = "#007000"};
};
timeHighlight();







//------------------Save to local storage-----------------
// let timeBlock = document.getElementsByClassName("time-block");
var saveButton = document.getElementsByClassName("saveBtn");
var display;
var data = {};
var input;

// saveInput()
$('.saveBtn').on("click", function(event){
    event.preventDefault()
    var timeBlock = $(this).siblings().val() // To get the sibling value 
    var button = $(this).data("input") // To get data input of the button
    data[button] = timeBlock; // set the data to get 
    localStorage.setItem("time-block", JSON.stringify(data));
    // saveInput()
    console.log($(this).siblings().val())
    console.log(data)

})

function loadItems() {
    var dataFromStrorage = JSON.parse(localStorage.getItem("time-block"));
    nineAm.setAttribute("value", dataFromStrorage.nine);
    tenAm.setAttribute("value", dataFromStrorage.ten);
    eleAm.setAttribute("value", dataFromStrorage.ele);
    twePm.setAttribute("value", dataFromStrorage.twe);
    onePm.setAttribute("value", dataFromStrorage.one);
    twoPm.setAttribute("value", dataFromStrorage.two);
    threePm.setAttribute("value", dataFromStrorage.three);
    fourPm.setAttribute("value", dataFromStrorage.four);
    fivePm.setAttribute("value", dataFromStrorage.five);
}
loadItems();









