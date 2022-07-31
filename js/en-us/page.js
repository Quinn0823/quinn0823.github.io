var title = document.title;
document.title = title + " | Quinn-Web";
document.getElementById("header").innerHTML = "<div class='list'><ul><img src='/images/logo.png'/><li><a href='/en-us/index.html'>Home</a></li><li><a href='/en-us/projects.html'>Projects</a></li><li><a href='/en-us/media.html'>Media</a><ul><li><a href='/en-us/media/music.html'>Music</a></li><li><a href='/en-us/media/photos.html'>Photos</a></li><li><a href='/en-us/media/videos.html'>Videos</a></li></ul></li><li class='about'><a href='/en-us/about.html'>About</a></li></ul></div><h1>" + title + "</h1><hr />";
document.getElementById("footer").innerHTML = "<div class='sel'><select id='lang' onchange='langchange(); language()'><option value='1' selected='selected'>United States - English</option><option value='2'>简体中文（中国大陆）</option></select></div><span style='text-align: center; display:block; '>📅 Last Update: July 23, 2022 | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn All Rights Reserved.</span>";

var path = window.location.pathname;
path = path.substring(6);

function langchange() {
    if(document.getElementById("lang").value=="1") {
        window.location = "/en-us" + path;
    } else if(document.getElementById("lang").value == "2") {
        window.location = "/zh-cn" + path;
    }
}