import "./style.css";
import React from "react";
import InputFormContainer from "../Components/InputFormContainer/InputFormContainer";
import BlockchainContainer from "../Components/BlockchainContainer/BlockchainContainer";

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="info-container">
          <div className="introduction-section">
            <h2>Blockchain Visual <span role="img" aria-label="money-emoji">💰</span><span role="img" aria-label="rocket">🚀</span></h2>
            <p className="introduction-content">
              This project is mainly focused on teaching people the basics for Blockchain technology using visuals. This project is developed using React JS.
              You just have to create a new transaction by adding details for the same and there will be a new block created for that which will be having your details and unique hash-address.
              Feel free to play around this application. If you would like to contribute to this project, <a href="https://github.com/yashsehgal/blockchain-visual" target="_blank">check it on github.</a>
            </p>
          </div>
          <InputFormContainer />
        </div>
        <BlockchainContainer />
      </div>
    )
  }
}
