
// // 在 head 加上如下代码
// window.loadingStartTime = new Date();

var $loadingBox = document.getElementById("loadingBox");
var $runner = document.getElementById("runner");
var $progress = document.getElementById("process");
var $loadingNumber = document.getElementById("loadingNumber");
var prg = 0;
var timer = 0;
var now = new Date(); // 记录当前时间
var timeout = 5000; // 超时时间
progress([80, 90], [1, 3], 100);
window.onload = () => complete();
if (now - loadingStartTime > timeout) { // 超时
  complete()
} else {
  window.setTimeout(() => { // 未超时，则等待剩余时间
    complete()
  }, timeout - (now - loadingStartTime))
}

function complete() { // 封装完成进度功能
  progress(100, [1, 5], 10, () => {
    window.setTimeout(() => {
      loadingBox.style.display = 'none';
    }, 300)
  })
}

function progress(dist, speed, delay, callback) {
  var _dist = random(dist);
  var _delay = random(delay);
  var _speed = random(speed);
  window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    if (prg + _speed >= _dist) {
      window.clearTimeout(timer);
      prg = _dist;
      callback && callback()
    } else {
      prg += _speed;
      progress(_dist, speed, delay, callback)
    }
    let loadingNumber = parseInt(prg) + '%';
    $loadingNumber.innerText = loadingNumber;
    $progress.style.width = loadingNumber;
    $runner.style.left = loadingNumber;
    console.log(prg);
  }, _delay)
}

function random(n) {
  if (typeof n === 'object') {
    var times = n[1] - n[0];
    var offset = n[0];
    return Math.random() * times + offset
  } else {
    return n
  }
}
