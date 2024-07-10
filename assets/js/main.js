// cop menu PC to menu Mobile
const pcNav = document.querySelector("#pc-nav");
const mobileNav = document.querySelector("#mobile-nav");

// cop from PC nav to Mobile nav
mobileNav.innerHTML = pcNav.innerHTML;

//
const links = document.querySelectorAll(".navbar__link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => link.classList.remove("navbar__link--active"));
    link.classList.add("navbar__link--active");
  });
});

const dots = document.querySelectorAll(".review__dots .review__dot");
const reviews = document.querySelectorAll(
  ".review .review__list .feedback-item"
);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dots.forEach((dot) => dot.classList.remove("review__dot--active"));
    dot.classList.add("review__dot--active");
  });
});

// Chuyển item bằng dot và btn
document.addEventListener("DOMContentLoaded", () => {
  const reviewList = document.querySelector(".review__list");
  const reviewItems = document.querySelectorAll(".review-item");
  const prevButton = document.querySelector(".preview__control:first-child");
  const nextButton = document.querySelector(".preview__control:last-child");
  const dots = document.querySelectorAll(".review__dot");

  let currentIndex = 0;

  function updateDots(index) {
    dots.forEach((dot) => dot.classList.remove("review__dot--active"));
    dots[index].classList.add("review__dot--active");
  }

  function updateReview() {
    const offset = -currentIndex * 100; // Tính toán độ dịch chuyển
    reviewList.style.transform = `translateX(${offset}%)`;
    updateDots(currentIndex);
  }

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = reviewItems.length - 1; // Quay lại phần tử cuối cùng
    }
    updateReview();
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < reviewItems.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Quay lại phần tử đầu tiên
    }
    updateReview();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateReview();
    });
  });
});
