let total = localStorage.getItem("total") ? parseFloat(localStorage.getItem("total")) : 0;
document.getElementById("total").innerText = total;

function saveExpense() {
    let amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount)) {
        total += amount;
        localStorage.setItem("total", total);
        document.getElementById("total").innerText = total;
    }
}

function clearData() {
    localStorage.removeItem("total");
    total = 0;
    document.getElementById("total").innerText = total;
}
