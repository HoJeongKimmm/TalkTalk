document.addEventListener('DOMContentLoaded', function() {
    // 로그인 상태 확인
    if (localStorage.getItem('email')) {
        // 로그인 상태라면 "My Page" 버튼 표시
        const signinElement = document.querySelector('.signin');
        if (signinElement) {
            const myPageElement = document.createElement('a');
            myPageElement.href = 'mypage.html';
            myPageElement.className = 'mypage';
            myPageElement.textContent = 'My Page';
            signinElement.parentNode.replaceChild(myPageElement, signinElement);
        }
    }
});

function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const queryArray = queryString.split('&');
    queryArray.forEach(function(param) {
        const [key, value] = param.split('=');
        params[key] = decodeURIComponent(value);
    });
    return params;
}

// 언어별 게시판 제목 설정
function setBoardTitle(lang) {
    const boardTitle = document.getElementById('board-title');
    switch (lang) {
        case 'english':
            boardTitle.textContent = 'Welcome to the English Board';
            break;
        case 'chinese':
            boardTitle.textContent = '欢迎来到中文板块';
            break;
        case 'japanese':
            boardTitle.textContent = '日本語の掲示板へようこそ';
            break;
        case 'spanish':
            boardTitle.textContent = 'Bienvenido al tablero en español';
            break;
        default:
            boardTitle.textContent = 'Welcome to the Board';
    }
}

// 쿼리 파라미터를 가져와서 제목 설정
const params = getQueryParams();
if (params.lang) {
    setBoardTitle(params.lang);
}

// 샘플 HTML 페이지로 이동하는 함수
function navigateToSample(id) {
    const basePath = 'file:///Users/kimhojeong/Documents/GitHub/TalkTalk/';
    window.location.href = `${basePath}sample.html?id=${id}`;
}