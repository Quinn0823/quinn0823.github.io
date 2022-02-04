function GetQueryString(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r != null) {
                return  unescape(r[2]);
        }
        return null;
}
if(GetQueryString("url") == "1") {
        var url = "https://mp.weixin.qq.com/s?__biz=MzU2Njg5MjA5Nw==&mid=2247484256&idx=1&sn=66f322f24b9afef9398cdfe5ad2bed2c&chksm=fca4c04ecbd349580b9270a8854ac045a27ac4ddf721abbdaab3a6fe5ce137da9fbcc68e85d4&mpshare=1&scene=24&srcid=0315t0dEPJ5Z2fnFil2IZAUH&sharer_sharetime=1639809420021&sharer_shareid=f4051dd677a3c4edc362f8229c453858&ascene=14&devicetype=pad-android-29&version=280010e7&nettype=WIFI&lang=zh_CN&exportkey=A5neYVqfg1PRdLkaP6wVLFg%3D&pass_ticket=OZc%2Fi6lC5vwFs696xKBjJduDyQ9pclch1sw8JozGdSdmYCyk%2BKsWNDEt83Fa0JPI&wx_header=1"
}
window.location = url;