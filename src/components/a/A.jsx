import styled from 'styled-components';

const StyledA = styled.a`
    text-decoration: none;
    color: black;
`;
function A({ href, children, style }) {
    return (
        <StyledA href={href} style={style}>
            {children}
        </StyledA>
    );
}
export default A;
