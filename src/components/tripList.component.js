import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Trip=props=>(
    <tr>
        <td>{props.trip._id}</td>
        <td>{props.trip.description}</td>
        <td>{props.trip.title}</td>
        <td>{props.trip.telephone}</td>
        <td>{props.trip.location}</td>
        <td>{props.trip.agency_name}</td>
        <td>
            <Link to={"/edit/"+props.trip._id}>Edit</Link>
        </td>
    </tr>
)
export default class tripList extends Component{

constructor(props){
    super(props);
    this.state={trips:[]};
}
componentDidMount(){
    axios.get('http://localhost:5000/trips/')
    .then(response=>{
        this.setState({trips: response.data})
    })
    .catch(function(error){
        console.log(error)
    })
}
TripList(){
    return this.state.trips.map(function(currenttirp,i){
        return <Trip trip={currenttirp} key={i}/>
    })
}
render(){
    return(
        <div>
           <h3>trips list</h3>
           <table className="table table-striped" style={{ marginTop:20 }}>
               <thead>
                    <tr> 
                        <th>description</th>
                        <th>title</th>
                        <th>telephone</th>
                        <th>location</th>
                        <th>agency_name</th>
                    </tr>
               </thead>
               <tbody>
                   { this.TripList() }
               </tbody>
           </table>
        </div>
    )
}
}