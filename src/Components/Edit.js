import React, { useState, useEffect} from "react";
import {Button, Form} from 'react-bootstrap'
import Emp from "./Emp";
import {v4 as uuid} from 'uuid'
import { useNavigate } from "react-router-dom";

function Edit(){

    

    const [name, setName]=useState("");
    const [age, setAge]=useState("");
    const [id, setId]=useState("");

    let history=useNavigate();

    var index=Emp.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit=(e)=>{
        e.preventDefault();
        let a=Emp[index];
        a.Age=age;
        a.Name=name;
        history("/");
    }

    useEffect(()=>{ 
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('Id'))

    },[])

    return <div>
            <Form className="d-grid gap-2" style={{margin:"15 rem"}} >

            <Form.Group className="mb-3" controlId="formName">
                 <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e)=>setName(e.target.value)}>
                 </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                 <Form.Control type="text" placeholder="Enter Age" value={age} required onChange={(e)=>setAge(e.target.value)}>
            </Form.Control>
            </Form.Group>
            <Button onClick={()=>handleSubmit()} type="submit">Update</Button>
            </Form>
    </div>
    
}


export default Edit;