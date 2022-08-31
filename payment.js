let payment = JSON.parse(localStorage.userOnline)
let sum = Number(localStorage.Sum)
console.log(payment)
const details = () => {
    document.getElementById('email-address').placeholder = payment.userEmail;
    document.getElementById('amount').placeholder = sum;
    document.getElementById('first-name').value = payment.userFirstName;
    document.getElementById('last-name').value = payment.userLastName;
}
details()
const modalpayment = document.querySelector('.payementsuccess')
let order = JSON.parse(localStorage.cartOrder)
let user = JSON.parse(localStorage.userOnline)

let cartOrder = JSON.parse(localStorage.cartOrder)
const pay = () => {
    let m = []
    let brand = []
    let amount = []
    let quantity = []
    order.map((items, id) => {
        // console.log(items.brandTitle)
        brand.push(items.brandName)
        m.push(items.brandTitle)
        amount.push(items.brandPrice)
        quantity.push(items.brandQuantity)
    })
    let reciept = {
        Brand: brand,
        BrandName: m,
        Price: amount,
        Quantity: quantity,
        shipping_Fee: 1000,
        totalAmount: sum,

    }

    user.userCart.push(reciept)
    localStorage.userOnline = JSON.stringify(user)
    for (let i = 0; i < cartOrder.length; i++) {
        cartOrder.splice(i, cartOrder.length)
        localStorage.cartOrder = JSON.stringify(cartOrder)

    }
    // if (localStorage.brandchecked) {
    //     localStorage.removeItem('brandChecked')
    // }
    modalpayment.classList.remove('paynone')


}