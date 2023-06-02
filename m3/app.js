import { obj } from './module/data.js';
import showList from './module/showList.js';

const del = document.querySelector('.del');
const show = document.querySelector('.show');
const wrap = document.querySelector('.wrap');


const delList = () => {
    const box = document.querySelectorAll('.box');
    box.forEach(item => { item.remove(); })
}

const heart = () => {
    const box = document.querySelectorAll('.box');
    const i = getAll('.box span i');
    box.forEach((item, idx) => {
        item.addEventListener('click', e => {
            if(i[idx].className == 'xi-heart-o'){
                i[idx].setAttribute('class', 'xi-heart');
            } else {
                i[idx].setAttribute('class', 'xi-heart-o');
            }
        })
    })
}

show.addEventListener('click', e => {
    showList(obj, wrap);
    heart();
})

del.addEventListener('click', e => {
    delList();
})