import React from 'react'
import './trello.css'
import Trello_card from './trello_card'
import Addbutton from './addbutton'
import {Droppable} from 'react-beautiful-dnd'

export const Trello_list = (props) => {
    const {title,id,cards,index} = props
    return (
        <Droppable droppableId={String(id)} >
             {(provided) => (
                <div key={id} className='todohead' 
                {...provided.droppableProps} 
                ref={provided.innerRef}>
                <center><h2 >{title}</h2></center>
                {cards.map((data,idx)=>{
                    return(
                     <Trello_card key={data.id} text={data.text} id={data.id} index={idx}/>
                    )
                })}
                   <Addbutton list='card' listid={id}/>
                   {provided.placeholder}
                </div>
             )}
        </Droppable>
    )
}

export default Trello_list