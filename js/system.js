function judgmentClient(PCurl,WebUel){
    var UserClient = navigator.userAgent.toLowerCase();
    var IsIPad = UserClient.match(/ipad/i) == "ipad";
    var IsIphoneOs = UserClient.match(/iphone os/i) == "iphone os";
    var IsMidp = UserClient.match(/midp/i) == "midp";
    var IsUc7 = UserClient.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var IsUc = UserClient.match(/ucweb/i) == "ucweb";
    var IsAndroid = UserClient.match(/android/i) == "android";
    var IsCE = UserClient.match(/windows ce/i) == "windows ce";
    var IsWM = UserClient.match(/windows mobile/i) == "windows mobile";
    if (IsIPad || IsIphoneOs || IsMidp || IsUc7 || IsUc || IsAndroid || IsCE || IsWM){
        window.location = '/m';
    } else {
        
    }
}