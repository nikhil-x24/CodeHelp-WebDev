const countValue = document.querySelector('#counter');
// const countValue = document.getElementById('counter');

function increment(){
    //get the value from UI
    let value = parseInt(countValue.innerText);
    //update the value
    value = value+1;
    //set the value
    countValue.innerText = value;
}

function decrement(){
    let value = parseInt(countValue.innerText);
    value -=1;
    countValue.innerText = value;
}