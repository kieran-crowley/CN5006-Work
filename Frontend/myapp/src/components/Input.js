import React, { Component } from 'react';
import axios from 'axios';

export default class Query extends Component {

    constructor(props) {
        super(props);

    this.onChangeCounty = this.onChangeCounty.bind(this); // books is the name of the state variable here
    this.onSubmit = this.onSubmit.bind(this)

     this.state= {
      county:''
    }
  }

    onChangeCounty(e) {
    this.setState({
    county: e.target.value
})
    }
  
onSubmit(e) {
  e.preventDefault();

  const book=  {
  county: this.state.county
  }

  console.log("hiiiiiiii"+book.county);


  axios.get('http://localhost:5000/Find/'+this.state.county, book)//post not working.
  .then(res => console.log(res.data));

this.setState({
  county: ''
})

  

  //window.location='/';//maybe


}
    
  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.county}
                onChange={this.onChangeCounty}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

