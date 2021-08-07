let Username = document.querySelector('.Username')
let Full_Name = document.querySelector('.Full_Name')
let Email = document.querySelector('.Email')
let Password = document.querySelector('.password')
let submit = document.querySelector('.submit')

if(!localStorage.getItem('user')){
    localStorage.setItem('user', JSON.stringify(new Array()));
}

submit.addEventListener('click', function(event){
    event.preventDefault()

    if(Username.value.trim() == '' || Full_Name.value.trim() == '' || Email.value.trim() == '' || Password.value.trim() == ''){
        alert("Something data is Empty 😥😥!")
    }else{
        let getLocaldata = JSON.parse(localStorage.getItem('user'));
        getLocaldata.push({
            username : Username.value.trim(),
            Full_Name : Full_Name.value.trim(),
            Email : Email.value.trim(),
            Password : Password.value.trim(),
            active: '0'
        })
       let setlocaldata = localStorage.setItem( 'user' , JSON.stringify(getLocaldata));

       Username.value = '' ;
       Full_Name.value = '' ;
       Email.value = '' ;
       Password.value = '';

        alert("Sussessfully Registation Done 😎")
            location.href = 'login.html';

        }

})



