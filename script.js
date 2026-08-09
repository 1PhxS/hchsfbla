/* =========================================
   MOBILE NAVIGATION
========================================= */

function toggleMenu() {

    const nav = document.getElementById("mainNav");

    nav.classList.toggle("mobile-open");

}


/* Close mobile menu after clicking a link */

document.querySelectorAll("#mainNav a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("mainNav")
            .classList.remove("mobile-open");

    });

});


/* =========================================
   FAQ
========================================= */

function toggleFAQ(button) {

    const answer = button.nextElementSibling;

    const icon = button.querySelector("b");


    if(answer.style.maxHeight) {

        answer.style.maxHeight = null;

        icon.textContent = "+";

    } else {

        answer.style.maxHeight =
            answer.scrollHeight + "px";

        icon.textContent = "−";

    }

}


/* =========================================
   CALENDAR
========================================= */

const months = [

    {
        name: "September 2026",
        image: "calendar/september.png"
    },

    {
        name: "October 2026",
        image: "calendar/october.png"
    },

    {
        name: "November 2026",
        image: "calendar/november.png"
    },

    {
        name: "December 2026",
        image: "calendar/december.png"
    },

    {
        name: "January 2027",
        image: "calendar/january.png"
    },

    {
        name: "February 2027",
        image: "calendar/february.png"
    },

    {
        name: "March 2027",
        image: "calendar/march.png"
    },

    {
        name: "April 2027",
        image: "calendar/april.png"
    },

    {
        name: "May 2027",
        image: "calendar/may.png"
    }

];


let currentMonth = 0;


/* Update calendar */

function updateCalendar() {

    const label =
        document.getElementById("monthLabel");

    const image =
        document.getElementById("calendarImage");


    label.textContent =
        months[currentMonth].name;


    image.src =
        months[currentMonth].image;


    image.alt =
        months[currentMonth].name +
        " HCHS FBLA Calendar";


    updateDots();

}


/* Previous */

function previousMonth() {

    currentMonth--;

    if(currentMonth < 0) {

        currentMonth =
            months.length - 1;

    }

    updateCalendar();

}


/* Next */

function nextMonth() {

    currentMonth++;

    if(currentMonth >= months.length) {

        currentMonth = 0;

    }

    updateCalendar();

}


/* =========================================
   CALENDAR DOTS
========================================= */

function createCalendarDots() {

    const container =
        document.getElementById("calendarDots");


    months.forEach((month, index) => {

        const dot =
            document.createElement("button");


        dot.classList.add("calendar-dot");


        dot.setAttribute(
            "aria-label",
            "Go to " + month.name
        );


        if(index === 0) {

            dot.classList.add("active");

        }


        dot.addEventListener("click", () => {

            currentMonth = index;

            updateCalendar();

        });


        container.appendChild(dot);

    });

}


function updateDots() {

    const dots =
        document.querySelectorAll(".calendar-dot");


    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentMonth
        );

    });

}


/* Start calendar */

createCalendarDots();


/* =========================================
   KEYBOARD CALENDAR CONTROLS
========================================= */

document.addEventListener("keydown", event => {

    if(event.key === "ArrowLeft") {

        previousMonth();

    }

    if(event.key === "ArrowRight") {

        nextMonth();

    }

});