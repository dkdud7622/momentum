const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const whatName = document.querySelector("#whatName");
const WHITE = "whiteCenter";
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    toDoForm.classList.remove(HIDDEN_CLASS);
    whatName.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username);
}

function morningNight(username) {
    const date = new Date();
    let hours = date.getHours();
    if (hours >= 5 && hours < 12) {
        greeting.innerText = `Good morning, ${username}`;
    } else if (hours >= 12 && hours < 18) {
        greeting.innerText = `Good afternoon, ${username}`;
    } else if (hours >= 18 && hours < 22) {
        greeting.innerText = `Good evening, ${username}`;
    } else if (hour >= 22 && hours < 24) {
        greeting.innerText = `Good night, ${username}`;
    } else {
        greeting.innerText = `${username}, Did you have a good day today?`;
    }
}

function paintGreetings(username) {
    morningNight(username);
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.classList.add(WHITE);
    greeting.classList.add("gretingsize");
    greeting.classList.add("margingreeting");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
    whatName.classList.add(HIDDEN_CLASS);

}