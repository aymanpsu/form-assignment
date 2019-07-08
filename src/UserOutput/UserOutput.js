import React from "react";

const UserOutput = props => {
  return (
    <div className="form-right">
      <h2>Profile</h2>
      <div className="form-row left">
        <h5 className="data">
          Title : <small> {props.title}</small>
        </h5>
      </div>
      <div className="form-group">
        <div className="form-row form-row-1">
          <h5 className="data">
            First Name : <small> {props.fName}</small>
          </h5>
        </div>
        <div className="form-row form-row-2">
          <h5 className="data">
            Last Name : <small> {props.lName}</small>
          </h5>
        </div>
      </div>
      <div className="form-row left custom-element">
        <h5 className="data">
          Position : <small> {props.position}</small>
        </h5>
      </div>
      <div className="form-group">
        <div className="form-row form-row-1">
          <h5 className="data">
            Company : <small> {props.company}</small>
          </h5>
        </div>
        <div className="form-row form-row-2">
          <h5 className="data">
            Business Arena : <small> {props.business_arena}</small>
          </h5>
        </div>
      </div>
      <div className="form-row-last">
        <input type="submit" name="register" className="register" value="Update"/>
      </div>
    </div>
  );
};
export default UserOutput;
