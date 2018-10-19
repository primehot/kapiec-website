import * as $ from 'jquery';
import {ArticleType} from "./emun/article-type";

function addJqueryLogic() {
  $(document).ready(function(){
    addNavbarLogic(ArticleType.news);
    addNavbarLogic(ArticleType.women);
    addNavbarLogic(ArticleType.dream);
  });
}

function addNavbarLogic(navElement) {
  let panelHeading = $('.panel-heading' + '-' + navElement);
  let overlap = $('.overlap' + '-' + navElement);

  panelHeading.mouseenter(function () {
    showElement(overlap);
  });

  panelHeading.mouseleave(function(){
    if(!overlap.is(':hover')) {
      hideElement(overlap);
    }
  });

  overlap.mouseleave(function(){
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

