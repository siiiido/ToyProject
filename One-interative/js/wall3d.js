// 전역변수를 많이 쓰는건  안좋다!!
(function (){

  const stageElem = document.querySelector('.stage');
  const houseElem = document.querySelector('.house');
  let maxScrollValue;
  const barElem = document.querySelector('.progress-bar');
  const mousePos = {x:0, y:0};

  function resizeHandler(){
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener('scroll',function(){
    // console.log(pageYOffset); //스크롤바 y좌표를 출력
    // console.log(maxScrollValue);
    // console.log(pageYOffset/maxScrollValue);

    // css house의 translateZ가 -490이라서 그만큼 빼주면 스크롤해도 다음장도 멀리서부터 오게함
    // 1000으로 꽉 안채우고 980으로 하는것은 끝에서도 입체감 줄려고
    const scrollPer = pageYOffset/maxScrollValue ;
    const zMove = scrollPer * 980 - 490;
    houseElem.style.transform = 'translateZ(' + zMove + 'vw)';


    // progress bar
    barElem.style.width = scrollPer * 100 + "%";
  });

  window.addEventListener("mousemove",function(e){
    // 이거에 따라 벽의 움직이는 위치가 바뀜
    mousePos.x = -1 +  (e.clientX / window.innerWidth)*2;
    mousePos.y = 1 - (e.clientY / window.innerHeight)*2;
    stageElem.style.transform = 'rotateX('+ (mousePos.y * 5) +'deg) rotateY(' + (mousePos.x * 5) + 'deg)';
  });

  window.addEventListener('resize',resizeHandler);

  stageElem.addEventListener('click',function(e){

    new Character({
      xPos: e.clientX / window.innerWidth * 100
    });

  });
  resizeHandler();

})();
