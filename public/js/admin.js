// Back to top button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})


// Pre Loader
window.addEventListener("load", () => {
    let loader = document.querySelector(".loader")
    loader.classList.add("loader-finish");
});


// Copyright year
let year = new Date().getFullYear();
document.querySelector('#copyright').innerHTML = year;

//modals
let myModal = document.getElementById('myModal')
let myInput = document.getElementById('myInput')

if (myModal){
    myModal.addEventListener('shown.bs.modal', function () {
        myInput.focus()
    })
}



// sidebar toggle
const toggleButton = document.querySelector('#sidebarToggle');
toggleButton.addEventListener('click', (e) => {
    let admin = document.querySelector('#admin');
    e.preventDefault();
    admin.classList.toggle('toggled');
})


// description input and what's in the box
if (document.querySelectorAll('.descriptionBtn').length>0) {
    const descriptionBtns = document.querySelectorAll('.descriptionBtn');
    window.addEventListener("load", () => {
        descriptionFrame.document.head.innerHTML += `<link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">`;
        descriptionFrame.document.body.style.fontFamily = 'Montserrat';
        descriptionFrame.document.designMode = 'On'

        inBoxFrame.document.head.innerHTML += `<link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">`;
        inBoxFrame.document.body.style.fontFamily = 'Montserrat';
        inBoxFrame.document.designMode = 'On'
    });

    descriptionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let cmd = btn.dataset['command'];
            console.log(cmd);
            descriptionFrame.document.execCommand(cmd, false, null)
            descriptionInput.value = descriptionFrame.document.body.innerHTML;
        })
    })

    const descriptionInput = document.querySelector('#description')
    descriptionFrame.document.addEventListener('keyup', () => {
        descriptionInput.value = descriptionFrame.document.body.innerHTML;
    })

    descriptionFrame.document.addEventListener('paste', (event) => {
        event.preventDefault()
        let paste = (event.clipboardData || window.clipboardData).getData('text');
        descriptionFrame.document.body.innerHTML += paste;
    })

    const descriptionCopy = document.querySelector('.descriptionCopy');
    if (descriptionCopy.innerHTML !== 'null' ){
        descriptionFrame.document.body.innerHTML = descriptionCopy.innerHTML;
    }


    const inBoxBtns = document.querySelectorAll('.inBoxBtn');
    inBoxBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let cmd = btn.dataset['command'];
            console.log(cmd);
            inBoxFrame.document.execCommand(cmd, false, null)
            inBoxInput.value = inBoxFrame.document.body.innerHTML;
        })
    })

    const inBoxInput = document.querySelector('#inBox')
    inBoxFrame.document.addEventListener('keyup', () => {
        inBoxInput.value = inBoxFrame.document.body.innerHTML;
    })

    inBoxFrame.document.addEventListener('paste', (event) => {
        event.preventDefault()
        let paste = (event.clipboardData || window.clipboardData).getData('text');
        inBoxFrame.document.body.innerHTML += paste;
    })

    const inBoxCopy = document.querySelector('.inBoxCopy');
    if (inBoxCopy.innerHTML !== 'null'){
        inBoxFrame.document.body.innerHTML = inBoxCopy.innerHTML;
    }
}


//Add image
const imgRow = document.querySelector('.imgRow');
if (imgRow) {
    let i=2;

    imgRow.addEventListener('click', evt => {
        const target = evt.target;
        if (target.matches('.addImage')) {
            if (i<=10){
                let card = document.createElement('div');
                card.classList.add('col-2', 'card', 'imageCard');
                card.innerHTML = `
                <img src="..." class="imgCol">
                <div class="card-body ">
                    <div class="d-flex justify-content-end">
                        <label for="image${i}"><i class="far fa-edit"></i></label>
                        <input type="file" id="image${i}" name="image${i}" accept="image/*" hidden>
                        <i class="far fa-trash-alt mx-2"></i>
                        <i class="fas fa-plus addImage"></i>
                    </div>
                </div>
                `
                i++;
                let row = document.querySelector('.imgRow');
                row.append(card);
            }
        }

        if (target.matches('.fa-edit')) {
            let input = evt.path[2].children[1];
            input.addEventListener('change', event => {
                let output = evt.path[4].children[0];
                output.src = URL.createObjectURL(event.target.files[0]);
                output.onload = function () {
                    URL.revokeObjectURL(output.src) // free memory
                }
            })
        }

        if (target.matches('.fa-trash-alt')) {
            evt.path[3].remove()
            i--;
        }

    })
}


//edit image
const editImgRow = document.querySelector('.editImgRow');
if (editImgRow) {
    const imagesLength = document.querySelector('.imagesLength')
    let i= parseInt(imagesLength.value);
    (i === 0) ? i = 2 : i += 1;

    editImgRow.addEventListener('click', evt => {
        const target = evt.target;
        if (target.matches('.addImage')) {
            if (i<= 10){
                let card = document.createElement('div');
                card.classList.add('col-2', 'card', 'imageCard');
                card.innerHTML = `
                <img src="..." class="imgCol">
                <div class="card-body ">
                    <div class="d-flex justify-content-end">
                        <label for="image${i}"><i class="far fa-edit"></i></label>
                        <input type="file" id="image${i}" name="image${i}" accept="image/*" hidden>
                        <i class="far fa-trash-alt mx-2"></i>
                        <i class="fas fa-plus addImage"></i>
                    </div>
                </div>
                `
                i++;
                let row = document.querySelector('.editImgRow');
                row.append(card);
            }

        }

        if (target.matches('.fa-edit')) {
            let input = evt.path[2].children[1];
            input.addEventListener('change', event => {
                let output = evt.path[4].children[0];
                output.src = URL.createObjectURL(event.target.files[0]);
                output.onload = function () {
                    URL.revokeObjectURL(output.src) // free memory
                }
            })
        }

        if (target.matches('.fa-trash-alt')) {
            evt.path[3].remove()
            i--;
        }

    })
}


//visibility switch
const checkbox = document.querySelector('.visibilitySwitch')
if (checkbox) {
    checkbox.value = checkbox.checked;

    checkbox.addEventListener('change', () => {
        checkbox.value = checkbox.checked;
    })
}


//sub-brand
const subBrand = document.querySelector('#subBrand');
if (subBrand) {
    const addSubBtn = document.querySelector('.subBrandBtn');
    let subBrandsList = document.querySelector('.subBrandsList');
    let subBrandDeleteBtns = document.querySelectorAll('.subBrandDelete');

    subBrand.addEventListener('change', evt => {
        addSubBtn.disabled = !evt.target[1].selected;
        subBrandsList.innerHTML = ``
    });


    addSubBtn.addEventListener('click', evt => {
        const li = document.createElement('li');
        li.classList.add('d-flex', 'justify-content-evenly');
        li.innerHTML = `
            <input type="text" class="form-control mb-2 subBrandItem" name="subBrandItems">
            <i class="fas fa-trash-alt subBrandDelete"></i>
        `
        subBrandsList.append(li);

        subBrandDeleteBtns = document.querySelectorAll('.subBrandDelete');
        subBrandDeleteBtns.forEach(subBrandDelete => {
            subBrandDelete.addEventListener('click', evt => {
                evt.path[1].remove()
            })
        })
    })

    subBrandDeleteBtns.forEach(subBrandDelete => {
        subBrandDelete.addEventListener('click', evt => {
            evt.path[1].remove()
        })
    })


}







