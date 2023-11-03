let form1=document.querySelector('.register form.login');
let form2=document.querySelector('.register form.show');
let closeform=document.querySelectorAll('.close-form');
function sign(){
    form1.classList.add('show');
    form2.classList.remove('show');
}
function login(){
    form1.classList.remove('show');
    form2.classList.add('show');
}
closeform.forEach(element => {
    element.addEventListener("click", () =>{
        history.go(-1);
    } )
});
