
    var oA=document.querySelectorAll('#nav_ul li a');

        for(var i=0;i<oA.length;i++){
            oA[i].onmouseover=function(){
               this.style.borderTop='2px solid #32c5d2';
            }
            oA[i].onmouseout=function(){
                this.style.borderTop='';
            }
         }