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
