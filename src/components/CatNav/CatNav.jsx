import React from 'react';
import "./CatNav.css";

const CatNav = ({navList, handleCategory}) => {

  

  
  return (
    <div className='cat-nav'>
            {
                navList.map((list) => {
                       return  <div key={list.id}><button onClick={() => handleCategory(list.id)}>{list.name}</button></div>
                })
            }
    </div>
  )
}

export default CatNav