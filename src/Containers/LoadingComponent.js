import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser, getDbUsers } from '../Actions/UserActions';
import { getPosts } from '../Actions/PostActions';
import Loading from '../Components/Loading';
import { auth } from "../Firebase";

class LoadingComponent extends Component {
  componentWillMount() {
    const { userLoading, postsLoading, dbUserLoading } = this.props;
    if(userLoading === undefined) {
      this.props.getUser();
    }

    if(postsLoading === undefined) {
      this.props.getPosts();
    }
    if (dbUserLoading === undefined) {
      this.props.getDbUsers();
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.postsLoading === -1 && nextProps.user !== null) {
      this.props.getPosts();
    }
  }

  render() {
    const { userLoading, postsLoading, dbUserLoading, children } = this.props;
    if (userLoading === true || dbUserLoading === true) {
      return (
        <div>
          <Loading />
        </div>
      );
    } else {
      return (
        <div>
          {children}
        </div>
      );
    
  }
}
}


function mapStateToProps(state) {
  return {
    userLoading: state.loading.user,
    postsLoading: state.loading.posts,
    user: state.user
  };
}

export default withRouter(connect(mapStateToProps, { getUser, getPosts, getDbUsers })(LoadingComponent))
