let Username = document.querySelector('.Username');
let password = document.querySelector('.password');
let submit = document.querySelector('.submit');

if(!localStorage.getItem('userlogin')){
    localStorage.setItem('userlogin', JSON.stringify(new Array()));
}

let getLocaldata = JSON.parse(localStorage.getItem('userlogin'));

if(getLocaldata.active === '1'){
    location.href='home.html';
}

submit.addEventListener('click', function(event){
    event.preventDefault();
    let getData = JSON.parse(localStorage.getItem('user'));
 
    let filterData = getData.filter((item, index) => {
        return item.username === Username.value.trim() && item.Password === password.value.trim();
    })

    
     if(!Username.value.trim() || !password.value.trim()){
        alert("Input box Empty!!!!!")
    }else if(filterData.length <= 0){
        alert("Username and Password Wrong")
    }
    else{
        if(filterData[0].username && filterData[0].Password){

        localStorage.setItem( 'userlogin' , JSON.stringify({
            user : Username.value.trim(),
            pass : password.value.trim(),
            active: '1'
        }));

        alert("Successfull Login 😎");
        location.href='home.html';
        }
    }

})