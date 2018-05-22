import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

  render() {
    return (
      <div>
        Here is a list of users
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
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
