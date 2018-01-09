// Create function that returns the name and balance of cash on an account

// Create function that transfers an amount of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

'use strict';

var accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

function getBalance(holder) {
    let temp = ''
    accounts.forEach(function(element) {
        if (element['client_name'] === holder) {
            temp += element['client_name'] + element['balance']
        }
    })
    return temp
};

function transfer(fromAcc, toAcc, amount) {
    let error = 0
    accounts.forEach(function(element) {
        if (element['account_number'] === fromAcc && element['balance'] >= amount) {
            element['balance'] -= amount
            error += 1
        } else if (element['account_number'] === toAcc) {
            element['balance'] += amount
            error += 1
        }
    })
    if (error === 0) {
        console.log('404 - account not found')
    }
};

getBalance('Sergei');
transfer(23456311, 11234543, 1353600);
