import React from 'react';
import styled from 'styled-components';

const Header = styled.h6`
    border-radius: ${(props) => props.theme.borderRadius};
    color: ${(props) => props.theme.palette.primary.main};
    background-color: ${(props) => props.theme.palette.primary.light};
    padding: 8px 16px;
    width: fit-content;
`;
export const ConnectedAlert = () => {
    return <Header>You are Connected to Metamask!</Header>;
};
