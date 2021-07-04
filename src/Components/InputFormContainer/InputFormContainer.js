import React from "react";
import GenerateHashForData from "../../Utils/GenerateHashForData";
import SaveDataInLocalStorage from "../../Utils/SaveDataInLocalStorage";
import "./style.css";

export default class InputFormContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="InputFormContainer">
        <form className="input-form" onChange={this.handleSubmit}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto'
          }}>
            <div className="form-input">
              <label name="first-name" className="input-label">First Name</label>
              <input type="text"
                name="first-name"
                placeholder="Eg: John" 
                className="input-box"
                id="first-name-input"
              />
            </div>
            <div className="form-input">
              <label name="last-name" className="input-label">Last Name</label>
              <input type="text"
                name="last-name"
                placeholder="Eg: Doe"
                className="input-box"
                id="last-name-input"
              />
            </div>
          </div>
          <div className="form-input">
            <label name="amount" className="input-label">Enter Amount</label>
            <input type="number"
              name="amount"
              placeholder="Enter amount of coins"
              className="input-box"
              id="amount-input"
            />
          </div>
          <div className="form-input">
            <label name="currency-name" className="input-label">Select a Currency</label>
            <select defaultValue="none" className="input-select" id="currency-input">
              <option value="none" selected disabled hidden>
                Select an Option
              </option>
              <option value="bitcoin">
                Bitcoin
              </option>
              <option value="ethereum">
                Ethereum
              </option>
              <option value="litecoin">
                Litecoin
              </option>
              <option value="dogecoin">
                Dogecoin
              </option>
            </select>
          </div>
          <div className="form-input">
            <label name="sender-id" className="input-label">Your ID</label>
            <input type="text"
              name="sender-id"
              placeholder="Eg: e567************09"
              className="input-box"
              id="sender-id-input"
            />
          </div>
          <div className="form-input">
            <label name="receiver-id" className="input-label">Receiver's ID</label>
            <input type="text"
              name="receiver-id"
              placeholder="Eg: e567************09"
              className="input-box"
              id="receiver-id-input"
            />
          </div>
          <button 
            className="primary-button"
            style={{
              marginTop: '1em'
            }}
            onClick={() => {
              // retrieving data from the input boxes
              let __firstname = document.getElementById('first-name-input').value;
              let __lastname = document.getElementById('last-name-input').value;
              let __amount = document.getElementById('amount-input').value;
              let __currency_name = document.getElementById('currency-input').value;
              let __sender_id = document.getElementById('sender-id-input').value;
              let __receiver_id = document.getElementById('receiver-id-input').value;
              
              // generating the current timestamp
              const currentDateTime = new Date();
              const timeStamp = currentDateTime.getTime();
              console.log(timeStamp)

              const newTransactionObject = {
                'firstname': __firstname,
                'lastname': __lastname,
                'amount': __amount,
                'currency_name': __currency_name,
                'sender_id': __sender_id,
                'receiver_id': __receiver_id,
                
                // the unique hash will be created
                // with a very easy string hashing method
                // using a timestamp.
                'unique_hash': GenerateHashForData({__firstname, __lastname,
                  __amount, __currency_name, __sender_id, __receiver_id
                }, timeStamp)
              }

              // storing the data object as a new
              // transaction entry in localStorage
              SaveDataInLocalStorage(newTransactionObject);
              
            }}
          >
            Create a new Transaction
          </button>
        </form>
      </div>
    )
  }
}