import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { userAction } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disableButton: true,
    };
  }

updateFormData=({ name, value }) => {
  this.setState({
    [name]: value,
  }, () => {
    if (this.verifiEmail() && this.verifiPassword()) {
      this.setState({
        disableButton: false,
      });
    } else {
      this.setState({
        disableButton: true,
      });
    }
  });
}

signUser = () => {
  const { updateUserStore, history } = this.props;
  const { email } = this.state;
  updateUserStore(email);
  history.push('/carteira');
}

verifiEmail=() => {
  const { email } = this.state;
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

verifiPassword=() => {
  const { password } = this.state;
  const MIN_CHAR_VALUE = 6;
  return password.length >= MIN_CHAR_VALUE;
}

render() {
  const { email, password, disableButton } = this.state;
  return (

    <div id="login">

      <form>
        <h3>Login</h3>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          placeholder="E-mail"
          value={ email }
          onChange={ (event) => this.updateFormData(event.target) }
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          value={ password }
          placeholder="Senha"
          onChange={ (event) => this.updateFormData(event.target) }

        />
        <button
          type="button"
          onClick={ this.signUser }
          disabled={ disableButton }
        >
          Entrar

        </button>
      </form>
    </div>
  );
}
}

const mapDispatchToProps = (dispatch) => ({
  updateUserStore: (email) => dispatch(userAction(email)),
});

Login.propTypes = {

  updateUserStore: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,

};

export default connect(null, mapDispatchToProps)(Login);
