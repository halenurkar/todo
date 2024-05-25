import React from 'react'

export default function Task({id,title,content,onDelete }) {
    const handleDelete=()=>{
        onDelete(id);
    }
  return (
    <div className='col-md-4 mb-4'>
        <div className='contentDiv'>
        <h1>{title}</h1>
        <p>{content}</p>
        <button className='btn btn-danger' onClick={handleDelete}>Sİl</button> 
        </div>
        
    </div>
  )
}
