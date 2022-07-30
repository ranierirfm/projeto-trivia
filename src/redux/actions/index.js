import getCurriences from '../../services/CurrenciesAPI';
// Coloque aqui suas actions
export const userAction = (email) => ({
  type: 'GET_USER',
  email,
});

export const requestCurriences = () => ({
  type: 'REQUEST_CURRENCIES',
});

export const receiveCurrenciesFailure = (error) => ({
  type: 'RECEIVE_CURRENCIES_FAILURE',
  error,
});

export const receiveCurrenciesSuccess = (currencies) => ({
  type: 'RECEIVE_CURRENCIES_SUCCESS',
  currencies,
});

export const receiveCurrenciesCompletSuccess = (currencies) => ({
  type: 'RECEIVE_CURRENCIES_SUCCESS',
  currencies,
});
export const updateExpenses = (expenseData) => ({
  type: 'SAVE_WALLET',
  expenses: expenseData,
});

export function fetchCurriences() {
  return async (dispatch) => {
    dispatch(requestCurriences());
    try {
      // fetch api
      const response = await getCurriences();
      const arrayResponse = Object.keys(response);
      const removeUsdt = arrayResponse.filter((currencie) => currencie !== 'USDT');
      dispatch(receiveCurrenciesSuccess(removeUsdt));
      // console.log(response);
    } catch (error) {
      dispatch(receiveCurrenciesFailure(error));
    }
  };
}

export const walletAction = (expenses) => async (dispatch, getState) => {
  const expenseData = expenses;
  const walletStore = getState().wallet;
  expenseData.id = walletStore.expenses.length;
  expenseData.exchangeRates = await getCurriences();
  console.log(expenseData);
  dispatch(updateExpenses(expenseData));
};

// export const myThunk = () => async (dispatch, getState) => {
//   //tratar os dados

// };
