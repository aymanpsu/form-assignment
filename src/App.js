import React, {Component} from "react";
import "./App.css";
import "./css/montserrat-font.css";
import "./fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-content">
          <div className="form-v10-content">
            <form className="form-detail" action="#" method="post" id="myform">
              <UserInput/>
              <UserOutput title="businessman" fName="Ayman" lName="Albasha" position="Software Engineering" company="Uxbert" business_arena="tech"  cat="Trainee"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
