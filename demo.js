
window.onscroll = function () {
    scrollFuntion()
}


function scrollFuntion() {
    if (document.body.scollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector('nav').style.backgroundColor = 'white'
    } else {
        document.querySelector('nav').style.backgroundColor = 'white'
    }
}

const buy = (brand_Name, brand_Title, brand_ImgUrl, brand_Price) => {
    const brand = {
        brandName: brand_Name,
        brandTitle: brand_Title,
        brandImgUrl: brand_ImgUrl,
        brandPrice: brand_Price
    }
    localStorage.brandChecked = JSON.stringify(brand)
    location.href = 'preview.html'


}

const cartList = () => {
    const cartlistLength = JSON.parse(localStorage.cartOrder)
    document.querySelector('.cartNotification').innerHTML = cartlistLength.length
}
cartList()

const cart = () => {
    location.href = 'cart.html'
}


