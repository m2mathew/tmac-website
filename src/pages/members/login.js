// External Dependencies
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link, navigate } from 'gatsby';

// Internal Dependencies
import Container from '../../components/shared/container';
import Firebase from '../../firebase';
import FormHr from '../../components/shared/form-hr';
import Layout from '../../components/layout';
import LoginForm from '../../components/register/login-form';
import presets from '../../utils/presets';

// Component Definition
class Login extends Component {
  static propTypes = {
    location: PropTypes.shape({}).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };

    this.activeComponent = true;
  }

  componentDidMount() {
    this.firebase = new Firebase();

    if (this.activeComponent) {
      this.firebase.auth.onAuthStateChanged(authUser =>
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null })),
      );
    }
  }

  componentWillUnmount() {
    this.activeComponent = false;
  }

  handleRedirectToMembers = () => {
    navigate('/members/login');
  };

  render() {
    const { location } = this.props;
    const { authUser } = this.state;

    const isAuthenticated = Boolean(authUser);

    if (isAuthenticated) {
      return this.handleRedirectToMembers;
    }

    return (
      <Layout location={location}>
        <div
          css={{
            paddingLeft: 0,
            [presets.Tablet]: {
              paddingLeft: !isAuthenticated ? '1.5rem' : 0,
            },
          }}>
          <Container className="login">
            <Helmet>
              <title>TMAC | Log In</title>
            </Helmet>
            <h2
              css={{
                margin: '1rem 0',
              }}>
              Login
            </h2>

            <FormHr />

            <LoginForm />

            <FormHr />

            <p>
              <Link to="/members/pw-forget">Forgot Password?</Link>
            </p>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default Login;
