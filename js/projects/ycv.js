var date = new Date();
var month = (date.getMonth() + 1) + "";
var day = (date.getDate()) + "";
if(day.length < 2) {
    day = "0" + day;
}
if(month.length < 2) {
    month = "0" + month;
}
var month_code = "mon" + month;
var day_code = "day" + day;
var date_code = "dat" + month + day;
var time = localStorage.getItem(day_code);
/*localStorage.setItem("dat0721", 721);
localStorage.setItem("dat0421", 421);
localStorage.setItem("dat1221", 1221);*/

var pass = "QunQ@ycv8PM23";

get_data("result_today", day);
function enter_today() {
    if(localStorage.getItem("save_date") != date_code || localStorage.getItem("save_date") == null) {
        time = (Number(time) + 1) + "";
        localStorage.setItem(day_code, time);
        localStorage.setItem("save_date", date_code);
    }
    var enter = document.getElementById("input_number").value;
    localStorage.setItem(date_code, enter);
    alert("存储成功! ");
    get_data("result_today", day);
}
function get_data(docid, day) {
    document.getElementById(docid).innerHTML = "<thead><tr><td>日期</td><td>值</td></tr></thead><tbody><tr></tr></tbody>"
    var time_find = 0;
    var plus = 0;
    while(time_find != Number(localStorage.getItem("day" + day))) {
        var month_find = Number(month) - plus;
        if(month_find <= 0) {
            month_find = month_find + 12;
        }
        month_find = month_find + "";
        if(month_find.length < 2) {
            month_find = "0" + month_find;
        }
        var date_code_find = "dat" + month_find + day;
        var data_find = localStorage.getItem(date_code_find);
        if(data_find != null) {
            table_write(docid, date_code_find.substring(3, 5) + "月" + date_code_find.substring(5, 7) + "日", data_find);
            time_find = time_find + 1;
        }
        plus = plus + 1;
    }
}
function enter_date() {
    var input = document.getElementById("input_date").value + "";
    if(input.length < 2) {
        input = "0" + input;
    }
    get_data("result_date", input);
}


function table_write(docid, data_write, value_write) {
    let table = document.getElementById(docid);
    let newRow = table.insertRow();
    let cellDate = newRow.insertCell();
    let cellValue = newRow.insertCell();
    cellDate.innerHTML = data_write;
    cellValue.innerHTML = value_write;
}


function find() {
    var ask = prompt("Please enter the date code (mmdd): ");
    ask = "dat" + ask;
    console.log(localStorage.getItem(ask));
    console.log("----------Finished----------");
}
function last() {
    console.log(localStorage.getItem("save_date"));
    console.log("----------Finished----------");
}
function time_today() {
    console.log(time);
    console.log("----------Finished----------");
}
function time_all() {
    for(var i = 1; i <= 31; i++) {
        i = i + "";
        if(i.length < 2) {
            i = "0" + i;
        }
        console.log("day" + i + ": " + localStorage.getItem("day" + i));
    }
    console.log("----------Finished----------");
}
function restart() {
    var ask = prompt("Please enter the password: ");
    if(ask == pass) {
        console.clear();
        localStorage.clear();
        for(var i = 1; i <= 31; i++) {
            i = i + "";
            if(i.length < 2) {
                i = "0" + i;
            }
            localStorage.setItem("day" + i, 0);
            console.log("day" + i + ": " + localStorage.getItem("day" + i));
        }
    } else {
        console.log("Failed");
    }
    console.log("----------Finished----------");
}