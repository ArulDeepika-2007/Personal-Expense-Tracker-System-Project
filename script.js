let totalIncome = 0;
let totalExpense = 0;

function addIncome() {
    let incomeInput = document.getElementById("income");
    let income = Number(incomeInput.value);

    if (!income) {
        alert("Enter valid income");
        return;
    }

    totalIncome += income;

    updateUI("Income", income);

    incomeInput.value = "";
    updateBalance();
}

function addExpense() {
    let expenseInput = document.getElementById("expense");
    let expense = Number(expenseInput.value);

    if (!expense) {
        alert("Enter valid expense");
        return;
    }

    totalExpense += expense;

    updateUI("Expense", expense);

    expenseInput.value = "";
    updateBalance();
}

function updateBalance() {
    document.getElementById("totalIncome").innerText =
        "Total Income: ₹" + totalIncome;

    document.getElementById("totalExpense").innerText =
        "Total Expense: ₹" + totalExpense;

    document.getElementById("balance").innerText =
        "Balance: ₹" + (totalIncome - totalExpense);
}

function updateUI(type, amount) {
    let list = document.getElementById("list");
    let item = document.createElement("li");

    item.innerHTML = `
        ${type}: ₹${amount}
        <button onclick="deleteItem(this, '${type}', ${amount})">Delete</button>
    `;

    if (type === "Income") {
        item.style.color = "green";
    } else {
        item.style.color = "red";
    }

    list.appendChild(item);
}
function deleteItem(btn, type, amount) {
    let item = btn.parentElement;
    item.remove();

    if (type === "Income") {
        totalIncome -= amount;
    } else {
        totalExpense -= amount;
    }

    updateBalance();
}