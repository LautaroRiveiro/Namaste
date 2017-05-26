$(document).ready(function() {

    //--- Configuracion de los eventos cuando scrolleo
    $(window).scroll(function(){

        //--- Configuración del parallax ---//
        if (window.matchMedia("(min-width: 768px)").matches) {  /* the viewport is at least 768 pixels wide (md) */
            var barra = $(window).scrollTop();
            var posicion = barra * 0.10;
            $('.inicio').css({
                'background-position': '0 -' + posicion + 'px'
            });
        }

        //--- Transparencia del navbar y flecha arriba ---//
        if ($(this).scrollTop() > 20){
            $('#barra-menu').removeClass('navbar-transparente');

            if ($(this).scrollBottom() > 30){
                $('.ir-arriba').slideDown();
            }
            else{
                $('.ir-arriba').slideUp();
            }
        }
        else{
            $('#barra-menu').addClass('navbar-transparente');
            $('.ir-arriba').slideUp();
        }

    });


    //--- Configuracion del SmoothScroll para scroll con efecto en link interno
    smoothScroll.init({
        // Selectors
        selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
        ignore: '[data-scroll-ignore]', // Selector to ignore (won't animate scrolling on links with this selector)
        selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]

        // Speed & Easing
        speed: 1000, // Integer. How fast to complete the scroll in milliseconds
        offset: 45, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
        easing: 'easeInOutCubic', // Easing pattern to use

        // Custom easing patterns.
        // Must be an object with the easing name as the key
        // Each pattern must be a function, with `time` as the argument, that returns the pattern
        easingPatterns: {
            myCustomEasingPattern: function (time) {
                return time * (2 - time);
            }
        },

        // Callback API
        before: function (anchor, toggle) {}, // Function to run before scrolling starts
        after: function (anchor, toggle) {} // Function to run after scrolling completes
    });


    //--- Configuracion de la flecha para volver al inicio
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 500);
    });

});

//--- Creacion de funcion inversa a scrollTop
$.fn.scrollBottom = function() { 
  return $(document).height() - this.scrollTop() - this.height(); 
};