var frameText = "";
var frameTexts = ["подключаюсь....", "собираю данные.", "отправляю),спасибо."];
var frameIndex = 0;
var frameInterval;

function showFrame() {
  document.getElementById("frame").style.display = "block";
  frameIndex = 0;
  document.getElementById("text").textContent = frameTexts[frameIndex];
  frameInterval = setInterval(nextFrameText, 1000);
}

function hideFrame() {
  document.getElementById("frame").style.display = "none";
  clearInterval(frameInterval);
}

function nextFrameText() {
  frameIndex++;
  if (frameIndex >= frameTexts.length) {
    clearInterval(frameInterval);
    return;
  }
  document.getElementById("text").textContent = frameTexts[frameIndex];
}