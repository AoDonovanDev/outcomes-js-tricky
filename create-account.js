function createAccount(pin, amount=0) {
  let balance = amount;
  let accountPin = pin;

  return {
    checkBalance: function(pin){
      if(accountPin === pin) return `$${balance}`;
      return "Invalid PIN."
    },
    deposit: function(pin, amt){
      if(pin === accountPin && amt){
        balance += amt;
        return `Succesfully deposited $${amt}. Current balance: $${balance}.`
      }
      return "Invalid PIN."
    },
    withdraw: function(pin, amt){
      if(pin === accountPin && ((balance-amt) > 0)){
        balance -= amt;
        return `Succesfully withdrew $${amt}. Current balance: $${balance}.`
      }
      else if(pin === accountPin && ((balance-amt) < 0)){
        return "Withdrawal amount exceeds account balance. Transaction cancelled."
      }
      else if(pin != accountPin){
        return "Invalid PIN."
      }
    },
    changePin: function(current, newPin){
      if(current === accountPin){
        accountPin = newPin;
        return "PIN successfully changed!"
      }
      return "Invalid PIN."
    }
  }
}

module.exports = { createAccount };
