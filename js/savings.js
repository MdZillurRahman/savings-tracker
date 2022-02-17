function collection(input){
    const Input = document.getElementById(input + 'Input').value;
    const finalInput = parseFloat(Input);
    return finalInput;
}

function totalExpense(){
    const Rent = collection('rent');
    const Food = collection('food');
    const Other = collection('other');

    const totalExpense = Rent + Food + Other;
    document.getElementById('totalExpense').innerText = totalExpense;
    return totalExpense;
}

function balance(){
    const Income = collection('income');
    const balanceAmount = Income - totalExpense();
    document.getElementById('balance').innerText = balanceAmount;
    return balanceAmount; 
}

function savings(){
    const Income = collection('income');
    const Input = collection('save');
    const save = Income * Input / 100;
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

document.getElementById('calculateBtn').addEventListener('click', function(){
    totalExpense();
    balance();
    
})

document.getElementById('savingBtn').addEventListener('click', function(){
        savings();
        remainingBalance();
})