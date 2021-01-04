import React, { useState } from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";
//this is all the html which should come from backend. 
//once submitted make it show added data.
function Query() {
  let url= "http://localhost:5000/Input" 
  const [state, setState] = useState({


    County: "",// current state
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
    alert( 
      "Added data: \nCounty: "+state.County+ "\nState: " +state.State+"\nCases: "+ state.cases+"\nDeaths: "+state.death+"\nDate: "+ state.date)
  
   e.preventDefault();
   const bookdata={
    County:state.County}
    
   
   axios.post("http://localhost:5000/getBooks/"+state.County)
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
        <center>
            <input type="submit" value="Add this Data" className="btn btn-primary" />
        </center>                   
        </div>
                
      </form>
      
    </div>
  );
 
}

export default Query;
