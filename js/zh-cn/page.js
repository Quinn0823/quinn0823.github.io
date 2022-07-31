var title = document.title;
document.title = title + " | Quinn-Web";
document.getElementById("header").innerHTML = "<div class='list'><ul><img src='/images/logo.png'/><li><a href='/zh-cn/index.html'>首页</a></li><li><a href='/zh-cn/projects.html'>项目</a></li><li><a href='/zh-cn/media.html'>媒体</a><ul><li><a href='/zh-cn/media/music.html'>音乐</a></li><li><a href='/zh-cn/media/photos.html'>照片</a></li><li><a href='/zh-cn/media/videos.html'>视频</a></li></ul></li><li class='about'><a href='/zh-cn/about.html'>关于</a></li></ul></div><h1>" + title + "</h1><hr />";
document.getElementById("footer").innerHTML = "<div class='sel'><select id='lang' onchange='langchange(); language()'><option value='1'>United States - English</option><option value='2' selected='selected'>简体中文（中国大陆）</option></select></div><span style='text-align: center; display:block; '>📅 最近更新：2022年7月23日 | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " 邱琦轩 保留所有权利。</span>";

var path = window.location.pathname;
path = path.substring(6);

function langchange() {
    if(document.getElementById("lang").value=="1") {
        window.location = "/en-us" + path;
    } else if(document.getElementById("lang").value == "2") {
        window.location = "/zh-cn" + path;
    }
}