import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    background-color: white;
`;
const Wrapper = styled.div`
    // position: absolute;
    width: 250px;
`;
const Item = styled.div`
    // position: absolute;
    width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 15px;
`;

function Hamburger({ onClick }) {
    return (
        <Container>
            <Wrapper>
                <Item>
                    <button
                        style={{
                            all: 'unset',
                            width: 30,
                            height: 30,
                            marginLeft: '200px',
                            cursor: 'pointer',
                        }}
                        onClick={onClick}
                    >
                        X
                    </button>
                </Item>

                <Item>
                    <a
                        style={{ textDecoration: 'none', color: 'black' }}
                        href={''}
                    >
                        HOME
                    </a>
                </Item>
                <hr />
                <Item>
                    <a
                        style={{ textDecoration: 'none', color: 'black' }}
                        href={''}
                    >
                        STYLE
                    </a>
                </Item>
                <hr />
                <Item>
                    <a
                        style={{ textDecoration: 'none', color: 'black' }}
                        href={''}
                    >
                        SHOP
                    </a>
                </Item>
                <hr />
                <Item>
                    <a
                        style={{ textDecoration: 'none', color: 'black' }}
                        href={''}
                    >
                        MY
                    </a>
                </Item>
                <hr />
                <Item>
                    <a
                        style={{ textDecoration: 'none', color: 'black' }}
                        href={''}
                    >
                        공지사항
                    </a>
                </Item>
                <hr />
                <Item>
                    <a
                        style={{ textDecoration: 'none', color: 'black' }}
                        href={''}
                    >
                        자주 묻는 질문
                    </a>
                </Item>
                <hr />
                <Item>
                    <a
                        style={{ textDecoration: 'none', color: 'black' }}
                        href={''}
                    >
                        로그인
                    </a>
                </Item>
            </Wrapper>
        </Container>
    );
}
export default Hamburger;
