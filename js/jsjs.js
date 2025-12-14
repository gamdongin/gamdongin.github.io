const buttonReset = document.querySelector("#reset__button");

const formLogin = document.querySelector("#form-login");
const inputLogin = formLogin.querySelector("#form-login__input");
const buttonLogin = formLogin.querySelector("#form-login__button");

const hiddenH1 = document.querySelector("#greeting");
const HIDDEN_VISI = "hiddenVisi";
const HIDDEN_DISP = "hiddenDisp";

const USERNAME_KEY = "userName"

data_check();
buttonReset.addEventListener("click", resetUser);

function consolView(event){
    event.preventDefault();
    const userName = inputLogin.value;
    formLogin.classList.add(HIDDEN_VISI);
    diplayHiddenH1(userName);
    localStorage.setItem(USERNAME_KEY, userName);
}
// hoisting 이라고 변수나 함수를 맨 위로 자동으로 끌어올리는게 있음
// 메모리 항당 과정에서 이루어짐
function diplayHiddenH1(USER_NeAME){
    hiddenH1.classList.remove(HIDDEN_DISP);
    hiddenH1.innerText = `Hi ${USER_NeAME}`;
}

function data_check(){
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    if (savedUsername === null){
        formLogin.classList.remove(HIDDEN_VISI);
        formLogin.addEventListener("submit", consolView);
    } else {
        diplayHiddenH1(savedUsername);
    }
}
function resetUser() {
    localStorage.removeItem(USERNAME_KEY);
    data_check()
    hiddenH1.classList.add(HIDDEN_DISP);

    // todo.js 에서 넘어옴
    todoList.innerHTML = "";
    itemArray.length = 0;

    localStorage.clear();
}