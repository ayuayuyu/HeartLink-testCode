const Rate = (heartRate: string) => {
  console.log("心拍数:", heartRate);
  const hr = parseInt(heartRate, 10); // 文字列を整数に変換

  if (hr > 100) {
    ChangeAnimationSpeed(0.1);
  } else if (hr > 90) {
    ChangeAnimationSpeed(0.7);
  } else if (hr > 85) {
    ChangeAnimationSpeed(1.4);
  } else if (hr > 80) {
    ChangeAnimationSpeed(2.1);
  } else if (hr > 75) {
    ChangeAnimationSpeed(2.8);
  } else if (hr > 70) {
    ChangeAnimationSpeed(3.5);
  } else {
    ChangeAnimationSpeed(4.0);
  }
};

// animation-durationを変更する関数
function ChangeAnimationSpeed(seconds: number) {
  const elements = document.querySelectorAll(
    ".animate73, .a-option73, .a-btnsub73"
  );
  elements.forEach((element) => {
    (element as HTMLElement).style.setProperty(
      "animation-duration",
      `${seconds}s`,
      "important"
    );
    (element as HTMLElement).style.setProperty(
      "-webkit-animation-duration",
      `${seconds}s`
    );
    (element as HTMLElement).style.setProperty(
      "-moz-animation-duration",
      `${seconds}s`
    );
    (element as HTMLElement).style.setProperty(
      "-o-animation-duration",
      `${seconds}s`
    );
  });
}

export default Rate;
