(function(obj){
    window.xj=obj;
    obj.tpl=(function(){
        return {
            getTpl:function(id){
                var str=$('#'+id).html()
                return $(str);
            }
        }
    })();
    xj.alert=function(){
        return 123
    }
})(window.xj||{});
$(function(){    
    console.log($('#ok'))
    $('#go').click(function(){
        $('body').append(xj.tpl.getTpl('pop'));    
    });
})