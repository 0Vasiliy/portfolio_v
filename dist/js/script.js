    document.addEventListener('DOMContentLoaded',function(){

    //Hamburger

    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    //progress

    const counters = document.querySelectorAll('.skills__ratings-counter'),
        lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });

    //menu scroll

    let menPro = document.querySelectorAll('.menu_promo');
    let linkList = document.getElementById('menu__list_id');

    window.onload=function(){    
        linkList.addEventListener("click", close);
        linkList.addEventListener("click", scroll);
    }

    function close(){
        menu.classList.remove('active');
    }

    function scroll(event){
        for(let i = 0; i < menPro.length; i++) {  
            const blockID = event.target.getAttribute('href')
            event.preventDefault(); 
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block : "start"
            })           
                };    
    }

    close();
    scroll();


    // Up button
    let upp = document.querySelector('.pageup');

    window.onscroll = function(){
    if(window.pageYOffset > 580){
        upp.style.display = "block"
    }
    else{
        upp.style.display ="none"
    }
    }

    upp.addEventListener('click',function(){
    window.scrollBy({
        top:-document.documentElement.scrollHeight,
        behavior: "smooth"
    })
    })
    
	
});