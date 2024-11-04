const fs = require('fs');
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, set } = require('firebase/database');

// Firebase 설정
const firebaseConfig = {
    apiKey: "AIzaSyA7J8JJh2JnX3D-ItanwKMLaXCXw7JtYKw",
    authDomain: "kt-wizonfire.firebaseapp.com",
    projectId: "kt-wizonfire",
    storageBucket: "kt-wizonfire.appspot.com",
    messagingSenderId: "450858127836",
    appId: "1:450858127836:web:181a3a7947e9c0a9cabf19",
    measurementId: "G-6JHZNDTG87"
};

// Firebase 초기화
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

async function uploadJSONData() {
    const jsonFiles = [
      // 'src/json/article/newslist-searchWord-.json',
      // 'src/json/article/newsdetail-artcSeq-190962.json',
      // 'src/json/article/newsdetail-artcSeq-190958.json',
      // 'src/json/article/newsdetail-artcSeq-190957.json',
      // 'src/json/article/newsdetail-artcSeq-190925.json',
      // 'src/json/article/newsdetail-artcSeq-190830.json',
      // 'src/json/article/newsdetail-artcSeq-190829.json',
      // 'src/json/article/newsdetail-artcSeq-190754.json',
      // 'src/json/article/newsdetail-artcSeq-190752.json',
      // 'src/json/article/newsdetail-artcSeq-190750.json',
      // 'src/json/article/newsdetail-artcSeq-190749.json',
      // 'src/json/article/newsdetail-artcSeq-190743.json',
      // 'src/json/article/newsdetail-artcSeq-190673.json',
      // 'src/json/article/newsdetail-artcSeq-190672.json',
      // 'src/json/article/newsdetail-artcSeq-190671.json',
      // 'src/json/article/newsdetail-artcSeq-190620.json',
      // 'src/json/article/newsdetail-artcSeq-190618.json',
      // 'src/json/article/newsdetail-artcSeq-190563.json',
      // 'src/json/article/newsdetail-artcSeq-190436.json',
      // 'src/json/article/newsdetail-artcSeq-190406.json',
      // 'src/json/article/newsdetail-artcSeq-190371.json',
      // 'src/json/article/newsdetail-artcSeq-190369.json',
      // 'src/json/article/newsdetail-artcSeq-190327.json',
      // 'src/json/article/newsdetail-artcSeq-190291.json',
      // 'src/json/article/newsdetail-artcSeq-190235.json',
      // 'src/json/article/newsdetail-artcSeq-190234.json',
      // 'src/json/article/newsdetail-artcSeq-190230.json',
      // 'src/json/article/newsdetail-artcSeq-190228.json',
      // 'src/json/article/newsdetail-artcSeq-190176.json',
      // 'src/json/article/newsdetail-artcSeq-190175.json',
      // 'src/json/article/newsdetail-artcSeq-190173.json',
      // 'src/json/article/wizpresslist-searchWord-.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-190975.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-190968.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-190967.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-190964.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-190961.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-190959.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-190872.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-190623.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-190444.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-190443.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-190372.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-189937.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-189558.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-189251.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-189033.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-188881.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-188615.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-188207.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-187938.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-187845.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-187765.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-187628.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-187594.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-187455.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-187410.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-187193.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-187073.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-186994.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-186852.json',
      // 'src/json/article/wizpress/wizpressdetail-artcSeq-186231.json',
      // 'src/json/player/coachlist.json',
      // 'src/json/player/catcherlist.json',
      // 'src/json/player/infielderlist.json',
      // 'src/json/player/outfielderlist.json',
      // 'src/json/player/pitcherlist.json',
      // 'src/json/player/cheerleader.json',
      // 'src/json/game/recentGames.json',
      // 'src/json/game/ktwizteamrank.json',
      // 'src/json/media/highlightlist-count-10.json',
      // 'src/json/media/photolist-count-10.json',
      // 'src/json/media/hotissue-count-10.json',
      // 'src/json/media/monthlyPlayer.json',
      // 'src/json/game/boxscore-gameDate-20241009-gmkey-33331009LGKT0.json',
      // 'src/json/game/boxscore-gameDate-20241011-gmkey-33331011KTLG0.json',
      // 'src/json/game/boxscore-gameDate-20241008-gmkey-33331008LGKT0.json',
      // 'src/json/game/boxscore-gameDate-20241006-gmkey-33331006KTLG0.json',
      // 'src/json/game/boxscore-gameDate-20241005-gmkey-33331005KTLG0.json',
      // 'src/json/game/boxscore-gameDate-20240928-gmkey-20240928WOKT0.json',
      // 'src/json/game/boxscore-gameDate-20240927-gmkey-20240927WOKT0.json',
      // 'src/json/game/boxscore-gameDate-20240924-gmkey-20240924LTKT0.json',
      // 'src/json/game/boxscore-gameDate-20240922-gmkey-20240922SKKT0.json',
      // 'src/json/game/boxscore-gameDate-20240921-gmkey-20240921SKKT0.json',
      // 'src/json/game/boxscore-gameDate-20240919-gmkey-20240919SSKT0.json',
      // 'src/json/game/boxscore-gameDate-20240918-gmkey-20240918SSKT0.json',
      // 'src/json/game/boxscore-gameDate-20240917-gmkey-20240917KTWO0.json',
      // 'src/json/game/boxscore-gameDate-20240916-gmkey-20240916HTKT0.json',
      // 'src/json/game/boxscore-gameDate-20240914-gmkey-20240914KTOB0.json',
      // 'src/json/game/boxscore-gameDate-20240912-gmkey-20240912NCKT0.json',
      // 'src/json/game/boxscore-gameDate-20240911-gmkey-20240911NCKT0.json',
      // 'src/json/game/boxscore-gameDate-20240910-gmkey-20240910NCKT0.json',
      // 'src/json/game/boxscore-gameDate-20240907-gmkey-20240907OBKT0.json',
      // 'src/json/game/boxscore-gameDate-20240906-gmkey-20240906KTNC0.json',
      // 'src/json/game/boxscore-gameDate-20240905-gmkey-20240905KTLT0.json',
      // 'src/json/game/boxscore-gameDate-20240904-gmkey-20240904KTLT0.json',
      // 'src/json/game/boxscore-gameDate-20240831-gmkey-20240831KTHH0.json',
      // 'src/json/game/boxscore.json',
      // 'src/json/game/teamrankbyyear.json',
      // 'src/json/game/rank-pitching.json',
      // 'src/json/game/rank-batting.json',
      // 'src/json/game/rank-teamvs.json',
      // 'src/json/game/rank-periodteamrank.json',
      // 'src/json/game/rank-batter-hr-top3.json',
      // 'src/json/game/rank-batter-hra-top3.json',
      // 'src/json/game/rank-batter-total-top5.json',
      // 'src/json/game/rank-crowd-gyear-2020.json',
      // 'src/json/game/rank-crowd-gyear-2021.json',
      // 'src/json/game/rank-crowd-gyear-2022.json',
      // 'src/json/game/rank-crowd-gyear-2023.json',
      // 'src/json/game/rank-crowd-gyear-2024.json',
      // 'src/json/game/rank-kt-pitcher-gyear-2019-pname--sortKey-.json',
      // 'src/json/game/rank-kt-pitcher-gyear-2020-pname--sortKey-.json',
      // 'src/json/game/rank-kt-pitcher-gyear-2021-pname--sortKey-.json',
      // 'src/json/game/rank-kt-pitcher-gyear-2022-pname--sortKey-.json',
      // 'src/json/game/rank-kt-pitcher-gyear-2023-pname--sortKey-.json',
      // 'src/json/game/rank-kt-pitcher-gyear-2024-pname--sortKey-.json',
      // 'src/json/game/rank-kt-pitcher-gyear-2024-pname--{searchTerm}-sortKey-.json',
      // 'src/json/game/rank-kt-batter-gyear-2019-pname--sortKey-.json',
      // 'src/json/game/rank-kt-batter-gyear-2020-pname--sortKey-.json',
      // 'src/json/game/rank-kt-batter-gyear-2021-pname--sortKey-.json',
      // 'src/json/game/rank-kt-batter-gyear-2022-pname--sortKey-.json',
      // 'src/json/game/rank-kt-batter-gyear-2023-pname--sortKey-.json',
      // 'src/json/game/rank-kt-batter-gyear-2024-pname--sortKey-.json',
      // 'src/json/game/rank-total-batter-gyear-2021-pname--sortKey-.json',
      // 'src/json/game/rank-total-batter-gyear-2022-pname--sortKey-.json',
      // 'src/json/game/rank-total-batter-gyear-2023-pname--sortKey-.json',
      // 'src/json/game/rank-total-batter-gyear-2024-pname--sortKey-.json',
      // 'src/json/game/rank-total-pitcher-gyear-2023-pname--sortKey-.json',
      // 'src/json/game/rank-total-pitcher-gyear-2024-pname--sortKey-.json',
      // 'src/json/game/rank-pitcher-era-top3.json',
      // 'src/json/game/rank-pitcher-total-top5.json',
      // 'src/json/game/rank-pitcher-win-top3.json',
      // 'src/json/game/rank-crowd-gyear-2019.json',
      //'src/json/game/watchpoint-gameDate-20241011-gmkey-33331011KTLG0.json'
      // 'src/json/game/watchpoint-gameDate-20241009-gmkey-33331009LGKT0.json',
      // 'src/json/game/watchpoint-gameDate-20241008-gmkey-33331008LGKT0.json',
      // 'src/json/game/watchpoint-gameDate-20241006-gmkey-33331006KTLG0.json',
      // 'src/json/game/watchpoint-gameDate-20241005-gmkey-33331005KTLG0.json',
      // 'src/json/game/watchpoint-gameDate-20240928-gmkey-20240928WOKT0.json',
      // 'src/json/game/watchpoint-gameDate-20240927-gmkey-20240927WOKT0.json',
      // 'src/json/game/watchpoint-gameDate-20240924-gmkey-20240924LTKT0.json',
      // 'src/json/game/watchpoint-gameDate-20240922-gmkey-20240922SKKT0.json',
      // 'src/json/game/watchpoint-gameDate-20240921-gmkey-20240921SKKT0.json',
      // 'src/json/game/watchpoint-gameDate-20240919-gmkey-20240919SSKT0.json',
      // 'src/json/game/watchpoint-gameDate-20240918-gmkey-20240918SSKT0.json',
      // 'src/json/game/watchpoint-gameDate-20240917-gmkey-20240917KTWO0.json',
      // 'src/json/game/watchpoint-gameDate-20240916-gmkey-20240916HTKT0.json',
      // 'src/json/game/watchpoint-gameDate-20240914-gmkey-20240914KTOB0.json',
      // 'src/json/game/watchpoint-gameDate-20240912-gmkey-20240912NCKT0.json',
      // 'src/json/game/watchpoint-gameDate-20240911-gmkey-20240911NCKT0.json',
      // 'src/json/game/watchpoint-gameDate-20240910-gmkey-20240910NCKT0.json',
      // 'src/json/game/watchpoint-gameDate-20240907-gmkey-20240907OBKT0.json',
      // 'src/json/game/watchpoint-gameDate-20240906-gmkey-20240906KTNC0.json',
      // 'src/json/game/watchpoint-gameDate-20240905-gmkey-20240905KTLT0.json',
      // 'src/json/game/watchpoint-gameDate-20240904-gmkey-20240904KTLT0.json',
      // 'src/json/game/watchpoint-gameDate-20240831-gmkey-20240831KTHH0.json',
      // 'src/json/game/allgameschedule-yearMonth-202409.json',
      // 'src/json/game/allgameschedule-yearMonth-202410.json'
      // 'src/json/game/boxscore-gameDate-20241001-gmkey-66661001SKKT0.json',
      // 'src/json/game/boxscore-gameDate-20241002-gmkey-44441002KTOB0.json',
      // 'src/json/game/boxscore-gameDate-20241003-gmkey-44441003KTOB0.json'
      
    ]; // 경로 확인

for (const file of jsonFiles) {
        try {
            const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
            // Firebase 노드 이름 생성: 파일명에서 경로를 제거하고 .json 확장자도 제거
            const fileName = file.split('/').pop().replace('.json', ''); // coachlist
              // 경로에 따른 처리 
              let newRef;
              if (file.includes('recentGames') || 
                  file.includes('ktwizteamrank') || 
                  file.includes('watchpoint') ||
                  file.includes('allgameschedule')
                ) {
                newRef = ref(database, `game/${fileName}`);
              } else if (
                file.includes('highlightlist') || 
                file.includes('photolist') || 
                file.includes('hotissue') || 
                file.includes('monthlyPlayer')
              ) {
                newRef = ref(database, `media/${fileName}`);
              } else if (
                file.includes('boxscore-gameDate') || 
                file.includes('boxscore') ||
                file.includes('teamrankbyyear') ||
                file.includes('rank-pitching') ||
                file.includes('rank-batting') ||
                file.includes('rank-teamvs') ||
                file.includes('rank-periodteamrank') ||
                file.includes('rank-batter-hr-top3') ||
                file.includes('rank-batter-hra-top3') ||
                file.includes('rank-batter-hr-top3') ||
                file.includes('rank-batter-hra-top3') ||
                file.includes('rank-crowd-gyear-2019') ||
                file.includes('rank-crowd-gyear-2020') ||
                file.includes('rank-crowd-gyear-2021') ||
                file.includes('rank-crowd-gyear-2022') ||
                file.includes('rank-crowd-gyear-2023') ||
                file.includes('rank-crowd-gyear-2024') ||
                file.includes('rank-kt-pitcher') ||
                file.includes('rank-kt-batter') ||
                file.includes('rank-total') ||
                file.includes('rank-pitcher') ||
                file.includes('rank-batter')
              ) {
                newRef = ref(database, `game/${fileName}`);
              } else {
                newRef = ref(database, `player/${fileName}`);
              }
              await set(newRef, data);
              console.log(`Uploaded ${file} successfully.`);

        } catch (error) {
            console.error(`Error uploading data from ${file}:`, error);
        }
    }
}

uploadJSONData().catch((error) => {
    console.error("Error uploading data:", error);
});
