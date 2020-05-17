// const clockContainer = document.querySelector(".clock");
// const clockText = clockContainer.querySelector(".clock_text");

//위 코드와 같은 코드
const clockContainer = document.querySelector(".clock"),
clockText = clockContainer.querySelector(".clock_text");

console.log(clockText.innerHTML);

function getTime(){
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    //지금까진 우린 이렇게 사용했다
    // const now = hours + ":" + minutes + ":" + seconds;
    //높아진 버젼에서는 이렇게 사용한다.
    // const now = `${hours}:${minutes}:${seconds}`;
    // 위에처럼 하면 5로 나오는데 3항연산자를 쓰면서 5를 05로 나오게 하는것
    const now = 
    `${hours < 10 ? `0${hours}` : hours}:
    ${minutes < 10 ? `0${minutes}` : minutes}:
    ${seconds < 10 ? `0${seconds}` : seconds}`;
    
    
    clockText.innerHTML = now;
}

function init(){
    // 1. 시간 알아내기

    // 2. 알아낸 시간 h2태그에 그리기

    //init라는 함수를 사용함으로써 컨트롤 하면서 순서를 지정해줄수 있다.
    getTime();
    //1초마다 새로고침 해주라는 명령어
    setInterval(getTime,1000);

}



init();