setInterval(() => {
    let date = new Date();
    let hours = date.getHours() % 12 == 0 ? 12 : date.getHours() % 12;
    let minutes = date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`;
    let seconds = date.getSeconds() > 10 ? date.getSeconds() : `0${date.getSecond()}`;
    let AM_PM = date.getHours() < 12 ? "AM" : "PM";
    document.querySelector(".clock").textContent = `${hours} : ${minutes} : ${seconds} ${AM_PM}`
},1)