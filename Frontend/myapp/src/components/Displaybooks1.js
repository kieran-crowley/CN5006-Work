import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// hpw does it work
// we use class components.
//state of the component is initialzed in constructor
//we use componentDidMount event for receiving data from the server through axios library
// the received data is stored in the state variable of the componenet using this.setState
// the Data is rendered using a HTML Table in the render method.first we define the table header
// then for displaying the data in the table we create a function Showbooks in the table body
// The showbooks function read the data from the state of the components using java script map method 
// the java script map methods read object by object from the give variable and then we passed this object (state) 
// to another function Booksdata for displaying it with current book as property.
// The books data uses td tag as table data and  show the json book data in each of these table 
// Note the books data must be in the same order as defined in the schema and saved in the mongodb
const Booksdata = props => (
    <tr>
        <td>{props.book.booktitle}</td>
        <td>{props.book.PubYear}</td>
        <td>{props.book.author}</td>
        <td>{props.book.Topic}</td>
        <td>{props.book.formate}</td>
        <td>
            <Link to={"/edit/"+props.book._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/Delete/"+props.book._id}>Delete</Link>
        </td>
    </tr>
)

export default class ShowBooksList extends Component {

    constructor(props) {
        super(props);
        this.state = {books: []}; // books is the name of the state variable here
    }
    componentDidMount() {
        axios.get('http://localhost:5000/allbooks/')//('http://localhost:5000/allbooks')//'http://localhost:5000/todos/'
            .then(response => {
                console.log("response.data",response.data)
                this.setState({ books: response.data });  // set state variable with received data
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

    render() {
        return (
            <div>
                <h3>Book List</h3>
                <table className="table table-striped" class="table table-hover"style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Book Title</th>
                            <th>Pub Year</th>
                            <th>Auhtor</th>
                            <th>Subject</th>
                            <th>Formate</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        { this.Show_Books() }
                    </tbody>
                </table>
            </div>
        )
    }
}