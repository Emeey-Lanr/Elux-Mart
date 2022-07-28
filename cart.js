'use strict'

let cartList = JSON.parse(localStorage.cartOrder)
const productDetails = document.querySelector('.product_details');
const paymentSlip = document.getElementById('orderSummary');
document.querySelector('.cartNotification').innerHTML = cartList.length;
const totalprice = []
let sum = 0
let deliveryFee = 1000
//a fuction that sums the total amount of the price of the product bought
const paymentSlipReceipt = () => {
    for (let i = 0; i < cartList.length; i++) {
        totalprice.push(cartList[i].brandPrice)
        sum += Number(totalprice[i])
        console.log(sum)
        let z = sum + deliveryFee
        paymentSlip.innerHTML = `<div>
                                    <div class="ordersummaryt">
                                        <h5>Order Summary</h5>
                                    </div>
                                    <div class="summarytextdiv d-flex justify-content-between">
                                        <span class="summarytext">SubTotal</span>
                                        <span>${sum}</span>
                                    </div>
                                    <div class="summarytextdiv d-flex justify-content-between">
                                        <span class="summarytext">Delivery Fee</span>
                                        <span>1000</span>
                                    </div>
                                    <div class="summarytexttotal d-flex justify-content-between">
                                        <span class="summarytext">Total</span>
                                        <span>${z}</span>
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
                                       <h6>${ci.brandName}</h6>
                                        <p>${ci.brandTitle}</p>
                                    </div>

                                  </div>

                                 </div>

                                <div class="div">
                                <div>

                                    <div>
                                        <span class="fw-bold">${ci.brandPrice}</span>
                                    </div>
                                </div>
                                 <div class="add_reduce d-flex justify-content-center">
                                     <div>
                                         <button class="fw-bold" onclick="addToQuatity(${cd})">+</button>
                                         <span class="fw-bold" id="amountOfProduct onclick="""></span>
                                         <button class="fw-bold" onclick="reduceQuantity(${cd})">-</button>
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
    let removecart = totalprice.filter((ti, td) => {
        if (del == td) {
            sum = sum - Number(totalprice[td])
            let total = sum + deliveryFee
            totalprice.splice(td, 1)
            paymentSlip.innerHTML = `<div>
                                        <div class="ordersummaryt">
                                            <h5>Order Summary</h5>
                                        </div>
                                        <div class="summarytextdiv d-flex justify-content-between">
                                            <span class="summarytext">SubTotal</span>
                                            <span>${sum}</span>
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
    })

}