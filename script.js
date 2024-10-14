var menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0";
function togglemenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "100vh";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

// color dot on mouse
var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px"
  crsr.style.top = dets.y + "px"
})


// GSAP code

var tl = gsap.timeline()

// gsap.set("# ")
tl

  .from(" #cursor", {
    height: 100,
    width: 100,
    // y: -50,
    opacity: 0,
    duration: 0.5,
    // delay: 1,
    // stagger: 0.4,
  })
  .from("#main", {
    opacity: 0,
    duration: 0.5,
    // delay: 1,
    x: -500,
  })
  .from("nav", {
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    x: 700,
  })
  .from("nav ul li , .ri-menu-2-line", {
    opacity: 0,
    // delay: ,
    duration: 0.2,
    // x: 70,
    y: -30,
    stagger: 0.8,
  })
  .from("nav h1", {
    opacity: 0,
    duration: 0.2,
    // delay: 1,
    y: 50
  })
  .from(" .a", {
    x: 50,
    y: -50,
    opacity: 0,
    duration: 0.01,
    // delay: 1,
    stagger: 0.5,
    scrub: true,
  })
  .from(" #center h2", {
    x: 30,
    // y: -50,
    opacity: 0,
    duration: 1,
    // delay: 1,
    stagger: 0.4,
  })
  .from("#center #name", {
    duration: 6,
    // delay: 1,
    repeat: -1,
    pin: true,
    // opacity: ,
    color: "rgb(251, 94, 94)",
  })
  .to("#page2 h1", {
    transform: "translateX(-130%)",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      // markers: true,
      start: "top top ",
      end: "top -50%",
      // pin: true,
      scrub: true,
    },
  })
  .to("#page4 h1", {
    transform: "translateX(-130%)",
    scrollTrigger: {
      trigger: "#page4",
      scroller: "body",
      start: "top top", // Adjust this value as needed
      end: "top -100%",
      // pin: true,
      scrub: true,
    }
  })
  .to("page3", {
    duration: 1,
    scrollTrigger: {
      trigger: "#page3",
      opacity: 0,
      scroller: "body",
      start: "top 40%", // Adjust this value as needed
      end: "top -100%",
      // color: "rgb(251, 94, 94)",
    }
  });


