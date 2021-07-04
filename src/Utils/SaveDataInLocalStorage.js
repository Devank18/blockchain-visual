
function SaveDataInLocalStorage(data) {
  
  let transactions;
  if (!data) return;
  
  if (localStorage.getItem('transactions') === null) {
    transactions = [];
  } else {
    transactions = JSON.parse(localStorage.getItem('transactions'));
  }

  transactions.push(data);
  localStorage.setItem('transactions', JSON.stringify(transactions));

}

export default SaveDataInLocalStorage;