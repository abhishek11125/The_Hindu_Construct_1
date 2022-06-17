// document.querySelector('#start').addEventListener('click',function(){
//     document.querySelector('#close').style.display='none';
//     document.querySelector('#menu').style.display='block';
//     document.querySelector('body').style.backgroundColor='white';
// });
// document.querySelector('#menu').addEventListener('click',function(){
//     document.querySelector('#menu').style.display='none';
//     document.querySelector('#close').style.display='block';
//     document.querySelector('body').style.backgroundColor='#2a5e88';
// });
window.addEventListener('load',function(){
    document.querySelector('#menuDiv').style.display='none';
});
document.querySelector('#menu').addEventListener('click',function(){
    document.querySelector('#menuDiv').style.display='block';
    document.querySelector('#menuDiv').style.backgroundColor='#2a5e88';
    document.querySelector('home').style.display='none';
    // document.querySelector('body').style.backgroundColor='#2a5e88';
    // document.querySelector('*').style.backgroundColor='#2a5e88';
    // window.document.querySelectorAll('body').stylebackgroundColor='#2a5e88';
});
document.querySelector('#start').addEventListener('click',function(){
    document.querySelector('#menuDiv').style.display='none';
    document.querySelector('home').style.display='block';
    document.querySelector('body').style.backgroundColor='#f5f5f5';
});