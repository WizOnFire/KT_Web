import styled from "styled-components";
import colors from "../../../assets/Colors";


const Logo = styled.img`
  width: 80px;
  height: 80px;
  z-index : 10;
`;

const EventContainer = styled.div`
  text-align: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top:-5px;
  z-index:11;
`;

export const Outcome = styled.span<{ outcome: string }>`
    width: 23px;
    height: 23px;
    font-size: 14px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

    background-color: ${({ outcome }) => {
      switch(outcome) {
        case '승': return colors.redPrimary;
        case '패': return colors.black;
        case '무': return colors.ashGray;
        case '취': return "#002060";
        default: return colors.black;
      }
    }};
    color: white;
    border-radius: 3px;
    z-index: 100;
    position: relative;
    margin-top: -7px;
    margin-left: 5px;
`;

const GInfo = styled.div`
    color: ${colors.redPrimary};
    font-size: 14px;
    margin-bottom: 5px;

    p{
        color: ${colors.black};
        margin-top: 5px;
        font-size: 12px;
    }
`;


const KtEvent = ({ event }: { event: any }) => {
  if (event) {
    console.log(event);
  }
    
    return (
      <>
      <EventContainer>
        <div style={{ marginTop: event.outcome ? '0' : '22px' }}>
        {event.home === 'KT' && event.visitLogo && (
            <Logo 
              src={event.visitLogo} 
              alt={event.visit} 
            />
        )}
        {event.home !== 'KT' && event.homeLogo && (
            <Logo 
              src={event.homeLogo} 
              alt={event.home} 
            />
        )}
          <GInfo>
            {event.gtime} {event.stadium}
            <p>{event.broadcast}</p>
          </GInfo>
          </div>
          {event.outcome && (
        <div style={{display:'flex', justifyContent:'flex-start'}}>
          <Outcome outcome={event.outcome}>
              {event.outcome}
          </Outcome>
        </div>

      )}
        </EventContainer>
        </>
    );
  };
  
  export default KtEvent;