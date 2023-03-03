
document.addEventListener('DOMContentLoaded',function(){

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


// Save Img

let btnPr = document.querySelector('.btn_product');
let btnArh = document.querySelector('.btn_architecture');
let btnDr = document.querySelector('.btn_drone');
let btnWild = document.querySelector('.btn_wildlife');


btnPr.addEventListener('click',() => {  
    let link = document.createElement('a');
    link.setAttribute('href', '../img/what/IMAGE_1.jpg');   
	link.setAttribute('download', 'product');   
	link.click();
	return false;
})
btnArh.addEventListener('click',() => {  
    let link = document.createElement('a');
    link.setAttribute('href', '../img/what/IMAGE_2.jpg');   
	link.setAttribute('download', 'architecture');   
	link.click();
	return false;
})
btnDr.addEventListener('click',() => {  
    let link = document.createElement('a');
    link.setAttribute('href', '../img/what/IMAGE_3.jpg');   
	link.setAttribute('download', 'drone');   
	link.click();
	return false;
})
btnWild.addEventListener('click',() => {  
    let link = document.createElement('a');
    link.setAttribute('href', '../img/what/IMAGE_4.jpg');   
	link.setAttribute('download', 'wildlifet');   
	link.click();
	return false;
})

})

