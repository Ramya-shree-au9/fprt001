import React,{useState} from 'react'

export const Addbutton = (props) => {
    const [addtext,setText] = useState(false)
    const [cardtext,setCardText] = useState(false)

    const rendercontent = (props.list === 'list')?'Add Todo':'Add Cards'
    const Addcardrender = (props.list === 'list')?'Add Todo':'Add Card'

    const buttonrender=()=>{
        setText(true)
    }

    const cancelrender=()=>{
        setText(false)
    }
    const carddetailrender=(e)=>{
        setCardText(e.target.value)
    }

    return (
        <div>
            {addtext?
            <div>
                <textarea className='inputbtnadd' onchange={carddetailrender}></textarea>
                <div className='bottomicon'>
                <button className='btn btn-success addcardbtn'>{Addcardrender}</button>
                <div className='cancelbtncard' onClick={cancelrender}>
                <i class="fas fa-times"></i>
                </div>
                </div>
            </div>:
             <h5 className='mt-2 p-2 addcardsbtn text-primary' onClick={buttonrender}>
                 <i className="fas fa-plus mr-3"></i>{rendercontent}</h5>}
        </div>
    )
}

export default Addbutton
