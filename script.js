function setClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const hourDeg = hours * 30 + minutes * 0.5;

    document.getElementById("second").style.transform =
        `rotate(${secondDeg - 90}deg)`;
    document.getElementById("minute").style.transform =
        `rotate(${minuteDeg - 90}deg)`;
    document.getElementById("hour").style.transform =
        `rotate(${hourDeg - 90}deg)`;
}

setInterval(setClock, 1000);
setClock();
