import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Container = styled.div`
    margin-top: 60px;
`;
export const Content = () => {
    return (
        <Container>
            <Button>Connect to MetaMask</Button>
        </Container>
    );
};
