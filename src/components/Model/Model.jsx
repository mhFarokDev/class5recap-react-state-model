import React from 'react'

import "./Model.scss"
const Model = ({setShowModel}) => {
    
  return (
    <>
        <div className="model-view-sec">
            <div className="card">
                <div className="card-title">
                    <h3>Model</h3>
                    <h3 onClick={()=>setShowModel(false)}>X</h3>
                </div>
                <hr />
                <div className="model-body">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni tempora error dicta inventore cum praesentium nesciunt possimus minus laboriosam similique eligendi facere repellat, vitae corrupti quasi. Totam vitae consectetur doloremque tempora</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Model