import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CatList from './components/CatList/CatList';
import { getCatsCategory, getCatsList } from './store/CatListSlice';
import CatNav from './components/CatNav/CatNav';
import "./App.css";
import { getCats } from './store/CatListSlice';


const App = () => {

  const dispatch = useDispatch();
  const { catList } = useSelector(state => state);
  const [categoryId, setCategoryId] = useState("");
 

  useEffect(() => {

      dispatch(getCatsList());
      dispatch(getCatsCategory());

  }, [])

  const handleCategory = (id) => {
    setCategoryId(id)
    dispatch(getCatsList(id));
  }

  const handleShowAllButton = () => {
      dispatch(getCats(categoryId));
      
  } 


  return (
    <>
      <h1 className='title'>Cats</h1>
      <div className='App'>

        <div>
          <CatNav navList={catList.navList} handleCategory={handleCategory} />

        </div>

        <CatList cats={catList.list} isLoading={catList.isLoading} />

      </div>

     <div className="show-all">
        <button onClick={handleShowAllButton}>ShowAll</button>
      </div> 
    </>
  )
}

export default App