import React, { Component } from "react";

class UserInput extends Component {
  render() {
    return (
      <div className="form-left">
        <h2>General Infomation</h2>
        <div className="form-row">
          <select name="title">
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
              id="last_name"
              className="input-text"
              placeholder="Last Name"
              required
            />
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
            <i className="zmdi zmdi-chevron-down" />
          </span>
        </div>
        <div className="form-row">
          <input
            type="text"
            name="company"
            className="company"
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
              className="business"
              id="business"
              placeholder="Business Arena"
              required
            />
          </div>
          <div className="form-row form-row-4">
            <select name="employees">
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
