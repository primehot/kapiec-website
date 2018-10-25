import * as $ from 'jquery';
import {ArticleType} from "./domain/emun/article-type";

function addJqueryLogic() {
  $(document).ready(function () {
    addNavbarLogic(ArticleType.news);
    addNavbarLogic(ArticleType.women);
    addNavbarLogic(ArticleType.dream);
    addCollapseScroll();
  });
}

function addCollapseScroll() {
  $(window).on('scroll', function () {
    let scrollTop = $(this).scrollTop();
    let headerHeight = $('#navigation-bar-header').height();
    let navigationBarHeight = $('#navigation-bar').height();

    if (scrollTop > headerHeight) {
      $('#navigation-bar').addClass("navbar-fixed")
        .css('top', 0);
      $('.overlap-collapse').addClass("navbar-fixed")
        .css('top', navigationBarHeight);
    } else {
      $('#navigation-bar').removeClass("navbar-fixed").clearQueue()
        .css('top', 0);
      $('.overlap-collapse').removeClass("navbar-fixed").clearQueue()
        .css('top', 0);
    }
  });
}

function addNavbarLogic(navElement) {
  let panelHeading = $('.panel-heading' + '-' + navElement);
  let overlap = $('.overlap' + '-' + navElement);

  panelHeading.mouseenter(function () {
    showElement(overlap);
  });

  panelHeading.mouseleave(function () {
    if (!overlap.is(':hover')) {
      hideElement(overlap);
    }
  });

  overlap.mouseleave(function () {
    hideElement(overlap);
  });
}

function showElement(el) {
  el.show().css('z-index', 1).css('visibility', 'visible');
}

function hideElement(el) {
  el.hide().css('z-index', -1).css('visibility', 'hidden');
}

export {addJqueryLogic};

