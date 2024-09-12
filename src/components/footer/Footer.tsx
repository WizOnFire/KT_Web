
import { logo_ko, facebook, instagram, naver, youtube } from "../../assets/assets"
import { FooterContainer, FooterBox, Logo, Info, InfoDetail, InfoNetwork, StyledLi } from "./FooterStyles"
import { RxGithubLogo } from "react-icons/rx";
import SelectBar from "../common/selectbar/SelectBar";
import { FaAngleDown } from "react-icons/fa6";
import Button from "../common/button/Button";
import ktwizBtn from "../../assets/images/landing/ktwizBtn.png"

const Footer = () => {

  const snsIcons = [
    {src: instagram, href: "https://www.instagram.com/ktwiz.pr/" ,alt: "Instagram" },
    { src: facebook, href: "https://www.facebook.com/ktwiz", alt: "Facebook" },
    { src: youtube, href: "https://www.youtube.com/c/ktwiztv", alt: "YouTube" },
    { src: naver, href: "https://tv.naver.com/ktwiz", alt: "Naver" }
  ];

  const options = [
    { label: 'KT estate', url: "https://www.ktestate.com/" },
    { label: 'KT telecom', url: "https://www.kttelecop.co.kr/" },
    { label: 'KT sat', url: "https://www.ktsat.com/mainPage.do" },
    { label: 'KT engineering', url: "https://www.ktengineering.co.kr/" },
    { label: 'KT is', url: "https://www.ktis.co.kr/main.kt" },
    { label: 'KT cs', url: "https://www.ktcs.co.kr/main.do" },
    { label: 'KT m&s', url: "https://www.ktmns.com/" },
    { label: 'KT linkus', url: "https://www.ktlinkus.com/" },
    { label: 'KT ds', url: "https://www.ktds.com/index.jsp" },
    { label: 'KT NexR', url: "https://www.ktnexr.com/" },
    { label: 'INITECH', url: "https://www.initech.com/html/index.html" },
    { label: 'kt M mobile', url: "https://www.ktmmobile.com/main.do" },
    { label: 'kt alpha', url: "https://www.ktalpha.com/index" },
    { label: '지니뮤직', url: "https://www.geniemusic.co.kr/main/index.do" },
    { label: 'nasmedia', url: "https://www.nasmedia.co.kr/" },
    { label: 'KT 닷컴', url: "https://www.kt.com/" },
    { label: 'KT Shop', url: "https://shop.kt.com/main.do" },
    { label: 'kt commerce', url: "https://www.ktcommerce.co.kr/login.jsp" },
    { label: 'KT 동우회', url: "https://www.ktdw.co.kr/" },
    { label: '인재채용', url: "https://recruit.kt.com/" },
    { label: 'KT 파트너포탈', url: "https://partner.kt.com/" },
  ];
  
  return (
    <FooterContainer>
      <FooterBox>
        <Logo src={logo_ko} alt="Logo_kor" />
        <Info>
          <ul>
            <StyledLi>
              <a href="https://github.com/WizOnFire/KT_Web" target="_blank">
                <RxGithubLogo />
              </a>
            </StyledLi>
            <li>개인정보 처리방침</li>
            <li>이용약관</li>
            <li>이메일무단수집거부</li>
            <li>Sitemap</li>
          </ul>
          <InfoDetail>
            <p>대표번호</p>
            <div>
              <span className="tel">1899-5916</span>
              <span className="timeInfo">운영시간 : 평일 10:00 ~ 18:00 / 주말 10:00 ~ 경기시작 전까지</span>
              <span className="timeInfo">월요일 및 주말 미경기 시 미운영</span>
            </div>
          </InfoDetail>
          <InfoDetail>
            <p>주소</p>
            <div>
              <span className="address">경기도 수원시 장안구 경수대로 (조원동) 수원 케이티 위즈파크</span>
            </div>
          </InfoDetail>
          <p>Copyright 2024 kt sports. All rights reserved.</p>
        </Info>
        <div>
            <SelectBar 
            items={options} 
            placeholder="KT 그룹사 및 관련사이트" 
            width="300px"
            height="40px"
            containerBorder="1px solid rgba(0, 0, 0, .3)"
            containerBorderRadius="7px"
            containerPadding="13px 16px"
            labelPadding="0"
            labelTextSize="13px"
            textAlign="left"
            itemListBorder="0"
            itemListBorderRadius="16px"
            itemListPadding="7px 15px"
            maxHeight="120px"
            boxShadow="0 4px 6px rgba(0, 0, 0, .16)"
            itemTextSize="12px"
            itemPadding="8px 0"
            buttonIcon={FaAngleDown}/>
            <InfoNetwork>
            <ul>
              {
                snsIcons.map((icon, index)=>(
                  <li key={index}>
                    <a href={icon.href}><img src={icon.src} alt={icon.alt}/></a>
                  </li>
                ))
              }
            </ul>
            <a href="http://kt-sports.co.kr/sports/site/main.do" target="_blank" >
              <Button
                width="90px" height="40px" 
                borderRadius="10px" 
                border="none"
                hoverColor="colors.ashGray"
                >
                  <img src={ktwizBtn} alt="button" style={{width:"70px", height:"auto"}}/>
              </Button>  
            </a>
          </InfoNetwork>
        </div>
      </FooterBox>
    </FooterContainer>
  );
}

export default Footer;
