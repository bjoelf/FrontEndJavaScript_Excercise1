"use strict";

function startTime() {
  var today = new Date();
  var y = today.getFullYear();
  var mo = today.getMonth();
  var d = today.getDay();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);

  /* “Thursday, 07/01/2015 13:20:00”. */
  document.getElementById("clock").innerHTML =
    weekDay(today.getDay()) +
    ", " +
    d +
    "/" +
    mo +
    "/" +
    y +
    " " +
    h +
    ":" +
    m +
    ":" +
    s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function weekDay(i) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[i];
}
function leapYear() {
  var year = document.getElementById("isLeapYear").value;
  var x = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  document.getElementById("leapYearResult").innerHTML = x;
}
function firstDayOfTheYear() {
  var yr = document.getElementById("isWeekDay").value;
  var firstDayOfYear = new Date(yr);
  document.getElementById("firstDayOfTheYearResult").innerHTML = weekDay(
    firstDayOfYear.getDay()
  );
}
function guessingGame() {
  var x = document.getElementById("rndNbr").value;
  var rn = getRndInteger(1, 4);
  var answer = x == rn ? "Good Job" : "Did not match";
  document.getElementById("guessingResult").innerHTML = answer;
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function daysToChristmas() {
  var today = new Date();
  var cmas = new Date(today.getFullYear(), 11, 24);
  if (today.getMonth() == 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
  }
  var waitingDays = DaysBetween(today, cmas);
  document.getElementById("daysToChristmasResult").innerHTML = waitingDays;
}

function DaysBetween(StartDate, EndDate) {
  // The number of milliseconds in all UTC days (no DST)
  const oneDay = 1000 * 60 * 60 * 24;

  const start = Date.UTC(
    EndDate.getFullYear(),
    EndDate.getMonth(),
    EndDate.getDate()
  );
  const end = Date.UTC(
    StartDate.getFullYear(),
    StartDate.getMonth(),
    StartDate.getDate()
  );
  return (start - end) / oneDay;
}
function reverseInput() {
  var txt = document.getElementById("textToReverse").value;
  txt = reverseString(txt);
  document.getElementById("reverseInputResult").innerHTML = txt;
}

function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

function manipulationInput() {
  var splitString = document.getElementById("textToReverse").value.split("");
  console.log(splitString);
  var txt = allPossibleCases(splitString).join("");
  console.log(txt);
  
  document.getElementById("textToManipulateResult").innerHTML = txt;
}

function allPossibleCases(arr) {
  if (arr.length === 0) {
    return [];
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    var result = [];
    var allCasesOfRest = allPossibleCases(arr.slice(1)); // recur with the rest of array
    console.log(allCasesOfRest);
    for (var c in allCasesOfRest) {
      for (var i = 0; i < arr[0].length; i++) {
        console.log(c);
        result.push(arr[0][i] + allCasesOfRest[c]);
      }
    }
    console.log(result);
    return result;
  }
}
