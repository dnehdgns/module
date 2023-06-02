const del = document.querySelector('.del');
const show = document.querySelector('.show');
const wrap = document.querySelector('.wrap');

const obj = [
    {name:"가나다", job : "웹퍼블리셔", tel : "010-0000-1111", img : "img0"},
    {name:"라마바", job : "풀스택개발자", tel : "010-1111-0000", img : "img1"},
    {name:"사아자", job : "프론트엔드개발자", tel : "010-2222-0000", img : "img2"},
    {name:"차카타", job : "웹엔진개발자", tel : "010-0000-3333", img : "img3"},
    {name:"파하", job : "개발자", tel : "010-0000-4444", img : "img4"},
]


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