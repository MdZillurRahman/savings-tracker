function collection(input){
    const Input = document.getElementById(input + 'Input').value;
    const finalInput = parseFloat(Input);
    return finalInput;
}

function totalExpense(rent, food, other){
    
    const totalExpense = rent + food + other;
    document.getElementById('totalExpense').innerText = totalExpense;
    return totalExpense;
       
}

function balance(income){
    const balanceAmount = income - totalExpense();
    document.getElementById('balance').innerText = balanceAmount;
    return balanceAmount; 
}

function savings(){
    const input = collection('save');
    const save = income * input / 100;
    document.getElementById('savingAmount').innerText = save;
    return save;
}

function remainingBalance(){
    const balanceFinal = balance();
    const save = savings();

    const remain = balanceFinal - save;
    document.getElementById('remaningBalance').innerText = remain;
    console.log(remain);
}

/* document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    
}); */

document.getElementById('calculateBtn').addEventListener('click', function(){
    const rent = collection('rent');
    const food = collection('food');
    const other = collection('other');
    const income = collection('income');

    
    totalExpense(rent, food, other);
    balance(income);
    
})

document.getElementById('savingBtn').addEventListener('click', function(){
        savings();
        remainingBalance();
})