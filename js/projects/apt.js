function count(in_class, out_id) {
    var class_cont = document.getElementsByClassName(in_class);
    var sum = 0;
    for (var i = 0; i < class_cont.length; i++) {
        sum += Number(class_cont[i].value);
    }
    document.getElementById(out_id).innerText = sum + " 元";
}
function count_cash() {
    count("start_cash", "start_sum");
    count("end_cash", "end_sum");
    document.getElementById("cash_sum").innerText = parseFloat(document.getElementById("end_sum").innerText) - parseFloat(document.getElementById("start_sum").innerText) + " 元";
}

function jisuan() {
    var cash = document.getElementById("cash_sum").innerText;
    var offline = document.getElementById("offline_sum").innerText;
    var other_cash = document.getElementById("other_cash_sum").innerText;
    document.getElementById("func1").innerText = parseFloat(cash) - parseFloat(offline) - parseFloat(other_cash) + " 元";

    var software = document.getElementById("software_sum").innerText;
    var account = document.getElementById("account_sum").innerText;
    document.getElementById("func2").innerText = parseFloat(software) - parseFloat(account) + " 元";

    var difference = parseFloat(document.getElementById("func1").innerText) - parseFloat(document.getElementById("func2").innerText);
    if(difference > 0) {
        alert("手上现金多 " + difference + " 元. ")
    } else if(difference < 0) {
        alert("手上现金少 " + Math.abs(difference) + " 元. ")
    } else {
        alert("Perfect! 不多不少, 刚刚好. ")
    }
}