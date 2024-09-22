function getValueFromInput(id){
    const getInputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(getInputValue);
    return inputNumber;
};
function showError(id){
    document.getElementById(id).classList.remove("hidden");
    
}
