function aboutTextWithImgAni() {
  gsap.to("#about-text", {
    duration: 2,
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 65.4%",
      end: "10% 80%",
      //markers: true,
      scrub: 1,
    },
    scale: 4.5,
    // ease: "bounce",
    repeat: 0,
    left: 130,
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
      start: "top 45%",
      end: "90% 100%",
      // markers: true,
      scrub: 1,
    },
  });
}

function projectTextAnimation() {
  gsap.to("#project-text-box", {
    duration: 2,
    scrollTrigger: {
      trigger: ".project-section-box",
      start: "top 91%",
      end: "10% 100%",
      //markers: true,
      scrub: 1,
    },
    scale: 4.5,
    repeat: 0,
    left: 150,
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
    right: 70,
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
    right: 70,
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
    right: 70,
    opacity: 1,
  });
}

function moreProjectSectionAnimation() {
  gsap.from(".box-project-section", {
    duration: 2,
    scrollTrigger: {
      trigger: ".box-project-section",
      start: "top 95%",
      end: "100% 100%",
      //markers: true,
      scrub: 1,
    },
    scale: 1.2,
    opacity: 0,
  });
}

function whatIKnowAnimation() {
  gsap.to("#project-text-box-1", {
    duration: 2,
    scrollTrigger: {
      trigger: ".project-section-box-1",
      start: "top 93%",
      end: "90% 100%",
      //markers: true,
      scrub: 1,
    },
    scale: 4.5,
    repeat: 0,
    left: 180,
  });
}

function contectAnimation() {
  gsap.to("#project-text-box-2", {
    duration: 2,
    scrollTrigger: {
      trigger: ".project-section-box-2",
      start: "top 93%",
      end: "90% 100%",
      //markers: true,
      scrub: 1,
    },
    scale: 4.5,
    repeat: 0,
    left: 140,
  });
}

aboutTextWithImgAni();

aboutTextAnimation();

projectTextAnimation();

projectShowcaseBox1();

projectShowcaseBox2();

projectShowcaseBox3();

moreProjectSectionAnimation();

whatIKnowAnimation();

contectAnimation();
