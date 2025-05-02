let capture;

function setup() {
  // 設定畫布為全螢幕大小
  createCanvas(windowWidth, windowHeight);
  
  // 設定背景顏色為 #F7CAC9
  background('#F7CAC9');
  
  // 初始化攝影機，設定影像大小為視窗寬高的 80%
  let videoWidth = windowWidth * 0.8;
  let videoHeight = windowHeight * 0.8;
  capture = createCapture(VIDEO);
  capture.size(videoWidth, videoHeight);
  capture.hide(); // 隱藏原始的攝影機影像
}

function draw() {
  // 繪製背景
  background('#F7CAC9');
  
  // 將攝影機影像繪製在畫布中央
  let x = (width - capture.width) / 2;
  let y = (height - capture.height) / 2;
  image(capture, x, y, capture.width, capture.height);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}
