import React from 'react'
import {Link} from 'react-router-dom'

// generates List title from the first line of text 
let getTitle = (note) =>{
  let title = note.body.split('\n')[0]
  if(title.length > 30){
    title = title.slice(0,30)+"..."
  }
  return title 
}
let getDate = (note)=>{
  return new Date(note.updated).toLocaleDateString() 
}

const ListItem = ({note}) => {
    
  return (
   <Link to={`/note/${note.id}`} >
    <div className='notes-list-item'>
        <h3>{getTitle(note)}</h3>
        <p>Updated on: <span>{getDate(note)}</span></p>
    </div>
   </Link> 
  )
}

export default ListItem
