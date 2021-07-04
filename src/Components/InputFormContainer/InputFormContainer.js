import React from "react";
import "./style.css";

export default class InputFormContainer extends React.Component {
  render() {
    return (
      <div className="InputFormContainer">
        <form className="input-form">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto'
          }}>
            <div className="form-input" style={{
              display: 'grid',
              gridTemplateColumns: 'auto'
            }}>
              <label name="first-name" className="input-label">First Name</label>
              <input type="text"
                name="first-name"
                placeholder="Eg: John" 
                className="input-box"
                id="first-name-input"
              />
            </div>
            <div className="form-input" style={{
              display: 'grid',
              gridTemplateColumns: 'auto'
            }}>
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
            <select defaultValue="none" className="input-select">
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
          >
            Create a new Transaction
          </button>
        </form>
      </div>
    )
  }
}