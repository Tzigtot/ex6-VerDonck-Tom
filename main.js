var accounts = [ ];
var account = function (username, balance){
    this.username = username;
    this.balance = balance;
};

function Exception(information){
    this.information = information;
    }

function createAccount (account) {
	accounts.push(account);
	return account;
}

function getAccount (username) {
	var matchedAccount;

	accounts.forEach( function (internal_account) {
		if (internal_account.username === username) {
			matchedAccount = internal_account;
		}
	} );

	return matchedAccount;
}

function getAccountBalance (username) {
	var matchedAccount;

	accounts.forEach( function (internal_account) {
		if (internal_account.username === username) {
			matchedAccount = internal_account;
		}
	} );
        console.log(matchedAccount.balance);
	return function(){
            return matchedAccount.balance;
        };

}

function deposit (account,amount) {
  if (!isNaN(amount)){
    var newAmount = +amount;
    if (newAmount >= 0){
	account.balance += newAmount;
    }
    else {
        throw new Exception("Negative number");
    }
  }
  else {
      throw new Exception("Value is not a number");
  }
}

function withdraw (account, amount) {
      if (!isNaN(amount)){
    if (amount >= 0){
	account.balance -= amount;
    }
    else {
        throw new Exception("Negative number");
    }
  }
  else {
      throw new Exception("Value is not a number");
  }
}

function getBalance (account) {
	return account.balance;
}

account.prototype = {
    
Exception: function(information){
    this.information = information;
    },
    
deposit: function(amount) {
    account = this;
  if (!isNaN(amount)){
    var newAmount = +amount;
    if (newAmount >= 0){
	account.balance += newAmount;
    }
    else {
        throw new Exception("Negative number");
    }
  }
  else {
      throw new Exception("Value is not a number");
  }
},

withdraw: function(amount) {
    account = this;
      if (!isNaN(amount)){
    if (amount >= 0){
	account.balance -= amount;
    }
    else {
        throw new Exception("Negative number");
    }
  }
  else {
      throw new Exception("Value is not a number");
  }
},

getBalance: function() {
    return this.balance;
}

};

var acc1 = new account('Andrew', 0);
var acc2 = new account('Jen', 0);

try{
acc1.deposit(100);
console.log(acc1);
}
catch (e){
    console.log(e.information);
    console.log(acc1);
}

try{
acc2.deposit(-100);
console.log(acc2);
}
catch (e){
    console.log(e.information);
    console.log(acc2);
}

try{
acc1.deposit("test");
console.log(acc1);
}
catch (e){
    console.log(e.information);
    console.log(acc1);
}

console.log(acc1.getBalance());
