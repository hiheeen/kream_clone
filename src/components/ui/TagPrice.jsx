import styled from 'styled-components';
const Span = styled.span`
    margin-right: 3px;
    display: inline-block;
    vertical-align: top;
    line-height: 17px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.04px;
`;

function TagPrice({ text, style }) {
    return <Span style={style}>{text}</Span>;
}
export default TagPrice;
