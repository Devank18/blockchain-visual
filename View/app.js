
class Node {

  constructor(user_status = false) {
    if (!user_status) return;

    this.user_id = "";
    this.username = "";
    this.amount = 0.000000;
    this.currency_name = "";
    this.hash_address = "";
    this.prev_hash_address = "";
  }

  setUserID(__user_id) {
    this.user_id = __user_id;;
  }

  getUserID() {
    return this.user_id;
  }

  setUsername(__username) {
    this.username = __username;
  }

  getUsername() {
    return this.username;
  }

  setAmount(__amount) {
    this.amount = __amount;
  }

  getAmount() {
    return this.amount;
  }

  setCurrencyName(__currency_name) {
    this.currency_name = __currency_name;
  }

  getCurrencyName() {
    this.currency_name;
  }

  setHashForNode(__hash) {
    this.hash_address = __hash;
  }

  setPreviousHashForNode(__hash) {
    this.prev_hash_address = __hash;
  }

};

const blockchain = [];

let block = new Node(true);
const __username = "yashsehgal";
const __user_id = "4401";
const __amount = 14567.4576345;
const __currency = "rupees";

const hashable_data = `${__username}${__user_id}${__amount}${__currency}`;

const __hash = generateHash(hashable_data);
console.log("generated hash address> ", __hash);

const dataBlock = {
  "user_id": __user_id,
  "username": __username,
  "amount": __amount,
  "currency_name": __currency,
  "hash_address": __hash
};

blockchain.push(dataBlock);
console.log("new entry added in the ledger> ", dataBlock);
console.log("BLOCKCHAIN LEDGER STATUS");
console.log(blockchain);

function generateHash(data) {
  const crypto = require('crypto'),
    hash = crypto.getHashes();

  let hashPwd = crypto.createHash('sha1').update(data).digest('hex');

  return hashPwd;
}
