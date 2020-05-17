// const, let 는 영향을 미칠수 있는 공간은 블록({이 안을 블록이라고 한다.})
// const는 파이널과 같다 선언하면 바꿀수 없다
// let는 바뀔수 있지만 블록안에서만 쓸수 있다.
// var는 전역에서 영향을 미치기때문에 만약 위어서 선언한 변수명과 같은
// 변수명으로 선언했다면 그 변수의 값은 달라진다. 그래서 효율성이 좋지 않다.

const hello = document.querySelector("h1");
// h1태그들만 건들것이다 즉 이것은 바뀌지 않을것이니 컨스트로 찍었다
console.log(hello);
// 출력값 <h1></h1>

// console.der(hello);
// 출력값 h1
// 화살표를 펼칠수 있게 되어있다 그걸 내리면 키값과 벨류값이 나온다.
// json 자바 스크립트 오브젝트 노테이션이다. 

hello.style.color = "white";
hello.className = "prac";
hello.innerHTML = "연습입니다.";




