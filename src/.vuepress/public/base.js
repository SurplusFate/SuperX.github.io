// 随机一言
var hitokoto = document.getElementsByClassName("footer")[0];
if (hitokoto != undefined) {
  var xhr = new XMLHttpRequest();
  xhr.open("get", "https://v1.hitokoto.cn");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText);
      hitokoto.innerText = data.hitokoto + "  --" + data.from;
    }
  };
  xhr.send();
}
