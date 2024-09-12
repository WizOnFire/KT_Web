// MapStyles.ts
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MapImg = styled.div`
    bottom: 10px;
    margin-bottom: 50px;
    img {
        margin-top: 50px;
        height: auto;
    }
`;

export const TableContainer = styled.div`
    display: contents;
    height: auto;
`;

export const Table = styled.tbody`
    border-collapse: collapse;

    td {
        font-size: 15px;
        border: 1px solid black; /* 테두리 설정 */
        padding: 10px;
        line-height: 24px;
        padding-left: 40px;
        padding-top: 25px;
        padding-bottom: 25px;
        width: 870px;
        border: 0.5px solid #cfcfcf;
    }

    th {
        background-color: #f2f2f2;
        padding: 10px;
        border: 0.5px solid #cfcfcf;
    }

    p, span {
        line-height: 1.66;
        font-size: 14.5px;
        font-weight: 400;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        color: #5b5a5a;
        margin-block-start: 0;
        margin-block-end: 0.2em;
    }

    /* 첫 번째 행 전체에 빨간색 경계선을 추가 */
    tr:first-child th, tr:first-child td {
        border-top: 2px solid red;
    }
`;

export const Title = styled.th`
    font-size: 15px;
    border: 1px solid black; /* 테두리 설정 */
    padding: 10px;
    line-height: 24px;
    padding-left: 40px;
    padding-top: 25px;
    color: black;
    width: 153px;
    height:122px;

    img {
        position: relative;
        top: 5px;
        margin-right: 4px;
    }
`;

export const ButtonWrapper=styled.div`
    margin-bottom: 2px;
`;

export const ListWrapper = styled.ul`
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    unicode-bidi: isolate;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
`;
