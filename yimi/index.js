// /**
//  * Created by admin on 2017/3/30.
//  */
var oUl=document.getElementById('ul1');
var aLi=oUl.getElementsByTagName('li');
var oOl=document.getElementById('ol1');
var aBtn=oOl.getElementsByTagName('li');
var oL=document.getElementById('left');
var oR=document.getElementById('right');
var iNow=0;
var timer=null;
    function tab() {
        for(var i=0;i<aBtn.length;i++){
            aBtn[i].className='';
            aLi[i].style.display='none';
        }
        aBtn[iNow].className='active';
        aLi[iNow].style.display='block';
    }
    for(var i=0;i<aBtn.length;i++){
        aBtn[i].index=i;
        aBtn[i].onclick=function () {
            iNow=this.index;
            tab();
        }
    }
    oL.onclick=function () {
        iNow--;
        if(iNow<0){
            iNow=aBtn.length-1;
        }
        tab();
    }
    oR.onclick=function () {
        iNow++;
        if(iNow==aBtn.length){
            iNow=0;
        }
        tab();
    }
    timer=setInterval(function () {
        iNow++;
        if(iNow==aBtn.length){
            iNow=0;
        }
        tab();
    },2000);
    oUl.onmouseover=function () {
        clearInterval(timer);
    };
    oUl.onmouseout=function () {
        timer=setInterval(function () {
            iNow++;
            if(iNow==aBtn.length){
                iNow=0;
            }
            tab();
        },2000);
    }
    oL.onmouseover=function () {
        this.style.background='green';
    }
    oR.onmouseover=function () {
        this.style.background='green';
    }
