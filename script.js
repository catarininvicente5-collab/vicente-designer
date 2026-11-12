
// VICENTE DESIGNER
// Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    console.log("Vicente Designer website is ready!");

    // Smooth scrolling for internal section links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});
