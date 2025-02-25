import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {

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
            axios.post("http://localhost:5000/Student",playLoad)
            navigate("/viewAll",playLoad);
             
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

  return (
     <section>
        <h1>Adding student</h1>
        <form onSubmit={handelSubmit}>
            <div>
                <label htmlFor='uname'>Student name</label>
                <input type="text" id="uname" required value={sname} name='sname' onChange={handelChange}/></div>
            <div>
                <label htmlFor='uemail'>Student email</label>
                <input type="text" id="uemail" required value={semail} name='semail' onChange={handelChange}/>
            </div>
            <div>
                <button>Submit</button>
            </div>
             
        </form>
     </section>
  )
}

export default Home
