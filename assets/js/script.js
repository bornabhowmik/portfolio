// Slow down carousel transition, set auto interval, and update indicator text
document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.querySelector("#projectsCarousel");
  var indicatorText = document.getElementById("carousel-indicator-text");
  if (carousel) {
    // Initialize Bootstrap Carousel with custom options (auto interval: 5000ms)
    var bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel, {
      interval: 5000,
      ride: "carousel",
      wrap: true,
    });

    // Override carousel transition duration
    var style = document.createElement("style");
    style.innerHTML = `
                #projectsCarousel .carousel-item {
                transition: transform 1.2s cubic-bezier(0.4,0,0.2,1), opacity 1.2s cubic-bezier(0.4,0,0.2,1);
                }
            `;
    document.head.appendChild(style);

    // Update indicator text on slide
    var items = carousel.querySelectorAll(".carousel-item");
    var total = items.length;

    function updateIndicator() {
      var idx = Array.from(items).findIndex((item) =>
        item.classList.contains("active")
      );
      if (indicatorText) {
        indicatorText.textContent = `Project ${idx + 1} of ${total}`;
      }
    }

    // Initial indicator update
    updateIndicator();

    carousel.addEventListener("slid.bs.carousel", updateIndicator);
  }
});
