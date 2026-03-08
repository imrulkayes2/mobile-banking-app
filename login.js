document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const accNumber=document.getElementById('accNum').value;
    const accPassword=document.getElementById('password').value;
    if(accNumber.length==11 && accPassword.length==4){
        window.location.href="./dashboard.html";
        // window.open('dashboard.html','_blank')
    }
    else{
        alert('Please insert 11 Digit Number & 4 digit Password')
    }

    
})