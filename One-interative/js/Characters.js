function Character(info){
  this.mainElem = document.createElement("div");
  this.mainElem.classList.add("character");
  this.mainElem.innerHTML=''
        + '<div class="character-face-con character-head">'
            + '<div class="character-face character-head-face face-front"></div>'
            + '<div class="character-face character-head-face face-back"></div>'
        + '</div>'
        + '<div class="character-face-con character-torso">'
            + '<div class="character-face character-torso-face face-front"></div>'
            + '<div class="character-face character-torso-face face-back"></div>'
        + '</div>'
        + '<div class="character-face-con character-arm character-arm-right">'
            + '<div class="character-face character-arm-face face-front"></div>'
            + '<div class="character-face character-arm-face face-back"></div>'
        + '</div>'
        + '<div class="character-face-con character-arm character-arm-left">'
            + '<div class="character-face character-arm-face face-front"></div>'
            + '<div class="character-face character-arm-face face-back"></div>'
        + '</div>'
        + '<div class="character-face-con character-leg character-leg-right">'
            + '<div class="character-face character-leg-face face-front"></div>'
            + '<div class="character-face character-leg-face face-back"></div>'
        + '</div>'
        + '<div class="character-face-con character-leg character-leg-left">'
            + '<div class="character-face character-leg-face face-front"></div>'
            + '<div class="character-face character-leg-face face-back"></div>'
        + '</div>';


        document.querySelector('.stage').appendChild(this.mainElem);

        // 클릭한 위치에 생성되게하는 ,
        this.mainElem.style.left = info.xPos + '%';
        // 스크롤 중인지 아닌지 체크하는 것
        this.scrollState =false; //스크롤 아닌 상태
        this.init();
}

// // prototype복습 !!
// // 첫번째 방법
// Character.prototype.xxx=function(){
//
// };
// // 두번째 방법 둘 다 알고 있기 !!
// Character.prototype={
//   constructor:Character,
//   xxx:function(){
//
//   }
// };


Character.prototype = {
  constructor : Character,
  init:function(){

    // self를 쓰는 이유는   window.addEventListener('scroll',function()안에서
    // this써서 add해주면 에러 why?
    // window쓰니깐 window전역 객체 mainElem에 접근하는 것이라서
    // 함수 밖에서 this를 변수에 넣어서 함수 안에서 사용하기
    const self = this;
    window.addEventListener('scroll',function(){

      if(!self.scrollState){
        self.mainElem.classList.add('running');
      }

      self.scrollState = setTimeout(function(){
        self.scrollState = false;
        self.mainElem.classList.remove('running');
      },500);

    });
  }
};
