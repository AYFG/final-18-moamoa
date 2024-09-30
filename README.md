## MOAMOA 소개
![리드미대문](https://github.com/FRONTENDSCHOOL7/final-18-moamoa/assets/118328426/e6dede76-f6d1-44f4-9a41-163d39867731)

MOAMOA는 <b>전국의 숨겨진 축제와 독특한 체험</b>을 발견할 수 있는 소셜 네트워크 서비스입니다. 이 플랫폼은 사용자들이 각지에서 열리는 문화 행사와 축제 정보를 쉽게 탐색하고, 직접 참여한 체험을 공유할 수 있는 공간을 제공합니다. MOAMOA는 사람들이 개인적인 경험을 사진, 리뷰를 통해 공유하며, 다른 이용자들과 소통할 수 있도록 도와줍니다. <br/>

MOAMOA 사용자들은 축제 또는 체험을 홍보할 수 있습니다. 회원 가입 단계에서 기업 및 기관을 선택하여 가입하면 상품 등록 권한이 생깁니다. <b>행사 운영진</b>은 직접 행사 정보를 게시할 수 있으며, <b>일반 회원</b>은 다양한 축제 소식과 참여 방법을 쉽게 접할 수 있습니다.

 ## [🚀 배포 URL](https://frontendschool7.github.io/final-18-moamoa/home)

```
테스트 계정 (관리자 ID)
ID: moa_festa@moamoa.com
PW: 13231323

테스트 계정 (사용자 ID)
ID: likefesta@test.com
PW: 123123
```   

<br/>

### 폴더 구조

<details>
<summary>📁 MOAMOA</summary>
<div markdown="1">

    📦src
	 ┣ 📂API
	 ┃ ┣ 📂Auth
	 ┃ ┣ 📂Comment
	 ┃ ┣ 📂Follow
	 ┃ ┣ 📂Image
	 ┃ ┣ 📂Post
	 ┃ ┣ 📂Product
	 ┃ ┣ 📂Profile
	 ┃ ┗ 📂Search
	 ┣ 📂Assets
	 ┃ ┣ 📂icons
	 ┃ ┗ 📂images
	 ┣ 📂Components
	 ┃ ┣ 📂Button
	 ┃ ┣ 📂Chat
	 ┃ ┣ 📂Comment
	 ┃ ┣ 📂Common
	 ┃ ┣ 📂Follow
	 ┃ ┣ 📂Header
	 ┃ ┣ 📂Modal
	 ┃ ┣ 📂Post
	 ┃ ┣ 📂Product
	 ┃ ┣ 📂Profile
	 ┃ ┣ 📂Search
	 ┃ ┣ 📂Skeleton
	 ┃ ┗ 📂Splash
	 ┣ 📂Hooks
	 ┃ ┣ 📂Auth
	 ┃ ┣ 📂Common
	 ┃ ┣ 📂Product
	 ┃ ┗ 📂Search
	 ┣ 📂Pages
	 ┃ ┣ 📂Auth
	 ┃ ┣ 📂Chat
	 ┃ ┣ 📂Follow
	 ┃ ┣ 📂Home
	 ┃ ┣ 📂Post
	 ┃ ┣ 📂Product
	 ┃ ┣ 📂Profile
	 ┃ ┣ 📂Search
	 ┃ ┗ 📂Splash
	 ┣ 📂Recoil
	 ┣ 📂Router
	 ┗ 📂Utils
  	 ┣ 📜App.css
	 ┣ 📜App.js
	 ┣ 📜GlobalStyle.jsx
	 ┣ 📜fonts.css
	 ┣ 📜index.css
	 ┣ 📜index.js
	 ┗ 📜md.md

 

    
</div>
</details>

<br/>


<br />

## 기술 스택

 <img  src="https://img.shields.io/badge/react-F8F8F8?style=for-the-badge&logo=react&logoColor=61DAFB"> <img  src="https://img.shields.io/badge/Recoil-F8F8F8?style=for-the-badge&logo=react&logoColor=3578E5"> <img  src="https://img.shields.io/badge/Styled component-F8F8F8?style=for-the-badge&logo=styledcomponents&logoColor=#DB7093">  <img src="https://img.shields.io/badge/javascript-F8F8F8?style=for-the-badge&logo=javascript&logoColor=black"> <img  src="https://img.shields.io/badge/Axios-F8F8F8?style=for-the-badge&logo=Axios&logoColor=black">

+ 코드의 일관성과 가독성을 높이기 위해 코드 형식을 자동으로 지정해주는 Prttier를 사용했습니다.   

+ 일관된 코드 스타일 유지, 잠재적인 오류 식별을 위해 ESLint를 사용했습니다.

+ 리액트의 prop drilling 문제를 해결하기 위해 상태를 유연하게 관리할 수 있는 Recoil을 사용했습니다.   

+ props를 전달하여 동적으로 스타일을 적용하는 경험을 해보고 싶어서 Styled-Components를 사용했습니다.    

+ Axios는 fetch보다 많은 기능을 지원해주고 문법이 간소화되어서 사용했습니다. XSRF Protection 보안 기능, 응답 데이터가 기본적으로 JSON 타입이라는 점, fetch처럼 객체를 문자열로 변환한 뒤 body에 할당하는 작업이 필요하지 않다는 점(자동 문자열 변환)이 장점이라 생각했습니다.

<br />

## 각 페이지 기능
|                                                스플래쉬                                                 |                                                이메일로 회원가입                                                 |                                                초기 프로필 설정                                                |
| :-----------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
| ![스플래쉬](https://github.com/FRONTENDSCHOOL7/final-18-moamoa/assets/118328426/66439cef-b9ab-4601-bb37-35d25c778743) | ![이메일로 회원가입](https://github.com/FRONTENDSCHOOL7/final-18-moamoa/assets/118328426/e8ed2baf-162f-47f0-90a5-fef8801ff107) | ![프로필설정](https://github.com/FRONTENDSCHOOL7/final-18-moamoa/assets/118328426/79749e0c-cb19-4017-bde1-21be4d52159d) |

|                                                로그인                                                 |                                                홈 화면(팔로우 하는 유저 없는 경우)                                               |                                                홈 화면(팔로우 하는 유저 있는 경우)                                                |
| :-----------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
|![이메일로 로그인](https://github.com/FRONTENDSCHOOL7/final-18-moamoa/assets/118328426/520809bd-7c46-4fa3-bf7a-f39edba5afc3)| ![홈화면팔로우없음](https://github.com/FRONTENDSCHOOL7/final-18-moamoa/assets/118328426/ab29fd41-13bf-417e-9320-4a47bb0e870b) | ![홈피드 팔로워 있음](https://github.com/FRONTENDSCHOOL7/final-18-moamoa/assets/118328426/d28d73c5-693d-44c0-8665-5f68b4aba3ef) |



|                                                 게시글 상세                                                |                                                               좋아요                                                               |                                                             댓글 더보기                                                              |
| :--------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
| ![게시물 상세](https://github.com/timetam24/FES7_api_try/assets/135303974/890b8d90-9cd6-4a70-a73f-55a204da5ba7) | ![좋아요](https://github.com/timetam24/FES7_api_try/assets/135303974/fdd34453-b996-40d4-bb38-273705bcefdc) | ![댓글 더보기](https://github.com/timetam24/FES7_api_try/assets/135303974/cb90c422-8905-4db5-bfeb-e8f6b33e1870) |

|                                                           내 프로필 페이지 (기관) - 상품 등록                                                            |                                                           내 프로필 페이지 (기관) - 상품 수정                                                            |                                                         내 프로필 페이지 (기관) - 상품 삭제                                                         |
| :------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
| ![내 프로필 페이지 (기관) - 상품 등록](https://github.com/timetam24/FES7_api_try/assets/135303974/9520fb5d-046e-4258-a269-f63795e7905b) | ![내 프로필 페이지 (기관) - 상품 수정](https://github.com/timetam24/FES7_api_try/assets/135303974/96e27e10-aa83-4400-aeb2-8a11895e1698) | ![내 프로필 페이지 (기관) - 상품 삭제](https://github.com/timetam24/FES7_api_try/assets/135303974/42c9f2ad-4224-4562-8d87-3a2d3bca8da1) |

|                                                                내 프로필 페이지 - 프로필 수정                                                                |                                                            다른 사용자 프로필 페이지 - 채팅방                                                            |                                                     다른 사용자 프로필 페이지 - 팔로우/언팔로우                                                     |
| :-------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
| ![프로필 수정](https://github.com/timetam24/FES7_api_try/assets/135303974/c44bb855-2eb8-4971-860d-b2a6a3931cf9) | ![다른 사용자 프로필 - 채팅방](https://github.com/timetam24/FES7_api_try/assets/135303974/73e5b27a-42b0-4963-ad68-46b188b3f636) | ![팔로우 언팔로우](https://github.com/timetam24/FES7_api_try/assets/135303974/900cc784-7033-443a-af35-28cc66447c65) |

|                                                          다른 사용자 프로필 페이지 - 공유하기                                                          |                                                         팔로우/팔로워 리스트                                                         |                                                            게시물 작성                                                        |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
| ![다른 사용자 프로필 페이지 - 공유](https://github.com/timetam24/FES7_api_try/assets/135303974/156f663a-68e9-419c-9a22-baa874a563cb) | ![팔로우 팔로잉 리스트](https://github.com/timetam24/FES7_api_try/assets/135303974/e9d38c9b-b70b-40f7-bc52-7e4f55e8f361)| ![게시물 작성](https://github.com/timetam24/FES7_api_try/assets/135303974/b1b539a4-6277-4d37-b1b2-4c60c8f1b65e) |

|                                                                   게시물 수정                                                                   |                                                      게시물 삭제                                                       |                                                      게시물 신고                                                      |
| :---------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
| ![게시물 수정](https://github.com/timetam24/FES7_api_try/assets/135303974/96a82175-6a58-4a96-a239-0777eb850343) | ![게시물 삭제](https://github.com/timetam24/FES7_api_try/assets/135303974/84947cc3-d475-4748-b1d9-a962d18eaf08) | ![게시물 신고](https://github.com/timetam24/FES7_api_try/assets/135303974/19dee210-4bb8-464b-8e2e-0c973978f2e4)|


|                                                                  게시글 앨범형 / 목록형                                                                   |                                                      댓글 등록                                                      |                                                      댓글 삭제                                                      |
| :---------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
| ![게시물 - 앨범형 목록형](https://github.com/timetam24/FES7_api_try/assets/135303974/d9c9183d-0743-420d-ac4f-3bc66461f1cc)| ![댓글 등록](https://github.com/timetam24/FES7_api_try/assets/135303974/5ed627fc-7fe7-435a-a314-6452c2af4565) | ![댓글 삭제](https://github.com/timetam24/FES7_api_try/assets/135303974/8b1f8f35-9e69-422f-9faa-d9b624b725ef) |

|                                                                   댓글 신고                                                                  |                                                      행사 목록                                                      |                                                      행사 상세                                                     |
| :---------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
| ![댓글 신고](https://github.com/timetam24/FES7_api_try/assets/135303974/67ae6617-373b-4ecc-b911-3e442a1a8236)| ![행사 목록](https://github.com/timetam24/FES7_api_try/assets/135303974/87039d7a-e57a-49ae-babb-1e071b9fb1f4) | ![행사 상세](https://github.com/timetam24/FES7_api_try/assets/135303974/3dd0fbb3-c799-4245-aa78-0a23b0f2176d) |


|                                                                   행사 상세 - 상품 수정                                                                  |                                                      행사 상세 - 상품 삭제                                                     |                                                      행사 상세 - 문의하기                                                    |
| :---------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
| ![행사 상세 - 상품 수정](https://github.com/timetam24/FES7_api_try/assets/135303974/9dd0e82c-e637-4c6b-9aa3-c34042800c09) | ![행사 상세 - 상품 삭제](https://github.com/timetam24/FES7_api_try/assets/135303974/3b451f95-10e5-4446-a407-f79585062b40)| ![문의하기](https://github.com/FRONTENDSCHOOL7/final-18-moamoa/assets/118328426/909c19f7-76b6-435a-b0e3-a14616d7d934) |


|                                                                   로그아웃                                                                  |                                                      채팅방                                                     |                                                      검색                                                    |
| :---------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
| ![로그아웃](https://github.com/timetam24/FES7_api_try/assets/135303974/50d4221f-a1dc-463b-8b04-cf3499e66f4f)| ![채팅](https://github.com/FRONTENDSCHOOL7/final-18-moamoa/assets/135303974/d68e5105-5fd3-4eb7-b895-2ce7237e51cc) | ![검색](https://github.com/FRONTENDSCHOOL7/final-18-moamoa/assets/118328426/44d798cd-b265-4b1b-8d64-f130ffc6a876) |

### 리팩토링

[![모아모아실행영상](https://github.com/LeeeeHaeji/Bbusuza-Coding-test/assets/116999139/9fe3f893-0e24-47bf-bdaa-a3113844d379)](https://youtu.be/0r-J16cTubE)

1. 사용자 친화적인 서비스 제공을 위해 무한스크롤 구현
2. 장소 추천 컴포넌트 추가
3. 카카오 지도 API 활용
4. 이미지 등록 시 크롭기능 추가
5. 반응형 웹 구현
6. 접근성, SEO, 성능 점수 개선

<br />


## 🎯 트러블슈팅

### 이미지의 종횡비에 따라 등록이 되지 않는 오류 <br/> 
```js
const resizeImage = async (url, maxWidth, maxHeight) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        let newWidth, newHeight;

        if (img.width > maxWidth || img.height > maxHeight) {
          const aspectRatio = img.width / img.height;

          if (aspectRatio > 1) {
            newWidth = maxWidth;
            newHeight = newWidth / aspectRatio;
          } else {
            newHeight = maxHeight;
            newWidth = newHeight * aspectRatio;
          }
        } else {
          newWidth = img.width;
          newHeight = img.height;
        }

        canvas.width = newWidth;
        canvas.height = newHeight;

        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        resolve(canvas.toDataURL('image/jpeg'));
      };

      img.src = url;
    });
  };
const resizedImageUrl = await resizeImage(reader.result, 700, 500);
```
- useImage.jsx에서 resizeImage 함수를 작성하여 해결했습니다. resizeImage 함수는 사용자가 이미지를 등록할 때 width가 700px , height가 500ox보다 큰 이미지는 캔버스를 이용해 리사이징을 하는 코드입니다.  <br/>

- resizeImage 함수를 작성하여 비율이 맞지않아 등록이 되지않는 문제를 해결하였고,리사이징이 되어 이미지의 용량도 압축되는 결과를 얻었습니다.

| 개선 전 | 개선 후 |
|---------|---------|
| ![image](https://github.com/FRONTENDSCHOOL7/final-18-moamoa/assets/88381607/2bfdc404-0c61-44c2-8200-09378c058938) | ![image](https://github.com/FRONTENDSCHOOL7/final-18-moamoa/assets/88381607/62efb06d-6530-4979-8637-6e7b3f4b00bc) |

<br/>

### 축제&체험 리스트 페이지의 성능 개선을 위한 무한스크롤 구현

- 초기에 이미지를 불러올 때의 시간을 줄여 성능을 개선하려 시도하였습니다.
```js
const [nextPage, setNextPage] = useState(4);

  const handleObserver = useCallback((entries) => {
    const [target] = entries;
    console.log(target);
    if (target.isIntersecting) {
      setNextPage((prev) => prev + 4);
    }
  });
  const observerElem = useRef(null);
  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '10px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    const element = observerElem.current;

    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleObserver]);
```
-intersection Observer API를 사용하여 화면에 제일 하단에 관찰할 요소를 넣어 감지되면 4개씩 행사를 불러오게 만들었습니다.
| 개선 전 | 개선 후 |
|---------|---------|
| ![image](https://github.com/FRONTENDSCHOOL7/final-18-moamoa/assets/88381607/ca21dfbe-7312-4ef5-bf3d-418b2a187821) | ![image](https://github.com/FRONTENDSCHOOL7/final-18-moamoa/assets/88381607/a5dff719-12a2-456d-bc06-13b5e85d7aae) |




-lighthouse 성능 측정을 하였고, 12점 향상시켰습니다.
<br />

## 협업 방법


### **Notion** [👉보러가기👈](https://www.notion.so/18-18-6c86a9d229d34412b3d9f75ed7a1315c)


![노션](https://github.com/FRONTENDSCHOOL7/final-18-moamoa/assets/135303974/c3ff20eb-caa5-48e2-b254-8e066d8f66f4) |![노션2](https://github.com/FRONTENDSCHOOL7/final-18-moamoa/assets/135303974/33d9467f-1662-4a6e-9da8-7b6018b7c210)
--- | --- | 
- 회의 전 회의록을 작성하여 계획과 일정을 미리 공유했습니다. 
- 중요 사항들을 잊지 않도록 회의록에 기록했습니다. 
- 우리가 사용하는 기술을 왜 사용하는지 명확하게 이해하기 위하여 서로 공부한 자료들을 공유하였습니다.
- 오류나 어려움을 겪은 부분은 트러블 슈팅 페이지에 기록하여 조원들과 공유하였습니다.

<br/>

### Discord

![discord](https://github.com/timetam24/Toys-that-can-be-broken/assets/135303974/26a72e1c-18f7-4817-9597-fc06c1092c43)
- 매일 아침 디스코드를 통해 데일리 스크럼을 진행했습니다.
- 작업을 진행하다가 도움이 필요한 상황, 혹은 확인이 필요한 상황이 발생하면 즉각적으로 디스코드 회의실 내 채팅방을 이용하여 문제를 겪는 부분을 실시간으로 공유하며 작업하였습니다.

<br/>

### Figma [👉보러가기👈](https://www.figma.com/file/C5Nhihukf9hNrpVaKVIBdU/%EB%AA%A8%EC%95%84%EB%AA%A8%EC%95%84%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C?type=design&node-id=0%3A1&mode=design&t=EdEEYvdQYyXLFYKf-1)
![figma](https://github.com/timetam24/Toys-that-can-be-broken/assets/135303974/5fd7271f-3ff1-4b88-ac8f-2eb231c4ea48)
- 피그마를 이용하여 디자인 작업을 하였고, API 명세와 비교를 하였습니다.
- 초반 작업은 전체적인 흐름의 이해를 위하여 작업 순서도를 그렸습니다.
- 프로젝트를 진행하면서 변수로 작용할 부분은 어디가 될지 생각하며 디자인 수정을 거쳤습니다.

<br/>

### **GitHub**

#### GitHub Project
![project](https://github.com/timetam24/Toys-that-can-be-broken/assets/135303974/27fec750-2cd3-4cc5-831d-84b9fa1bf24b)

#### GitHub issue template


<img width="778" alt="fsdfsd" src="https://github.com/timetam24/Toys-that-can-be-broken/assets/135303974/ee259aab-8202-48e0-808e-3f96e43b0d98"> |<img width="1036" alt="issue" src="https://github.com/timetam24/Toys-that-can-be-broken/assets/135303974/b5633eed-100f-454c-8d95-6820f4fbd4db">
--- | --- | 




#### GitHub PR template

<img src='https://github.com/timetam24/Toys-that-can-be-broken/assets/135303974/e422d4b3-e977-40dd-8f3f-b4d99b18e8bd'> | <img src='https://github.com/timetam24/Toys-that-can-be-broken/assets/135303974/d1a789ee-1ef1-47ce-a703-4f4d5243ad6a'>
--- | --- | 


- 효율적인 협업과 작업 품질 향상을 위하여 깃헙 Project, Issue template, PR template을 사용하였습니다.

<br />


<br/>
