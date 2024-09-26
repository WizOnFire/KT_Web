
</br>

## 💡 프로젝트 소개

#### ㅣ한눈에 펼쳐지는 KT Wiz의 모든 정보, 리뉴얼 된 웹사이트!

#### ㅣ최신 경기와 소식을 더 빠르고 편리하게 만나보세요!

## </br></br> 🥎 1팀_ WizOnFire 프로젝트 

<br/>

**새롭게 업데이트 된 KT Wiz 정보 페이지, React + Typescript로 만나보세요!** 

<br/>

 KT Wiz의 새로운 웹사이트는 감각적인 디자인과 향상된 UI로, <br/>
 
야구단의 최신 경기 정보부터 선수 및 코칭 스태프 소식까지 더욱 편리하고 직관적으로 제공하는 플랫폼입니다. 
</br></br></br>

## 💡주요 기능 소개

✨ **랜딩페이지 -** 직관적인 UI/UX로 사용자가 쉽게 탐색할 수 있는 메인 화면

⚾ **정규리그 -** 실시간 데이터 업데이트를 통해 지난 경기와 오늘의 경기 정보를 제공

🧢 **코칭스텝 -** 선수 및 응원단의 정보와 함께 상세 페이지 제공

📰 **최신뉴스 -** 팀 관련 소식 및 업데이트를 신속하게 확인 가능

🔎 **검색기능 -** 원하는 정보나 선수를 빠르게 찾을 수 있는 검색 기능 제공

💭 **스켈레톤 UI -** 데이터 로딩 중에도 일관된 사용자 경험을 위한 스켈레톤 UI 구현

</br></br>

## ⚙️ 프로젝트 설치 방법

> 클론 방법

`git clone https://github.com/WizOnFire/KT_Web`

> 프로젝트 설치

`npm install`

> 프로젝트 실행

`npm run dev`

</br></br>

## 🔗 배포 URL 바로가기

> [배포주소]( wizonfire-publish.vercel.app/)



</br></br>

## 🪃 개요 및 기술스택 소개

<table>
    <tr>
        <th>프로젝트 명</th>
        <td>React로 KTwiz 정보제공 페이지 만들기</td>
        <th>개발기간</th>
        <td>2024/09/02 ~ 2024/09/26</td>
    </tr>
    <tr>
        <th>프로젝트 개요</th>
        <td colspan="3"> 야구구단 웹사이트</td>
    </tr>
    <tr>
        <th>개발인원</th>
        <td colspan="3">팀/ 4인 </td>
    </tr>
    <tr>
        <th>개발언어</th>
        <td colspan="3">TypeScript (React 기반)</td>
    </tr>
     <tr>
        <th>Frontend</th>
        <td colspan="3"> React (build : vite / version : 18.3.1 / port :5173)</td>
    </tr>
    <tr>
        <th>IDE</th>
        <td colspan="3">VSCode</td>
    </tr>
    <tr>
        <th>Language</th>
        <td colspan="3">React, TypeScript</td>
    </tr>
     <tr>
        <th>형상관리</th>
        <td colspan="3">Git (Notion을 통한 문서화 / Slack을 통한 회의)</td>
    </tr>
</table>

</br>

## 🪛 포함된 라이브러리 

해당 프로젝트에서 사용한 라이브러리는 :  

- tanstack-table: 테이블 라이브러리
- recharts: 차트 라이브러리
- framer-motion : 애니메이션 라이브러리
- lottie-web : 로딩 애니메이션 라이브러리
- moment : 날짜와 시간 (자바스크립트) 라이브러리
- react-big-calendar : 캘린더 라이브러리
- zustand: 상태 관리 라이브러리
- react-loading-skeleton : 스켈레톤 라이브러리
- react-icons : 아이콘 라이브러리
- swiper: 슬라이더/캐러셀 라이브러리

</br></br>

## 🧗 **참여인원**

| 이름   |  파트  | 역할                                                                                          |
| ------ | :----: | --------------------------------------------------------------------------------------------- |
| 👧🏻 [김진주](https://github.com/jinjukimink) |   FE   | [공통] Header, pageLocation 컴퍼넌트 / park 찾아오기 페이지 / <br> 코칭스텝(선수(투수,타자)/응원단) api데이터 패치 / 스켈레톤 UI          |
| 👧🏻 [박지은](https://github.com/jieunpark626) |   FE   | [공통] 버튼 / 입력창 컴퍼넌트 / 구단B.I 및 소개 / <br> 정규리그(경기일정 / 관전포인트)  api데이터 패치 / 스켈레톤 UI   |
| 🧔🏻‍♂️ [박준규](https://github.com/1dontknowwhatyouwant) |   FE   | [공통] 사이드바 컴퍼넌트 / 수원 ktwiz park / wiz 뉴스                                |
| 👧🏻 [윤수인](https://github.com/ddu2ni) |   FE   | [공통] 버튼, Pagination, Footer 컴퍼넌트 / 랜딩페이지 / <br> 정규리그 (박스스코어 / 순위기록  (팀, 투수, 타자, 관중) api데이터 패치 / 스켈레톤 UI   |

</br></br>

## 📂 디렉토리 구조

```
wizonfire
├── .github
├── node_modules
├── public
├── src
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── layouts
│   ├── lottie
│   ├── pages
│   ├── router
│   ├── server
│   ├── stores
│   ├── types
│   ├── utils
│   ├── App.tsx
│   ├── GlobalStyles.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```




