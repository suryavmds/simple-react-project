import Header2 from "./Header2";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
function Second(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [arrayItems,setArrayItems]=useState([])

    function addItems(){
        var temp={
            name:name,
            email:email
        }
        setArrayItems(oldArray => [...oldArray, temp]);
        setName("");
        setEmail("");
        console.log(arrayItems);
    }
    return(
        <div>
            <Header2/>
            <h1 className="title">Second page</h1>
            <ul class="list-group">
                {
                arrayItems.map((l)=>{
                    return(
                        <>
                        <li class="list-group-item">{l.name} | {l.email}</li>
                        </>
                    )
                })
                }
            </ul>
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                       <form>
                       <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Antony" value={name} onChange={e=>setName(e.target.value)}/>
                        </div>
                       <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com" value={email} onChange={e=>setEmail(e.target.value)}/>
                        </div>
                       </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={addItems}>Add item</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Second;