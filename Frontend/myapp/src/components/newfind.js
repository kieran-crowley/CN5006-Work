import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Booksdata = props => (
  <tr>
      <td>{props.book.County}</td>
      <td>{props.book.date}</td>
      <td>{props.book.State}</td>
      <td>{props.book.death}</td>
      <td>{props.book.cases}</td>
      <td>
      </td>
      <Link to={"/Find/"+props.book.county+"/"+props.book.state}>Edit</Link>
  </tr>
)

export default class getCasesAndDeaths  extends React.Component{	

    constructor(props) {
        super(props);
        this.state = {
			state : "England",
			county : "London",
			books: []};
    };

	handleChange(e){
        const value = e.target.value;
        
        console.log(e.target.name+": "+e.target.value);
        this.setState({
            ...this.state,
            [e.target.name]: value,
        })
    }

    

  
	
    onSubmit(e){
        e.preventDefault();
        axios.get('http://localhost:5000/newfind/'+this.state.county,this.state.state)
        .then(response => {
            console.log("response.data",response.data)
            this.setState({ 
              ...this.state, 
              
              books: response.data });  // set state variable with received data
            console.log("Received data",this.state.todos)
        })
        .catch(function (error){
            console.log(error);
        })
      }

      Show_Books() {
        return this.state.books.map(function(currentbook, i){
            console.log("currentodo object-->"+currentbook +"  i is "+i)
            return <Booksdata book={currentbook} key={i} />;
        })
    }
    

    //this should take the paramaters. and noew below t print of the docomenetd/ 

	
	render() {
        return (
            <div>
              <form onSubmit ={(e) => this.onSubmit(e)}>

                <div className="form-group"> 
                  <label>County: </label>
                  <input  type="text" name="county"
                      className="form-control" value={this.state.county} onChange ={(e) => this.handleChange(e)}/>
            </div>

            <div className="form-group"> 
                  <label>State: </label>
                  <input  type="text" name="state" className="form-control" value={this.state.state} onChange ={(e) => this.handleChange(e)}/>
            </div>

            { this.Show_Books() }
                <div className="form-group">
                  <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
              </form>
             
            </div>
          )
        }
      }       
				

	
   /*axios.post('http://localhost:5000/Find/'+this.state.county,this.state.state)
        .then( res => { console.log(res.data)
            
            this.setState({
                ...this.state, 
                books : res.map( here => { return {...here, date : here.date.substring(0,10)} } )
            });

            console.log(this.state.county,this.state.state);
            console.log(this.state.books);
        })
        .catch(function (error) {
            console.log(error);
            console.log(this.state.books);
        });*/