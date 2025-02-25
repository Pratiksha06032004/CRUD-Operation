import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateStu = () => {

    let [stu,setStud]=useState({
        sname:"",
        semail:""
    })

    let {sname,semail}=stu;

    // Naviget-->holds the function return by useNavigate
    let navigate=useNavigate();

    let handelSubmit=(event)=>{
        event.preventDefault();
        console.log(stu);
         try {
            let playLoad=stu;
            axios.put("http://localhost:5000/Student/"+id,playLoad)
            navigate("/viewAll",playLoad);
            toast.success('Successfully Update!')
         } catch (error) {
            console.log(error);
        }
        finally{

            setStud({
                sname:"", // Convertiong first input fill empty
                semail:"" // Convertiong second input fill empty
            })
        }

        
    }

    let handelChange=(event)=>{
        let {name,value}=event.target;
        setStud({...stu,[name]:value})
    }
    //! ****title

    useEffect(()=>{
        document.title="update stu"
    })
    //! fetching edit student info

    let {id}=useParams();

    let getData= async ()=>{
        let {data}= await axios.get('http://localhost:5000/Student/'+id);
        console.log(data);
        setStud(data) // to get data in input filed
        
    }

    useEffect(()=>{
        try {

            getData()
            
        } catch (error) {
            console.log(error);
            
            
        }
    },[])

  return (
     <section>
        <h1>Update student</h1>
        <form onSubmit={handelSubmit}>
            <div>
                <label htmlFor='uname'>Student name</label>
                <input type="text" id="uname" required value={sname} name='sname' onChange={handelChange}/></div>
            <div>
                <label htmlFor='uemail'>Student email</label>
                <input type="text" id="uemail" required value={semail} name='semail' onChange={handelChange}/>
            </div>
            <div>
                <button>Update</button>
            </div>
             
        </form>
     </section>
  )
}

export default UpdateStu

//! useParams()-->access the specific slug value(parameter) by destructing it
//  let {slug}=useParams()
