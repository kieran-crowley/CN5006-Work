import React, {useEffect, useState } from "react";
import axios from 'axios';

function Func_Query(props) {
  const [state, setState] = useState({
  
    County:"",

  });
  const [StatedLoaded, Set_StatedLoaded]=useState(false)
  let url= "http://localhost:5000/"//think change

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
// this is on compunt Did Mount Event analogy
useEffect(() => {
    axios.get('http://localhost:5000/Find/'+props.match.params.County)
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
    
    axios.post(url+"Find/"+props.match.params.id, bookdata)
    .then(res => console.log(res.data));
    

   }
  return (
    <div style={{marginTop: 10}}>
      <h3> Find From County {props.match.params.County}</h3>
      <form onSubmit={OnSubmit} method="Post">
      <div className="form-group"> 


      <label>County: </label>
          <input  className="form-control"
            type="text" name="County"
            value={state.County}
            onChange={handleChange}/>
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

export default Func_Query;
