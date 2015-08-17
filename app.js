(function(window){
    window.indexHtmlInit=function(){
        $(function(){    
            $('#bg').click(function(){
                $('.mask,.container').show();
            });
            $('.mask').click(function(){
                $('.mask,.container').hide();
            });   
            $('#fresh').click(function(){
                window.location.reload();
            })
        })    
    }
    function showCode(str){
        $('#code').text(str);
        $('#codeMask').animate({
            width:0,
            backgroundPosition:'-95vw 100%'
        },1000);
    }
    window.tipsHtmlInit=function(){
        showCode('KCf970Hdd1');
    }
})(window)
