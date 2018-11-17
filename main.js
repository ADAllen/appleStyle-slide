$(document).ready(function(){
    var totWidth=0;
    var position=new Array();
    $('#slides .slide').each(function(i){
        position[i]=totWidth;
        totWidth+=$(this).width();
        if(!$(this).width())
        {
            alert("Please, fill in width & height for all your images!");
			return false;
        }
    })
    $('#slides').width(totWidth)
    $('#menu ul li a').click(function(e,keepScrool){
       
        
        var pos = $(this).parent().prevAll('.menuItem').length;
        
        $('#slides').stop().animate({marginLeft:-position[pos]+'px'},450);
        
        
        e.preventDefault();
        if(!keepScrool) clearInterval(itvl)
    })
   var current=1
   function autoAdvance(){
       if(current==-1) return false
       $('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',[true])
       current++
   }
   var changeEvery=10
   var itvl=setInterval(function(){autoAdvance()},changeEvery*1000)
})