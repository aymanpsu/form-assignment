import React, {Component} from "react";
import "./App.css";
import "./css/montserrat-font.css";
import "./fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      person: 
        {
          "title": "businessman",
          "firstName": "Ayman",
          "lastName": "Albasha",
          "position": "Software Engineer",
          "company": "Uxbert",
          "business_arena": "tech",
          "category": "Trainee"
        }
      
    }
    this.siwtchHandel = this.siwtchHandel.bind(this);
  }
  siwtchHandel = () => {
    console.log("reset state value")
    this.setState({
      person: 
        {
          "title": "owner",
          "firstName": "Ahmed",
          "lastName": "hjazi",
          "position": "Computer Since",
          "company": "Innosoft",
          "business_arena": "tech",
          "category": "Full employee"
        }
    })
  }
  callbackFunction = (data) => {
    this.setState({
      person:  data
    })
    console.log("update state from input")
    console.log(this.state.person)
  }
  componentWillMount() {
    console.log("init state print")
    console.log(this.state.person)
  }
  render() {
    return (
      <div className="App">
        <div className="page-content">
          <div className="form-v10-content">
            <form className="form-detail" id="myform">
              <UserInput parentCallback = {this.callbackFunction}/>
              <UserOutput 
                show = {this.siwtchHandel} 
                title={this.state.person.title} 
                fName={this.state.person.firstName} 
                lName={this.state.person.lastName} 
                position={this.state.person.position} 
                company={this.state.person.company}
                business_arena={this.state.person.business_arena} 
                cat={this.state.person.category} 
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
