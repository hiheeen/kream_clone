import React, { useState } from 'react';
import HeaderMain from '../components/header/HeaderMain';
import HeaderTop from '../components/header/HeaderTop';
import HeaderTarget from '../components/header/HeaderTarget';
import Hamburger from '../components/responsive/Hamburger';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    // background-color: ${({ isView }) => (isView ? 'rgba(0,0,0,0.5)' : null)};
    // display: ${({ isView }) => (isView ? 'block' : 'none')};
`;
const OverLay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
    display: none;
    transition: opacity 0.3s ease-in-out;
`;
const OverLayIsOpen = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
    display: block;
    transition: opacity 0.3s ease-in-out;
`;

function Header() {
    const [isView, setIsView] = useState(false);
    // const [isMobile, setIsMobile] = useState('width : 768')
    const onClick = () => {
        isView ? setIsView(false) : setIsView(true);
    };
    // const Closed = () => {
    //     const isMobile = useMediaQuery({ query: '(max-width : 768px)' });
    //     isMobile ? setIsView(false) : null;
    // };
    // Closed();

    const Mobile = () => {
        const isMobile = useMediaQuery({ query: '(max-width : 768px)' });

        return isMobile ? null : <HeaderTop />;
    };
    const DeskTop = () => {
        const isDeskTop = useMediaQuery({ query: '(min-width : 769px)' });
        isDeskTop && setIsView(false);
    }; //useMediaQuery는 콜백함수로서 쓰일 수 없다. 즉, DeskTop함수를 호출하면 안의 useMediaQuery가 콜백으로서
    // 불리는데 그게 불가능한 것. useMediaQuery는 width값을 true/false로 반환해주는 훅으로,
    // 사용하려면 함수컴포넌트 안에 넣어서 렌더링에 반영하면 된다. 그 위치가 어디든 상관없다. 마치 오버레이가 그런것처럼!

    return (
        <Container>
            {isView ? <OverLayIsOpen /> : <OverLay />}
            {isView ? <Hamburger onClick={onClick} /> : null}
            <DeskTop />
            <Mobile />
            <HeaderMain onClick={onClick} />
            <HeaderTarget
                style={{
                    maxWidth: 1280,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            />
        </Container>
    );
}
export default Header;
