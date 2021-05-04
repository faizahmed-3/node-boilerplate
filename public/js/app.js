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
const priceInputs = document.querySelectorAll('.itemPrice');
const subtotalInputs = document.querySelectorAll('.subtotal');
const total = document.querySelector('.total');
let sum =0;

if (qtyInputs.length>0){
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











