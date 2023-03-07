// class BankAccount {
//   constructor(accountName, initialDeposit) {
//     this._accountName = accountName;
//     this._balance = initialDeposit;
//   }

//   get accountName() {
//     return "Account name: " +  this._accountName;
//   }

//   get balance() {
//     return this._balance;
//   }

//   deposit(amount) {
//     if (isNaN(amount)) {
//       alert("Please enter a valid number.");
//       return;
//     }
//     this._balance += amount;
//   }

//   debit(amount) {
//     if (isNaN(amount)) {
//       alert("Please enter a valid number.");
//       return;
//     }
//     if (amount > this._balance) {
//       alert("Insufficient balance.");
//       return;
//     }
//     this._balance -= amount;
//   }

//   static accountInfoList = [];

//   static createAccount() {
//     const accountName = document.getElementById("accountName").value;
//     const initialDeposit = Number(document.getElementById("initialDeposit").value);

//     if (!accountName || isNaN(initialDeposit)) {
//       alert("Please enter valid account name and initial deposit.");
//       return;
//     }

//     const account = new BankAccount(accountName, initialDeposit);
//     this.accountInfoList.push(account);

//     // Update account information text area
//     this.updateAccountInfoTextArea();

//     // Update account dropdowns for deposit and debit
//     const depositAccountDropdown = document.getElementById("depositAccount");
//     const debitAccountDropdown = document.getElementById("debitAccount");
//     depositAccountDropdown.options.add(new Option(accountName, accountName));
//     debitAccountDropdown.options.add(new Option(accountName, accountName));

//     // Enable deposit and debit buttons
//     const depositButton = document.getElementById("depositButton");
//     const debitButton = document.getElementById("debitButton");
//     depositButton.disabled = false;
//     debitButton.disabled = false;
//   }

//   static updateAccountInfoTextArea() {
//     const accountInfoTextArea = document.getElementById("accountInfoTextArea");
//     accountInfoTextArea.value = "";

//     for (let account of this.accountInfoList) {
//       accountInfoTextArea.value += `${account.accountName}: $${account.balance.toFixed(2)}\n`;
//     }
//   }

//   static deposit() {
//     const depositAmount = Number(document.getElementById("depositAmount").value);
//     const depositAccountName = document.getElementById("depositAccount").value;
//     const account = this.accountInfoList.find((account) => account.accountName === depositAccountName);

//     if (!depositAccountName || isNaN(depositAmount) || !account) {
//       alert("Please select an account and enter a valid deposit amount.");
//       return;
//     }

//     account.deposit(depositAmount);

//     // Update account information text area
//     this.updateAccountInfoTextArea();
//   }

//   static debit() {
//     const debitAmount = Number(document.getElementById("debitAmount").value);
//     const debitAccountName = document.getElementById("debitAccount").value;
//     const account = this.accountInfoList.find((account) => account.accountName === debitAccountName);

//     if (!debitAccountName || isNaN(debitAmount) || !account) {
//       alert("Please select an account and enter a valid debit amount.");
//       return;
//     }

//     account.debit(debitAmount);

//     // Update account information text area
//     this.updateAccountInfoTextArea();
//   }
// }

// // Event listeners
// const createAccountButton = document.getElementById("createAccountButton");
// createAccountButton.addEventListener("click", () => {
//   BankAccount.createAccount();
// });

// const depositButton = document.getElementById("depositButton");
// depositButton.addEventListener("click", () => {
//   BankAccount.deposit();
// });

// const debitButton = document.getElementById("debitButton");
// debitButton.addEventListener("click", () => {
//   BankAccount.debit();
// });


class BankAccount {
  static accountInfoList = [];

  constructor(accountName, initialDeposit) {
    this._accountName = accountName;
    this._balance = initialDeposit;
  }

  static createAccount() {
    const accountName = document.getElementById('accountName').value;
    const initialDeposit = parseFloat(document.getElementById('initialDeposit').value);
    const newAccount = new BankAccount(accountName, initialDeposit);
    BankAccount.accountInfoList.push(newAccount);
    BankAccount.updateAccountInfoTextArea();
  }

  static updateAccountInfoTextArea() {
    const accountInfoTextArea = document.getElementById('accountInfoTextArea');
    accountInfoTextArea.value = '';
    BankAccount.accountInfoList.forEach(account => {
      accountInfoTextArea.value += `Account name: ${account._accountName}, Balance: ${account._balance}\n`;
    });
  }

  static populateDropdown(selectElementId) {
    const selectElement = document.getElementById(selectElementId);
    selectElement.innerHTML = '';
    BankAccount.accountInfoList.forEach(account => {
      const option = document.createElement('option');
      option.value = account._accountName;
      option.text = account._accountName;
      selectElement.add(option);
    });
  }

  static deposit() {
    const accountName = document.getElementById('depositAccount').value;
    const amount = parseFloat(document.getElementById('depositAmount').value);
    const account = BankAccount.accountInfoList.find(account => account._accountName === accountName);
    if (account) {
      account._balance += amount;
      BankAccount.updateAccountInfoTextArea();
      document.getElementById('depositAmount').value = '';
    }
  }

  static debit() {
    const accountName = document.getElementById('debitAccount').value;
    const amount = parseFloat(document.getElementById('debitAmount').value);
    const account = BankAccount.accountInfoList.find(account => account._accountName === accountName);
    if (account && account._balance >= amount) {
      account._balance -= amount;
      BankAccount.updateAccountInfoTextArea();
      document.getElementById('debitAmount').value = '';
    }
  }
}

document.getElementById('createAccountButton').addEventListener('click', BankAccount.createAccount);
document.getElementById('depositButton').addEventListener('click', () => {
  BankAccount.populateDropdown('depositAccount');
  document.getElementById('transactionForm').style.display = 'block';
  document.getElementById('transactionSubmit').disabled = true;
  document.getElementById('transactionSubmit').addEventListener('click', BankAccount.deposit);
});
document.getElementById('debitButton').addEventListener('click', () => {
  BankAccount.populateDropdown('debitAccount');
  document.getElementById('transactionForm').style.display = 'block';
  document.getElementById('transactionSubmit').disabled = true;
  document.getElementById('transactionSubmit').addEventListener('click', BankAccount.debit);
});
document.querySelectorAll('select').forEach(selectElement => {
  selectElement.addEventListener('change', () => {
    const transactionAmount = parseFloat(document.getElementById('transactionAmount').value);
    if (transactionAmount > 0) {
      document.getElementById('transactionSubmit').disabled = false;
    }
  });
});
