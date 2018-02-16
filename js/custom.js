'use strict';

$('.partners').owlCarousel({
  loop: true,
  responsiveClass: true,
  dots: false,
  responsive: {
    0: {
      items: 2
    },
    768: {
      mouseDrag: false,
      items: 4,
      loop: false
    }
  }
})

$('.services__slider').owlCarousel({
  loop: false,
  dots: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
      center: true
    },
    610: {
      items: 1
    },
    768: {
      margin: 0,
      items: 1
    },

    1210: {
      slideBy: 1,
      loop: true,
      autoWidth: true,
      items: 1
    }
  },
  onInitialized: function() {
    var dot = document.querySelectorAll('.services .owl-dot');
    var maxDot = Math.max(dot.length);

    var sliderAct = document.querySelectorAll('.services .owl-item.active');
    sliderAct[0].classList.add('custom-act');

    for (var i = 0; i < dot.length; i++) {
      dot[i].innerHTML = '<b>' + '0' + (1 + i)  + '</b> '  + '<span class="max-number">' + ' / 0' + maxDot + '</span>';
    }
  },
  onTranslated: function() {
    var sliderAct = document.querySelectorAll('.services .owl-item.active');
    var slideClone = document.querySelectorAll('.services .owl-item.cloned');
    var sliderCust = document.querySelectorAll('.services .owl-item');

    for (var i = 0; i < sliderCust.length; i++) {
      sliderCust[i].classList.remove('custom-act');
    }

    if (sliderAct[0].classList.contains('active') || slideClone[0].classList.contains('cloned')) {
      sliderAct[0].classList.add('custom-act');
    }

  }
})

$('.video-rev__slider').owlCarousel({
  loop: false,
  dots: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
      center: true
    },
    610: {
      items: 1
    },
    768: {
      rtl:true,
      slideBy: 1,
      loop: true,
      autoWidth: true,
      items: 1
    }
  },
  onInitialized: function() {
    var dot = document.querySelectorAll('.video-rev .owl-dot');
    var maxDot = Math.max(dot.length);

    var sliderAct = document.querySelectorAll('.video-rev .owl-item.active');
    sliderAct[0].classList.add('custom-act');

    for (var i = 0; i < dot.length; i++) {
      dot[i].innerHTML = '<span class="max-number">' + '0' + maxDot + ' / </span>' + '<b>' + '0' + (1 + i)  + '</b>';
    }
  },
  onTranslated: function() {
    var sliderAct = document.querySelectorAll('.video-rev .owl-item.active');
    var slideClone = document.querySelectorAll('.video-rev .owl-item.cloned');
    var sliderCust = document.querySelectorAll('.video-rev .owl-item');

    for (var i = 0; i < sliderCust.length; i++) {
      sliderCust[i].classList.remove('custom-act');
    }

    if (sliderAct[0].classList.contains('active') || slideClone[0].classList.contains('cloned')) {
      sliderAct[0].classList.add('custom-act');
    }

  }
})

$(".navigation__item > a").click(function () {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
  return false;
});

$(function () {
    $.scrollUp({
        scrollText: '',
    });
});

$('#phone').mask('0 (000) 000 00 00');

(function(){

  window.onload = function() {
    var preloader = document.querySelector('#preloader');

    preloader.classList.add('close');

    setTimeout(function() {
      preloader.classList.add('close');
      if (preloader.classList.contains('close')) {
        preloader.style.display = 'none';
      }
    }, 1000);
}

})();

(function(){

  var nav = $(".navigation__item > a");
  var linkDown = $("#link-down");

  function scroll(i) {
    i.click(function () {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
      return false;
    });
  }

  scroll(linkDown);
  scroll(nav);

})();

(function(){
  var navBurger = document.querySelector('#nav-burger');
  var nav = document.querySelector('#nav');

  navBurger.addEventListener('click', function() {
    navBurger.classList.toggle('active');
    nav.classList.toggle('menu-navigation--active');

    if (navBurger.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });


})();

$(document).ready(function(){
  var controls = {
    video: $("#video"),
    playpause: $("#playpause"),
    btn: $(".btn-play")
  };

  var video = controls.video[0];

  controls.playpause.click(function(){
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

    controls.btn.toggleClass("btn-play--close");

    if (controls.btn.hasClass("btn-play--close")) {
      controls.btn.css("z-index", "-1");
    } else {
      controls.btn.css("z-index", "9");
    }
  });
});

