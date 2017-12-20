import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import SimpleBox from "../Components/SimpleBox";
import PreviewPicture from "../Components/PreviewPicture";
import { getDbUsers } from "../Actions/UserActions";
import { getUser, logout, deleteUser, setAdmin } from "../Actions/UserActions";


class AdminNav extends Component {
 
  renderUsers() {
    const { currentUser, userData } = this.props;

    return _.map(
      _.filter(userData, (user, key) => {
        return key !== currentUser;
      }),
      (user, key) => {   
        console.log(user);        
        console.log(Object.keys(this.props.userData));
        return (
          <SimpleBox key={key} title="User's name">
            <div className="card-body text-center">
              {user.isAdmin} 
              {user.fname} {user.lname}
            </div>
            <PreviewPicture pictureUrl={user.picture} />
            <button
              className="btn btn-danger float-right"
              // onClick={() => this.props.deleteUser(user.uid)}
            > Remove
            </button>
          </SimpleBox>
        );
      }
    );
  }
  render() {
    const { uid, userData,user } = this.props;

    return <div>{this.renderUsers()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    userData: state.dbUsers,
    user: state.user
  };
}

export default connect(mapStateToProps)(AdminNav);
