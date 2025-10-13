// 1월부터 12월까지의 추천 시장 데이터 정의 (데이터는 기존과 동일)
const marketData = [
    { month: 1, title: "1월의 시장: 통인시장", image: "market-1.jpg", reason: "새해 복을 기원하며 기름떡볶이와 엽전 도시락을 즐길 수 있는 특별한 경험." },
    { month: 2, title: "2월의 시장: 남대문 시장", image: "market-2.jpg", reason: "설 명절을 맞아 활기가 넘치고, 다양한 먹거리와 의류를 저렴하게 구입하기 좋습니다." },
    { month: 3, title: "3월의 시장: 광장시장", image: "market-3.jpg", reason: "봄이 시작되는 길목에서 빈대떡과 마약김밥으로 허기를 달래기 좋은 곳입니다." },
    { month: 4, title: "4월의 시장: 제주 동문시장", image: "market-4.jpg", reason: "제주도의 신선한 해산물과 특산물을 만나볼 수 있으며, 봄꽃 여행에 제격입니다." },
    { month: 5, title: "5월의 시장: 망원 시장", image: "market-5.jpg", reason: "가정의 달, 젊은 감각과 전통이 공존하는 곳에서 다양한 분식을 경험해 보세요." },
    { month: 6, title: "6월의 시장: 서문 시장", image: "market-6.jpg", reason: "대구의 대표 시장으로, 특히 무더위가 시작될 때 시원한 칼국수가 일품입니다." },
    { month: 7, title: "7월의 시장: 부산 국제시장", image: "market-7.jpg", reason: "휴가철, 영화 '국제시장'의 배경지를 거닐며 역사의 흔적과 활기찬 분위기를 느낄 수 있습니다." },
    { month: 8, title: "8월의 시장: 경동 시장", image: "market-8.jpg", reason: "삼계탕 재료 등 한약재와 건강식품이 풍부하여 무더위를 이겨낼 활력을 얻을 수 있습니다." },
    { month: 9, title: "9월의 시장: 정선 5일장", image: "market-9.jpg", reason: "가을 추수를 앞두고 강원도의 청정한 농산물과 특색 있는 산나물을 만나볼 수 있는 시골 장터." },
    { month: 10, title: "10월의 시장: 전주 남부시장", image: "market-10.jpg", reason: "한옥마을과 함께 야시장이 열려 가을밤의 낭만을 즐기며 다양한 길거리 음식을 맛볼 수 있습니다." },
    { month: 11, title: "11월의 시장: 신포 국제시장", image: "market-11.jpg", reason: "찬 바람이 불 때, 닭강정과 쫄면 등 인천의 명물을 즐기기에 최적입니다." },
    { month: 12, title: "12월의 시장: 모란 시장", image: "market-12.jpg", reason: "연말 분위기 속에서 각종 씨앗, 화훼, 잡화 등 없는 게 없는 5일장의 매력을 느낄 수 있습니다." },
];

document.addEventListener('DOMContentLoaded', () => {
    const monthSelector = document.querySelector('.month-selector');
    const marketDetails = document.getElementById('marketDetails');
    const defaultMessage = document.querySelector('.default-message');
    const marketTitle = document.getElementById('marketTitle');
    const marketImage = document.getElementById('marketImage');
    const marketReason = document.getElementById('marketReason');
    
    const contentSections = document.querySelectorAll('.content-section');
    const pageLinkButtons = document.querySelectorAll('.page-link');


    // 1. 페이지 전환 핵심 함수
    function switchPage(targetId) {
        // 모든 섹션을 숨김
        contentSections.forEach(section => {
            section.classList.add('hidden-page');
        });

        // 목표 섹션만 보이도록 설정
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden-page');
            window.scrollTo(0, 0); // 새 페이지 로드 후 스크롤 최상단으로 이동
        }
    }
    
    // 페이지 로드 시 홈 화면만 보이도록 초기 설정
    switchPage('home-section');


    // 2. 버튼 클릭 이벤트 (페이지 전환)
    pageLinkButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            if (targetId) {
                switchPage(targetId);
            }
        });
    });


    // 3. 월별 버튼 동적 생성 및 이벤트 리스너 추가 (시장 정보 로드)
    marketData.forEach(data => {
        const button = document.createElement('button');
        button.textContent = `${data.month}월`;
        button.classList.add('month-btn');
        button.dataset.month = data.month;

        button.addEventListener('click', () => {
            displayMarketInfo(data);
            
            // 모든 버튼에서 active 클래스 제거 후, 클릭된 버튼에만 추가
            document.querySelectorAll('.month-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
        
        monthSelector.appendChild(button);
    });

    // 4. 시장 정보 표시 함수 (기존 기능 유지)
    function displayMarketInfo(data) {
        defaultMessage.classList.add('hidden');
        marketDetails.classList.remove('hidden');

        marketTitle.textContent = `${data.month}월의 추천 시장: ${data.title.split(': ')[1]}`;
        marketImage.src = data.image;
        marketImage.alt = `${data.title} 이미지`;
        marketReason.innerHTML = `<strong>추천 이유:</strong> ${data.reason}`;
    }
});
