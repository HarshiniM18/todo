import React, { useState } from "react";
export default function NotCompleted({name,description,index,product,setProduct,setShow,setEditID}){
   const [statusValue,setStatusValue]=useState("");
   const status="Not Completed"
    function deleteFunction(){
        const remainingData=product.filter((value,idx)=>idx!=index);
        setProduct(remainingData);
    }
    function handleEdit(index){
        setShow(false);
        setEditID(index);
      }
      function handleStatus(index,event){
         setStatusValue(event.target.value);
         
      }
    return(
        <div className="cardSection">
            <div className="card" >
             <div className="card-body">
             <p className="card-text">Name : {name}</p>
            <p className="card-text">Description : {description}</p>
            <span>Status  </span>
          <select onChange={(event)=>handleStatus(index,event)} defaultValue={status}  >
        <option value="Not Completed">Not Completed</option>
        <option value="Completed">Completed</option>
         </select><br/>
           <div className="cardButtons">
           <button  className="editButton" onClick={()=>handleEdit(index)}>Edit</button>
            <button  className="deleteButton" onClick={()=>deleteFunction()}>Delete</button>
           </div>       
         </div>
         </div>
        </div>
    )
}