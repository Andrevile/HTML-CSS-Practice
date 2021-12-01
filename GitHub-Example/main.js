(function (window, document) {
  "use strict"; //엄격한 자바스크립트 문법으로 시작하겠다는 뜻

  const $toggles = document.querySelectorAll(".toggle"); //토글이란 클래스를 가지고 있는 모든 요소 Nodelist <-유사배열
  const $toggleBtn = document.getElementById("toggle-btn");
  const toggle = document.querySelector(".toggle");
  $toggleBtn.addEventListener("click", function () {
    toggleElements();
  }); //클릭 이벤트가 감지되면 함수 실행

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) {
      offElements();
    }
  }); //윈도우에 resize이벤트가 발생할 때, 함수 실행

  function toggleElements() {
    let totalHeight = 0;
    [].forEach.call($toggles, function (toggle) {
      console.log(window.getComputedStyle(toggle).maxHeight);
      const ElementHeight = window.getComputedStyle(toggle).maxHeight;
      if (ElementHeight !== "0px") {
        // offElements();

        toggle.style.maxHeight = "0px";
      } else {
        toggle.style.maxHeight = toggle.scrollHeight + 10 + "px";
        // toggle.classList.toggle("on"); //실행되면 on이라는 클래스를 붙임
        // console.log(toggle.style);
      }
      // const prevHeight = toggle.style;
      // console.log(getComputedStyle(toggle).getPropertyValue("max-height"));
      // console.log(this);
      // console.log(toggle.classList);
    }); //유사배열을 진짜 배열과 연결
  }

  function offElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.remove("on"); //실행되면 on이라는 클래스를 지움
    }); //유사배열을 진짜 배열과 연결
  }
})(window, document); //전체의 영역을 더럽힐 수 있기 때문에 구분화 모듈화
