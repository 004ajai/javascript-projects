// // Mini Project 3: ATM Machine
// // * Start with a balance of 1000.
// // * Show a menu using prompt:
// // 1. Deposit
// // 2. Withdraw
// // 3. Check Balance
// // 4. Exit
// // * For Deposit, add the entered amount to the balance.
// // * For Withdraw, deduct the entered amount only if there is enough balance; otherwise, show “Insufficient Balance ❌”.
// // * For Check Balance, show the current balance.
// // * For Exit, stop the program.
// // * After each operation, ask with confirm if the user wants to continue.

let balance = 1000;

const balances = document.getElementById("balance");
const amount   = document.getElementById("amount");
const msgEl    = document.getElementById("message");

// document.getElementById("deposit").addEventListener("click", () => {
//   const amt = Number(amount.value);
//   if (amt > 0) {
//     balance += amt;
//     update(`Deposited ${amt}`);
//   } else showMsg("Enter a valid amount");
// });

// document.getElementById("withdraw").addEventListener("click", () => {
//   const amt = Number(amount.value);
//   if (amt > 0 && amt <= balance) {
//     balance -= amt;
//     update(`Withdraw ${amt}`);
//   } else if (amt > balance) showMsg("Insufficient balance");
//   else showMsg("Enter a valid amount");
// });

// document.getElementById("check").addEventListener("click", () => {
//   showMsg(`Current balance: ${balance}`);
// });

// document.getElementById("exit").addEventListener("click", () => {
//   showMsg("Thank you! Please remove your card.");
//   amount.value = "";
// });

// function update(text) {
//   balances.textContent =`${balance}`;
//   showMsg(text);
//   amount.value = "";
// }

// function showMsg(text) {
//   msgEl.textContent = text;
// }