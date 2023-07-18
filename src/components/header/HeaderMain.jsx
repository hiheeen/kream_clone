import React, { useState } from 'react';
import A from '../a/A';
import styled from 'styled-components';
import HeaderMainNav from './HeaderMainNav';
import { useMediaQuery } from 'react-responsive';
import Hamburger from '../responsive/Hamburger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faMagnifyingGlass,
    faBell,
} from '@fortawesome/free-solid-svg-icons';

<FontAwesomeIcon icon="fa-regular fa-magnifying-glass" />;
const StyledH1 = styled.h1`
    display: block;
    font-size: 2em;
    margin: 0;
    padding: 0;
    font-weight: bold;
`;
const Wrapper = styled.div`
    display: flex;
    max-width: 1280px;

    min-width: 320px;
    padding: 20px 40px;
    align-items: center;
    justify-content: space-between;
`;
// const StyledImg = styled.div`
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-image: url('https://i.namu.wiki/i/8lMDM6LGz9RVqvR2VSNKAzzJViwI-T6iZGpL0-99iPG-lSlbDsFIXvMRetG8Vipfg2GYmYZ9Fx7PDo2VIYA84fxKvcWsUoPIxrWbljdCIw0geltaWDQRzUPAGqsZo18-MYsZcafTv6opPtoPMLsG6g.webp');
// `;

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
`;
const MobileNav = styled.div`
    align-items: center;
    justify-content: space-between;
    display: flex;
    margin-left: 20px;
    height: 24px;
    width: fit-content;
`;
function HeaderMain({ onClick }) {
    const DeskTop = () => {
        const isDeskTop = useMediaQuery({ query: '(min-width:769px)' });
        return isDeskTop ? <HeaderMainNav /> : null;
    };
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ query: '(max-width : 768px)' });
        return isMobile ? children : null;
    };

    return (
        <Container>
            <Wrapper>
                <StyledH1>
                    <A
                        href="https://kream.co.kr/"
                        style={{
                            display: 'flex',

                            width: 120,
                            height: 24,
                            overFlow: 'hidden',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundImage:
                                "url('https://i.namu.wiki/i/8lMDM6LGz9RVqvR2VSNKAzzJViwI-T6iZGpL0-99iPG-lSlbDsFIXvMRetG8Vipfg2GYmYZ9Fx7PDo2VIYA84fxKvcWsUoPIxrWbljdCIw0geltaWDQRzUPAGqsZo18-MYsZcafTv6opPtoPMLsG6g.webp')",
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg"></svg>
                    </A>
                </StyledH1>
                {/* <HeaderMainNav
                style={width ? { display: 'flex' } : { display: 'none' }}
            /> */}
                <DeskTop />
                <Mobile>
                    <MobileNav>
                        <button
                            style={{
                                all: 'unset',
                                width: 24,
                                height: 24,
                            }}
                        >
                            <A
                                href={
                                    'https://kream.co.kr/?tab=home_recommendation'
                                }
                            >
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                    style={{ fontSize: 24 }}
                                />
                            </A>
                        </button>
                        <button
                            style={{
                                all: 'unset',
                                width: 24,
                                height: 24,
                                marginLeft: 20,
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faBell}
                                style={{ fontSize: 24 }}
                            />
                        </button>
                        <button
                            onClick={onClick}
                            style={{
                                all: 'unset',
                                width: 24,
                                height: 24,
                                marginLeft: 20,
                                zIndex: 1000,
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faBars}
                                style={{ fontSize: 24, zIndex: 900 }}
                            />
                        </button>
                    </MobileNav>
                </Mobile>
            </Wrapper>
        </Container>
    );
}
export default HeaderMain;
