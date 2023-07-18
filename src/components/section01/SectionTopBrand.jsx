import SectionTopItem from './SectionTopItem';
import TopItem01 from '../img/topitem01.png';
import TopItem02 from '../img/topitem02.png';
import TopItem03 from '../img/topitem03.png';
import TopItem04 from '../img/topitem04.png';
import TopItem05 from '../img/topitem05.png';
import TopItem06 from '../img/topitem06.png';
import TopItem07 from '../img/topitem07.png';
import TopItem08 from '../img/topitem08.png';
import TopItem09 from '../img/topitem09.png';
import TopItem10 from '../img/topitem10.png';
import TopItem11 from '../img/topitem11.png';
import TopItem12 from '../img/topitem12.png';
import TopItem13 from '../img/topitem13.png';
import TopItem14 from '../img/topitem14.png';
import TopItem15 from '../img/topitem15.png';
import styled from 'styled-components';

const TopBrand = styled.div`
    padding: 0 40px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
`;
const TitleEng = styled.div`
    font-size: 17px;
    font-weight: 700;
    color: #000;
`;
const TitleKor = styled.div`
    margin-top: 2px;
    font-size: 16px;
    color: rgba(34, 34, 34, 0.5);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 262px;
`;
const Container = styled.div`
    margin-top: 40px;
    margin-bottom: 56px;
    &:before {
        content: '';
        max-width: 1200px;
        margin: 28px auto 20px;
        display: block;
        width: 100%;
        height: 1px;
        background: #ebebeb;
    }
    max-width: 1280px;
    margin: 0 auto;
`;
const ItemWrapper = styled.div`
    display: grid;
    margin-top: 16px;

    padding: 0 40px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    row-gap: 16px;
    column-gap: 8px;
`;

function SectionTopBrand(props) {
    const items = [
        {
            src: `${TopItem01}`,
            text: '스투시',
        },
        {
            src: `${TopItem02}`,
            text: '코스',
        },
        {
            src: `${TopItem03}`,
            text: '나이키',
        },
        {
            src: `${TopItem04}`,
            text: '아이앱 스튜디오',
        },
        {
            src: `${TopItem05}`,
            text: '조던',
        },
        {
            src: `${TopItem06}`,
            text: '애플',
        },
        {
            src: `${TopItem07}`,
            text: '아미',
        },
        {
            src: `${TopItem08}`,
            text: '아디다스',
        },
        {
            src: `${TopItem09}`,
            text: '살로몬',
        },
        {
            src: `${TopItem10}`,
            text: '슈프림',
        },
        {
            src: `${TopItem11}`,
            text: '뉴발란스',
        },
        {
            src: `${TopItem13}`,
            text: '야스히로',
        },
        {
            src: `${TopItem14}`,
            text: '아크테릭스',
        },
        {
            src: `${TopItem15}`,
            text: '메종 키츠네',
        },
        {
            src: `${TopItem02}`,
            text: '아식스',
        },
    ];
    return (
        <Container>
            <div className="container">
                <TopBrand className="top_brand">
                    <div>
                        <TitleEng> Top 15 Brand </TitleEng>
                        <TitleKor> 인기 탑 15 브랜드 </TitleKor>
                    </div>
                </TopBrand>
                <ItemWrapper className="item_wrapper">
                    {items.map((item) => (
                        <SectionTopItem src={item.src} text={item.text} />
                    ))}
                </ItemWrapper>
            </div>
        </Container>
    );
}

export default SectionTopBrand;
