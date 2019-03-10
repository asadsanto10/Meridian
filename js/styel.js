

$(document).ready(function() {

  // $('#showcase').mousemove(function(e) {
  //    var moveX = (e.pageX * -1 / 5);
  //   var moveY = (e.pageY * -1 / 5);
  //    $(this).css('background-position', moveX + 'px ' + moveY + 'px' )
  // });
new WOW().init();


  /*who area parallax*/

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $("#who .paralax1").addClass("up");
    } else {
        $("#who .paralax1").removeClass("up");
    }
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $("#who .paralax2").addClass("down");
    } else {
        $("#who .paralax2").removeClass("down");
    }
});
/*who area parallax*/


 /*=============silk slider=====================*/
$('#concerns .concernsss').slick({
  infinite: true,
  autoplay:true,
  autoplaySpeed: 3000,
  //dots: true,
  prevArrow: false,
  nextArrow: false,
speed: 300,
slidesToShow: 4,
slidesToScroll: 2,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
 });
 /*=============silk slider=====================*/


 /*=================isotop==================*/
 var $grid = $('.work_image').isotope({
});
// filter items on button click
$('.filter-button').on( 'click', 'ul li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
  });
  $('#our_work ul li').click(function(){
  $('li').removeClass("active");
  $(this).addClass('active');
});
 /*=================isotop==================*/

 /*
* Fixed Navbar Scrolling
* Github: https://github.com/ts-de/bootstrap4-fixed-navbar
*/

// init nav object from dom
var nav = $('nav');
// get heigth of the nav
var navHeight = nav.outerHeight();

// click-trigger
$('a[href*="#"]:not([href="#"])').click(function(event) {
  scrollToSection(this);
  event.preventDefault();
});

// scroll-trigger
$(document).scroll(function() {
  activateCurrentSection();
});

// get target position and scrolls to it
function scrollToSection(self) {
  // get the target href
  var href = $(self).attr('href');

  // get the target position
  var targetPos = $(href).offset().top - navHeight + 5;

  // scroll to target
  $('html, body').animate({
    scrollTop: targetPos
  }, 400);
}

/*
* Updates active section on scroll
*/
// scroll-trigger
$(document).scroll(function() {
  activateCurrentSection();
});

/*
* Updates active section on scroll
*/
function activateCurrentSection() {
  var id; // init the id of the element that will be activated

  // get all sections
  var sections = $('.section');

  // store current position on the page when scroll is triggered
  var pos = $(document).scrollTop();

  /*
  * Exception: if last section is <100% of the screen height
  * make it active when 50% of it is visible.
  * Otherwise the last section would never activate.
  */
  var lastSection = sections[sections.length-1];  // get last section
  var lastSectionTooSmall = $(lastSection).height() < $(window).height();

  if (lastSectionTooSmall) {
    var lastSectionTopPos = $(lastSection).offset().top;
    // lastSectionTriggerPos is true if 50% of the last section is visible
    var lastSectionTriggerPos = $(window).height() + $(document).scrollTop() - ($(lastSection).height()/2);
    var lastSectionInView = lastSectionTriggerPos > lastSectionTopPos;
  }

  if (lastSectionTooSmall && lastSectionInView) {
    id = $(lastSection).attr('id');
  } else {  // else last section is >= 100% of the view check all sections to find the top one
    sections.each(function() {
      var top = $(this).offset().top - navHeight; // get the top & bottom position of the section
      var bottom = top + $(this).outerHeight();

      /*
      * if the current position is higher (deeper on the page) than the top of the section
      * and it is smaller (heiger on the page) than the bottom of the section
      * it is the active section.
      */
      if (pos >= top && pos <= bottom) {
        id = $(this).attr('id');       // store the id of this section
      }
    });
  }

  /*
   if an id was set before, activate the section in the nav
   */
  if (id) {
    nav.find('a').removeClass('active');
    nav.find('a[href="#' + id + '"]').addClass('active');
  }
}
});
