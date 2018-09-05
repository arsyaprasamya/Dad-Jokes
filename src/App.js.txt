import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state = {
      nama:'', dad:''
    }
  }
  componentDidMount(){
    var link = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'
    
    axios.get(link).then((getJokes)=>{
      this.setState({nama: getJokes.data.setup});
      this.setState({dad: getJokes.data.punchline});
    })
  }
  dadjokes(){
    var link = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'
    
    axios.get(link).then((getJokes)=>{
      console.log(getJokes.data.setup);
      console.log(getJokes.data.punchline);
      this.setState({nama: getJokes.data.setup});
      this.setState({jokes: getJokes.data.punchline});
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="card text-right mx-auto mt-5" style={{width: 500}}>
          <div className="card-body">
            <h5 className="card-nama">{this.state.nama}</h5>
            <p className="card-text">{this.state.dad} 
            <br/>
            <i className="em em-laughing"></i></p>
            <button onClick={()=>{this.dadjokes()}} className="btn btn-danger center">Reload <i className="em em-repeat "/> </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;