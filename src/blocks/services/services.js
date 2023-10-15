$(document).ready(function(){
    $(".services__mobile").click(function(){
        if ($(this).siblings(".services__text").hasClass("services__text--open")){
            $(this).siblings(".services__text").removeClass("services__text--open")
            $(this).removeClass("services__mobile--open")
            
            
        } else {
            $(".services__text").removeClass("services__text--open")
            $(this).siblings(".services__text").addClass("services__text--open")
            $(".services__mobile").removeClass("services__mobile--open")
            $(this).addClass("services__mobile--open")
        }
        
        
    })
})

