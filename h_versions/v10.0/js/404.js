var i = 5;
var intervalid;   
intervalid = setInterval("time()", 1000);   
function time() {   
    if (i == 0) {   
        history.go(-1);
        clearInterval(intervalid);   
    }   
    document.getElementById("time").innerHTML = i;   
    i--;   
}  
window.onload = time;