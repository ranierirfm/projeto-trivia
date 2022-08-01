import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../redux/actions';

class Table extends Component {
  // remove = () => {
  //   const { expenses } = this.props;

  // }

  render() {
    const { expenses, remove } = this.props;
    return (
      <div>
        <h4 id="titulo_tabela">Lista de dispesas:</h4>
        <table border="1">
          <thead>
            <tr>
              <th>Descrição</th>

              <th>Tag</th>

              <th>
                Método de pagamento
              </th>

              <th>Valor</th>

              <th>Moeda</th>

              <th>
                Câmbio utilizado
              </th>

              <th>
                Valor convertido
              </th>

              <th>
                Moeda de conversão
              </th>

              <th>
                Editar/Excluir
              </th>
            </tr>
          </thead>
          <tbody>

            {
              expenses.map((expense) => (
                <tr key={ expense.id }>
                  <td>{expense.description}</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method}</td>
                  <td>{Number(expense.value).toFixed(2)}</td>
                  <td>{expense.exchangeRates[expense.currency].name}</td>
                  <td>

                    {Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}

                  </td>
                  <td>

                    {
                      Number(expense.value
                        * expense.exchangeRates[expense.currency].ask).toFixed(2)
                    }

                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      data-testid="edit-btn"
                    >
                      Editar

                    </button>
                    <button
                      id="Excluir"
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => remove(expense) }
                    >
                      Excluir

                    </button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  expenses: store.wallet.expenses,
});

Table.propTypes = {

  expenses: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  remove: (expense) => dispatch(removeExpense(expense)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
