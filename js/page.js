document.getElementById("sel").innerHTML="<hr /><div class='sel'><select id='lang' onchange='langchange(); language()'><option value='1'>English</option><option value='2'>简体中文</option></select></div>"

var path = window.location.pathname;
var title_en, title_cns;
if (path == "/" || path == "/index.html") {
    title_en = "✨ Preparing for Quinn-Web 12 ✨";
    title_cns = "✨ 正在为 Quinn-Web 12 做准备 ✨";
}

langchange();
function langchange() {
    if(document.getElementById("lang").value=="1") {
        document.title = title_en + " | Quinn-Web";
        document.getElementById("header").innerHTML = "<div class='list'><ul><img src='/images/logo.png'/><li><a href='/'>Home</a></li><li><a href='/projects.html'>Projects</a></li><li><a href='/media.html'>Media</a><ul><li><a href='/media/music.html'>Music</a></li><li><a href='/media/photos.html'>Photos</a></li><li><a href='/media/videos.html'>Videos</a></li></ul></li><li class='about'><a href='/about.html'>About</a></li></ul></div><h1>" + title_en + "</h1><hr />";
        document.getElementById("en").style.display = "block";
        document.getElementById("cns").style.display = "none";
        document.getElementById("footer").innerHTML="<span style='text-align: center; display:block; '>Because of technical reasons, Quinn-Web 12 can't adapt to phones as well as <a href='/web_history/v10.0' target='_blank'>Quinn-Web v10.0</a>. We are working on solving this problem. <hr />📅 Last Update: July 2, 2022 | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn0823 All Rights Reserved.</span>";
    } else if(document.getElementById("lang").value == "2") {
        document.title = title_cns + " | Quinn-Web";
        document.getElementById("header").innerHTML = "<div class='list'><ul><img src='/images/logo.png'/><li><a href='/'>主页</a></li><li><a href='/projects.html'>项目</a></li><li><a href='/media.html'>媒体</a><ul><li><a href='/media/music.html'>音乐</a></li><li><a href='/media/photos.html'>照片</a></li><li><a href='/media/videos.html'>视频</a></li></ul></li><li class='about'><a href='/about.html'>About</a></li></ul></div><h1>" + title_cns + "</h1><hr />";
        document.getElementById("cns").style.display = "block";
        document.getElementById("en").style.display = "none";
        document.getElementById("footer").innerHTML="<span style='text-align: center; display:block; '>由于技术原因，Quinn-Web 12 不能像 <a href='/web_history/v10.0' target='_blank'>Quinn-Web v10.0</a> 一样很好地适应手机。我们正着力于解决这个问题。<hr />📅 最近更新：2022年7月2日 | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn0823 保留所有权利。</span>";
    }
}