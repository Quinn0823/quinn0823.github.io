/* --- 网页标题 --- */

var title_en_us = document.title
var title_zh_cn = document.title;

if (title_en_us == "Home") {
    title_zh_cn = "首页";
} else if (title_en_us == "Projects") {
    title_zh_cn = "项目";
} else if (title_en_us == "App Library") {
    title_zh_cn = "App 资源库"
} else if (title_en_us == "QuinnStandard") {
    title_zh_cn = "Quinn 标准";
}  else if (title_en_us == "Music") {
    title_zh_cn = "音乐";
} else if (title_en_us == "Lab") {
    title_zh_cn = "实验室";
} else if (title_en_us == "Website") {
    title_zh_cn = "此网站";
} else if (title_en_us == "Textbook Download Helper") {
    title_zh_cn = "教材下载助手";
} else if (title_en_us == "Digital Dot Matrix Tool") {
    title_zh_cn = "数字点阵工具";
} else if (title_en_us == "QS2023 01-E3") {
    
} else if (title_en_us == "QS2023 02") {
    
}



/* --- 页眉 --- */

// 菜单栏
var header_en_us = "<div class='list'><ul><img src='/images/favicon.png'/><li><a href=''>Home</a></li><li><a href='projects/'>Projects</a></li><li><a href='qs/'>QS</a></li><li><a href='music.html'>Music</a></li><li class='right'><a href='website.html'>Website</a></li></ul></div><h1>" + title_en_us + "</h1><hr>";
var header_zh_cn = "<div class='list'><ul><img src='/images/favicon.png'/><li><a href=''>首页</a></li><li><a href='projects/'>项目</a></li><li><a href='qs/'>标准</a></li><li><a href='music.html'>音乐</a></li><li class='right'><a href='website.html'>此网站</a></li></ul></div><h1>" + title_zh_cn + "</h1><hr>";



/*
<details><summary>Title</summary><hr><ul><li>First</li><li>Secend</li><li>Third</li></ul></details>
*/



/* --- 页脚填写部分 --- */
// 版本 Tag
var now_tag = "12.5";
var next_tag = "12.6";

// 发行内容
var now_up_en_us = "<p>Welcome! </p>";
var now_up_zh_cn = "<p>欢迎! </p>";
// 修复内容
var now_fix_en_us = "<p>Welcome! </p>";
var now_fix_zh_cn = "<p>欢迎! </p>";
// 预览内容
var next_up_en_us = "<p>Welcome! </p>";
var next_up_zh_cn = "<p>欢迎! </p>";

// 进度
var progress = 95;

// 更新时间
var up_year = "2023";
var up_month_en_us = "Sep.";
var up_month_zh_cn = "9";
var up_day = "11"

var date_en_us = up_month_en_us + " " + up_day + ", " + up_year;
var date_zh_cn = up_year + "年" + up_month_zh_cn + "月" + up_day + "日";



/* --- 页脚框架部分 --- */
// 新闻框架
var news_en_us = "<div class='lmr enlmr'><div class='left'><span>Quinn-Web " + next_tag + " - NEXT</span></div><div class='middle'><progress max='100' value='" + progress + "'></progress></div><div class='right'><span>Progress: " + progress + "%</span></div></div><details><summary>⏩ What will be updated?</summary><hr>" +next_up_en_us + "</details><hr><div class='lmr'><div class='left'><span>Quinn-Web " + now_tag + " - NOW</span></div><div class='middle'></div><div class='right'><span><a href='https://github.com/Quinn0823/quinn0823.github.io/releases/tag/" + now_tag + "' target='_blank'><i class='fa-brands fa-github'></i>Releases</a></span></div></div><details open><summary>✨ What has been update? </summary><hr>" + now_up_en_us + "</details><details open><summary>🧰 What has been repaired?</summary><hr>" + now_fix_en_us + "</details>";
var news_zh_cn = "<div class='lmr'><div class='left'><span>Quinn-Web " + next_tag + " - 下一版本</span></div><div class='middle'><progress max='100' value='" + progress + "'></progress></div><div class='right'><span>进展: " + progress + "%</span></div></div><details><summary>⏩ 即将更新</summary><hr>" + next_up_zh_cn + "</details><hr><div class='lmr'><div class='left'><span>Quinn-Web " + now_tag + " - 当前版本</span></div><div class='middle'></div><div class='right'><span><a href='https://github.com/Quinn0823/quinn0823.github.io/releases/tag/" + now_tag + "' target='_blank'><i class='fa-brands fa-github'></i>发行页</a></span></div></div><details open><summary>✨ 现已更新</summary><hr>" + now_up_zh_cn + "</details><details open><summary>🧰 现已解决</summary><hr>" + now_fix_zh_cn + "</details>";

