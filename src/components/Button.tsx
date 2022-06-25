import React from 'react';
import styled from 'styled-components';

enum VARIANT {
    PRIMARY,
    SECONDARY,
}

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: VARIANT;
}

export const Button = styled.button<IButtonProps>`
    color: ${(props) => props.theme.palette.primary.main};
    background-color: ${(props) => props.theme.palette.primary.light};
    border: none;
    padding: 8px 16px;
    font-weight: 600;
    box-shadow: ${(props) => props.theme.boxShadow};
    border-radius: ${(props) => props.theme.borderRadius};
    &:after {
    }
`;
