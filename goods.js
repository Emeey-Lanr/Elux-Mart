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