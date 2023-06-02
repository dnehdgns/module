import { obj } from './module/data.js';

const del = document.querySelector('.del');
const show = document.querySelector('.show');
const wrap = document.querySelector('.wrap');


const showList = () => {
    const newObj = obj.map(item => {
       const {name,job,tel,img} = item;
       return `        <div class="box">
       <img src="./images/${img}.jpg" alt="">
       <ul>
           <li>이름 : ${name}</li>
           <li>직업 : ${job}</li>
           <li>전화번호 : ${tel}</li>
       </ul>
       <span><i class="xi-heart-o"></i></span>
   </div>`
    }).join('')
    wrap.innerHTML = newObj
}


const delList = () => {
    const box = document.querySelectorAll('.box');
    box.forEach(item => { item.remove(); })
}

const heart = () => {
    const box = document.querySelectorAll('.box');
    const i = document.querySelectorAll('.box span i');
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