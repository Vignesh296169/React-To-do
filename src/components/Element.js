import React from 'react'
import{useState}from'react'
import"./Element.css"
function Element(props) {
   const deleteHandler=()=>{
      secondone('')
   }
   const [firstonem,secondone]=useState(props.title)
  return (
    <div className='first'>
    <div>{firstonem}{firstonem==='pavitha'?<h6 style={{color:"red"}}>Sorry,Name not Found instead of this try name Pavithra </h6>:'' || firstonem==="pavithra" ?<h2>vanakam-Chef😍</h2>:''}</div>
    <div className='second'>
     <button className={firstonem.length===0?"result":<p>''</p>}  onClick={deleteHandler}>delete <i class="fa-solid fa-ban"></i></button>
     </div>
    </div>
  )
}

export default Element