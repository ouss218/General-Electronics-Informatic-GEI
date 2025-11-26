gsap.registerPlugin(ScrollTrigger);

function setAnimationScroll() {
  const runAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-container",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
    },
  });

  runAnimation.to("#hero-bg, #showcase", {
    scale: 1.5,
    duration: 2,
    ease: "power2.out",
  });

  runAnimation.to("#Down-2, #Down", {
    y: -200,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  }, "<0.5");

  runAnimation.to("#np, #nt, #title-s", {
    y: 10,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  }, "<0.5");

  runAnimation.to("#hero-prep, #hero-p", {
    y: 10,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  }, "<0.5");

  runAnimation.to("#depuis", {
    y: 10,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  }, "<0.5");

  // Navbar hides separately (not part of the pinned timeline)
  gsap.to("#nav, #nav-bar, #logo-animation", {
    y: -100,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero-container",
      start: "top top",
      end: "top+=200 top",
      scrub: true,
    },
  });
}


function animateProductCatalog() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".product-catalog",
      start: "top 100%", // Starts when the top of .product-catalog is near the bottom of the screen
      end: "bottom 60%",
      scrub: true,
      
    }
  });

  // Animate title
  tl.from(".catalog-title", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Animate search input and category buttons
  tl.from("#search", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.5");

  tl.from("#category", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out"
  }, "-=0.4");

  // Animate product cards
  tl.from(".product-card", {
    y: 50,
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
  }, "-=0.3");
}




function animateContactSection() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 98%",
      end: "bottom 60%",
      scrub: true,
    }
  });

  tl.from(".info-bg", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  });

  tl.to(".info-bg", {
    scale: 1.03,
    duration: 0.6,
    ease: "power1.inOut",
    yoyo: true,
    repeat: 1
  }, "-=1.2");

  tl.to(".info-bg", {
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
    duration: 1,
    ease: "power2.out"
  }, "-=0.8");


  tl.to(".info-bg", {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    duration: 0.3,
    ease: "power1.inOut",
    repeat: 1,
    yoyo: true
  }, "-=0.9");
  

  // Animate heading and paragraph
  tl.from(".contact-form-container h2, .contact-form-container p", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2
  });

  // Animate each form row
  tl.from(".form-row", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.15
  }, "-=0.6");

  // Animate submit button
  tl.from("#submit-btn", {
    scale: 0.8,
    opacity: 0,
    duration: 0.4,
    ease: "back.out(1.7)"
  }, "-=0.4");

  
  

  
  // Animate contact info title EARLIER
  tl.from(".contact-info h1", {
    x: -50,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  }, "-=1.2"); // trigger it while .info-bg is still animating

  // Animate each info-item
  tl.from(".info-item", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "power2.out"
  }, "-=1"); // overlapping earlier

  // Animate underlines
  tl.from(".info-item .underline", {
    scaleX: 0,
    transformOrigin: "left center",
    duration: 0.3,
    ease: "power2.out",
    stagger: 0.15
  }, "-=0.9");

}



function animateFooter() {
  const tl = gsap.timeline ({
    scrollTrigger: {
      trigger: "#ab-footer, #contact-footer, #services-footer, #main-footer",
      start: "top 90%",
      end: "bottom 99%",
      scrub: true,
      

    },
  });

  tl.from("#ab-footer, #contact-footer, #services-footer, #main-footer", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });

  tl.from("#logo-img", {
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: "bounce.out",
  }, "-=0.6");

  tl.from("#logo-text", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out",
  }, "-=0.5");

  tl.from(".footer p", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  }, "-=0.4");

  tl.from(".subscribe", {
    scale: 0.6,
    opacity: 0,
    duration: 0.7,
    ease: "back.out(1.7)",
  }, "-=0.5");

  tl.from(".nav-f li", {
    y: 10,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out",
  }, "-=0.4");

  tl.from(".copy", {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "power2.out",
  }, "-=0.3");
  
}

