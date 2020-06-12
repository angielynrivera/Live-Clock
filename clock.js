function myClock() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var dateToday = date.getDate();
  var year = date.getFullYear();
  var session = "AM";
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var bg = document.getElementById("main");

  if (hour > 17) {
    bg.style.background = "url(./img/eve.jpg) center no-repeat";
    bg.style.backgroundSize = "Cover";
  }

  if (hour == 12) {
    hour = 0;
  }

  if (hour > 12) {
    hour = hour - 12;
  }

  if (hour < 12) {
    session = "PM";
  }
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  var currentDay = days[date.getUTCDay()];
  var currentDate =
    months[date.getUTCMonth()] + " " + dateToday + ", " + year + "";
  document.getElementById("hour").innerHTML = hour + ":";
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
  document.getElementById("session").innerHTML = session;
  document.getElementById("currentDay").innerHTML = currentDay;
  document.getElementById("currentDate").innerHTML = currentDate;

  var interval = setInterval(myClock, 1000);
}
myClock();
