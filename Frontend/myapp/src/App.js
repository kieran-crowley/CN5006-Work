import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Book_Form from "./components/AddBook"
import ShowBooksList from "./components/Displaybooks1.js"
import Book_UpDateForm from "./components/BookUpdate"
import Func_DeleteBook from "./components/DeleteBook"
import ShowBooksList20 from "./components/Displaybooks120.js"
import Query from "./components/Input"
import ShowBooksListnewfind from "./components/newfind.js"
import Func_Query from "./components/AddQuery.js"
import infoshow from "./components/info.js"

/*2.4. Add separate end points for update case, death and date for a given state and county, the updated record should be displayed on the browser.(marks 5)//just need update to screen. 
2.5 It shouldFunc_ also have an separate endpoint to show total number of cases and deaths for a given state and county, the updated record should be displayed on the browser (marks 5)
2.6 It should also have an separate endpoint for deleting a document for given state and county (marks 4)
2.7. it should have an endpoint to display first 20 documents from the covid data base for a given date and state. the data should be displayed on browser.(marks 4)
2.8. it should have an endpoint to display the states where Cases are more than the given value entered by the user in a single day. (marks 4)
2.9 . it should also have an endpoint to display your laptop information using os package to the user (marks 5 )

*/
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <center><h2> On-Line Covid Library using React   </h2> </center>
           <br/>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <Link to="/" className="navbar-brand"><h4>Add Covid Data</h4></Link>
            <Link to="/DisplayBooks1" className="navbar-brand"><h4>Display Covid Data</h4> </Link>
            <Link to="/Input" className="navbar-brand"><h4>Delete Deaths In County/State</h4> </Link>
            <Link to="/CasesMore" className="navbar-brand"><h4>More cases them </h4> </Link>
            <Link to="/info" className="navbar-brand"><h4>Laptop Information</h4> </Link>
            <Link to="/DisplayBooks120" className="navbar-brand"><h4>Display 20</h4> </Link>
            <Link to="/newfind" className="navbar-brand"><h4>New Find</h4> </Link>
            
            </nav>
          <br/>
          <Route path="/" exact component={Book_Form} />
          <Route path="/edit/:id" component={Book_UpDateForm} />
          <Route path="/Delete/:id" component={Func_DeleteBook} />
          <Route path="/DisplayBooks1" component={ShowBooksList} /> 
          <Route path="/DisplayBooks120" component={ShowBooksList20} /> 
          <Route path="/Input" component={Query} /> 
          <Route path="/newfind" component={ShowBooksListnewfind} />
          <Route path="/Find/:thiscounty/:thisstate" component={Func_Query} />
          <Route path="/info" component={infoshow} />
          
          

        

        </div>
      </Router>//id comes from the form itself. these made inside above. 
    );//edit sucks component.
    //above are helper methods
  }
}

export default App;