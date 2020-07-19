const body = document.querySelector("body"),
//바디를 통째로 가져왓다.
    locationText = document.querySelector(".location_text");

const API_KEY = "_pkUCI7LAjzg9bPUtZ4q2SeAOKKTmqIeLwI3xD2gCag";
//이 위에껀 인터넷에 있는 https://unsplash.com/oauth/applications/135638 이 사이트에 있는 엑셉트 키값
const IMAGEURL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&orientation=landscape&query=landscape`;
//https://unsplash.com/documentation 여기서 Authorization 이쪽 두번째 있는것
//그리고 중간에 랜덤이란것은 겟어 랜덤 포토에서 저런식으로 쓰라고 나옴
//orientation=landscape이건 사이즈
//query=coding 코딩에 관한 사진만 나온다.

function saveBackGround(url, city, country, name){

    //저장하기 전에 전에 있던거 지우고 저장한다.
    const savedImage = localStorage.getItem("background");
    if(savedImage !== null){
        localStorage.removeItem("background");
    } 

    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1 );

    const imageObject = {
        url: url,
        expireDate: expireDate,
        city: city,
        country: country,
        name: name
    };
    localStorage.setItem("background",JSON.stringify(imageObject));

}


function getBackGround(){
    //fetch도 ajax랑 같은 기능
    //다른점은 제이퀴리 기반 ajax, 자바스크립트 기반 fetch
    //API URL로 요청하고 반환 받아서 저장하고 localStorage에 저장하고
    //fetch는 api를 가져오는 메서드
// fetch(IMAGEURL)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(myJson) {
//         console.log(JSON.stringify(myJson.urls.full));
//     });

//제이슨으로 불러오는방법
fetch(IMAGEURL)
//.then = 성공 했다면이라고 해석 가능
//=>함수는 버젼이 올라가면서 생김 왼쪽것을 오른쪽에 담는용도
    .then(response => response.json())
    .then(json => {
        const image = json;
        console.log(image);
            if(image.urls && image.urls.full && image.location.city && image.location.country &&  image.location.name){
                //image.urls == true가 기본적으로 생략되어 있음
                //내가 필요한것만 불러올때
            const full = image.urls.full;
            const city = image.location.city;
            const country = image.location.country;
            const name = image.location.name;
            //저장된 사진url과 도시이름과 나라이름과 name을 localStorage에 자장 해야겠다.
            saveBackGround(full, city, country, name);
        }else{
            //만약에 실패하면 다시 요청한다.
            getBackGround();
        }
    });
        
    }



function loadBackground(){
    //저장된 키값은 변경될 일이 없고 다시 선언되지 않아야 하므로
    //상수인 const로 선언합니다.
    const savedImage = localStorage.getItem("background");
    if(savedImage === null){
        //로컬 스토리지에 백그라운드라는 키값을 가진 벨류가 없는 조건
        //얻어오면 된다.
        getBackGround();
    }else{
        // console.log(savedImage.city);
        //이렇게 콘솔에 찍으면 안나온다 이유는 스트링화 되어 있기 때문에 제이슨으로 파싱을 한번 더 해줘야 나온다.
        const parsedImageObject = JSON.parse(savedImage);
        console.log(parsedImageObject.city);
        //로컬 스토리지에 백그라운드라는 키값을 가진 벨류가 있는조건
        //그려주면 된다.

        //오늘 날짜를 일단 불러오고
        const today = new Date();
        if(today > parsedImageObject.expireDate){
            //유통기한을 오늘 날짜 +1 저장해놓고 
            //불러올때 유통기한이 오늘보다 작다면 다시 요청
            getBackGround();
        }else{
            body.style.background=`url(${parsedImageObject.url})`;
            locationText.innerHTML = `${parsedImageObject.name}, ${parsedImageObject.city}, ${parsedImageObject.country}`
        }
        
        //불러올때 유통기한이 남았으면 그냥 받아온값 본다.
    }
}




function init(){
    loadBackground();
    
}

init();