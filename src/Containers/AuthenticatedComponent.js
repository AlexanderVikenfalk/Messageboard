import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getDbUsers } from "../Actions/UserActions";
import AdminNav from "./AdminNav";
import * as React from "react";
import _ from "lodash";

let isAdmin = false;
class AuthenticatedComponent extends Component {

  componentDidUpdate() {
    const { userLoading, user, currentUser, userData } = this.props;

    if (userLoading === false && !user) {
      this.props.history.push("/Login");
    }
  }


  render() {
    const { user, children, userLoading, userData } = this.props;
  //   if (user && userData && Object.keys(userData).length > 1) {
  //     console.log(user.uid)    
  //       return <AdminNav />
      
   
  // }
    return userLoading === false && user ? (
      <div>
     {children}
     </div>
    ) : (
      <button type="button" className="btn btn-info" onClick={() => {
        this.props.history.push('/login');
      }}>Go to login</button>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userLoading: state.loading.user,
    userData: state.dbUsers
  };
}

export default withRouter(connect(mapStateToProps)(AuthenticatedComponent));
