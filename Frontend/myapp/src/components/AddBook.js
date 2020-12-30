import React, { useState } from "react";
import axios from 'axios';
//this is all the html which should come from backend. 
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
          <label>State: </label>
          <input  className="form-control"
            name="State"value={state.State}
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>
            Cases:{" "}
            <select className="form-control"
            name="cases" value={state.cases}
            onChange={handleChange}>
            <option value="Computer Science">CS</option>
            <option value="Programming" >Programming</option>
            <option value="Data Science">Data Sceince</option>
            <option value="AI">AI</option>
            <option value="Engineering">Engineering</option>
          </select>
          </label>
        </div>
        <div className="form-group">
        <label>Deaths: </label>
        <div className="form-check form-check-inline">
          <input className="form-check-label"
            type="radio" name="death" value="Hard Copy"
            checked={state.death === "Hard Copy"}
            onChange={handleChange} />
         <label className="form-check-label"> Hard Copy </label>
         </div>
         <div className="form-check form-check-inline">
         <input className="form-check-label"
            type="radio"name="formate" value="Electronic Copy"
            checked={state.death === "Electronic Copy"}
            onChange={handleChange}
          />
         <label className="form-check-label"> Electronic Copy</label>
        </div>
        </div>  
        <div>
        <label>
         Date Year (between 1980 and 2020):
          <input
            type="range"name="date"
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
