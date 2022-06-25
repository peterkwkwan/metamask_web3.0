import React from 'react';
import styled from 'styled-components';
import { ReactComponent as FoxIcon } from '../assets/metamask-fox.svg';

const Navigation = styled.div`
    position: fixed;
    top: 0;
    height: 60px;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.palette.primary.main};
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.palette.primary.light};
    box-shadow: ${(props) => props.theme.boxShadow};
`;

const MetaFox = styled(FoxIcon)`
    padding-left: 20px;
    height: 54px;
`;

const Header = styled.h1`
    font-family: Helvetica;
    margin-left: 16px;
`;

export const Navbar = () => {
    return (
        <Navigation>
            <MetaFox />
            <Header>MetaMask</Header>
        </Navigation>
    );
};
