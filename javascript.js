window.addEventListener("load", () => {
    document.querySelector(".bannercontent").classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll(".contenttitle, .content1box1, .content1box2, .content1box3, .content1box4, .quote, .quotename");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("loaded");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    elementsToAnimate.forEach(element => observer.observe(element));
});