import React,{Component} from 'react';


export default class createTrip extends Component{

constructor(props){
    super(props);

    this.onChangeDescription=this.onChangeDescription.bind(this);
    this.onChangePassengers=this.onChangePassengers.bind(this);
    this.onChangeagencyName=this.onChangeagencyName.bind(this);
    this.onChangetelephone=this.onChangetelephone.bind(this);
    this.onChangetitle=this.onChangetitle.bind(this);

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
    console.log('description:${this.state.description}');
    console.log('description:${this.state.title}');
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
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Description:</label>
                    <input type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription}/>
                </div>
            </form>
        </div>
    )
}
}