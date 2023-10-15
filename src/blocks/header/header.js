$(document).ready(function (){
    $(".header__burger").click(function(){
        $(".header__nav").toggleClass("header__nav--open")
        $(".header__nav-mob").toggleClass("header__nav-mob--open")
        $(".header__line:nth-child(1)").toggleClass("header__line--first")
        $(".header__line:nth-child(2)").toggleClass("header__line--middle")
        $(".header__line:nth-child(3)").toggleClass("header__line--last")
    })

})

$(document).ready(function (){
    $(".header__help").click(function(){
        $(".header__modal").toggleClass("header__modal--hide")
    })
})







