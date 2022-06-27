import React from 'react';
import styled from 'styled-components';

export enum VARIANT {
    PRIMARY,
    SECONDARY,
}

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: VARIANT;
}

export const Button = styled.button<IButtonProps>`
    color: ${(props) =>
        props.variant === VARIANT.PRIMARY
            ? props.theme.palette.primary.main
            : props.theme.palette.secondary.main};
    background-color: ${(props) =>
        props.variant === VARIANT.PRIMARY
            ? props.theme.palette.primary.light
            : props.theme.palette.secondary.light};
    border: none;
    padding: 8px 16px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: ${(props) => props.theme.boxShadow};
    border-radius: ${(props) => props.theme.borderRadius};
    display: flex;
    align-items: center;
`;
