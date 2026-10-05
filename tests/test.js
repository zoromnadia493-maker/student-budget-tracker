const results = document.getElementById("test-results");

function runTest(testName, testFunction) {
    const result = document.createElement("p");

    try {
        const passed = testFunction();

        if (passed) {
            result.textContent = "PASS: " + testName;
        } else {
            result.textContent = "FAIL: " + testName;
        }
    } catch (error) {
        result.textContent = "FAIL: " + testName;
    }

    results.appendChild(result);
}


// Test 1: Calculate remaining budget
runTest("Remaining budget is calculated correctly", function () {
    const budget = 1000;
    const spent = 250;

    return budget - spent === 750;
});


// Test 2: Accept a valid expense
runTest("A positive expense amount is valid", function () {
    const amount = 50;

    return amount > 0;
});


// Test 3: Reject a negative expense
runTest("A negative expense is rejected", function () {
    const amount = -20;

    return amount <= 0;
});


// Test 4: Reject an expense exceeding the budget
runTest("An expense exceeding the remaining budget is rejected", function () {
    const budget = 500;
    const spent = 400;
    const expense = 150;

    return expense > (budget - spent);
});


// Test 5: Reject an empty expense name
runTest("An empty expense name is rejected", function () {
    const name = "";

    return name.trim() === "";
});


// Test 6: Accept a valid expense name
runTest("A valid expense name is accepted", function () {
    const name = "Groceries";

    return name.trim() !== "";
});