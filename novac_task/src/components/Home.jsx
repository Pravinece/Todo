 import React, { useEffect ,useState} from "react";
 import axios from "axios";
 import Form from "./Form";


 export default function Home(){


    const getRowStyle = (status) => {
        if (!status) return { backgroundColor: 'white', color: 'black' }; // Default for missing status
    
        switch (status.toLowerCase()) { // Convert to lowercase for case-insensitive matching
            case 'present':
                return { backgroundColor: 'green', color: 'white' };
            case 'absent':
                return { backgroundColor: 'red', color: 'white' };
            case 'leave':
                return { backgroundColor: 'blue', color: 'white' };
            default:
                return { backgroundColor: 'white', color: 'black' }; // Default style
        }
    };
    
    const [data, setData] = React.useState([]);
    const [on,setOn]=useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000')
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
        })
        .catch((err)=>{
            console.log("Fetching error",err);
        })
    },[]);

    const HandleDelete=()=>{
        const id=parseInt(prompt("enter id to delete: "));
        axios.delete(`http://localhost:8000/${id}`)
        .then((res)=>{console.log('deleted');
        })
        .catch((err)=>{console.log(err);
        })
    }
   return(
    <>
    <button type="button" onClick={HandleDelete} style={{backgroundColor:'red'}}> Delete </button>
    <button onClick={()=>setOn(!on)}>Add + </button>
    {on && <Form toggleForm={() => setOn(!on)} setData={setData}/>}
       <table width="1000" border="1">
        <thead  >
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
        </tr>
        </thead>

        <tbody>
            {data.map((item, index) =>{
            return (
                <tr key={index} >
                     <td>{item.id}</td>
                     <td>{item.name}</td>
                     <td>{item.age}</td>
                     <td style={getRowStyle(item.status)} >{item.status} </td>
                     {/* <td style={{backgroundColor:(item.status =="Present")?"green":"red"}}>{item.status}</td> */}
                     {/* <td style={{backgroundColor:red}} ><button type="button" onClick={HandleDelete}>Delete</button></td> */}
                </tr>
            )}
        )}
        </tbody>
       </table>
    </>
   )

 }