import styled from 'styled-components';
import TagDelivery from '../ui/TagDelivery';
import TagPrice from '../ui/TagPrice';
const ProductImg = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); // 가운데 정렬.. top left transform??
    display: flex;
`;

const ProductItem = styled.div`
    padding: 0;
    margin: 0;
    position: relative;
    display: inline-block;
    vertical-align: top;
    // width: 210.75px;
    width: 100%;

    // display: flex;
    // flex-direction: column;
`;
const BrandTitle = styled.p`
    display: inline-block;
    margin: 0;
    height: 17px;
    padding-bottom: 2px;
    font-size: 13px;
    font-weight: 700;
    vertical-align: top;
    white-space: nowrap;
    width: fit-content;
    max-width: 100%;
    color: black;
`;
const BrandText = styled.p`
    margin: 0;
    max-height: 44px;
    text-overflow: ellipsis;
    font-size: 13px;
`;
const Tags = styled.div`
    margin-top: 6px;
    height: 20px;
`;
function SectionProduct({
    brandText,
    brandTitle,
    src,
    downPriceStyle,
    downPriceText,
    priceText,
    deliveryText,

    deliveryAddText,
    deliveryColor,
    deliveryBackgroundColor,
    productStyle,
    deliveryAddDisplay,
    descText,
}) {
    return (
        <div>
            <div>
                <ProductItem className="product_item">
                    <a>
                        <div className="thumb_box">
                            <div
                                className="product"
                                style={{
                                    backgroundColor: productStyle,
                                    margin: 0,
                                    padding: 0,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    paddingTop: '100%',
                                    borderRadius: 8,
                                }}
                            >
                                <div className="product_inner_tag"></div>
                                <ProductImg className="product_img">
                                    <img
                                        style={{
                                            position: 'absolute',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        alt=""
                                        src={src}
                                    ></img>
                                </ProductImg>
                            </div>
                        </div>
                        <div
                            className="info_box"
                            style={{ margin: 0, padding: 0, paddingTop: 9 }}
                        >
                            <div className="brand" style={{ height: 19 }}>
                                <BrandTitle className="brand_title">
                                    {brandTitle}
                                </BrandTitle>
                            </div>
                            <BrandText className="brand_text">
                                {brandText}
                            </BrandText>
                            <Tags className="tags">
                                <TagDelivery
                                    text={deliveryAddText}
                                    display={deliveryAddDisplay}
                                    backgroundColor={deliveryBackgroundColor}
                                    color={deliveryColor}
                                />
                                <TagDelivery
                                    text={deliveryText}
                                    color={deliveryColor}
                                    backgroundColor={deliveryBackgroundColor}
                                    display="inline-flex"
                                />
                            </Tags>
                            <div className="price" style={{ paddingTop: 12 }}>
                                <div
                                    className="amount"
                                    style={{ lineHeight: 0, height: 17 }}
                                >
                                    <TagPrice
                                        style={downPriceStyle}
                                        text={downPriceText}
                                    />
                                    <TagPrice text={priceText} />
                                </div>
                                <div
                                    className="desc"
                                    style={{
                                        height: 13,
                                        fontSize: 11,
                                        color: 'rgba(34,34,34,.5)',
                                        margin: 0,
                                    }}
                                >
                                    <p style={{ margin: 0 }}>{descText}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </ProductItem>
            </div>
        </div>
    );
}
export default SectionProduct;
