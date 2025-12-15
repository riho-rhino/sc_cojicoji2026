import $ from "jquery"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import modal from './_modules/_modal.js';
modal();

opning();
function tick(time) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve()
    }, time)
  })
}
async function opning() {
//   $('.op').addClass('start');
//   await tick(1700);
  $('.countdown').removeClass('hidden');

}

// GSAP

ScrollTrigger.create({
    trigger: ".main",
    start: "top bottom",
    end: "bottom bottom",
    onEnter: () => {
        document.querySelector(".fixed_anchor-wrap").classList.add("show");
    },
    onLeave: () => {
        document.querySelector(".fixed_anchor-wrap").classList.remove("show");
    },
    onEnterBack: () => {
        document.querySelector(".fixed_anchor-wrap").classList.add("show");
    },
    onLeaveBack: () => {
        document.querySelector(".fixed_anchor-wrap").classList.remove("show");
    },
});


ScrollTrigger.create({
  trigger: ".main",
  start: "top center",
  
  onEnter: () => {
    document.querySelector(".countdown").classList.add("hidden");
  },
  onLeaveBack: () => {
    document.querySelector(".countdown").classList.remove("hidden");
  },
});

ScrollTrigger.create({
  trigger: ".main",
  start: "top center",
  
  onEnter: () => {
    document.querySelector(".topanchor").classList.add("show");
  },
  onLeaveBack: () => {
    document.querySelector(".topanchor").classList.remove("show");
  },
});


let scrollTimer;
window.addEventListener("scroll", () => {
    const topAnchor = document.querySelector(".topanchor");

    if (topAnchor.classList.contains("change")) {
    topAnchor.classList.remove("change");
    }
    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(() => {
    topAnchor.classList.add("change");
    }, 2000);
});

let anchorTimer;
window.addEventListener("scroll", () => {
    const fixedAnchor = document.querySelector(".fixed_anchor-wrap");

    if (fixedAnchor.classList.contains("visible")) {
    fixedAnchor.classList.remove("visible");
    }
    clearTimeout(anchorTimer);

    anchorTimer = setTimeout(() => {
    fixedAnchor.classList.add("visible");
    }, 2000);
});

const topAnchor = document.querySelector(".topanchor");
if (topAnchor) {
topAnchor.addEventListener("click", (e) => {
e.preventDefault();
window.scrollTo({ top: 0, behavior: "smooth" });
});
}


// 背景
document.addEventListener('DOMContentLoaded', () => {

  const gradients = [
    'linear-gradient(to bottom, #FFE0E0 0%, #FFF2F2 50%, #FFE0E0 100%)',
    'linear-gradient(to bottom, #E6FFCC 0%, #F0FFE3 50%, #E6FFCC 100%)',
    'linear-gradient(to bottom, #FFF6C7 0%, #FFF9DE 50%, #FFF6C7 100%)'
  ];

  const randomIndex = Math.floor(Math.random() * gradients.length);
  const page = document.querySelector('.bg');

  if (page) {
    page.style.background = gradients[randomIndex];
  }

});

// アンカーリンク
$('.fixed_anchor li').on('click', function (e) {
    e.preventDefault();
    var targetId = $(this).find('a').attr('href');
    var targetOffset = $(targetId).offset().top - 50;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
});
$('.spanchor_list li').on('click', function (e) {
    e.preventDefault();
    var targetId = $(this).find('a').attr('href');
    var targetOffset = $(targetId).offset().top - 50;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
});
$('.pc_anchor li').on('click', function (e) {
    e.preventDefault();
    var targetId = $(this).find('a').attr('href');
    var targetOffset = $(targetId).offset().top - 50;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
});


// アンカーリンク


// カウントダウン
function countdownDate() {
    const now = new Date();
    const nextYear = now.getMonth() === 0 && now.getDate() === 1
        ? now.getFullYear()
        : now.getFullYear() + 1;

    const newYearDate = new Date(nextYear, 0, 1);

    const diffTime = newYearDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById("days").textContent = diffDays;
}

countdownDate();


function countdownDatePc() {
    const now = new Date();
    const nextYear = now.getMonth() === 0 && now.getDate() === 1
        ? now.getFullYear()
        : now.getFullYear() + 1;

    const newYearDate = new Date(nextYear, 0, 1);

    const diffTime = newYearDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById("daysPc").textContent = diffDays;
}

countdownDatePc();