const showList = (obj, wrap) => {
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

export default showList