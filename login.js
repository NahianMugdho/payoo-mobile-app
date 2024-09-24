// form submit reloading page

document.getElementById('btn-login').addEventListener('click',function(event)
{
    event.preventDefault();// vejal to beggineer
    console.log('hello montu')
    const pn = document.getElementById('phone-no').value
    console.log(pn)
    const pi = document.getElementById('pin-no').value
    console.log(pi)

    if(pn === '5' && pi === '1234'){
        console.log('you are logged in');
        window.location.href = '/home.html';
    }
    else {

        alert('wrong');
    }

})