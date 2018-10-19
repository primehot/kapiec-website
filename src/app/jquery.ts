import * as $ from 'jquery';

function addJqueryLogic() {
  $(document).ready(function(){
    addNavbarLogic();
  });
}

function addNavbarLogic() {
  let panelNavbar = $('.panel-navbar');
  let panelHeading = $('.panel-heading');
  let overlap = $('.overlap');

  panelHeading.mouseenter(function () {
    show(overlap);
  });

  panelHeading.mouseleave(function(){
    if(!overlap.is(':hover')) {
      hide(overlap);
    }
  });

  // panelNavbar.mouseenter(function () {
  //   hide(overlap);
  // });

  overlap.mouseleave(function(){
    hide(overlap);
  });
}

function  show(el) {
  el.show().css('z-index', 1).css('visibility', 'visible');
}

function hide(el) {
  el.hide().css('z-index', -1).css('visibility', 'hidden');
}

export {addJqueryLogic};

