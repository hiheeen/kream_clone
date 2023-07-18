import styled from 'styled-components';

const Item = styled.div`
    text-align: center;
    display: inline-block;
    cursor: pointer;
`;

function SectionTopItem({ src, text }) {
    return (
        <div>
            <Item className="item">
                <div className="item_image_wrap" style={{ height: 100 }}>
                    <img
                        alt=""
                        src={src}
                        style={{
                            overFlow: 'hidden',
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgb(244, 244, 244)',
                            borderRadius: 9,
                        }}
                    ></img>
                </div>
                <p
                    className="item_title"
                    style={{
                        margin: '8px 0 0 0',
                        fontSize: 14,
                        letterSpacing: -0.15,
                        color: '#333',
                    }}
                >
                    {text}
                </p>
            </Item>
        </div>
    );
}
export default SectionTopItem;
