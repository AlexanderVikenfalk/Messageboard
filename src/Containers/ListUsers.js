import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import SimpleBox from "../Components/SimpleBox";
import PreviewPicture from "../Components/PreviewPicture";

class ListUsers extends Component {
  renderUsers() {
    console.log('in RenderUSerss',this.props.userData);
    const { userData, uid } = this.props;
    return _.map(
      _.filter(userData, (user, key) => {
        return key !== uid;
      }),
      (user, key) => {
        console.log(key)
        return (
          <SimpleBox key={key} title="User's name">
            <div className="card-body text-center">
            {user.isAdmin}{user.fname} {user.lname} 
            </div>
            <PreviewPicture pictureUrl={user.picture} />
          </SimpleBox>
        );
      }
    );
  }
  render() {
    console.log(!Object.keys(this.props.userData).length);
    console.log(this.props.userData.isAdmin);
    const { uid, userData } = this.props;
    return (
      <div>
        {uid ? (
          !Object.keys(userData).length ? null : (
            <div className="text-center text-white">
                Welcome {userData[uid].fname} {userData[uid].lname} 
                {this.renderUsers()}
              
            </div>
          )
        ) : null}
        <h1>Hello!</h1>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const checkedUser = state.user || {};
  return {
    uid: checkedUser.uid,
    userData: state.dbUsers
  };
}

export default connect(mapStateToProps)(ListUsers);
