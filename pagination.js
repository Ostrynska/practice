import Pagination from 'tui-pagination';
import { refs } from './refs';
import { getAPI } from './popularRender';
import { getMovieNameAPI } from './renderByName';
import { API_URL } from './url';

import { filterItem, getSearchForm, renderFiltrMarkup } from './filter';

// для filter
export function poginationFilter(genre, year, sort) {
  const options = {
    totalItems: JSON.parse(localStorage.getItem('totalItems')),
    itemsPerPage: 20,
    visiblePages: window.screen.width <= 400 ? 2 : 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination('pagination', options);
  pagination.on('afterMove', async function (eventData) {
    resetGallery();

    getSearchForm(genre, year, eventData.page, sort)
      .then(data => {
        console.log(data);
        renderFiltrMarkup(data.results);
      })
      .catch(error => console.log(error));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  removeHiddenPagination();
  if (JSON.parse(localStorage.getItem('totalItems')) <= 20) {
    addHiddenPagination();
  }
}

// для пошуку
export function poginationSearch(movie) {
  // пагінація по пошуку
  const options = {
    totalItems: JSON.parse(localStorage.getItem('totalItems')),
    itemsPerPage: 20,
    visiblePages: window.screen.width <= 400 ? 2 : 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination('pagination', options);
  // pagination.movePageTo(1);
  pagination._options.totalItems = JSON.parse(
    localStorage.getItem('totalItems')
  );
  pagination._options.itemsPerPage = JSON.parse(
    localStorage.getItem('itemsPerPage')
  );
  //   console.log(pagination);
  pagination.on('afterMove', async function (eventData) {
    resetGallery();

    getMovieNameAPI(movie, eventData.page);

    localStorage.setItem('searchPagination', eventData.page);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  removeHiddenPagination();
  if (JSON.parse(localStorage.getItem('totalItems')) <= 20) {
    addHiddenPagination();
  }
}
// // window.screen.width <= 400 ? 3 : 5,
// // для полулярних
// const optionsPop = {
//   totalItems: 20000,
//   itemsPerPage: 20,
//   visiblePages: window.screen.width <= 400 ? 5 : 10,
//   page: 1,
//   centerAlign: true,
//   firstItemClassName: 'tui-first-child',
//   lastItemClassName: 'tui-last-child',
//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage:
//       '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//       '<span class="tui-ico-ellip">...</span>' +
//       '</a>',
//   },
// };

// // console.log(optionsPop.visiblePages);

// // export const paginationPop = new Pagination('pagination', optionsPop);

// paginationPop.on('afterMove', async function (eventData) {
//   resetGallery();

//   getAPI(`${API_URL}&page=${eventData.page}`);
//   localStorage.setItem('pagination', eventData.page);

//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// paginationPop.movePageTo(localStorage.getItem('pagination'));


function resetGallery() {
  refs.list.innerHTML = '';
}



/*!
 * TOAST UI Pagination
//  */
// @charset 'utf-8';
// .tui-pagination * {
//     -moz-user-select: none;
//     -webkit-user-select: none;
//     -ms-user-select: none;
//     user-select: none;
// }

// .tui-ico-ellipsis, .tui-ico-first, .tui-ico-last, .tui-ico-next, .tui-ico-prev {
//     overflow: hidden;
// }

// .tui-pagination.active {
//    display: flex;
// }

.tui-pagination {
   width: 320px;
   height: 35px;
   line-height: normal;
   text-align: center;
   align-items: center;
       @media screen and (min-width: 768px) {
       width: 420px;
       height: 40px;
       padding: 0 0 0 0;
       margin-left: auto;
       margin-right: auto;
       display: flex;        
       align-items: center;
       justify-content: center;
   }
}

.tui-pagination .tui-page-btn {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 35px;
   width: 35px;
   margin-left: 0;
   color: #000000;
   font-size: 12px;
   font-weight: 500;
   line-height: 1.333;
   text-decoration: none;
   vertical-align: middle;
   border-radius: 5px;
   border: none;
   @media screen and (min-width: 768px) {
       height: 40px;
       width: 40px;
       font-size: 14px;
   }
}

.tui-pagination .tui-page-btn:hover {
    background-color: #f4f4f4;
}

.tui-pagination .tui-is-selected, .tui-pagination strong {
    color: #fff;
    background: #ff6b08;
    cursor: default;
}


.tui-pagination .tui-first, .tui-pagination .tui-prev, .tui-pagination .tui-next, .tui-pagination .tui-last  {
   height: 35px;
   width: 40px;
   display: flex;
   align-items: center;
   justify-content: center;
   overflow: hidden;
   white-space: nowrap;
   background-color: #F7F7F7;
   padding: 4px 12px;
   @media screen and (min-width: 768px) {
       height: 40px;
       width: 40px;
   }

}
.tui-pagination .tui-prev, .tui-pagination .tui-next {
   display: none;
   @media screen and (min-width: 768px) {
       display: flex;
       align-items: center;
       justify-content: center;
   }
}

.tui-pagination .tui-page-btn.tui-first, .tui-pagination .tui-page-btn.tui-last {
   margin-right: 4px;
   margin-left: 4px;
}

.tui-pagination .tui-ico-first, .tui-pagination .tui-ico-prev, .tui-pagination .tui-ico-next, .tui-pagination .tui-ico-last, .tui-pagination .tui-ico-ellip {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAiCAYAAAA+stv/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0YwN0I4MUNDNjk0MTFFNjgzNjg5NTM0OEZDQ0YxNTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0YwN0I4MURDNjk0MTFFNjgzNjg5NTM0OEZDQ0YxNTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RjA3QjgxQUM2OTQxMUU2ODM2ODk1MzQ4RkNDRjE1NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RjA3QjgxQkM2OTQxMUU2ODM2ODk1MzQ4RkNDRjE1NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlM+zvEAAAMuSURBVHjaxFdrS5RREH73Zako6kt92x8QRR+qXYjoQneTyKCoMAmKspLI6EMQFBjSxehCdLGixa5maHbZilIro9uH2C2IoF+w/6EstJnleXV2mvO+W6458CA+45mZc+aceV5jyWTSU7aEsJOwUXO5XK7A5fN5vWYFoZawXnOJRKLAufLEDbKTsCmC08nblN/izDy+Iu9h0TNwSw3OlbwLXIXBSSuK6avkNSp5h+JKSX4nInlRTC6g0kheGZG8ykheFZHcjClb0Gcs6nP08Ad+DkRwXlRMH9XUoLpl4C1OWhd22oZWuDhpZkxfOHlxuypCc+UooiimbMFz4Vwewukiqo0iqkOKKIrpO5x1EZy0biSsjeDMPDHvL8yYgCUbTUST971RtjjNaO7VDRxLYOcIHwm3Hes6sOaJ4C4ScoSWEk+voBV8AtdxYVYLJwc/Q9jmKOAy4RZhreDShCYIWZQFUzQdx61dB3HghPexkwr4xhAuqQAvCWsID/kUcaM/42l1Y815R/KicR2o4SuM0kdYfBcBWSN6CGMJZ1WgNzi1DNZwu74QFqNAXnMqLLmH6gN7S1iFvk4kXCV8FQEnERpVwPeElRgw7G8mfCMswqY4ToPQimtaK3xjTvcr7hcQZjz/vyuuX+iDUytkAXNQ2X7snm0q4TV21mgknofXs0/c/mlYw3fgWMToHixgPo6xHq+CbTqhF6/hhJF8AfpfJ57rDKw5TjhZin746DEH2oELwjYTgY6iAOvDIoNR2w5uFvreEPIC/tAKvoR7CFsQMLBdhEOiFdrYv1kNou2EA65B5NKP/6YFLl0YdS2IkRYEzyKmnknR7/Q/weBpQT9aVQu8TCYjtaIVk3JETqAFWrDB4W8WQydcDbPZrL4HUb97qVSqR4zhcYSb6k96MVXZPx5CNTS1BoZmUXwY7XuHt8yDaIIhWB+En4u8YJ7AMO9QFoLFb3sy4Yjyf8KceUGYQjg8El9EPw39KEUrylJAMDFPG7tnmw1/E1DWFrB4PSUcJFwx/HMJjzEd085X8I/JF+LjpR7PURt/Dzwg7Bb6UtYC9mL2dzr8nHiraxBJ+y3AAOpc//DIQNiHAAAAAElFTkSuQmCC) no-repeat 0 0;
    display: inline-block;
    vertical-align: middle;
    font-size: 0px;
}


.tui-pagination .tui-prev {
    margin-right: 10px;
}

.tui-pagination .tui-next {
    margin-left: 10px;
}

.tui-pagination .tui-ico-first {
    width: 11px;
    height: 10px;
    background-position: 0px 0px
}

.tui-pagination .tui-ico-prev {
    width: 6px;
    height: 10px;
    background-position: -26px 0px
}

.tui-pagination .tui-ico-next {
    width: 6px;
    height: 10px;
    background-position: -13px -24px
}

.tui-pagination .tui-ico-last {
    width: 11px;
    height: 10px;
    background-position: 0px -12px
}

.tui-pagination .tui-ico-ellip {
    width: 10px;
    height: 2px;
    margin-top: 16px;
    vertical-align: top;
    background-position: 0px -24px;
    color: #000000;
}

.tui-page-btn .tui-prev-is-ellip .tui-first-child,
.tui-page-btn .tui-prev-is-ellip .tui-last-child {
   height: 35px;
   background-color: none;
   width: 40px;
   overflow: hidden;
   white-space: nowrap;
   @media screen and (max-width: 768px) {
       display: flex;
       align-items: center;
       justify-content: center;
       height: 40px;
   }
}


      //pagination
      //reset results of trending movies
      pagination.reset(data.results); 
      //set total results of search movies
      pagination.setTotalItems(data.total_results);
      //reset pagination
      pagination.reset(); 