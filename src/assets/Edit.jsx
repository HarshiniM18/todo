import React, { useEffect, useState } from "react";
export default function Edit({product,setProduct,show,setShow,editID}){

    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    function updateFunction(){
        const edited={
            name,
            description,
        }
        product[editID]=edited;
        setProduct([...product]);
        setShow(true);
    } 
    useEffect(()=>{
        const selected=product.filter((value,idx)=>editID==idx);
        setName(selected[0].name);
        setDescription(selected[0].description);

    },[editID])
    return(
        <div className="edit">
             {/* using preventDefault for prevent the page from loading when the button is clicked */}
            <form onSubmit={(event)=>event.preventDefault} className="updateForm">
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
            <input type="text" value={description} onChange={(event)=>setDescription(event.target.value)}/>
            <button  className="updateFormButton" type="button" onClick={updateFunction}>Update Todo</button>
            </form>
        </div>
    )
}