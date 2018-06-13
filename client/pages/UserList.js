import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Helmet } from 'react-helmet';

import Users from '../actions/users';

class UsersList extends Component {
  static defaultProps = {
    userList: [{
      id: '',
      name: ''
    }]
  }

  static loadData = ({ dispatch }) => {
    return dispatch(Users.fetchUsers());
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers = () => this.props.userList.map(user => (
    <li key={user.id}>
      {user.name}
    </li>
  ))

  renderHead = () => (
    <Helmet>
      <title>{`${this.props.userList.length} Users Loaded`}</title>
      <meta property="og:title" content="Users App" />
    </Helmet>
  )

  render() {
    return (
      <React.Fragment>
        <div>
          Here is a list of users
          <ul>
            {this.renderUsers()}
          </ul>
        </div>

        {this.renderHead()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  userList: users.userList
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchUsers: Users.fetchUsers
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
