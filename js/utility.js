function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString).toFixed(2);
    console.log(inputFieldValue.toFixed(2))
    inputField.value = '';
     return inputFieldValue;
}
function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
     textElement.innerText = newValue;
     
}