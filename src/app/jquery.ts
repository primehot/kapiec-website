import * as $ from 'jquery';
import {ArticleType} from "./domain/emun/article.type";

function addJqueryLogic() {
  $(document).ready(function () {
    addNavbarLogic(ArticleType.news);
    addNavbarLogic(ArticleType.women);
    addNavbarLogic(ArticleType.dream);
    addCollapseScroll();
    addScrollToTop();
  });
}

function addScrollToTop() {
  let onClick = function () {
    $("html, body").animate({scrollTop: 0}, 700);
  };
  $('.btn-scroll-up').click(onClick);
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.btn-scroll-up').css('visibility', 'visible').fadeIn();
    } else {
      $('.btn-scroll-up').css('visibility', 'visible').fadeOut();
    }
  });
}

function addCollapseScroll() {
  $(window).on('scroll', function () {
    let scrollTop = $(this).scrollTop();
    let headerHeight = $('#navigation-bar-header').height();
    let navigationBarHeight = $('#navigation-bar').height();

    if (scrollTop > headerHeight) {
      $('#navigation-bar')
        .addClass("navbar-fixed")
        .css('top', 0);
      $('.content')
        .css('padding-top', navigationBarHeight);
      $('.overlap-collapse')
        .addClass("navbar-fixed")
        .addClass("col-lg-6 col-md-10")
        .css('top', navigationBarHeight);
    } else {
      $('#navigation-bar')
        .removeClass("navbar-fixed")
        .css('top', 0)
        .clearQueue();
      $('.content')
        .css('padding-top', 0);
      $('.overlap-collapse')
        .removeClass("navbar-fixed")
        .removeClass("col-lg-6 col-md-10")
        .css('top', 0)
        .clearQueue();
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

