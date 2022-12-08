let secondSlideshowcontent = document.getElementById('second-slideshow-content');
let secondPaginationButton1 = document.getElementById('s-p-button1');
let secondPaginationButton2 = document.getElementById('s-p-button2');

let secondCount = 1;
let secondResetSlideshow = false

// secondSlideshowcontent.style.marginLeft = '-100%';

secondPaginationButton1.addEventListener('click', () => {

    secondCount = 1;
    secondResetSlideshow = true;
    secondSlideshow(secondCount)
})
secondPaginationButton2.addEventListener('click', () => {

    secondCount = 2;
    secondResetSlideshow = true;

    secondSlideshow(secondCount);
})

function secondSlideshow(position) {
    
    if (position == 1) {
        secondSlideshowcontent.style.marginLeft = '0%'
        secondPaginationButton1.style.color = '#111'
        secondPaginationButton2.style.color = '#aaa'
    }
    if (position == 2) {
        secondSlideshowcontent.style.marginLeft = '-100%'
        secondPaginationButton2.style.color = '#111'
        secondPaginationButton1.style.color = '#aaa'
    }
}

setInterval(() => {
    
    if (secondResetSlideshow == true) {
        secondResetSlideshow = false;
    } else {
        
        secondCount += 1;

        if (secondCount == 3) {
            secondCount = 1;
        }
        secondSlideshow(secondCount)
    }

}, 7000);