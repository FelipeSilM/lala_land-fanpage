document.addEventListener('DOMContentLoaded', function(){
    const heroSection = document.querySelector(".hero")
    const alturaHero = heroSection.clientHeight

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY

        if(posicaoAtual > alturaHero){
            exibeArrow()
        }else{
            ocultaArrow()
        }
    })
})

function exibeArrow(){
    const a = document.querySelector(".header__arrow__top")
    a.classList.add("header__arrow__top--is-visible")
}
function ocultaArrow(){
    const a = document.querySelector(".header__arrow__top")
    a.classList.remove("header__arrow__top--is-visible")
}