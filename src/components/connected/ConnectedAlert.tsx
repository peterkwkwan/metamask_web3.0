import React from 'react';
import styled from 'styled-components';

const Header = styled.h6`
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.boxShadow};
    color: ${(props) => props.theme.palette.tertiary.main};
    background-color: ${(props) => props.theme.palette.tertiary.light};
    padding: 8px 16px;
    width: fit-content;
`;
export const ConnectedAlert = () => {
    return <Header>You are Connected to Metamask!</Header>;
};
