document.addEventListener("DOMContentLoaded", function () {
    const scrollContent = document.querySelector(".scroll-content");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const scrollStep = 500; // Adjust this value according to your needs
  
    // Hide previous button initially
    prevBtn.style.visibility = "hidden";
  
    // Function to check scroll position and toggle button visibility
    function updateButtonVisibility() {
      if (scrollContent.scrollLeft > 0) {
        prevBtn.style.visibility = "visible";
      } else {
        prevBtn.style.visibility = "hidden";
      }
  
      if (scrollContent.scrollLeft + scrollContent.clientWidth < scrollContent.scrollWidth) {
        nextBtn.style.visibility = "visible";
      } else {
        nextBtn.style.visibility = "hidden";
      }
    }
  
    // Event listeners for next and previous buttons
    nextBtn.addEventListener("click", function () {
      scrollContent.scrollBy({
        left: scrollStep,
        behavior: "smooth",
      });
      updateButtonVisibility();
    });
  
    prevBtn.addEventListener("click", function () {
      scrollContent.scrollBy({
        left: -scrollStep,
        behavior: "smooth",
      });
      updateButtonVisibility();
    });
  
    // Update button visibility on scroll
    scrollContent.addEventListener("scroll", updateButtonVisibility);
  });
  


  const videos = document.querySelectorAll('.video1');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});