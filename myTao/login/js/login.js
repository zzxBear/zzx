/**
 * Created by zzx on 2017/3/26.
 */

var oLogin = document.getElementById('login');
var oClose = document.getElementById('close');
var add = document.getElementById('login-end');
oLogin.onclick = function () {
    add.style.transform = 'scale(1)';
    add.style.opacity = 1;
    add.style.zIndex=2;
}
oClose.onclick = function () {
    add.style.transform = 'scale(5)';
    add.style.opacity = 0;
    add.style.zIndex=-2;
}
