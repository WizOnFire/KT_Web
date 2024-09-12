
import { addressIcon, busIcon, ktwizMap, subwayIcon } from "../../assets/assets";
import Button from "../../components/common/button/Button";
import { Container, MapImg, TableContainer, Table, Title, ListWrapper,ButtonWrapper } from "./MapStyles";
import colors from "../../assets/Colors";






const Map = () => {
  return (
    <>
    <Container>
      <MapImg>
        <img src={ktwizMap}/>
      </MapImg>
      <TableContainer>
        <Table>
            <tr>
                <Title><img src={addressIcon}/>주소</Title>
                <td >
                    <ListWrapper>
                        <li>
                            <p>
                                <span>주소 : 경기도 수원시 장안구 경수대로 893(조원동) 수원</span>
                                <span>케이티 위즈 파크 (구 : 경기도 수원시 장안구 조원동 775)</span>
                            </p>
                        </li>
                        <a href="https://map.naver.com/p/entry/place/13491582?c=16.00,0,0,0,dh" target="_blank" rel="noopener noreferrer">
                    <Button width="90px" height="30px" borderRadius="10px" backgroundColor="red"
                        border="none" fontColor={colors.white}>
                        찾아오기
                    </Button>
                </a>
                        <span>  ※ 찾아오기 버튼을 누르시면, 출발지에서 야구장으로 가는 길을 쉽게 확인하실 수 있습니다.</span>
                    </ListWrapper>
                </td>
            </tr>
            <tr>
                <Title>
                    <img src={busIcon}/>버스
                </Title>

                <td>
                    <ButtonWrapper>
                        <Button width="60px" height="30px" fontColor={colors.white} borderRadius="20px" border="none" fontSize="14px"
                        backgroundColor={colors.green} padding="6px 18px 6px 17px">일반</Button><span> 25, 25-2, 27, 36, 55, 62-1, 99, 99-2, 300-1</span><br/>
                    </ButtonWrapper>
                   <ButtonWrapper>
                            <Button width="60px" height="30px" fontColor={colors.white}  borderRadius="20px" border="none"
                            backgroundColor={colors.green} padding="6px 18px 6px 17px">일반</Button><span> 310, 777</span><br/>
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <Button width="60px" height="30px" fontColor={colors.white}  borderRadius="20px" border="none"
                        backgroundColor={colors.redPrimary} padding="6px 18px 6px 17px">일반</Button><span> 2007,3000,7770</span><br/>
                    </ButtonWrapper>
                    
                    <ButtonWrapper>
                            <Button width="60px" height="30px" fontColor={colors.white}  borderRadius="20px" border="none"
                            backgroundColor={colors.ligthBlue} padding="6px 18px 6px 17px">일반</Button><span> 300,900</span>
                     </ButtonWrapper>

                </td>
            </tr>
            <tr>
                <Title><img src={subwayIcon}/>지하철</Title>
                <td>
                <p>화서역 하차 (택시로 10분)</p>
                <p>· 37, 39번 버스이용 수성중 사거리 하차 후 도보 3분</p>
                <p>· 55분 버스이용 종합운동장 하차 수원역하차 (택시로 20분)</p>
                <p>· 1번, 5번, 8번 버스이용 수성중 사거리 하차 후 도보 3분</p>
                </td>
            </tr>
        </Table>
      </TableContainer>
      </Container>
    </>
  );
}
export default Map