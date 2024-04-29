(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);

    const counterCircle_love = document.getElementById('counterCircle-love');
    const counterText_love = document.getElementById('counterText-love');

    const counterCircle_marriage = document.getElementById('counterCircle-marriage');
    const counterText_marriage = document.getElementById('counterText-marriage');

    const counterCircle_family = document.getElementById('counterCircle-family');
    const counterText_family = document.getElementById('counterText-family');

    var counterInterval_love; 
    var counterInterval_marriage; 
    var counterInterval_family; 

    const love_targetValue = 1000;
    const marriage_targetValue = 50;
    const family_targetValue = 40;

    let counter_love = 0;
    let counter_marriage = 0;
    let counter_family = 0;

    function updateCounter_love() {
        counter_love++;
      counterText_love.textContent = counter_love;
      if (counter_love >= love_targetValue) {
        clearInterval(counterInterval_love);
        counterText_love.textContent = love_targetValue;
      }
    }

    function updateCounter_marriage() {
        counter_marriage++;
        counterText_marriage.textContent = counter_marriage + "K+";
      if (counter_marriage >= marriage_targetValue) {
        clearInterval(counterInterval_marriage);
        counterText_marriage.textContent = marriage_targetValue + "K+";
      }
    }

    function updateCounter_family() {
        counter_family++;
        counterText_family.textContent = counter_family + "K+";
      if (counter_family >= family_targetValue) {
        clearInterval(counterInterval_family);
        counterText_family.textContent = family_targetValue + "K+";
      }
    }

     // Function to check if element is in viewport
     function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
      }
  
      function runCounterWhenVisible() {
        if (isElementInViewport(counterCircle_love) || isElementInViewport(counterCircle_marriage)
    || isElementInViewport(counterCircle_family)) {
           counterCircle_love.style.opacity = 1;
           counterCircle_marriage.style.opacity = 1;
           counterCircle_family.style.opacity = 1;
           counterInterval_marriage = setInterval(updateCounter_marriage, 200);
           counterInterval_love = setInterval(updateCounter_love, 10);
           counterInterval_family = setInterval(updateCounter_family, 200);
           window.removeEventListener('scroll', runCounterWhenVisible);
        }
      }
  
      window.addEventListener('scroll', runCounterWhenVisible);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // International carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        items: 1,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
        $('.whatsapp-button-fixed').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
        $('.whatsapp-button-fixed').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 200, 'easeInOutExpo');
        return false;
    });


})(jQuery);

