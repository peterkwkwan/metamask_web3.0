import React from 'react';
import { AuthorizedHeader } from 'src/components/authorized/AuthorizedHeader';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
`;

interface Props {
    accountAddress: string;
}

export const Authorized = ({ accountAddress }: Props) => {
    return (
        <Container>
            <AuthorizedHeader accountAddress={accountAddress} />
        </Container>
    );
};
