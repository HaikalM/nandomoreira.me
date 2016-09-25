(function() {
  'use strict';

  var titleParallax = {
    textParallax : document.querySelector('.js-text-parallax'),

    init: function() {
      window.addEventListener("scroll", function(event) {
        titleParallax.update(this.scrollY);
      }, false);
    },
    update: function(scroll) {
      this.textParallax.style['-webkit-transform'] = 'translateY('+ (scroll * .5) +'px)';
      this.textParallax.style['-moz-transform'] = 'translateY('+ (scroll * .5) +'px)';
      this.textParallax.style['transform'] = 'translateY('+ (scroll * .5) +'px)';
      this.textParallax.style['opacity'] = (1 - ( scroll * .005 ));
    }
  };

  titleParallax.init();

  var header = document.querySelector('.header');

  window.addEventListener("scroll", function(event) {
    if (this.scrollY > 530) {
      header.classList.add("is-fixed");
    } else {
      header.classList.remove("is-fixed");
    }
  }, false);
})();
