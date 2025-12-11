import $ from "jquery"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import modal from './_modules/_modal.js';
modal();



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