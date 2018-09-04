var page = {
  init: function() {
    this.geral();
    this.slider();
  },

  geral: function() {

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
        $("form").submit();
      }
    });

    $('#form-float').validate({
      errorPlacement: function(error, element) {
        return true;
      },
      submitHandler: function(form) {
        $("form").find("button[type='submit']").prop("disabled", true);
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
  }
};
page.init();