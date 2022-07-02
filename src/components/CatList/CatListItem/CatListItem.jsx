import React from 'react'

const CatListItem = ({ cat = [] }) => {
    
    return (
        <div onClick={() => console.log(cat.id)}>
            <img style={{ width: "300px", height: "300px" }} src={cat.url} alt={cat} />
        </div>
    )
}

export default CatListItem