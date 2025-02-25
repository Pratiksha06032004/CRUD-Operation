import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { CSVLink } from 'react-csv'

const ViewAll = () => {

  let [student,setStud]=useState([])

  let getData=async ()=>{
    let {data}=await axios.get("http://localhost:5000/Student")
    setStud(data);
  }
  console.log("Sate",student)

  //? []-->componentDidMount-->execute only once
  useEffect(()=>{

    try {
      getData();
    
    } catch (error) {
      console.log(error);
      
      
    }
  
  },[])

  //! Deleted student
   let deletestud=(id)=>{
     console.log("id of student to be deleted",id);// id of student to be deleted
     axios.delete("http://localhost:5000/Student/"+id).then(()=>{
      getData() // Display remaining student on Ui
     })


   }

  return (
    <> 
     <section>
      <h1>Information of all student</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Student Name</th>
            <th>Student Email</th>
            <th>More Option</th>
          </tr>
        </thead>
        <tbody>
          {student.map((val)=>{
            console.log(val); //obj
            return (
              <Fragment key={val.id}>
                <tr>
                  <td>{val.id}</td>
                  <td>{val.sname}</td>
                  <td>{val.semail}</td>
                  <td>
                    <NavLink to={`/edit/${val.id}`}> <button>EDIT</button></NavLink>
                    
                    <button onClick={()=>deletestud(val.id)}>Delete</button>
                  </td>

                </tr>
              </Fragment>
            )
            
          })}
        </tbody>
      </table>
      <div>

        <CSVLink data={student} filename='react-m18'>
          <button>Export to Excel Sheet</button>
          </CSVLink> 
      </div>
     </section>
    </>
  )
}

export default ViewAll

//Export in Excel shhel
//! react-csv 
// npm i react-csv 