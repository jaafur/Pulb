let btn = document.querySelector('.btn')
btn.addEventListener('click',()=>{
    if (btn.innerText == 'OFF') {
        document.documentElement.style.cssText = '--light-color: #f8d11d'
        btn.innerText = 'ON'
    }else{
        document.documentElement.style.cssText = '--light-color: #94b0ff'
        btn.innerText = 'OFF'
    }
})