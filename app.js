

//fixer la nav bar 

const nav2 = document.querySelector('.all-menu-bar')
let topNav2 = nav2.offsetTop

window.addEventListener('scroll', () => {
    let scrollPosition = document.documentElement.scrollTop
    if(scrollPosition > topNav2){
        nav2.classList.add('active')
    }else{
        nav2.classList.remove('active')
    }
})


// menu bar


const allMenu = document.querySelector('.menu-bar');
const allMenuSpan = document.querySelectorAll('.bar')
const allLinks = document.querySelector('.links')


allMenu.addEventListener('click', menuToggeleFun)

function menuToggeleFun() {
    console.log('menu');
    allMenuSpan.forEach(span => {
        span.classList.toggle('active')
    })
    allMenu.classList.toggle('active')
    allLinks.classList.toggle('active')
}
