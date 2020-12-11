$(document).ready(function(){

    function slide(num){
        if( $('.container').css('marginLeft') == '-1600px')
            $('.container').css('marginLeft', '0px');
        else
            $('.container').animate({marginLeft: num})
    }
    
    var autoSlide = setInterval(function(){
        slide('-=400px');
    }, 2000);

    $('#next').click(function(){
        slide('-=400px');
        clearInterval(autoSlide);
    });

    $('#prev').click(function(){
        /*slide('+=400px');
        clearInterval(autoSlide);*/
        if( $('.container').css('marginLeft') == '0px')
            $('.container').css('marginLeft', '-1200px');
        else
            slide('+=400px');
            
    });
});