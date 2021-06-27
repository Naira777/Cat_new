import React, {  useEffect, useState} from "react";
import { getCats, setMoreCats, deleteMoreCats } from "../../../redux/reducer";
import * as Styled from "./styled";
import {useDispatch, useSelector} from 'react-redux'
import Cat from "../../Cat";
import FormSelect from './../../FormSelect/index'
import { useHistory, useParams } from 'react-router'
import Preloader from "../../Preloader/Preloader";



const First = () => {

const history = useHistory();
const { filter } = useParams()

const dispatch = useDispatch();
const  cats  = useSelector(state => state.catsPage.cats)
const  loadMoreCats  = useSelector(state => state.catsPage.loadMoreCats) 
const  preloader  = useSelector(state => state.catsPage.preloader) 
const [page, setPage]= useState(1)

const [filterType, setFilterType] = useState('')


const handleFilter = (e) => {

    const nextFilter = e.target.value
     
    setFilterType(nextFilter)
    history.push(`/search/${nextFilter}`)
    setPage(1)

    }


const configFilters = {

    defaultValue: filterType,
  
  

    options: [{
        name: 'Show all',
        value: ''
    },
  {
         name: 'boxes',
        value: 5
      
  },
  {
        name: 'space',
        value: 2
  },

  {
        name: 'clothes',
        value: 15
  },

  {
        name: 'sinks',
        value: 14
  },
 {
        name: 'hats',
        value: 1
  },


 {
        name: 'sunglasses',
        value: 4
  },
   {
        name: 'ties',
        value: 7
  }
  
  ],

  handleChange: handleFilter
}


    
  useEffect(() => {

    dispatch(deleteMoreCats())
    dispatch(getCats(page,filter));
   
         
    },[filter])




  useEffect(() => {

   dispatch(setMoreCats())
   dispatch(getCats(page, filter));
  
         
    },[page])
 



    
const handleClick = () => {

    setPage(page+1)
    

}




  return (
   <>
<Styled.AppSideBar>
   <h1>
        Browse Filters
        </h1>
        <FormSelect {...configFilters}/>

    </Styled.AppSideBar>

<Styled.AppContent>

{(loadMoreCats.length >2) && loadMoreCats.map(item => {
return (

<Cat  key={item.id}  url={item.url} />

)
}

)

}

{cats.map(item => {
return (

<Cat  key={item.id}  url={item.url}   />

)
}

)}

{preloader && <Preloader />}
<Styled.Button onClick={handleClick}> Load More </Styled.Button>

</Styled.AppContent>


</>

  );
};
export default First;