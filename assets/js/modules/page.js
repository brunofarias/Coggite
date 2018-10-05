var page = {
  init: function() {
    this.geral();
    this.slider();
    this.header();
    this.links();
  },

  geral: function() {

    // svg
    svg4everybody();

    // placeholder no ie
    $("input, textarea").placeholder();

    // mascara telefone
    var maskBehavior = function(val) {
      return val.replace(/\D/g, "").length === 11
        ? "(00) 00000-0000"
        : "(00) 0000-00009";
      },
      options = {
      onKeyPress: function(val, e, field, options) {
        field.mask(maskBehavior.apply({}, arguments), options);
      }
    };

    $(".telefone").mask(maskBehavior, options);

    // validação
    $('#form').validate({
      errorPlacement: function(error, element) {
        return true;
      },
      submitHandler: function(form) {
        $("form").find("button[type='submit']").prop("disabled", true);
        $("form").find(".btn span").text('Aguarde...');
        $("form").submit();
      }
    });

    $('#form-float').validate({
      errorPlacement: function(error, element) {
        return true;
      },
      submitHandler: function(form) {
        $("form").find("button[type='submit']").prop("disabled", true);
        $("form").find(".btn span").text('Aguarde...');
        $("form").submit();
      }
    });

    $('.footer .btn').click(function () {
      $('.contact-float').addClass('show');
    });

    $('.contact-float .close').click(function () {
      $('.contact-float').removeClass('show');
    });
    
  },

  slider: function() {
    $(".services .owl-carousel").owlCarousel({
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          dots: true,
          loop: true
        },
        600: {
          items: 3,
          dots: false,
          loop: false,
          mouseDrag: false
        }
      }
    });
  },

  header: function() {
    if ($(document).width() > 1024) {
      $("header.header").before(
        $(".header")
          .clone()
          .addClass("fixed")
      );

      $(window).scroll(function() {
        if ($(window).scrollTop() >= $(".featured").height() - 65) {
          $(".header.fixed").addClass("slideDown");
        } else {
          $(".header.fixed").removeClass("slideDown");
        }
      });
    }
  },

  links: function() {

    var lastId,
      topMenu = $(".header"),
      topMenuHeight = topMenu.outerHeight() + 45,
      menuItems = topMenu.find("a"),     
      scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) {
          return item;
        }
      });

    menuItems.click(function(e) {
      var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;

      $("html, body").stop().animate({scrollTop: offsetTop},800);
      e.preventDefault();
    });

    $(window).scroll(function() {

      var fromTop = $(this).scrollTop() + topMenuHeight;

      var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop) return this;
      });

      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";

      if (lastId !== id) {
        lastId = id;
       
        menuItems
          .parent().removeClass("active")
          .end().filter("[href='#" + id + "']").parent().addClass("active");
      }
    });
  }
};
page.init();