let slider_content = document.getElementById('slider-content');
let paginationButtons = document.getElementById('pagination-buttons')
let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');

let count = 1;
let reset = false;

leftArrow.addEventListener('click', () => {

    reset = true;
    count -= 1;
    if (count == 0) {
        count = 3;
    }
    slideShow(count);
})
rightArrow.addEventListener('click', () => {

    reset = true;
    count += 1;

    if (count == 4) {
        count = 1
    }
    slideShow(count)
})

for (let i = 0; i < paginationButtons.children.length; i++) {
    
    paginationButtons.children[i].addEventListener('click', (e) => {

        if (e.target.id == 'p-btn-1') {
            reset = true;
            slideShow(1)
        }
        if (e.target.id == 'p-btn-2') {
            reset = true;
            slideShow(2)
        }
        if (e.target.id == 'p-btn-3') {
            reset = true;
            slideShow(3)
        }
    });
}

function changeBtnColor() {

    console.log('changeBtnColor ok')
    
    for (let i = 0; i < paginationButtons.children.length; i++) {
        
        paginationButtons.children[i].style.color = '#333';
    }
}

function slideShow(slide) {
    
    if (slide == 1) {

        slider_content.style.marginLeft = '0%';
        changeBtnColor()
        paginationButtons.children[0].style.color = '#fff';
    }
    if (slide == 2) {

        slider_content.style.marginLeft = '-100%';
        changeBtnColor()
        paginationButtons.children[1].style.color = '#fff';
    }
    if (slide == 3) {

        slider_content.style.marginLeft = '-200%';
        changeBtnColor()
        paginationButtons.children[2].style.color = '#fff';
    }
}

setInterval(() => {
    
    if (reset == true) {
        
        console.log('pushed')
        reset = false;
    }else {
        
        console.log('not pushed')
        count += 1;
        if (count == 4) {
            count = 1;
        }
        slideShow(count);
    }
}, 10000);