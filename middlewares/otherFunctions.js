function displayDate(date) {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    return `${day}/${month+1}/${year}`
}

function getInput(input, key) {
    if (input){
        if (input[key]) {
            return input[key];
        } else return ''
    } else return ''
}

function getError(error, key) {
    if (error) {
        if (error.path[0] === key) {
            return error.message;
        } else return ''
    } else return ''
}

function printProductModal(product) {
    return `
        <div class="modal fade product-view" id="_${product._id}" tabindex="-1" aria-labelledby="Product view" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="product-title">${product.product_name}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body pt-0">
                <div class="container-fluid">
                    <div class="row ">
                        <div class="col-md-7 col-lg-8">
                            <img src="/img/products/${printMainImage(product)}" alt="" id="prod-main-img">
                        </div>
                        <div class="col-md-5 col-lg-4 d-flex flex-column justify-content-between">
                            <div class="row small-img-row">
                                ${printProductViewSmallImages(product)}
                            </div>
                            <div>
                                <div id="prod-price"><span>ksh.</span> ${product.price}</div>
                                <div class="mt-2 mt-md-1 mt-lg-2 count">
                                    <input type="number" placeholder="Quantity" class="form-control">
                                    <div class="count-sub"><span>Subtotal (ksh.):</span> 3250</div>
                                </div>
                                <div class="mt-2 mt-md-1 mt-lg-2  d-flex justify-content-evenly">
                                    <button class="btn btn-outline-success prod-start"> Wishlist <i
                                            class="bi bi-heart"></i></button>
                                    <button class="btn btn-outline-success prod-start"> Cart <i
                                            class="bi bi-cart3"></i></button>
                                </div>
                                <div class="mt-2 mt-md-1 mt-lg-2  d-flex justify-content-center">
                                    <button class="btn btn-success checkout" onclick="location.href='checkout.html'">
                                        Checkout
                                    </button>
                                </div>
                            </div>

                            <div id="share" class="text-center">
                                <i class="bi bi-share-fill px-2"></i>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=http://192.168.1.104:3000/#_${product._id}" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href="whatsapp://send?text=http://192.168.1.104:3000/#_${product._id}"><i class="fab fa-whatsapp"></i></a>
                                <p class="mb-0 mt-1 scroll d-none d-lg-block">Scroll down for more details</p>
                            </div>

                        </div>
                        <div>
                            <div class="description mt-3"> Description</div>
                            ${product.description}
                            <div class="description">What's in the box</div>
                            ${product.inBox}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}

function printMainImage(product) {
    let mainImage;
    product.product_images.forEach(productImage => {
        if (productImage.filename.includes('image1')){
            mainImage = productImage.filename
        }
    })
    return mainImage;
}

function printProductViewSmallImages(product) {
    return product.product_images.map(productImage => {
        return `
                <div class="col-2 small-img-col">
                    <img src="/img/products/${productImage.filename}" alt="" class="prod-small-img">
                </div>
            `
    }).join('');
}




exports.displayDate = displayDate;
exports.getInput = getInput;
exports.getError = getError;
exports.printProductModal = printProductModal;
exports.printMainImage = printMainImage;

