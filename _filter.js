
import pagination from "./pagin";


function eventYear(evn) {

    getSearchYear(page, year).then(data => {
      //pagination
      //reset results of trending movies
      pagination.reset(data.results); 
      //set total results of search movies
      pagination.setTotalItems(data.total_results);
    });
  }


function eventGenre(evn) {
    getSearchGenre(page, genre).then(data => {

      //pagination
      //reset results of trending movies
      pagination.reset(data.results); 
      // console.log(data.results);
      //set total results of search movies
      pagination.setTotalItems(data.total_results);
      //reset pagination
      pagination.reset(); 
    });
  }

function eventSort(evn) {

    getSearchSort(page, sort).then(data => {

      //pagination
      //reset results of trending movies
      // pagination.reset(data.results); 
    });
  }

