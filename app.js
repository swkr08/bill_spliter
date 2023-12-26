split=()=>{
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons')
    if(persons.value == 0){
        alert("please enter proper value😅")
    }
    else{
        let result = amount.value / persons.value;
        document.getElementById('result').innerText = result.toFixed(0)
    }
    
}