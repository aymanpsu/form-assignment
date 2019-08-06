import React, { Component } from "react";
import "./UserInput.scss";

class UserInput extends Component {
  constructor() {
    super();
    this.title = React.createRef();
    this.first_name = React.createRef();
    this.last_name = React.createRef();
    this.position = React.createRef();
    this.company = React.createRef();
    this.business = React.createRef();
    this.employees = React.createRef();
    this.state = {
    }
    this.sendData = this.sendData.bind(this);
  }
  sendData = () => {
    let person =
    {
      "title": this.title.current.value,
      "firstName": this.first_name.current.value,
      "lastName": this.last_name.current.value,
      "position": this.position.current.value,
      "company": this.company.current.value,
      "business_arena": this.business.current.value,
      "category": this.employees.current.value
    }
    console.log("input print")
    console.log(person.value)
    console.log("title: " + person.title);
    console.log("first_name: " + person.firstName);
    console.log("last_name: " + person.lastName);
    console.log("position: " + person.position);
    console.log("company: " + person.company);
    console.log("business: " + person.business_arena);
    console.log("employees: " + person.category);
    console.log("--------------------------------------------");
    this.props.parentCallback(person);
  }
  componentWillMount() {
  }
  render() {
    return (
      <div className="form-left">
        <h2>General Infomation</h2>
        <div className="form-row">
          <select name="title" onChange={this.sendData} ref={this.title}>
            <option className="option" value="title">
              Title
            </option>
            <option className="option" value="businessman">
              Businessman
            </option>
            <option className="option" value="reporter">
              Reporter
            </option>
            <option className="option" value="secretary">
              Secretary
            </option>
          </select>
          <span className="select-btn">
            <i className="zmdi zmdi-chevron-down" />
          </span>
        </div>
        <div className="form-group">
          <div className="form-row form-row-1">
            <input
              type="text"
              name="first_name"
              onChange={this.sendData}
              ref={this.first_name}
              id="first_name"
              className="input-text"
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-row form-row-2">
            <input
              type="text"
              name="last_name"
              onChange={this.sendData}
              ref={this.last_name}
              id="last_name"
              className="input-text"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <select name="position" ref={this.position} onChange={this.sendData}>
            <option value="position">Position</option>
            <option value="director">Director</option>
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
          </select>
          <span className="select-btn">
            <i className="zmdi zmdi-chevron-down" />
          </span>
        </div>
        <div className="form-row">
          <input
            type="text"
            name="company"
            onChange={this.sendData}
            className="company"
            ref={this.company}
            id="company"
            placeholder="Company"
            required
          />
        </div>
        <div className="form-group">
          <div className="form-row form-row-3">
            <input
              type="text"
              name="business"
              onChange={this.sendData}
              className="business"
              ref={this.business}
              id="business"
              placeholder="Business Arena"
              required
            />
          </div>
          <div className="form-row form-row-4">
            <select name="employees" ref={this.employees} onChange={this.sendData}>
              <option value="employees">Employees</option>
              <option value="trainee">Trainee</option>
              <option value="colleague">Colleague</option>
              <option value="associate">Associate</option>
            </select>
            <span className="select-btn">
              <i className="zmdi zmdi-chevron-down" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default UserInput;
