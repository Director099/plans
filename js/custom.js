'use strict';

$('.partners').owlCarousel({
  loop: true,
  responsiveClass: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    465: {
      items: 2
    },
    768: {
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
      loop: true,
      center: true
    },
    610: {
      loop: true,
      items: 1
    },
    768: {
      margin: 0,
      loop: true,
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

  },
  onChanged: function(e) {
    var idx = e.item.index - 2;
    if (idx === -1) {
      idx = $('.doing__block').length - 1;
    }
    if (idx >= 0) {
      $('.doing__block').removeClass('active');
      $('.doing__block[data-number="' + idx + '"]').addClass('active')
    }
  }
})

$('.video-rev__slider').owlCarousel({
  loop: false,
  dots: true,
  nav: true,
  responsive: {
    0: {
      rtl:true,
      margin: 15,
      loop: true,
      items: 1,
      center: true
    },
    480: {
      rtl:true,
      loop: true,
      autoWidth: true,
      center: true
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

$('.process-slider').owlCarousel({
    loop: false,
    dots: true,
    nav: true,
    center: true,
    items: 1,

    onInitialized: function() {
      var itemsSlider = document.querySelectorAll('.process-slider');


      function amountDots(dot) {
        var maxDot = Math.max(dot.length);
        for (var i = 0; i < dot.length; i++) {
          dot[i].innerHTML = '<b>' + '0' + (1 + i)  + '</b>' + '<span class="max-number"> / ' + '0' + maxDot + ' </span>';
        }
      }

      itemsSlider.forEach(function(i) {
        var dot = i.querySelectorAll('.owl-dot')
        amountDots(dot)
      })
    }
})

$(function () {
    $.scrollUp({
        scrollText: '',
    });
});

$('#phone').mask('0 (000) 000 - 00 - 00');

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

  var nav = $(".navigation__item .scroll");
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

(function() {
  var maychange = document.querySelectorAll('input[data-checkbox="may-change"]');

  maychange.forEach(function(i) {
    i.addEventListener('input', function() {
      var dataInput = this.getAttribute('data-input')
      if (this.value) {
        document.querySelector('div[data-input="' + dataInput+'"]').classList.add('active')
      } else {
        document.querySelector('div[data-input="' + dataInput+'"]').classList.remove('active')
      }
    })
  })

})();

$(document).ready(function(){


  var controls = {
    video: $("#video"),
    playpause: $("#playpause"),
    btn: $(".btn-play")

  };

  var video = controls.video[0];

  function videoPlay() {
    controls.btn.toggleClass("btn-play--close");

    if (video.paused || controls.btn.hasClass("btn-play--close")) {
      video.play();
      controls.btn.css("z-index", "-1");
    } else {
      video.pause();
      controls.btn.css("z-index", "9");
    }
  }

  controls.playpause.click(function(){
    videoPlay();
  });

  controls.btn.click(function(){
    videoPlay();
  });
});

(function() {
  if(!$("#video").length) {
    return
  }
  var playpause = document.querySelector('#playpause');
  var video = document.querySelector('#video');
  var btnPlay = document.querySelector('.btn-play');

  function playVideo(elem) {
    elem.addEventListener('click', function() {
      video.innerHTML = '<source src="video/video.mp4" type="video/mp4">';
    })
  }

  playVideo(playpause);
  playVideo(btnPlay);

})();

$('.modal').on('show.bs.modal', function(){
  var videoLink = this.dataset['video'];
  var $iframe = $('iframe', this);
  $iframe.attr('src', videoLink);
});

$('.modal').on('hide.bs.modal', function(){
  var $iframe = $('iframe', this);
  $iframe.attr('src', null);
});
