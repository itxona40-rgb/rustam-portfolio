/* =====================================================
   DOM READY
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       NAVBAR SCROLL
    ========================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (!navbar) return;

        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 50
        );
    });



    /* =========================
       ACTIVE NAVBAR
    ========================= */

    const navLinks =
        document.querySelectorAll('.nav-menu a[href^="#"]');

    const sections =
        document.querySelectorAll("section[id]");

    function updateActiveNav() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 140;
            const bottom = top + section.offsetHeight;

            if (
                window.scrollY >= top &&
                window.scrollY < bottom
            ) {
                current = section.id;
            }

        });

        navLinks.forEach(link => {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + current
            );
        });
    }

    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav();

    /* =========================
       LIVE CLOCK + DATE
    ========================= */

    const clock = document.getElementById("clock");
    const date = document.getElementById("date");
    const greeting = document.getElementById("greeting");
    const weekday = document.getElementById("weekday");

    const months = [
        "yanvar","fevral","mart","aprel","may","iyun",
        "iyul","avgust","sentyabr","oktyabr","noyabr","dekabr"
    ];

    const weekdays = [
        "Yakshanba",
        "Dushanba",
        "Seshanba",
        "Chorshanba",
        "Payshanba",
        "Juma",
        "Shanba"
    ];

    function updateClock() {

        const now = new Date();

        const h = String(now.getHours()).padStart(2, "0");
        const m = String(now.getMinutes()).padStart(2, "0");
        const s = String(now.getSeconds()).padStart(2, "0");

        const separator =
            now.getSeconds() % 2 === 0 ? ":" : " ";

        if (clock) {
            clock.textContent =
                `${h}${separator}${m}${separator}${s}`;
        }

        if (date) {
            date.textContent =
                `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
        }

        if (weekday) {
            weekday.textContent =
                weekdays[now.getDay()];
        }

        if (greeting) {

            const hour = now.getHours();

            if (hour < 12) {
                greeting.textContent = "XAYRLI TONG";
            }
            else if (hour < 18) {
                greeting.textContent = "XAYRLI KUN";
            }
            else {
                greeting.textContent = "XAYRLI KECH";
            }
        }
        const timezone = document.getElementById("timezone");

if (timezone) {
    timezone.textContent = "UZT • UTC+5";
}
    }

    updateClock();
    setInterval(updateClock, 1000);

});
/* =========================
   SCROLL PROGRESS
========================= */

const scrollBar = document.getElementById("scrollBar");

function updateScrollProgress(){

    if(!scrollBar) return;

    const scrollTop = window.scrollY;
    const height =
        document.documentElement.scrollHeight - window.innerHeight;

    const percent = height > 0 ? (scrollTop / height) * 100 : 0;

    scrollBar.style.width = percent + "%";
}

window.addEventListener("scroll", updateScrollProgress);
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();


