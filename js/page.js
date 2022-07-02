document.getElementById("sel").innerHTML="<div class='sel'><select id='lang' onchange='langchange(); language()'><option value='1'>English</option><option value='2'>简体中文</option></select></div>"

var path = window.location.pathname;
var tltle_en, tltle_cns;
if (path == "/" || path == "/index.html") {
    tltle_en = "✨ Preparing for Quinn-Web 12 ✨";
    tltle_cns = "✨ 正在为 Quinn-Web 12 做准备 ✨";
}

langchange();
function langchange() {
    if(document.getElementById("lang").value=="1") {
        document.title = tltle_en + " | Quinn-Web";
        document.getElementById("list").innerHTML = "<ul><img src='/images/logo.png'/><li><a href='/'>Home</a></li><li><a href='/projects.html'>Projects</a></li><li><a>Media</a><ul><li><a href='/music.html'>Music</a></li><li><a href='/photos.html'>Photos</a></li><li><a href='/videos.html'>Videos</a></li></ul></li><li class='about'><a href='/about'>About</a></li></ul>";
        document.getElementById("en").style.display = "block";
        document.getElementById("cns").style.display = "none";
        document.getElementById("footer").innerHTML="<span style='text-align: center; display:block; '>📅 Last Update: July 2, 2022 | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn0823 All Rights Reserved.</span>";
    } else if(document.getElementById("lang").value == "2") {
        document.title = tltle_cns + " | Quinn-Web";
        document.getElementById("list").innerHTML = "<ul><img src='/images/logo.png'/><li><a href='/'>主页</a></li><li><a href='/projects.html'>项目</a></li><li><a>媒体</a><ul><li><a href='/music.html'>音乐</a></li><li><a href='/photos.html'>照片</a></li><li><a href='/videos.html'>视频</a></li></ul></li><li class='about'><a href='/about'>About</a></li></ul>";
        document.getElementById("cns").style.display = "block";
        document.getElementById("en").style.display = "none";
        document.getElementById("footer").innerHTML="<span style='text-align: center; display:block; '>📅 最近更新：2022年7月2日 | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn0823 保留所有权利。</span>";
    }
}