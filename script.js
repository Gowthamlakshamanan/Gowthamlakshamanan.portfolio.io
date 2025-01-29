document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY + 100; // Adjusted for better accuracy

        sections.forEach((section) => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => link.classList.remove("active"));
                document.querySelector(`nav a[href="#${sectionId}"]`)?.classList.add("active");
            }
        });
    });

    // Smooth scrolling effect
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            let targetId = link.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for fixed navbar if necessary
                    behavior: "smooth",
                });
            }
        });
    });
});
    