const dashboardicon = document.querySelector('.icon')
dashboardicon.classList.remove("iconbottomnone")
let AllProduct = JSON.parse(localStorage.AllProduct);
const productInStock = () => {
    AllProduct.map((items, index) => {
        productt.innerHTML += `<div class="productPreviewHouse">
                                <div class="productPreview">
                                    <div class="productImg">
                                        <img src="${items.brandImgUrl}">

                                    </div>
                                    <div>
                                        <div class="productDetails">
                                            <p class="brandP">${items.brandName}</p>
                                            <P class="brandPName">${items.brandTitle}</P>
                                            <p>#${items.brandPrice}</p>
                                            <p class="brandQuantity">${items.brandQuantity} items in stock</p>
                                            <P class="brandDescription">${items.brandDescription}</P>
                                        </div>

                                        <div class="btnSection">
                                          <button onclick="edit(${index})" class="edit_delbtn"><span class="material-icons">edit</span></button>
                                          <button onclick="del(${index})" class="edit_delbtn"><span class="material-icons">delete</span></button>
                                          <button onclick="push(${index})" class="push">Push</button>
                                        </div>
                                    </div>

                                </div>


                            </div>`

    })

}
productInStock()

const modaldelete = document.querySelector('.modaldelete')
const del = (i) => {
    modaldelete.classList.remove('modaldeletenone')
    modaldel.innerHTML = `<div class="confirmation">
                          <p>Are Sure you want to delete?</p>
                          <div class="d-flex justify-content-evenly">
                              <button onclick="deleteit(${i})" class="bt1">Delete</button>
                              <button onclick="cancel(${i})" class="bt2">Cancel</button>
                          </div>
                          <div class="w-100 down"></div>
                      </div>`
}
const cancel = () => {
    modaldelete.classList.add('modaldeletenone')
}
const deleteit = (i) => {
    modaldelete.classList.add('modaldeletenone')
    let remove = AllProduct.filter((items, index) => i != index);
    AllProduct = remove;
    productt.innerHTML = ''
    productInStock()
    localStorage.AllProduct = JSON.stringify(AllProduct)

}
const addbtn = () => {
    window.location.href = 'adminDashbord.html'
}


const addedit = document.querySelector('.add');
var imgurl = ''

const edit = (goodsid) => {
    dashboardicon.classList.add('iconbottomnone')
    addedit.classList.remove('addnone')
    productedit.innerHTML = ` <div class="product">
                                 <div>
                                     <label for="">Brand</label>
                                     <input type="text" id="brand" class="ps-1" value="${AllProduct[goodsid].brandName}">
                                     <label for="">Brand Name</label>
                                     <input type="text" id="bname" class="ps-1" value="${AllProduct[goodsid].brandTitle}">
                                     <label for="">Quantity</label>
                                     <input type="number" id="quantity" class="ps-1" value="${AllProduct[goodsid].brandQuantity}">
                                     <label for="" id="">Amount</label>
                                     <input type="text" id="amountt" class="ps-1"value="${AllProduct[goodsid].brandPrice}">
                                     <p>Product Description</p>
                                     <textarea  id="descrip" class="ps-1" ></textarea>
                                     <p>Not more than 20 words</p>
                                     <div class="btnsave">
                                         <button onclick="saveedit(${goodsid})">Save</button>
                                     </div>
                                 </div>
                                 <div>
                                     <div class="d-flex justify-content-end exitbtn">
                                         <button onclick="removeaddbox()">&times;</button>
                                     </div>
                                     <div class="d-flex justify-content-center align-items-end">
                                         <div class="imguploaded">
                                             <div class="imgg">
                                                 <img src="${AllProduct[goodsid].brandImgUrl}" id="iMage">
                                             </div>
                                             <p></p>
                                             <input type="file" id="upload" class="uploadimg">

                                         </div>

                                     </div>
                                 </div>

                             </div>`
    descrip.value = `${AllProduct[goodsid].brandDescription}`
    let uploadImg = document.querySelector('.uploadimg');
    uploadImg.addEventListener('change', function () {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            imgurl = reader.result
            iMage.src = `${imgurl}`
        })
        reader.readAsDataURL(this.files[0])
    })

}

const removeaddbox = () => {
    addedit.classList.add('addnone')
    dashboardicon.classList.remove("iconbottomnone")
}
const saveedit = (editid) => {
    let editedInfo = {
        brandName: brand.value,
        brandTitle: bname.value,
        brandOriginalPrice: amountt.value,
        brandPrice: amountt.value,
        brandDescription: descrip.value,
        brandQuantity: quantity.value,
        brandImgUrl: `${imgurl}`,
    }

    let yes = AllProduct[editid] = editedInfo

    localStorage.AllProduct = JSON.stringify(AllProduct)
    addedit.classList.add('addnone')
    productt.innerHTML = ''
    productInStock()
    dashboardicon.classList.remove("iconbottomnone")

}

///The buttons that pushs the goods to each section
const sextion = document.querySelector('.sectionbtnPage')
const push = (id) => {
    sextion.classList.remove('sectbtnpnone')
    sectbtnp.innerHTML = `<div>
                            <button onclick="men(${id})">Men</button><button onclick="men(${id})">Women</button><button onclick="brand(${id})">Brand</button>
                         </div>`
}

sextion.addEventListener('click', () => {
    sextion.classList.add('sectbtnpnone')
})
let MenSection = []
const mensect = () => {
    if (localStorage.MenSection) {
        MenSection = JSON.parse(localStorage.MenSection)
    }
}
const men = (id) => {
    MenSection.push(AllProduct[id])
    localStorage.MenSection = JSON.stringify(MenSection)
    sextion.classList.add('sectbtnpnone')

}




