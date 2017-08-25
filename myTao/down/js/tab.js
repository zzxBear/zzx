/**
 * Created by zzx on 2017/3/24.
 */

    var oBtn = document.getElementById('oll');
    var aBtn = oBtn.getElementsByTagName('li');
    var oDiv = document.getElementById('ull');
    var aDiv = oDiv.getElementsByTagName('li');
    var iNow = 0;

    function tab() {

        for (var j =0; j< aBtn.length;j++) {
            aBtn[j].className = '';
            aDiv[j].className = '';
        }
        aBtn[iNow].className = 'on';
        aDiv[iNow].className = 'active';

    }
    for (var i = 0; i< aBtn.length; i++) {
        aBtn[i].index = i;
        aBtn[i].onclick = function () {
            iNow = this.index;
            tab();
        }

    }
  setInterval(function(){
        iNow++;
        if(iNow>=aBtn.length-1){
            iNow=0;
        }
        tab();
    },1000);

  var op=document.getElementById('down-app');
    var om=document.getElementById('xz');
    om.onmouseover=op.onmouseover=function(){
        xz.style.display='block';
    }
    om.onmouseout=op.onmouseout=function(){
        xz.style.display='none';
    }
    var oSide=document.getElementById('side');
    var oTop=document.getElementById('top');

        oTop.onclick=function(){
            if(oSide.style.display=='block'){
            oSide.style.display='none';
            }else{
                oSide.style.display='block';
            }
    }



    var oBtn2 = document.getElementById('new');
    var aBtn2 = oBtn2.getElementsByTagName('li');
    var oDiv2 = document.getElementById('new-car');
    var aDiv2 = oDiv2.getElementsByTagName('ul');
    var iNow2 = 0;

    function tab2() {

        for (var j = 0; j < aBtn2.length; j++) {
            aBtn2[j].className = '';
            aDiv2[j].className = '';
        }
        aBtn2[iNow2].className = 'on';
        aDiv2[iNow2].className = 'active';

    }

    for (var i = 0; i < aBtn2.length; i++) {
        aBtn2[i].index = i;
        aBtn2[i].onmouseover = function () {
            iNow2 = this.index;
            tab2();
        }

    }


