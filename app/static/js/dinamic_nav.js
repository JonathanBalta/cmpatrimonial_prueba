let nav_menu = document.getElementById('nav-menu');
let right_links = document.getElementById('right-links')
let body = document.getElementById('body');
let bars_btn = document.getElementById('bars-btn');

function linksColor(color) {
    
    right_links.children[0].style.color = color;
    right_links.children[1].style.color = color;
    right_links.children[2].style.color = color;
    right_links.children[3].style.color = color;
}

if (body.offsetWidth > 992) {
    
    window.onscroll = () => {

        if (document.documentElement.scrollTop > 50) {
            
            nav_menu.style.height = '65px';
            nav_menu.style.backgroundColor = '#fff';
            linksColor('#000');
            nav_menu.style.boxShadow = '0px 1px 15px rgba(0, 0, 0, .2)';
        }else {
    
            nav_menu.style.height = '150px';
            nav_menu.style.backgroundColor = '';
            linksColor('#fff');
            nav_menu.style.boxShadow = 'none';
        }
    }
}else {

    nav_menu.style.boxShadow = '0px 1px 15px rgba(0, 0, 0, .2)';
    right_links.style.boxShadow = '0px 1px 15px rgba(0, 0, 0, .2)';

    for (let i = 0; i < right_links.children.length; i++) {
        
        right_links.children[i].addEventListener('click', () => {
            
            right_links.classList.toggle('show')
        })
    }
}

bars_btn.addEventListener('click', () => {

    right_links.classList.toggle('show')
})