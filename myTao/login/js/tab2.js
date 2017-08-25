/**
 * Created by zzx on 2017/3/25.
 */

    var oBtn2 = document.getElementById('p1');
    var aBtn2 = oBtn2.getElementsByTagName('a');
    var oDiv2 = document.getElementById('banner');
    var aDiv2 = oDiv2.getElementsByTagName('div');








    for (var i = 0; i < aBtn2.length; i++) {
        aBtn2[i].index = i;
        aBtn2[i].onclick = function () {
            for (var j = 0; j < aBtn2.length; j++) {
                aBtn2[j].style.borderBottom ='';
                aDiv2[j].style.display = 'none';
            }
            this.style.borderBottom='3px solid #32c5d2';
            aDiv2[this.index].style.display = 'block';

        }

    }
