import React, { useState } from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";
//this is all the html which should come from backend. 
//once submitted make it show added data.
function Book_Form() {
  let url= "http://localhost:5000/" 
  const [state, setState] = useState({
   /* booktitle: "",
    author: "",
    formate: "",
    Topic:"",
    PubYear: 1990,*/

    County: "",
    State: "",
    cases: "",
    death: "",
    date: 1990, //this used to be a date. 
  });

 
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  const OnSubmit=(e) =>
  {

    window.location='DisplayBooks1';//maybe
    alert( 
    "Added data: \nCounty: "+state.County+ "\nState: " +state.State+"\nCases: "+ state.cases+"\nDeaths: "+state.death+"\nDate: "+ state.date)



    

    
  
   e.preventDefault();
   const bookdata={
           /*booktitle:state.booktitle,
           PubYear:state.PubYear,
           author:state.author,
           Topic:state.Topic,
           formate:state.formate
*/
    County:state.County,
    State:state.State,
    cases:state.cases,
    death:state.death,
    date:state.date




   }//fix all below:
   
   axios.post(url+"addbooks", bookdata)
   .then(res => console.log(res.data));
   }
  return (
   <div style={{marginTop: 10}}>
      <h3>Add Covid Data</h3>
      <form onSubmit={OnSubmit} method="Post">
        
        
         <div className="form-group"> 
          <label>County: </label>
          <input  className="form-control"
            type="text" name="County"
            value={state.County}
            onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label>
            State: {" "}
            <select className="form-control"
            name="State" value={state.State}
            onChange={handleChange}>
            <option value="England">England</option>
            <option value="Wales" >Wales</option>
            <option value="Scotland">Scotland</option>
            <option value="Northern Ireland">Northern Ireland</option>
            <option value="Other">Other</option>
          </select>
          </label>
        </div>

        <div className="form-group"> 
          <label>Cases: </label>
          <input  className="form-control"
            type="number" name="cases"
            value={state.cases}
            onChange={handleChange}/>
        </div>

        <div className="form-group"> 
          <label>Deaths: </label>
          <input  className="form-control"
            type="number" name="death"
            value={state.death}
            onChange={handleChange}/>
        </div> 
        
        <div>
        <label>
         Date Year (between 1980 and 2020):
          <input
            type="date"name="date"
            min="1980"max="2020" value={state.date}
            onChange={handleChange} />
        </label>
        </div>
        
        <div className="form-group">
        <center>
            <input type="submit" value="Add this Data" className="btn btn-primary" />
        </center>                   
        </div>
                
      </form>
      
    </div>
  );
 
}

export default Book_Form;
