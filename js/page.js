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
}

var header_en = "<div class='list'><ul><img src='/images/logo.png'/><li><a href='/index.html'>Home</a></li><li><a href='/projects.html'>Projects</a></li><li><a href='/music.html'>Music</a></li><li><a href='/lab.html'>Lab</a></li><li class='about'><a href='/about.html'>About</a></li></ul></div><h1>" + title_en + "</h1><hr>";
var header_cns = "<div class='list'><ul><img src='/images/logo.png'/><li><a href='/index.html'>首页</a></li><li><a href='/projects.html'>项目</a></li><li><a href='/music.html'>Music</a></li><li><a href='/lab.html'>实验室</a></li><li class='about'><a href='/about.html'>关于</a></li></ul></div><h1>" + title_cns + "</h1><hr>";


/*
<details><summary>Title</summary><hr /><ul><li>First</li><li>Secend</li><li>Third</li></ul></details>
*/
var now_ver = "Quinn-Web 12.3";
var next_ver = "--- Quinn-Web 12 ---";

var next_cont_en = "<li>Welcome</li>";
var next_cont_cns = "<li>欢迎您</li>";

var now_cont_en = "<li>🎉 New page - Project (of scratch)!</li><li>➰ New corner angle which looks more beautiful and comfortable;</li><li>⏸️ New indentation between the text, more conducive to visitors to read;</li><li>🎵 The media and its subpages have been changed to the music page, making access more direct and fast.</li>";
var now_cont_cns = "<li>🎉 新页面——（Scratch 的）项目!</li><li>➰ 新的,看起来更漂亮,更舒适的圆角角度;</li><li>⏸️ 文字之间新增缩进,更有利于浏览者阅读;</li><li>🎵 将媒体及其子页面更改为音乐页面,使访问更加直接和快速.</li>";

var news_en = "<span>" + next_ver + "<sup class='nt'>NEXT</sup></span><div class='cont'><details><summary>⏩ What will be updated?</summary><hr /><ul>" +next_cont_en + "</ul></details></div><hr /><span>" + now_ver + "<sup class='nw'>NOW</sup></span><div class='cont'><details open><summary>✨ What have been update? </summary><hr /><ul>" + now_cont_en + "</ul></details></div>";
var news_cns = "<span>" + next_ver + "<sup class='nt'>下一</sup></span><div class='cont'><details><summary>⏩ 即将更新</summary><hr /><ul>" +next_cont_cns + "</ul></details></div><hr /><span>" + now_ver + "<sup class='nw'>当前</sup></span><div class='cont'><details open><summary>✨ 现已更新</summary><hr /><ul>" + now_cont_cns + "</ul></details></div>";


var date_en = "Jun. 20, 2023";
var date_cns = "2023年6月20日";

var footer_en = "<hr><div id='footeri'>" + news_en + "<hr /><div class='sel'><select id='lang' onchange='langchange()'><option value='1' selected='selected'>United States - English</option><option value='2'>简体中文 (中国大陆) </option></select></div><div class='g_url'><span style='text-align: center; display:block; '>📅 Last Update: " + date_en + " | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn Qiu All Rights Reserved. | <a href='https://github.com/Quinn0823/quinn0823.github.io'  target='_blank'><i class='fa-brands fa-github'></i></a></span></div>";
var footer_cns = "<hr><div id='footeri'>" + news_cns + "<hr /><div class='sel'><select id='lang' onchange='langchange()'><option value='1'>United States - English</option><option value='2' selected='selected'>简体中文 (中国大陆) </option></select></div><div class='g_url'><span style='text-align: center; display:block; '>📅 最近更新：" + date_cns + " | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn Qiu 保留所有权利. | <a href='https://github.com/Quinn0823/quinn0823.github.io'  target='_blank'><i class='fa-brands fa-github'></i></a></span></div>";

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