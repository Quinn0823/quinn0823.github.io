var path = window.location.pathname
var title_en = document.title
var title_cns = document.title;

if (title_en == "Home") {
    title_cns = "首页";
} else if (title_en == "Projects") {
    title_cns = "项目";
} else if (title_en == "App Library") {
    title_cns = "App 资源库"
} else if (title_en == "QuinnStandard") {
    title_cns = "Quinn 标准";
}  else if (title_en == "Music") {
    title_cns = "音乐";
} else if (title_en == "Lab") {
    title_cns = "实验室";
} else if (title_en == "Website") {
    title_cns = "此网站";
} else if (title_en == "Textbook Download Helper") {
    title_cns = "教材下载助手";
} else if (title_en == "Digital Dot Matrix Tool") {
    title_cns = "数字点阵工具";
} else if (title_en == "QS2023 01-E3") {
    
} else if (title_en == "QS2023 02") {
    
}
var header_en = "<div class='list'><ul><img src='/images/logo.png'/><li><a href='/'>Home</a></li><li><a href='/projects/index.html'>Projects</a></li><li><a href='/apps/index.html'>Apps</a></li><li><a href='/qs/index.html'>QS</a></li><li><a href='/music.html'>Music</a></li><li class='about'><a href='/website.html'>Website</a></li></ul></div><h1>" + title_en + "</h1><hr>";
var header_cns = "<div class='list'><ul><img src='/images/logo.png'/><li><a href='/'>首页</a></li><li><a href='/projects/index.html'>项目</a></li><li><a href='/apps/index.html'>软件</a></li><li><a href='/qs/index.html'>标准</a></li><li><a href='/music.html'>音乐</a></li><li class='about'><a href='/website.html'>此网站</a></li></ul></div><h1>" + title_cns + "</h1><hr>";



/*
<details><summary>Title</summary><hr /><ul><li>First</li><li>Secend</li><li>Third</li></ul></details>
*/
var now_ver = "Quinn-Web 12.4";
var next_ver = "Quinn-Web 12.5";

var next_cont_en = "<p>All symbols will be refactored;</p><p>New round font.</p><p>...</p>";
var next_cont_cns = "<p>所有符号将被重构;</p><p>新的圆角字体</p><p>...</p>";

var now_cont_en = "<p>Welcome! </p>";
var now_cont_cns = "<p>欢迎! </p>";

var news_en = "<span> " + next_ver + " - NEXT</span><div class='cont'><details><summary><img src='/images/svgs/sparkles.rectangle.stack.svg' /> What will be updated?</summary><hr /><div class='cont'>" +next_cont_en + "</div></details></div><hr /><span>" + now_ver + "  - NOW</span><div class='cont'><details open><summary><img src='/images/svgs/checkmark.rectangle.stack.fill.svg' /> What have been update? </summary><hr /><div class='cont'>" + now_cont_en + "</div></details></div>";
var news_cns = "<span> " + next_ver + " - 下一</span><div class='cont'><details><summary><img src='/images/svgs/sparkles.rectangle.stack.svg' /> 即将更新</summary><hr /><div class='cont'>" +next_cont_cns + "</div></details></div><hr /><span>" + now_ver + " - 当前</span><div class='cont'><details open><summary><img src='/images/svgs/checkmark.rectangle.stack.fill.svg' /> 现已更新</summary><hr /><div class='cont'>" + now_cont_cns + "</div></details></div>";


var date_en = "Aug. 18, 2023";
var date_cns = "2023年8月18日";

var footer_en = "<hr><div id='footeri'>" + news_en + "<hr /><div class='sel'><select id='lang' onchange='langchange()'><option value='1' selected='selected'>United States - English</option><option value='2'>简体中文 (中国大陆) </option></select></div><div class='g_url'><span style='text-align: center; display:block; '><img src='/images/svgs/calendar.badge.clock.svg' /> Last Update: " + date_en + " | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn Qiu All Rights Reserved. </span></div>";
var footer_cns = "<hr><div id='footeri'>" + news_cns + "<hr /><div class='sel'><select id='lang' onchange='langchange()'><option value='1'>United States - English</option><option value='2' selected='selected'>简体中文 (中国大陆) </option></select></div><div class='g_url'><span style='text-align: center; display:block; '><img src='/images/svgs/calendar.badge.clock.svg' /> 最近更新：" + date_cns + " | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn Qiu 保留所有权利. </span></div>";

var ldate = 1;


function langset(set) {
    if (set == "for") {
        localStorage.lset = 1;
        sessionStorage.langdate = "";
    } else if (set == "vis") {
        localStorage.lset = 2;
        localStorage.langdate = "";
    } else if (set == "pag") {
        localStorage.lset = 3;
        localStorage.langdate = "";
        sessionStorage.langdate = "";
    }
}

function langdate() {
    if (localStorage.langdate == 2) { //Chinese
        document.title = title_cns + " | Quinn-Web";

        document.getElementById("header").innerHTML = header_cns;
        document.getElementById("footer").innerHTML = footer_cns;

        document.getElementById("en").style.display = "none";
        document.getElementById("cns").style.display = "inline";
    } else { //English
        document.title = title_en + " | Quinn-Web";

        document.getElementById("header").innerHTML = header_en;
        document.getElementById("footer").innerHTML = footer_en;

        document.getElementById("en").style.display = "inline";
        document.getElementById("cns").style.display = "none";
    }
}


function langchange() {
    if (document.getElementById("lang").value == "1") {
        localStorage.langdate = 1;
    } else if (document.getElementById("lang").value == "2") {
        localStorage.langdate = 2;
    }
    langdate();
}

langdate();