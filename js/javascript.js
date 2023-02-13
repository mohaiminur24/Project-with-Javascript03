function receivedInputValueByID(id){
    const inputField = document.getElementById(id);
    const inputNumber = parseFloat(inputField.value);
    inputField.value = "";
    return inputNumber;
};
function receivedTextvalueByID(id){
    const textField = document.getElementById(id);
    const textValue = parseFloat(textField.innerText);
    return textValue;
};
function textPlusByID(textId,textPlus){

    const textField = document.getElementById(textId);
    textField.innerText = textPlus;
    
};


function deposit(){

   const inputValue = receivedInputValueByID("Deposit-field");

   if(typeof inputValue == "number" && inputValue>0){
    const textValue = receivedTextvalueByID("DTotalMoney");
    const totalDeposit = inputValue+textValue;
    textPlusByID("DTotalMoney",totalDeposit);
    const totalMoneyField = receivedTextvalueByID("totalCMoney");
    const totalM = totalMoneyField+inputValue;
    textPlusByID("totalCMoney",totalM);
   }else{
    alert("invalid!");
   };

};

function withdrow(){

    const wInputV = receivedInputValueByID("withdrow-Filed");
    const totalMoney = receivedTextvalueByID("totalCMoney");

    if(typeof wInputV == "number" && wInputV < totalMoney && wInputV>0){
        const WTextV = receivedTextvalueByID("pWithdrow-money");
        const WMoneyT = WTextV+wInputV
        textPlusByID("pWithdrow-money",WMoneyT);
        const newTotalMoney = totalMoney-wInputV;
        textPlusByID("totalCMoney",newTotalMoney);

    }else{
        alert("invalid");
    };
};