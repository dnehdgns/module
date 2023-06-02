import { obj } from './module/data.js';
import get from './module/getEle.js';
import getAll from './module/getEleAll.js';
import showList from './module/showList.js';

const del = get('.del');
const show = get('.show');
const wrap = get('.wrap');


const delList = () => {
    const box = getAll('.box');
    box.forEach(item => { item.remove(); })
}

const heart = () => {
    const box = getAll('.box');
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