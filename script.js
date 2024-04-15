document.getElementById('transfer-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const recipient = document.getElementById('recipient').value;
    if (isNaN(amount) || amount <= 0 || recipient.trim() === '') {
        alert('Please enter a valid amount and recipient.');
    } else {
        // Simulate fund transfer (update balance and add transaction to history)
        const balanceDisplay = document.getElementById('balance-display');
        const currentBalance = parseFloat(balanceDisplay.innerText.slice(1));
        if (currentBalance >= amount) {
            balanceDisplay.innerText = '$' + (currentBalance - amount).toFixed(2);
            const transactionList = document.getElementById('transaction-list');
            const newTransaction = document.createElement('li');
            newTransaction.textContent = `Transaction: $${amount.toFixed(2)} to ${recipient}`;
            transactionList.appendChild(newTransaction);
            alert('Fund transfer successful!');
        } else {
            alert('Insufficient funds!');
        }
    }
});
