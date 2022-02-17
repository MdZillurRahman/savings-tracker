function collection(input){
    const Input = document.getElementById(input + 'Input').value;
    const finalInput = parseFloat(Input);
     return finalInput;
    }

function totalExpense(){
    const rent = collection('rent');
    const food = collection('food');
    const other = collection('other');
    let expense = document.getElementById('totalExpense');

    const error1 = document.getElementById('error1');
    if( rent < 0 || food < 0 || other < 0){
        error1.style.display = 'block';
        expense.innerText = '';
    }
    else{
    const totalExpense = rent + food + other;
    expense.innerText = totalExpense;
    return totalExpense;
    }
    
      
}

function balance(){
    const income = collection('income');
    let balance = document.getElementById('balance');

    const error2 = document.getElementById('error2');
    if( income < 0 || totalExpense() > income){
        error2.style.display = 'block';
        balance.innerText = '';
    }
    else{
        const balanceAmount = income - totalExpense();
        balance.innerText = balanceAmount;
        return balanceAmount;
    } 
}

function savings(){
    const income = collection('income');
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

    totalExpense();
    balance(); 
 
    
})

document.getElementById('savingBtn').addEventListener('click', function(){
        savings();
        remainingBalance();
})