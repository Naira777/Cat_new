
import * as axios from 'axios';
import { RandomCategory } from './components/Utiles/index';




const instance = axios.create ({ 

    baseURL: 'https://api.thecatapi.com/v1/'
  

});



export const catsAPI = { 


    getCats (page)  {
    
      
   
        return instance.get(`images/search?limit=10&page=${page}&order=desc`)
    
       .then(response =>

         {
             return response.data;
    
          });

},


  getCatsByCategory (page, category)  {
  
        return instance.get(`images/search?limit=10&page=${page}&category_ids=${category}`)
    
       .then(response =>

         {
             return response.data;
    
          });

}






}


