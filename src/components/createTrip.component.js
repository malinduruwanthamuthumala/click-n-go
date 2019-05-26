import React,{Component} from 'react';
import axios from 'axios';

export default class createTrip extends Component{

constructor(props){
    super(props);

    this.onChangeDescription=this.onChangeDescription.bind(this);
    this.onChangePassengers=this.onChangePassengers.bind(this);
    this.onChangeagencyName=this.onChangeagencyName.bind(this);
    this.onChangetelephone=this.onChangetelephone.bind(this);
    this.onChangetitle=this.onChangetitle.bind(this);
    this.onChangelocation=this.onChangelocation.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={
        description:'',
        title:'',
        telephone:'',
        passengers:'',
        location:'',
        agency_name:'',
    }
}

onChangeDescription(data){
this.setState({
    description:data.target.value
})
    
}

onChangetitle(data){
    this.setState({
        title:data.target.value
    })
}

onChangetelephone(data){
    this.setState({
        telephone:data.target.value
    })
}

onChangePassengers(data){
    this.setState({
        passengers:data.target.value
    })
}

onChangelocation(data){
    this.setState({
        location:data.target.value
    })
}

onChangeagencyName(data){
    this.setState({
        agency_name:data.target.value
    })
}
onSubmit(data){
    data.preventDefault();

    console.log('form submitted');
    console.log('description:'+this.state.description);
    
    const newTrip={
        description:this.state.description,
        title:this.state.title,
        telephone:this.state.telephone,
        passengers:this.state.passengers,
        location:this.state.location,
        agency_name:this.state.agency_name, 
    }

    axios.post('http://localhost:5000/trips/create',newTrip)
        .then(res=>console.log(res.data));
    this.setState({
        description:'',
        title:'',
        telephone:'',
        passengers:'',
        location:'',
        agency_name:'',
    })
}
render(){
    return(
        <div style={{margin:20}}>
            <h3>create new trip post</h3>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Description:</label>
                    <input type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription}/>
                </div>
                <div className="form-group">
                    <label>title:</label>
                    <input type="text" className="form-control" value={this.state.title} onChange={this.onChangetitle }/>
                </div>
                <div className="form-group">
                    <label>contact number:</label>
                    <input type="text" className="form-control" value={this.state.telephone} onChange={this.onChangetelephone}/>
                </div>
                <div className="form-group">
                    <label>passenger count:</label>
                    <input type="text" className="form-control" value={this.state.passengers} onChange={this.onChangePassengers}/>
                </div>
                <div className="form-group">
                    <label>location:</label>
                    <input type="text" className="form-control" value={this.state.location} onChange={this.onChangelocation}/>
                </div>
                <div className="form-group">
                    <label>Agency name:</label>
                    <input type="text" className="form-control" value={this.state.agency_name} onChange={this.onChangeagencyName}/>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="create trip"></input>
                </div>
               
            </form>
                </div>
                <div className="col-md-2"></div>
            </div>
            
        </div>
    )
}
}