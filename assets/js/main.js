// cop menu PC to menu Mobile
const pcNav = document.querySelector("#pc-nav");
const mobileNav = document.querySelector("#mobile-nav");

// cop from PC nav to Mobile nav
mobileNav.innerHTML = pcNav.innerHTML;

// Header
const links = document.querySelectorAll(".navbar__link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => link.classList.remove("navbar__link--active"));
    link.classList.add("navbar__link--active");
  });
});

// Dot review
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

// Tab list
var tabList = document.querySelector(".tab__list");
var tabItem = document.querySelectorAll(".tab__item");
var tabContentItems = document.querySelectorAll(".tab__content-item");
tabItem.forEach((item, index) => {
  let tabContentItem = tabContentItems[index];
  item.onclick = function () {
    document
      .querySelector(".tab__item.tab__item--active")
      .classList.remove("tab__item--active");

    document
      .querySelector(".tab__content-item.tab__content-item--active")
      .classList.remove("tab__content-item--active");

    this.classList.add("tab__item--active");
    tabContentItem.classList.add("tab__content-item--active");
  };
});

// Pricing list
const pricingSwitch = document.getElementById("pricing-switch");
const pricingLists = document.querySelectorAll(".pricing__list");

pricingSwitch.addEventListener("change", function () {
  pricingLists.forEach((list) =>
    list.classList.toggle("pricing__list--active")
  );
});
