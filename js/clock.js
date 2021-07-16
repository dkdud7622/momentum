const clock = document.querySelector("#clock");
clock.classList.add("clock");

function getClock() {
    const date = new Date();
    let hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);