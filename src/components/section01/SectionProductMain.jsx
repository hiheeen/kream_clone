import React, { useState } from 'react';
import SectionProduct from './SectionProduct';
import Product01 from '../img/product01.png';
import Product02 from '../img/product02.png';
import Product03 from '../img/product03.png';
import Product04 from '../img/product04.png';
import Product05 from '../img/product05.png';
import Product06 from '../img/product06.png';
import Product07 from '../img/product07.png';
import Product08 from '../img/product08.png';
import Product09 from '../img/product09.png';
import Product10 from '../img/product10.png';
import Product11 from '../img/product11.png';
import Product12 from '../img/product12.png';
import styled from 'styled-components';

const MainContainer = styled.div`
    margin-top: 30px;
    margin-bottom: 28px;
    padding-top: 0;
    padding-bottom: 0;
    &:before {
        content: '';
        max-width: 1200px;
        margin: 28px auto 20px;
        display: block;
        width: 100%;
        height: 1px;
        background: #ebebeb;
    }
`;
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-column-gap: 8px;
    grid-row-gap: 28px;
    padding: 0 45px;
`;
const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
    padding-left: 40px;
    padding-right: 40px;
`;
function SectionProductMain(props) {
    const [index, setIndex] = useState(0);
    const onClick = () => {
        setIndex((index) => index + 4);
    };

    const items = [
        {
            brandText: 'The Museum Visitor Washed Denim Ball Cap Dark Navy',
            brandTitle: 'The Museum Visitor',
            src: `${Product01}`,
            // downPriceStyle: '{{ `${color}`: "#f15746" }}',
            downPriceText: '10%',
            priceText: '67,500원',
            deliveryText: '무료배송',
            deliveryAddText: '적립',
            deliveryBackgroundColor: '#F4F4F4',
            deliveryColor: '#828B9D',
            deliveryAddDisplay: 'inline-flex',
            descText: '구매가',
        },
        {
            brandText: '(W) Nike Dunk Low LX Blue Suede',
            brandTitle: 'Nike',
            src: `${Product02}`,
            // downPriceStyle: "{{ display : 'none' }}",
            priceText: '145,000원',
            deliveryText: '빠른배송',
            deliveryBackgroundColor: 'rgb(242, 249, 246)',
            deliveryColor: 'rgb(49, 180, 110)',
            deliveryAddDisplay: 'none',
            productStyle: 'rgb(235, 240, 245)',
            descText: '즉시구매가',
        },
        {
            brandText: 'Crocs x Salehe Bembury Pollex Clog Horchata',
            brandTitle: 'Crocs',
            src: `${Product03}`,
            downPriceStyle: { display: 'none' },
            priceText: '145,000원',
            deliveryText: '빠른배송',
            deliveryBackgroundColor: 'rgb(242, 249, 246)',
            deliveryColor: 'rgb(49, 180, 110)',
            deliveryAddDisplay: 'none',
            productStyle: 'rgb(244, 244, 244)',
            descText: '즉시구매가',
        },
        {
            brandText: 'Nike Mac Attack QS SP Light Smoke Grey',
            brandTitle: ' Nike ',
            src: `${Product04}`,
            downPriceStyle: { display: 'none' },
            priceText: '146,000원',
            deliveryText: '빠른배송',
            deliveryBackgroundColor: 'rgb(242, 249, 246)',
            deliveryColor: 'rgb(49, 180, 110)',
            deliveryAddDisplay: 'none',
            productStyle: 'rgb(235, 240, 245)',
            descText: '즉시구매가',
        },
        {
            brandText: '(W) Adidas Gazelle Indoor Bliss Pink',
            brandTitle: ' Adidas ',
            src: `${Product05}`,
            downPriceStyle: { display: 'none' },
            priceText: '194,000원',
            deliveryText: '빠른배송',
            deliveryBackgroundColor: 'rgb(242, 249, 246)',
            deliveryColor: 'rgb(49, 180, 110)',
            deliveryAddDisplay: 'none',
            productStyle: 'rgb(241, 241, 234)',
            descText: '즉시구매가',
        },
        {
            brandText: 'Nos Couleurs Washed Film Jersey T-Shirt White',
            brandTitle: ' Nos Couleurs ',
            src: `${Product06}`,
            downPriceStyle: { display: 'none' },
            priceText: '150,000원',
            deliveryText: '빠른배송',
            deliveryBackgroundColor: 'rgb(242, 249, 246)',
            deliveryColor: 'rgb(49, 180, 110)',
            deliveryAddDisplay: 'none',
            productStyle: 'rgb(235, 240, 245)',
            descText: '즉시구매가',
        },
        {
            brandText: 'Nike x Jacquemus J Force 1 Low LX SP White',
            brandTitle: ' Nike ',
            src: `${Product07}`,
            downPriceStyle: { display: 'none' },
            priceText: '187,000원',
            deliveryText: '빠른배송',
            deliveryBackgroundColor: 'rgb(242, 249, 246)',
            deliveryColor: 'rgb(49, 180, 110)',
            deliveryAddDisplay: 'none',
            productStyle: 'rgb(235, 240, 245)',
            descText: '즉시구매가',
        },
        {
            brandText: 'Nike x Jacquemus J Force 1 Low LX SP Black',
            brandTitle: ' Nike ',
            src: `${Product08}`,
            downPriceStyle: { display: 'none' },
            priceText: '207,000원',
            deliveryText: '빠른배송',
            deliveryBackgroundColor: 'rgb(242, 249, 246)',
            deliveryColor: 'rgb(49, 180, 110)',
            deliveryAddDisplay: 'none',
            productStyle: 'rgb(235, 240, 245)',
            descText: '즉시구매가',
        },
        {
            brandText: 'Adidas Country OG Matte Silver Bright Blue',
            brandTitle: ' Adidas ',
            src: `${Product09}`,
            downPriceStyle: { display: 'none' },
            priceText: '164,000원',
            deliveryText: '빠른배송',
            deliveryBackgroundColor: 'rgb(242, 249, 246)',
            deliveryColor: 'rgb(49, 180, 110)',
            deliveryAddDisplay: 'none',
            productStyle: 'rgb(241, 241, 234)',
            descText: '즉시구매가',
        },
        {
            brandText: 'Ader Error Shopper Bag AirPods Pro Case Z-Blue',
            brandTitle: 'Ader Error',
            src: `${Product10}`,
            downPriceStyle: { display: 'none' },
            priceText: '82,000원',
            deliveryText: '빠른배송',
            deliveryBackgroundColor: 'rgb(244, 244, 244)',
            deliveryColor: 'rgb(49, 180, 110)',
            deliveryAddDisplay: 'none',
            productStyle: 'rgb(241, 241, 234)',
            descText: '즉시구매가',
        },
        {
            brandText: 'Nike Dunk Low PRM Head to Head',
            brandTitle: ' Nike ',
            src: `${Product11}`,
            downPriceStyle: { display: 'none' },
            priceText: '158,000원',
            deliveryText: '빠른배송',
            deliveryBackgroundColor: 'rgb(244, 244, 244)',
            deliveryColor: 'rgb(49, 180, 110)',
            deliveryAddDisplay: 'none',
            productStyle: 'rgb(235, 240, 245)',
            descText: '즉시구매가',
        },
        {
            brandText: 'Stussy Diced Out T-Shirt Black',
            brandTitle: ' Stussy ',
            src: `${Product12}`,
            downPriceStyle: { display: 'none' },
            priceText: '80,000원',
            deliveryText: '빠른배송',
            deliveryBackgroundColor: 'rgb(244, 244, 244)',
            deliveryColor: 'rgb(49, 180, 110)',
            deliveryAddDisplay: 'none',
            productStyle: 'rgb(244, 244, 244)',
            descText: '즉시구매가',
        },
    ];

    return (
        <MainContainer>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: 1200,
                    marginBottom: 16,
                    padding: '0 40px',
                }}
            >
                <div>
                    <div
                        style={{
                            fontSize: 17,
                            fontWeight: 700,
                            color: 'black',
                        }}
                    >
                        {' '}
                        Just Dropped{' '}
                    </div>
                    <div style={{ fontSize: 14, maxWidth: 230 }}>
                        {' '}
                        발매 상품{' '}
                    </div>
                </div>
            </div>
            <Container>
                <Wrapper>
                    {items.length > 4 &&
                        items
                            .map((item) => (
                                <SectionProduct
                                    brandText={item.brandText}
                                    brandTitle={item.brandTitle}
                                    src={item.src}
                                    downPriceText={item.downPriceText}
                                    priceText={item.priceText}
                                    deliveryText={item.deliveryText}
                                    deliveryAddText={item.deliveryAddText}
                                    deliveryBackgroundColor={
                                        item.deliveryBackgroundColor
                                    }
                                    productStyle={item.productStyle}
                                    deliveryColor={item.deliveryColor}
                                    deliveryAddDisplay={item.deliveryAddDisplay}
                                    descText={item.descText}
                                />
                            ))
                            .slice(0, index + 4)}
                </Wrapper>
                <div
                    style={{
                        padding: '0 32px',
                        textAlign: 'center',
                        maxWidth: 1280,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 20,
                        width: '803px',
                    }}
                >
                    <button
                        style={{
                            all: 'unset',
                            border: '1px solid #d3d3d3',
                            padding: '0 30px',
                            marginTop: '20px',
                            height: 42,
                            borderRadius: 12,
                            fontSize: 14,
                            letterSpacing: -0.14,
                            color: 'rgba(34,34,34,.8)',
                        }}
                        onClick={onClick}
                    >
                        더보기
                    </button>
                </div>
            </Container>
        </MainContainer>
    );
}
export default SectionProductMain;
