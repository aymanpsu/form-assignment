import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


const UserOutput = props => {
  return (
    <div className="form-right">
      <h2>Profile</h2>
      <div className="container p-3">
        <div className="row ml-2">
          <div className="col-12">
            <h5 className="data">
              Title : <small> {props.title}</small>
            </h5>
          </div>
        </div>
        <div className="row ml-2 mt-5">
          <div className="col-6">
            <h5 className="data">
              First Name : <small> {props.fName}</small>
            </h5>
          </div>
          <div className="col-6">
            <h5 className="data">
              Last Name : <small> {props.lName}</small>
            </h5>
          </div>
        </div>
        <div className="row ml-2 mt-5">
          <div className="col-12">
            <h5 className="data">
              Position : <small> {props.position}</small>
            </h5>
          </div>
        </div>
        <div className="row ml-2 mt-5">
          <div className="col-12">
            <h5 className="data">
              Company : <small> {props.company}</small>
            </h5>
          </div>
        </div>
        <div className="row ml-2 mt-5">
          <div className="col-6">
            <h5 className="data">
              Business Arena : <small> {props.business_arena}</small>
            </h5>
          </div>
          <div className="col-6">
            <h5 className="data">
              Category : <small> {props.cat}</small>
            </h5>
          </div>
        </div>
        <div className="form-row-last">
          <input type="submit" name="register" className="register" value="Update" />
        </div>
      </div>
    </div>
  );
};
export default UserOutput;
