document.getElementById('bt-3').addEventListener('click',function(event){
    event.preventDefault();// vejal to beggineer
    //const n = document.getElementById('pass').value;
    const n = getInputFieldValueById('pass');
    const y = parseFloat(getInputFieldValueById('amo')); //parseFloat(document.getElementById('amo').value)
    const z = parseFloat(document.getElementById('ttl').innerText)
    if (n === '1234'){
        const total = z + y;

        // update balance
        document.getElementById('ttl').innerText = total;
        //add to  history
        const p = document.createElement('p');
        p.innerText = `${y} is added and New balance is ${total}`;
        document.getElementById('history').appendChild(p)
        
    }
    else{
        alert('bad job')
        console.log(n)
    }

    





})