let serviceButton = document.getElementById('service-button');
let serviceButtonExit = document.getElementById('service-button-exit');
let serviceForm = document.getElementById('service-form');

let html_ = document.getElementsByTagName('html');
let img_service = document.getElementById('r-img');

console.log(html_)

serviceButton.addEventListener('click', () => {

    serviceForm.style.transform = 'translateY(0%)';
    serviceForm.style.display = 'block';
    html_[0].style.backgroundColor = 'rgba(0, 0, 0, .5)';
    serviceButton.style.filter = 'brightness(.5)';
    img_service.style.filter = 'brightness(.5)';
})

serviceButtonExit.addEventListener('click', () => {

    serviceForm.style.transform = 'translateY(-200%)';
    html_[0].style.backgroundColor = '#fff';
    serviceButton.style.filter = 'none';
    img_service.style.filter = 'none';
})