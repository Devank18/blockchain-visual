import React, { useState } from 'react';
import "./style.css";

export default class BlockchainContainer extends React.Component {
  transactionData;    // declaring transactionData containing object
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      amount: '',
      currency: '',
      sender_id: '',
      receiver_id: '',
      unique_hash: ''
    }
  }

  // React Life Cycle
  componentDidMount() {
    this.transactionData = JSON.parse(localStorage.getItem('transactions'));
    if (localStorage.getItem('transactions')) {
      this.setState({
        firstname: this.transactionData.firstname,
        lastname: this.transactionData.lastname,
        amount: this.transactionData.amount,
        currency: this.transactionData.currency_name,
        sender_id: this.transactionData.sender_id,
        receiver_id: this.transactionData.receiver_id,
        unique_hash: this.transactionData.unique_hash
      })
    } else {
      this.setState({
        firstname: '',
        lastname: '',
        amount: '',
        currency: '',
        sender_id: '',
        receiver_id: '',
        unique_hash: ''
      })
    }
  }
  
  render() {
    return (
      <div className="BlockchainContainer"></div>
    )
  }
}