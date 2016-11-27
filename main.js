var accounts = [ ];

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

function deposit (account, amount) {
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

var andrewsAccount = createAccount({
	username: 'Andrew',
	balance: 0
});

try{
 deposit(andrewsAccount, 100);
 console.log(andrewsAccount);
}
catch (e){
 console.log(e.information);
 console.log(andrewsAccount);
}

try{
 deposit(andrewsAccount, -100);
 console.log(andrewsAccount);
}
catch (e){
 console.log(e.information);
 console.log(andrewsAccount);
}

try{
 deposit(andrewsAccount, "100");
 console.log(andrewsAccount);
}
catch (e){
 console.log(e.information);
 console.log(andrewsAccount);
}

try{
 deposit(andrewsAccount, "Test");
 console.log(andrewsAccount);
}
catch (e){
 console.log(e.information);
 console.log(andrewsAccount);
}

try{
 withdraw(andrewsAccount, 100);
 console.log(andrewsAccount);
}
catch (e){
 console.log(e.information);
 console.log(andrewsAccount);
}

try{
 withdraw(andrewsAccount, -100);
 console.log(andrewsAccount);
}
catch (e){
 console.log(e.information);
 console.log(andrewsAccount);
}

try{
 withdraw(andrewsAccount, "100");
 console.log(andrewsAccount);
}
catch (e){
 console.log(e.information);
 console.log(andrewsAccount);
}

try{
 withdraw(andrewsAccount, "Test");
 console.log(andrewsAccount);
}
catch (e){
 console.log(e.information);
 console.log(andrewsAccount);
}
