document.addEventListener('DOMContentLoaded', function(){
    const heroSection = document.querySelector(".hero")
    const heroHeight = heroSection.clientHeight

    window.addEventListener('scroll', function(){
        const currentPosition = window.scrollY

        if(currentPosition > heroHeight){
            showArrow()
        }else{
            hideArrow()
        }
    })
})

function showArrow(){
    const a = document.querySelector(".header__arrow__top")
    a.classList.add("header__arrow__top--is-visible")
}
function hideArrow(){
    const a = document.querySelector(".header__arrow__top")
    a.classList.remove("header__arrow__top--is-visible")
}