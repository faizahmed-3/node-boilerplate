// Pre Loader
window.addEventListener("load", () => {
    let loader = document.querySelector(".loader")
    loader.classList.add("loader-finish");
});


// Back to top button
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})


//load same scroll position
window.addEventListener('scroll', function() {
    localStorage.setItem('scrollPosition', window.scrollY);
}, false);
window.addEventListener('load', function() {
    if(localStorage.getItem('scrollPosition') !== null)
        window.scrollTo(0, localStorage.getItem('scrollPosition'));
}, false);


// Copyright year
let year = new Date().getFullYear();
document.querySelector('#copyright').innerHTML = year;


//open modal externally
window.addEventListener('load', () => {
    let url = window.location.href;

    if (url.includes('#_')){
        let modalToOpen = url.substring(url.indexOf("#"));
        if (document.querySelector(modalToOpen)){
            if(window.location.href.indexOf(modalToOpen) !== -1) {
                let myModal = new bootstrap.Modal(document.querySelector(modalToOpen), {})
                myModal.show()
            }
        }
    }


})


// Product view image
let smallImages = document.querySelectorAll('.prod-small-img');
if (smallImages.length>0){
    smallImages.forEach(smallImage => {
        smallImage.addEventListener('click', (evt) => {
            evt.path[4].children[0].children[0].src = smallImage.src;
        })
    })
}


//Add number in checkout page
const addNum = document.querySelector('#add-num');
if (addNum){
    addNum.addEventListener('click', () => {
        let anotherNumber = document.querySelector('.anotherNumber');
        anotherNumber.innerHTML += `
       <input type="number" class="form-control mb-2" id="phone" aria-describedby="phone number" placeholder="Add another number (optional)">
    `;
    })
}


//calculate price on cart
const qtyInputs = document.querySelectorAll('.qty');
if (qtyInputs.length>0){
    const priceInputs = document.querySelectorAll('.itemPrice');
    const subtotalInputs = document.querySelectorAll('.subtotal');
    const total = document.querySelector('.total');
    let sum =0;

    for (let i=0; i<qtyInputs.length; i++){
        qtyInputs[i].addEventListener('change', evt => {
            subtotalInputs[i].innerHTML = `${evt.target.value * parseInt(priceInputs[i].innerHTML)}`
            sum=0;

            subtotalInputs.forEach(sub => {
                sum += parseInt(sub.innerHTML);
            })
            total.innerHTML = sum;
        })
    }

    subtotalInputs.forEach(sub => {
        sum += parseInt(sub.innerHTML);
    })
    total.innerHTML = sum;
}


//calculate price on product view
const qtyInputsPV = document.querySelectorAll('.qtyPV');
if (qtyInputsPV.length>0){
    qtyInputsPV.forEach(qtyInput => {
        qtyInput.addEventListener('change', evt => {
            let price = evt.path[2].children[0].children[1]
            let subtotal = evt.path[1].children[1].children[1];

            subtotal.innerHTML = `${evt.target.value * parseInt(price.innerHTML)}`
        })
    })
}


//wishlist and cart buttons
const wishlistBtns = document.querySelectorAll('.wishlistBtn');
if (wishlistBtns.length>0){
    for (let i =0; i<wishlistBtns.length; i++){
        console.log(wishlistBtns[i]);
    }
}












