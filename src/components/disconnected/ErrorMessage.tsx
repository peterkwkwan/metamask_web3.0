import React from 'react';
import styled from 'styled-components';

interface Props {
    errorMessage: string;
}

const Message = styled.p`
    color: ${(props) => props.theme.palette.secondary.main};
`;
export const ErrorMessage = ({ errorMessage }: Props) => {
    return <Message>{errorMessage}</Message>;
};
