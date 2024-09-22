



document.getElementById('calculate').addEventListener('click', function () {
    const income = getValueFromInput('income');
    const softwareCost = getValueFromInput('software');
    const courseCost = getValueFromInput('courses');
    const internetCost = getValueFromInput('internet');

   
    if(softwareCost <= 0 || isNaN(softwareCost)){
       showError('software-error')
        return;
    };
    if(courseCost <= 0 || isNaN(courseCost)){
        showError('courses-error')
        return;
    };
    if(internetCost <= 0 || isNaN(internetCost)){
        showError('internet-error')
        return;
    };
  

    const totalExpenses = softwareCost + courseCost + internetCost;
    const balance = income - totalExpenses;
    if(totalExpenses >= income){
        showError('logic-error')
        return;
    }


    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);
    const result = document.getElementById('results');
    result.classList.remove('hidden');

    const historyItem = document.createElement("div");
    historyItem.className = " bg-white p-3 rounded-md border-l-2 border-indigo-500";
    historyItem.innerHTML = `
    <p class="text-xs text-gray-500 "> ${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500 ">Income: ${income.toFixed(2)}</p>
    <p class="text-xs text-gray-500 ">Expenses: ${totalExpenses.toFixed(2)}</p>
    <p class="text-xs text-gray-500 ">Balance : ${balance.toFixed(2)}</p>
    `
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

document.getElementById('calculate-savings').addEventListener('click', function () {
    const income = getValueFromInput('income');
    const softwareCost = getValueFromInput('software');
    const courseCost = getValueFromInput('courses');
    const internetCost = getValueFromInput('internet');
    const savingsPercentage = getValueFromInput('savings');

    const totalExpenses = softwareCost + courseCost + internetCost;
    const balance = income - totalExpenses;
    const savingAmount = (savingsPercentage * balance) / 100;
    const remainingBalance = balance - savingAmount;
    const savings = document.getElementById('savings-amount');
    savings.innerText = savingAmount.toFixed(2);
    const remainingMoney = document.getElementById('remaining-balance');
    remainingMoney.innerText = remainingBalance.toFixed(2);
});

const historyTab = document.getElementById('history-tab');
const asistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function () {
    historyTab.classList.add("text-white", "bg-gradient-to-r", "from-blue-500", "to-purple-600");
    historyTab.classList.remove("text-gray-600");
    asistantTab.classList.remove("text-white", "bg-gradient-to-r", "from-blue-500", "to-purple-600");
    asistantTab.classList.add("text-gray-600");
    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
});
asistantTab.addEventListener('click', function(){
    asistantTab.classList.add("text-white", "bg-gradient-to-r", "from-blue-500", "to-purple-600");
    historyTab.classList.remove("text-white", "bg-gradient-to-r", "from-blue-500", "to-purple-600");
    document.getElementById('expense-form').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
});
document.getElementById('income').addEventListener('input', function(){
    const income = getValueFromInput('income');
    if(income <= 0 || isNaN(income)){
        document.getElementById('income-error').classList.remove('hidden');
        return;
    };
})
