console.log('hii');

const navList = document.getElementById('nav-list')
const loginBtn = document.getElementById('login-btns')
navList.style.top = "100px"
loginBtn.style.top = "100px"

function toggleMenu(){
    if(navList.style.top == "100px"){
        navList.style.top = "-300px"
    }
    else{
        navList.style.top = "100px"
    }
}
function toggleLogin(){
    if(loginBtn.style.top == "100px"){
        loginBtn.style.top = "-200px"
    }
    else{
        loginBtn.style.top = "100px"
    }
}

const faqBox = document.getElementsByClassName("faq-box")
for(i = 0; i<faqBox.length; i++){
    faqBox[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}
