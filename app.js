(function(window){
    window.indexHtmlInit=function(){
        $(function(){    
            $('#clickArea').click(function(){
                $.ajax({
                    type: 'POST',
                    url: '/projects',
                    data: { name: 'Zepto.js' },
                    dataType: 'json',                    
                    success: function(data){
                        console.log(data);
                        window.location.href="tips.html";
                    },
                    error: function(xhr, type){
                        console.log(xhr)
                    }
                })
            });
        })    
    }
    function getQueryStr(name, str) {
        str = str || location.search;
        var res = str.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
        if (res == null || res.length <= 1) {
            return "";
        }
        return res[1];
    }
    window.tipsHtmlInit=function(){
        var code=getQueryStr('errcode');
        var defaultSrc="res/tishi.jpg";
        var srcMap={
            '0':defaultSrc,
            '1':'res/errbg.jpg'
        };
        
        var src=srcMap[code]||defaultSrc;
        $('#bg').attr({src:src}).show();
        if(code==1){
            var a=$('<div class="errorTips">')
            .text('123123')
            .appendTo($('body'));
        }
    }
})(window)
