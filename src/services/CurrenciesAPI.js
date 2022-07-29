const CURRENCIES_BASE_API = 'https://economia.awesomeapi.com.br/json/all';

const getCurriences = async () => {
  const response = await fetch(CURRENCIES_BASE_API);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default getCurriences;
