import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Form({ toggleForm, setData }){

    const navigate=useNavigate();
    const [formdata,setFormdata]=useState({
        id:'',  
        name:'',
        age:'',
        status:'present'
    });


      const HandleSubmit=(e)=>{
        e.preventDefault();
        console.log(formdata);
        axios.post('http://localhost:8000', { formdata })
        .then((res)=>{
            // console.log(res.data);
            setData((prevData) => [...prevData, formdata]); // Add new data locally
            toggleForm(); 
        })
        .catch((err)=>{            
            console.log(err);
        })
      }


    function HandleChange(e){
        const {name,value}=e.target;                
        setFormdata({...formdata,[e.target.name]:e.target.value})
    }

    return(
        <>
        {<form onSubmit={HandleSubmit}>
        <input type="text" defaultValue={formdata.id} placeholder="Enter your id" name="id" onChange={HandleChange} />
        <input type="text" defaultValue={formdata.name} placeholder="Enter your name" name="name" onChange={HandleChange}/>
        <input type="text" defaultValue={formdata.age} placeholder="Enter your age" name="age" onChange={HandleChange} />
        <select name="status" defaultValue={formdata.status} onChange={HandleChange}>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
        </select>
        <button type="submit">Submit</button>
        </form>
}

        </>
    )

}