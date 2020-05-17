//로그인 하면 세션에 올린다.
//로컬스트리지에 이름을 올릴거다(개발자모드 어플리테이션에서 볼수 있음)

const nameContainer = document.querySelector(".myName");

function drawName(name){
    //매개변수로 네임을 가져온다.
    //개발자 모드 어플리케이션 로칼스테이지에 들어온 키값과 벨류값을 불러오는 펑션 
    nameContainer.innerHTML = "";
    //위에껏을 아에 지웠다 
    const drawName = document.createElement("span");
    drawName.className = "name_text";
    drawName.innerHTML = `Hello ${name} !`;
    nameContainer.appendChild(drawName);
}



function handleSubmit(event){
    //이벤트 버블이 발생하는것을 방지하기 위해 매개변수를 쓰고 preventDefault이걸 썻다.
    //강아지 펜스 쳐놓은 것처럼 나가지 못하게
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const name = input.value;
    //이것을 써야지 내가 입력한 값이(input안에 있는) 보내진다.
    console.log(name);
    //보내주는것 (키값과 벨류값)
    //어디에 보내지나 개발자모드 어플리케이션 로칼 스테이지에 저장
    localStorage.setItem("username", name);
    drawName(name);
}

function drowInput(){
    //처음온놈의 이름을 물어보는 디브를 만들것이다.
    const input = document.createElement("input");
    input.type = "text";
    input.className = "input_name";
    input.placeholder = "Type your name here!";


    const form = document.createElement("form");

    //예전에는 이렇게 써왔다. -> 이것이 콜백함수
    //이것을 많이 쓰면 난잡해진다. 그래서 밖으로 빼서 관리한다.
    //그래서 handleSubmit 이 펑션을 만듬 
    // form.addEventListener("submit" , function(){
    //     input.value = "이벤트 일어났어요";
    // })
    form.addEventListener("submit",handleSubmit);
    form.appendChild(input);
    
    //네임컨테이너에 인풋을 자식으로 붙여준다.
    nameContainer.appendChild(form);
}

function checkName(){
    //키값으로 가져 오는거다(불러오는거) 
    const name = localStorage.getItem("username");
    if(name == null){
        //이놈은 처음 온놈
        //이름을 물어보고 
        drowInput();
        //username이라는 키값으로 받은 이름을 저장하고
        
        // innerHTML로 그 이름을 보여준다.

    }else{
        //이놈은 왔던놈
        drawName(name);
        //username 키값으로 저장된 이름을 가져 와서 innerHTML로 보여준다.
    }
}


function init(){
    checkName();

}


init();