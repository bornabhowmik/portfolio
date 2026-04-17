document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("#projectsCarousel");
    const indicatorText = document.getElementById("carousel-indicator-text");

    if (carousel) {
        const bsCarousel = new bootstrap.Carousel(carousel, {
            interval: 5000,
            ride: "carousel",
            wrap: true
        });

        const items = carousel.querySelectorAll(".carousel-item");
        const total = items.length;

        function updateIndicator() {
            const activeItem = carousel.querySelector(".carousel-item.active");
            const idx = Array.from(items).indexOf(activeItem);
            if (indicatorText) {
                indicatorText.textContent = `Project ${idx + 1} of ${total}`;
            }
        }

        carousel.addEventListener("slid.bs.carousel", updateIndicator);
    }
});
