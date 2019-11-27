jQuery(document).ready(function( $ ) {
  $.fn.extend({
    animateCss: function(animationName, callback) {
      var animationEnd = (function(el) {
        var animations = {
          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd',
        };

        for (var t in animations) {
          if (el.style[t] !== undefined) {
            return animations[t];
          }
        }
      })(document.createElement('div'));

      this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);

        if (typeof callback === 'function') callback();
      });

      return this;
    },
  })

  /*
 *Animations
 */

 $('#services article').on('mounseenter', function(event){ 
   event.stopPropagation();
   $(this).find('img').animateCss('rubberBand');
 });

$('.logo').on('mouseenter', function(event){
  event.stopPropagation();
  $(this).animateCss('tada');
  });
$('.logo').animateCss('tada');

/*
 *Mobile menu
 */

$nav = $('#main-navigation');

$("#menu-btn").on('click', function(event){
  event.stopPropagation();
  event.preventDefault();

    var $this = $(this);

    if ($this.hasClass('is-active')){
      //Opened menu
      $this.removeClass('is-active')
      $nav.removeClass('active')
    } else {
      //Closed menu
      $this.addClass('is-active')
      $nav.addClass('active')
    }

  });

});

