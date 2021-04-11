import React from 'react'
import Addbutton from './addbutton'
import {Draggable} from 'react-beautiful-dnd'

export const Trello_card = (props) => {
    const {text,id,index}= props
    return (
        <Draggable key={id} draggableId={String(id)} index={index}>
             {(provided) => (
            <p ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={id} className='cardinputs'>{text}</p>

             )}
        </Draggable>
    )
}

export default Trello_card
