import React,{Component} from 'react';
import axios from 'axios';

export default class edittripList extends Component{
constructor(props){
    super(props);
    this.state={
        description:'',
        title:'',
        telephone:'',
        passengers:'',
        location:'',
        agency_name:'',
    }
}
componenDidMount(){
    axios.get('http://localhost:5000/trips'+this.props.match.params.id)
    .then(response=>{
        this.setState({
            description:response.data.description,
            title:response.data.title,
            telephone:response.data.telephone,
            passengers:response.data.passengers,
            location:response.data.location,
            agency_name:response.data.agency_name,  
        }).catch(function(error){
            console.log(error) 
        })
    })
}

render(){
    return(
        <div>
            <h1>Welcome to edit trip component</h1>
        </div>
    )
}
}