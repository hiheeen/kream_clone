import styled from 'styled-components';
import Category01 from '../img/category01.png';
import Category02 from '../img/Category02.png';
import Category03 from '../img/Category03.png';
import Category04 from '../img/Category04.png';
import Category05 from '../img/Category05.png';
import Category06 from '../img/Category06.png';
import Category07 from '../img/Category07.png';
import Category08 from '../img/Category08.png';
import Category09 from '../img/Category09.png';
import Category10 from '../img/Category10.png';
const StyleImg = styled.img`
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    // margin: 0;
    // padding: 0;
`;
const Wrapper = styled.div`
    padding-left: 40px;
    padding-right: 40px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;

    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-row-gap: 16px;

    grid-column-gap: 8px;
`;
const Container = styled.div`
    margin-top: 40px;
    margin-bottom: 56px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
    height: 268px;
`;
const Item = styled.div`
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin: 0;
    padding: 0;
    // width: 234px;
    height: 130px;
    // overflow: hidden;
`;
const SmallItem = styled.div`
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 100px;
    // overflow: hidden;
    text-align: center;
    margin: 0;
    padding: 0;
    border-radius: 10px;
`;
const P = styled.p`
    margin: 0;
    padding: 0;
    font-size: 15px;
    letter-spacing: -0.15px;
    color: #333;
    margin-top: 8px;
`;
function SectionCategory(props) {
    return (
        <Container className="container">
            <Wrapper className="wrapper">
                <Item>
                    <SmallItem>
                        <StyleImg alt="" src={Category01}></StyleImg>
                        <P>6월 리뷰 이벤트</P>
                    </SmallItem>
                </Item>
                <Item>
                    <SmallItem>
                        <StyleImg alt="" src={Category02}></StyleImg>
                        <P>셀럽픽</P>
                    </SmallItem>
                </Item>
                <Item>
                    <SmallItem>
                        <StyleImg alt="" src={Category03}></StyleImg>
                        <P>남성 추천</P>
                    </SmallItem>
                </Item>
                <Item>
                    <SmallItem>
                        <StyleImg alt="" src={Category04}></StyleImg>
                        <P>여성 추천</P>
                    </SmallItem>
                </Item>
                <Item>
                    <SmallItem>
                        <StyleImg alt="" src={Category05}></StyleImg>
                        <P>이주의 브랜드</P>
                    </SmallItem>
                </Item>
                <Item>
                    <SmallItem>
                        <StyleImg alt="" src={Category06}></StyleImg>
                        <P>정가 아래</P>
                    </SmallItem>
                </Item>
                <Item>
                    <SmallItem>
                        <StyleImg alt="" src={Category07}></StyleImg>
                        <P>인기 럭셔리</P>
                    </SmallItem>
                </Item>
                <Item>
                    <SmallItem>
                        <StyleImg alt="" src={Category08}></StyleImg>
                        <P>장마 준비</P>
                    </SmallItem>
                </Item>
                <Item>
                    <SmallItem>
                        <StyleImg alt="" src={Category09}></StyleImg>
                        <P>6월혜택모음</P>
                    </SmallItem>
                </Item>
                <Item>
                    <SmallItem>
                        <StyleImg alt="" src={Category10}></StyleImg>
                        <P>무조건 포인트!</P>
                    </SmallItem>
                </Item>
            </Wrapper>
        </Container>
    );
}
export default SectionCategory;
