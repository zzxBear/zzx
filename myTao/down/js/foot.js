/**
 * Created by zzx on 2017/4/8.
 */
var oFirst1= document.querySelector('#ull .down-l .first img');
var oFirst2= document.querySelector('#ull .down-r .first img');

var oLast1= document.querySelector('#ull .down-l .last img');
var oLast2= document.querySelector('#ull .down-r .last img');
    oFirst1.onmouseover = function () {
        if(oLast1.style.display=='none') {
            oLast1.style.display = 'block';
        }
    }
    oFirst1.onmouseout = function () {
        oLast1.style.display = 'none';

    }

oFirst2.onmouseover = function () {
    if(oLast2.style.display=='none') {
        oLast2.style.display = 'block';
    }
}
oFirst2.onmouseout = function () {
    oLast2.style.display = 'none';

}