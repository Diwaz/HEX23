let days = document.querySelector('.days')
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
let finalDate = new Date('JUL 14,2023 00:00:00').getTime();


setInterval(() => {
    let nowDate = new Date().getTime();
    let distance = finalDate - nowDate;

    let dayRem = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hourRem = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minRem = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secRem = Math.floor(distance % (1000 * 60) / 1000);

    days.textContent = dayRem
    hours.textContent = hourRem
    minutes.textContent = minRem
    seconds.textContent = secRem
    console.log(dayRem, hourRem, minRem, secRem)
}, 1000)