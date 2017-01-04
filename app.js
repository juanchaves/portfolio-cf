'use strict'


// TODO: make this for mobile-first and toggle with non-mobile
function openNav() {
  if ( $(window).width() > 720) {
    //Js for large screens here
    // TODO: make this jQuery / WORK!!!

    $('#side-nav').css({width : '250px'});

    $('#main').css({marginLeft: '250px'});

    $('body').css({backgroundColor: 'rgba(0,0,0,0.4)'});
  }
  else {
    //Js for small screens here
    $('#side-nav').css({width : '100%'});
  }
}

function closeNav() {
  if ( $(window).width() > 720) {
    //Js for large screens here
    // TODO: make this jQuery

    $('#side-nav').css({width : '0'});

    $('#main').css({marginLeft: '0'});

    $('body').css({backgroundColor: 'rgba(0,0,0,0.4)'});
  }
  else {
    //Js for small screens here
    $('#side-nav').css({width : '0'});
  }
}
// TODO: make some sweet SVG graphics
// ++++++++HTML+++++++
// <svg id="mySVG">
//   <path fill="none" stroke="red" stroke-width="3" id="triangle" d="M150 0 L75 200 L225 200 Z"/>
// </svg>
//+++++++++++++++++++++
// // Get the id of the <path> element and the length of <path>
// var triangle = document.getElementById("triangle");
// var length = triangle.getTotalLength();
//
// // The start position of the drawing
// triangle.style.strokeDasharray = length;
//
// // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
// triangle.style.strokeDashoffset = length;
//
// // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
// window.addEventListener("scroll", myFunction);
//
// function myFunction() {
//   var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
//
//   var draw = length * scrollpercent;
//
//   // Reverse the drawing (when scrolling upwards)
//   triangle.style.strokeDashoffset = length - draw;
// }
