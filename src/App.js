import React from 'react';
import './App.css';
import './css/montserrat-font.css';
import './fonts/material-design-iconic-font/css/material-design-iconic-font.min.css'
import './css/style.css';

function App() {
  return (
    <div className="App">
      <div className="page-content">
        <div className="form-v10-content">
          <form className="form-detail" action="#" method="post" id="myform">
            <div className="form-left">
              <h2>General Infomation</h2>
              <div className="form-row">
                <select name="title">
                    <option className="option" value="title">Title</option>
                    <option className="option" value="businessman">Businessman</option>
                    <option className="option" value="reporter">Reporter</option>
                    <option className="option" value="secretary">Secretary</option>
                </select>
                <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
              <div className="form-group">
                <div className="form-row form-row-1">
                  <input type="text" name="first_name" id="first_name" className="input-text" placeholder="First Name" required/>
                </div>
                <div className="form-row form-row-2">
                  <input type="text" name="last_name" id="last_name" className="input-text" placeholder="Last Name" required/>
                </div>
              </div>
              <div className="form-row">
                <select name="position">
                    <option value="position">Position</option>
                    <option value="director">Director</option>
                    <option value="manager">Manager</option>
                    <option value="employee">Employee</option>
                </select>
                <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
              <div className="form-row">
                <input type="text" name="company" className="company" id="company" placeholder="Company" required/>
              </div>
              <div className="form-group">
                <div className="form-row form-row-3">
                  <input type="text" name="business" className="business" id="business" placeholder="Business Arena" required/>
                </div>
                <div className="form-row form-row-4">
                  <select name="employees">
                      <option value="employees">Employees</option>
                      <option value="trainee">Trainee</option>
                      <option value="colleague">Colleague</option>
                      <option value="associate">Associate</option>
                  </select>
                  <span className="select-btn">
                      <i className="zmdi zmdi-chevron-down"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="form-right">
              <h2>Profile</h2>
              <div className="form-row">
                <input type="text" name="street" className="street" id="street" placeholder="Street + Nr" required/>
              </div>
              <div className="form-row">
                <input type="text" name="additional" className="additional" id="additional" placeholder="Additional Information" required/>
              </div>
              <div className="form-group">
                <div className="form-row form-row-1">
                  <input type="text" name="zip" className="zip" id="zip" placeholder="Zip Code" required/>
                </div>
                <div className="form-row form-row-2">
                  <select name="place">
                      <option value="place">Place</option>
                      <option value="Street">Street</option>
                      <option value="District">District</option>
                      <option value="City">City</option>
                  </select>
                  <span className="select-btn">
                      <i className="zmdi zmdi-chevron-down"></i>
                  </span>
                </div>
              </div>
              <div className="form-row">
                <select name="country">
                    <option value="country">Country</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="India">India</option>
                </select>
                <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
              <div className="form-group">
                <div className="form-row form-row-1">
                  <input type="text" name="code" className="code" id="code" placeholder="Code +" required/>
                </div>
                <div className="form-row form-row-2">
                  <input type="text" name="phone" className="phone" id="phone" placeholder="Phone Number" required/>
                </div>
              </div>
              <div className="form-row">
                <input type="text" name="your_email" id="your_email" className="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="Your Email"/>
              </div>
              <div className="form-row-last">
                <input type="submit" name="register" className="register" value="Update"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
