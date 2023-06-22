var path = window.location.pathname
var title_en = document.title
var title_cns = document.title;

if (path == "/index.html" || path == "/") {
    title_cns = "首页";
} else if (path == "/projects.html") {
    title_cns = "项目";
} else if (path == "/music.html") {
    title_cns = "音乐";
} else if (path == "/lab.html") {
    title_cns = "实验室";
} else if (path == "/about.html") {
    title_cns = "关于";
} else if (path == "/snapshot.html") {
    title_cns = "快照";
} else {
    title_en = "No Page";
    title_cns = "无此页面";
}

var header_en = "<div class='list'><ul><img src='/images/logo.png'/><li><a href='/index.html'>Home</a></li><li><a href='/projects.html'>Projects</a></li><li><a href='/music.html'>Music</a></li><li><a href='/lab.html'>Lab</a></li><li class='about'><a href='/about.html'>About</a></li><li class='about'><a href='/snapshot.html'>Snapshot</a></li></ul></div><h1>" + title_en + "</h1><hr>";
var header_cns = "<div class='list'><ul><img src='/images/logo.png'/><li><a href='/index.html'>首页</a></li><li><a href='/projects.html'>项目</a></li><li><a href='/music.html'>Music</a></li><li><a href='/lab.html'>实验室</a></li><li class='about'><a href='/about.html'>关于</a></li><li class='about'><a href='/snapshot.html'>快照</a></li></ul></div><h1>" + title_cns + "</h1><hr>";


/*
<details><summary>Title</summary><hr /><ul><li>First</li><li>Secend</li><li>Third</li></ul></details>
*/
var now_ver = "Quinn-Web 12.3";
var next_ver = "Quinn-Web 12";

var next_cont_en = "<p><i class='fa-solid fa-door-open'></i> Welcome! </p>";
var next_cont_cns = "<p><i class='fa-solid fa-door-open'></i> 欢迎您! </p>";

var now_cont_en = "<p><i class='fa-solid fa-file-code'></i> New page - Project (of scratch)!</p><p><i class='fa-solid fa-circle-half-stroke'></i> New corner angle which looks more beautiful and comfortable; </p><p><i class='fa-solid fa-indent'></i> New indentation between the text, more conducive to visitors to read; </p><p><i class='fa-solid fa-music'></i> The media and its subpages have been changed to the music page, making access more direct and fast. </p>";
var now_cont_cns = "<p><i class='fa-solid fa-file-code'></i> 新页面 -- (Scratch 的) 项目! </p><p><i class='fa-solid fa-circle-half-stroke'></i> 新的, 看起来更漂亮, 更舒适的圆角角度; </p><p><i class='fa-solid fa-indent'></i> 文字之间新增缩进, 更有利于浏览者阅读; </p><p><i class='fa-solid fa-music'></i> 将媒体及其子页面更改为音乐页面, 使访问更加直接和快速. </p>";

var news_en = "<span><i class='fa-solid fa-forward'></i> " + next_ver + " - NEXT</span><div class='cont'><details><summary><i class='fa-solid fa-diagram-next'></i> What will be updated?</summary><hr /><div class='cont'>" +next_cont_en + "</div></details></div><hr /><span>" + now_ver + " <i class='fa-solid fa-forward-step'></i> - NOW</span><div class='cont'><details open><summary><i class='fa-solid fa-newspaper'></i> What have been update? </summary><hr /><div class='cont'>" + now_cont_en + "</div></details></div>";
var news_cns = "<span><i class='fa-solid fa-forward'></i> " + next_ver + " - 下一</span><div class='cont'><details><summary><i class='fa-solid fa-diagram-next'></i> 即将更新</summary><hr /><div class='cont'>" +next_cont_cns + "</div></details></div><hr /><span><i class='fa-solid fa-forward-step'></i> " + now_ver + " - 当前</span><div class='cont'><details open><summary><i class='fa-solid fa-newspaper'></i> 现已更新</summary><hr /><div class='cont'>" + now_cont_cns + "</div></details></div>";


var date_en = "Jun. 20, 2019-2023";
var date_cns = "2019-2023年6月20日";

var footer_en = "<hr><div id='footeri'>" + news_en + "<hr /><div class='sel'><select id='lang' onchange='langchange()'><option value='1' selected='selected'>United States - English</option><option value='2'>简体中文 (中国大陆) </option></select></div><div class='g_url'><span style='text-align: center; display:block; '><i class='fa-solid fa-calendar-days'></i> Last Update: " + date_en + " | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn Qiu All Rights Reserved. | <a href='https://github.com/Quinn0823/quinn0823.github.io'  target='_blank'><i class='fa-brands fa-github'></i></a></span></div>";
var footer_cns = "<hr><div id='footeri'>" + news_cns + "<hr /><div class='sel'><select id='lang' onchange='langchange()'><option value='1'>United States - English</option><option value='2' selected='selected'>简体中文 (中国大陆) </option></select></div><div class='g_url'><span style='text-align: center; display:block; '><i class='fa-solid fa-calendar-days'></i> 最近更新：" + date_cns + " | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn Qiu 保留所有权利. | <a href='https://github.com/Quinn0823/quinn0823.github.io'  target='_blank'><i class='fa-brands fa-github'></i></a></span></div>";

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

        localStorage.langdate = 2;
    } else { //English
        document.title = title_en + " | Quinn-Web";

        document.getElementById("header").innerHTML = header_en;
        document.getElementById("footer").innerHTML = footer_en;

        document.getElementById("en").style.display = "inline";
        document.getElementById("cns").style.display = "none";

        localStorage.langdate = 1;
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