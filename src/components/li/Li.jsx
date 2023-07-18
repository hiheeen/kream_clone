import styled from 'styled-components';
const StyledLi = styled.li`
    margin: 0;
    padding: 0;
    list-style: none;
`;
function Li({ style, children }) {
    return <StyledLi style={style}>{children}</StyledLi>;
}
export default Li;
