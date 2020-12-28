import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Book_Form from "./components/AddBook"
import ShowBooksList from "./components/Displaybooks1.js"
import Book_UpDateForm from "./components/BookUpdate"
import Func_DeleteBook from "./components/DeleteBook"
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <center><h2> On-Line Book Library using React   </h2> </center>
           <br/>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <Link to="/" className="navbar-brand"><h4>Add a Book</h4></Link>
            <Link to="/DisplayBooks" className="navbar-brand"><h4>Display All books</h4> </Link>
            <Link to="/BookUpdate" className="navbar-brand"><h4>Update book</h4> </Link>
            <Link to="/DeleteBook" className="navbar-brand"><h4>Delete A Book</h4> </Link>
            
            </nav>
          <br/>
          <Route path="/" exact component={Book_Form} />
          <Route path="/edit/:id" component={Book_UpDateForm} />
          <Route path="/Delete/:id" component={Func_DeleteBook} />
          <Route path="/DisplayBooks" component={ShowBooksList} /> 
        </div>
      </Router>//this maybe needs to be fixed. 
    );
  }
}

export default App;