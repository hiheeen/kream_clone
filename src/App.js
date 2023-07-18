// import React, { useState } from 'react';
import './App.css';

import SectionSlide from './components/section01/SectionSlide';
import Header from './section/Header';
import styled from 'styled-components';
import SectionCategory from './components/section01/SectionCategory';
import SectionProductMain from './components/section01/SectionProductMain';
import SectionTopBrand from './components/section01/SectionTopBrand';
// const AppContainer = styled.div``;
const AppWrapper = styled.div``;
function App() {
    return (
        <AppWrapper>
            <Header />
            <SectionSlide />
            <SectionCategory />
            <SectionProductMain />
            <SectionTopBrand />
        </AppWrapper>
    );
}

export default App;
