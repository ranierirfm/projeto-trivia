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

export function fetchCurriences() {
  return async (dispatch) => {
    dispatch(requestCurriences());
    try {
      // fetch api
      const response = await getCurriences();
      const arrayResponse = Object.keys(response);
      const removeUsd = arrayResponse.filter((currencie) => currencie !== 'USDT');
      dispatch(receiveCurrenciesSuccess(removeUsd));
      console.log(response);
    } catch (error) {
      dispatch(receiveCurrenciesFailure(error));
    }
  };
}
