import React from 'react'


export const ListItems = ({block,OnDelete,OnHover}) => {
  return (
    <div className='text-center py-3 border shadow my-3'>
        <h3>Name : {block.name}</h3>
        <h5>Height : {block.height} KG</h5>
        <h5>Weight : {block.weight} CM</h5>
        <h4 className='text-success'>BMI:{((block.weight/(block.height*block.height))*10000).toFixed(2)}</h4>
        <h5>You Tried to Delete me : {block.Hover} Times</h5>
        <button className='btn btn-warning' onMouseOver={()=>{OnHover(block)}} onClick={()=>{OnDelete(block)}}>Delete</button>
    </div>
  )
}


