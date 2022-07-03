document.getElementById("sel").innerHTML="<hr /><div class='sel'><select id='lang' onchange='langchange(); language()'><option value='1'>English</option><option value='2'>简体中文</option></select></div>"

var path = window.location.pathname;
var title_en = "Oops! We haven't written the code for this page yet.", title_cns = "糟糕！我们还没有敲到这个页面的代码。";
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
        document.getElementById("footer").innerHTML = "<span style='text-align: center; display:block; '>Quinn-Web 12 language settings currently only support each independent page, and cannot achieve language unification across pages. We are trying to achieve language unification of settings by creating separate pages, just like Quinn-Web v1.0. <hr />📅 Last Update: July 3, 2022 | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn All Rights Reserved.</span>";
    } else if(document.getElementById("lang").value == "2") {
        document.title = title_cns + " | Quinn-Web";
        document.getElementById("header").innerHTML = "<div class='list'><ul><img src='/images/logo.png'/><li><a href='/'>主页</a></li><li><a href='/projects.html'>项目</a></li><li><a href='/media.html'>媒体</a><ul><li><a href='/media/music.html'>音乐</a></li><li><a href='/media/photos.html'>照片</a></li><li><a href='/media/videos.html'>视频</a></li></ul></li><li class='about'><a href='/about.html'>About</a></li></ul></div><h1>" + title_cns + "</h1><hr />";
        document.getElementById("cns").style.display = "block";
        document.getElementById("en").style.display = "none";
        document.getElementById("footer").innerHTML = "<span style='text-align: center; display:block; '>Quinn-Web 12 语言设置目前仅支持各个独立页面，无法实现跨页面语言统一。我们正在尝试通过创建单独的页面来实现设置的语言统一，就像 Quinn-Web v1.0 一样。<br />100% 由人工翻译，可能会出现错误或翻译遗漏的问题，建议你访问英文页面，尽请谅解！<hr />📅 最近更新：2022年7月3日 | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " 邱琦轩 保留所有权利。</span>";
    }
}