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
    
    
        // alert

        function closeAlertBox(){
            alertBox = document.getElementById("alertBox");
            alertClose = document.getElementById("alertClose");
            alertBox.style.visibility = "hidden";
            alertClose.style.visibility = "hidden";
        }
        window.alert = function(msg){
            let id = "alertBox", alertBox, closeId = "alertClose", alertClose;
            alertBox = document.createElement("div");
            document.body.appendChild(alertBox);
            alertBox.id = id;
            alertBox.innerHTML = msg;
            alertClose = document.createElement("div");
            alertClose.id = closeId;
            alertClose.innerHTML = "x";
            alertBox.appendChild(alertClose);
            alertBox.style.visibility = "visible";
            alertClose.style.visibility = "visible";
            alertClose.onclick = closeAlertBox;
        };
	
});
               
    // Отправка данных на сервер
    
    function send(event, php){
        console.log("Отправка запроса");
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        let req = new XMLHttpRequest();
        req.open('POST', php, true);
        req.onload = function() {
            if (req.status >= 200 && req.status < 400) {
            json = JSON.parse(this.response); 
                console.log(json);
                
                if (json.result == "success") {
                    // Если сообщение отправлено
                    alert("Сообщение отправлено");
                } else {
                    // Если произошла ошибка
                    alert("Ошибка. Сообщение не отправлено");
                }
            // Если не удалось связаться с php файлом
            } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
        
        // Если не удалось отправить запрос. Стоит блок на хостинге
        req.onerror = function() {alert("Ошибка отправки запроса");};
        req.send(new FormData(event.target));
        }