function animateWhoSection() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#id1",
      start: "top 80%",  // More consistent trigger point
      end: "bottom 60%",
      scrub: 1.2,        // Smoother scrub on all devices
        
    }
  });

  tl.from("#id1 h1, #id1 p", {
    y: 30,              // Reduced movement for mobile
    opacity: 0,
    duration: 0.9,      // Slightly faster
    ease: "power3.out", // Smoother curve
    stagger: 0.15       // Tighter stagger
  }, "+=0.1");         // Small delay

  tl.from(["#badge", "#building"], {
    y: 20,              // Less dramatic movement
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.15
  }, "-=0.4");         // Better overlap
}

function animateWhySection() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#id2",
      start: "top 80%",  // Adjusted trigger
      end: "bottom 80%", // More consistent end point
      scrub: 1.2,
      markers: false     
    }
  });

  tl.from("#id2, .why-us p", {
    y: 30,              // Reduced movement
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15
  });

  tl.from(".card", {
    y: 40,              // Slightly less movement
    scale: 0.9,         // Less extreme scaling
    rotateX: 15,        // Reduced rotation
    opacity: 0,
    duration: 0.9,
    ease: "back.out(1.4)",
    stagger: 0.2,
    transformOrigin: "center bottom"
  }, "-=0.5");

  tl.to("#Down", {
    y: 8,               // Smaller bounce
    repeat: -1,
    yoyo: true,
    duration: 0.8,      // Slightly slower
    ease: "sine.inOut"
  }, "<0.2");          // Better timing
}

function animateSolutionsSection() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#id3",
      start: "top 80%",
      end: "bottom 60%",
      scrub: 1.2,
      markers: false
    }
  });

  tl.from("#id3", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });

  tl.from(".log", {
    y: 25,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.1        // Tighter stagger
  }, "-=0.5");
}

function animateZone1() {
  const tlZone1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#zone-1",
      start: "top top",
      end: "+=200%", // Give enough scroll range
      scrub: true,
      pin: true,
       // Turn off later
    }
  });

  tlZone1.to(".img-1", {
    opacity: 0,
    duration: 1,
    ease: "power2.inOut"
  });

  tlZone1.to(".img-2", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  }, "<");

  tlZone1.to("#sub-1", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out"
  });

  tlZone1.to("#sub-2", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  }, "<");
}

function animateZone2() {
  const tlZone2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#zone-2",
      start: "top top",
      end: "+=200%",
      scrub: true,
      pin: true,
       // Remove for production
    }
  });

  tlZone2.to(".img-3", {
    opacity: 0,
    duration: 1,
    ease: "power2.inOut"
  });

  tlZone2.to(".img-4", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  }, "<");
}

function animateZone3() {
  const tlZone3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#zone-3",
      start: "top top",
      end: "+=200%", // Give enough scroll range
      scrub: true,
      pin: true,
       // Turn off later
    }
  });

  
  

  tlZone3.to("#t-2", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone3.to("#t-3", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });
  tlZone3.to("#t-4", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });
  tlZone3.to("#t-5", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone3.to("#t-5", {
    scale: 1.05,
    fontWeight: 800,
    duration: 0.5,
    ease: "power2.out"
  });




  tlZone3.to("#t-6", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone3.to(".img-5", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  });

  tlZone3.to("#t-7", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone3.to(".img-6", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  });

  tlZone3.to("#t-8", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone3.to(".img-7", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  });

  tlZone3.to("#t-9", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone3.to(".img-8", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  });

  tlZone3.to("#t-10", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone3.to(".img-9", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  });

  tlZone3.to("#t-11", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone3.to(".img-10", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  });

  tlZone3.to("#t-12", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone3.to(".img-11", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  });

  tlZone3.to("#t-13", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone3.to(".img-12", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  });



  tlZone3.to(".nested", {
    scale: 1.05,
    y: 0,
    duration: 1,
    ease: "power2.out"
  })
  
  tlZone3.to(".img-13", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  });
}

