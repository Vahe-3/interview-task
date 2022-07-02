import React from 'react'
import CatListItem from './CatListItem/CatListItem';
import "./CatList.css"

const CatList = ({ cats = [], isLoading }) => {


  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='cat-list'>{

      cats.map(cat => {
        return <CatListItem key={cat.id} cat={cat} />
      })

    }

    </div>
  )
}

export default CatList