// 联系框架
var contact = "<div class='contact'><ul><li><a href='https://github.com/Quinn0823/' target='_blank'><i class='fa-brands fa-github'></i></a></li><li><a href='mailto:quinnqiu0823@icloud.com' target='_blank'><i class='fa-solid fa-envelope'></i></a></li><li><a href='' target='_blank'><i class='fa-brands fa-x-twitter'></i></a></li><li><a href='' target='_blank'><i class='fa-brands fa-gitter'></i></a></li><li><a href='' target='_blank'><img src='/images/logos/glitch.ico' class='fa-glitch'></a></li><li class='line'></li><li><a href='' target='_blank'><i class='fa-brands fa-weixin'></i></a></li><li><a href='' target='_blank'><i class='fa-brands fa-qq'></i></a></li><li><a href='' target='_blank'><i class='fa-brands fa-weibo'></i></a></li><li><a href='' target='_blank'><i class='fa-brands fa-bilibili'></i></a></li><li><a href='' target='_blank'><i class='fa-brands fa-zhihu'></i></a></li></ul></div>";

// 页脚框架
var footer_en_us = "<hr><div id='footeri'>" + news_en_us + "<hr><div class='sel'><select id='lang' onchange='langchange()'><option value='1' selected='selected'>United States - English</option><option value='2'>简体中文 (中国大陆) </option></select></div><span style='text-align: center; display:block; '>📅 Last Update: " + date_en_us + " | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn Qiu All Rights Reserved. </span></div>"/*  + contact */;
var footer_zh_cn = "<hr><div id='footeri'>" + news_zh_cn + "<hr><div class='sel'><select id='lang' onchange='langchange()'><option value='1'>United States - English</option><option value='2' selected='selected'>简体中文 (中国大陆) </option></select></div><span style='text-align: center; display:block; '>📅 最近更新：" + date_zh_cn + " | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn Qiu 保留所有权利. </span></div>"/*  + contact */;


/* --- 浏览器检测 --- */
var userAgent = navigator.userAgent;
if (userAgent.indexOf("Firefox") > -1) {
    header_en_us = "<span class='com'>⚠️ You are using Firefox to access Quinn-Web. We highly recommend that you use <a href='https://www.google.com/chrome/' target='_blank'>Chrome</a>, <a href='https://www.microsoft.com/en-us/edge/download/' target='_blank'>Edge</a>, or <a href='https://www.apple.com/safari/' target='_blank'>Safari</a> for a better style. Although we have tried our best to adapt the CSS code of Firefox to let Quinn-Web in Firefox look similar to the others.</span>" + header_en_us;
    header_zh_cn = "<span class='com'>⚠️ 你正在使用 Firefox 访问 Quinn-Web. 我们强烈建议你使用 <a href='https://www.google.cn/chrome/' target='_blank'>Chrome</a>, <a href='https://www.microsoft.com/zh-cn/edge/download/' target='_blank'>Edge</a>, 或者 <a href='https://www.apple.com.cn/safari/' target='_blank'>Safari 浏览器</a> 以获得更好的样式. 尽管我们已经尽了最大的努力让 Quinn-Web 在 Firefox 中看起来和其他的相似. (URLs 已针对中国大陆地区做出适应性调整)</span>" + header_zh_cn;
} 


/* --- 语言设置功能 --- */
// 显示语言
function langdate() {
    if (localStorage.langdate == 2) { //Chinese
        document.title = title_zh_cn + " | Quinn-Web";

        document.getElementById("header").innerHTML = header_zh_cn;
        document.getElementById("footer").innerHTML = footer_zh_cn;

        document.getElementById("en-us").style.display = "none";
        document.getElementById("zh-cn").style.display = "inline";
    } else { //English
        document.title = title_en_us + " | Quinn-Web";

        document.getElementById("header").innerHTML = header_en_us;
        document.getElementById("footer").innerHTML = footer_en_us;

        document.getElementById("en-us").style.display = "inline";
        document.getElementById("zh-cn").style.display = "none";
    }
}

// 语言切换
function langchange() {
    if (document.getElementById("lang").value == "1") {
        localStorage.langdate = 1;
    } else if (document.getElementById("lang").value == "2") {
        localStorage.langdate = 2;
    }
    langdate();
}

langdate();