function animateZone4() {
  const tlZone4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#zone-4",
      start: "top top",
      end: "+=200%", // Give enough scroll range
      scrub: true,
      pin: true,
       // Turn off later
    }
  });

  
  tlZone4.to("#f-t", {
    scale: 1.05,
    opacity: 1,
    y: 10,
    duration: 1,
    ease: "power2.out"
  })

  




  tlZone4.to("#f-6", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone4.to(".img-f5", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  });

  tlZone4.to("#f-7", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone4.to(".img-f6", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  });

  tlZone4.to("#f-8", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone4.to(".img-f7", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  });

  tlZone4.to("#f-9", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone4.to(".img-f8", {
    opacity: 1,
    x: 30,
    scale: 1.02,
    duration: 1,
    ease: "power2.inOut"
  });

  
}

function animateZone5() {
  const tlZone5 = gsap.timeline({
    scrollTrigger: {
      trigger: "#zone-5",
      start: "top top",
      end: "+=200%", // Give enough scroll range
      scrub: true,
      pin: true,
       // Turn off later
    }
  });

  
  tlZone5.to("#fi-mt", {
    scale: 1.05,
    opacity: 1,
    y: 10,
    duration: 1,
    ease: "power2.out"
  })

  

  tlZone5.to("#fi-t", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone5.to("#fi-1", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone5.to("#fi-2", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone5.to(".img-fi1", {
    opacity: 1,
    x: 30,
    duration: 1,
    ease: "power2.out"
  });

  tlZone5.to("#fi-3", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });
  tlZone5.to("#fi-4", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone5.to(".img-fi2", {
    opacity: 1,
    x: 30,
    duration: 1,
    ease: "power2.out"
  });
  tlZone5.to("#fi-5", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone5.to(".img-fi3", {
    opacity: 1,
    x: 30,
    duration: 1,
    ease: "power2.out"
  });
  tlZone5.to("#fi-6", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  

  
}

function animateZone6() {
  const tlZone6 = gsap.timeline({
    scrollTrigger: {
      trigger: "#zone-6",
      start: "top top",
      end: "+=200%", // Give enough scroll range
      scrub: true,
      pin: true,
       // Turn off later
    }
  });

  
  tlZone6.to("#s-mt", {
    scale: 1.05,
    opacity: 1,
    y: 10,
    duration: 1,
    ease: "power2.out"
  })

  

  tlZone6.to("#s-t", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone6.to("#s-1", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone6.to("#s-1", {
    scale: 1.05,
    duration: 0.5,
    ease: "power2.out"
  });

  tlZone6.to("#s-2", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone6.to("#s-2", {
    scale: 1.05,
    duration: 0.5,
    ease: "power2.out"
  });

  tlZone6.to("#s-3", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone6.to("#s-3", {
    scale: 1.05,
    duration: 0.5,
    ease: "power2.out"
  });

  tlZone6.to("#s-4", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone6.to("#s-4", {
    scale: 1.05,
    duration: 0.5,
    ease: "power2.out"
  });


  tlZone6.to("#s-5", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  tlZone6.to("#s-5", {
    scale: 1.05,
    duration: 0.5,
    ease: "power2.out"
  });


  

  

  

  
}


// Run on window load
window.addEventListener("load", () => {
  setAnimationScroll();
  animateFooter();
  animateProductCatalog();
  animateContactSection();
  animateWhoSection();
  animateWhySection();
  animateSolutionsSection();
  animateZone1();
  animateZone2();
  animateZone3();
  animateZone4();
  animateZone5();
  animateZone6();
});






const mobileToggle = document.getElementById("mobileToggle");
const mobileNav = document.getElementById("mobileNav");
const mobileOverlay = document.getElementById("mobileOverlay");

const toggleMobileNav = () => {
  mobileNav.classList.toggle("active");
  mobileToggle.classList.toggle("open");
  mobileOverlay.classList.toggle("show");
};

mobileToggle.addEventListener("click", toggleMobileNav);
mobileOverlay.addEventListener("click", toggleMobileNav);


window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});







