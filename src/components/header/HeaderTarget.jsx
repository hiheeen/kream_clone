import A from '../a/A';
import styled from 'styled-components';
import Li from '../li/Li';

const StyledSpan = styled.span`
    font-size: 16;
    line-height: 1.25;
`;
const StyledUl = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    & > *:not(:first-child) {
        margin-left: 27px;
    }
    width: 1200px; /////////도대체 왜 max-width를 1280으로 해놓고 패딩을 양옆40씩 줬는데 대체 왜 총 width가 1360이 되버리냐고
    padding-left: 40px;
    padding-right: 40px;
    margin-left: auto;
    margin-right: auto;
    height: 44px;
`;
const lists = [
    {
        text: '산산기어',
        href: '/exhibitions/1423?tab=home_special_sansan',
    },
    {
        text: '추천',
        href: '/?tab=home_recommendation',
    },
    { text: '랭킹', href: '/?tab=home_ranking' },
    { text: '남성', href: '/?tab=home_men' },
    { text: '여성', href: '/?tab=home_women' },
    { text: '발견', href: '/?tab=home_discovery' },
];
function HeaderTarget(props) {
    return (
        <div>
            <nav>
                <StyledUl>
                    {lists.map((list) => (
                        <Li
                            children={
                                <A
                                    style={{
                                        paddingTop: 15,
                                        paddingBottom: 6,
                                        display: 'flex',
                                        height: '100%',
                                    }}
                                    href={list.href}
                                    children={
                                        <StyledSpan style={{ fontSize: 16 }}>
                                            {list.text}
                                        </StyledSpan>
                                    }
                                />
                            }
                        />
                    ))}
                </StyledUl>
            </nav>
        </div>
    );
}
export default HeaderTarget;

{
    /* <Li
                        children={
                            <A
                                children={
                                    <StyledSpan
                                        style={{ color: 'rgb(65, 61, 238)' }}
                                    >
                                        발견
                                    </StyledSpan>
                                }
                            />
                        }
                    />
                    <Li
                        children={
                            <A children={<StyledSpan>추천</StyledSpan>} />
                        }
                    />
                    <Li
                        children={
                            <A children={<StyledSpan>랭킹</StyledSpan>} />
                        }
                    />
                    <Li
                        children={
                            <A children={<StyledSpan>남성</StyledSpan>} />
                        }
                    />
                    <Li
                        children={
                            <A children={<StyledSpan>여성</StyledSpan>} />
                        }
                    />
                    <Li
                        children={
                            <A children={<StyledSpan>발견</StyledSpan>} />
                        }
                    /> */
}
