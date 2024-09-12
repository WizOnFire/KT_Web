type THotIssue = {
    artcContents: string;
    artcTitle : string;
    imgFilePath : string;
    viewCnt : number;
}

type TGameData = {
    "displayDate"?: string;
    "game"?: string;
    "gameDate"?: number;
    "gday"?: number;
    "gmkey"?: string;
    "gmonth"?: number;
    "gtime"?: string;
    "gyear"?: string;
    "home"?: string;
    "homeFullname"?: string;
    "homeKey"?: string;
    "homeStarter"?: string;
    "matchTeamCode"?: string;
    "matchTeamName"?: string;
    "outcome"?: string;
    "stadium"?: string;
    "stadiumKey"?: string;
    "status"?: string;
    "visit"?: string;
    "visitFullname"?: string;
    "visitKey"?: string;
    "visitStarter"?: string;
    "visitScore"?: number,
    "homeScore"?: number,
    "homeLogo"?: string,
    "visitLogo"?: string,
}

type TGameResponse  = {
    data: {
        current : TGameData;
        next : TGameData;
        prev : TGameData;
    }
}

type TRanking = {
    "data": {
        "ktWizTeamRank": {
            "game": number,
            "gyear": string,
            "rank": number,
            "rankName?": string,
            "teamCode?": string,
            "teamName?": string,
            "wldName": string,
            "wra": string,
        }
    }
}

type THighLight= {
    "artcNextSeq": number,
    "artcPrevSeq": number,
    "artcSeq":  number,
    "artcTitle": string,
    "boardCatSeq": number,
    "boardCode":  string,
    "contentsDate": string,
    "delYn": string,
    "imgFilePath": string,
    "refSeq":  number,
    "regDttm":  number,
    "regr": string,
    "totalPage":  number,
    "updDttm":  number,
    "updr": string,
    "useYn": string,
    "videoLink": string,
    "viewCnt": number,
}

type THighLightResponse = {
    data: {
        list: THighLight[];
    }
}