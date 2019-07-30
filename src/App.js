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
      person: [
        {
          "title": "businessman",
          "firstName": "Ayman",
          "lastNmae": "Albasha",
          "position": "Software Engineer",
          "company": "Uxbert",
          "business_arena": "tech",
          "catogery": "Trainee"
        }
      ]
    }
    this.siwtchHandel = this.siwtchHandel.bind(this);
    this.handleChangesValues = this.handleChangesValues.bind(this);
  }
  siwtchHandel = () => {
    console.log("reset state value")
    this.setState({
      person: [
        {
          "title": "owner",
          "firstName": "Ahmed",
          "lastNmae": "hjazi",
          "position": "Coputer Since",
          "company": "Innosoft",
          "business_arena": "tech",
          "catogery": "Full emplee"
        }
      ]
    })
  }
  handleChangesValues = () => {
    console.log("handleChangesValues")
  }
  render() {
    return (
      <div className="App">
        <div className="page-content">
          <div className="form-v10-content">
            <form className="form-detail" id="myform">
              <UserInput onChange={this.handleChangesValues}/>
              <UserOutput 
                show={this.siwtchHandel} 
                title={this.state.person[0].title} 
                fName={this.state.person[0].firstName} 
                lName={this.state.person[0].lastNmae} 
                position={this.state.person[0].position} 
                company={this.state.person[0].company}
                business_arena={this.state.person[0].business_arena} 
                cat={this.state.person[0].catogery} 
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
