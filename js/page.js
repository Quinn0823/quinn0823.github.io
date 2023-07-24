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
} else if (path == "/website.html") {
    title_cns = "此网站";
} else if (path == "/qs/index.html") {
    title_cns = "QuinnStandard";
}

var header_en = "<div class='list'><ul><img src='/images/logo.png'/><li><a href='/index.html'>Home</a></li><li><a href='/projects.html'>Projects</a></li><li><a href='/qs/index.html'>QS</a></li><li><a href='/music.html'>Music</a></li><li><a href='/lab.html'>Lab</a></li><li class='about'><a href='/website.html'>Website</a></li></ul></div><h1>" + title_en + "</h1><hr>";
var header_cns = "<div class='list'><ul><img src='/images/logo.png'/><li><a href='/index.html'>首页</a></li><li><a href='/projects.html'>项目</a></li><li><a href='/qs/index.html'>标准</a></li><li><a href='/music.html'>音乐</a></li><li><a href='/lab.html'>实验室</a></li><li class='about'><a href='/website.html'>此网站</a></li></ul></div><h1>" + title_cns + "</h1><hr>";



/*
<details><summary>Title</summary><hr /><ul><li>First</li><li>Secend</li><li>Third</li></ul></details>
*/
var now_ver = "Quinn-Web 12.4";
var next_ver = "Quinn-Web 12.4.1";

var next_cont_en = "<p><i class='fa-solid fa-font-awesome'></i> All symbols will be refactored;</p><p><i class='fa-solid fa-font'></i> New round font.</p><p>...</p>";
var next_cont_cns = "<p><i class='fa-solid fa-font-awesome'></i> 所有符号将被重构;</p><p><i class='fa-solid fa-font'></i> 新的圆角字体</p><p>...</p>";

var now_cont_en = "<p><i class='fa-solid fa-scale-balanced'></i> New page - QS (QuinnStandard)! There have been two standard documents:</p><div class='cont'><p>QS2023 01-E3 Subject Code;</p><p>QS2023 02 Basic Text Format.</p></div><p><i class='fa-solid fa-code'></i> New project - 公式默写器 (Mainland China - Simplified Chinese)! You can write physics kinematic formulas in this web app.</p><p><i class='fa-solid fa-tag'></i> The About page has now been renamed \"Website\" in order to make the meaning more clear. </p><p><i class='fa-solid fa-arrows-up-down-left-right'></i> Snapshot has now been moved to the Website page as a subentry of it; Web History moves as the Snapshot page moves, but it may be removed in a future version.</p><p><i class='fa-solid fa-timeline'></i> A new timeline - Beta!  It is available on the Lab page, now.</p><p><i class='fa-solid fa-school'></i> Chongqing Yuying Primary School due to the some reasons of the group, now renamed \"Chongqing Yuying Primary School (Chongqing University of Proparatory School)\". This change has been updated in both the old and new timelines.</p>";
var now_cont_cns = "<p><i class='fa-solid fa-scale-balanced'></i> 新页面 - 标准 (QuinnStandard)! 现已有两个标准性文件:</p><div class='cont'><p>QS2023 01-E3 学科代号;</p><p>QS2023 02 基本文本格式.</p></div><p><i class='fa-solid fa-code'></i> 新项目 - 公式默写器! 你可以在这个网页 app 中默写物理运动学公式.</p><p><i class='fa-solid fa-tag'></i> 关于 页面现已更名为 \"此网站\".</p><p><i class='fa-solid fa-arrows-up-down-left-right'></i> 快照 现已移至 此网页 页面, 并作为它的子目; Web History 随 快照 的移动而移动, 但它可能在将来的版本中被删除.</p><p><i class='fa-solid fa-timeline'></i> 新的时间线 - 预览! 现已在 实验室 页面更新.</p><p><i class='fa-solid fa-school'></i> 重庆市沙坪坝区育英小学校 因集团的一些原因, 现更名为 \"重庆市沙坪坝区育英小学校 (重庆大学附属小学)\". 此更改现已新旧时间线中更新.</p>";

var news_en = "<span><i class='fa-solid fa-forward'></i> " + next_ver + " - NEXT</span><div class='cont'><details><summary><i class='fa-solid fa-diagram-next'></i> What will be updated?</summary><hr /><div class='cont'>" +next_cont_en + "</div></details></div><hr /><span><i class='fa-solid fa-forward-step'></i> " + now_ver + "  - NOW</span><div class='cont'><details open><summary><i class='fa-solid fa-newspaper'></i> What have been update? </summary><hr /><div class='cont'>" + now_cont_en + "</div></details></div>";
var news_cns = "<span><i class='fa-solid fa-forward'></i> " + next_ver + " - 下一</span><div class='cont'><details><summary><i class='fa-solid fa-diagram-next'></i> 即将更新</summary><hr /><div class='cont'>" +next_cont_cns + "</div></details></div><hr /><span><i class='fa-solid fa-forward-step'></i> " + now_ver + " - 当前</span><div class='cont'><details open><summary><i class='fa-solid fa-newspaper'></i> 现已更新</summary><hr /><div class='cont'>" + now_cont_cns + "</div></details></div>";


var date_en = "Jul 24, 2023";
var date_cns = "2023年6月20日";

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