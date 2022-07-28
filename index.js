let ball1 = document.querySelector('.ball1')
let ball2 = document.querySelector('.ball2')
let ball3 = document.querySelector('.ball3')
let ball4 = document.querySelector('.ball4')
let ball5 = document.querySelector('.ball5')
let logoName = document.querySelector('.index')
let motto = document.querySelector(".p")

setTimeout(() => {
    ball1.style.backgroundColor = '#4bf145'
}, 1000)

setTimeout(() => {
    ball1.style.backgroundColor = '#a6dea6'
}, 2000)
setTimeout(() => {
    ball1.style.backgroundColor = '#4bf145'
}, 3000)
setTimeout(() => {
    ball2.style.backgroundColor = '#4bf145'
    ball3.style.backgroundColor = '#4bf145'
}, 3200)

setTimeout(() => {
    ball4.style.backgroundColor = '#4bf145'
}, 4000)
setTimeout(() => {
    ball4.style.backgroundColor = '#a6dea6'
}, 5000)
setTimeout(() => {
    ball4.style.backgroundColor = '#4bf145'
}, 5500)
setTimeout(() => {
    ball5.style.backgroundColor = '#4bf145'
    logoName.classList.remove('indexNone')
}, 6000)
setTimeout(() => {
    motto.classList.remove('pnone')

}, 6100)
setTimeout(() => {
    location.href = 'demo.html'

}, 7000)