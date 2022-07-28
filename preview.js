let cart = [];
const m = JSON.parse(localStorage.brandChecked)
const cartBtn = document.querySelector('.cart')
console.log(m)

const cartNotification = document.querySelector('.cartNotification');

const allowMoreOrders = () => {
    if (localStorage.cartOrder) {
        cart = JSON.parse(localStorage.cartOrder)
        cartNotification.innerHTML = `${cart.length}`
    }

}

const imgBay = document.querySelector('#imgbay')
const previewProduct = () => {
    imgBay.innerHTML = `<img src="${m['brandImgUrl']}" >`
    document.querySelector('.cartdetails').innerHTML = ` <h5 class="brandname">${m.brandName}</h5>
                                      <p class="brandtitle">${m.brandTitle}</p>
                                          <p><span>$</span>${m.brandPrice}</p>`



}
previewProduct()

const addToCart = () => {
    cart.push(m);
    localStorage.cartOrder = JSON.stringify(cart)
    document.querySelector('.cartNotification').innerHTML = `${cart.length} `
}
cartBtn.addEventListener('click', () => {
    location.href = 'cart.html'
})
