import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterTitle>Recipe Book</FooterTitle>
                <FooterDescription>
                Explore a diverse collection of delicious recipes with our recipe book. From mouth-watering appetizers to decadent desserts, discover culinary inspiration for every occasion. 
                </FooterDescription>
            </FooterContent>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    background-color: #333;
    color: white;
    padding: 20px 0;
`;

const FooterContent = styled.div`
    text-align: center;
`;

const FooterTitle = styled.h2`
    margin-bottom: 10px;
`;

const FooterDescription = styled.p`
    margin: 0 auto;
    max-width: 600px;
`;

export default Footer;
