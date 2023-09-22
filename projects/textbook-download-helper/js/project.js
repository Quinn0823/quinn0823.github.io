function getQueryString(name) {
    var url_string = document.getElementById("url_i").value;
    var url = new URL(url_string);
    return url.searchParams.get(name);
}
function output() {
    if(document.getElementById("url_i").value.indexOf("contentId") == -1) {
        if(localStorage.langdate == 2) {
            alert("URL必须包含 \"contentId\"!");
        } else {
            alert("The URL must include \"contentId\"!");
        }
    } else {
        document.getElementById('url_o_en').href = "https://r1-ndr.ykt.cbern.com.cn/edu_product/esp/assets_document/" + getQueryString("contentId") + ".pkg/pdf.pdf";

        document.getElementById('url_o_en').innerText = "Click here to download.";
        
        document.getElementById('url_o_cns').href = "https://r1-ndr.ykt.cbern.com.cn/edu_product/esp/assets_document/" + getQueryString("contentId") + ".pkg/pdf.pdf";

        document.getElementById('url_o_cns').innerText = "单击以下载.";
    }
}