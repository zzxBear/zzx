/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-25 16:59:23
 * @version $Id$
 */
$(function(){

    

    (function(){
        $('.tab_list li').click(function(){
            $('.tab_list li').removeClass('active');
            $('.cont_list>li').removeClass('show');
            var n=$('.tab_list li').index(this);
            
            $(this).addClass('active');
            $('.cont_list>li:eq('+n+')').addClass('show');
        });
    })();

    
    (function(){
        /***不需要自动滚动，去掉即可***/
        time = window.setInterval(function(){
            $('.og_next').click();  
        },5000);
        /***不需要自动滚动，去掉即可***/
        linum = $('.mainlist li').length;//图片数量
        w = linum * 350;//ul宽度
        
        $('.swaplist').html($('.mainlist').html());//复制内容
        
        $('.og_next').click(function(){
            
            if($('.swaplist,.mainlist').is(':animated')){
                $('.swaplist,.mainlist').stop(true,true);
            }
            
            if($('.mainlist li').length>3){//多于4张图片
                ml = parseInt($('.mainlist').css('left'));//默认图片ul位置
                sl = parseInt($('.swaplist').css('left'));//交换图片ul位置
                if(ml<=0 && ml>w*-1){//默认图片显示时
                    $('.swaplist').css({left: '1050px'});//交换图片放在显示区域右侧
                    $('.mainlist').animate({left: ml - 1050 + 'px'},'slow');//默认图片滚动                
                    if(ml==(w-1050)*-1){//默认图片最后一屏时
                        $('.swaplist').animate({left: '0px'},'slow');//交换图片滚动
                    }
                }else{//交换图片显示时
                    $('.mainlist').css({left: '1050px'})//默认图片放在显示区域右
                    $('.swaplist').animate({left: sl - 1050 + 'px'},'slow');//交换图片滚动
                    if(sl==(w-1050)*-1){//交换图片最后一屏时
                        $('.mainlist').animate({left: '0px'},'slow');//默认图片滚动
                    }
                }
            }
        })
        $('.og_prev').click(function(){
            
            if($('.swaplist,.mainlist').is(':animated')){
                $('.swaplist,.mainlist').stop(true,true);
            }
            
            if($('.mainlist li').length>3){
                ml = parseInt($('.mainlist').css('left'));
                sl = parseInt($('.swaplist').css('left'));
                if(ml<=0 && ml>w*-1){
                    $('.swaplist').css({left: w * -1 + 'px'});
                    $('.mainlist').animate({left: ml + 1050 + 'px'},'slow');                
                    if(ml==0){
                        $('.swaplist').animate({left: (w - 1050) * -1 + 'px'},'slow');
                    }
                }else{
                    $('.mainlist').css({left: (w - 1050) * -1 + 'px'});
                    $('.swaplist').animate({left: sl + 1050 + 'px'},'slow');
                    if(sl==0){
                        $('.mainlist').animate({left: '0px'},'slow');
                    }
                }
        }
    })    



    $('.og_prev,.og_next').hover(function(){
            $(this).fadeTo('fast',1);
        },function(){
            $(this).fadeTo('fast',0.7);
    })
    })();
    



   

        

   

   


})
