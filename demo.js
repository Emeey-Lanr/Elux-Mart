
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

const buy = (brand_Name, brand_Title, brand_ImgUrl, brand_Price, brand_orginal_price) => {
    const brand = {
        brandName: brand_Name,
        brandTitle: brand_Title,
        brandImgUrl: brand_ImgUrl,
        brandPrice: brand_Price,
        brandQuantity: '',
        brandOriginalPrice: brand_orginal_price,
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


let searchboxx = document.querySelector("#searchInput");
const search = document.querySelector(".search")
//To hide the page
document.querySelector('.backsearch').addEventListener('click', (e) => {
    document.querySelector('.backsearch').classList.add('backNone')
    search.classList.add('searchNone')
})
//To reveal the search page
document.querySelector('.search-btn').addEventListener('click', () => {
    search.classList.remove('searchNone')
    document.querySelector('.backsearch').classList.remove('backNone')
})

let searchData = {
    brand: ['Versace', 'Gucci', 'Balenciaga', 'Luis', 'Vuittion', 'Yeezy', 'Nike'],
    product: ['Trea young 1', 'La greca Tote Bag', 'Air Jordan 1', 'Forum Exhibit', 'Royal Rebellion Jeans']

}

const showDetails = () => {
    searchData.brand.map((bi, bd) => {
        if (searchboxx.value == bi) {
            alert('yes')
        }
    })
}


let m = 0
const changeicon = () => {
    document.getElementById("like").innerText = 'favorite'
    document.getElementById("like").style.color = '#4bf145'
    m++
    if (m == 2) {
        document.getElementById("like").innerText = 'favorite_border'

    }
    if (m == 3) {
        m = 1
    }

}
let m2 = 0
const likeiconbtn2 = () => {

    document.getElementById("like2").innerText = 'favorite'
    document.getElementById("like2").style.color = '#4bf145'
    m2++
    if (m2 == 2) {
        document.getElementById("like2").innerText = 'favorite_border'

    }
    if (m2 == 3) {
        m2 = 1


    }

    console.log(m2)
}

let m3 = 0
const likeiconbtn3 = () => {

    document.getElementById("like3").innerText = 'favorite'
    document.getElementById("like3").style.color = '#4bf145'
    m3++
    if (m3 == 2) {
        document.getElementById("like3").innerText = 'favorite_border'

    }
    if (m3 == 3) {
        m3 = 1
    }

}
let x1 = 0

const likeiconx = () => {
    document.getElementById("likex").innerText = 'favorite'
    document.getElementById("likex").style.color = '#4bf145'
    x1++
    if (x1 == 2) {
        document.getElementById("likex").innerText = 'favorite_border'

    }
    if (x1 == 3) {
        x1 = 1
    }

}
let x2 = 0
const likeiconxx = () => {
    document.getElementById("likexx").innerText = 'favorite'
    document.getElementById("likexx").style.color = '#4bf145'
    x2++
    if (x2 == 2) {
        document.getElementById("likexx").innerText = 'favorite_border'

    }
    if (x2 == 3) {
        x2 = 1
    }

}
let x3 = 0
const likeiconxxx = () => {
    document.getElementById("likexxx").innerText = 'favorite'
    document.getElementById("likexxx").style.color = '#4bf145'
    x3++
    if (x3 == 2) {
        document.getElementById("likexxx").innerText = 'favorite_border'

    }
    if (x3 == 3) {
        x3 = 1
    }

}