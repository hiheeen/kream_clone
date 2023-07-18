import A from '../a/A';
import styled from 'styled-components';
const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
    box-sizing: border-box;
    font-family: Pretendard Variable, Pretendard, -apple-system,
        BlinkMacSystemFont, system-ui, Segoe UI, Roboto, Ubuntu, Cantarell,
        Noto Sans, sans-serif, Helvetica Neue, Apple SD Gothic Neo, Noto Sans KR,
        Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-feature-settings: 'frac' 0, 'numr' 0;
`;
const Wrapper = styled.div`
    display: flex;
    padding: 8px 40px 0;
    height: 22px;
    box-sizing: border-box;
    justify-content: right;
    // margin-left: auto;
    // margin-right: auto;
`;
const StyledUl = styled.ul`
    margin: 0;
    display: flex;
    align-items: center;

    padding: 0;
`;
const StyledLi = styled.li`
    margin-left: 24px;
    text-align: -webkit-match-parent;
    list-style: none;
`;
function HeaderTop(props) {
    return (
        <Container>
            <Wrapper>
                <StyledUl>
                    <StyledLi>
                        <A
                            href={'https://kream.co.kr/notice'}
                            children={'고객센터'}
                            style={{
                                textDecoration: 'none',
                                fontSize: 12,
                                letterSpacing: -0.06,
                                color: 'rgba(34,34,34,.8)',
                            }}
                        />
                    </StyledLi>
                    <StyledLi>
                        <A
                            href={'https://kream.co.kr/login?returnUrl=%2Fmy'}
                            children={'마이페이지'}
                            style={{
                                fontSize: 12,
                                letterSpacing: -0.06,
                                color: 'rgba(34,34,34,.8)',
                            }}
                        />
                    </StyledLi>
                    <StyledLi>
                        <A
                            href={
                                'https://kream.co.kr/login?returnUrl=%2Fsaved'
                            }
                            children={'관심상품'}
                            style={{
                                fontSize: 12,
                                letterSpacing: -0.06,
                                color: 'rgba(34,34,34,.8)',
                            }}
                        />
                    </StyledLi>
                    <StyledLi>
                        <A
                            href={
                                'https://kream.co.kr/?utm_source=google&utm_medium=cpc&utm_campaign=NEW_%EC%9E%90%EC%82%AC%EB%AA%85_PC_B&utm_term=KREAM&utm_content=A.%20%EC%9E%90%EC%82%AC%EB%AA%85#notifications'
                            }
                            children={'알림'}
                            style={{
                                fontSize: 12,
                                letterSpacing: -0.06,
                                color: 'rgba(34,34,34,.8)',
                            }}
                        />
                    </StyledLi>
                    <StyledLi>
                        <A
                            href={'https://kream.co.kr/login'}
                            children={'로그인'}
                            style={{
                                fontSize: 12,
                                letterSpacing: -0.06,
                                color: 'rgba(34,34,34,.8)',
                            }}
                        />
                    </StyledLi>
                </StyledUl>
            </Wrapper>
        </Container>
    );
}
export default HeaderTop;
