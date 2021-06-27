import { catsAPI } from "../api"
const SET_CATS= 'SET_CATS'
const SET_MORE_CATS = 'SET_MORE_CATS'
const DELETE_CATS = 'DELETE__CATS'
const SET_PRELOADER= 'SET_PRELOADER'


let initialState = {
cats: [],
loadMoreCats: [],
preloader: false
};


const catReducer = (state = initialState, action) => {

   switch (action.type) {

      case SET_PRELOADER:
     
          return {
     
            
              ...state,
              
             preloader: action.payload
                                         
            
          }


      case SET_CATS:
     
          return {
     
            
              ...state,
              
             cats: action.payload
              
                           
            
          }


       case SET_MORE_CATS:
     
          return {
     
              ...state,
              loadMoreCats: [...state.loadMoreCats, ...state.cats]
                           
            
          }

   case DELETE_CATS:
     
          return {
     
              ...state,
              loadMoreCats: [],
              cats: []
                           
            
          }
          
          default:
                return state;
      }
    
  }

    
export const setCats = (payload) =>
({ type: SET_CATS, payload });


export const setMoreCats = () =>
({ type: SET_MORE_CATS });


export const deleteMoreCats= () =>
({ type: DELETE_CATS });



export const setPreloader = (payload) =>
({ type: SET_PRELOADER, payload });


//category is 20 when  there is no category
export const getCats = ( page, category=20) => async (dispatch) => {

if(category !== 20){
       dispatch(setPreloader(true))
       const response = await catsAPI.getCatsByCategory(page, category)
      
      dispatch(setCats(Object.values(response)))
      dispatch(setPreloader(false))

}    

if(category === 20){
    dispatch(setPreloader(true))
    const response = await catsAPI.getCats(page)
   
    dispatch(setCats(Object.values(response)))        
    dispatch(setPreloader(false))
     
  }
 
}
   

export default catReducer