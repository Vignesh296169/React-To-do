
import Formcontent from './Formcontent'


import React from 'react'

function Newaddform(props) {

    const dataSaveHandler=(signalFormContent)=>{
    //    receiving data written in separated variable
        const receiveData={
        ...signalFormContent,
        id:Math.random().toString(),
     }
    //  data pass to App.js
     props.onAdddata(receiveData)
    }
  return (
    <div>
  
   <Formcontent onSavedata={dataSaveHandler}/>
    </div>
  )
}

export default Newaddform