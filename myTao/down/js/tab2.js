/**
 * Created by zzx on 2017/3/25.
 */

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
        aBtn2[i].onclick = function () {
            iNow2 = this.index;
            tab2();
        }

    }
