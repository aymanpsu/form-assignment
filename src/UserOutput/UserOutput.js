import React, {Component} from "react";

class UserOutput extends Component {
  constructor(props) {
    super(props);
    // Just to see what was passed...
    console.log(props);
  }
  componentWillMount() {

  }
  render(){
    return (
      <div className="form-right">
        <h2>Profile</h2>
        <div className="container p-3">
          <div className="row ml-2">
            <div className="col-12">
              <h5 className="data">
                Title : <small> {this.props.title}</small>
              </h5>
            </div>
          </div>
          <div className="row ml-2 mt-5">
            <div className="col-6">
              <h5 className="data">
                First Name : <small> {this.props.fName}</small>
              </h5>
            </div>
            <div className="col-6">
              <h5 className="data">
                Last Name : <small> {this.props.lName}</small>
              </h5>
            </div>
          </div>
          <div className="row ml-2 mt-5">
            <div className="col-12">
              <h5 className="data">
                Position : <small> {this.props.position}</small>
              </h5>
            </div>
          </div>
          <div className="row ml-2 mt-5">
            <div className="col-12">
              <h5 className="data">
                Company : <small> {this.props.company}</small>
              </h5>
            </div>
          </div>
          <div className="row ml-2 mt-5">
            <div className="col-6">
              <h5 className="data">
                Business Arena : <small> {this.props.business_arena}</small>
              </h5>
            </div>
            <div className="col-6">
              <h5 className="data">
                Category : <small> {this.props.cat}</small>
              </h5>
            </div>
          </div>
          <div className="row p-4">
            <input onClick={this.props.show} type="button" name="register" className="register" value="Update" />
          </div>
        </div>
      </div>
    );
  }
};
export default UserOutput;
