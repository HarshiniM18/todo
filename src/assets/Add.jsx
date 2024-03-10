import React, { useState } from "react";

export default function Add({product,setProduct}){

    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    function addFunction(){
        const status="Not Completed"; 
        const newTodo={
            name,
            description,
            status,
        }
        setProduct(product.concat(newTodo));
        setName("");
        setDescription("");
    }
    return(
        <div className="add">
            {/* using preventDefault for prevent the page from loading when the button is clicked */}
            <form onSubmit={(event)=>event.preventDefault} className="addForm">
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Todo Name"/>
            <input type="text" value={description} onChange={(event)=>setDescription(event.target.value)}placeholder="Todo Description"/>
            <button className="addFormButton" type="button" onClick={addFunction}>Add Todo</button>
            </form>  
        </div>
    )
}