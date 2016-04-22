// Exercise 1

// TODO write a BankAccount class that implements the following:
//
//   BankAccount(balance)
//
//   .deposit(n)
//      increases/reduces balance
//      throws OutOfFunds if negative deposit would go below 0
//
//   .balance(n)
//      returns balance

export class BankAccount {
    constructor(balance) {
	this._balance = balance;
    }

    deposit(n) {
	if (n + this._balance < 0)
	    throw Error("OutOfFunds");
	this._balance += n;
    }

    balance() {
	return this._balance;
    }
    
}

// Exercise 2

// TODO using class, sub-class BankAccount to create a BankAccountWithOverdraft
// which allows balance to go below 0, but only
// as low as the overdraft allows. The API is:
//
//   BankAccountWithOverdraft(balance: number, overdraft: number)
//
//   deposit(n)
//
//      will allow withdraws to -overdraft, then throws `OutOfFunds`

// TODO create inheritance relation

export class BankAccountWithOverdraft extends BankAccount {
    constructor(balance, overdraft) {
	super(balance);
	this._overdraft = overdraft;
    }

    deposit(n) {
	if (n + this._balance < -this._overdraft)
	    throw Error("OutOfFunds");
	this._balance += n;
    }
}


// Exercise 3

// TODO using prototypes, define BankAccountWithOverdraftViaPt that
// manually creates an object with BankAccount.prototype as its prototype,
// and then overrides deposit on each instance, in the same way as BankAccountWithOverdraft
//

// TODO define standard function BankAccountWithOverdraftViaPt
// TODO ensure balance is set
// TODO ensure BankAccountWithOverdraftViaPt.prototype is a BankAccount (prototypal inheritance)
// TODO override deposit for our prototypal 'subclass'

export function BankAccountWithOverdraftViaPt(balance, override) {
    this._balance = balance;
    this._overdraft = override;
}

BankAccountWithOverdraftViaPt.prototype = Object.create(BankAccount.prototype);

BankAccountWithOverdraftViaPt.prototype.deposit = function(n) {
    if (n + this._balance < -this._overdraft)
	throw Error("OutOfFunds");
    this._balance += n;
}
