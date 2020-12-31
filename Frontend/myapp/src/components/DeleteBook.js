import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Booksdata = props => (
    <tr>

        /*
        County:state.County,
    State:state.State,
    cases:state.cases,
    death:state.death,
    date:state.date*/
        <td>{props.book.County}</td>
        <td>{props.book.State}</td>
        <td>{props.book.cases}</td>
        <td>{props.book.death}</td>
        <td>{props.book.date}</td>
        <td>
            <Link to={"/edit/"+props.book._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/Delete/"+props.book._id}>Delete</Link>
        </td>
    </tr>
)
function Func_DeleteBook(props) 
 {
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
    date:""//this used to be a date. 
      
    });
      //let url= "http://localhost:5000/"
    const [IsLoad, setLoad]=useState(false)
    const [IsDeleted,setDelete]=useState(false)
   
    useEffect(()=>{
        console.log("useeff delete"+props.match.params.id)
        axios.post("http://localhost:5000/deleteBook/"+props.match.params.id)
        .then(res => {
            console.log("data deleted "+res.data)
            setDelete(true)
            axios.get("http://localhost:5000/allbooks")
            .then(res => {
                // set the state variable from the data received from the axios api
                console.log("data received "+res.data)
                res.data.map(function(currentstate, i){
                    console.log(currentstate)
                //setLoad(true);
            })      
                setState(res.data)
                console.log("data set in the state and state length"+state.length)
            })
            .catch(err => {
              console.log("error has occured")
            })
                      }) 
        .catch(err => {
          console.log("error has occured")
        })
    },[props.match.params.id])

   
    
    function ShowBooksTable() {
        return state.map(function(currentbook, i){
           
            return <Booksdata book={currentbook} key={i} />;
        })
    }
    useEffect(() => {
        if (state.length>0)
        setLoad(true)
        
     }, [state]);
     
     

     return (
        <div>
            <h3>Deleted Books </h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>County</th>
                        <th>State</th>
                        <th>cases</th>
                        <th>death</th>
                        <th>date</th>
                       
                    </tr>
                </thead>
                <tbody>
                    { IsLoad ? ShowBooksTable() : console.log("No table data")}
                </tbody>
            </table>
        </div>
    )
    }

export default Func_DeleteBook;