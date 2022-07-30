import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h1>TrybeWallet</h1>
        <div>
          <Header />
          <WalletForm />
          <Table />
        </div>
      </div>
    );
  }
}

export default connect()(Wallet);
