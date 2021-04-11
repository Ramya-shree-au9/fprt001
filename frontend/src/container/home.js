import React from 'react'
// import Trello from '../components/Home/trello'
import Todolist from '../components/Home/trello_list'
import {connect} from 'react-redux'
import {DragDropContext} from 'react-beautiful-dnd'
import Addbutton from '../components/Home/addbutton'

export const Home = (props) => {
    console.log(props.todolist)
   
  const handleOnDragEnd=(result)=>{
    //   const {destination,sourse,draggableId} = result

    // if (!destination){
    // //   console.log(result.destination.index)
    //      data2.append(characters[result.destination.index])
    // characters.splice(result.destination.index,1)
    // } 
    
    }
    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className='todolistcontainer'>
          <div className='todolistcontainer divwidth'>
            {props.todolist.map((item,idx)=>{
                return(
            <Todolist key={idx} index={idx} title={item.title} id={item.id} cards={item.cards}/>
                )
            })}
            </div>
            <div  className='todohead2'>
            <Addbutton list='list'/>
            </div>
        </div>
        </DragDropContext>
    )
}



function mapStateToProps(state){
    return{
        todolist:state.lists.initialState
    }   
}
export default connect(mapStateToProps)(Home)

 
