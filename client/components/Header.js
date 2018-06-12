import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <nav>
      <div className="nav-wrapper">
        <Link className="brand-logo left" to="/">React SSR</Link>
        <ul className="right">
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/admins">Admin</Link></li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  )
};

const mapStateToProps = ({ auth }) => ({
  auth: auth.isAuth
});

export default connect(mapStateToProps)(Header);
