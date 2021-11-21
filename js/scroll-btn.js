(function() {
    'use strict';
  
    var btnScrollDown = document.querySelector('#scroll_down');
  
    function scrollDown() {
      var scrollQuantity = 1100;
      //var windowCoords = document.documentElement.clientHeight;
      (function scroll() {
        if (window.pageYOffset < scrollQuantity) {
          window.scrollBy(0, 12);
          setTimeout(scroll, 0);
        }
        if (window.pageYOffset > scrollQuantity) {
          window.scrollTo(0, scrollQuantity);
        }
      })();
    }
  
    btnScrollDown.addEventListener('click', scrollDown);
  })();