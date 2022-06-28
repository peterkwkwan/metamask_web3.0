import React from 'react';
import styled from 'styled-components';

const Header = styled.h6`
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.boxShadow};
    color: ${(props) => props.theme.palette.tertiary.main};
    background-color: ${(props) => props.theme.palette.tertiary.light};
    padding: 8px 16px;
    width: fit-content;
    @media only screen and (max-width: 768px) {
        font-size: 10px;
        padding: 4px 8px;
        width: 100px;
    }
`;
export const ConnectedAlert = () => {
    return <Header>You are Connected to Metamask!</Header>;
};
