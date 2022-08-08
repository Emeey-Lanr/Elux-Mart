let description = /^[\w]{1,20}$/
let AllProduct = [];

const addMoreProduct = () => {
    if (localStorage.AllProduct) {
        AllProduct = JSON.parse(localStorage.AllProduct)
    }
}
//add product button
const addbtn = document.querySelector('#addbtn');

//create product button
const createbtn = document.querySelector('#create')

//the box for meant for button creation
const addProductBox = document.querySelector(".add")
//the product added 
const product = document.querySelector('.productShow')

//Upload img input

const uploadImg = document.getElementById('upload');
var imgSrc = '';

//it shows the add button
// addbtn.classList.remove('aNone')
createbtn.classList.remove('cNone')
//it hides the poduct and the button and reveal the product creation box
// const addNewProduct = () => {
//     addProductBox.classList.remove('addnone')
//     addbtn.classList.add('aNone')
//     createbtn.classList.remove('cNone')
// }

// addbtn.addEventListener('click', () => {
//     addNewProduct()
// })

//it helps us to show our img
uploadImg.addEventListener('change', function () {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
        imgSrc = reader.result
        document.querySelector('.imgg').innerHTML = `<img src="${imgSrc}">`
    })
    reader.readAsDataURL(this.files[0])
})

//Makes the input box empty
const emptyInput = () => {
    brand.value = ''
    bname.value = ''
    amountt.value = ''
    descrip.value = ''
    quantity.value = ''
    upload.value = ''
    document.querySelector('.imgg').innerHTML = ''
}
//remove the product creation box and display the product;
const removeaddbox_showproduct = () => {
    // addProductBox.classList.add('addnone');
    // createbtn.classList.add('cNone')
    // addbtn.classList.remove('aNone')
    emptyInput()
}
//it removes the product creation box
const removeaddbox = () => {
    removeaddbox_showproduct()
    window.location.href = 'goods.html'

}

//A function created to be invoked in the createbtn
const createProduct = () => {

    const productDetails = {
        brandName: brand.value,
        brandTitle: bname.value,
        brandOriginalPrice: amountt.value,
        brandPrice: amountt.value,
        brandDescription: descrip.value,
        brandQuantity: quantity.value,
        brandImgUrl: `${imgSrc}`,
    }
    if (brand.value !== '' && bname.value !== '' && amountt.value !== '' && descrip.value !== '' && quantity.value !== '') {
        removeaddbox()
        AllProduct.push(productDetails)
        localStorage.AllProduct = JSON.stringify(AllProduct);
        console.log(productDetails)
    } else {
        alert('no way')
    }
}



createbtn.addEventListener('click', () => {
    console.log(AllProduct)
    if (description.test(descrip.value)) {
        createProduct()
        window.location.href = 'goods.html'
    }
})



