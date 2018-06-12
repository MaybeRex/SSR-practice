import React, { Component } from 'react';
import { connect } from 'react-redux';
import Admin from '../actions/admin';

class AdminPage extends Component {
  static loadData = ({ dispatch }) => dispatch(Admin.fetchAdmins())

  componentDidMount() {
    this.props.fetchAdmins()
  }

  renderAdmins = () => this.props.admins.map(admin => (
    <li key={admin.id}>
      {admin.name}
    </li>
  ))

  render() {
    return (
      <div>
        <h3>
          Protected list of admins
        </h3>
        <ul>
          {this.renderAdmins()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ admin }) => ({
  admins: admin.adminList
});

export default connect(mapStateToProps, { fetchAdmins: Admin.fetchAdmins })(AdminPage);
