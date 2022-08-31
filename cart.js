'use strict'

let cartList = JSON.parse(localStorage.cartOrder)
const productDetails = document.querySelector('.product_details');
const paymentSlip = document.getElementById('orderSummary');
document.querySelector('.cartNotification').innerHTML = cartList.length;
let totalprice = []
let orderGoods = []
let sum = 0
let deliveryFee = 1000
//a fuction that sums the total amount of the price of the product bought

const headingcart = document.querySelectorAll("#heading");
const getit = () => {
    if (sum === 0) {
        for (let i = 0; i < headingcart.length; i++) {
            headingcart[i].innerHTML = ''
            cartmessage.innerHTML = 'Your cart is empty'
        }
    } else {
        cartmessage.innerHTML = ''
    }
}
const paymentSlipReceipt = () => {
    for (let i = 0; i < cartList.length; i++) {
        totalprice.push(cartList[i].brandPrice)
        sum += Number(totalprice[i])
        let z = sum + deliveryFee
        paymentSlip.innerHTML = `<div>
                                    <div class="ordersummaryt">
                                        <h5>Order Summary</h5>
                                    </div>
                                    <div class="summarytextdiv d-flex justify-content-between">
                                        <span class="summarytext">SubTotal</span>
                                        <span>₦${sum}</span>
                                    </div>
                                    <div class="summarytextdiv d-flex justify-content-between">
                                        <span class="summarytext">Delivery Fee</span>
                                        <span>1000</span>
                                    </div>
                                    <div class="summarytexttotal d-flex justify-content-between">
                                        <span class="summarytext">Total</span>
                                        <span>₦${z}</span>
                                    </div>
                                    <div class="orderbtn d-flex justify-content-center">
                                        <button onclick="pay()">Pay</button>
                                    </div>
                                </div>`

    }


}
paymentSlipReceipt()

const cartListObject = () => {

    cartList.map((ci, cd) => {
        productDetails.innerHTML += `<div class="imgdiv">
                                  <div class="d-flex">
                                     <img src="${ci.brandImgUrl}" alt="" width="50%">
                                    <div class="ms-3">
                                       <h6 class="h6">${ci.brandName}</h6>
                                        <p>${ci.brandTitle}</p>
                                    </div>

                                  </div>

                                 </div>

                                <div class="div">
                                <div>

                                    <div>
                                        <span class="fw-bold" id="yes">₦${ci.brandPrice}</span>
                                    </div>
                                </div>
                                 <div class="add_reduce d-flex justify-content-center">
                                     <div>
                                         <button class="fw-bold" id="add" onclick="addToQuatity(${cd})">+</button>
                                         <input type="text" class="fw-bold amountproduct" id="amountOfProduct" ></input>
                                         <button class="fw-bold" id="reduce" onclick="reduceQuantity(${cd})">-</button>
                                     </div>


                                 </div>
                                 <div class="totalincrementNone">
                                     <div>
                                         <span class="fw-bold id="eachTotalProduct"></span>
                                     </div>

                                 </div>
                                 <div class="btnremoveOrder">
                                     <button onclick="deleteProduct(${cd})">&times;</button><br>

                                 </div>
                                 </div>`



    })

}
cartListObject()

const deleteProduct = (del) => {

    let remove = cartList.filter((ci, cd) => del !== cd)
    cartList = remove;
    localStorage.cartOrder = JSON.stringify(cartList)
    productDetails.innerHTML = ''
    cartListObject()
    document.querySelector('.cartNotification').innerHTML = cartList.length;

    //checked for  the index of the price if it's equal to the index passed in the delete button 
    //then remove the number from thte total price
    //i then splice the array of the totalprice which then return a new array and diffent total
    for (let i = 0; i < totalprice.length; i++) {
        if (del == i) {
            sum = sum - Number(totalprice[i])
            let total = sum + deliveryFee
            totalprice.splice(i, 1)
            paymentSlip.innerHTML = `<div>
                                        <div class="ordersummaryt">
                                            <h5>Order Summary</h5>
                                        </div>
                                        <div class="summarytextdiv d-flex justify-content-between">
                                            <span class="summarytext">SubTotal</span>
                                            <span id='summ'>${sum}</span>
                                        </div>
                                        <div class="summarytextdiv d-flex justify-content-between">
                                            <span class="summarytext">Delivery Fee</span>
                                            <span>1000</span>
                                        </div>
                                        <div class="summarytexttotal d-flex justify-content-between">
                                            <span class="summarytext">Total</span>
                                            <span>${total}</span>
                                        </div>
                                        <div class="orderbtn d-flex justify-content-center">
                                            <button onclick="pay()">Pay</button>
                                        </div>
                                     </div>`


        }
    }
    if (sum === 0 || cartList.length === 0) {
        paymentSlip.innerHTML = ''
        for (let i = 0; i < headingcart.length; i++) {
            headingcart[i].innerHTML = ''
            cartmessage.innerHTML = 'Your cart is empty'
        }
    } else {
        cartmessage.innerHTML = ''
    }

}


