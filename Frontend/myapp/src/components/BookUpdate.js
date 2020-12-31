import React, {useEffect, useState } from "react";
import axios from 'axios';

function Book_UpDateForm(props) {
  const [state, setState] = useState({
    /*booktitle: "",
    author: "",
    formate: "",
    Topic:"",
    PubYear: 1990,
    */
    County:"",
    State:"",
    cases:"",
    death:"",
    date: 1990,//this used to be a date. 
  });
  const [StatedLoaded, Set_StatedLoaded]=useState(false)
  let url= "http://localhost:5000/"
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
// this is on compunt Did Mount Event analogy
useEffect(() => {
    axios.get('http://localhost:5000/getbook/'+props.match.params.id)
        .then(res => {
            // set the state variable from the data received from the axios api
            setState(res.data)
        }) //
       
        .catch(err => {
          console.log("error has occured")
        })
}, []);

useEffect(() => {
    if (state.length>0)
    Set_StatedLoaded(true)
 }, [state]);

 
  const OnSubmit=(e) =>
   {
   
    e.preventDefault();
    const bookdata={
      County:state.County,
      State:state.State,
      cases:state.cases,
      death:state.death,
      date:state.date

    }
    
    axios.post(url+"updatebook/"+props.match.params.id, bookdata)
    .then(res => console.log(res.data));
    

   }
  return (
    <div style={{marginTop: 10}}>
      <h3> Update Book Id: {props.match.params.id}</h3>
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
            State:{" "}
            <select className="form-control"
            name="cases" value={state.State}
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





<center>
<div className="form-group">
            <input type="submit" value="UpDate" className="btn btn-primary" />
        </div>
</center>            
</form>

</div>
);
}

export default Book_UpDateForm;
