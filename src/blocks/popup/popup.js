$(document).ready(function (){
    $(".popup__close").click(function(){
        $(".popup").addClass("popup--hide")
    })
        
    $(".header__link-enter").click(function(){
        $(".popup").removeClass("popup--hide")
    })

    $(".popup__bg").click(function(){
        $(".popup").addClass("popup--hide")
    })
})