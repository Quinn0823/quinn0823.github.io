document.write("<textarea id='text_box'></textarea>");

function copyInput(inputText) { 
    var text = document.getElementById("text_box");
    text.value = inputText;
    text.select();//选中文本
    document.execCommand("copy");
    copyAlert(inputText);
}

function copyElement() {
    // var text = document.getElementById("text").innerHTML;
    // var input = document.getElementById("input");
    // input.value = text;
    // input.select();//选中文本
    // document.execCommand("copy");
    // alert("Copied!");
}

function copyAlert(textCopy) {
    if(localStorage.langdate == 2) {
        alert("\"" + textCopy + "\" 已被复制!");
    } else {
        alert("\"" + textCopy + "\" has been copied!");
    }
}