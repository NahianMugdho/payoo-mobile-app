document.getElementById('bt-3').addEventListener('click',function(event){
    event.preventDefault();// vejal to beggineer
    const n = document.getElementById('pass').value;
    const y = parseFloat(document.getElementById('amo').value)
    const z = parseFloat(document.getElementById('ttl').innerText)
    if (n === '1234'){
        const total = z + y;

        // update balance
        document.getElementById('ttl').innerText = total;

    }
    else{
        alert('bad job')
    }

    





})