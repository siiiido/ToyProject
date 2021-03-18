// 전역변수를 많이 쓰는건  안좋다!!
(function () {
  const stageElem = document.querySelector(".stage");
  const houseElem = document.querySelector(".house");
  let maxScrollValue;
  const barElem = document.querySelector(".progress-bar");
  // 객체 만들기
  const mousePos = { x: 0, y: 0 };

  function resizeHandler() {
    // 전체 문서 높이 - 창 높이  = 전체 스크롤 할 수 있는 범위
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener("scroll", function () {
    console.log(pageYOffset); //스크롤바 y좌표를 출력
    // document.body.offsetHeight : 전체 height
    // window.innerHeight : 한 화면의 height, 즉 스크롤바의 높이임

    //   // css house의 translateZ가 -490이라서 그만큼 빼주면 스크롤해도 다음장도 멀리서부터 오게함
    //   // 1000으로 꽉 안채우고 980으로 하는것은 끝에서도 입체감 줄려고
    //   // 0~1사이로 0은 스크롤 움직임x, 1은 스크롤 움직임 끝까지 : 스크롤 움직임의 비율을 나타냄
    const scrollPer = pageYOffset / maxScrollValue;
    const zMove = scrollPer * 980 - 490;
    houseElem.style.transform = "translateZ(" + zMove + "vw)";

    // progress bar
    barElem.style.width = scrollPer * 100 + "%";
  });

  window.addEventListener("mousemove", function (e) {
    // 이거에 따라 벽의 움직이는 위치가 바뀜
    // e.clientX,e.clientY : 마우스 위치를 나타낸 것
    // 계산식을 알아두기 mousemove할 때 굉장히 많이 사용
    mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
    mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;

    // stageElem를 회전시켜야 벽과 캐릭터가 둘다 움직이는 것 처럼 보임
    stageElem.style.transform =
    // x축을 기준으로 회전시킬 땐 y를 회전시키고
    // y축을 기준으로 회전시킬 땐 x를 회전시켜야함
      "rotateX(" + mousePos.y * 5 + "deg) rotateY(" + mousePos.x * 5 + "deg)";
  });

  // 창 사이즈 바꿔도 거기에 맞게 대응할려고
  // resize는 함수로 만들어서 사용
  window.addEventListener("resize", resizeHandler);

  stageElem.addEventListener("click", function (e) {
    new Character({
      xPos: (e.clientX / window.innerWidth) * 100,
    });
  });
  resizeHandler();

 
})();
