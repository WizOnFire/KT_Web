import styled from 'styled-components';
import {motion}from 'framer-motion';
import colors from '../../assets/Colors';


export const UpNav = styled(motion.nav)<{isHovered:boolean,scrollY:number}>` 
    justify-content: center;
    display: flex;
    position: fixed;
    width: 100%;
    left:0px;
    top: 0;
    height: 110px;
    z-index: 101;
    gap: 40px;
    transition: color 0.3s ease-in-out;
    background-color:${({ isHovered  }) => (isHovered ? `${colors.white}` :`${colors.black}`)} ;//이 로직에서 문제가 생기는 건 확실함
    //will-change:none;
    
    a{
        color: ${({ isHovered  }) => (isHovered ? `${colors.black}` :`${colors.white}`)};//이ㅅ새끼 문제임아아
        transition: color 0.3s ease-in-out;
        left:-10px;//로고 정렬할 때 중요
        //margin-right: 10px;
    }
    a:hover{
    font-weight: 700;
    }
    a:nth-last-child(1) {
        color: red;
    } 

    a:nth-last-child(6){
        //margin-right: 123px;//로고 양옆 조절
        margin-right: 40px;
    }   
    &::after {
        content: "";
        position: absolute;
        bottom: -1.8px;
        left: 50%;
        transform: translateX(-50%);
        width: 1100px;
        //border-bottom: 2px solid white;
        border-bottom: ${({ isHovered, scrollY }) => isHovered || scrollY > 620 ? "none" : "2px solid white"};
        transition: width 0.3s ease;
        clip-path: polygon(
            0 0, 
            45.5% 0, 
            45.5% 100%, 

            54.3% 100%, 
            54.3% 0, 

            100% 0, 
            100% 100%,
             0 100%
            );
    }
    @media screen and (max-width: 808px) {
        gap:1.5%;
        //margin-top:10px;;
        //height:100px
    }
`;

export const Logo = styled.div<{isHovered:boolean}>`
    justify-content: center;
    align-items: center;
   // position: absolute;
    display: flex;
    left: 50%;
    transform: translateX(-18%);//로고 위치 중간 조정
    //top:20px;
    margin-top: 24px;
    z-index: 103;
    //pointer-events: none;//호버 이벤트 막으려고
    img {
        width: 130px;
        transition: width 0.3s ease-in-out;
        @media screen and (max-width:750px) {
            width:85px;
            transform: translateX(-12%);//로고 위치 중간 조정
    }
    }
    &:hover{
        cursor: pointer;
    }
    @media screen and (max-width:940px) {
        justify-content: center;
        transform: translateX(-17%);//로고 위치 중간 조정
        
    }
    
`;


export const Category = styled.a.attrs<{ isHovered: boolean; isActive: boolean }>((props) => ({
  isActive: props.isActive ? true : false, // 필요 시 내부적으로 처리
}))<{ isHovered: boolean; isActive: boolean }>`
  position: relative;
  font-size: 20px;
  text-decoration: none;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
  
  ${({ isActive }) => isActive && `border-bottom: 3px solid red;`}

  @media screen and (max-width: 940px) {
    font-size: 14px;
  }
`;

export const BottomNav=styled(motion.div)` 
    padding-top: 30px;
    grid-template-columns: repeat(8, 1fr);
    position: fixed;
    top: 110px;
    width: 102.1%;
    background-color: white;
    height: 220px;
    box-sizing: border-box;
    z-index: 100;
    display: flex;
    justify-content: center;
    text-align: start;
    gap: 24px;//열 간격 조정
    padding-left: 12x;
    a:hover{
    font-weight: 700;
  }
`;

export const SubCategoryColumn=styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    position:relative;
    left: -26px;
    &:hover{
        cursor: pointer;
    }
    
    &:nth-child(1){
        margin-right: 5px;
    }
    &:nth-child(2){
        margin-right: 5px;
    } 
    &:nth-child(5){
        margin-left:200px;
    } 
    &:nth-child(7){
        margin-left:10px;
    } 
`;


export const SubCategory=styled.a`
    font-size: 14px;
    color: black;
    text-decoration: none;
`;