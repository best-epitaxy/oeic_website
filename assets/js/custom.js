jQuery(document).ready(function ($) {
  $('.nav-item a[href="#top"]').addClass("active");
  $(".navbar-nav .nav-link").on("click", function () {
    // 移除先前所有導航項目上的 'active' 類
    $('.nav-item a[href="#top"]').removeClass("active");
    $(".navbar-nav .nav-item").removeClass("active");

    // 將 'active' 類添加到被點擊的導航項目上
    // 這裡使用了 $(this).parent() 來定位到 <li> 元素，也就是 .nav-item
    $(this).parent().addClass("active");

    // 如果你需要防止頁面跳轉到錨點，可以在這裡添加一行代碼：
    // e.preventDefault();
  });
  ("use strict");
  // $(".nav-link").click(function () {
  //   // 在992px以下，點擊按鈕後隱藏#navbarResponsive
  //   if ($(window).width() < 992) {
  //     $("#navbarResponsive").toggle();
  //   }
  // });
  $(function () {
    $("#tabs").tabs();
  });

  $('a[href^="#"]').click(function (e) {
    e.preventDefault();

    let targetId = $(this).attr("href").substring(1);
    let targetElement = $("#" + targetId);
    let targetPosition = targetElement.offset().top;

    $("html, body").animate(
      {
        scrollTop: targetPosition - 130, // 100 是你想要的留白高度
      },
      "slow"
    ); // 'slow' 會實現平滑滾動效果

    if ($(window).width() < 992) {
      $("#navbarResponsive").collapse("hide");
      $(".navbar-toggler").attr("aria-expanded", "false");
    }
  });

  // Page loading animation

  $("#preloader").animate(
    {
      opacity: "0",
    },
    600,
    function () {
      setTimeout(function () {
        $("#preloader").css("visibility", "hidden").fadeOut();
      }, 300);
    }
  );

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".header-text").height();
    var header = $("header").height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });
  if ($(".owl-testimonials").length) {
    $(".owl-testimonials").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      margin: 30,
      autoplay: true,
      smartSpeed: 700,
      autoplayTimeout: 6000,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        460: {
          items: 1,
          margin: 0,
        },
        576: {
          items: 2,
          margin: 20,
        },
        992: {
          items: 2,
          margin: 30,
        },
      },
    });
  }
  if ($(".owl-partners").length) {
    $(".owl-partners").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      margin: 30,
      autoplay: true,
      smartSpeed: 700,
      autoplayTimeout: 6000,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        460: {
          items: 1,
          margin: 0,
        },
        576: {
          items: 2,
          margin: 20,
        },
        992: {
          items: 4,
          margin: 30,
        },
      },
    });
  }
  // 首頁slide show 開關以及時間
  $(".Modern-Slider").slick({
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: "linear",
    // fade:true,
    draggable: false,
    prevArrow: '<button class="PrevArrow"></button>',
    nextArrow: '<button class="NextArrow"></button>',
  });

  // function visible(partial) {
  //   var $t = partial,
  //     $w = jQuery(window),
  //     viewTop = $w.scrollTop(),
  //     viewBottom = viewTop + $w.height(),
  //     _top = $t.offset().top,
  //     _bottom = _top + $t.height(),
  //     compareTop = partial === true ? _bottom : _top,
  //     compareBottom = partial === true ? _top : _bottom;

  //   return compareBottom <= viewBottom && compareTop >= viewTop && $t.is(":visible");
  // }
  function visible(partial) {
    var $t = partial,
      $w = jQuery(window);

    // 確保元素存在
    if ($t.length === 0) {
      console.log("Element not found");
      return false;
    }

    var viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop && $t.is(":visible");
  }

  $(window).scroll(function () {
    if (visible($(".count-digit"))) {
      if ($(".count-digit").hasClass("counter-loaded")) return;
      $(".count-digit").addClass("counter-loaded");

      $(".count-digit").each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate(
          { Counter: $this.text() },
          {
            duration: 3000,
            easing: "swing",
            step: function () {
              $this.text(Math.ceil(this.Counter));
            },
          }
        );
      });
    }
  });
});
