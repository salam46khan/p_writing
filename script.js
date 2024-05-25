console.log('hii');

const navList = document.getElementById('nav-list')
const loginBtn = document.getElementById('login-btns')
navList.style.maxHeight = "0px"
loginBtn.style.maxHeight = "0px"

function toggleMenu(){
    if(navList.style.maxHeight == "0px"){
        navList.style.maxHeight = "300px"
    }
    else{
        navList.style.maxHeight = "0px"
    }
}
function toggleLogin(){
    if(loginBtn.style.maxHeight == "0px"){
        loginBtn.style.maxHeight = "200px"
    }
    else{
        loginBtn.style.maxHeight = "0px"
    }
}