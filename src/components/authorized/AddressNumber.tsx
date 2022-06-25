import React from 'react';
import styled from 'styled-components';

interface Props {
    accountAddress: string;
}

const Container = styled.div`
    color: ${(props) => props.theme.palette.text.main};
`;

const Address = styled.h4`
    display: inline-block;
    color: ${(props) => props.theme.palette.text.light};
`;
export const AccountNumber = ({ accountAddress }: Props) => {
    return (
        <Container>
            Address: <Address>{accountAddress}</Address>
        </Container>
    );
};