const productAmount = document.querySelectorAll('.amountproduct')
const inputQ = document.querySelectorAll('#amountOfProduct')
const amount = document.querySelectorAll('#yes')
const summ = document.getElementById('sum')
let totalsum = 0
//Amount Addition, it adds to the existing amount if increased
const addToQuatity = (add) => {
    cartList.map((ti, li) => {
        if (add == li) {
            for (let i = 0; i < inputQ.length; i++) {
                if (add == i) {
                    var inputQuantityInput = inputQ[i].value
                    var inputQuantity = Number(inputQuantityInput) + 1
                    let brandOrginp = Number(ti.brandOriginalPrice)
                    inputQ[i].value = inputQuantity
                    if (inputQ[i].value > 1) {
                        let m = Number(ti.brandPrice) + brandOrginp
                        let z = amount[i].innerHTML = `₦${m}`
                        ti.brandQuantity = inputQuantity
                        ti.brandPrice = m;
                        localStorage.cartOrder = JSON.stringify(cartList)
                        sum = sum + Number(cartList[i].brandOriginalPrice);
                        let total = sum + 1000;
                        paymentSlip.innerHTML = `<div>
                                                    <div class="ordersummaryt">
                                                        <h5>Order Summary</h5>
                                                    </div>
                                                    <div class="summarytextdiv d-flex justify-content-between">
                                                        <span class="summarytext">SubTotal</span>
                                                        <span id='summ'>${sum}</span>
                                                    </div>
                                                    <div class="summarytextdiv d-flex justify-content-between">
                                                        <span class="summarytext">Delivery Fee</span>
                                                        <span>1000</span>
                                                    </div>
                                                    <div class="summarytexttotal d-flex justify-content-between">
                                                        <span class="summarytext">Total</span>
                                                        <span>${total}</span>
                                                    </div>
                                                    <div class="orderbtn d-flex justify-content-center">
                                                        <button onclick="pay()">Pay</button>
                                                    </div>
                                                </div>`
                        payemntCredentails(total)

                    }
                }
            }
        }
    })


}

//reduces the amount
const reduceQuantity = (reduce) => {
    cartList.map((ci, cd) => {
        if (reduce == cd) {
            for (let i = 0; i < inputQ.length; i++) {
                if (reduce == i) {


                    if (inputQ[i].value > 1) {
                        var inputQuantityinput = inputQ[i].value;
                        var inputQuantity = Number(inputQuantityinput) - 1;
                        inputQ[i].value = inputQuantity
                        let brandOrginp = Number(ci.brandOriginalPrice)
                        let brandp = Number(ci.brandPrice)
                        let m = brandp - brandOrginp
                        ci.brandPrice = m
                        localStorage.cartOrder = JSON.stringify(cartList);
                        // console.log(ci.brandOriginalPrice)
                        sum = sum - Number(ci.brandOriginalPrice)
                        console.log(sum)
                        amount[i].innerHTML = `₦${ci.brandPrice}`
                        cartList.map((li, ld) => {
                            console.log(sum)
                            let total = sum + 1000;
                            paymentSlip.innerHTML = `<div>
                                                        <div class="ordersummaryt">
                                                            <h5>Order Summary</h5>
                                                        </div>
                                                        <div class="summarytextdiv d-flex justify-content-between">
                                                            <span class="summarytext">SubTotal</span>
                                                            <span id='summ'>${sum}</span>
                                                        </div>
                                                        <div class="summarytextdiv d-flex justify-content-between">
                                                            <span class="summarytext">Delivery Fee</span>
                                                            <span>1000</span>
                                                        </div>
                                                        <div class="summarytexttotal d-flex justify-content-between">
                                                            <span class="summarytext">Total</span>
                                                            <span>${total}</span>
                                                        </div>
                                                        <div class="orderbtn d-flex justify-content-center">
                                                            <button onclick="pay()">Pay</button>
                                                        </div>
                                                    </div>`
                            payemntCredentails(total)

                        })


                    }
                }
            }
        }
    })
}


const signup = document.querySelector('.signup')
const signupBack = document.querySelector(".signupback")
const pay = () => {



    if (localStorage.userOnline) {
        window.location.href = 'payment.html'
        localStorage.Sum = JSON.stringify(sum)
    } else {
        signup.classList.remove('signUpNone')
        signupBack.classList.remove('signupbackNone')
    }
}

let userOnline = JSON.parse(localStorage.userOnline)
const validateit = () => {
    console.log(userOnline)
}