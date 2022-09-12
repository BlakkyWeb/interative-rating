const button = document.querySelector('[data-button]');
const box = document.querySelector('.box');
const wrap = document.querySelector('.wrap');
const rating = document.querySelectorAll('[data-rate]');
const insert = document.querySelector('.insert');

button.addEventListener('click', ()=> {
    box.classList.add('hide');
    wrap.classList.add('show');
})

rating.forEach(options => {
    options.addEventListener('click', ()=>{
        insert.innerText = options.innerText;
        document.querySelector('.rate .active').classList.remove('active');
        options.classList.add('active');
    })
})