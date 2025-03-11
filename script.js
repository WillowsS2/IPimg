// 외부 IP 주소를 가져오는 함수
async function fetchPublicIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('IP 주소 가져오기 실패:', error);
        return null;
    }
}

// IP 주소를 이미지로 보여주는 함수
function displayIPAsImage(ip) {
    const canvas = document.getElementById('ipCanvas');
    const ctx = canvas.getContext('2d');

    // 배경색 설정
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 텍스트 색상 및 스타일 설정
    ctx.font = '24px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    // IP 주소 출력
    ctx.fillText(ip, 10, 10);

    // IP 주소를 텍스트로도 출력
    document.getElementById('ipText').innerText = `${ip}`;
}

// IP 주소를 가져와 이미지로 보여주기
fetchPublicIP().then(ip => {
    if (ip) {
        displayIPAsImage(ip);
    } else {
        document.getElementById('ipText').innerText = 'IP 주소 가져오기 실패';
    }
});
