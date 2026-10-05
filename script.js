// Code écrit par moi : 100%

let budget = 0;
let totalSpent = 0;

// Get elements from HTML
const budgetInput = document.getElementById("budget-input");
const budgetButton = document.getElementById("budget-btn");

const budgetDisplay = document.getElementById("budget");
const spentDisplay = document.getElementById("spent");
const remainingDisplay = document.getElementById("remaining");

const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const expenseCategory = document.getElementById("expense-category");
const addExpenseButton = document.getElementById("add-expense-btn");

const expenseList = document.getElementById("expense-list");

// Set the monthly budget
budgetButton.addEventListener("click", function () {
    const newBudget = Number(budgetInput.value);

    if (newBudget <= 0) {
        alert("Please enter a valid budget.");
        return;
    }

    budget = newBudget;

    updateSummary();

    budgetInput.value = "";
});
// Add a new expense
addExpenseButton.addEventListener("click", function () {
    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    // Check if the budget has been set
    if (budget <= 0) {
        alert("Please set your monthly budget first.");
        return;
    }

    // Check if the expense information is valid
    if (name === "" || amount <= 0) {
        alert("Please enter a valid expense.");
        return;
    }

    // Check if the expense exceeds the remaining budget
    if (amount > budget - totalSpent) {
        alert("This expense exceeds your remaining budget.");
        return;
    }

    totalSpent += amount;

    const expense = document.createElement("li");

    expense.innerHTML = `
        <strong>${category}</strong> - ${name} - $${amount.toFixed(2)}
        <button class="delete-btn">Delete</button>
    `;

    expenseList.appendChild(expense);

    // Delete expense
    const deleteButton = expense.querySelector(".delete-btn");

    deleteButton.addEventListener("click", function () {
        totalSpent -= amount;
        expense.remove();

        updateSummary();
    });

    updateSummary();

    expenseName.value = "";
    expenseAmount.value = "";
});

// Update budget summary
function updateSummary() {
    const remaining = budget - totalSpent;

    budgetDisplay.textContent = `$${budget.toFixed(2)}`;
    spentDisplay.textContent = `$${totalSpent.toFixed(2)}`;
    remainingDisplay.textContent = `$${remaining.toFixed(2)}`;
}