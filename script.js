function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
}


const months = [
  "September 2026",
  "October 2026",
  "November 2026",
  "December 2026",
  "January 2027",
  "February 2027",
  "March 2027",
  "April 2027",
  "May 2027",
  "June 2027",
  "July 2027",
  "August 2027"
];


let monthIndex = 0;


function changeMonth(direction) {

  monthIndex =
    (monthIndex + direction + months.length) %
    months.length;

  document.getElementById("month").textContent =
    months[monthIndex];

  document.querySelector(
    ".calendar-placeholder b"
  ).textContent = months[monthIndex];

}