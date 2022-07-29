// Coloque aqui suas actions
export default function userAction(email) {
  return {
    type: 'GET_USER',
    email,
  };
}
