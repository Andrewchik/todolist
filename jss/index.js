let btn = document.querySelector('#scrollDown')
let aboutMe = document.querySelector('#about')


btn.addEventListener('click', () => {
    scrollTo(about)
   
})


function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
    }
    

    /////////////////////////////////////////// Burger Menu  !////////////////////////////////////////////////////////////////////////
    const sidebarBox = document.querySelector('#box'),
    sidebarBtn = document.querySelector('#btn'),
    pageWrapper = document.querySelector('.content');
    
    sidebarBtn.addEventListener('click', event => {
    sidebarBtn.classList.toggle('active');
    sidebarBox.classList.toggle('active');
    });
    
    pageWrapper.addEventListener('click', event => {
    
    if (sidebarBox.classList.contains('active')) {
            sidebarBtn.classList.remove('active');
            sidebarBox.classList.remove('active');
    }
    });
    
    window.addEventListener('keydown', event => {
    
    if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
            sidebarBtn.classList.remove('active');
            sidebarBox.classList.remove('active');
    }
    });

    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////