import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h1>TrybeWallet</h1>
        <div>
          <Header />
        </div>
      </div>
    );
  }
}

export default connect()(Wallet);
