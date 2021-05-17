const overlay = document.getElementsByClassName('overlay')[0]
const images = document.getElementsByClassName('post-image')
const closeBtn = document.getElementsByClassName('close')[0]

for (let i = 0; i < images.length; i++) {
    images[i].onclick = () =>{
        overlay.classList.toggle('hidden')
        document.getElementsByTagName('body')[0].classList.toggle('lockScroll')
    }
    
}
closeBtn.onclick = () =>{
    overlay.classList.toggle('hidden')
    document.getElementsByTagName('body')[0].classList.toggle('lockScroll')
}