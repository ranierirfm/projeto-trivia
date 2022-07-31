import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  sumAllValues = () => {
    const { expenses } = this.props;
    const sum = expenses.reduce((acc, expense) => expense.value
      * expense.exchangeRates[expense.currency].ask + acc, 0);
    return sum.toFixed(2);
  };

  render() {
    const { email, expenses } = this.props;
    console.log(expenses.length);
    return (
      <header>
        <h3 data-testid="email-field">
          {email}
        </h3>
        <h4>Soma total:</h4>
        <h3 data-testid="total-field">
          {

            expenses.length === 0 ? '0.00' : this.sumAllValues()

          }

        </h3>
        <div>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (store) => ({
  email: store.user.email,
  expenses: store.wallet.expenses,
});
Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Header);
