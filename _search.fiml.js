
import pagination from "./pagin";

onButtonClick(evt) {

      //pagination
      //reset results of trending movies
      pagination.reset(data.results); 
      //set total results of search movies
      pagination.setTotalItems(data.total_results);
      //reset pagination
      pagination.reset(); 
    };

    function onHomeClick(e) {
        spinner.classList.remove('done');
      
        //pagination reset 
        pagination.reset(); 
      }