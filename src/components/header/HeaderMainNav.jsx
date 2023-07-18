import styled from 'styled-components';
import A from '../a/A';

const StyledLi = styled.li`
    margin: 0;
    padding: 0;
    margin-right: 40px;
    list-style: none;
`;
const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-inline-start: 40px;
}
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`;
const Container = styled.div`
    display: flex;
    min-width: 120px;
    flex-shrink: 0;
    justify-content: flex-end;
`;
function HeaderMainNav(props) {
    return (
        <Container>
            <Wrapper>
                <nav>
                    <StyledUl>
                        <StyledLi>
                            <A
                                children={'HOME'}
                                href={'https://kream.co.kr/'}
                                style={{
                                    position: 'relative',
                                    display: 'flex',
                                    fontSize: 18,
                                    letterSpacing: -0.27,
                                    color: 'black',
                                }}
                            />
                        </StyledLi>
                        <StyledLi>
                            <A
                                children={'STYLE'}
                                href={
                                    'https://kream.co.kr/social/tabs/style_discovery'
                                }
                                style={{
                                    position: 'relative',
                                    display: 'flex',
                                    fontSize: 18,
                                    letterSpacing: -0.27,
                                    color: 'black',
                                }}
                            />
                        </StyledLi>
                        <StyledLi>
                            <A
                                children={'SHOP'}
                                href={'https://kream.co.kr/search'}
                                style={{
                                    position: 'relative',
                                    display: 'flex',
                                    fontSize: 18,
                                    letterSpacing: -0.27,
                                    color: 'black',
                                }}
                            />
                        </StyledLi>
                    </StyledUl>
                </nav>
                <div>
                    <A
                        href={'https://kream.co.kr/exhibitions/1423'}
                        style={{
                            backgroundImage:
                                'url("https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-15.png")',
                            overFlow: 'hidden',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            width: 24,
                            height: 24,
                            textDecoration: 'none',
                            display: 'inherit',
                        }}
                    ></A>
                </div>
            </Wrapper>
        </Container>
    );
}
export default HeaderMainNav;

// margin-block-start: 1em;
// margin-block-end: 1em;
// margin-inline-start: 0px;
// margin-inline-end: 0px;
