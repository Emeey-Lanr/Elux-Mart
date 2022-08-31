const menCollection = JSON.parse(localStorage.MenSection)
const cartorder = JSON.parse(localStorage.cartOrder)
if (cartorder.length < 1) {
    cartnotification.innerHTML = cartorder.length;
    document.getElementById('cartnotification').style.color = '#4bf145'
} else {
    cartnotification.innerHTML = cartorder.length;
    document.getElementById('cartnotification').style.color = 'white'
}
console.log(menCollection)
const goodsSection = () => {
    menCollection.map((ui, ud) => {
        gooosect.innerHTML += ` <div>
                                 <div class="d-flex justify-content-center">
                                     <img src="${ui.brandImgUrl}" alt="" class="w-75">
                                 </div>
                                 <div class="d ">
                                     <span>
                                         <p class="brandd">${ui.brandName}</p>
                                         <p class="branddtitle">(${ui.brandTitle})</p>
                                     </span>
                                     <span>
                                         <p class="brandprice">₦${ui.brandPrice}</p>
                                     </span>
                                 </div>
                                 <hr>
                                 <div class="Qpill">
                                     <div><button><span class="material-icons">favorite_border</span></button></div>
                                     <div class="quantity"><span class="greenpill"></span><span class="otherpill">${ui.brandQuantity} left</span></div>
                                 </div>
                                 <hr>
                                 <button onclick="buy(${ud})">Buy</button>
                             </div>`
    })
}
goodsSection()


const buy = (id) => {
    localStorage.brandChecked = JSON.stringify(menCollection[id])
    location.href = 'preview.html'
    if (cartorder.length < 1) {
        cartnotification.innerHTML = cartorder.length;
        document.getElementById('cartnotification').style.color = '#4bf145'
    } else {
        cartnotification.innerHTML = cartorder.length;
        document.getElementById('cartnotification').style.color = 'white'
    }
}
const cart = () => {
    location.href = 'cart.html'
}