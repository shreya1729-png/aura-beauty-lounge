/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("hide");
    document.body.classList.add("loaded");
  }, 1000);
});

/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
}

/* ==========================================
   CLOSE MENU WHEN LINK CLICKED
========================================== */

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    const icon = menuBtn.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

/* ==========================================
   STICKY NAVBAR
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle(
    "scrolled",
    window.scrollY > 60
  );
});

/* ==========================================
   HERO BACKGROUND SLIDER
========================================== */

const hero = document.querySelector(".hero");

const heroImages = [
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1920&q=80"
];

let currentImage = 0;

function changeHeroImage() {
  currentImage++;

  if (currentImage >= heroImages.length) {
    currentImage = 0;
  }

  hero.style.backgroundImage =
    `url('${heroImages[currentImage]}')`;
}

setInterval(changeHeroImage, 5000);

/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals =
  document.querySelectorAll(".reveal");

function revealOnScroll() {

  reveals.forEach((item) => {

    const windowHeight =
      window.innerHeight;

    const elementTop =
      item.getBoundingClientRect().top;

    const revealPoint = 100;

    if (elementTop <
      windowHeight - revealPoint) {
      item.classList.add("active");
    }
  });
}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

/* ==========================================
   TESTIMONIAL SWIPER
========================================== */

new Swiper(".reviewSwiper", {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

/* ==========================================
   SMOOTH SCROLL OFFSET
========================================== */

document.querySelectorAll(
  'a[href^="#"]'
).forEach(anchor => {

  anchor.addEventListener(
    "click",
    function (e) {

      const target =
        document.querySelector(
          this.getAttribute("href")
        );

      if (!target) return;

      e.preventDefault();

      window.scrollTo({
        top:
          target.offsetTop - 90,
        behavior: "smooth"
      });

    });
});

/* ==========================================
   ACTIVE NAV LINKS
========================================== */

const sections =
  document.querySelectorAll("section");

const navItems =
  document.querySelectorAll(
    ".nav-links a"
  );

window.addEventListener(
  "scroll",
  () => {

    let current = "";

    sections.forEach(section => {

      const sectionTop =
        section.offsetTop;

      const sectionHeight =
        section.clientHeight;

      if (
        scrollY >=
        sectionTop - 200
      ) {
        current =
          section.getAttribute("id");
      }

    });

    navItems.forEach(link => {

      link.classList.remove(
        "active-link"
      );

      if (
        link.getAttribute("href") ===
        `#${current}`
      ) {
        link.classList.add(
          "active-link"
        );
      }

    });

  });

/* ==========================================
   GALLERY LIGHTBOX
========================================== */

const galleryImages =
  document.querySelectorAll(
    ".gallery-grid img"
  );

const lightbox =
  document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image => {

  image.addEventListener(
    "click",
    () => {

      lightbox.classList.add(
        "active"
      );

      const img =
        document.createElement("img");

      img.src = image.src;

      while (
        lightbox.firstChild
      ) {
        lightbox.removeChild(
          lightbox.firstChild
        );
      }

      lightbox.appendChild(img);

    });

});

lightbox.addEventListener(
  "click",
  () => {
    lightbox.classList.remove(
      "active"
    );
  }
);

/* ==========================================
   BOOKING FORM DEMO
========================================== */

const form =
  document.querySelector("form");

if (form) {

  form.addEventListener(
    "submit",
    function (e) {

      e.preventDefault();

      alert(
        "Thank you! Your appointment request has been submitted."
      );

      form.reset();
    });

}

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const topBtn =
  document.createElement("button");

topBtn.innerHTML =
  '<i class="fa-solid fa-arrow-up"></i>';

topBtn.classList.add(
  "top-btn"
);

document.body.appendChild(
  topBtn
);

window.addEventListener(
  "scroll",
  () => {

    if (
      window.scrollY > 600
    ) {
      topBtn.classList.add(
        "show"
      );
    } else {
      topBtn.classList.remove(
        "show"
      );
    }

  });

topBtn.addEventListener(
  "click",
  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);
