let totalIncome = 0;
let totalExpense = 0;

function addIncome() {
    let income = document.getElementById("income").value;

    if (income === "") return;

    income = parseFloat(income);
    totalIncome += income;

    document.getElementById("totalIncome").innerText = "Total Income: ₹" + totalIncome;

    updateBalance();

    let li = document.createElement("li");
    li.innerHTML = `Income: ₹${income} 
        <button onclick="deleteTransaction(this, ${income}, 'income')">Delete</button>`;

    document.getElementById("list").appendChild(li);

    document.getElementById("income").value = "";
}

function addExpense() {
    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("expenseAmount").value;
    let category = document.getElementById("category").value;

    if (name === "" || amount === "" || category === "") {
        alert("Please fill all expense fields");
        return;
    }

    amount = parseFloat(amount);
    totalExpense += amount;

    document.getElementById("totalExpense").innerText = "Total Expense: ₹" + totalExpense;

    updateBalance();

    let li = document.createElement("li");
    li.innerHTML = `${name} - ${category} - ₹${amount} 
        <button onclick="deleteTransaction(this, ${amount}, 'expense')">Delete</button>`;

    document.getElementById("list").appendChild(li);

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
    document.getElementById("category").value = "";
}

function deleteTransaction(button, amount, type) {
    let li = button.parentElement;
    li.remove();

    if (type === "income") {
        totalIncome -= amount;
    } else {
        totalExpense -= amount;
    }

    document.getElementById("totalIncome").innerText = "Total Income: ₹" + totalIncome;
    document.getElementById("totalExpense").innerText = "Total Expense: ₹" + totalExpense;

    updateBalance();
}

function updateBalance() {
    let balance = totalIncome - totalExpense;
    document.getElementById("balance").innerText = "Balance: ₹" + balance;
}