import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurriences } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    // requisicao da api
    const { getCurriences } = this.props;

    getCurriences();
    // execucao da funcao
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <div>
        Dispesas:
        <form>
          <label htmlFor="value-input">
            <input
              type="number"
              id="value-input"
              data-testid="value-input"
            />
          </label>
          <label htmlFor="description-input">
            <input
              type="Area-text"
              id="description-inputt"
              data-testid="description-input"
            />
          </label>

          <label
            htmlFor="currency-input"
          >
            <select
              id="currency-input"
              data-testid="currency-input"
            >
              { currencies.map((currencie) => (

                <option key={ currencie } value="currencies">{ currencie }</option>
              )) }
              ;
            </select>
          </label>
          <label htmlFor="method-inputt">
            <select
              id="method-input"
              data-testid="method-input"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="crédito">Cartão de crédito</option>
              <option value="débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            <select
              type="dropdown"
              id="tag-input"
              data-testid="tag-input"
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>

        </form>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurriences: () => dispatch(fetchCurriences()),
});

WalletForm.propTypes = {

  currencies: PropTypes.func.isRequired,
  getCurriences: PropTypes.func.isRequired,

};
export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
