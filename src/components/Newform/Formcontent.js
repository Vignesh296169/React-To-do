import {useState}from'react'
import React from 'react'

function Formcontent(props) {
    const[enteredTitle,setTitle]=useState('')
    const textHandler=(e)=>{
      setTitle(e.target.value);
    }
    const submitHandler=(event)=>{
      event.preventDefault();
      const returnData={
        title:enteredTitle,
      }
      props.onSavedata(returnData);
      setTitle('')
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
    <input  value={enteredTitle} onChange={textHandler} type='text'/>
    <button type='submit'>ADD</button>
  </form>
    </div>
  )
}

export default Formcontent;