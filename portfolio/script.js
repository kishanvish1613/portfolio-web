function aboutTextWithImgAni() {
  gsap.from("#about-text", {
    duration: 2,
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 95%",
      end: "5% 80%",
      //markers: true,
      scrub: 1,
    },
    scale: 5,
    opacity: 0,
  });
}

function aboutTextAnimation() {
  var aboutHeading = document.querySelectorAll("#about-info-container h1");
  aboutHeading.forEach(function (elem) {
    var h1text = elem.textContent;
    var splittedText = h1text.split("");
    var clutter = "";
    splittedText.forEach(function (ele) {
      clutter += `<span>${ele}</span>`;
    });
    elem.innerHTML = clutter;
  });

  gsap.to("#about-info-container h1 span", {
    color: "lavender",
    stagger: 0.9,
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 70%",
      end: "90% 100%",
      //markers: true,
      scrub: 1,
    },
  });
}

function projectTextAnimation() {
  gsap.from("#project-text-box", {
    duration: 2,
    scrollTrigger: {
      trigger: ".project-section-box",
      start: "top 93%",
      end: "10% 100%",
      //markers: true,
      scrub: 1,
    },
    scale: 2,
  });
}

function projectShowcaseBox1() {
  gsap.to(".project-box1", {
    duration: 2,
    scrollTrigger: {
      trigger: ".display-project1",
      start: "top 91%",
      end: "100% 100%",
      //markers: true,
      scrub: 1,
    },
    right: 20,
    opacity: 1,
  });
}

function projectShowcaseBox2() {
  gsap.to(".project-box2", {
    duration: 2,
    scrollTrigger: {
      trigger: ".display-project2",
      start: "top 91%",
      end: "100% 100%",
      //markers: true,
      scrub: 1,
    },
    right: 20,
    opacity: 1,
  });
}

function projectShowcaseBox3() {
  gsap.to(".project-box3", {
    duration: 2,
    scrollTrigger: {
      trigger: ".display-project3",
      start: "top 91%",
      end: "100% 100%",
      //markers: true,
      scrub: 1,
    },
    right: 20,
    opacity: 1,
  });
}

function whatIKnowAnimation() {
  gsap.from("#project-text-box-1", {
    duration: 2,
    scrollTrigger: {
      trigger: ".project-section-box-1",
      start: "top 90%",
      end: "10% 100%",
      //markers: true,
      scrub: 1,
    },
    scale: 2,
  });
}

// function moreProjectSectionAnimation() {
//   gsap.from(".box-project-section", {
//     duration: 2,
//     scrollTrigger: {
//       trigger: ".box-project-section",
//       start: "top 95%",
//       end: "100% 100%",
//       //markers: true,
//       scrub: 1,
//     },
//     scale: 1.2,
//     opacity: 0,
//   });
// }

function contectAnimation() {
  gsap.from("#project-text-box-2", {
    duration: 2,
    scrollTrigger: {
      trigger: ".project-section-box-2",
      start: "top 98%",
      end: "10% 100%",
      //markers: true,
      scrub: 1,
    },
    scale: 2,
  });
}

aboutTextWithImgAni();

aboutTextAnimation();

projectTextAnimation();

projectShowcaseBox1();

projectShowcaseBox2();

projectShowcaseBox3();

// moreProjectSectionAnimation();

whatIKnowAnimation();

contectAnimation();

// ----------------------------------------
// function more() {
//   gsap.from(".more-project-mini-section", {
//     duration: 2,
//     scrollTrigger: {
//       trigger: ".box-project-section",
//       start: "top 91%",
//       end: "100% 100%",
//       markers: true,
//       scrub: 1,
//     },
//     scale: 3,
//   });
// }

// more();

// Function to apply styles
function applyStyles(elements, styles) {
  elements.forEach((element) => {
    Object.assign(element.style, styles);
  });
}

// Function to handle mouseover event
function handleMouseOver(event) {
  const projectBox = event.currentTarget;
  const elements = projectBox.querySelectorAll(
    ".top-text, .bottom-text, .right-box-top-text, .github-link-project, .overflow-link"
  );
  applyStyles(elements, {
    color: "rgb(63, 69, 69)",
    transition: "color 0.5s ease, right 0.5s ease",
    cursor: "pointer",
  });
  const overflowLink = projectBox.querySelector(".overflow-link");
  overflowLink.style.right = "0%";
}

// Function to handle mouseout event
function handleMouseOut(event) {
  const projectBox = event.currentTarget;
  const elements = projectBox.querySelectorAll(
    ".top-text, .bottom-text, .right-box-top-text, .github-link-project, .overflow-link"
  );
  applyStyles(elements, {
    color: "",
    transition: "color 0.5s ease, right 0.5s ease",
  });
  const overflowLink = projectBox.querySelector(".overflow-link");
  overflowLink.style.right = "";
}

// Select project boxes
const projectBox1 = document.querySelector(".project-box1");
const projectBox2 = document.querySelector(".project-box2");
const projectBox3 = document.querySelector(".project-box3");

// Add event listeners
projectBox1.addEventListener("mouseover", handleMouseOver);
projectBox1.addEventListener("mouseout", handleMouseOut);
projectBox2.addEventListener("mouseover", handleMouseOver);
projectBox2.addEventListener("mouseout", handleMouseOut);
// projectBox3.addEventListener("mouseover", handleMouseOver);
// projectBox3.addEventListener("mouseout", handleMouseOut);
