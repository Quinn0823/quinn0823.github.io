var path = window.location.pathname, title_en = document.title, title_cns = document.title;
if(path == "/index.html" || path == "/") {
    title_cns = "首页";
} else if(path == "/projects.html") {
    title_cns = "项目";
} else if(path == "/media.html") {
    title_cns = "媒体";
} else if(path == "/media/music.html") {
    title_cns = "音乐";
} else if(path == "/media/photos.html") {
    title_cns = "照片";
} else if(path == "/media/videos.html") {
    title_cns = "视频";
} else if(path == "/laboratory.html") {
    title_cns = "实验室";
} else if(path == "/about.html") {
    title_cns = "关于";
}

var news_en = "Even if you close your browser or computer, your language settings will always be valid on all pages.";
var news_cns = "即使您关闭浏览器或计算机，您的语言设置在所有页面上也将始终有效。";

var header_en = "<div class='list'><ul><img src='/images/logo.png'/><li><a href='/index.html'>Home</a></li><li><a href='/projects.html'>Projects</a></li><li><a href='/media.html'>Media</a><ul><li><a href='/media/music.html'>Music</a></li><li><a href='/media/photos.html'>Photos</a></li><li><a href='/media/videos.html'>Videos</a></li></ul></li><li><a href='/laboratory.html'>Laboratory</a></li><li class='about'><a href='/about.html'>About</a></li></ul></div><h1>" + title_en + "</h1><hr />";
var header_cns = "<div class='list'><ul><img src='/images/logo.png'/><li><a href='/index.html'>首页</a></li><li><a href='/projects.html'>项目</a></li><li><a href='/media.html'>媒体</a><ul><li><a href='/media/music.html'>音乐</a></li><li><a href='/media/photos.html'>照片</a></li><li><a href='/media/videos.html'>视频</a></li></ul></li><li><a href='/laboratory.html'>实验室</a></li><li class='about'><a href='/about.html'>关于</a></li></ul></div><h1>" + title_cns + "</h1><hr />";

var footer_en = "<details><summary>✨ What's New?</summary><hr /><span>" + news_en + "</span></details><div class='sel'><select id='lang' onchange='langchange()'><option value='1' selected='selected'>United States - English</option><option value='2'>简体中文（中国大陆）</option></select></div><span style='text-align: center; display:block; '>📅 Last Update: July 23, 2022 | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn All Rights Reserved.</span>";
var footer_cns = "<details><summary>✨ 新内容！</summary><hr /><span>" + news_cns + "</span></details><div class='sel'><select id='lang' onchange='langchange()'><option value='1'>United States - English</option><option value='2' selected='selected'>简体中文（中国大陆）</option></select></div><span style='text-align: center; display:block; '>📅 最近更新：2022年7月23日 | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " 邱琦轩 保留所有权利。</span>";

langdate();

function langdate() {
    if(localStorage.langdate == 1) {
        document.title = title_en + " | Quinn-Web";

        document.getElementById("header").innerHTML = header_en;
        document.getElementById("footer").innerHTML = footer_en;

        document.getElementById("en").style.display="inline";
        document.getElementById("cns").style.display="none";
    } else if(localStorage.langdate == 2) {
        document.title = title_cns + " | Quinn-Web";

        document.getElementById("header").innerHTML = header_cns;
        document.getElementById("footer").innerHTML = footer_cns;

        document.getElementById("en").style.display="none";
        document.getElementById("cns").style.display="inline";
    } else {
        localStorage.langdate = 1;
    }
} 

function langchange() {
    if(document.getElementById("lang").value=="1") {
        localStorage.langdate = 1;
    } else if(document.getElementById("lang").value == "2") {
        localStorage.langdate = 2;
    }
    langdate();
}